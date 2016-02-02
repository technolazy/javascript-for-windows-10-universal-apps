(function () {

    var nav = WinJS.Navigation;

    WinJS.UI.Pages.define(Application.navigator.article, {
        ready: function (element, options) {
            DefaultPage.setTitle(options.title);

            document.getElementById("article-content").innerHTML = options.body;
            
        }
    });

}());