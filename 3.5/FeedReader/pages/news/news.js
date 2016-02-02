(function () {

    var nav = WinJS.Navigation;

    WinJS.UI.Pages.define(Application.navigator.home, {
        ready: function () {

            if (!Data.feed.hasFeed) {
                nav.navigate(Application.navigator.subscriptions);
            }

            Syndication.getFeedAsync(Data.feed.feedUrl).done(function (feed) {
                var listView = document.getElementById("list-view").winControl;

                listView.itemDataSource = new WinJS.Binding.List(feed.articles).dataSource;
            }, function(error) {
                var msgBox = new Windows.UI.Popups.MessageDialog(error.message);

                msgBox.showAsync();
            });
        }
    });

}());