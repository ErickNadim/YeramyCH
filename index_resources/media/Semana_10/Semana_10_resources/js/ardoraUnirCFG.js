//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=7; attempts=0; attemptsMax=1;
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
var colorBack="#FFFFFF"; colorButton="#800000"; colorText="#000000"; colorSele="#FF8080";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Felicitaciones"; messageTime="Tiempo agotado"; messageError="Losentimos"; messageErrorG="Losentimos"; messageAttempts="Intentalo denuevo"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="U2VtYW5hXzEw"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var joinPar=[["RnJ1dGE=", "TWFuemFuYQ=="],["RWxlY3Ryb2RvbWVzdGljbw==", "TGljdWFkb3Jh"],["SGVycmFtaWVudGE=", "TWFydGlsbG8="],["Um9wYQ==", "UG9sZXJhcw=="],["Q2FudGFudGU=", "TWljaGFlbCBqYWNrc29u"],["QWNjZXNvcmlv", "Q29sbGFyZXM="],["TWFyY2Fz", "QWRpZGFz"]];
var c=[[5,7],[16,9],[11,8],[4,7],[8,15],[9,8],[6,6]];
var con1=["Fruta","Electrodomestico","Herramienta","Ropa","Cantante","Accesorio","Marcas"];
var con2=["Licuadora","Martillo","Collares","Michael jackson","Manzana","Adidas","Poleras"];
var con3=["Saludable","Fasilita"];
var sel1=""; join1=[]; join2=[];
