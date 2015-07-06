module app {
	/**
	 *
	 * @author 
	 *
	 */
	export class BuildPopView extends egret.gui.SkinnableComponent
	{
		public constructor() {
            super();
            this.skinName = skins.BuildPopSkin;
		}
		
        public btnClose: egret.gui.Button;
        public txtInfo: egret.gui.TextArea;
	}
}
