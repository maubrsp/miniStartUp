app = function(){

    var test = function(){
        return 'hello app tablet'
    }

    return{
        test: test,
    }
}

app.prototype = {
    contructor: app,
}