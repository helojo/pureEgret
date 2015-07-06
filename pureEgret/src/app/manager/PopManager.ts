module app {
	/**
	 *
	 * @author 
	 *
	 */
	export class PopManager implements pureEgret.IManager
	{
		public constructor() {
		}
		
        setup(s: egret.Stage,fa: puremvc.IFacade): void
        {
            
        }
        
        /**
        *弹窗GUI
        * */
        public showPop(ui:egret.gui.SkinnableComponent): void
        {
            GM.getInstance().layer.guiLayer.addElement(ui);
        }
            
        /**
        *移除GUI
        * */    
        public removePop(ui:egret.gui.SkinnableComponent): void
        {
            if(ui.parent)
            {
                GM.getInstance().layer.guiLayer.removeElement(ui);
            }     
        }
	}
}
