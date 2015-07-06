module app {
	/**
	 *
	 * @author 
	 *
	 */
	export class ShowBuildCMD extends puremvc.SimpleCommand
	{
		public constructor() {
            super();
		}
		
        execute(notification: puremvc.INotification): void
        {
            GM.getInstance().loaderMgr.addPlugin(PLUGIN.BUILD,{title:"标题",content:"你好建造"});
            GM.getInstance().loaderMgr.startLoad();
        }
		
	}
}
