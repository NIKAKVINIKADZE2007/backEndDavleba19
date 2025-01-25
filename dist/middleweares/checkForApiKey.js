"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkForApiKey = void 0;
class checkForApiKey {
    use(req, res, next) {
        const key = req.headers['apikey'];
        console.log(key);
        if (!key)
            return res.json({ message: 'permition denied' });
        next();
    }
}
exports.checkForApiKey = checkForApiKey;
//# sourceMappingURL=checkForApiKey.js.map