"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WelcomeUser = void 0;
const react_1 = __importDefault(require("react"));
const react_router_1 = require("react-router");
const NextDeliveryService_1 = require("../services/NextDeliveryService");
const WelcomeUser = () => {
    const { userId } = (0, react_router_1.useParams)();
    if (!userId) {
        return react_1.default.createElement(react_1.default.Fragment, null, "User Not found");
    }
    const nextDelivery = (0, NextDeliveryService_1.getNextDelivery)(userId);
    return (react_1.default.createElement("p", null, userId));
};
exports.WelcomeUser = WelcomeUser;
//# sourceMappingURL=WelcomeUser.js.map