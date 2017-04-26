"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BinarySearch = function () {
    function BinarySearch(content, list, search) {
        _classCallCheck(this, BinarySearch);

        this.content = content;
        this.list = list;
        this.search = search;
    }

    _createClass(BinarySearch, [{
        key: "getContent",
        value: function getContent() {
            return this.content.textContent = this.getBinarySearch(this.list, this.search);
        }
    }, {
        key: "getBinarySearch",
        value: function getBinarySearch() {
            var list = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
            var search = arguments[1];

            var listLength = list.length;
            if (listLength === 0) {
                return false;
            } else {
                var center = Math.floor(listLength / 2);
                if (search === list[center]) {
                    return search;
                } else if (search < list[center]) {
                    return this.getBinarySearch(list.slice(0, center), search);
                } else {
                    return this.getBinarySearch(list.slice(center + 1), search);
                }
            }
        }
    }]);

    return BinarySearch;
}();