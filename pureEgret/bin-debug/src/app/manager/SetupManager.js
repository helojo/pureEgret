var app;
(function (app) {
    /**
     *
     * @author
     * 只负责注册各个插件
     */
    var SetupManager = (function () {
        function SetupManager() {
        }
        var __egretProto__ = SetupManager.prototype;
        __egretProto__.setup = function (s, fa) {
        };
        /**
        *注册所有的插件
        * */
        __egretProto__.setupPlugins = function () {
            app.GM.getInstance().loaderMgr.registerPlugin(app.PLUGIN.CITY, app.City);
            app.GM.getInstance().loaderMgr.registerPlugin(app.PLUGIN.BUILD, app.Build);
        };
        __egretProto__.start = function () {
            //加载plugin 
            app.GM.getInstance().loaderMgr.addPlugin(app.PLUGIN.CITY, "hello city!");
            app.GM.getInstance().loaderMgr.startLoad();
        };
        return SetupManager;
    })();
    app.SetupManager = SetupManager;
    SetupManager.prototype.__class__ = "app.SetupManager";
})(app || (app = {}));
//# sourceMappingURL=SetupManager.js.map