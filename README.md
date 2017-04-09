The purpose of this project is very simple:

- Iteract with user in about 20K;

- Capture the device but allow the user to choose more details of interaction;

- Load contents by stages, directed the proposals/intentions of use and capacity of the devices;

The code is very simple and minimalist just to validate the concept. The idea is implement this concept in best practice environments that are plugged into important/growing issues in the universe of web and progressive applications.

how to:

1. add bodyload function and embed just deviceStartUp
<body onload="bodyLoaded()">
  <script src="./deviceStartUp.js"></script>

2. configure your Requires js files and customize the visual and interactions

3. initialize the startup. It will load the css to the detected device and start loading the libraries into commonsRequires.js (put the libraries you will use on all the devices)

  function bodyLoaded(){
      _deviceStartUp = new deviceStartUp(onSplashReady , 
                                            commonsRequiresReady , 
                                            clientRequiresReady , 
                                            onUserSelected , 
                                            onAppReady , 
                                            ["./apps/utils/globals.js"]);
  }


4. When splashscreen is ready listen the event:

  function onSplashReady(){
    console.log('onSplashReady: ' + _deviceStartUp.splahsLoadeds() );
  };

5. When commonsRequires is ready listen the event:

  function commonsRequiresReady(){
    console.log('commonsRequiresReady: ' + _deviceStartUp.commonsLoaded() );
  };

6. When user choise listen to event:

  function onUserSelected(){
    console.log('onUserSelected: ' + _deviceStartUp.userHasSelect() );

  };

5. When the commonsRequires is ready listen the event:

  function clientRequiresReady(){
    console.log('clientRequiresReady: ' + _deviceStartUp.clientDataLoaded() );
  };


 6. when all actions are done listen the event and initialize the device app.

   function onAppReady(){
    console.log('onAppReady' );
     _deviceStartUp.destroy();
    var application = new app();
    console.log(application.test());
  };

