console.log('The Iron Yard Rocks');

var container =$('list'),
shopname, title, price, image;


// var container = $(etsyItems)


var title = etsyItems.results.forEach(function(it) {
title = it.title;
console.log(title);
});

var shopname = etsyItems.results.forEach(function(sh){
  console.log(sh.Shop.shop_name)
});
