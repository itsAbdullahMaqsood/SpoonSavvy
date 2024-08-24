import {API_URL, Key} from './config.js';
import {getJSON, sendJSON} from './helpers.js';
import { RES_PER_PAGE } from './config.js';

export const state = {  //this is going to be updated by the loadRecipe function
  recipe: {},
  search: {
    query: '',
    results: [],
    page: 1,
    resultsPerPage: RES_PER_PAGE,
  },
  bookmarks: [],
};

const createRecipeObject = function(data) {

   // let recipe = data.data.recipe;
  //OR using object destructuring
  const { recipe } =  data.data; //since recipe was on both sides so we can destructure it.

  return{
    //changing names with hashmap becuz we didn't like the ones given by browser e.g (source_url) etc...
    id: recipe.id,
    title: recipe.title,
    publisher: recipe.publisher,
    sourceUrl: recipe.source_url,
    image: recipe.image_url,
    servings: recipe.servings,
    cookingTime: recipe.cooking_time,
    ingredients: recipe.ingredients,
    ...(recipe.key && {key: recipe.key}),
  };
}

export const loadRecipe = async (id) => {

  try{
 
  const data = await getJSON(`${API_URL}/${id}?key=${Key}`);
 
  state.recipe = createRecipeObject(data);
  
  if(state.bookmarks.some(bookmarkedRecipe => bookmarkedRecipe.id === id)){
    state.recipe.bookmarked = true;
  }
  else state.recipe.bookmarked = false;
  
  console.log(state.recipe);
} 
catch (err){
  throw err;
} 
};
export const loadSearchResults = async (query) => {
  try{
    state.search.query = query;
    const data = await getJSON(`${API_URL}?search=${query}&key=${Key}`)
    console.log(data);
    state.search.results = data.data.recipes.map( rec => {
      return {
      id: rec.id,
      title: rec.title,
      publisher: rec.publisher,
      image: rec.image_url,
      ...(rec.key && {key: rec.key}),
      }
    });
    state.search.page = 1;
  }
  catch{
    throw error
  }
}

export const getSearchResulspage = (page = state.search.page) => {
  state.search.page = page;

  const start = (page - 1) * state.search.resultsPerPage;
  const end = page * state.search.resultsPerPage;

  return state.search.results.slice(start, end);
  console.log(state.recipe);
}

export const updateServings = function (newServings) {
  state.recipe.ingredients.forEach(ing => {
    ing.quantity = (ing.quantity * newServings)/state.recipe.servings;
    ing.quantity = ing.quantity.toFixed(3);
  });

  state.recipe.servings = newServings;
  
}

const persistBookmarks = () => {
  localStorage.setItem('bookmarks', JSON.stringify(state.bookmarks));
}

export const addBookmark = (recipe) =>{
  state.bookmarks.push(recipe);

  if(recipe.id === state.recipe.id) {
    state.recipe.bookmarked = true;
  }

 persistBookmarks();
}

export const removeBookmark = (id) => {
    const index = state.bookmarks.findIndex(el => el.id === id);
    state.bookmarks.splice(index, 1);
    if(id === state.recipe.id) {
      state.recipe.bookmarked = false;
  }

  persistBookmarks();
}

export const uploadRecipe = async (newRecipe) => {
  try{
  console.log(Object.entries(newRecipe));
  const ingredients = Object.entries(newRecipe).filter(
    entry => entry[0].startsWith('ingredient') && entry[1] !== ''
  ).map(ing => {
    const ingArr = ing[1].replaceAll('', '').split(',');
    if(ingArr.length !== 3) throw new Error('Wrong ingredient');
    const [quantity, unit, description] = ingArr;
    return {quantity: quantity? +quantity: null, unit, description};
  });

  const recipe = {
    title: newRecipe.title,
    source_url: newRecipe.sourceUrl,
    image_url: newRecipe.image,
    publisher: newRecipe.publisher,
    cooking_time: +newRecipe.cookingTime,
    servings: +newRecipe.servings,
    ingredients,

  }

  console.log(ingredients);
  const data = await sendJSON(`${API_URL}?key=${Key}`, recipe);
  state.recipe = createRecipeObject(data);
  addBookmark(state.recipe);
  }
  catch(err){
    throw err;
  }
}

const init = () => {
  const storage = localStorage.getItem('bookmarks');
  if(storage) state.bookmarks = JSON.parse(storage);
};

init();

// state.bookmarks = [];
// localStorage.clear();

