"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SequentialSearch = function () {
    function SequentialSearch(content, list, search) {
        _classCallCheck(this, SequentialSearch);

        this.content = content;
        this.list = list;
        this.search = search;
    }

    _createClass(SequentialSearch, [{
        key: "getContent",
        value: function getContent() {
            return this.content.textContent = this.getSequentialSearch(this.list, this.search);
        }
    }, {
        key: "getSequentialSearch",
        value: function getSequentialSearch() {
            var list = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
            var search = arguments[1];

            if (list.length < search) {
                return false;
            } else {
                for (var i = 0; i <= list.length; i++) {
                    if (list[i] == search) return i;
                }
            }
        }
    }]);

    return SequentialSearch;
}();