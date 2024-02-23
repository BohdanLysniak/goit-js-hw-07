const categories = document.querySelectorAll("ul > li.item");
console.log(`Number of categories: ${categories.length}`);

const titles = document.querySelectorAll("h2");
titles.forEach(function (item) {
  console.log(`Category: ${item.textContent}`);

  const quntityOfItems = item.parentElement.querySelectorAll("ul > li");
  console.log(quntityOfItems)
  console.log(`Elements: ${quntityOfItems.length}`);
});
