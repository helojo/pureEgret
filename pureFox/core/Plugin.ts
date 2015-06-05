module pureFox
{
    /**
     * 插件的基类
     *
     * 只需要重写 fox_override_registerPureMvcAndStart 方法
     * 然后 调用 相应的方法 主城MVC
     */
    export class Plugin extends egret.DisplayObjectContainer implements IPlugin
    {
        protected facade:puremvc.IFacade;

        private _commandNames:string [];
        private _mediatorNames:string [];
        private _proxyNames:string [];
        private _data:Object;

        /**
         *
         * @param resGroup 该插件需要的 res 资源
         */
        constructor(resGroup:string)
        {
            super();
            this._resGroup = resGroup;
        }

        start(fa:puremvc.IFacade,data:Object=null):void
        {
            this._commandNames = [];
            this._mediatorNames = [];
            this._proxyNames = [];
            this._data = data;

            this.facade = fa;

            this.override_registerPureMvcAndStart();
        }

        dispose():void
        {
            this._autoRemovePureMVC();
            this.facade = null;
        }

        private _resGroup:string;
        getResGroup():string
        {
            return this._resGroup;
        }

        /**
         * 注册command，当插件移除时，会自动清除注册的command
         */
        protected  override_registerCommand(noteName:string,commandClassRef:Function):void
        {
            this.facade.registerCommand(noteName,commandClassRef);
            this._commandNames.push(noteName);
        }

        /**
         * 注册mediator，当插件移除时，会自动清除注册的mediator
         */
        protected  override_registerMediator(mediator:puremvc.IMediator):void
        {
            this.facade.registerMediator(mediator);
            this._mediatorNames.push(mediator.getMediatorName());
        }

        /**
         * 注册proxy，当插件移除时，会自动清除注册的proxy
         */
        protected  override_registerProxy(proxy:puremvc.IProxy):void
        {
            this.facade.registerProxy(proxy);
            this._proxyNames.push(proxy.getProxyName());
        }

        /**
         * 在这里 注册puremvc相关的command,proxy,mediator
         * 使用一下方法注册的 插件移除后会自动删除注册的command,proxy,mediator
         * fox_registerCommand
         * fox_registerMediator
         * fox_registerProxy
         */
        protected  override_registerPureMvcAndStart():void
        {
            throw Error("请在fox_override_registerPureMvcAndStart方法里，注册puremvc相关的command,proxy,mediator");
        }


        /**
         * 加载插件 传递的数据
         */
        public  get initData():Object
    {
        return this._data;
    }

        /**
         * 自动移除pureMVC注册的mvc内容
         */
        private _autoRemovePureMVC():void
        {
            if(this._commandNames)
            {
                var i:number = this._commandNames.length;
                var key:string="";

                //自动移除command
                while(i--)
                {
                    key = this._commandNames[i];
                    this.facade.removeCommand(key);
                    console.log("[core] remove  command ",key);
                }

                //自动移除mediator
                i = this._mediatorNames.length;
                while(i--)
                {
                    key = this._mediatorNames[i];
                    this.facade.removeMediator(key);
                    console.log("[core] remove  mediator ",key);
                }

                //自动移除proxy
                i = this._proxyNames.length;
                while(i--)
                {
                    key = this._proxyNames[i];
                    this.facade.removeProxy(key);
                    console.log("[core] remove  proxy ",key);
                }
            }

            this._commandNames = null;
            this._mediatorNames = null;
            this._proxyNames = null;
        }

    }


}

