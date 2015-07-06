var app;
(function (app) {
    /**
     *
     * @author
     *
     */
    var GetBuidsInfoCMD = (function (_super) {
        __extends(GetBuidsInfoCMD, _super);
        function GetBuidsInfoCMD() {
            _super.call(this);
        }
        var __egretProto__ = GetBuidsInfoCMD.prototype;
        __egretProto__.execute = function (notification) {
            var bp = this.facade.retrieveProxy("BuildsInfoProxy");
            if (bp) {
                bp.getBuildsInfo();
            }
        };
        return GetBuidsInfoCMD;
    })(puremvc.SimpleCommand);
    app.GetBuidsInfoCMD = GetBuidsInfoCMD;
    GetBuidsInfoCMD.prototype.__class__ = "app.GetBuidsInfoCMD";
})(app || (app = {}));
//# sourceMappingURL=GetBuidsInfoCMD.js.map