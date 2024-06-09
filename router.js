const routes = require('./routes');
const { Router } = require('express');
const middleware = require('express-goodies/middleware');
const { Netopia } = require('netopia-card');
const { confirmOrder } = require('./functions');

const router = Router();
module.exports = router;

// Use express context
router.use(middleware.httpContext);

// Use speed limiter for all requests
router.use(middleware.speedLimiter);

// Protect all non-public routes
router.all('/admin', middleware.authenticate);
router.all('/admin/*', middleware.authenticate);

// Useful middleware for testing
router.use(middleware.testError);
router.use(middleware.testLoading);

// Use the router instances defined
router.use(routes.identity);
router.use(routes.ticket);
router.use(routes.visitor);

const netopia = new Netopia();
router.use(...netopia.createNotifyRoute(confirmOrder));

// Matches any other HTTP method and route not matched before
router.all('*', middleware.notFound);

// Finally, an error handler
router.use(middleware.errorHandler);
