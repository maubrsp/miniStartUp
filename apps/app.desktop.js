app = function(){

    var test = function(){
        return 'hello app desktop'
    }

    return{
        test: test,
    }
}

app.prototype = {
    contructor: app,
}