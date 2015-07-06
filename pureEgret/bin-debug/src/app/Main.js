var app;
(function (app) {
    var Main = (function (_super) {
        __extends(Main, _super);
        function Main() {
            _super.call(this);
        }
        var __egretProto__ = Main.prototype;
        __egretProto__.override_setupManagers = function () {
            var theme = "resource/theme.thm";
            var res = "resource/resource.json";
            app.GM.getInstance().setup(this.stage, this.facade, theme, res);
        };
        __egretProto__.override_Start = function () {
            this.loadingView = new LoadingUI();
            this.stage.addChild(this.loadingView);
            app.GM.getInstance().loader.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            app.GM.getInstance().loader.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
            app.GM.getInstance().loader.loadResGroup("preload");
        };
        /**
        * 资源组加载完成
        */
        __egretProto__.onResourceLoadComplete = function (event) {
            if (event.groupName == "preload") {
                this.createScene();
            }
            if (this.loadingView.parent) {
                this.stage.removeChild(this.loadingView);
            }
        };
        /**
        * 资源组加载进度
        */
        __egretProto__.onResourceProgress = function (event) {
            if (this.loadingView.parent == null) {
                this.stage.addChild(this.loadingView);
            }
            this.loadingView.setProgress(event.itemsLoaded, event.itemsTotal);
        };
        /**
        *预加载资源加载完毕
        *由于egret最后会把代码打包成一个js文件。所以不能分步加载js文件。
        *
        * */
        __egretProto__.createScene = function () {
            //注册plugin
            app.GM.getInstance().loader.registerPlugin(app.PLUGIN.CITY, app.CityPlugin);
            //加载plugin 
            app.GM.getInstance().loader.addPlugin(app.PLUGIN.CITY);
            app.GM.getInstance().loader.startLoad();
        };
        return Main;
    })(pureEgret.Client);
    Main.prototype.__class__ = "app.Main";
})(app || (app = {}));
//# sourceMappingURL=Main.js.map