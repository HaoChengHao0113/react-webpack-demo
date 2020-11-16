const proxys = require ('http-proxy-middleware');
const proxy = proxys.createProxyMiddleware;

module.exports = function(app) {
    app.use(proxy('/apc', {
    target: 'https://5b5e71c98e9f160014b88cc9.mockapi.io' ,
        secure: false,
        changeOrigin: true,
        pathRewrite: {
        "^/apc": "/"
    },
}));
    app.use(proxy('/musicapc', {
        target: 'https://api.uomg.com/' ,
        secure: false,
        changeOrigin: true,
        pathRewrite: {
            "^/musicapc": "/"
        },
    }));
};