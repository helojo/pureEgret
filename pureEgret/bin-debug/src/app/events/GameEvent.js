var app;
(function (app) {
    var GameEvent = (function (_super) {
        __extends(GameEvent, _super);
        function GameEvent(type) {
            _super.call(this, type);
        }
        var __egretProto__ = GameEvent.prototype;
        GameEvent.ON_CONNECT = "on_connect";
        GameEvent.ON_LOGIN = "on_login";
        return GameEvent;
    })(egret.Event);
    app.GameEvent = GameEvent;
    GameEvent.prototype.__class__ = "app.GameEvent";
})(app || (app = {}));
//# sourceMappingURL=GameEvent.js.map