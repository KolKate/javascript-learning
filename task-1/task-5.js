function A(){
  B();
}

function B(){
  function C(){
    console.info(a);
  }
  C();
}

var a = 'Success!';
A(a);