'use strict';

module.exports.hello = async (event) => {
    return {
        statusCode: 200,
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            message: "Hello World from GitHub Actions!!!!!!",
            requestId: event.requestContext?.requestId || null,
            timestamp: new Date().toISOString()
        })
    };
};