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
        app.GM.getInstance().loaderMgr.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        app.GM.getInstance().loaderMgr.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        app.GM.getInstance().loaderMgr.loadResGroup("preload");
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
    *预加载资源,加载完毕
    *由于egret最后会把代码打包成一个js文件。所以就不用分步加载js文件。
    * */
    __egretProto__.createScene = function () {
        //注册完毕plugin后，开始游戏流程！
        app.GM.getInstance().setupMgr.setupPlugins();
        app.GM.getInstance().setupMgr.start();
        //也可以直接写在这里
        //        app.GM.getInstance().loaderMgr.registerPlugin(app.PLUGIN.CITY,app.City);
        //        app.GM.getInstance().loaderMgr.registerPlugin(app.PLUGIN.BUILD,app.Build);
        //        
        //        app.GM.getInstance().loaderMgr.addPlugin(app.PLUGIN.CITY,"hello city!");
        //        app.GM.getInstance().loaderMgr.startLoad();
    };
    return Main;
})(pureEgret.Client);
Main.prototype.__class__ = "Main";
//# sourceMappingURL=Main.js.map