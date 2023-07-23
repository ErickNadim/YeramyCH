//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=6; attempts=0; attemptsMax=1;
var score=0; scoreMax=6; scoreInc=1; scoreDec=1
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
var timeOnMessage=5; messageOk="FELICITACIONES "; messageTime="TU NTIEMPO SE AGOTO"; messageError="LOSENTIMOS"; messageErrorG="LOSENTIMOS"; messageAttempts="INTENTALO DENUEVO"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var cp_pal=["Q0FTQUNB","QVZJT05FVEE=","Q0hBQ0FNQVJDQQ==","Q1VBVFJJTU9UTw==","RlJFU0FT","TElNT05FUw=="];var cp_ima=["casacas.jpg","avioneta.jpg","chacamarca.jpg","cuatrimoto.jpg","fresas.jpg","descarga__1_.jpg"];var cp_mp3=["","","","","",""];var cp_ogg=["","","","","",""];var cp_que=["ZXMgdW5hIHByZW5kYSBhbnRpZ3VhIG1hc2N1bGluYSBxdWUgYWN0dWFsbWVudGUgZXMgdXNhZGEgY29tbyBwYXJ0ZSBkZSBhbGd1bm9zIHVuaWZvcm1lcy4=","QXZpw7NuIHBlcXVlw7FvIHkgZGUgcG9jYSBwb3RlbmNpYSBjb24gZWwgcXVlIHNlIHJlYWxpemFuIHZ1ZWxvcyBkZSBtZW5vciBkdXJhY2nDs24geSBhbHR1cmEu","IHNhbnR1YXJpbyBoaXN0w7NyaWNvIGVzdMOhIHViaWNhZG8gZW4gbGEgcHJvdmluY2lhIGRlIEp1bsOtbg==","TW90b2NpY2xldGEgdG9kb3RlcnJlbm8gZGUgY3VhdHJvIHJ1ZWRhcyBjb24gdHJhY2Npw7NuIHRvdGFsLg==","UGxhbnRhIGhlcmLDoWNlYSBkZSB0YWxsb3MgcmFzdHJlcm9zLCBob2phcyBkZW50YWRhcywgZGl2aWRpZGFzIGVuIHRyZXMgc2VnbWVudG9zLCBmbG9yZXMgYmxhbmNhcyBvIGFtYXJpbGxlbnRhcyB5IGZydXRvIGNvbWVzdGlibGUu","RnJ1dG8gZGVsIGxpbW9uZXJvLCBjb21lc3RpYmxlLCBkZSBmb3JtYSBvdmFsYWRhLCBwaWVsIGRlIGNvbG9yIGFtYXJpbGxvIG8gdmVyZGUgeSBwdWxwYSBkaXZpZGlkYSBlbiBnYWpvcywgZGUgc2Fib3Igw6FjaWRvIHkgbXV5IGFyb23DoXRpY28u"];var cp_num=[6,8,10,10,6,7];var cp_alt=["","","","","",""];
var wordsGame="Y29uc3RydXllX3BhbGFicmFz"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var au="";var cp=[];var letters=[];var posAns=0;var lettersId=[];var lettersX=[];var lettersY=[];var lettersAns=[];var answers=[];var indexGame=1;var numle=5; var fillLetter="ABCDEFGHIJKLMNÑOPQRSTUVWXYZÁÉÍÓÚÜ";var jobindex=[];
