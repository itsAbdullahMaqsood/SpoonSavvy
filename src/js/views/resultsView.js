import View from  './View.js';
import icons from "url:../../img/icons.svg";


class resultsView extends View {
    _parentElement = document.querySelector(`.results`);
    _errorMessage = 'No recipes found for that bruh!!!';
    _message = '';

    _generateMarkup() {
        const id = window.location.hash.slice(1);
        const resultsArray = this._data.map((res) => {
            return `<li class="preview">
                <a class="preview__link ${(res.id === id) ?'preview__link--active': '' }" href="#${res.id}">
                <figure class="preview__fig">
                    <img src="${res.image}" alt="${res.title}" loading="lazy" />
                </figure>
                <div class="preview__data">
                    <h4 class="preview__title">${res.title}</h4>
                    <p class="preview__publisher">${res.publisher}</p>
                </div>
                <div class="recipe__user-generated ${res.key? '' : 'hidden' }">
                    <svg>
                    <use href="${icons}#icon-user"></use>
                    </svg>
                </div>
                </a>
            </li>`
        }).join('');
        return resultsArray;
    }
}

export default new resultsView();