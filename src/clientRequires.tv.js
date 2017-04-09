clientRequires = function(){
    var pRequires = function(){
        return ["./apps/app.tv.js"];
    } 
    return {    requires: pRequires,    }
}
clientRequires.prototype = { constructor: clientRequires,}