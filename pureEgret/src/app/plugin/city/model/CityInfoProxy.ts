module app {
	/**
	 *
	 * @author 
	 *
	 */
	export class CityInfoProxy extends puremvc.Proxy
	{
		public constructor() {
            super("CityInfoProxy");
		}
		
        public onRegister(): void
        {
            
        }
        
        public onRemove(): void
        {
            
        }
        
        public getCityInfo(): void
        {
            //假设获得了数据，就发送通知。
            this.facade.sendNotification(CMD.ON_GET_CITY_INFO);
        }
        
        public get cityInfo(): String
        {
            return "主城信息！";
        }
	}
}
