const express = require('express');
const router = express.Router();
const indexController = require('../controllers/IndexController');

// Route definitions for each page
router.get('/', (req, res) => res.render('index'));
router.get('/beliefs', (req, res) => res.render('beliefs'));
router.get('/resources', (req, res) => res.render('resources'));
router.get('/blog', (req, res) => res.render('blog'));
router.get('/contact', (req, res) => res.render('contact'));
router.post('/send-email', indexController.postSendMail);
router.get('/about', (req, res) => res.render('about'));
router.get('/privacy-policy', (req, res) => res.render('privacy_policy'));
router.get('/terms-of-use', (req, res) => res.render('terms_of_use'));
router.get('/copyright', (req, res) => res.render('copyright'));

module.exports = router;
