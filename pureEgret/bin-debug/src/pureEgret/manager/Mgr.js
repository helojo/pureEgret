var pureEgret;
(function (pureEgret) {
    /**
    * 1 继承该管理类，来setup自定义的管理类
    * 2 自定义的管理类，需要实现 implements pureEgret.IManager 接口
    * 3 在子类添加相应的 get方法。
    * 如：public get loader():pureEgret.LoaderManager
    *
    * 如：
    * 调用该方法setup管理类。this.super_setupManager(pureEgret.LoaderManager);
    *
    *
    * */
    var Mgr = (function () {
        function Mgr() {
            this._managers = {};
        }
        var __egretProto__ = Mgr.prototype;
        __egretProto__.setup = function (s, fa, theme, res, fps) {
            if (fps === void 0) { fps = 60; }
            this._stage = s;
            this._facade = fa;
            this.super_setupManager(pureEgret.LoaderManager);
            this.override_setup_game_managers();
            this.loaderMgr.setupGUI(theme, res);
        };
        __egretProto__.super_setupManager = function (managerClass) {
            var imgr = new managerClass();
            if (imgr) {
                if (!this._managers[managerClass + ""]) {
                    this._managers[managerClass + ""] = imgr;
                    imgr.setup(this._stage, this._facade);
                    console.log("[core] set up manager " + managerClass);
                }
                else {
                    throw Error("[core] error manager exist already -> " + managerClass);
                }
            }
        };
        /**
         * get manager by class
         */
        __egretProto__.super_getManager = function (managerClass) {
            var mgr;
            mgr = this._managers[managerClass + ""];
            return mgr;
        };
        /**
         * setup extensive managers
         */
        __egretProto__.override_setup_game_managers = function () {
            throw Error("请使用父类的super_setupManager(managerClass:Class)方法 扩展管理器！");
        };
        Object.defineProperty(__egretProto__, "loaderMgr", {
            /**
            *加载管理器
            * */
            get: function () {
                var ldr;
                ldr = this.super_getManager(pureEgret.LoaderManager);
                return ldr;
            },
            enumerable: true,
            configurable: true
        });
        return Mgr;
    })();
    pureEgret.Mgr = Mgr;
    Mgr.prototype.__class__ = "pureEgret.Mgr";
})(pureEgret || (pureEgret = {}));
//# sourceMappingURL=Mgr.js.map