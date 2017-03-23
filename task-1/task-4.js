function A(a){
  B();
}

function B(){
  console.info(a);
}

var a = 'Success!';
A(a);