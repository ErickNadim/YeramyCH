//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=5; attempts=0; attemptsMax=1;
var score=0; scoreMax=5; scoreInc=1; scoreDec=0;
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
var timeOnMessage=5; messageOk="felicitaciones"; messageTime="el tiempo se agoto"; messageError="losentimos"; messageErrorG="losentimos"; messageAttempts="in tentalo denuevo"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="YWhvcmNhZG9fc2VtYW5hXzc="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var words=["Q09ORUpP","VEFCTEVU","Q0FNSU9ORVRB","Q0FTQUNB","Q0hBTElOQQ==","","","","",""];imaW=["0_Arlequ__n.jpg","0_tablet.jpg","0_camioneta.jpg","0_casacas.jpg","0_descarga.jpg","","","","",""];queW=["mamifero pequeño orejas largas","ciencia artificial portatil","Cosa que sirve como medio de transmisión o propagación de otra","Abrigo ajustado al cuerpo, largo y con faldones, generalmente de color vivo y adornado con pasamanería o bordados; es una prenda antigua masculina que actualmente es usada como parte de algunos uniformes.","Corbata ancha y de caídas largas que se anuda con una lazada grande y que la llevan tanto hombres como mujeres.","","","","",""];var wordsL=[6,6,9,6,7,"","","","",""];var altW=["","","","","","","","","",""];
var auW=["","","","","","","","","",""];
var fillLetter="ABCDEFGHIJKLMNÑOPQRSTUVWXYZÁÉÍÓÚÜ "; wordsG=[];var wordsGL=[]; indexG=0; actMaxWidth=550; indexWord=0; totalWord=0;
var alterW=[];var imageW=[];questionW=[];audioW=[];profG=0; dirMedia="ahorcado_semana_7_resources/media/"; textBNext="";
