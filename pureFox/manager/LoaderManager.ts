module pureFox
{
    export class LoaderManager extends egret.EventDispatcher implements pureFox.IManager
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
            //注入自定义的素材解析器
            egret.Injector.mapClass("egret.gui.IAssetAdapter", AssetAdapter);
            //加载皮肤主题配置文件,可以手动修改这个文件。替换默认皮肤。
            egret.gui.Theme.load("resource/theme.thm");

            //初始化Resource资源加载库
            RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
            RES.loadConfig("resource/resource.json", "resource/");
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
            if(this.currentPlugin)
            {
                this.currentPlugin.start(this._fa,{})
            }

            this.loadNext();
            this.dispatchEvent(event);
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

        private loadPlugin(p:pureFox.IPlugin):void
        {
            var name:string = p.getResGroup();
            if(name.length)
            {
                RES.loadGroup(name);
            }
        }

        private loadingPlugins:pureFox.IPlugin [] = [];
        private currentPlugin:pureFox.IPlugin;

        public addPlugin(p:pureFox.IPlugin):void
        {
            this.loadingPlugins.push(p);
        }

        public startLoad():void
        {
            this.loadNext();
        }

        private loadNext():void
        {
            if(this.loadingPlugins.length)
            {
                var p:pureFox.IPlugin = this.loadingPlugins.shift();
                if(p)
                {
                    this.currentPlugin = p;
                    this.loadPlugin(p);
                    this.plugins[p.getResGroup()] = p;
                }
            }
        }

        private plugins:pureFox.IPlugin [] = [];

        /**
         * 通过 插件的ResGroup来 删除插件
         * @param ResGroup
         */
        public killPlugin(ResGroup:string):void
        {
            var p:pureFox.IPlugin = this.plugins[ResGroup];
            if(p)
            {
                p.dispose();
                this.plugins[ResGroup] = null;
                delete this.plugins[ResGroup];
            }
            console.log("kill plugin ",name);
        }


    }

}
