module.exports = {
'Check search' : function (browser) {
    browser
        .setWindowSize(1280, 900) // to see Search button
        .url('https://en.wikipedia.org/')
        .waitForElementVisible( 'css selector', '#mp-welcome', 'Welcome title visible');

    browser.assert
        .textContains('#mp-welcome', 'Welcome to Wikipedia', 'Welcome title correct');

    browser
       .setValue('#searchInput', 'lego')
       .waitForElementVisible('#searchform button')
       .click( '#searchform button');

     browser
        .waitForElementVisible('css selector', '#firstHeading', 'Page title here')
        .assert.urlContains('/wiki/Lego')
        .assert.titleContains('Lego - Wikipedia', 'title ok')
        .assert.textContains('#firstHeading', 'Lego', 'Lego title ok');


    browser.end();
}
};


//'#mp-welcome'