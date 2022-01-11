

function receivesAFunction(cbf){
    return cbf();
}

function returnsANamedFunction(){
    return function hi(){
        console.log('hi');
    }
}

function returnsAnAnonymousFunction(){
    return function(){
        console.log('returned an anon. function');
    }
}