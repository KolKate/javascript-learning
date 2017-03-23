function A(){
  B();
}

function B(){
  return 'Success!';
}

console.info(A());