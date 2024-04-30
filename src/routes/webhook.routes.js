const { Router } = require('express');

const WebhookController = require('../controllers/WebhookController');

const webhookRoutes = Router();
const webhookController = new WebhookController();

webhookRoutes.post('/', webhookController.webhook);

module.exports = webhookRoutes;