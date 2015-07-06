module app {
	/**
	 *
	 * @author 
	 *
	 */
	export class GetBuidsInfoCMD extends puremvc.SimpleCommand
	{
		public constructor() {
            super();
		}
		
        public execute(notification: puremvc.INotification): void
        {
            var bp: BuildsInfoProxy = <BuildsInfoProxy>this.facade.retrieveProxy("BuildsInfoProxy");
            if(bp)
            {
                bp.getBuildsInfo();
            }
        }
        
	}
}
