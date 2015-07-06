module pureEgret
{
    /**
    *所有管理类需要实现的接口
    * */
    export interface IManager
    {
        setup(s:egret.Stage,fa:puremvc.IFacade):void;
    }
}