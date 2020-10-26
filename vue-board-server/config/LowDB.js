const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("config/data/db.json");
const db = low(adapter);

//db.defaults({ users: [], boards: [] }).write();

module.exports = db;
