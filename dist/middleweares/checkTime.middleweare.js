"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkTimeMiddlewear = void 0;
class checkTimeMiddlewear {
    use(req, res, next) {
        const time = new Date().getHours();
        if (time > 18 || time < 10) {
            return res.json({
                message: 'not allowed at this time try from 10 to 18oclock',
            });
        }
        next();
    }
}
exports.checkTimeMiddlewear = checkTimeMiddlewear;
//# sourceMappingURL=checkTime.middleweare.js.map