"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendDataPost = exports.sendDataGet = void 0;
const sendDataGet = (req, res) => {
    res.render('send-data-get', {
        pageTitle: 'SendDataGet',
        query: JSON.stringify(req.query),
    });
};
exports.sendDataGet = sendDataGet;
const sendDataPost = (req, res) => {
    res.render('send-data-post', {
        pageTitle: 'SendDataPost',
        body: JSON.stringify(req.body),
    });
};
exports.sendDataPost = sendDataPost;
