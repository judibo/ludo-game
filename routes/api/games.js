const express = require('express');
const router = express.Router();
const gamesCtrl = require('../../controllers/games');

router.post('/', checkAuth);

function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'Not Authenticated'});
}

module.exports = router;