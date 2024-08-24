import View from './View.js';

import icons from "url:../../img/icons.svg";
// import {Fraction} from 'fractional';
                //OR
// import Fraction from 'fractional.Fraction';

class RecipeView extends View{
    _parentElement = document.querySelector('.recipe');
    _errorMessage = 'doesn\'t exist bruh!!!';
    _message = '';
    

      addHandlerRender(handler){
        ['hashchange', 'load'].forEach(ev => window.addEventListener(ev, handler));
      }

      addHandlerUpdateServings(handler){
            this._parentElement.addEventListener('click', (e) => {
                const btn = e.target.closest('.btn--update-servings');
                if(!btn) return;
                var updateTo;
                if(+btn.dataset.updateTo >= 1)
                updateTo = +btn.dataset.updateTo;
                else
                updateTo = 1;
                handler(updateTo);    
            })
      }

      AddHandlerAddBookmark = (handler) => {
        this._parentElement.addEventListener('click', (e) => {
            const btn = e.target.closest('.btn--bookmark');
            if(!btn) return;
            handler();
        });
      }

    _generateMarkup() {
        // 2) Rendering recipe

        const IngredArray = this._data.ingredients.map((ingred) => {  //returns a long html with all varaibles mapped out
            return `
                <li class="recipe__ingredient">
                <svg class="recipe__icon">
                <use href="${icons}#icon-check"></use>
                </svg>
                <div class="recipe__quantity">${
                    // ingred.quantity          //comment out the function and ternary to view the raw variable
                                                    //OR
                    // (() => {    
                    //     if(ingred.quantity == null) return '';
                    //     else { 
                    //         const integerPart = Math.floor(ingred.quantity);
                    //         const decimalPart = ingred.quantity - integerPart;
                    //         if(decimalPart == 0.5 ){
                    //             return new Fraction(ingred.quantity).toString()
                    //         }
                    //         else if(decimalPart > 0.5){
                    //             return new Fraction(Math.ceil(ingred.quantity)).toString();
                    //         }
                    //         else{       //this is for if decimal part is less or equal to zero
                    //             return new Fraction(Math.floor(ingred.quantity)).toString()
                    //         }
                    //     };
                    // })()    //By wrapping the arrow function in parentheses (() => {...}) and immediately invoking it with (), you ensure that the function executes and returns a value
                                                    
                                                        //OR
                    // ingred.quantity == null ? '' : new Fraction(ingred.quantity).toString()
                    ingred.quantity == null ? '' : ingred.quantity
                }</div>
                <div class="recipe__description">
                <span class="recipe__unit">${ingred.unit}</span>
                ${ingred.description}
                </div>
                </li>
              `;
            })
            .join("");

    return ` 
        <figure class="recipe__fig">
            <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img" />
            <h1 class="recipe__title">
                <span>${this._data.title}</span>
            </h1>
            </figure>

            <div class="recipe__details">
            <div class="recipe__info">
                <svg class="recipe__info-icon">
                <use href="${icons}#icon-clock"></use>
                </svg>
                <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
                <span class="recipe__info-text">minutes</span>
            </div>
            <div class="recipe__info">
                <svg class="recipe__info-icon">
                <use href="${icons}#icon-users"></use>
                </svg>
                <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
                <span class="recipe__info-text">servings</span>

                <div class="recipe__info-buttons">
                <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings-1}">
                    <svg>
                    <use href="${icons}#icon-minus-circle"></use>
                    </svg>
                </button>
                <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings+1}">
                    <svg>
                    <use href="${icons}#icon-plus-circle"></use>
                    </svg>
                </button>
                </div>
            </div>

            <div class="recipe__user-generated ${this._data.key? '' : 'hidden' }">
                <svg>
                <use href="${icons}#icon-user"></use>
                </svg>
            </div>

            <button class="btn--round btn--bookmark">
                <svg class="">
                <use href="${icons}#${this._data.bookmarked? 'icon-bookmark-fill' : 'icon-bookmark'}"></use>
                </svg>
            </button>
            </div>

            <div class="recipe__ingredients">
            <h2 class="heading--2">Recipe ingredients</h2>
            <ul class="recipe__ingredient-list">
                ${IngredArray}
            </ul>
            </div>

            <div class="recipe__directions">
            <h2 class="heading--2">How to cook it</h2>
            <p class="recipe__directions-text">
                This recipe was carefully designed and tested by
                <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
                directions at their website.
            </p>
            <a
                class="btn--small recipe__btn"
                href="${this._data.sourceUrl}"
                target="_blank"
            >
                <span>Directions</span>
                <svg class="search__icon">
                <use href="${icons}#icon-arrow-right"></use>
                </svg>
            </a>
            </div>`;
    }
}

export default new RecipeView();