app = function(){

    var test = function(){
        return 'hello app tv'
    }

    return{
        test: test,
    }
}

app.prototype = {
    contructor: app,
}