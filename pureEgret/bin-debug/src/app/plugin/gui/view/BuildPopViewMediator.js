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
            return [app.CMD.SHOW_BUILD_POP];
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
                case app.CMD.SHOW_BUILD_POP:
                    app.GM.getInstance().layer.guiLayer.addElement(this.ui);
                    this.ui.btnClose.addEventListener(egret.TouchEvent.TOUCH_TAP, this.close, this);
                    break;
            }
        };
        __egretProto__.onRegister = function () {
        };
        __egretProto__.close = function (e) {
            app.GM.getInstance().layer.guiLayer.removeElement(this.ui);
        };
        __egretProto__.onRemove = function () {
        };
        return BuildPopViewMediator;
    })(puremvc.Mediator);
    app.BuildPopViewMediator = BuildPopViewMediator;
    BuildPopViewMediator.prototype.__class__ = "app.BuildPopViewMediator";
})(app || (app = {}));
//# sourceMappingURL=BuildPopViewMediator.js.map