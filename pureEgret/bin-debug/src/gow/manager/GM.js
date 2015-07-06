var gow;
(function (gow) {
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
            this.super_setupManager(gow.LayerManager);
        };
        Object.defineProperty(__egretProto__, "layer", {
            /**
            *图层管理器
            * */
            get: function () {
                var l;
                l = this.super_getManager(gow.LayerManager);
                return l;
            },
            enumerable: true,
            configurable: true
        });
        return GM;
    })(pureEgret.Mgr);
    gow.GM = GM;
    GM.prototype.__class__ = "gow.GM";
})(gow || (gow = {}));
//# sourceMappingURL=GM.js.map