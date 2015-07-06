module app {
	/**
	 *
	 * @author 
	 *
	 */
    export class GetCityInfoCMD extends puremvc.SimpleCommand
    {
        public constructor()
        {
            super();
        }

        execute(notification: puremvc.INotification): void
        {
            var cp: CityInfoProxy = <CityInfoProxy>this.facade.retrieveProxy("CityInfoProxy");
            if(cp)
            {
                cp.getCityInfo();
            }
        }
    }
}