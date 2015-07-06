module pureEgret
{
    /**
    * 1 继承该管理类，来setup自定义的管理类
    * 2 自定义的管理类，需要实现 implements pureEgret.IManager 接口
    * 3 在子类添加相应的 get方法。
    * 如：public get loader():pureEgret.LoaderManager
    * 
    * 如：
    * 调用该方法setup管理类。this.super_setupManager(pureEgret.LoaderManager);
    * 
    * 
    * */
    export class Mgr
    {
        constructor()
        {

        }

        private _stage:egret.Stage;
        private _facade:puremvc.IFacade;
        public setup(s:egret.Stage,fa:puremvc.IFacade,theme:string,res:string,fps:number=60):void
        {
            this._stage = s;
            this._facade = fa;

            this.super_setupManager(pureEgret.LoaderManager);
            this.override_setup_game_managers();
            this.loaderMgr.setupGUI(theme,res);
        }

        private _managers:Object = {};
        public super_setupManager(managerClass:any):void
        {
            var imgr:pureEgret.IManager = <pureEgret.IManager> new managerClass();
            if(imgr)
            {
                if(!this._managers [managerClass+""])
                {
                    this._managers [managerClass+""] = imgr;
                    imgr.setup(this._stage,this._facade);
                    console.log("[core] set up manager "+managerClass);
                }else
                {
                    throw Error("[core] error manager exist already -> "+ managerClass);
                }

            }
        }

        /**
         * get manager by class
         */
        protected  super_getManager(managerClass:Function):any
        {
            var mgr:any;
            mgr = this._managers[managerClass+""];
            return mgr;
        }

        /**
         * setup extensive managers
         */
        protected override_setup_game_managers():void
        {
            throw Error("请使用父类的super_setupManager(managerClass:Class)方法 扩展管理器！");
        }

        /**
        *加载管理器
        * */
        public get loaderMgr():pureEgret.LoaderManager
        {
            var ldr:pureEgret.LoaderManager;
            ldr = <pureEgret.LoaderManager>this.super_getManager(pureEgret.LoaderManager);
            return ldr;
        }
        
    }
}