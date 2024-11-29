"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNextDelivery = void 0;
const react_query_1 = require("react-query");
const getNextDelivery = async (userId) => {
    (0, react_query_1.useQuery)({
        queryKey: ['getNextDelivery'],
        queryFn: async () => {
            const res = await fetch(`localhost:2000/comms/your-next-delivery/${userId}`);
            return res.json();
        }
    });
};
exports.getNextDelivery = getNextDelivery;
//# sourceMappingURL=NextDeliveryService.js.map