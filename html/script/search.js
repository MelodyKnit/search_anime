class Search {
    constructor(anime) { this.anime = anime; };
    $(ele, dom, type, dad) {
        let isEle = this.isTrue(ele);
        if (isEle && isEle !== 'array') {
            ele = isEle === 'string' ? document.createElement(ele) : ele;
            isEle = ele;
            if (type) this.setType(ele, type);
            if (dom)
                if (this.isTrue(dom) === 'html') isEle.appendChild(dom);
                else if (this.isTrue(dom) === 'array') dom.forEach(e => isEle.appendChild(e));
            else isEle.innerHTML = dom;
            if (dad)
                if (this.isTrue(dad) === 'html') dad.appendChild(isEle);
                else this.$(dad);
        } else if (ele === false && typeof dom == 'string' && dom !== '') {
            isEle = document.querySelectorAll(dom);
            this.setType(dom, type);
        } else isEle = false;
        return isEle;
    };
    isTrue(ele) {
        if (ele)
            if (typeof ele === 'string') return 'string';
            else if (/Array/.test(Object.prototype.toString.call(ele))) return 'array';
        else if (/HTML/.test(ele.toString())) return 'html';
        else return false;
    };
    setType(ele, style) {
        if (style)
            if (this.isTrue(style) === 'array')
                for (let i of style) {
                    this.setType(ele, i);
                    if (this.isTrue(i) === 'string' && i !== '') ele[style[0]] = style[1];
                };
    };
    switchSearch() {
        this.txt.placeholder = this.p + '搜索';
        this.logo.style.backgroundImage = 'url(' + this.img + ')';
    };
    startPush() {
        let get = e => this.$(false, e)[0];
        this.txt = get('.txt');
        this.sub = get('.sub');
        this.logo = get('.search_logo');
        this.switch = get('.switch_search');
        this.add(this.anime[0])
        this.addTo();
        this.switchSearch();
    };
    open() {
        if (this.txt.value) window.open(this.search + this.txt.value);
    }
    add(e) {
        if (this.p !== e.p) {
            for (let i in e) this[i] = e[i];
            this.switchSearch();
        } else window.open(this.https);
    }
    addTo() {
        this.anime.forEach(e => {
            this.switch.appendChild(
                this.$('li', [this.$('img', false, ['src', e.img]), this.$('p', e.p)], ['onclick', () => { this.add(e) }])
            );
        });
        this.sub.addEventListener('click', () => this.open());
    }
};