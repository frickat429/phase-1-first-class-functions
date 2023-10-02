function receivesAFunction(callbackFunction) {
callbackFunction()
} 

function returnsANamedFunction() {
    return function named() {
        console.log(Breezy)
    }
}

function returnsAnAnonymousFunction() {
    return function () {
        comsole.log("noName")
    }
}



