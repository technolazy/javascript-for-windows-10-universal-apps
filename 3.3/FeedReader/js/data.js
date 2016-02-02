(function () {

    class Data {
        constructor() {
            var appData = Windows.Storage.ApplicationData.current;

            this.settings = appData.roamingSettings;
        }

        get hasFeed() {
            var value = this.feedUrl;

            return value ? true : false;
        }


        get feedUrl() {
            return this.settings.values["feed-url"];
        }

        set feedUrl(value) {
            this.settings.values["feed-url"] = value;
        }
    }

    WinJS.Namespace.define("Data", {
        feed: new Data()
    });

}());