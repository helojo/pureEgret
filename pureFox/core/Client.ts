module pureFox
{
     /**
     * �̳�Clinet������puremvc���
     * �̳�Plugin������������ڲ����ע�����puremvc����
     * �̳�Mgr�� ʹ�ú���չ ������
     *
     * ��Ϸ��������
     *��ʼ��pureMVC���->��ʼ������manager->��ʼ����չmanager->��Ϸ�������->���ز��
     */
    export class Client extends egret.DisplayObjectContainer
    {
        /**
         * pureMVC��facade������
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
