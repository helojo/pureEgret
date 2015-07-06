module app {
	/**
	 *
	 * @author 
	 *
	 */
	export class BuildsInfoProxy extends puremvc.Proxy
	{
		public constructor() {
            super("BuildsInfoProxy");
		}
		
        public onRegister(): void
        {
            
        }
        
        public onRemove(): void
        {
            
        }
        
        public getBuildsInfo(): void
        {
            //1 调用http或者socket获取数据
            //2 处理返回的数据，发送通知。
            var list: BuildInfoVO[] = [];//假设这是返回的数据
            list.push(new BuildInfoVO());
            list.push(new BuildInfoVO());
            this._infoList = list;
            this.facade.sendNotification(CMD.ON_GET_BUILDS_INFO);
        }
        
        private _infoList: BuildInfoVO[];
        public get buildsInfoList(): BuildInfoVO[]
        {
            return this._infoList;
        }
        
        
	}
}
