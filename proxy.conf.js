const PROXY_CONFIG = [
    {
      context: ['/api'],
      target: 'https://api.binance.com',
      secure: true,
      logLevel: 'debug',
      changeOrigin: true
    }
];
  
module.exports = PROXY_CONFIG;
  