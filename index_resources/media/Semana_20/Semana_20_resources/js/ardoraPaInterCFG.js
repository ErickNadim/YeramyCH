//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=13; attempts=0; attemptsMax=1;
var score=0; scoreMax=13; scoreInc=1; scoreDec=1
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
var timeOnMessage=5; messageOk="Felicitaciones"; messageTime=""; messageError="losentimos"; messageErrorG="losentimos"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="U2VtYW5hXzIw"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var points=[["178","340","0","0"],["183","340","0","0"],["159","352","0","0"],["99","342","0","0"],["77","310","0","0"],["69","289","0","0"],["88","245","0","0"],["115","230","0","0"],["165","227","0","0"],["193","239","0","0"],["213","296","0","0"],["190","336","0","0"],["177","323","0","0"],["265","145","1","1"],["278","169","1","1"],["343","190","1","1"],["371","197","1","1"],["411","180","1","1"],["378","142","1","1"],["324","118","1","1"],["296","129","1","1"],["274","258","2","2"],["280","296","2","2"],["333","295","2","2"],["359","259","2","2"],["381","216","2","2"],["332","198","2","2"],["332","199","2","2"],["263","295","3","3"],["185","283","3","3"],["120","265","3","3"],["90","259","3","3"],["84","277","3","3"],["192","307","3","3"],["258","308","3","3"],["337","307","3","3"],["374","274","3","3"],["321","298","3","3"],["182","288","3","3"],["172","202","4","4"],["142","266","4","4"],["162","266","4","4"],["196","213","4","4"],["194","212","4","4"],["112","295","5","5"],["125","311","5","5"],["159","303","5","5"],["119","300","5","5"],["128","295","5","5"],["140","314","6","6"],["169","303","6","6"],["167","317","6","6"],["168","316","6","6"],["345","78","7","7"],["360","96","7","7"],["379","85","7","7"],["349","78","7","7"],["415","165","8","8"],["421","187","8","8"],["436","176","8","8"],["436","175","8","8"],["481","260","9","9"],["455","271","9","9"],["449","304","9","9"],["483","322","9","9"],["518","303","9","9"],["502","277","9","9"],["504","276","9","9"],["459","234","10","10"],["417","278","10","10"],["423","325","10","10"],["461","354","10","10"],["526","340","10","10"],["555","297","10","10"],["523","236","10","10"],["522","232","10","10"],["407","130","11","11"],["412","150","11","11"],["431","150","11","11"],["412","122","11","11"],["406","129","11","11"],["407","131","11","11"],["432","181","12","12"],["444","185","12","12"],["450","200","12","12"],["451","212","12","12"],["445","220","12","12"],["433","193","12","12"],["447","184","12","12"]];
var backSrc="Semana_20_resources/media/moto lineal.png";
var Shape = function () {this.x=undefined;this.y=undefined;};
Shape.prototype={fill:function(context){context.save();context.fillStyle=this.fillStyle;this.createPath(context);context.fill();context.restore();},
stroke:function(context){context.save();this.createPath(context);context.stroke();context.restore();},
isPointInPath:function(context,x,y){this.createPath(context);return context.isPointInPath(x, y);},};
var Polygon=function(){this.points = [];this.numInd=0;};Polygon.prototype=new Shape();Polygon.prototype.addPoint=function(x,y){this.points.push(new Point(x,y));};
Polygon.prototype.createPath=function (context) {if (this.points.length === 0)return;context.beginPath();
context.moveTo(this.points[0].x,this.points[0].y);for (var i=0; i < this.points.length; ++i) {context.lineTo(this.points[i].x,this.points[i].y);}context.closePath();};
var Point=function(x,y){this.x=x;this.y=y;};var shapes=[];
var polygonPoints=[[new Point(178,340),new Point(183,340),new Point(159,352),new Point(99,342),new Point(77,310),new Point(69,289),new Point(88,245),new Point(115,230),new Point(165,227),new Point(193,239),new Point(213,296),new Point(190,336),new Point(177,323)],[new Point(265,145),new Point(278,169),new Point(343,190),new Point(371,197),new Point(411,180),new Point(378,142),new Point(324,118),new Point(296,129)],[new Point(274,258),new Point(280,296),new Point(333,295),new Point(359,259),new Point(381,216),new Point(332,198),new Point(332,199)],[new Point(263,295),new Point(185,283),new Point(120,265),new Point(90,259),new Point(84,277),new Point(192,307),new Point(258,308),new Point(337,307),new Point(374,274),new Point(321,298),new Point(182,288)],[new Point(172,202),new Point(142,266),new Point(162,266),new Point(196,213),new Point(194,212)],[new Point(112,295),new Point(125,311),new Point(159,303),new Point(119,300),new Point(128,295)],[new Point(140,314),new Point(169,303),new Point(167,317),new Point(168,316)],[new Point(345,78),new Point(360,96),new Point(379,85),new Point(349,78)],[new Point(415,165),new Point(421,187),new Point(436,176),new Point(436,175)],[new Point(481,260),new Point(455,271),new Point(449,304),new Point(483,322),new Point(518,303),new Point(502,277),new Point(504,276)],[new Point(459,234),new Point(417,278),new Point(423,325),new Point(461,354),new Point(526,340),new Point(555,297),new Point(523,236),new Point(522,232)],[new Point(407,130),new Point(412,150),new Point(431,150),new Point(412,122),new Point(406,129),new Point(407,131)],[new Point(432,181),new Point(444,185),new Point(450,200),new Point(451,212),new Point(445,220),new Point(433,193),new Point(447,184)]];
var game=[];indexGame=0;
var area=["0","1","2","3","4","5","6","7","8","9","10","11","12"];
var areaSolved=["N","N","N","N","N","N","N","N","N","N","N","N","N"];
var areaWord=["Ruedas","Tanque para Gasolina","Motor","Escape","Amortiguador","Freno en Tambores","Cadena","Acelerador","Chasis","Freno en Disco","Ruedas","Manillas","Amortiguadores delanteros"];
var areaHelp=["Echo de caucho","Contenedor de Gasolina","parte mas importante de una moto","Sirve para alivianar el sonido de la moto y Expulsar el umo que vota el motos","Amortigua vaches y ollos de la carretera","Sirve para poder parar la moto la rueda trasera","Sirve para poder abansar y mover la estructura de la moto","Sirve para poder dar marcha y poder manipular loa velocidad","Cuerpo de la moto","Sirve para poder parar la rueda delantera","echo de caucho para la delantera","podemos instalar el amortiguador delantero","Sirve para amortiguar de vaches y proteje la llanta delantera"];
var areaWrong=["No es corecto","no es correcto","incorrecto","incorrecto","Incorrecto","incorrecto","incorre4cto","incorrecto","incorrecto","","incorrecto","incorrecto","incorrecto"];
var initMessageError="losentimos";
var wordPointX=["178","265","274","263","172","112","140","345","415","481","459","407","432"];
var wordPointY=["340","145","258","295","202","295","314","78","165","260","234","130","181"];
var areaColor=["#F0F0F0","#F0F0F0","#F0F0F0","#F0F0F0","#F0F0F0","#F0F0F0","#F0F0F0","#F0F0F0","#F0F0F0","#F0F0F0","#F0F0F0","#F0F0F0","#F0F0F0"];
var pathMedia="Semana_20_resources/media/"
var auMP3=["","","","","","","","","","","","",""];
var auOGG=["","","","","","","","","","","","",""];
var colorWord="#000000";
