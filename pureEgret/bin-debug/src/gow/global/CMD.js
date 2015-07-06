var gow;
(function (gow) {
    var CMD = (function () {
        function CMD() {
        }
        var __egretProto__ = CMD.prototype;
        CMD.CHECK_LOGIN = "show_login";
        CMD.ON_LOGIN = "on_login";
        CMD.CONNECT_SERVER = "connect_server";
        CMD.LOGIN_USER = "login_user";
        CMD.SHOW_BUILD_POP = "show_build_pop";
        return CMD;
    })();
    gow.CMD = CMD;
    CMD.prototype.__class__ = "gow.CMD";
})(gow || (gow = {}));
//# sourceMappingURL=CMD.js.map