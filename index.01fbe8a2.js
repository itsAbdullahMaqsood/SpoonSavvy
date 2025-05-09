function e(e){return e&&e.__esModule?e.default:e}var t,r,n,i=globalThis,a={},s={},o=i.parcelRequire5486;null==o&&((o=function(e){if(e in a)return a[e].exports;if(e in s){var t=s[e];delete s[e];var r={id:e,exports:{}};return a[e]=r,t.call(r.exports,r,r.exports),r.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){s[e]=t},i.parcelRequire5486=o),(0,o.register)("27Lyk",function(e,t){Object.defineProperty(e.exports,"register",{get:()=>r,set:e=>r=e,enumerable:!0,configurable:!0});var r,n=new Map;r=function(e,t){for(var r=0;r<t.length-1;r+=2)n.set(t[r],{baseUrl:e,path:t[r+1]})}}),o("27Lyk").register(new URL("",import.meta.url).toString(),JSON.parse('["f9fpV","index.01fbe8a2.js","eyyUD","icons.c14567a0.svg"]'));const l="https://forkify-api.herokuapp.com/api/v2/recipes",c="caceb93a-d920-4fc9-a34b-b33976ae42c4",d=function(e){return new Promise(function(t,r){setTimeout(function(){r(Error(`Request took too long! Timeout after ${e} second`))},1e3*e)})},u=async function(e){try{let t=await Promise.race([fetch(e),d(2)]),r=await t.json();if(!t.ok)throw Error(`${r.message} ${t.status}`);return r}catch(e){throw e}},p=async function(e,t){try{let r=fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),n=await Promise.race([r,d(10)]),i=await n.json();if(!n.ok)throw Error(`${i.message} ${n.status}`);return i}catch(e){throw e}},h={recipe:{},search:{query:"",results:[],page:1,resultsPerPage:10},bookmarks:[]},m=function(e){let{recipe:t}=e.data;return{id:t.id,title:t.title,publisher:t.publisher,sourceUrl:t.source_url,image:t.image_url,servings:t.servings,cookingTime:t.cooking_time,ingredients:t.ingredients,...t.key&&{key:t.key}}},g=async e=>{try{let t=await u(`${l}/${e}?key=${c}`);h.recipe=m(t),h.bookmarks.some(t=>t.id===e)?h.recipe.bookmarked=!0:h.recipe.bookmarked=!1,console.log(h.recipe)}catch(e){throw e}},_=async e=>{try{h.search.query=e;let t=await u(`${l}?search=${e}&key=${c}`);console.log(t),h.search.results=t.data.recipes.map(e=>({id:e.id,title:e.title,publisher:e.publisher,image:e.image_url,...e.key&&{key:e.key}})),h.search.page=1}catch{throw error}},v=(e=h.search.page)=>{h.search.page=e;let t=(e-1)*h.search.resultsPerPage,r=e*h.search.resultsPerPage;return h.search.results.slice(t,r)},f=function(e){h.recipe.ingredients.forEach(t=>{t.quantity=t.quantity*e/h.recipe.servings,t.quantity=t.quantity.toFixed(3)}),h.recipe.servings=e},b=()=>{localStorage.setItem("bookmarks",JSON.stringify(h.bookmarks))},y=e=>{h.bookmarks.push(e),e.id===h.recipe.id&&(h.recipe.bookmarked=!0),b()},k=e=>{let t=h.bookmarks.findIndex(t=>t.id===e);h.bookmarks.splice(t,1),e===h.recipe.id&&(h.recipe.bookmarked=!1),b()},w=async e=>{try{console.log(Object.entries(e));let t=Object.entries(e).filter(e=>e[0].startsWith("ingredient")&&""!==e[1]).map(e=>{let t=e[1].replaceAll("","").split(",");if(3!==t.length)throw Error("Wrong ingredient");let[r,n,i]=t;return{quantity:r?+r:null,unit:n,description:i}}),r={title:e.title,source_url:e.sourceUrl,image_url:e.image,publisher:e.publisher,cooking_time:+e.cookingTime,servings:+e.servings,ingredients:t};console.log(t);let n=await p(`${l}?key=${c}`,r);h.recipe=m(n),y(h.recipe)}catch(e){throw e}};(()=>{let e=localStorage.getItem("bookmarks");e&&(h.bookmarks=JSON.parse(e))})();var $={};$=new URL("icons.c14567a0.svg",import.meta.url).toString();class E{_data;render=e=>{if(!e||0===e.length)return this.renderError();this._data=e;let t=this._generateMarkup();this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)};update=e=>{this._data=e;let t=this._generateMarkup(),r=Array.from(document.createRange().createContextualFragment(t).querySelectorAll("*")),n=Array.from(this._parentElement.querySelectorAll("*"));r.forEach((e,t)=>{let r=n[t];e.isEqualNode(r)||e.firstChild?.nodeValue.trim()===""||(r.textContent=e.textContent),e.isEqualNode(r)||Array.from(e.attributes).forEach(e=>{r.setAttribute(e.name,e.value)})})};_clear(){this._parentElement.innerHTML=""}renderSpinner(){let t=`
        <div class="spinner">
                <svg>
                  <use href="${e($)}#icon-loader"></use>
                </svg>
              </div>
        `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderError(t=this._errorMessage){let r=`
            <div class="error">
            <div>
              <svg>
                <use href="${e($)}#icon-alert-triangle"></use>
              </svg>
            </div>
            <p>${t}</p>
          </div>
        `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}renderMessage(t=this._message){let r=`
            <div class="message">
            <div>
              <svg>
                <use href="${e($)}#icon-smile"></use>
              </svg>
            </div>
            <p>${t}</p>
          </div>
        `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}}(Fraction=function(e,t){if(void 0!==e&&t)"number"==typeof e&&"number"==typeof t?(this.numerator=e,this.denominator=t):"string"==typeof e&&"string"==typeof t&&(this.numerator=parseInt(e),this.denominator=parseInt(t));else if(void 0===t){if("number"==typeof(num=e))this.numerator=num,this.denominator=1;else if("string"==typeof num){var r,n,i=num.split(" ");if(i[0]&&(r=i[0]),i[1]&&(n=i[1]),r%1==0&&n&&n.match("/"))return new Fraction(r).add(new Fraction(n));if(!r||n)return;if("string"==typeof r&&r.match("/")){var a=r.split("/");this.numerator=a[0],this.denominator=a[1]}else{if("string"==typeof r&&r.match("."))return new Fraction(parseFloat(r));this.numerator=parseInt(r),this.denominator=1}}}this.normalize()}).prototype.clone=function(){return new Fraction(this.numerator,this.denominator)},Fraction.prototype.toString=function(){if("NaN"===this.denominator)return"NaN";var e=this.numerator/this.denominator>0?Math.floor(this.numerator/this.denominator):Math.ceil(this.numerator/this.denominator),t=this.numerator%this.denominator,r=this.denominator,n=[];return 0!=e&&n.push(e),0!=t&&n.push((0===e?t:Math.abs(t))+"/"+r),n.length>0?n.join(" "):0},Fraction.prototype.rescale=function(e){return this.numerator*=e,this.denominator*=e,this},Fraction.prototype.add=function(e){var t=this.clone();return e instanceof Fraction?e=e.clone():e=new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator+=e.numerator,t.normalize()},Fraction.prototype.subtract=function(e){var t=this.clone();return e instanceof Fraction?e=e.clone():e=new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator-=e.numerator,t.normalize()},Fraction.prototype.multiply=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.numerator,t.denominator*=e.denominator;else{if("number"!=typeof e)return t.multiply(new Fraction(e));t.numerator*=e}return t.normalize()},Fraction.prototype.divide=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.denominator,t.denominator*=e.numerator;else{if("number"!=typeof e)return t.divide(new Fraction(e));t.denominator*=e}return t.normalize()},Fraction.prototype.equals=function(e){e instanceof Fraction||(e=new Fraction(e));var t=this.clone().normalize(),e=e.clone().normalize();return t.numerator===e.numerator&&t.denominator===e.denominator},Fraction.prototype.normalize=(t=function(e){return"number"==typeof e&&(e>0&&e%1>0&&e%1<1||e<0&&e%-1<0&&e%-1>-1)},r=function(e,t){if(!t)return Math.round(e);var r=Math.pow(10,t);return Math.round(e*r)/r},function(){if(t(this.denominator)){var e=r(this.denominator,9),n=Math.pow(10,e.toString().split(".")[1].length);this.denominator=Math.round(this.denominator*n),this.numerator*=n}if(t(this.numerator)){var e=r(this.numerator,9),n=Math.pow(10,e.toString().split(".")[1].length);this.numerator=Math.round(this.numerator*n),this.denominator*=n}var i=Fraction.gcf(this.numerator,this.denominator);return this.numerator/=i,this.denominator/=i,(this.numerator<0&&this.denominator<0||this.numerator>0&&this.denominator<0)&&(this.numerator*=-1,this.denominator*=-1),this}),Fraction.gcf=function(e,t){var r=[],n=Fraction.primeFactors(e),i=Fraction.primeFactors(t);return(n.forEach(function(e){var t=i.indexOf(e);t>=0&&(r.push(e),i.splice(t,1))}),0===r.length)?1:function(){var e,t=r[0];for(e=1;e<r.length;e++)t*=r[e];return t}()},Fraction.primeFactors=function(e){for(var t=Math.abs(e),r=[],n=2;n*n<=t;)t%n==0?(r.push(n),t/=n):n++;return 1!=t&&r.push(t),r},n=Fraction;class F extends E{_parentElement=document.querySelector(".recipe");_errorMessage="doesn't exist bruh!!!";_message="";addHandlerRender(e){["hashchange","load"].forEach(t=>window.addEventListener(t,e))}addHandlerUpdateServings(e){this._parentElement.addEventListener("click",t=>{let r=t.target.closest(".btn--update-servings");r&&e(+r.dataset.updateTo>=1?+r.dataset.updateTo:1)})}AddHandlerAddBookmark=e=>{this._parentElement.addEventListener("click",t=>{t.target.closest(".btn--bookmark")&&e()})};_generateMarkup(){let t=this._data.ingredients.map(t=>`
                <li class="recipe__ingredient">
                <svg class="recipe__icon">
                <use href="${e($)}#icon-check"></use>
                </svg>
                <div class="recipe__quantity">${null==t.quantity?"":new n(t.quantity).toString()}</div>
                <div class="recipe__description">
                <span class="recipe__unit">${t.unit}</span>
                ${t.description}
                </div>
                </li>
              `).join("");return` 
        <figure class="recipe__fig">
            <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img" />
            <h1 class="recipe__title">
                <span>${this._data.title}</span>
            </h1>
            </figure>

            <div class="recipe__details">
            <div class="recipe__info">
                <svg class="recipe__info-icon">
                <use href="${e($)}#icon-clock"></use>
                </svg>
                <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
                <span class="recipe__info-text">minutes</span>
            </div>
            <div class="recipe__info">
                <svg class="recipe__info-icon">
                <use href="${e($)}#icon-users"></use>
                </svg>
                <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
                <span class="recipe__info-text">servings</span>

                <div class="recipe__info-buttons">
                <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings-1}">
                    <svg>
                    <use href="${e($)}#icon-minus-circle"></use>
                    </svg>
                </button>
                <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings+1}">
                    <svg>
                    <use href="${e($)}#icon-plus-circle"></use>
                    </svg>
                </button>
                </div>
            </div>

            <div class="recipe__user-generated ${this._data.key?"":"hidden"}">
                <svg>
                <use href="${e($)}#icon-user"></use>
                </svg>
            </div>

            <button class="btn--round btn--bookmark">
                <svg class="">
                <use href="${e($)}#${this._data.bookmarked?"icon-bookmark-fill":"icon-bookmark"}"></use>
                </svg>
            </button>
            </div>

            <div class="recipe__ingredients">
            <h2 class="heading--2">Recipe ingredients</h2>
            <ul class="recipe__ingredient-list">
                ${t}
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
                <use href="${e($)}#icon-arrow-right"></use>
                </svg>
            </a>
            </div>`}}var S=new F;class q extends E{_parentElement=document.querySelector(".search");_data;getQuery(){return this._parentElement.querySelector(".search__field").value}addHandlerSearch(e){this._parentElement.addEventListener("submit",t=>{t.preventDefault(),e()})}}var M=new q;class x extends E{_parentElement=document.querySelector(".results");_errorMessage="No recipes found for that bruh!!!";_message="";_generateMarkup(){let t=window.location.hash.slice(1);return this._data.map(r=>`<li class="preview">
                <a class="preview__link ${r.id===t?"preview__link--active":""}" href="#${r.id}">
                <figure class="preview__fig">
                    <img src="${r.image}" alt="${r.title}" loading="lazy" />
                </figure>
                <div class="preview__data">
                    <h4 class="preview__title">${r.title}</h4>
                    <p class="preview__publisher">${r.publisher}</p>
                </div>
                <div class="recipe__user-generated ${r.key?"":"hidden"}">
                    <svg>
                    <use href="${e($)}#icon-user"></use>
                    </svg>
                </div>
                </a>
            </li>`).join("")}}var H=new x;class T extends E{_parentElement=document.querySelector(".bookmarks__list");_errorMessage="No bookmarks yet. Find a nice recipe and bookmark it ;)";_message="";AddHandlerRenderBookmarks(e){window.addEventListener("load",e)}_generateMarkup(){let t=window.location.hash.slice(1);return this._data.map(r=>`<li class="preview">
                <a class="preview__link ${r.id===t?"preview__link--active":""}" href="#${r.id}">
                <figure class="preview__fig">
                    <img src="${r.image}" alt="${r.title}" loading="lazy" />
                </figure>
                <div class="preview__data">
                    <h4 class="preview__title">${r.title}</h4>
                    <p class="preview__publisher">${r.publisher}</p>
                </div>
                <div class="recipe__user-generated ${r.key?"":"hidden"}">
                    <svg>
                    <use href="${e($)}#icon-user"></use>
                    </svg>
                </div>
                </a>
            </li>`).join("")}}var L=new T;class U extends E{_parentElement=document.querySelector(".pagination");addHandlerClick(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--inline");r&&e(+r.dataset.goto)})}_generateMarkup(){let t=this._data.page,r=Math.floor(this._data.results.length/this._data.resultsPerPage);return 1===t&&r>1?`
            <button data-goto="${t+1}" class="btn--inline pagination__btn--next">
            <span>Page ${t+1}</span>
            <svg class="search__icon">
              <use href="${e($)}#icon-arrow-right"></use>
            </svg>
          </button>`:t===r&&r>1?`
            <button data-goto="${t-1}" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${e($)}#icon-arrow-left"></use>
            </svg>
            <span>Page ${t-1}</span>
          </button>`:t<r?`
            <button data-goto="${t-1}" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${e($)}#icon-arrow-left"></use>
            </svg>
            <span>Page ${t-1}</span>
          </button>
          <button data-goto="${t+1}" class="btn--inline pagination__btn--next">
            <span>Page ${t+1}</span>
            <svg class="search__icon">
              <use href="${e($)}#icon-arrow-right"></use>
            </svg>
          </button>`:""}}var A=new U;class P extends E{_parentElement=document.querySelector(".upload");_window=document.querySelector(".add-recipe-window");_overlay=document.querySelector(".overlay");_btnOpen=document.querySelector(".nav__btn--add-recipe");_btnClose=document.querySelector(".btn--close-modal");_message="Recipe successfully added!";constructor(){super(),this._addHandlerShowWindow(),this._addHandlerCloseWindow()}toggleWindow(){this._overlay.classList.toggle("hidden"),this._window.classList.toggle("hidden")}_addHandlerShowWindow(){this._btnOpen.addEventListener("click",this.toggleWindow.bind(this))}_addHandlerCloseWindow(){this._btnClose.addEventListener("click",this.toggleWindow.bind(this)),this._overlay.addEventListener("click",this.toggleWindow.bind(this))}addHandlerUpload(e){this._parentElement.addEventListener("submit",t=>{t.preventDefault();let r=Object.fromEntries([...new FormData(this._parentElement)]);console.log(r),e(r)})}generateMarkup(){let e=`
  <form class="upload">
    <div class="upload__column">
      <h3 class="upload__heading">Recipe data</h3>
      <label>Title</label>
      <input value="TEST23" required name="title" type="text" />
      <label>URL</label>
      <input value="TEST23" required name="sourceUrl" type="text" />
      <label>Image URL</label>
      <input value="TEST23" required name="image" type="text" />
      <label>Publisher</label>
      <input value="TEST23" required name="publisher" type="text" />
      <label>Prep time</label>
      <input value="23" required name="cookingTime" type="number" />
      <label>Servings</label>
      <input value="23" required name="servings" type="number" />
    </div>

    <div class="upload__column">
      <h3 class="upload__heading">Ingredients</h3>
      <label>Ingredient 1</label>
      <input
        value="0.5,kg,Rice"
        type="text"
        required
        name="ingredient-1"
        placeholder="Format: 'Quantity,Unit,Description'"
      />
      <label>Ingredient 2</label>
      <input
        value="1,,Avocado"
        type="text"
        name="ingredient-2"
        placeholder="Format: 'Quantity,Unit,Description'"
      />
      <label>Ingredient 3</label>
      <input
        value=",,salt"
        type="text"
        name="ingredient-3"
        placeholder="Format: 'Quantity,Unit,Description'"
      />
      <label>Ingredient 4</label>
      <input
        type="text"
        name="ingredient-4"
        placeholder="Format: 'Quantity,Unit,Description'"
      />
      <label>Ingredient 5</label>
      <input
        type="text"
        name="ingredient-5"
        placeholder="Format: 'Quantity,Unit,Description'"
      />
      <label>Ingredient 6</label>
      <input
        type="text"
        name="ingredient-6"
        placeholder="Format: 'Quantity,Unit,Description'"
      />
    </div>

    <button class="btn upload__btn">
      <svg>
        <use href="src/img/icons.svg#icon-upload-cloud"></use>
      </svg>
      <span>Upload</span>
    </button>
  </form>
</div>
    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e),console.log(this._parentElement.innerHTML)}}var R=new P;const j=async()=>{try{let e=window.location.hash.slice(1);if(!e)return;S.renderSpinner(),H.update(v()),await g(e);let{recipe:t}=h;S.render(t)}catch(e){console.log(e)}},O=async()=>{try{H.renderSpinner();let e=M.getQuery();if(!e)return;await _(e),H.render(v()),A.render(h.search)}catch(e){}},I=async e=>{try{R.renderSpinner(),await w(e),console.log(h.recipe),S.render(h.recipe),L.render(h.bookmarks),R.renderMessage(),window.history.pushState(null,"",`#${h.recipe.id}`),setTimeout(function(){R.generateMarkup()},2e3)}catch(e){console.error(e),R.renderError(e)}};S.addHandlerRender(j),S.addHandlerUpdateServings(e=>{f(e),S.update(h.recipe)}),M.addHandlerSearch(O),A.addHandlerClick(e=>{H.render(v(e)),A.render(h.search)}),S.AddHandlerAddBookmark(function(){h.recipe.bookmarked?k(h.recipe.id):y(h.recipe),S.update(h.recipe),L.render(h.bookmarks)}),R.addHandlerUpload(I),L.AddHandlerRenderBookmarks(()=>{L.render(h.bookmarks)});
//# sourceMappingURL=index.01fbe8a2.js.map
