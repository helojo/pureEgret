module app {
	/**
	 *
	 * @author 
	 *
	 */
	export class CityView2 extends egret.DisplayObjectContainer
	{
		public constructor() {
            super();
            
            var bg: egret.Bitmap = new egret.Bitmap(RES.getRes("city_bg"));
            this.addChild(bg);
		}
	}
}
