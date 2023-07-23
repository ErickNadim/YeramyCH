//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=60; timeIni=60; timeBon=0;
var successes=0; successesMax=0; attempts=0; attemptsMax=2;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=true;
var tiTimeType=1;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime;
var colorBack="#C0C0C0"; colorButton="#80FF00"; colorText="#000000"; colorSele="#000000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Felicitaciones lo lograste"; messageTime="Tu tiempo se termino"; messageError="Lo sentimos "; messageErrorG="Lo sentimos "; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="Q29sb3JlYXJfc2VndW5fbGV5YW5kYVNlbWFuYV80"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var joinPar=[];
var c=["#6CC4DD","#6CC4DD","#6CC4DD","#6CC4DD","#6CC4DD","#6CC4DD","#7C3F3F","#7C3F3F","#7C3F3F","#B7B471","#B7B471","#B7B471","#B7B471","#B7B471","#B7B471","#B7B471","#B7B471","#C0C0C0","#C0C0C0","#970000","#970000","#808000"];
var x=["76","114","124","39","32","182","139","133","145","91","68","83","117","101","83","69","52","128","133","102","51","176"];
var y=["43","118","191","185","115","174","135","91","159","104","115","138","149","162","189","167","144","85","131","50","44","124"];
var t=["","","","","","","","","","","","","","","","","","","","","",""];
var cM=["#6CC4DD","#7C3F3F","#C0C0C0","#B7B471","#970000","#808000","#000000"];
var tM=["Squirtle","Caparazon de Squirtle","bordes del caparazon","Plastrón","ojos","fondo","bordes del dibujo"];
var indexColor=0;
