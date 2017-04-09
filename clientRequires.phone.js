clientRequires = function(){
    var pRequires = function(){
        return ["./apps/app.phone.js"];
    } 
    return {    requires: pRequires,    }
}
clientRequires.prototype = { constructor: clientRequires,}