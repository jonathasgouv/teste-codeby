import express from 'express';
const router = express.Router();

//Import Controller
import MailController from '../controllers/MailController'

/// MAIL ROUTES ///

// POST request to send new email with products.
router.post("/", MailController.post);

module.exports = router;