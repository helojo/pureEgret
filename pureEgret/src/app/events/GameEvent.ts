module app
{
    export  class GameEvent extends egret.Event
    {
        public static ON_CONNECT:string = "on_connect";
        public static ON_LOGIN:string = "on_login";

        public params:Object;
        constructor(type: string)
        {
            super(type);
        }
    }
}