class BinarySearch {
    constructor(content, list, search) {
        this.content = content;
        this.list = list;
        this.search = search;
    }

    getContent() {
        return this.content.textContent = this.getBinarySearch(this.list, this.search);
    }

    getBinarySearch(list = [], search) {
        let listLength = list.length;
        if (listLength === 0) {
            return false;
        } else {
            let center = Math.floor(listLength/2);
            if (search === list[center]) {
                return search;
            } else if (search < list[center]) {
                return this.getBinarySearch(list.slice(0, center), search);
            } else {
                return this.getBinarySearch(list.slice(center + 1), search);
            }
        }
    }
}