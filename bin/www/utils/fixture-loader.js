"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path = __importStar(require("path"));
const dist_1 = require("typeorm-fixtures-cli/dist");
const typeorm_1 = require("typeorm");
const create_type_orm_connection_1 = __importDefault(require("./create-type-orm-connection"));
const loadFixtures = async (fixturesPath) => {
    let connection;
    try {
        connection = await (0, create_type_orm_connection_1.default)();
        await connection.synchronize(true);
        const loader = new dist_1.Loader();
        loader.load(path.resolve(fixturesPath));
        const resolver = new dist_1.Resolver();
        const fixtures = resolver.resolve(loader.fixtureConfigs);
        const builder = new dist_1.Builder(connection, new dist_1.Parser());
        for (const fixture of (0, dist_1.fixturesIterator)(fixtures)) {
            const entity = await builder.build(fixture);
            // @ts-ignore
            await (0, typeorm_1.getRepository)(entity.constructor.name).save(entity);
        }
        return connection;
    }
    catch (err) {
        throw err;
    }
};
exports.default = loadFixtures;
