var app;
(function (app) {
    /**
     *
     * @author
     *
     */
    var CityInfoProxy = (function (_super) {
        __extends(CityInfoProxy, _super);
        function CityInfoProxy() {
            _super.call(this, "CityInfoProxy");
        }
        var __egretProto__ = CityInfoProxy.prototype;
        __egretProto__.onRegister = function () {
        };
        __egretProto__.onRemove = function () {
        };
        __egretProto__.getCityInfo = function () {
            //假设获得了数据，就发送通知。
            this.facade.sendNotification(app.CMD.ON_GET_CITY_INFO);
        };
        Object.defineProperty(__egretProto__, "cityInfo", {
            get: function () {
                return "主城信息！";
            },
            enumerable: true,
            configurable: true
        });
        return CityInfoProxy;
    })(puremvc.Proxy);
    app.CityInfoProxy = CityInfoProxy;
    CityInfoProxy.prototype.__class__ = "app.CityInfoProxy";
})(app || (app = {}));
//# sourceMappingURL=CityInfoProxy.js.map