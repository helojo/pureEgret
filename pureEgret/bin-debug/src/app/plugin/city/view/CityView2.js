var app;
(function (app) {
    /**
     *
     * @author
     *
     */
    var CityView2 = (function (_super) {
        __extends(CityView2, _super);
        function CityView2() {
            _super.call(this);
            var bg = new egret.Bitmap(RES.getRes("city_bg"));
            this.addChild(bg);
        }
        var __egretProto__ = CityView2.prototype;
        return CityView2;
    })(egret.DisplayObjectContainer);
    app.CityView2 = CityView2;
    CityView2.prototype.__class__ = "app.CityView2";
})(app || (app = {}));
//# sourceMappingURL=CityView2.js.map