class SequentialSearch {
    constructor(content, list, search) {
        this.content = content;
        this.list = list;
        this.search = search;
    }

    getContent() {
        return this.content.textContent = this.getSequentialSearch(this.list, this.search);
    }

    getSequentialSearch(list = [], search) {
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
