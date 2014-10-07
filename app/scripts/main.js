console.log('The Iron Yard Rocks');

var center =$('#list'),
shopname, title, price, picture, currency, page;

etsyItems.results.forEach(function(v){

  v.Images.forEach(function(y){
  picture = "<img src='" + y.url_170x135 + "'/>";
  });

  title = "<p class='t'>" + v.title + "</p>";

  currency = "<p class='s'>" + v.currency_code + "</p>";

  price = "<p class='r'>" + v.price +"</p>";

  shopname = "<p class='u'>" + v.Shop.shop_name +"</p>";

var page = '<li>' + picture + title + shopname + currency + price + '</li>';
center.append(page);
})
