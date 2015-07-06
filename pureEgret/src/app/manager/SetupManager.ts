module app {
	/**
	 *
	 * @author 
	 * 只负责注册各个插件
	 */
	export class SetupManager implements pureEgret.IManager
	{
		public constructor() 
		{
		}
		
        setup(s: egret.Stage,fa: puremvc.IFacade): void
        {
            
        }
        
        /**
        *注册所有的插件
        * */
        public setupPlugins():void
        {
            GM.getInstance().loaderMgr.registerPlugin(PLUGIN.CITY,City);
            GM.getInstance().loaderMgr.registerPlugin(PLUGIN.BUILD,Build);
        }
        
        public start(): void
        {
            //加载plugin 
            GM.getInstance().loaderMgr.addPlugin(PLUGIN.CITY,"hello city!");
            GM.getInstance().loaderMgr.startLoad();
        }
	}
}
