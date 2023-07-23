//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=160; timeIni=160; timeBon=0;
var successes=0; successesMax=1; attempts=0; attemptsMax=1;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1;
var typeGame=0;
var tiTime=true;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=false;
var tiScore=false;
var startTime; var tiAudio=false;
var colorBack="#FFFFFF"; colorButton="#800000"; colorText="#000000"; colorSele="#FF8080";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fDefs="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="felicitaciones lo lograste"; messageTime="losentimos"; messageError="error"; messageErrorG="error"; messageAttempts="intentalo denuevo"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="Q3J1Y2lncmFtYXNfU2VtYW5hXzY="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var col=0; row=0; writeDir=0;
var cw=[["","","","","","TQ==","","","","","","","","",""],["","TA==","QQ==","UA==","VA==","Tw==","UA==","","","","","","","",""],["","Qw==","Tw==","TQ==","UA==","VQ==","VA==","QQ==","RA==","Tw==","Ug==","QQ==","","",""],["","","","","","Uw==","","","","","","","","",""],["","VA==","QQ==","Qg==","TA==","RQ==","VA==","","","","","","","",""],["","","","SQ==","","","","","","","","","","",""],["","","","Uw==","","","","","","","","","","",""],["","","","SQ==","","","","TA==","","","","","","",""],["","","","Qw==","QQ==","TQ==","SQ==","Tw==","Tg==","RQ==","VA==","QQ==","","",""],["","","","TA==","","","","Rw==","","","","","","",""],["","","","RQ==","","","","Tw==","","","","","","",""],["","","","VA==","","","","","","","","","","",""],["","","","QQ==","","","","","","","","","","",""],["","","","","","","","","","","","","","",""],["","","","","","","","","","","","","","",""]];
var x1=[2,2,2,4,6,4,8];
var y1=[2,3,5,9,1,5,8];
var x2=[7,12,7,12,6,4,8];
var y2=[2,3,5,9,5,13,11];
var imaCW=["Crucigramas_Semana_6_resources/media/laptop.jpg","Crucigramas_Semana_6_resources/media/computadoras.jpg","Crucigramas_Semana_6_resources/media/tablet.jpg","Crucigramas_Semana_6_resources/media/camioneta.jpg","Crucigramas_Semana_6_resources/media/mouse.jpg","Crucigramas_Semana_6_resources/media/bisicletas.jpg","Crucigramas_Semana_6_resources/media/descarga.png"];
var audioCW=["","","","","","",""];
var defCW=["Se denomina computadora portátil, computador portátil u ordenador portátil,","Máquina electrónica capaz de almacenar información y tratarla automáticamente mediante operaciones matemáticas y lógicas controladas por programas informáticos.","es un dispositivo electrónico portátil de mayor tamaño que un teléfono inteligente","Vehículo automóvil menor que el camión que sirve para el transporte de mercancías.","Dispositivo de la computadora que se maneja con una sola mano y permite dirigir el movimiento del puntero sobre la pantalla para transmitir órdenes diversas.","Vehículo de dos ruedas movido por una persona, provisto de un manubrio en la parte delantera, un asiento para el conductor y dos pedales que transmiten el movimiento de las piernas a la rueda trasera mediante una cadena y un piñón.","es un signo gráfico que identifica a una empresa, un producto comercial, un proyecto, o en general, a cualquier entidad pública o privada."];
var altCW=["","","","","","",""];
var colNum=15;
var rowNum=15;
