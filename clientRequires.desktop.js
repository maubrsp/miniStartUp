clientRequires = function(){
    var pRequires = function(){
        return ["./apps/app.desktop.js"];
    } 
    return {    requires: pRequires,    }
}
clientRequires.prototype = { constructor: clientRequires,}