var axios = require("axios").default;
var options1 = {
  method: 'GET',
  url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/33631/analyzedInstructions',
  params: {stepBreakdown: 'true'},
  headers: {
    'x-rapidapi-key': '4cb263df0bmsh3ff5c04afde99b5p1ad726jsn1de166cb145e',
    'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
  }
};
axios.request(options1).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});

var options2 = {
  method: 'GET',
  url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/1118357/analyzedInstructions',
  params: {stepBreakdown: 'true'},
  headers: {
    'x-rapidapi-key': '4cb263df0bmsh3ff5c04afde99b5p1ad726jsn1de166cb145e',
    'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
  }
};
axios.request(options2).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});



var options3 = {
  method: 'GET',
  url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/649850/analyzedInstructions',
  params: {stepBreakdown: 'true'},
  headers: {
    'x-rapidapi-key': '4cb263df0bmsh3ff5c04afde99b5p1ad726jsn1de166cb145e',
    'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
  }
};
axios.request(options3).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});