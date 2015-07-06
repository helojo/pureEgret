var app;
(function (app) {
    /**
     *
     * @author
     *
     */
    var CityView = (function (_super) {
        __extends(CityView, _super);
        function CityView() {
            _super.call(this);
            this.skinName = skins.CitySkin;
        }
        var __egretProto__ = CityView.prototype;
        return CityView;
    })(egret.gui.SkinnableComponent);
    app.CityView = CityView;
    CityView.prototype.__class__ = "app.CityView";
})(app || (app = {}));
//# sourceMappingURL=CityView.js.map