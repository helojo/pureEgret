module pureEgret
{
    export class LoaderManager extends egret.EventDispatcher implements pureEgret.IManager
    {
        constructor()
        {
            super();
        }

        private _stage:egret.Stage;
        private _fa:puremvc.IFacade;
        setup(s:egret.Stage,fa:puremvc.IFacade):void
        {
            this._stage = s;
            this._fa = fa;
        }

        public setupGUI(theme:string,res:string):void
        {
            //注入自定义的素材解析器
            egret.Injector.mapClass("egret.gui.IAssetAdapter", AssetAdapter);
            //加载皮肤主题配置文件,可以手动修改这个文件。替换默认皮肤。
            egret.gui.Theme.load(theme);

            //初始化Resource资源加载库
            RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
            RES.loadConfig(res, "resource/");
        }

        /**
        * 配置文件加载完成,开始预加载preload资源组。
        */
        private onConfigComplete(event: RES.ResourceEvent): void {
            RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);

            RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
            RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        }

        /**
        * 资源组加载完成
        */
        private onResourceLoadComplete(event: RES.ResourceEvent): void {

            this.startPlugin();
            this.loadNext();
            this.dispatchEvent(event);
        }

        private startPlugin():void
        {
            if(this.currentPlugin)
            {
                this.currentPlugin.start(this._fa,this._info);
                this.currentPlugin = null;
            }
        }

        /**
        * 资源组加载出错
        */
        private onResourceLoadError(event: RES.ResourceEvent): void {
            this.dispatchEvent(event);
        }
        
        /**
        * 资源组加载进度
        */
        private onResourceProgress(event: RES.ResourceEvent): void {
            this.dispatchEvent(event);
        }

        /**
        * 加载资源 group
        * @param name
        */
        public loadResGroup(name:string):void
        {
            RES.loadGroup(name);
        }

        private loadPlugin(p:pureEgret.IPlugin):void
        {
            var name:string = p.getResGroup();
            if(name.length)
            {
                RES.loadGroup(name);
            }else
            {
                this.startPlugin();
                this.loadNext();
            }
        }

        private regPlugins:Object = {};
        /**
        *注册 插件。只有先注册插件，才能添加和加载插件。
        * */
        public registerPlugin(key:string,commandClassRef:any):void
        {
            this.regPlugins[key+""] = commandClassRef;
        }
        
        public disposePlugin(key:string): void
        {
            this.regPlugins[key + ""] = null;
            delete this.regPlugins[key + ""];
        }

        private newPluginByKey(key:string):pureEgret.IPlugin
        {
            var p:pureEgret.IPlugin;
            var commandClassRef:any = this.regPlugins[key+""];
            if(commandClassRef)
            {
                p = <pureEgret.IPlugin> new commandClassRef();
            }
            return p;
        }

        private loadingPlugins:Object [] = [];
        private currentPlugin:pureEgret.IPlugin;

        /**
        *添加插件，然后才能加载插件。
        * */
        public addPlugin(key:string,info:any=null):void
        {
            console.log("[core] add plugin ",key);
            var item: Object = {key:key,info:info};
            this.loadingPlugins.push(item);
        }

        /**
        *开始加载插件,主要是加载插件相关的资源。因为插件的代码，已经打包在一个文件里了。
        * */
        public startLoad():void
        {
            this.loadNext();
        }

        private _info: any;
        private loadNext():void
        {
            if(this.plugins == null)
            {
                this.plugins = {};
            }
            this._info = null;
            if(this.loadingPlugins.length)
            {
                var item:Object = this.loadingPlugins.shift();
                this._info = item["info"];
                var key: string = item["key"];
                console.log("[core] loading ",key,this.loadingPlugins.length);
                var p: pureEgret.IPlugin = this.getPlugin(key);
                if(!p)
                {
                    p = this.newPluginByKey(key);
                    if(p)
                    {
                        this.currentPlugin = p;
                        this.plugins[key] = p;
                        this.loadPlugin(p);
                    }else
                    {
                        this.loadNext();
                    }
                }else
                {
                    p.start(this._fa,this._info);
                    console.log("[core] plugin "+key+" exist!");
                    this.loadNext();
                }

            }
        }

        private plugins:Object;
        /**
        * 通过 插件的plugin对于的key来删除plugin
        * 插件移除时，也不移除资源。这个最好egret能做自动计数处理。
        * @param key
        */
        public killPlugin(key:string):void
        {
            var p:pureEgret.IPlugin = this.plugins[key];
            if(p)
            {
                console.log("[core] kill plugin ",p);
                p.dispose();
                this.plugins[key] = null;
                delete this.plugins[key];
                this.gc();
            }

        }
        
        private gc(): void
        {
            //暂时不处理！
        }

        public checkPluginExist(key:string):boolean
        {
            var p:pureEgret.IPlugin = this.getPlugin(key);
            if(p)
            {
                return true;
            }else
            {
                return false;
            }
        }
        
        private getPlugin(key:string): pureEgret.IPlugin
        {
            var p:pureEgret.IPlugin = this.plugins[key];
            return p;
        }

    }

}
