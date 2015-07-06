var app;
(function (app) {
    /**
     *
     * @author
     *
     */
    var ShowBuildCMD = (function (_super) {
        __extends(ShowBuildCMD, _super);
        function ShowBuildCMD() {
            _super.call(this);
        }
        var __egretProto__ = ShowBuildCMD.prototype;
        __egretProto__.execute = function (notification) {
            app.GM.getInstance().loaderMgr.addPlugin(app.PLUGIN.BUILD, { title: "标题", content: "你好建造" });
            app.GM.getInstance().loaderMgr.startLoad();
        };
        return ShowBuildCMD;
    })(puremvc.SimpleCommand);
    app.ShowBuildCMD = ShowBuildCMD;
    ShowBuildCMD.prototype.__class__ = "app.ShowBuildCMD";
})(app || (app = {}));
//# sourceMappingURL=ShowBuildCMD.js.map