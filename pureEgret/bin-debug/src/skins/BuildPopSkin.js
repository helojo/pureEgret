var skins;
(function (skins) {
    var BuildPopSkin = (function (_super) {
        __extends(BuildPopSkin, _super);
        function BuildPopSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [800, 480]);
            this.elementsContent = [this.__9_i(), this.__10_i()];
            this.states = [
                new egret.gui.State("normal", []),
                new egret.gui.State("disabled", [])
            ];
        }
        var __egretProto__ = BuildPopSkin.prototype;
        Object.defineProperty(__egretProto__, "skinParts", {
            get: function () {
                return BuildPopSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        __egretProto__.__3_i = function () {
            var t = new egret.gui.Button();
            this.__s(t, ["label", "x", "y"], ["农场", 30, 54]);
            return t;
        };
        __egretProto__.__4_i = function () {
            var t = new egret.gui.Button();
            this.__s(t, ["label", "x", "y"], ["伐木场", 30, 123]);
            return t;
        };
        __egretProto__.__5_i = function () {
            var t = new egret.gui.Button();
            this.__s(t, ["label", "x", "y"], ["兵营", 30, 192]);
            return t;
        };
        __egretProto__.__6_i = function () {
            var t = new egret.gui.Button();
            this.__s(t, ["label", "x", "y"], ["铁匠铺", 30, 262]);
            return t;
        };
        __egretProto__.__7_i = function () {
            var t = new egret.gui.Button();
            this.__s(t, ["label", "x", "y"], ["酒馆", 30, 331]);
            return t;
        };
        __egretProto__.__8_i = function () {
            var t = new egret.gui.Button();
            this.__s(t, ["label", "x", "y"], ["竞技场", 30, 400]);
            return t;
        };
        __egretProto__.__9_i = function () {
            var t = new egret.gui.Panel();
            this.__s(t, ["height", "width", "x", "y"], [800, 480, 0, 0]);
            t.elementsContent = [this.__3_i(), this.btnClose_i(), this.__4_i(), this.__5_i(), this.__6_i(), this.__7_i(), this.__8_i(), this.txtInfo_i()];
            return t;
        };
        __egretProto__.btnClose_i = function () {
            var t = new egret.gui.Button();
            this.btnClose = t;
            this.__s(t, ["height", "label", "width", "x", "y"], [127, "返回", 317, 89, 598]);
            return t;
        };
        __egretProto__.__10_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["text", "textAlign", "textColor", "width", "x", "y"], ["建造界面", "center", 0x000000, 219, 131, 10]);
            return t;
        };
        __egretProto__.txtInfo_i = function () {
            var t = new egret.gui.TextArea();
            this.txtInfo = t;
            this.__s(t, ["height", "width", "x", "y"], [400, 223, 205, 56]);
            return t;
        };
        BuildPopSkin._skinParts = ["btnClose", "txtInfo"];
        return BuildPopSkin;
    })(egret.gui.Skin);
    skins.BuildPopSkin = BuildPopSkin;
    BuildPopSkin.prototype.__class__ = "skins.BuildPopSkin";
})(skins || (skins = {}));
//# sourceMappingURL=BuildPopSkin.js.map