//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=1; attempts=0; attemptsMax=1;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=false;
var tiAttempts=false;
var tiScore=false;
var startTime;
var colorBack="#FFFFFF"; colorButton="#800000"; colorText="#000000"; colorSele="#FF8080";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Felicitaciones"; messageTime=""; messageError="Losentimos"; messageErrorG="Losentimos"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var uniVal=5;
var a=["MzA=","MzA=","NQ==","MjU=","MTA="];var b=["MzA=","MzA=","NQ==","MjU=","MTA="];
var wordsGame="U2VtYW5hXzIz"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var canvas = document.getElementById("ardoraCanvasPie");var context = canvas.getContext("2d");
var radius=140;var arcs=[];
var arcCenterX=[150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150];var arcCenterY=[150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150];
var arcStrokeStyles=[colorText,colorText,colorText,colorText,colorText,colorText,colorText,colorText,colorText,colorText,colorText,colorText,colorText,colorText,colorText,colorText,colorText,colorText,colorText,colorText];var arcFillStyles=[colorBack,colorBack,colorBack,colorBack,colorBack,colorBack,colorBack,colorBack,colorBack,colorBack,colorBack,colorBack,colorBack,colorBack,colorBack,colorBack,colorBack,colorBack,colorBack,colorBack];
var arcIni=[0,0.314159265358979,0.628318530717959,0.942477796076938,1.25663706143592,1.5707963267949,1.88495559215388,2.19911485751286,2.51327412287183,2.82743338823081,3.14159265358979,3.45575191894877,3.76991118430775,4.08407044966673,4.39822971502571,4.71238898038469,5.02654824574367,5.34070751110265,5.65486677646163,5.96902604182061];var arcEnd=[0.314159265358979,0.628318530717959,0.942477796076938,1.25663706143592,1.5707963267949,1.88495559215388,2.19911485751286,2.51327412287183,2.82743338823081,3.14159265358979,3.45575191894877,3.76991118430775,4.08407044966673,4.39822971502571,4.71238898038469,5.02654824574367,5.34070751110265,5.65486677646163,5.96902604182061,6.28318530717959];
var indexColor=0;var colors=["#FFFF00","#3399FF","#FF9933","#78C85A","#97A5FF"];
