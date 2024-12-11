# Express.js JSON Body Parsing Issue

This repository demonstrates a common issue in Express.js applications where the body-parser fails to handle large JSON payloads, leading to an empty `req.body`.  This example shows the problem and its solution.

## Problem

When a large JSON payload is sent to an Express.js application using `express.json()`, the request body might be truncated or completely missing if the default body-parser limit is exceeded.  This often results in unexpected behavior or errors.

## Solution

The solution involves adjusting the body-parser's `limit` option to accommodate larger JSON payloads.

## How to reproduce the bug
1. Clone this repository.
2. Run `npm install` to install the dependencies.
3. Run `node bug.js` to start the server.
4. Send a large JSON payload to the `/data` endpoint using a tool like Postman or curl. Observe that `req.body` is empty or incomplete.

## How to fix the bug
1. Modify `bug.js` to include the updated `limit` setting (see `bugSolution.js`).
2. Re-run the server.
3. Send the large JSON payload again; this time `req.body` will contain the complete data.

## Related Issues
* [Express.js documentation on body-parser](https://expressjs.com/en/api.html#express.json)