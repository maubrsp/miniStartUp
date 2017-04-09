app = function(){

    var test = function(){
        return 'hello app phone'
    }

    return{
        test: test,
    }
}

app.prototype = {
    contructor: app,
}