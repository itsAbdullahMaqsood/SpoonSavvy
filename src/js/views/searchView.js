
import View from "./View.js";

class searchView extends View{
    _parentElement = document.querySelector('.search');
    _data;

    getQuery() {
        return this._parentElement.querySelector('.search__field').value;
    }

    addHandlerSearch(handler) {
        this._parentElement.addEventListener('submit', (e) => {
            e.preventDefault();
            handler();
        })
    }

}


export default new searchView();