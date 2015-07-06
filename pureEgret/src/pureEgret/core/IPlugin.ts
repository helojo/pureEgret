module pureEgret
{
    export interface IPlugin
    {
        start(fa:puremvc.IFacade,data:Object):void;
        dispose():void;
        getResGroup():string;
    }
}
