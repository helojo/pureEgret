
class Main extends pureEgret.Client
{
    constructor()
    {
        super();
    }
    
    override_setupManagers():void
    {
        var theme:string = "resource/theme.thm";
        var res:string = "resource/resource.json";
        app.GM.getInstance().setup(this.stage,this.facade,theme,res);
    }
    
    private loadingView: LoadingUI;
    override_Start():void
    {
        this.loadingView = new LoadingUI();
        this.stage.addChild(this.loadingView);
        app.GM.getInstance().loaderMgr.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        app.GM.getInstance().loaderMgr.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        
        app.GM.getInstance().loaderMgr.loadResGroup("preload");
    }
    
    /**
    * 资源组加载完成
    */
    private onResourceLoadComplete(event: RES.ResourceEvent): void {
        if (event.groupName == "preload") {
            this.createScene();
        }
                            
        if(this.loadingView.parent)
        {
            this.stage.removeChild(this.loadingView);
        }
    }
    
    /**
    * 资源组加载进度
    */
    private onResourceProgress(event: RES.ResourceEvent): void {
        if(this.loadingView.parent == null)
        {
            this.stage.addChild(this.loadingView);
        }
        this.loadingView.setProgress(event.itemsLoaded, event.itemsTotal);
    }
            
    /**
    *预加载资源,加载完毕
    *由于egret最后会把代码打包成一个js文件。所以就不用分步加载js文件。
    * */
    private createScene():void
    {
        //注册完毕plugin后，开始游戏流程！(推荐方式)
        app.GM.getInstance().setupMgr.setupPlugins();
        app.GM.getInstance().setupMgr.start();
        
        //也可以直接写在这里(可选方式)
//        app.GM.getInstance().loaderMgr.registerPlugin(app.PLUGIN.CITY,app.City);
//        app.GM.getInstance().loaderMgr.registerPlugin(app.PLUGIN.BUILD,app.Build);
//        
//        app.GM.getInstance().loaderMgr.addPlugin(app.PLUGIN.CITY,"hello city!");
//        app.GM.getInstance().loaderMgr.startLoad();
    } 
}





