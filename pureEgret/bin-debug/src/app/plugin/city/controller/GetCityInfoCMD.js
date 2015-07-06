var app;
(function (app) {
    /**
     *
     * @author
     *
     */
    var GetCityInfoCMD = (function (_super) {
        __extends(GetCityInfoCMD, _super);
        function GetCityInfoCMD() {
            _super.call(this);
        }
        var __egretProto__ = GetCityInfoCMD.prototype;
        __egretProto__.execute = function (notification) {
            var cp = this.facade.retrieveProxy("CityInfoProxy");
            if (cp) {
                cp.getCityInfo();
            }
        };
        return GetCityInfoCMD;
    })(puremvc.SimpleCommand);
    app.GetCityInfoCMD = GetCityInfoCMD;
    GetCityInfoCMD.prototype.__class__ = "app.GetCityInfoCMD";
})(app || (app = {}));
//# sourceMappingURL=GetCityInfoCMD.js.map