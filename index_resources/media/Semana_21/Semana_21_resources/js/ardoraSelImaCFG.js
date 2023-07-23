//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=9; attempts=0; attemptsMax=1;
var score=0; scoreMax=9; scoreInc=1; scoreDec=1
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
var fPreg="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Felicitaciones"; messageTime="";messageError="Losentimos";messageErrorG="Losentimos"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var actMaxWidth="600"; actMaxHeight="";indexQ=0;dirMedia="Semana_21_resources/media/";
var quest=[["Tiene motor y elice","",""],["Mamífero ligero con orejas largas ","",""],["Dispositivo portátil ","",""],["Personaje animado tipo luchador ","",""],["Tiene motor y 4 Ruedas","",""],["Dispositivo con teclados, portátil ","",""],["Consola con CPU y un monitor.","",""],["Dispositivo que captura y almacena imágenes","",""],["Es una de los accesorios mas impotantes de una PC ","",""]];
var altQuest=["","","","","","","","",""];
var media=[["MQ==","QXZpb25ldGE=","0_avioneta.jpg",""],["Mg==","Q2hhY2FtYXJjYQ==","0_1200px-Vicu__as_chacamarca.jpg",""],["Mw==","QWxhc2th","0_Alaska.jpg",""],["NA==","VGFibGV0","0_tablet.jpg",""],["NQ==","UG9rZW1vbg==","0_Hawlucha.jpg",""],["Ng==","Q2FtaW9uZXRh","0_camioneta.jpg",""],["Nw==","TGFwdG9w","0_comp.jpg",""],["OA==","Q29tcHV0YWRvcmE=","0_computadoras.jpg",""],["OQ==","Q2FtYXJvZ3JhZm8=","0_camarografo.jpg",""],["MTA=","TW91c2U=","0_mouse.jpg",""]];
var alt=["","","","","","","","","",""];
var dat=[["MQ==","MQ==","MQ==","MQ==","MQ==","MA=="],["MQ==","Mg==","MA==","MQ==","MQ==","MA=="],["MQ==","Mw==","MA==","MQ==","MQ==","MA=="],["MQ==","NA==","MA==","MQ==","MQ==","MA=="],["MQ==","NQ==","MA==","MQ==","MQ==","MA=="],["MQ==","Ng==","MA==","MQ==","MQ==","MA=="],["MQ==","Nw==","MA==","MQ==","MQ==","MA=="],["MQ==","OA==","MA==","MQ==","MQ==","MA=="],["MQ==","OQ==","MA==","MQ==","MQ==","MA=="],["MQ==","MTA=","MA==","MQ==","MQ==","MA=="],["Mg==","MQ==","MA==","MQ==","MQ==","MA=="],["Mg==","Mg==","MA==","MQ==","MQ==","MA=="],["Mg==","Mw==","MQ==","MQ==","MQ==","MA=="],["Mg==","NA==","MA==","MQ==","MQ==","MA=="],["Mg==","NQ==","MA==","MQ==","MQ==","MA=="],["Mg==","Ng==","MA==","MQ==","MQ==","MA=="],["Mg==","Nw==","MA==","MQ==","MQ==","MA=="],["Mg==","OA==","MA==","MQ==","MQ==","MA=="],["Mg==","OQ==","MA==","MQ==","MQ==","MA=="],["Mg==","MTA=","MA==","MQ==","MQ==","MA=="],["Mw==","MQ==","MA==","MQ==","MQ==","MA=="],["Mw==","Mg==","MA==","MQ==","MQ==","MA=="],["Mw==","Mw==","MA==","MQ==","MQ==","MA=="],["Mw==","NA==","MQ==","MQ==","MQ==","MA=="],["Mw==","NQ==","MA==","MQ==","MQ==","MA=="],["Mw==","Ng==","MA==","MQ==","MQ==","MA=="],["Mw==","Nw==","MA==","MQ==","MQ==","MA=="],["Mw==","OA==","MA==","MQ==","MQ==","MA=="],["Mw==","OQ==","MA==","MQ==","MQ==","MA=="],["Mw==","MTA=","MA==","MQ==","MQ==","MA=="],["NA==","MQ==","MA==","MQ==","MQ==","MA=="],["NA==","Mg==","MA==","MQ==","MQ==","MA=="],["NA==","Mw==","MA==","MQ==","MQ==","MA=="],["NA==","NA==","MA==","MQ==","MQ==","MA=="],["NA==","NQ==","MQ==","MQ==","MQ==","MA=="],["NA==","Ng==","MA==","MQ==","MQ==","MA=="],["NA==","Nw==","MA==","MQ==","MQ==","MA=="],["NA==","OA==","MA==","MQ==","MQ==","MA=="],["NA==","OQ==","MA==","MQ==","MQ==","MA=="],["NA==","MTA=","MA==","MQ==","MQ==","MA=="],["NQ==","MQ==","MA==","MQ==","MQ==","MA=="],["NQ==","Mg==","MA==","MQ==","MQ==","MA=="],["NQ==","Mw==","MA==","MQ==","MQ==","MA=="],["NQ==","NA==","MA==","MQ==","MQ==","MA=="],["NQ==","NQ==","MA==","MQ==","MQ==","MA=="],["NQ==","Ng==","MQ==","MQ==","MQ==","MA=="],["NQ==","Nw==","MA==","MQ==","MQ==","MA=="],["NQ==","OA==","MA==","MQ==","MQ==","MA=="],["NQ==","OQ==","MA==","MQ==","MQ==","MA=="],["NQ==","MTA=","MA==","MQ==","MQ==","MA=="],["Ng==","MQ==","MA==","MQ==","MQ==","MA=="],["Ng==","Mg==","MA==","MQ==","MQ==","MA=="],["Ng==","Mw==","MA==","MQ==","MQ==","MA=="],["Ng==","NA==","MA==","MQ==","MQ==","MA=="],["Ng==","NQ==","MA==","MQ==","MQ==","MA=="],["Ng==","Ng==","MA==","MQ==","MQ==","MA=="],["Ng==","Nw==","MQ==","MQ==","MQ==","MA=="],["Ng==","OA==","MA==","MQ==","MQ==","MA=="],["Ng==","OQ==","MA==","MQ==","MQ==","MA=="],["Ng==","MTA=","MA==","MQ==","MQ==","MA=="],["Nw==","MQ==","MA==","MQ==","MQ==","MA=="],["Nw==","Mg==","MA==","MQ==","MQ==","MA=="],["Nw==","Mw==","MA==","MQ==","MQ==","MA=="],["Nw==","NA==","MA==","MQ==","MQ==","MA=="],["Nw==","NQ==","MA==","MQ==","MQ==","MA=="],["Nw==","Ng==","MA==","MQ==","MQ==","MA=="],["Nw==","Nw==","MA==","MQ==","MQ==","MA=="],["Nw==","OA==","MQ==","MQ==","MQ==","MA=="],["Nw==","OQ==","MA==","MQ==","MQ==","MA=="],["Nw==","MTA=","MA==","MQ==","MQ==","MA=="],["OA==","MQ==","MA==","MQ==","MQ==","MA=="],["OA==","Mg==","MA==","MQ==","MQ==","MA=="],["OA==","Mw==","MA==","MQ==","MQ==","MA=="],["OA==","NA==","MA==","MQ==","MQ==","MA=="],["OA==","NQ==","MA==","MQ==","MQ==","MA=="],["OA==","Ng==","MA==","MQ==","MQ==","MA=="],["OA==","Nw==","MA==","MQ==","MQ==","MA=="],["OA==","OA==","MA==","MQ==","MQ==","MA=="],["OA==","OQ==","MQ==","MQ==","MQ==","MA=="],["OA==","MTA=","MA==","MQ==","MQ==","MA=="],["OQ==","MQ==","MA==","MQ==","MQ==","MA=="],["OQ==","Mg==","MA==","MQ==","MQ==","MA=="],["OQ==","Mw==","MA==","MQ==","MQ==","MA=="],["OQ==","NA==","MA==","MQ==","MQ==","MA=="],["OQ==","NQ==","MA==","MQ==","MQ==","MA=="],["OQ==","Ng==","MA==","MQ==","MQ==","MA=="],["OQ==","Nw==","MA==","MQ==","MQ==","MA=="],["OQ==","OA==","MA==","MQ==","MQ==","MA=="],["OQ==","OQ==","MA==","MQ==","MQ==","MA=="],["OQ==","MTA=","MQ==","MQ==","MQ==","MA=="]];
var actualBoard=[];actualState=[];indexGame=1;tiAudio=false;
var wordsGame="U2VtYW5hXzIx"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var actorder=[1,2,3,4,5,6,7,8,9];var in_act=0;
