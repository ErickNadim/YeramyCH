//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=5; attempts=0; attemptsMax=1;
var score=0; scoreMax=5; scoreInc=1; scoreDec=1
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
var timeOnMessage=5; messageOk="Felicitaciones"; messageTime="tiempo agotado"; messageError="losentimos"; messageErrorG="losentimos"; messageAttempts=" intentelo denuevo"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="U2VtYW5hXzEx"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var cL=["<p>Avioneta</p>","<p>Casacas</p>","<p>Camarografo</p>","<p>Laptop</p>","<p>Mouse</p>"];
var iL=["<div  align='center'><img alt='' src='Semana_11_resources/media/avioneta.jpg'></div>","<div  align='center'><img alt='' src='Semana_11_resources/media/casacas.jpg'></div>","<div  align='center'><img alt='' src='Semana_11_resources/media/camarografo.jpg'></div>","<div  align='center'><img alt='' src='Semana_11_resources/media/comp.jpg'></div>","<div  align='center'><img alt='' src='Semana_11_resources/media/mouse.jpg'></div>"];
var order=["","","","",""]; orderR=["","","","",""];indexR=0; indexL=0;
var cR=["<p>Abrigo ajustado al cuerpo, largo y con faldones, generalmente de color vivo y adornado con pasamanería o bordado</p>","<p>equipo personal que puede ser transportado fácilmente.</p>","<p>pequeño y de poca potencia con el que se realizan vuelos de menor duración y altura.</p>","<p>Persona que tiene por oficio manejar una cámara para filmar imágenes cinematográficas o de televisión.</p>","<p>Dispositivo de la computadora que se maneja con una sola mano y permite dirigir el movimiento del puntero sobre la pantalla para transmitir órdenes diversas.</p>"]; ansRL=["Mg==","MA==","Mw==","MQ==","NA=="];
var iR=["","","","",""];
var auR=[2,4,1,3,5];
