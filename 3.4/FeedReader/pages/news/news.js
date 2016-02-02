(function () {

    var nav = WinJS.Navigation;

    WinJS.UI.Pages.define(Application.navigator.home, {
        ready: function () {

            if (!Data.feed.hasFeed) {
                nav.navigate(Application.navigator.subscriptions);
            }

            Syndication.getFeedAsync(Data.feed.feedUrl).done(function (feed) {

            });
        }
    });

}());