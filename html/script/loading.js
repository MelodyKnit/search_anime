(() => {
    let search = new Search([{
        https: 'https://www.dongmanhuayuan.com',
        search: 'https://www.dongmanhuayuan.com/search/',
        p: '动漫花园',
        img: 'https://www.dongmanhuayuan.com/static/www/images/logo.png'
    }, {
        https: 'https://www.tokyotosho.info',
        search: 'https://www.tokyotosho.info/search.php?terms=',
        p: '东京图书馆',
        img: 'https://ttcdn.info/favicon.png'
    }, {
        https: 'https://share.acgnx.se',
        search: 'https://share.acgnx.se/search.php?sort_id=0&keyword=',
        p: '末日动漫',
        img: 'https://share.acgnx.se/images/favicon.ico'
    }, {
        https: 'http://www.36dm.club',
        search: 'http://www.36dm.club/search.php?keyword=',
        p: '简单动漫',
        img: 'http://www.36dm.club/favicon.ico'
    }, {
        https: 'http://www.acgsou.com',
        search: 'http://www.acgsou.com/search.php?keyword=',
        p: 'ACG搜',
        img: 'http://www.acgsou.com/favicon.ico'
    }]);
    let animeDiv = function() {
        let div = search.$('div');
        let isTrue = false;
        let time = setInterval(() => {
            div.style.height = Math.random() * 100 + 'px';
            if (document.readyState === 'complete') clearTimeout(time);
        }, 400);
        return div;
    };
    let div = new Array();
    for (let i = 0; i < 6; i++) div.push(animeDiv());
    let load = search.$('div', div, [
        ['className', 'loading']
    ], document.body);
    document.onreadystatechange = function() {
        if (document.readyState === 'interactive') {
            search.startPush();
        } else if (document.readyState === 'complete') {
            let i = 100;
            let time = setInterval(() => {
                if (i > 0) {
                    i--;
                    load.style.opacity = i / 100;
                } else {
                    clearInterval(time);
                    load.remove();
                }
            }, 8)
        };
    };
})();