const CATS_ARRAY = [
  { name: "Boba",
    food: "Sock Fluff",
    image: "http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg",
    image_width: "500"
  },

  { name: "Barnaby",
    food: "Tuna",
    image: "https://68.media.tumblr.com/88d0fcf2b84a7b098dda839130597569/tumblr_okuo4teiql1uhevdso1_1280.jpg",
    image_width: "500"
  },

  { name: "Max",
    food: "Whiskas Temptations",
    image: "http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg",
    image_width: "500"
  },
];

var app = function(){
  for (let cat of CATS_ARRAY) {
    addCat(cat.name, cat.food, cat.image, cat.image_width);
  }
}

const createListContainer = function(){
  const catListContainer = document.createElement('ul');
  catListContainer.classList.add('cat');
  return catListContainer;
}

const createCatName = function(name){
  const catName = document.createElement('li');
  catName.innerText = "Name: " + name;
  console.log("create cat name", catName);
  return catName;
}

const createFavouriteFood = function(favouriteFood){
  const catFavouriteFood = document.createElement('li');
  catFavouriteFood.innerText = "Favourite food: " + favouriteFood;
  console.log("create favourite food", catFavouriteFood);
  return catFavouriteFood;
}

const createCatImage = function(image, image_width){
    const catPicSource = document.createElement('img');
    catPicSource.setAttribute('width', image_width);
    catPicSource.setAttribute('src', image);
    console.log("create cat image", catPicSource);
    return catPicSource;
}

const addCat = function(name, food, image, image_width){
  const catListContainer = createListContainer();
  const catName = createCatName(name);
  const catFavouriteFood = createFavouriteFood(food);
  const catImage = createCatImage(image, image_width);
  appendElement(catListContainer, catName, catFavouriteFood, catImage)
}

const appendElement = function(catListContainer, catName, catFavouriteFood, catImage){
  catListContainer.appendChild(catName);
  catListContainer.appendChild(catFavouriteFood);
  catListContainer.appendChild(catImage);
  console.log("cat list container", catListContainer);
  const catsBit = document.getElementById("cats");
  catsBit.appendChild(catListContainer);
}

document.addEventListener("DOMContentLoaded", app);
