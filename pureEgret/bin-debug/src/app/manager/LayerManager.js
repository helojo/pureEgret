var app;
(function (app) {
    var LayerManager = (function () {
        function LayerManager() {
        }
        var __egretProto__ = LayerManager.prototype;
        __egretProto__.setup = function (s, fa) {
            this._stage = s;
            this._stage.addChild(this.sceneLayer);
            this._stage.addChild(this.guiLayer);
        };
        Object.defineProperty(__egretProto__, "stage", {
            get: function () {
                return this._stage;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(__egretProto__, "guiLayer", {
            get: function () {
                if (this._guiLayer == null) {
                    this._guiLayer = new egret.gui.UIStage();
                }
                return this._guiLayer;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(__egretProto__, "sceneLayer", {
            get: function () {
                if (this._scene == null) {
                    this._scene = new egret.DisplayObjectContainer();
                }
                return this._scene;
            },
            enumerable: true,
            configurable: true
        });
        return LayerManager;
    })();
    app.LayerManager = LayerManager;
    LayerManager.prototype.__class__ = "app.LayerManager";
})(app || (app = {}));
//# sourceMappingURL=LayerManager.js.map