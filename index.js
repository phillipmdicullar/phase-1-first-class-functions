function receivesAFunction(callback) {
      callback();
}

function returnsANamedFunction(){
    function namedFunction(){

    }
    return namedFunction;
}


const returnsAnAnonymousFunction = function(){
    return function(){};
    
};
