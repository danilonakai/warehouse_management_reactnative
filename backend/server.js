const express = require('express');
const bodyParser = require('body-parser');
const db = require('./database');

const app = express();
app.use(bodyParser.json());

const PORT = 3001;

// GET: Retrieve the entire collection
app.get('/api', (req, res) => {
    db.all('SELECT * FROM items', [], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(rows);
    });
});

// POST: Add a new item
app.post('/api', (req, res) => {
    const { name, description, quantity, price } = req.body;
    db.run(
        'INSERT INTO items (name, description, quantity, price) VALUES (?, ?, ?, ?)',
        [name, description, quantity, price],
        function (err) {
            if (err) return res.status(500).json({ error: err.message });
            res.json({ status: 'CREATE ENTRY SUCCESSFUL', id: this.lastID });
        }
    );
});

// PUT: Update a specific item by ID
app.put('/api/:id', (req, res) => {
    const { name, description, quantity, price } = req.body;
    db.run(
        'UPDATE items SET name = ?, description = ?, quantity = ?, price = ? WHERE id = ?',
        [name, description, quantity, price, req.params.id],
        (err) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json({ status: 'UPDATE ITEM SUCCESSFUL' });
        }
    );
});

// DELETE: Delete a specific item by ID
app.delete('/api/:id', (req, res) => {
    db.run('DELETE FROM items WHERE id = ?', [req.params.id], (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ status: 'DELETE ITEM SUCCESSFUL' });
    });
});

// DELETE: Delete the entire collection
app.delete('/api', (req, res) => {
    db.run('DELETE FROM items', [], (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ status: 'DELETE COLLECTION SUCCESSFUL' });
    });
});

// PUT: Replace the entire collection
app.put('/api', (req, res) => {
    const { items } = req.body;
    db.serialize(() => {
        db.run('DELETE FROM items', [], (err) => {
            if (err) return res.status(500).json({ error: err.message });
        });
        const stmt = db.prepare('INSERT INTO items (id, name, description, quantity, price) VALUES (?, ?, ?, ?, ?)');
        items.forEach((item) => {
            stmt.run(item.id, item.name, item.description, item.quantity, item.price);
        });
        stmt.finalize();
    });
    res.json({ status: 'REPLACE COLLECTION SUCCESSFUL' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
