(function () {

    WinJS.UI.Pages.define(Application.navigator.subscriptions, {
        _feedUrl: null,
        page: null,
        ready: function () {
            page = this;
            this._feedUrl = document.getElementById("feed-url");
            DefaultPage.setTitle("Settings");


            if (Data.feed.hasFeed) {
                this._feedUrl.value = Data.feed.feedUrl;
            }

            document.getElementById("save-button").addEventListener("click", function (e) {
                var value = page._feedUrl.value;

                Data.feed.feedUrl = value;
            });
        }
    });

}());