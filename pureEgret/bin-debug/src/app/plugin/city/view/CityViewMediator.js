var app;
(function (app) {
    /**
     *
     * @author
     *
     */
    var CityViewMediator = (function (_super) {
        __extends(CityViewMediator, _super);
        function CityViewMediator() {
            _super.call(this, "CityViewMediator");
        }
        var __egretProto__ = CityViewMediator.prototype;
        __egretProto__.listNotificationInterests = function () {
            return [app.CMD.ON_GET_CITY_INFO];
        };
        __egretProto__.handleNotification = function (notification) {
            var cmd = notification.getName();
            switch (cmd) {
                case app.CMD.ON_GET_CITY_INFO:
                    this.showCityInfo();
                    break;
            }
        };
        __egretProto__.showCityInfo = function () {
            var cp = this.facade.retrieveProxy("CityInfoProxy");
            if (cp) {
                this._btns.txtCityInfo.text = "" + cp.cityInfo;
            }
        };
        __egretProto__.onRegister = function () {
            this._ui = new app.CityView2();
            this._btns = new app.CityView();
            console.log("on register ");
            app.GM.getInstance().layer.sceneLayer.addChild(this._ui);
            app.GM.getInstance().layer.guiLayer.addElement(this._btns);
            this._btns.btnBuild.addEventListener(egret.TouchEvent.TOUCH_TAP, this.popup, this);
            this._btns.btnLeague.addEventListener(egret.TouchEvent.TOUCH_TAP, this.popup, this);
            this._btns.btnTroops.addEventListener(egret.TouchEvent.TOUCH_TAP, this.popup, this);
        };
        __egretProto__.popup = function (e) {
            var btn = e.currentTarget;
            if (btn) {
                this._btns.txtCityInfo.text = "" + btn.label;
                switch (btn.label) {
                    case "建造":
                        this.facade.sendNotification(app.CMD.SHOW_BUILD_POP);
                        break;
                }
            }
        };
        __egretProto__.onRemove = function () {
        };
        return CityViewMediator;
    })(puremvc.Mediator);
    app.CityViewMediator = CityViewMediator;
    CityViewMediator.prototype.__class__ = "app.CityViewMediator";
})(app || (app = {}));
//# sourceMappingURL=CityViewMediator.js.map