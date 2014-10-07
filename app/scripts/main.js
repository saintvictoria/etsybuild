console.log('The Iron Yard Rocks');

var center =$('#list'),
shopname, title, price, picture, currency, page;

etsyItems.results.forEach(function(v){

  v.Images.forEach(function(y){
  picture = '<img src="' + y.url_170x135 + '">';
  });

  title = "<p class='t'>" + v.title + "</p>";

  currency = "<p>" + v.currency_code + "</p>";

  price = "<p>" + v.price +"</p>";

  shopname = "<p>" + v.Shop.shop_name +"</p>";

var page = '<li>' + picture + title + shopname + currency + price + '</li>';
center.append(page);
})

// var title = etsyItems.results.forEach(function(it) {
// title = it.title;
// console.log(title);
// });

// var shopname = etsyItems.results.forEach(function(sh){
//   console.log(sh.Shop.shop_name)
// });

// var price =etsyItems.results.forEach(function(pc) {
//   price = pc.price;
//   console.log(price);
// });

// var currency = etsyItems.results.forEach(function(cc){
//   currency = cc.currency_code;
//   console.log(currency);
// });

 // etsyItems.results.forEach(function(x) {
 // x.Images.forEach(function(y){
 //   var picture = y.url_170x135;
 //   console.log(picture);
 // });
 // });
