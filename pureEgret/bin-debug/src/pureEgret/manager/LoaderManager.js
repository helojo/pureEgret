var pureEgret;
(function (pureEgret) {
    var LoaderManager = (function (_super) {
        __extends(LoaderManager, _super);
        function LoaderManager() {
            _super.call(this);
            this.regPlugins = {};
            this.loadingPlugins = [];
        }
        var __egretProto__ = LoaderManager.prototype;
        __egretProto__.setup = function (s, fa) {
            this._stage = s;
            this._fa = fa;
        };
        __egretProto__.setupGUI = function (theme, res) {
            //注入自定义的素材解析器
            egret.Injector.mapClass("egret.gui.IAssetAdapter", AssetAdapter);
            //加载皮肤主题配置文件,可以手动修改这个文件。替换默认皮肤。
            egret.gui.Theme.load(theme);
            //初始化Resource资源加载库
            RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
            RES.loadConfig(res, "resource/");
        };
        /**
        * 配置文件加载完成,开始预加载preload资源组。
        */
        __egretProto__.onConfigComplete = function (event) {
            RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
            RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
            RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        };
        /**
        * 资源组加载完成
        */
        __egretProto__.onResourceLoadComplete = function (event) {
            this.startPlugin();
            this.loadNext();
            this.dispatchEvent(event);
        };
        __egretProto__.startPlugin = function () {
            if (this.currentPlugin) {
                this.currentPlugin.start(this._fa, this._info);
                this.currentPlugin = null;
            }
        };
        /**
        * 资源组加载出错
        */
        __egretProto__.onResourceLoadError = function (event) {
            this.dispatchEvent(event);
        };
        /**
        * 资源组加载进度
        */
        __egretProto__.onResourceProgress = function (event) {
            this.dispatchEvent(event);
        };
        /**
        * 加载资源 group
        * @param name
        */
        __egretProto__.loadResGroup = function (name) {
            RES.loadGroup(name);
        };
        __egretProto__.loadPlugin = function (p) {
            var name = p.getResGroup();
            if (name.length) {
                RES.loadGroup(name);
            }
            else {
                this.startPlugin();
                this.loadNext();
            }
        };
        /**
        *注册 插件。只有先注册插件，才能添加和加载插件。
        * */
        __egretProto__.registerPlugin = function (key, commandClassRef) {
            this.regPlugins[key + ""] = commandClassRef;
        };
        __egretProto__.disposePlugin = function (key) {
            this.regPlugins[key + ""] = null;
            delete this.regPlugins[key + ""];
        };
        __egretProto__.newPluginByKey = function (key) {
            var p;
            var commandClassRef = this.regPlugins[key + ""];
            if (commandClassRef) {
                p = new commandClassRef();
            }
            return p;
        };
        /**
        *添加插件，然后才能加载插件。
        * */
        __egretProto__.addPlugin = function (key, info) {
            if (info === void 0) { info = null; }
            console.log("[core] add plugin ", key);
            var item = { key: key, info: info };
            this.loadingPlugins.push(item);
        };
        /**
        *开始加载插件,主要是加载插件相关的资源。因为插件的代码，已经打包在一个文件里了。
        * */
        __egretProto__.startLoad = function () {
            this.loadNext();
        };
        __egretProto__.loadNext = function () {
            if (this.plugins == null) {
                this.plugins = {};
            }
            this._info = null;
            if (this.loadingPlugins.length) {
                var item = this.loadingPlugins.shift();
                this._info = item["info"];
                var key = item["key"];
                console.log("[core] loading ", key, this.loadingPlugins.length);
                var p = this.getPlugin(key);
                if (!p) {
                    p = this.newPluginByKey(key);
                    if (p) {
                        this.currentPlugin = p;
                        this.plugins[key] = p;
                        this.loadPlugin(p);
                    }
                    else {
                        this.loadNext();
                    }
                }
                else {
                    p.start(this._fa, this._info);
                    console.log("[core] plugin " + key + " exist!");
                    this.loadNext();
                }
            }
        };
        /**
        * 通过 插件的plugin对于的key来删除plugin
        * 插件移除时，也不移除资源。这个最好egret能做自动计数处理。
        * @param key
        */
        __egretProto__.killPlugin = function (key) {
            var p = this.plugins[key];
            if (p) {
                console.log("[core] kill plugin ", p);
                p.dispose();
                this.plugins[key] = null;
                delete this.plugins[key];
                this.gc();
            }
        };
        __egretProto__.gc = function () {
            //暂时不处理！
        };
        __egretProto__.checkPluginExist = function (key) {
            var p = this.getPlugin(key);
            if (p) {
                return true;
            }
            else {
                return false;
            }
        };
        __egretProto__.getPlugin = function (key) {
            var p = this.plugins[key];
            return p;
        };
        return LoaderManager;
    })(egret.EventDispatcher);
    pureEgret.LoaderManager = LoaderManager;
    LoaderManager.prototype.__class__ = "pureEgret.LoaderManager";
})(pureEgret || (pureEgret = {}));
//# sourceMappingURL=LoaderManager.js.map