// const addCat = function (name, favouriteFood, source){
const addCat = function (){

  //Create the parent container and it's class
  const catListContainer = document.createElement('ul');
  catListContainer.classList.add('cat');

  //2. Create the first child list item
  const catName = document.createElement('li');
  catName.innerText = "Name: Maggie";
  // catName.innerText = "Name: " + name;

  //3. Create the second child list item
  const catFavouriteFood = document.createElement('li');
  catFavouriteFood.innerText = "Favourite Food: Ham";
  // catFavouriteFood.innerText = "Favourite Food: " + favouriteFood

  //4. Create the third child list item
  const catPicSource = document.createElement('li');
  catPicSource.innerText = "image";
  // catPicSource.innerHTML = '<img width="500" src="'+ source + '">';


  //5. Append the chilren to the parent
  catListContainer.appendChild(catName);
  catListContainer.appendChild(catFavouriteFood);
  catListContainer.appendChild(catPicSource);
  // catFavouriteFood.appendChild(catPicSource);
  // catName.appendChild(catFavouriteFood);
  // catListContainer.appendChild(catName);

  //6. Add it all to the cats list
  // const catsBit = document.querySelector("#cats");
  const catsBit = document.getElementById("cats");
  console.log(catsBit);
  console.log(catListContainer);
  catsBit.appendChild(catListContainer);

}

// const CATS_ARRAY = [
//   { name: "Boba",
//     food: "Sock Fluff",
//     image: "http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg",
//     image_width: "500"
//   },
//
//   { name: "Barnaby",
//     food: "Tuna",
//     image: "https://68.media.tumblr.com/88d0fcf2b84a7b098dda839130597569/tumblr_okuo4teiql1uhevdso1_1280.jpg",
//     image_width: "500"
//   },
//
//   { name: "Max",
//     food: "Whiskas Temptations",
//     image: "http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg",
//     image_width: "500"
//   },
// ];
//
//
// const createListContainer = function(){
//   const catListContainer = document.createElement('ul');
//   catListContainer.classList.add('cat');
// }
//
//

addCat();
// addCat("http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg");

// addCat("Maggie", "Ham", "meow");
