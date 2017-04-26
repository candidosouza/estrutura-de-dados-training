class SequentialSearch {

    constructor(content, list, search) {
        this._content = content;
        this._list = list;
        this._search = search;
        Object.freeze(this);
    }

    get content() {
        return this._content.textContent = this.sequentialSearch(this._list, this._search);
    }

    sequentialSearch(list = [], search) {
        if (list.length < search) {
            return false;
        } else {
            for (let i = 0; i <= list.length; i++) {
                if (list[i] == search)
                    return i;
            }
        }
    }
}
