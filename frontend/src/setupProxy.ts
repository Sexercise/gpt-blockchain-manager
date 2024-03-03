import {createProxyMiddleware}  from 'http-proxy-middleware';
const proxy = {
    target: 'http://authentification:3001',
    changeOrigin: false,
    secu