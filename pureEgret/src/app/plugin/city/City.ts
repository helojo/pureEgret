module app {
	/**
	 *
	 * @author 
	 *
	 */
	export class City extends pureEgret.Plugin
	{
		public constructor() 
		{
            super("city");
		}
		
        override_registerPureMvcAndStart(): void 
        {
            this.super_registerCommand(CMD.GET_CITY_INFO,GetCityInfoCMD);
            this.super_registerCommand(CMD.SHOW_BUILD_POP,ShowBuildCMD);
            this.super_registerProxy(new CityInfoProxy());
            this.super_registerMediator(new CityViewMediator());
            
            this.facade.sendNotification(CMD.GET_CITY_INFO);
        } 
	}
}
