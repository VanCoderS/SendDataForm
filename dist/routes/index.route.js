"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.route = void 0;
const send_data_route_1 = require("./send-data.route");
const route = (app) => {
    app.use('/send-data', send_data_route_1.routerSendData);
};
exports.route = route;
