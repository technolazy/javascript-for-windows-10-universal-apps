(function () {

    var nav = WinJS.Navigation;

    WinJS.UI.Pages.define(Application.navigator.home, {
        _articles: [],
        ready: function () {

            if (!Data.feed.hasFeed) {
                nav.navigate(Application.navigator.subscriptions);
            }
            var that = this;
            var listView = document.getElementById("list-view").winControl;

            listView.addEventListener("iteminvoked", function (e) {
                var index = e.detail.itemIndex;
                var article = that._articles[index];

                nav.navigate(Application.navigator.article, article);
            });

            Syndication.getFeedAsync(Data.feed.feedUrl).done(function (feed) {
                that._articles = feed.articles;

                DefaultPage.setTitle(feed.title);

                listView.itemDataSource = new WinJS.Binding.List(feed.articles).dataSource;
            }, function(error) {
                var msgBox = new Windows.UI.Popups.MessageDialog(error.message);

                msgBox.showAsync();
            });
        }
    });

}());