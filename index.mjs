// server.js or index.js (entry point for your server)

import express from 'express';

const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', async (request, response) => {
    const result = {
        code: 200,
        status: "ok",
        message: "Express Server Is Running"
    };
    response.send(result);
});

export default app; // Export your Express app instance
