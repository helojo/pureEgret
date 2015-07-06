var app;
(function (app) {
    var CMD = (function () {
        function CMD() {
        }
        var __egretProto__ = CMD.prototype;
        CMD.SHOW_BUILD_POP = "show_build_pop";
        CMD.GET_BUILDS_INFO = "get_builds_info";
        CMD.ON_GET_BUILDS_INFO = "on_get_builds_info";
        CMD.GET_CITY_INFO = "get_city_info";
        CMD.ON_GET_CITY_INFO = "ON_get_city_info";
        return CMD;
    })();
    app.CMD = CMD;
    CMD.prototype.__class__ = "app.CMD";
})(app || (app = {}));
//# sourceMappingURL=CMD.js.map