module pureFox
{
     /**
     * 继承Clinet来启动puremvc框架
     * 继承Plugin来制作插件，在插件里注册各种puremvc功能
     * 继承Mgr来 使用和扩展 管理器
     *
     * 游戏开启流程
     *初始化pureMVC框架->初始化基础manager->初始化扩展manager->游戏启动完毕->加载插件
     */
    export class Client extends egret.DisplayObjectContainer
    {
        /**
         * pureMVC的facade的引用
         */
        protected  facade:puremvc.IFacade;

        constructor()
        {
            super();
            this.addEventListener(egret.Event.ADDED_TO_STAGE,this.start,this);
        }

        private start(e:egret.Event=null):void
        {
            //setup pureMVC
            this.facade = puremvc.Facade.getInstance();
            console.log("setup pureMVC OK!");
            //setup managers
            this.override_setupManagers();
            console.log("setup managers OK!");
            //game start
            this.override_Start();
            console.log("game start");
        }

        protected override_setupManagers():void
        {
            throw Error("need override ,set up managers!");
        }

        protected override_Start():void
        {
            throw Error("need override ,game start!");
        }

    }
}
