var app;
(function (app) {
    /**
     *
     * @author
     */
    var GM = (function (_super) {
        __extends(GM, _super);
        function GM() {
            _super.call(this);
        }
        var __egretProto__ = GM.prototype;
        GM.getInstance = function () {
            if (!GM._instance) {
                GM._instance = new GM();
            }
            return GM._instance;
        };
        __egretProto__.override_setup_game_managers = function () {
            this.super_setupManager(app.LayerManager);
            this.super_setupManager(app.SetupManager);
        };
        Object.defineProperty(__egretProto__, "layer", {
            /**
            *图层管理器
            * */
            get: function () {
                var mgr;
                mgr = this.super_getManager(app.LayerManager);
                return mgr;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(__egretProto__, "setupMgr", {
            /**
            *插件setup管理器
            * */
            get: function () {
                var mgr;
                mgr = this.super_getManager(app.SetupManager);
                return mgr;
            },
            enumerable: true,
            configurable: true
        });
        return GM;
    })(pureEgret.Mgr);
    app.GM = GM;
    GM.prototype.__class__ = "app.GM";
})(app || (app = {}));
//# sourceMappingURL=GM.js.map