module app {
	/**
	 *
	 * @author 
	 *
	 */
    export class BuildPopViewMediator extends puremvc.Mediator
	{
		public constructor() {
            super("BuildPopViewMediator",new BuildPopView());
		}
		
        listNotificationInterests(): string[]
        {
            return [CMD.ON_GET_BUILDS_INFO];
        }
        
        public get ui(): BuildPopView
        {
            return <BuildPopView>this.getViewComponent();
        }
        
        handleNotification(notification: puremvc.INotification): void
        {
            var cmd: string = notification.getName();
            switch(cmd)
            {
                case CMD.ON_GET_BUILDS_INFO:
                    this.showInfo();
                    break;
            }
        }
        
        private showInfo(): void
        {
            var p: BuildsInfoProxy = <BuildsInfoProxy>this.facade.retrieveProxy("BuildsInfoProxy");
            var msg: string = "建造数据返回："+p.buildsInfoList;
            this.ui.txtInfo.text = msg;
        }
        
        onRegister(): void
        {
            GM.getInstance().layer.guiLayer.addElement(this.ui);
            this.ui.btnClose.addEventListener(egret.TouchEvent.TOUCH_TAP,this.close,this);
        }
        
        private close(e:egret.TouchEvent): void
        {
            GM.getInstance().loaderMgr.killPlugin(PLUGIN.BUILD);
        }
        
        onRemove(): void
        {
            GM.getInstance().layer.guiLayer.removeElement(this.ui);
        }
	}
}
