var AppMain = (function (_super) {
    __extends(AppMain, _super);
    function AppMain() {
        _super.call(this);
    }
    var __egretProto__ = AppMain.prototype;
    __egretProto__.override_setupManagers = function () {
        var theme = "resource/theme.thm";
        var res = "resource/resource.json";
        gow.GM.getInstance().setup(this.stage, this.facade, theme, res);
    };
    __egretProto__.override_Start = function () {
        this.loadingView = new LoadingUI();
        this.stage.addChild(this.loadingView);
        gow.GM.getInstance().loader.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        gow.GM.getInstance().loader.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        gow.GM.getInstance().loader.loadResGroup("preload");
        var box = this.getChildByName("boxname");
        box.getChildByName("xxx");
        box.getElementAt(1);
    };
    /**
    * 资源组加载完成
    */
    __egretProto__.onResourceLoadComplete = function (event) {
        if (event.groupName == "preload") {
            this.stage.removeChild(this.loadingView);
            this.createScene();
        }
    };
    /**
    * 资源组加载进度
    */
    __egretProto__.onResourceProgress = function (event) {
        this.loadingView.setProgress(event.itemsLoaded, event.itemsTotal);
    };
    //预加载资源加载完毕，开始创建
    __egretProto__.createScene = function () {
        //注册plugin
        gow.GM.getInstance().loader.registerPlugin(gow.PluginMap.CITY, gow.PluginCity);
        //加载plugin 
        gow.GM.getInstance().loader.addPlugin(gow.PluginMap.CITY);
        gow.GM.getInstance().loader.startLoad();
    };
    return AppMain;
})(pureEgret.Client);
AppMain.prototype.__class__ = "AppMain";
//# sourceMappingURL=AppMain.js.map