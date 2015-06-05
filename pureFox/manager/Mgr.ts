module pureFox
{
    export class Mgr
    {
        constructor()
        {

        }

        private _stage:egret.Stage;
        private _facade:puremvc.IFacade;
        public setup(s:egret.Stage,fa:puremvc.IFacade,fps:number=60):void
        {
            this._stage = s;
            this._facade = fa;

            this.super_setupManager(pureFox.LoaderManager);
            this.override_extends_managers_setup();
        }

        private _managers:Object = {};//有 dictionary吗？
        public super_setupManager(managerClass:any):void
        {
            var imgr:pureFox.IManager = <pureFox.IManager> new managerClass();
            if(imgr)
            {
                if(!this._managers [managerClass+""])
                {
                    this._managers [managerClass+""] = imgr;
                    imgr.setup(this._stage,this._facade);
                    console.log("set up manager "+managerClass);
                }else
                {
                    throw Error("error manager exist already -> "+ managerClass);
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
        protected override_extends_managers_setup():void
        {
            throw Error("请使用父类的super_setupManager(managerClass:Class)方法 扩展管理器！");
        }

        public get loader():pureFox.LoaderManager
        {
            var ldr:pureFox.LoaderManager;
            ldr = <pureFox.LoaderManager>this.super_getManager(pureFox.LoaderManager);
            return ldr;
        }
    }
}