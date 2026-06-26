const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;
const DB_PATH = path.join(__dirname, 'data', 'database.json');

app.use(cors());
app.use(express.json());

// Melayani file statis dari folder saat ini
app.use(express.static(__dirname));

// Fungsi utilitas untuk membaca DB
const readDB = () => {
    if (!fs.existsSync(DB_PATH)) {
        return { users: [], history: [], wishlists: {} };
    }
    const data = fs.readFileSync(DB_PATH, 'utf8');
    return JSON.parse(data);
};

// Fungsi utilitas untuk menulis DB
const writeDB = (data) => {
    fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
};

// Endpoint API

// --- USERS ---
app.get('/api/users', (req, res) => {
    const db = readDB();
    res.json(db.users);
});

app.post('/api/register', (req, res) => {
    const { name, email, password, skinType } = req.body;
    const db = readDB();
    
    if (db.users.find(u => u.email === email)) {
        return res.status(400).json({ message: 'Email sudah terdaftar' });
    }
    
    const newUser = {
        id: 'user-' + Date.now(),
        name,
        email,
        password,
        role: 'customer',
        skinType: skinType || null,
        avatar: '🌸',
        joinDate: new Date().toISOString()
    };
    
    db.users.push(newUser);
    writeDB(db);
    
    res.json(newUser);
});

app.post('/api/login', (req, res) => {
    const { email, password } = req.body;
    const db = readDB();
    const user = db.users.find(u => u.email === email && u.password === password);
    
    if (user) {
        res.json(user);
    } else {
        res.status(401).json({ message: 'Email atau password salah' });
    }
});

app.put('/api/users/:id', (req, res) => {
    const id = req.params.id;
    const updates = req.body;
    const db = readDB();
    const userIndex = db.users.findIndex(u => u.id === id);
    
    if (userIndex !== -1) {
        db.users[userIndex] = { ...db.users[userIndex], ...updates };
        writeDB(db);
        res.json(db.users[userIndex]);
    } else {
        res.status(404).json({ message: 'User tidak ditemukan' });
    }
});

app.delete('/api/users/:id', (req, res) => {
    const id = req.params.id;
    const db = readDB();
    const newUsers = db.users.filter(u => u.id !== id);
    
    if (newUsers.length !== db.users.length) {
        db.users = newUsers;
        writeDB(db);
        res.json({ success: true });
    } else {
        res.status(404).json({ message: 'User tidak ditemukan' });
    }
});

// --- WISHLIST ---
app.get('/api/wishlist/:userId', (req, res) => {
    const db = readDB();
    const wishlist = db.wishlists[req.params.userId] || [];
    res.json(wishlist);
});

app.post('/api/wishlist/:userId', (req, res) => {
    const { productId } = req.body;
    const userId = req.params.userId;
    const db = readDB();
    
    if (!db.wishlists[userId]) db.wishlists[userId] = [];
    
    const list = db.wishlists[userId];
    if (!list.includes(productId)) {
        list.push(productId);
    } else {
        // Toggle (remove)
        db.wishlists[userId] = list.filter(id => id !== productId);
    }
    
    writeDB(db);
    res.json(db.wishlists[userId]);
});

// --- HISTORY ---
app.get('/api/history', (req, res) => {
    const db = readDB();
    res.json(db.history);
});

app.post('/api/history', (req, res) => {
    const entry = req.body;
    const db = readDB();
    
    const newEntry = {
        ...entry,
        id: Date.now(),
        date: new Date().toISOString()
    };
    
    db.history.unshift(newEntry);
    db.history = db.history.slice(0, 20); // Simpan 20 terakhir
    
    writeDB(db);
    res.json(db.history);
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});
