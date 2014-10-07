console.log('The Iron Yard Rocks');

var container =$('#list'),
shopname, title, price, picture, currency, page;

etsyItems.results.forEach(function(v){
  
  v.Images.forEach(function(y){
  picture = '<img src="' + y.url_170x135 + '">';
  });

  title = v.title;

  currency = v.currency_code;

  price = v.price;

  shopname = v.Shop.shop_name;

var page = '<li>' + picture + title + shopname + currency + price + '</li>';
container.append(page);
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
