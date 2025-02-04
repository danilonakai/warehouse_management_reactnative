// StAuth10244: I Danilo Nakai & Armand Amores, 000886940 & 000315902 certify that this material is my original work. No other person's work has been used without due acknowledgement. I have not made my work available to anyone else.

const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./collection.db', (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the SQLite database.');
});

db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS items (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            description TEXT,
            quantity INTEGER,
            price REAL
        )
    `);
});

module.exports = db;
