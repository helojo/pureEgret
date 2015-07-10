# pureEgret
    *pureEgret是基于EgretEngine和pureMVC进行插件化改造的游戏开发框架。
    * -------------------------------------------
    * 使用方式： 
    * 继承Clinet来启动puremvc框架
    * 继承Plugin来制作插件，在插件里注册各种puremvc功能
    * 继承Mgr来 使用和扩展 管理器
    * -------------------------------------------
    * 默认Mgr里 有 pureEgret.LoaderManager。
    * 加载插件的方法：可以一次性加载多个。
    * GM.getInstance().loaderMgr.addPlugin(PLUGIN.CITY,"hello city!");
    * GM.getInstance().loaderMgr.startLoad();
    * 
    * 移除插件的方法：
    * GM.getInstance().loaderMgr.killPlugin(PLUGIN.BUILD);
    * 插件注册的 proxy，mediator，command 都会自动移除掉。
    * 开发者需要在对应的proxy和mediator中 在onRemove()方法里 处理相关内容
    *--------------------------------------------
    * 游戏开启流程：
    * 初始化pureMVC框架->初始化基础manager->初始化扩展manager->预加载资源->注册所有插件->加载必须的插件->游戏开始
