import * as model from "./model.js";

import recipeView from "./views/recipeView.js";
import searchView from "./views/searchView.js";
import resultsView from "./views/resultsView.js";
import bookmarksView from "./views/bookmarksView.js";
import paginationView from "./views/paginationView.js"
import addRecipeView from "./views/addRecipeView.js"

// import "core-js/stable";
// import "regenerator-runtime/runtime";

// if(module.hot){
//   module.hot.accept();
// }

const showRecipe = async () => {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;

    recipeView.renderSpinner();

    //update results view to mark selected search result
    resultsView.update(model.getSearchResulspage());

    //loading recipe
    await model.loadRecipe(id);

    //rendering recipe
    const {recipe} =  model.state; //destructured recipe variable, see the one in model.js for more indepth explanation.
    recipeView.render(recipe);
    
    
    
    
    
  } catch (err) {
    // recipeView.renderError();
    console.log(err);
    
  }

  
};

const showSearchResults = async () => {
  try{
    
    resultsView.renderSpinner();

    //get search query
    const query = searchView.getQuery();
    if (!query) return;

    //load search results
    await model.loadSearchResults(query);

    //render results
    resultsView.render(model.getSearchResulspage());

    //render pagination
    paginationView.render(model.state.search);

    
  }
  catch(err) {
    // resultsView.renderError();
  }
}

const ShowPaginationResults = (gotoPage) => {
  resultsView.render(model.getSearchResulspage(gotoPage));

    //render pagination
    paginationView.render(model.state.search);

    
}

const controlServings = (newServing) => {
  //update the recipe servings (in state)
  model.updateServings(newServing);

  recipeView.update(model.state.recipe);

  //update the recipe view
}

const controlAddBookmarks = function() {
  if(model.state.recipe.bookmarked) model.removeBookmark(model.state.recipe.id);
  else model.addBookmark(model.state.recipe);
  recipeView.update(model.state.recipe);
  bookmarksView.render(model.state.bookmarks);
}

const controlAddRecipe = async (newRecipe) => {
  try{
    addRecipeView.renderSpinner();
    
    //uploading new recipe
    await model.uploadRecipe(newRecipe);
    console.log(model.state.recipe);
    

    // render recipe
    recipeView.render(model.state.recipe);
    bookmarksView.render(model.state.bookmarks);

    //success msg
    addRecipeView.renderMessage();

    //change ID in URL
    window.history.pushState(null, '', `#${model.state.recipe.id}`);
    

    setTimeout(function(){
      addRecipeView.generateMarkup();
    }, 2000);
  }
  catch(err){
    console.error(err);
    addRecipeView.renderError(err);
  }  
}

const renderBookamarks = () => {
  bookmarksView.render(model.state.bookmarks);
}

const init = () => {
  recipeView.addHandlerRender(showRecipe);
  recipeView.addHandlerUpdateServings(controlServings);
  searchView.addHandlerSearch(showSearchResults);
  paginationView.addHandlerClick(ShowPaginationResults);
  recipeView.AddHandlerAddBookmark(controlAddBookmarks);
  addRecipeView.addHandlerUpload(controlAddRecipe);
  bookmarksView.AddHandlerRenderBookmarks(renderBookamarks);
}

init();
