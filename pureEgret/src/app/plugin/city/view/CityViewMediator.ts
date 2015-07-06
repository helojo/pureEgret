module app {
	/**
	 *
	 * @author 
	 *
	 */
	export class CityViewMediator extends puremvc.Mediator
	{
		public constructor() 
		{
            super("CityViewMediator");
		}
		
        public listNotificationInterests(): string[]
        {
            return [CMD.ON_GET_CITY_INFO];
        }
        
        public handleNotification(notification: puremvc.INotification): void
        {
            var cmd: string = notification.getName();
            switch(cmd)
            {
                case CMD.ON_GET_CITY_INFO:
                    this.showCityInfo();
                    break;
            }
        }
        
        private showCityInfo(): void
        {
            var cp: CityInfoProxy = <CityInfoProxy>this.facade.retrieveProxy("CityInfoProxy");
            if(cp)
            {
                this._btns.txtCityInfo.text = ""+cp.cityInfo;
            }
        }
        
        private _ui: CityView2;
        private _btns: CityView;
        public onRegister(): void
        {
            this._ui = new CityView2();
            this._btns = new CityView();
            console.log("on register ");
            
            GM.getInstance().layer.sceneLayer.addChild(this._ui);
            GM.getInstance().layer.guiLayer.addElement(this._btns);
            
            this._btns.btnBuild.addEventListener(egret.TouchEvent.TOUCH_TAP,this.popup,this);
            this._btns.btnLeague.addEventListener(egret.TouchEvent.TOUCH_TAP,this.popup,this);
            this._btns.btnTroops.addEventListener(egret.TouchEvent.TOUCH_TAP,this.popup,this);
        }
        
        private popup(e:egret.TouchEvent): void
        {
            var btn: egret.gui.Button = <egret.gui.Button>e.currentTarget;
            if(btn)
            {
                this._btns.txtCityInfo.text = ""+btn.label;
                switch(btn.label)
                {
                    case "建造": 
                        this.facade.sendNotification(CMD.SHOW_BUILD_POP);
                        break;
                }
                
            }
        }
        
        public onRemove(): void
        {
            
        }
		
	}
}