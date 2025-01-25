"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomCheckMiddleweare = void 0;
class randomCheckMiddleweare {
    use(req, res, next) {
        const number = Math.round(Math.random() * 2);
        if (number % 2 == 1)
            return res.json({ message: 'request not allowed' });
        next();
    }
}
exports.randomCheckMiddleweare = randomCheckMiddleweare;
//# sourceMappingURL=randomCheck.middlewear.js.map