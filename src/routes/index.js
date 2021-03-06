let express = require('express');
let router = express.Router();
let controller = require('../controllers/indexController.js');

router.get('/', controller.index);
router.get('/mrx', controller.mrx);
router.get('/contacto', controller.contact);
router.get('/eventos', controller.events);
router.get('/miembros', controller.members);
router.get('/miembros/:member', controller.member);

module.exports = router;