var app;
(function (app) {
    /**
     *
     * @author
     *
     */
    var CityPlugin = (function (_super) {
        __extends(CityPlugin, _super);
        function CityPlugin() {
            _super.call(this, "city");
        }
        var __egretProto__ = CityPlugin.prototype;
        __egretProto__.override_registerPureMvcAndStart = function () {
            this.super_registerMediator(new app.CityViewMediator());
        };
        return CityPlugin;
    })(pureEgret.Plugin);
    app.CityPlugin = CityPlugin;
    CityPlugin.prototype.__class__ = "app.CityPlugin";
})(app || (app = {}));
//# sourceMappingURL=CityPlugin.js.map