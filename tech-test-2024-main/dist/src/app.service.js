"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const data_json_1 = __importDefault(require("../data.json"));
const stringFormattingUtils_1 = require("./utils/stringFormattingUtils");
let AppService = class AppService {
    getHello() {
        return 'Hello World!?';
    }
    getNextDelivery(userId) {
        const userData = data_json_1.default.find(user => user.id === userId);
        if (!userData) {
            throw new Error("No user data");
        }
        const catsFormatted = (0, stringFormattingUtils_1.getFormattedCatsString)(userData.cats);
        const title = `Your next delivery for ${catsFormatted}`;
        const message = `Hey ${userData.firstName}! In two days' time, we'll be charging you for your next order for ${catsFormatted}'s fresh food.`;
        const pouchSizeToPriceMap = {
            "A": 55.50,
            "B": 59.50,
            "C": 62.75,
            "D": 66.00,
            "E": 69.00,
            "F": 71.25,
        };
        let totalPrice = 0;
        userData.cats.forEach(cat => {
            if (cat.subscriptionActive) {
                totalPrice += pouchSizeToPriceMap[cat.pouchSize];
            }
        });
        const freeGift = totalPrice > 120 ? true : false;
        return { title: title, message: message, totalPrice: Number(totalPrice.toFixed(2)), freeGift: freeGift };
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
//# sourceMappingURL=app.service.js.map