const { Router } = require('express');
const webhookRoutes = require('./webhook.routes');
const routes = Router();


routes.use("/webhook", webhookRoutes);

module.exports = routes;