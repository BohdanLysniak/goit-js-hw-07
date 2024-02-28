const categories = document.querySelectorAll("ul > li.item");
console.log(`Number of categories: ${categories.length}`);

const titles = document.querySelectorAll("#categories .item h2");
titles.forEach(function (item) {
  console.log(`Category: ${item.textContent}`);

  const quantityOfItems = item.parentElement.querySelectorAll("ul > li");
  console.log(`Elements: ${quantityOfItems.length}`);
});
