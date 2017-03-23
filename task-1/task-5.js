function A(){
  B();
}

function B(a){
  function C(){
    console.info(a);
  }
  C();
}

var a = 'Success!';
A();