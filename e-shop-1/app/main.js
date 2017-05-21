(function(window) {
  
  function App() {
    var categories = dataBase.categories();
    var categoriesContainer = $('.category');
    for (var i = 0; i<categories.length; i++){
      categoriesContainer.append('<li><a id="' + categories[i].id + '" href="#">' + categories[i].name + '</a></li>');
    }

    $('.category a').click(function() {
      $('.category li').removeClass('active');
      $(this).closest('li').addClass('active');

      var category = dataBase.categoryById($(this).attr('id'));
      var products = category.products;
      var productContainer = $('.products');
      productContainer.html('');
      for(var i = 0; i<products.length;i++){
        productContainer.append('<div class="col-sm-6 col-md-4">'+
         '<div class="thumbnail">'+
          '<img src="assets/images/'+products[i].imgUrl+'" alt="'+products[i].name+'">'+
           '<div class="caption">'+
           '<h3>'+products[i].name+'</h3>'+
           '<p>'+products[i].price+' UAH</p>'+
           '<p><a href="#" class="btn btn-primary" role="button" id="'+products[i].id+'">Add to cart</a></p></div></div></div>'
      );}
    });

    $('.category a#all').click();

  }

  window.onload = App;
})(window);
