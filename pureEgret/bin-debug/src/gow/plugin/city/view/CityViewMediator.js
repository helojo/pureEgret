var gow;
(function (gow) {
    /**
     *
     * @author
     *
     */
    var CityViewMediator = (function (_super) {
        __extends(CityViewMediator, _super);
        function CityViewMediator() {
            _super.call(this, "ShowcaseMediator", new gow.CityView());
        }
        var __egretProto__ = CityViewMediator.prototype;
        __egretProto__.listNotificationInterests = function () {
            return [];
        };
        __egretProto__.handleNotification = function (notification) {
        };
        Object.defineProperty(__egretProto__, "ui", {
            get: function () {
                return this.getViewComponent();
            },
            enumerable: true,
            configurable: true
        });
        __egretProto__.onRegister = function () {
            console.log("on register ");
            gow.GM.getInstance().layer.guiLayer.addElement(this.ui);
            this.ui.btnBuild.addEventListener(egret.TouchEvent.TOUCH_TAP, this.checkLog, this);
            this.ui.btnLeague.addEventListener(egret.TouchEvent.TOUCH_TAP, this.checkLog, this);
            this.ui.btnTroops.addEventListener(egret.TouchEvent.TOUCH_TAP, this.checkLog, this);
            this.ui.btnWorld.addEventListener(egret.TouchEvent.TOUCH_TAP, this.checkLog, this);
        };
        __egretProto__.checkLog = function (e) {
            var btn = e.currentTarget;
            if (btn) {
                this.log(btn.label);
                this.facade.sendNotification(gow.CMD.SHOW_BUILD_POP);
            }
        };
        __egretProto__.log = function (msg) {
            this.ui.txtLog.text += "[log] " + msg + "\n";
        };
        __egretProto__.onRemove = function () {
        };
        return CityViewMediator;
    })(puremvc.Mediator);
    gow.CityViewMediator = CityViewMediator;
    CityViewMediator.prototype.__class__ = "gow.CityViewMediator";
})(gow || (gow = {}));
//# sourceMappingURL=CityViewMediator.js.map