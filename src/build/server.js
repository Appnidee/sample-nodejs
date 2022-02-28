"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
//import config from 'config';
//import routes from './routes';
//import morgan from 'morgan';
var helmet_1 = __importDefault(require("helmet"));
//import { routesUtility } from './utils/routes-util';
var fs = require("fs");
var Server = /** @class */ (function () {
    function Server() {
        this.app = express_1.default(); // init the application
        this.app.use(helmet_1.default());
        this.app.disable('x-powered-by');
        this.configuration();
        this.routes();
    }
    /**
     * Method to configure the server,
     * If we didn't configure the port into the environment
     * variables it takes the default port 3000
     */
    Server.prototype.configuration = function () {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(express_1.default.json());
        // this.app.use('/api', routes);
    };
    /**
     * Method to configure the routes
     */
    Server.prototype.routes = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                //     await createConnection({
                //       type: "postgres",
                //       host: "localhost",
                //       port: 5434,
                //       username: "blog",
                //       password: "blog",
                //       database: "blog",
                //       entities: ["build/database/entities/**/*.js"],
                //       synchronize: true,
                //       name: "blog"
                //     });
                this.app.get("/api/post", function (req, res) {
                    console.log("hello post");
                    res.send("This is a post!");
                });
                this.app.get("/", function (req, res) {
                    console.log("hello. Server is listening " + _this.app.get('port') + " port. voor me" + process.env.NODE_ENV);
                    res.send("Hello world! " + process.env.NODE_ENV);
                });
                return [2 /*return*/];
            });
        });
    };
    /**
     * Used to start the server
     */
    Server.prototype.start = function () {
        var _this = this;
        this.app.listen(this.app.get('port'), function () {
            console.log("Server is listeningfor " + _this.app.get('port') + " port." + process.env.NODE_ENV);
        });
    };
    return Server;
}());
var server = new Server(); // Create server instance
server.start(); // Execute the server
