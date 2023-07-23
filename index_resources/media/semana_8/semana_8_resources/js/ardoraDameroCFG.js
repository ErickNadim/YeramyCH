//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=0; attempts=0; attemptsMax=1;
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
var timeOnMessage=5; messageOk="FELICITACIONES"; messageTime="TIEMPO AGOTADO"; messageError="LOSENTIMOS"; messageErrorG="LOSENTIMOS"; messageAttempts="INTENTELO DENUEVO"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var xCell=["TA==","QQ==","IA==","TQ==","VQ==","Uw==","SQ==","Qw==","QQ==","IA==","RQ==","Uw==","IA==","RQ==","TA==","IA==","QQ==","Ug==","VA==","RQ==","IA==","TQ==","QQ==","Uw==","IA==","RA==","SQ==","Ug==","RQ==","Qw==","VA==","Tw==","LA==","IA==","RQ==","Tg==","VA==","Ug==","QQ==","IA==","UA==","Tw==","Ug==","IA==","IA==","RQ==","TA==","IA==","Tw==","SQ==","RA==","Tw==","IA==","WQ==","IA==","Vg==","QQ==","IA==","QQ==","TA==","IA==","Qw==","Tw==","Ug==","QQ==","Wg==","Tw==","Tg==","Lg=="];
var que=["Yo quiero que este sea el mundo que conteste Del este hasta oeste y bajo el mismo sol Ahora nos vamos, si juntos celebramos Aquí todos estamos bajo el","Cómo describir el enigma de tus ojos Ay cómo sabrán, tus lindos labios rojos Quiero ir más allá, que me entregues todo Ahí quiero calmar, toditos mis","Si pudiera bajarte una estrella del cielo Lo haria sin pensarlo dos veces Porque te quiero, ayy Y hasta un lucero oh","Hay algo que me gusta de ti (bebé) Y ese algo me encanta (me encanta) Siento que eres necesaria para mí","Me dicen que eres hiedra venenosa, espina de rosa Pero yo te quiero así, infame hermosa Oh oh oh, espina de rosa"];
var yCell=["QUxWQVJPIFNPTEVSLUVMIE1JU01PIFNPTA==","QkVTQU1FIFZBTEVOVElOTw==","Q1VBTkRPIE1FIEVOQU1PUk8gRU5SSVFVRQ==","QUxHTyBNRSBHVVNUQSBERSBUSQ==","RVNQSU5BIERFIFJPU0E="];
var pos=[["2","1","56","9","18","32","3","6","42","15","11","28","0","14","47","10","4","7","12","22","49","13","24","52","60"],["0","20","0","17","0","29","16","0","23","0","35","36","19","27","68","63"],["8","5","39","0","26","67","21","0","46","25","0","0","57","0","0","38","0","34","0","0","43","50","0","0","0"],["59","0","0","0","40","0","0","44","0","0","0","31","65","45","51","0","48","37","0"],["0","0","41","0","0","0","53","0","0","55","64","0","0","0"]];
var upos=[["","","","","","","","","","","","","","","","","","","","","","","","",""],["","","","","","","","","","","","","","","",""],["","","","","","","","","","","","","","","","","","","","","","","","",""],["","","","","","","","","","","","","","","","","","",""],["","","","","","","","","","","","","",""]];
var uCell=["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""];
var colCount=15;
var showE=true;
var typeD=1;var tiCor=true;
var colDef=0; col=1; row=1; inQue=0; colorError="#FF0000";
var wordsGame="c2VtYW5hXzg="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
