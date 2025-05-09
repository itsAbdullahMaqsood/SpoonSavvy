function e(e){return e&&e.__esModule?e.default:e}var t=globalThis,r={},a={},i=t.parcelRequire5486;null==i&&((i=function(e){if(e in r)return r[e].exports;if(e in a){var t=a[e];delete a[e];var i={id:e,exports:{}};return r[e]=i,t.call(i.exports,i,i.exports),i.exports}var s=Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){a[e]=t},t.parcelRequire5486=i),(0,i.register)("27Lyk",function(e,t){Object.defineProperty(e.exports,"register",{get:()=>r,set:e=>r=e,enumerable:!0,configurable:!0});var r,a=new Map;r=function(e,t){for(var r=0;r<t.length-1;r+=2)a.set(t[r],{baseUrl:e,path:t[r+1]})}}),i("27Lyk").register(new URL("",import.meta.url).toString(),JSON.parse('["f9fpV","index.24ff9657.js","eyyUD","icons.c14567a0.svg"]'));const s="https://forkify-api.herokuapp.com/api/v2/recipes",n="caceb93a-d920-4fc9-a34b-b33976ae42c4",l=function(e){return new Promise(function(t,r){setTimeout(function(){r(Error(`Request took too long! Timeout after ${e} second`))},1e3*e)})},o=async function(e){try{let t=await Promise.race([fetch(e),l(2)]),r=await t.json();if(!t.ok)throw Error(`${r.message} ${t.status}`);return r}catch(e){throw e}},c=async function(e,t){try{let r=fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),a=await Promise.race([r,l(10)]),i=await a.json();if(!a.ok)throw Error(`${i.message} ${a.status}`);return i}catch(e){throw e}},d={recipe:{},search:{query:"",results:[],page:1,resultsPerPage:10},bookmarks:[]},u=function(e){let{recipe:t}=e.data;return{id:t.id,title:t.title,publisher:t.publisher,sourceUrl:t.source_url,image:t.image_url,servings:t.servings,cookingTime:t.cooking_time,ingredients:t.ingredients,...t.key&&{key:t.key}}},p=async e=>{try{let t=await o(`${s}/${e}?key=${n}`);d.recipe=u(t),d.bookmarks.some(t=>t.id===e)?d.recipe.bookmarked=!0:d.recipe.bookmarked=!1,console.log(d.recipe)}catch(e){throw e}},g=async e=>{try{d.search.query=e;let t=await o(`${s}?search=${e}&key=${n}`);console.log(t),d.search.results=t.data.recipes.map(e=>({id:e.id,title:e.title,publisher:e.publisher,image:e.image_url,...e.key&&{key:e.key}})),d.search.page=1}catch{throw error}},_=(e=d.search.page)=>{d.search.page=e;let t=(e-1)*d.search.resultsPerPage,r=e*d.search.resultsPerPage;return d.search.results.slice(t,r)},h=function(e){d.recipe.ingredients.forEach(t=>{t.quantity=t.quantity*e/d.recipe.servings,t.quantity=t.quantity.toFixed(3)}),d.recipe.servings=e},v=()=>{localStorage.setItem("bookmarks",JSON.stringify(d.bookmarks))},m=e=>{d.bookmarks.push(e),e.id===d.recipe.id&&(d.recipe.bookmarked=!0),v()},b=e=>{let t=d.bookmarks.findIndex(t=>t.id===e);d.bookmarks.splice(t,1),e===d.recipe.id&&(d.recipe.bookmarked=!1),v()},f=async e=>{try{console.log(Object.entries(e));let t=Object.entries(e).filter(e=>e[0].startsWith("ingredient")&&""!==e[1]).map(e=>{let t=e[1].replaceAll("","").split(",");if(3!==t.length)throw Error("Wrong ingredient");let[r,a,i]=t;return{quantity:r?+r:null,unit:a,description:i}}),r={title:e.title,source_url:e.sourceUrl,image_url:e.image,publisher:e.publisher,cooking_time:+e.cookingTime,servings:+e.servings,ingredients:t};console.log(t);let a=await c(`${s}?key=${n}`,r);d.recipe=u(a),m(d.recipe)}catch(e){throw e}};(()=>{let e=localStorage.getItem("bookmarks");e&&(d.bookmarks=JSON.parse(e))})();var k={};k=new URL("icons.c14567a0.svg",import.meta.url).toString();class y{_data;render=e=>{if(!e||0===e.length)return this.renderError();this._data=e;let t=this._generateMarkup();this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)};update=e=>{this._data=e;let t=this._generateMarkup(),r=Array.from(document.createRange().createContextualFragment(t).querySelectorAll("*")),a=Array.from(this._parentElement.querySelectorAll("*"));r.forEach((e,t)=>{let r=a[t];e.isEqualNode(r)||e.firstChild?.nodeValue.trim()===""||(r.textContent=e.textContent),e.isEqualNode(r)||Array.from(e.attributes).forEach(e=>{r.setAttribute(e.name,e.value)})})};_clear(){this._parentElement.innerHTML=""}renderSpinner(){let t=`
        <div class="spinner">
                <svg>
                  <use href="${e(k)}#icon-loader"></use>
                </svg>
              </div>
        `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderError(t=this._errorMessage){let r=`
            <div class="error">
            <div>
              <svg>
                <use href="${e(k)}#icon-alert-triangle"></use>
              </svg>
            </div>
            <p>${t}</p>
          </div>
        `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}renderMessage(t=this._message){let r=`
            <div class="message">
            <div>
              <svg>
                <use href="${e(k)}#icon-smile"></use>
              </svg>
            </div>
            <p>${t}</p>
          </div>
        `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}}class w extends y{_parentElement=document.querySelector(".recipe");_errorMessage="doesn't exist bruh!!!";_message="";addHandlerRender(e){["hashchange","load"].forEach(t=>window.addEventListener(t,e))}addHandlerUpdateServings(e){this._parentElement.addEventListener("click",t=>{let r=t.target.closest(".btn--update-servings");r&&e(+r.dataset.updateTo>=1?+r.dataset.updateTo:1)})}AddHandlerAddBookmark=e=>{this._parentElement.addEventListener("click",t=>{t.target.closest(".btn--bookmark")&&e()})};_generateMarkup(){let t=this._data.ingredients.map(t=>`
                <li class="recipe__ingredient">
                <svg class="recipe__icon">
                <use href="${e(k)}#icon-check"></use>
                </svg>
                <div class="recipe__quantity">${null==t.quantity?"":t.quantity}</div>
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
                <use href="${e(k)}#icon-clock"></use>
                </svg>
                <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
                <span class="recipe__info-text">minutes</span>
            </div>
            <div class="recipe__info">
                <svg class="recipe__info-icon">
                <use href="${e(k)}#icon-users"></use>
                </svg>
                <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
                <span class="recipe__info-text">servings</span>

                <div class="recipe__info-buttons">
                <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings-1}">
                    <svg>
                    <use href="${e(k)}#icon-minus-circle"></use>
                    </svg>
                </button>
                <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings+1}">
                    <svg>
                    <use href="${e(k)}#icon-plus-circle"></use>
                    </svg>
                </button>
                </div>
            </div>

            <div class="recipe__user-generated ${this._data.key?"":"hidden"}">
                <svg>
                <use href="${e(k)}#icon-user"></use>
                </svg>
            </div>

            <button class="btn--round btn--bookmark">
                <svg class="">
                <use href="${e(k)}#${this._data.bookmarked?"icon-bookmark-fill":"icon-bookmark"}"></use>
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
                <use href="${e(k)}#icon-arrow-right"></use>
                </svg>
            </a>
            </div>`}}var $=new w;class E extends y{_parentElement=document.querySelector(".search");_data;getQuery(){return this._parentElement.querySelector(".search__field").value}addHandlerSearch(e){this._parentElement.addEventListener("submit",t=>{t.preventDefault(),e()})}}var S=new E;class q extends y{_parentElement=document.querySelector(".results");_errorMessage="No recipes found for that bruh!!!";_message="";_generateMarkup(){let t=window.location.hash.slice(1);return this._data.map(r=>`<li class="preview">
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
                    <use href="${e(k)}#icon-user"></use>
                    </svg>
                </div>
                </a>
            </li>`).join("")}}var x=new q;class H extends y{_parentElement=document.querySelector(".bookmarks__list");_errorMessage="No bookmarks yet. Find a nice recipe and bookmark it ;)";_message="";AddHandlerRenderBookmarks(e){window.addEventListener("load",e)}_generateMarkup(){let t=window.location.hash.slice(1);return this._data.map(r=>`<li class="preview">
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
                    <use href="${e(k)}#icon-user"></use>
                    </svg>
                </div>
                </a>
            </li>`).join("")}}var T=new H;class L extends y{_parentElement=document.querySelector(".pagination");addHandlerClick(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--inline");r&&e(+r.dataset.goto)})}_generateMarkup(){let t=this._data.page,r=Math.floor(this._data.results.length/this._data.resultsPerPage);return 1===t&&r>1?`
            <button data-goto="${t+1}" class="btn--inline pagination__btn--next">
            <span>Page ${t+1}</span>
            <svg class="search__icon">
              <use href="${e(k)}#icon-arrow-right"></use>
            </svg>
          </button>`:t===r&&r>1?`
            <button data-goto="${t-1}" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${e(k)}#icon-arrow-left"></use>
            </svg>
            <span>Page ${t-1}</span>
          </button>`:t<r?`
            <button data-goto="${t-1}" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${e(k)}#icon-arrow-left"></use>
            </svg>
            <span>Page ${t-1}</span>
          </button>
          <button data-goto="${t+1}" class="btn--inline pagination__btn--next">
            <span>Page ${t+1}</span>
            <svg class="search__icon">
              <use href="${e(k)}#icon-arrow-right"></use>
            </svg>
          </button>`:""}}var M=new L;class U extends y{_parentElement=document.querySelector(".upload");_window=document.querySelector(".add-recipe-window");_overlay=document.querySelector(".overlay");_btnOpen=document.querySelector(".nav__btn--add-recipe");_btnClose=document.querySelector(".btn--close-modal");_message="Recipe successfully added!";constructor(){super(),this._addHandlerShowWindow(),this._addHandlerCloseWindow()}toggleWindow(){this._overlay.classList.toggle("hidden"),this._window.classList.toggle("hidden")}_addHandlerShowWindow(){this._btnOpen.addEventListener("click",this.toggleWindow.bind(this))}_addHandlerCloseWindow(){this._btnClose.addEventListener("click",this.toggleWindow.bind(this)),this._overlay.addEventListener("click",this.toggleWindow.bind(this))}addHandlerUpload(e){this._parentElement.addEventListener("submit",t=>{t.preventDefault();let r=Object.fromEntries([...new FormData(this._parentElement)]);console.log(r),e(r)})}generateMarkup(){let e=`
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
    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e),console.log(this._parentElement.innerHTML)}}var A=new U;const P=async()=>{try{let e=window.location.hash.slice(1);if(!e)return;$.renderSpinner(),x.update(_()),await p(e);let{recipe:t}=d;$.render(t)}catch(e){console.log(e)}},R=async()=>{try{x.renderSpinner();let e=S.getQuery();if(!e)return;await g(e),x.render(_()),M.render(d.search)}catch(e){}},j=async e=>{try{A.renderSpinner(),await f(e),console.log(d.recipe),$.render(d.recipe),T.render(d.bookmarks),A.renderMessage(),window.history.pushState(null,"",`#${d.recipe.id}`),setTimeout(function(){A.generateMarkup()},2e3)}catch(e){console.error(e),A.renderError(e)}};$.addHandlerRender(P),$.addHandlerUpdateServings(e=>{h(e),$.update(d.recipe)}),S.addHandlerSearch(R),M.addHandlerClick(e=>{x.render(_(e)),M.render(d.search)}),$.AddHandlerAddBookmark(function(){d.recipe.bookmarked?b(d.recipe.id):m(d.recipe),$.update(d.recipe),T.render(d.bookmarks)}),A.addHandlerUpload(j),T.AddHandlerRenderBookmarks(()=>{T.render(d.bookmarks)});
//# sourceMappingURL=index.24ff9657.js.map
