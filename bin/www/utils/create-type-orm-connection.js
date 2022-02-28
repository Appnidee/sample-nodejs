"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
exports.default = async () => {
    const connectionOptions = await (0, typeorm_1.getConnectionOptions)(process.env.NODE_ENV);
    console.log("database connected " + process.env.NODE_ENV);
    console.log({ ...connectionOptions });
    return (0, typeorm_1.createConnection)({ ...connectionOptions, name: 'default' });
};
