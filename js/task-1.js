const categories = document.querySelectorAll("ul > li.item");
console.log(`Number of categories: ${categories.length}`);
console.log(categories);

const titles = document.querySelector("li.item > h2")
titles.forEach (function getTitle (title) {
  const titleName = title.textContent;
  console.log(`Category: ${titleName}`)
})
  

