var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=4; attempts=0; attemptsMax=1;
var score=0; scoreMax=4; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=true;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=false;
var tiAttempts=true;
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
var wordsGame="U2VtYW5hXzE3"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var words=["TWFtw61mZXJvIGPDoW5pZG8gZGUgbWVub3MgZGUgdW4gbWV0cm8gZGUgbG9uZ2l0dWQsIGluY2x1aWRhIGxhIGNvbGEsIGRlIGhvY2ljbyBhbGFyZ2FkbyB5IG9yZWphcyBlbXBpbmFkYXMs","cGVycm9zIGRlIHRhbWHDsW8gcGVxdWXDsW8sIHBlbG8gw6FzcGVybyBvIGR1cm8geSBwb3NlZWRvcmVzIGRlIHVuIGNhcsOhY3RlciBkZWNpZGlkbywgZW7DqXJnaWNvIGUgaW5xdWlldG8=","c2UgcmVjb25vY2VuIGlubWVkaWF0YW1lbnRlIHBvciBzdSBjYXJhY3RlcsOtc3RpY28gcGVuYWNobyBkZSBwbHVtYXMgZXLDqWN0aWxlcy4=","RWwgY29uZWpvIGFybGVxdcOtbiB0aWVuZSB1biBwZWxhamUgY29ydG8sIGRlIGdyYW4gYnJpbGxvIHkgc2Vkb3NpZGFkLiBFc3RlIHBlbG8gZXMgbGFjaW8geSByZWN1YnJlIHRvZG8gZWwgY3VlcnBvIGRlIGZvcm1hIHBhcmVqYS4=",""];imaW=["licensed-image.jpg","yorkshire_terrier.jpg","Cacatuoidea.jpg","Arlequ__n.jpg",""];queW=["","","","",""];altW=["","","","",""];c=[106,102,78,130,0];
var auW=["","","","",""];
var actMaxWidth="600"; actMaxHeight="250";indexG=0;profG=0;dirMedia="Semana_17_resources/media/"; textBNext="Seguiente>>>";
var wordsG=[];imageW=[];questionW=[];audioW=[];cG=[];alterW=[];
