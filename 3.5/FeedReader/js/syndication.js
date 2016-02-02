(function () {
    var processArticles = Symbol();
    class Feed {
        constructor(feed) {
            this.feed = feed;
            this.title = feed.title ? feed.title.text : "";
            this.articles = [];

            this[processArticles]();
        }
        [processArticles]() {
            var that = this;
            this.feed.items.forEach(function (item) {
                that.articles.push(new Article(item));
            });
        }
    }

    class Article {
        constructor(item) {
            this.title = item.title ? item.title.text : "";
            this.body = item.content ? item.content.text : item.summary.text;
        }
    }


    WinJS.Namespace.define("Syndication", {
        getFeedAsync: function (url) {
            return new WinJS.Promise(function (complete, error) {
                var uri;
                
                try {
                    uri = new Windows.Foundation.Uri(url);
                } catch (ex) {
                    error(ex);
                    return;
                }
                var client = Windows.Web.Syndication.SyndicationClient();

                client.retrieveFeedAsync(uri).done(function (feed) {
                    complete(new Feed(feed));
                }, function () {
                    error({
                        message: `Unable to download ${url}`
                    });
                });
            });
        }
    })


}());