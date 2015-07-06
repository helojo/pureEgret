var pureEgret;
(function (pureEgret) {
    /**
    * 插件的基类
    *
    * 只需要重写 override_registerPureMvcAndStart 方法
    * 然后 调用 相应的方法 注册MVC
    */
    var Plugin = (function (_super) {
        __extends(Plugin, _super);
        /**
        * @param resGroup 该插件需要的 res 资源,无res需求的，不用填。默认为空的。
        */
        function Plugin(resGroup) {
            if (resGroup === void 0) { resGroup = ""; }
            _super.call(this);
            this._resGroup = resGroup;
        }
        var __egretProto__ = Plugin.prototype;
        __egretProto__.start = function (fa, data) {
            if (data === void 0) { data = null; }
            this._commandNames = [];
            this._mediatorNames = [];
            this._proxyNames = [];
            this._data = data;
            console.log(this + "的传参= " + data);
            this.facade = fa;
            this.override_registerPureMvcAndStart();
        };
        __egretProto__.dispose = function () {
            this._autoRemovePureMVC();
            this.facade = null;
        };
        __egretProto__.getResGroup = function () {
            return this._resGroup;
        };
        /**
        * 注册command，当插件移除时，会自动清除注册的command
        */
        __egretProto__.super_registerCommand = function (noteName, commandClassRef) {
            this.facade.registerCommand(noteName, commandClassRef);
            this._commandNames.push(noteName);
        };
        /**
        * 注册mediator，当插件移除时，会自动清除注册的mediator
        */
        __egretProto__.super_registerMediator = function (mediator) {
            this.facade.registerMediator(mediator);
            this._mediatorNames.push(mediator.getMediatorName());
        };
        /**
        * 注册proxy，当插件移除时，会自动清除注册的proxy
        */
        __egretProto__.super_registerProxy = function (proxy) {
            this.facade.registerProxy(proxy);
            this._proxyNames.push(proxy.getProxyName());
        };
        /**
        * 在这里 注册puremvc相关的command,proxy,mediator
        * 使用以下方法注册的 插件移除后会自动删除注册的command,proxy,mediator
        * super_registerCommand
        * super_registerMediator
        * super_registerProxy
        */
        __egretProto__.override_registerPureMvcAndStart = function () {
            throw Error("[core] 请在override_registerPureMvcAndStart方法里，注册puremvc相关的command,proxy,mediator");
        };
        Object.defineProperty(__egretProto__, "initData", {
            /**
            * 加载插件 传递的数据
            */
            get: function () {
                return this._data;
            },
            enumerable: true,
            configurable: true
        });
        /**
        * 自动移除super_registerCommand,super_registerMediator,super_registerProxy,注册的pureMVC内容
        */
        __egretProto__._autoRemovePureMVC = function () {
            if (this._commandNames) {
                var i = this._commandNames.length;
                var key = "";
                while (i--) {
                    key = this._commandNames[i];
                    this.facade.removeCommand(key);
                    console.log("[core] remove  command ", key);
                }
                //自动移除mediator
                i = this._mediatorNames.length;
                while (i--) {
                    key = this._mediatorNames[i];
                    this.facade.removeMediator(key);
                    console.log("[core] remove  mediator ", key);
                }
                //自动移除proxy
                i = this._proxyNames.length;
                while (i--) {
                    key = this._proxyNames[i];
                    this.facade.removeProxy(key);
                    console.log("[core] remove  proxy ", key);
                }
            }
            this._commandNames = null;
            this._mediatorNames = null;
            this._proxyNames = null;
        };
        return Plugin;
    })(egret.DisplayObjectContainer);
    pureEgret.Plugin = Plugin;
    Plugin.prototype.__class__ = "pureEgret.Plugin";
})(pureEgret || (pureEgret = {}));
//# sourceMappingURL=Plugin.js.map