var app;
(function (app) {
    /**
     *
     * @author
     *
     */
    var Build = (function (_super) {
        __extends(Build, _super);
        function Build() {
            _super.call(this);
        }
        var __egretProto__ = Build.prototype;
        __egretProto__.override_registerPureMvcAndStart = function () {
            this.super_registerCommand(app.CMD.GET_BUILDS_INFO, app.GetBuidsInfoCMD);
            this.super_registerProxy(new app.BuildsInfoProxy);
            this.super_registerMediator(new app.BuildPopViewMediator());
            this.facade.sendNotification(app.CMD.GET_BUILDS_INFO);
        };
        return Build;
    })(pureEgret.Plugin);
    app.Build = Build;
    Build.prototype.__class__ = "app.Build";
})(app || (app = {}));
//# sourceMappingURL=Build.js.map