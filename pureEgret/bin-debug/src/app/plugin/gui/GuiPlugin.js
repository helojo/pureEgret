var app;
(function (app) {
    /**
     *
     * @author
     *
     */
    var GuiPlugin = (function (_super) {
        __extends(GuiPlugin, _super);
        function GuiPlugin() {
            _super.call(this);
        }
        var __egretProto__ = GuiPlugin.prototype;
        __egretProto__.override_registerPureMvcAndStart = function () {
            this.super_registerMediator(new app.BuildPopViewMediator());
        };
        return GuiPlugin;
    })(pureEgret.Plugin);
    app.GuiPlugin = GuiPlugin;
    GuiPlugin.prototype.__class__ = "app.GuiPlugin";
})(app || (app = {}));
//# sourceMappingURL=GuiPlugin.js.map