var gow;
(function (gow) {
    /**
     *
     * @author
     *
     */
    var PluginCity = (function (_super) {
        __extends(PluginCity, _super);
        function PluginCity() {
            _super.call(this, "");
        }
        var __egretProto__ = PluginCity.prototype;
        __egretProto__.override_registerPureMvcAndStart = function () {
            this.super_registerMediator(new gow.CityViewMediator());
            this.super_registerMediator(new gow.BuildPopViewMediator());
        };
        return PluginCity;
    })(pureEgret.Plugin);
    gow.PluginCity = PluginCity;
    PluginCity.prototype.__class__ = "gow.PluginCity";
})(gow || (gow = {}));
//# sourceMappingURL=PluginCity.js.map