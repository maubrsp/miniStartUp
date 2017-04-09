clientRequires = function(){
    var pRequires = function(){
        return ["./apps/app.tablet.js"];
    } 
    return {    requires: pRequires,    }
}
clientRequires.prototype = { constructor: clientRequires,}