module app {
	/**
	 *
	 * @author 
	 *
	 */
	export class Build extends pureEgret.Plugin
	{
		public constructor() {
            super();
		}
		
        protected  override_registerPureMvcAndStart():void
        {
            this.super_registerCommand(CMD.GET_BUILDS_INFO,GetBuidsInfoCMD);
            this.super_registerProxy(new BuildsInfoProxy);
            this.super_registerMediator(new BuildPopViewMediator());
            
            this.facade.sendNotification(CMD.GET_BUILDS_INFO);
        }
		
	}
}
