const knex = require('../database');
const stripe = require('stripe')(process.env.PUBLIC_KEY);

class WebhookController {
    async webhook(request, response) {
        const sig = request.headers['stripe-signature'];

        const endpointSecret = process.env.END_POINT_SECURITY;
        let event;

        try {

            event = stripe.webhooks.constructEvent(request.body, sig, endpointSecret);
        } catch (err) {
            console.log(err);
            response.status(400).send(`Webhook Error: ${err.message}`);
            return;
        }
        switch (event.type) {
            default:
                console.log(`Unhandled event type ${event.type}`);
        }

        response.send();
    }
}

module.exports = WebhookController;
