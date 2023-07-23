//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=1; attempts=0; attemptsMax=1;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=true;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=false;
var tiAttempts=false;
var tiScore=false;
var startTime;
var colorBack="#FFFFFF"; colorButton="#80FF00"; colorText="#000000"; colorSele="#FF80C0";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Felicitaciones"; messageTime=""; messageError="Losentimos"; messageErrorG="Losentimos"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="U2VtYW5hXzIy"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var graph;var axes;var dPoints=[];var dPointsState=[];var stateMouse=-1;var mouseX=0;var mouseY=0;
var yStep=50;var xPadding=0;var yPadding = 30;var hFont=10;var iniAxe=0;
var yStepDiv=10;
var maxY=380;
var c1=["MjEw","MzAw","MzA=","MTgw","NTA=","Mjkw","NzA=","MTQw","NjA=","MjA="];
var c2=["MTEw","MTIw","MzMw","NDA=","MTUw","MTYw","MTcw","Mjgw","MTkw","MjAw"];
var c3=["MTA=","MjIw","MTMw","MjQw","MjUw","MjYw","Mjcw","MTgw","OTA=","MTAw"];
var data={ values:[{X:"Martin",Y:210},{X:"Aimi",Y:300},{X:"Daniela",Y:30},{X:"Robert",Y:180},{X:"Jorge",Y:50},{X:"Melo",Y:290},{X:"Jony",Y:70},{X:"Jhanpier",Y:140},{X:"Paul",Y:60},{X:"Cristian",Y:20},]};
var data2={ values:[{X:"Martin",Y:110},{X:"Aimi",Y:120},{X:"Daniela",Y:330},{X:"Robert",Y:40},{X:"Jorge",Y:150},{X:"Melo",Y:160},{X:"Jony",Y:170},{X:"Jhanpier",Y:280},{X:"Paul",Y:190},{X:"Cristian",Y:200},]};
var dPoints2=[];var dPoints2State=[];
var data3={ values:[{X:"Martin",Y:10},{X:"Aimi",Y:220},{X:"Daniela",Y:130},{X:"Robert",Y:240},{X:"Jorge",Y:250},{X:"Melo",Y:260},{X:"Jony",Y:270},{X:"Jhanpier",Y:180},{X:"Paul",Y:90},{X:"Cristian",Y:100},]};
var dPoints3=[];var dPoints3State=[];
var selectedG=0;
