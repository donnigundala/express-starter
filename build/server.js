"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("module-alias/register");
const app_1 = __importDefault(require("./src/app"));
app_1.default.listen(3000, () => {
    console.log('server start');
});
//# sourceMappingURL=server.js.map