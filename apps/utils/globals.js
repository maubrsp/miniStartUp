const CLIENT_BROWSER_DATA = 'CLIENT_BROWSER_DATA';
const VENDOR_FOLDER = "./vendor/";
const ASSETS_FOLDER = "./assets/";
const APP_FOLDER = "./apps/";
const TEST_FOLDER = "./test/";

var globals = {};

function addGlobal(id,value){  globals[id] = value; };

function getGlobal(id){ return globals[id]; };

function getGlobals(){
  return globals;
};

function JSONCleanParse(value){
  s = value;
  s = s.replace(/\\n/g, "\\n").replace(/\\'/g, "\\'").replace(/\\"/g, '\\"').replace(/\\&/g, "\\&").replace(/\\r/g, "\\r").replace(/\\t/g, "\\t").replace(/\\b/g, "\\b").replace(/\\f/g, "\\f");
  s = s.replace(/[\u0000-\u0019]+/g,"");
  return JSON.parse(s);
}


