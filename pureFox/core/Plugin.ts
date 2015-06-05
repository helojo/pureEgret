module pureFox
{
    /**
     * ����Ļ���
     *
     * ֻ��Ҫ��д fox_override_registerPureMvcAndStart ����
     * Ȼ�� ���� ��Ӧ�ķ��� ����MVC
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
         * @param resGroup �ò����Ҫ�� res ��Դ
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
         * ע��command��������Ƴ�ʱ�����Զ����ע���command
         */
        protected  override_registerCommand(noteName:string,commandClassRef:Function):void
        {
            this.facade.registerCommand(noteName,commandClassRef);
            this._commandNames.push(noteName);
        }

        /**
         * ע��mediator��������Ƴ�ʱ�����Զ����ע���mediator
         */
        protected  override_registerMediator(mediator:puremvc.IMediator):void
        {
            this.facade.registerMediator(mediator);
            this._mediatorNames.push(mediator.getMediatorName());
        }

        /**
         * ע��proxy��������Ƴ�ʱ�����Զ����ע���proxy
         */
        protected  override_registerProxy(proxy:puremvc.IProxy):void
        {
            this.facade.registerProxy(proxy);
            this._proxyNames.push(proxy.getProxyName());
        }

        /**
         * ������ ע��puremvc��ص�command,proxy,mediator
         * ʹ��һ�·���ע��� ����Ƴ�����Զ�ɾ��ע���command,proxy,mediator
         * fox_registerCommand
         * fox_registerMediator
         * fox_registerProxy
         */
        protected  override_registerPureMvcAndStart():void
        {
            throw Error("����fox_override_registerPureMvcAndStart�����ע��puremvc��ص�command,proxy,mediator");
        }


        /**
         * ���ز�� ���ݵ�����
         */
        public  get initData():Object
    {
        return this._data;
    }

        /**
         * �Զ��Ƴ�pureMVCע���mvc����
         */
        private _autoRemovePureMVC():void
        {
            if(this._commandNames)
            {
                var i:number = this._commandNames.length;
                var key:string="";

                //�Զ��Ƴ�command
                while(i--)
                {
                    key = this._commandNames[i];
                    this.facade.removeCommand(key);
                    console.log("[core] remove  command ",key);
                }

                //�Զ��Ƴ�mediator
                i = this._mediatorNames.length;
                while(i--)
                {
                    key = this._mediatorNames[i];
                    this.facade.removeMediator(key);
                    console.log("[core] remove  mediator ",key);
                }

                //�Զ��Ƴ�proxy
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

