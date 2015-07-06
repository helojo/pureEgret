var skins;
(function (skins) {
    var CitySkin = (function (_super) {
        __extends(CitySkin, _super);
        function CitySkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [800, 480]);
            this.elementsContent = [this.btnBuild_i(), this.btnLeague_i(), this.btnTroops_i(), this.txtCityInfo_i()];
            this.states = [
                new egret.gui.State("normal", []),
                new egret.gui.State("disabled", [])
            ];
        }
        var __egretProto__ = CitySkin.prototype;
        Object.defineProperty(__egretProto__, "skinParts", {
            get: function () {
                return CitySkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        __egretProto__.btnLeague_i = function () {
            var t = new egret.gui.Button();
            this.btnLeague = t;
            this.__s(t, ["label", "x", "y"], ["军团", 170, 737]);
            return t;
        };
        __egretProto__.btnTroops_i = function () {
            var t = new egret.gui.Button();
            this.btnTroops = t;
            this.__s(t, ["label", "x", "y"], ["军队", 319, 737]);
            return t;
        };
        __egretProto__.btnBuild_i = function () {
            var t = new egret.gui.Button();
            this.btnBuild = t;
            this.__s(t, ["label", "x", "y"], ["建造", 20, 737]);
            return t;
        };
        __egretProto__.txtCityInfo_i = function () {
            var t = new egret.gui.TextArea();
            this.txtCityInfo = t;
            this.__s(t, ["height", "text", "width", "x", "y"], [209, "hello!", 434, 19, 514]);
            return t;
        };
        CitySkin._skinParts = ["btnBuild", "btnLeague", "btnTroops", "txtCityInfo"];
        return CitySkin;
    })(egret.gui.Skin);
    skins.CitySkin = CitySkin;
    CitySkin.prototype.__class__ = "skins.CitySkin";
})(skins || (skins = {}));
//# sourceMappingURL=CitySkin.js.map