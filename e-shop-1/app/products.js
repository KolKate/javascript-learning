function Product(id, name, imgUrl, price) {
	this.id = id;
	this.name = name;
	this.imgUrl = imgUrl;
	this.price = price;	
}

function Category(id, name) {
	this.id = id;
	this.name = name;
	this.products = [];
}

Category.prototype.add = function(product){
	this.products.push(product);
}

var dataBase = {
	categories: function(){
		return [fishCategory, fruitCategory, drinkCategory];
    },
    categoryById: function(id){
    	var categories = this.categories();
    	for(var i = 0; i<categories.length; i++){
    		if(id === categories[i].id){
    			return categories[i];
    		}
    	}
    }
};

var mintay1Product = new Product('mintay1', 'mintay', '', '90');
var mintay2Product = new Product('mintay2', 'mintay', '', '70');
var appleProduct = new Product('apple', 'apple', '', '35');
var kiviProduct = new Product('kivi', 'kivi', '', '110');
var codaProduct = new Product('coda', 'coda', '', '27');
var vineProduct = new Product('vine', 'vine', '', '160');

var fishCategory = new Category('fish', 'Fish');
var fruitCategory = new Category('fruit', 'Fruit');
var drinkCategory = new Category('drink', 'Drink');


fishCategory.add(mintay1Product);
fishCategory.add(mintay2Product);
fruitCategory.add(appleProduct);
fruitCategory.add(kiviProduct);
drinkCategory.add(codaProduct);
drinkCategory.add(vineProduct);
