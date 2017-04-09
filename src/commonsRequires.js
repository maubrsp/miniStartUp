commonsRequires = function(){
    var pRequires = function(){
        var result = ["http.js","three.min.js","Tween.js","OrbitControls.js","OBJLoader.js","FBOUtils.js"];
        result.forEach(function(value,index,array){
            array[index] = VENDOR_FOLDER + array[index];
        })
        return result;
    }
    return {    requires: pRequires,    }
}
commonsRequires.prototype = { constructor: commonsRequires,}