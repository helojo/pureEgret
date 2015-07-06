var app;
(function (app) {
    /**
     *
     * @author
     *
     */
    var BuildsInfoProxy = (function (_super) {
        __extends(BuildsInfoProxy, _super);
        function BuildsInfoProxy() {
            _super.call(this, "BuildsInfoProxy");
        }
        var __egretProto__ = BuildsInfoProxy.prototype;
        __egretProto__.onRegister = function () {
        };
        __egretProto__.onRemove = function () {
        };
        __egretProto__.getBuildsInfo = function () {
            //1 调用http或者socket获取数据
            //2 处理返回的数据，发送通知。
            var list = []; //假设这是返回的数据
            list.push(new app.BuildInfoVO());
            list.push(new app.BuildInfoVO());
            this._infoList = list;
            this.facade.sendNotification(app.CMD.ON_GET_BUILDS_INFO);
        };
        Object.defineProperty(__egretProto__, "buildsInfoList", {
            get: function () {
                return this._infoList;
            },
            enumerable: true,
            configurable: true
        });
        return BuildsInfoProxy;
    })(puremvc.Proxy);
    app.BuildsInfoProxy = BuildsInfoProxy;
    BuildsInfoProxy.prototype.__class__ = "app.BuildsInfoProxy";
})(app || (app = {}));
//# sourceMappingURL=BuildsInfoProxy.js.map