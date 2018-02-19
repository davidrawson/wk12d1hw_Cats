const addCat = function (name, favouriteFood, source){

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
  catPicSource.innerHTML = source;

  //5. Append the chilren to the parent
  catListContainer.appendChild(catName);
  catListContainer.appendChild(catFavouriteFood);
  catListContainer.appendChild(catPicSource);

  //6. Add it all to the cats list
  const cats = document.getElementById('cats');
  cats.appendChild(catListContainer);

}





addCat("Maggie", "Ham", "meow");
