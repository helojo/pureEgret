var app;
(function (app) {
    /**
     *
     * @author
     *
     */
    var BuildPopViewMediator = (function (_super) {
        __extends(BuildPopViewMediator, _super);
        function BuildPopViewMediator() {
            _super.call(this, "BuildPopViewMediator", new app.BuildPopView());
        }
        var __egretProto__ = BuildPopViewMediator.prototype;
        __egretProto__.listNotificationInterests = function () {
            return [app.CMD.ON_GET_BUILDS_INFO];
        };
        Object.defineProperty(__egretProto__, "ui", {
            get: function () {
                return this.getViewComponent();
            },
            enumerable: true,
            configurable: true
        });
        __egretProto__.handleNotification = function (notification) {
            var cmd = notification.getName();
            switch (cmd) {
                case app.CMD.ON_GET_BUILDS_INFO:
                    this.showInfo();
                    break;
            }
        };
        __egretProto__.showInfo = function () {
            var p = this.facade.retrieveProxy("BuildsInfoProxy");
            var msg = "建造数据返回：" + p.buildsInfoList;
            this.ui.txtInfo.text = msg;
        };
        __egretProto__.onRegister = function () {
            app.GM.getInstance().layer.guiLayer.addElement(this.ui);
            this.ui.btnClose.addEventListener(egret.TouchEvent.TOUCH_TAP, this.close, this);
        };
        __egretProto__.close = function (e) {
            app.GM.getInstance().loaderMgr.killPlugin(app.PLUGIN.BUILD);
        };
        __egretProto__.onRemove = function () {
            app.GM.getInstance().layer.guiLayer.removeElement(this.ui);
        };
        return BuildPopViewMediator;
    })(puremvc.Mediator);
    app.BuildPopViewMediator = BuildPopViewMediator;
    BuildPopViewMediator.prototype.__class__ = "app.BuildPopViewMediator";
})(app || (app = {}));
//# sourceMappingURL=BuildPopViewMediator.js.map