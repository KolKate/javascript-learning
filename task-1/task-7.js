function A(){
  var a = 'Success!';
}

function B(){
  var a = new A();
  console.info(a.a);
}

B();