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

var mintay1Product = new Product('mintay1', 'mintay', 'mintay1.jpg', '90');
var mintay2Product = new Product('mintay2', 'mintay', 'mintay2.jpg', '70');
var appleProduct = new Product('apple', 'apple', 'apple.jpg', '35');
var kiviProduct = new Product('kivi', 'kivi', 'kivi.jpg', '110');
var codaProduct = new Product('coda', 'coda', 'soda.jpg', '27');
var vineProduct = new Product('vine', 'vine', 'wine.jpg', '160');

var allCategory = new Category('all', 'All');
var fishCategory = new Category('fish', 'Fish');
var fruitCategory = new Category('fruit', 'Fruit');
var drinkCategory = new Category('drink', 'Drink');

fishCategory.add(mintay1Product);
fishCategory.add(mintay2Product);
fruitCategory.add(appleProduct);
fruitCategory.add(kiviProduct);
drinkCategory.add(codaProduct);
drinkCategory.add(vineProduct);

var dataBase = {
	_trueCategories: [fishCategory, fruitCategory, drinkCategory],
	_initAllCategory: function() {
		for (var i = 0; i < this._trueCategories.length; i++){
			allCategory.products = allCategory.products.concat(this._trueCategories[i].products);
		}
	},
	categories: function() {
		var categories = [allCategory];
		categories = categories.concat(this._trueCategories);
		return categories;
    },
    categoryById: function(id) {
    	var categories = this.categories();
    	for(var i = 0; i < categories.length; i++){
    		if(id === categories[i].id){
    			return categories[i];
    		}
    	}
    }
};

dataBase._initAllCategory();

