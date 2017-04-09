startUpView = function ( pDevice , selectFunc ) {
    var onSelect = selectFunc;
    var device = pDevice;
    var userSelection = "";

    var prepare = function(){
        document.getElementById('go_low').addEventListener("mousedown",function(){
            onSelect(userSelection , "hights");
            destroySplashScreen();
        });
         document.getElementById('go_hights').addEventListener("mousedown",function(){
            onSelect(userSelection , "low");
            destroySplashScreen();
        });
        initMenu();
    }
    
    var selector, elems, containerImage, selectedImage, selectedText, makeActive, currentMenu; 
    selector = '.device_icon_list';
    elems = document.querySelectorAll(selector);
    containerImage = document.getElementById('device');

    var makeActive = function() {
        selectedImage = document.getElementById('device_img'); 

        for (var i = 0; i < elems.length; i++) elems[i].classList.remove('active'); 

        setSelection( getSelectionFromelemnt(this.className) );
        this.classList.add('active');

    };

    var setSelection = function(currentMenu){
        userSelection = currentMenu;
        containerImage.className = "selected_device";
        containerImage.classList.add("icon_"+currentMenu);

        selectedText = document.getElementById('device_selected_title'); 
        selectedText.innerHTML = currentMenu;
    }

    var getSelectionFromelemnt = function(value){
        var result = (value+"").replace('device_icon_list ','');
        result = result.replace('icon_','');
        return result;
    }

    var initMenu = function(){
        var slct = null;
        for (var i = 0; i < elems.length; i++){
            elems[i].addEventListener('mousedown', makeActive);
            if((elems[i].className+"").toLowerCase().indexOf(device) != -1 ){
                slct = elems[i];
                setSelection( getSelectionFromelemnt(slct.className) );
                slct.classList.add('active');
            }
        } 
        return slct;
    }

    prepare();

    var destroySplashScreen = function(){
        document.getElementById('start_menu').innerHTML = "";
        document.getElementById('start_menu').innerHTML = "";
        //document.getElementById('start_menu')
    }

    var destroy = function(){
        document.getElementById('header').innerHTML = "";
    }


    return{
        destroy: destroy,
    }
}

startUpView.prototype = {
	constructor: startUpView,
}