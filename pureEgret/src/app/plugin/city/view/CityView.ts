module app {
	/**
	 *
	 * @author 
	 *
	 */
	export class CityView extends egret.gui.SkinnableComponent
	{
		public constructor() {
            super();
            this.skinName = skins.CitySkin;
		}
		
        public btnBuild: egret.gui.Button;
        public btnLeague: egret.gui.Button;
        public btnTroops: egret.gui.Button;
        public txtCityInfo: egret.gui.TextArea;
	}
}
