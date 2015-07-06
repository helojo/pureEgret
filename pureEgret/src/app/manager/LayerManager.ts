module app
{
    export class LayerManager implements pureEgret.IManager
    {
        constructor()
        {

        }

        setup(s:egret.Stage,fa:puremvc.IFacade):void
        {
            this._stage = s;
            this._stage.addChild(this.sceneLayer);
            this._stage.addChild(this.guiLayer);
        }

        private _stage:egret.Stage;
        public get stage():egret.Stage
        {
            return this._stage;
        }

        private _guiLayer:egret.gui.UIStage;
        public get guiLayer():egret.gui.UIStage
        {
            if(this._guiLayer == null)
            {
                this._guiLayer = new egret.gui.UIStage();
            }
            return this._guiLayer;
        }

        private _scene:egret.DisplayObjectContainer;
        public get sceneLayer():egret.DisplayObjectContainer
        {
            if(this._scene == null)
            {
                this._scene = new egret.DisplayObjectContainer();
            }

            return this._scene;
        }
        
    }
}