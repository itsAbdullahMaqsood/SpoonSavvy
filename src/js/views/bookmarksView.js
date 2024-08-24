import View from  './View.js';
import icons from "url:../../img/icons.svg";


class bookmarksView extends View {
    _parentElement = document.querySelector(`.bookmarks__list`);
    _errorMessage = 'No bookmarks yet. Find a nice recipe and bookmark it ;)';
    _message = '';

    AddHandlerRenderBookmarks(handler){
        window.addEventListener('load', handler);
    }

    _generateMarkup() {
        const id = window.location.hash.slice(1);
        const bookmarksArray = this._data.map((rec) => {
            return `<li class="preview">
                <a class="preview__link ${(rec.id === id) ?'preview__link--active': '' }" href="#${rec.id}">
                <figure class="preview__fig">
                    <img src="${rec.image}" alt="${rec.title}" loading="lazy" />
                </figure>
                <div class="preview__data">
                    <h4 class="preview__title">${rec.title}</h4>
                    <p class="preview__publisher">${rec.publisher}</p>
                </div>
                <div class="recipe__user-generated ${rec.key? '' : 'hidden' }">
                    <svg>
                    <use href="${icons}#icon-user"></use>
                    </svg>
                </div>
                </a>
            </li>`
        }).join('');
        return bookmarksArray;
    }
}

export default new bookmarksView();