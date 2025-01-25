const express = require("express");
const router = express.Router();

const verifyToken = require("../middlewares/authMiddleware");
const authorizeRoles = require("../middlewares/roleMiddlewares");

router.get("/admin", verifyToken, authorizeRoles("admin"), (req, res) => {
    res.send("Admin Route");
});

router.get("/user", verifyToken, authorizeRoles("admin", "user"), (req, res) => {
    res.send("User Route");
});

module.exports = router;