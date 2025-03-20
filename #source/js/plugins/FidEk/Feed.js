$('#divFeed').FeedEk({
    FeedUrl: 'http://pravbratsk.ru/feed/',
    MaxCount: 5,
    ShowDesc: true,
    ShowPubDate: true,
    DescCharacterLimit: 300,
    TitleLinkTarget: '_blank',
    DateFormat: '',
    DateFormatLang: 'ru',
    Offset: 0,
    ShowAuthor: false,
    AuthorLabel: "Автор:",
    Success: function (feedItems) { },
    Error: function (error) { }
});