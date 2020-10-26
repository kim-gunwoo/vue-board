const express = require("express");
const router = express.Router();
const auth = require("./Auth");
const board = require("../api/board");

router.post("/", auth.ensureAuth(), board.create);
router.get("/", auth.ensureAuth(), board.findAll);
router.get("/:bsid", auth.ensureAuth(), board.find);
router.put("/:bsid", auth.ensureAuth(), board.update);
router.delete("/:bsid", auth.ensureAuth(), board.destroy);

module.exports = router;
