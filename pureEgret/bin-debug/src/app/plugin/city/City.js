var app;
(function (app) {
    /**
     *
     * @author
     *
     */
    var City = (function (_super) {
        __extends(City, _super);
        function City() {
            _super.call(this, "city");
        }
        var __egretProto__ = City.prototype;
        __egretProto__.override_registerPureMvcAndStart = function () {
            this.super_registerCommand(app.CMD.GET_CITY_INFO, app.GetCityInfoCMD);
            this.super_registerCommand(app.CMD.SHOW_BUILD_POP, app.ShowBuildCMD);
            this.super_registerProxy(new app.CityInfoProxy());
            this.super_registerMediator(new app.CityViewMediator());
            this.facade.sendNotification(app.CMD.GET_CITY_INFO);
        };
        return City;
    })(pureEgret.Plugin);
    app.City = City;
    City.prototype.__class__ = "app.City";
})(app || (app = {}));
//# sourceMappingURL=City.js.map