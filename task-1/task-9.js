function A(){
  this.a = 'Success!';
}

function B(){
  var a = new A();
}

var a = new B();
console.info(a.a);