var sliderdot = document.getElementById('sliderdot');
var basis = $('.algemeen');
var timelineWidth = $('#timeline-line').attr('width'); //$('#timeline-svg').outerWidth() 
var timelineRelative = timelineWidth/200;
var mc = new Hammer(sliderdot);

var offsetLeft = $('#timeline-line').position().left;
var timelineLength = ($('#timeline-line').outerWidth());

var start = $('#timeline-start').position().left;


var timelineSVGwidth = 963;

mc.get('pan').set({ direction: Hammer.DIRECTION_ALL });

var currentDeltaX = start;
var adjustDeltaX = start;

sliderdot.style.left = currentDeltaX+"px";
sliderdot.style.top = ($('#timeline-line').position().top - 25)+'px';

$( window ).resize(function() {
  sliderdot.style.top = ($('#timeline-line').position().top - 25)+'px';
});

var faseAfsprong = [offsetLeft,$('section.afsprong')];
var faseVluchtfase1 = [timelineLength/4*1+offsetLeft, $('section.vluchtfase1')];
var faseKeerpunt = [timelineLength/4*2+offsetLeft, $('section.keerpunt')];
var faseVluchtfase2 = [timelineLength/4*3+offsetLeft, $('section.vluchtfase2')];
var faseComment = [timelineLength/4*4+offsetLeft, $('section.comment')];

var hand1 = $(".hand1");
var hand2 = $(".hand2");
var enkel1 = $(".enkel1");
var enkel2 = $(".enkel2");
var middel1 = $(".middel1");
var middel2 = $(".middel2");
var knie1 = $(".knie1");
var knie2 = $(".knie2");

var data = [
  ["40502","16.19.44","Borstcrawl","Track R","1.72","4.4","0.66","30.185","4.554","0.962","5.48","10.16","2.379","1.99466666666","","20101125T141443"  ],
  ["40502","16.22.00","Borstcrawl","Track R","1.74","4.42","0.68","33.048","4.654","0.873","4.716","10.456","2.476","2.0195","","20101125T142442"  ],
  ["40502","16.24.18","Borstcrawl","Track R","1.74","4.32","0.68","33.565","4.626","1.135","5.24","12.093","2.486","1.87607142857","","20101125T142046"  ],
  ["40502","16.26.23","Borstcrawl","Track R","1.74","4.48","0.66","28.161","4.725","1.035","4.782","11.452","2.188","1.85845588235","","20101125T141734"  ],
  ["40599","07.13.01","Borstcrawl","Track R","1.78","4.4","0.7","28.164","4.608","1.254","4.942","10.877","2.383","1.99036697247","","20110228T141517"  ],
  ["40599","07.15.54","Borstcrawl","Track R","1.82","4.48","0.7","31.155","4.512","1.314","4.923","11.168","2.883","1.91382113821","","20110228T143143"  ],
  ["40599","07.18.47","Borstcrawl","Track R","1.8","4.46","0.7","30.629","4.533","1.136","4.803","10.727","2.347","2.00694444444","","20110228T143903"  ],
  ["40599","07.21.57","Borstcrawl","Track R","1.82","4.42","0.7","31.552","4.697","1.334","5.631","11.168","2.465","1.89711538461","","20110228T142228"  ],
  ["40599","07.24.50","Borstcrawl","Track R","1.82","4.52","0.68","32.441","4.506","1.148","5.706","10.981","2.364","1.86887755102","","20110228T143411"  ],
  ["40599","07.27.40","Borstcrawl","Track R","1.8","4.5","0.7","30.863","4.611","1.052","5.481","10.133","2.855","1.92692307692","","20110228T144026"  ],
  ["40659","07.31.35","Borstcrawl","Track R","1.78","4.38","0.66","35.087","4.418","1.139","5.279","10.898","2.419","1.96732673267","","20110427T113513"  ],
  ["40659","07.33.53","Borstcrawl","Track R","1.76","4.36","0.68","31.664","4.565","1.052","5.507","9.725","2.409","2.13","","20110427T113906"  ],
  ["40659","07.35.34","Borstcrawl","Track R","1.8","4.44","0.66","33.757","4.3","1.199","5.294","9.778","2.368","2.06911764705","","20110427T120315"  ],
  ["40659","07.56.34","Borstcrawl","Track R","1.84","4.48","0.72","23.845","4.63","1.109","5.038","10.207","2.395","1.99261363636","","20110427T120911"  ],
  ["40659","07.58.20","Borstcrawl","Track R","1.78","4.36","0.68","26.563","4.574","0.888","4.782","8.942","2.401","2.20545454545","","20110427T121520"  ],
  ["40659","07.59.53","Borstcrawl","Track R","1.78","4.42","0.7","26.242","4.549","1.215","4.878","10.22","2.5","2.04775280898","","20110427T122029"  ],
  ["40677","16.27.59","Borstcrawl","Track R","1.68","4.24","0.64","30.315","4.902","0.916","5.752","9.772","2.657","2.07719298245","","20110524T131507"  ],
  ["40677","16.29.24","Borstcrawl","Track R","1.76","4.34","0.7","29.279","4.705","1.086","4.934","10.456","2.513","2.03802083333","","20110524T131843"  ],
  ["40677","16.31.00","Borstcrawl","Track R","1.68","4.26","0.68","29.359","4.915","1.036","5.35","10.496","2.759","2.00625","","20110524T132212"  ],
  ["40792","07.46.23","Borstcrawl","Track R","1.76","4.48","0.66","33.374","4.613","1.295","5.047","3.084","2.357","1.85818181818","","20110906T160008"  ],
  ["40792","07.46.23","Borstcrawl","Track R","1.8","4.52","0.7","13.704","2.27","1.288","4.843","9.733","2.388","2.06168831168","","20110913T155217"  ],
  ["40792","07.50.41","Borstcrawl","Track R","1.76","4.38","0.66","34.305","4.587","1.07","4.77","3.112","2.499","1.82821100917","","20110906T154857"  ],
  ["40792","07.50.41","Borstcrawl","Track R","1.76","4.38","0.64","38.893","7.956","1.07","5.117","13.514","2.465","1.78864864864","","20110913T142807"  ],
  ["40792","07.55.46","Borstcrawl","Track R","1.8","4.44","0.68","42.398","4.496","1.162","4.915","3.125","2.613","1.92195121951","","20110906T153554"  ],
  ["40792","08.01.46","Borstcrawl","Track R","1.74","4.38","0.66","33.375","4.692","0.952","4.955","13.829","2.581","","","20110906T151421"  ],
  ["40792","08.01.46","Borstcrawl","Track R","1.74","4.38","0.66","33.57","4.691","1.196","4.903","13.842","2.581","1.79698492462","","20110913T104422"  ],
  ["41187","14.32.30","Borstcrawl","Track R","1.72","4.22","0.64","29.477","4.822","1.61","4.79","12.101","2.629","1.98020833333","","20121025T181928"  ],
  ["41187","14.34.55","Borstcrawl","Track R","1.68","4.06","0.66","29.026","4.887","1.354","4.957","12.316","2.492","2.05392857142","","20121025T182406"  ],
  ["41187","14.37.16","Borstcrawl","Track R","1.66","4","0.64","32.326","4.991","1.348","4.668","12.162","2.656","2.11690647482","","20121025T183404"  ],
  ["41187","14.39.49","Borstcrawl","Track R","1.68","4.16","0.66","32.459","4.846","1.152","4.738","11.452","2.619","2.048","","20121025T183938"  ],
  ["41643","11.08.35","Borstcrawl","Track R","1.66","4","0.7","28.073","5.124","0.864","4.877","11.239","2.834","2.1787037037","","20140117T134218"  ],
  ["41937","09.49.40","Borstcrawl","Track R","1.7","3.86","0.72","28.267","5.215","1.407","4.767","13.097","2.969","2.25211267605","","20141029T142640"  ],
  ["41937","09.52.52","Borstcrawl","Track L","1.66","3.9","0.7","27.585","5.166","1.19","5.397","12.078","2.778","2.20973451327","","20141030T151843"  ],
  ["41937","09.56.05","Borstcrawl","Track L","1.68","3.86","0.7","26.729","4.959","1.323","5.145","13.471","2.97","2.11838709677","","20141030T152239"  ],
  ["41979","09.40.12","Borstcrawl","Track R","1.66","3.84","0.7","28.227","5.212","1.15","4.987","12.999","3.124","2.20107913669","","20141210T130341"  ],
  ["41979","09.44.21","Borstcrawl","Track R","1.64","3.82","0.68","26.772","5.043","1.251","6.117","12.261","3.17","2.16881188118","","20141210T163958"  ],
  ["42012","18.12.03","Borstcrawl","Track R","1.68","4.02","0.76","28.776","5.089","1.299","5.022","11.589","2.605","2.15833333333","","20150108T182644"  ],
  ["42046","09.14.27","Borstcrawl","Track R","1.68","3.82","0.7","35.409","5.242","1.239","5.229","11.647","3.069","2.30735294117","","20150218T120403"  ],
  ["42046","09.16.06","Borstcrawl","Track R","1.62","3.78","0.68","30.038","5.092","0.988","5.349","11.779","2.953","2.25188679245","","20150218T120831"  ],
  ["42046","09.18.25","Borstcrawl","Track R","1.64","3.8","0.7","28.684","5.282","1.104","4.98","12.711","3.124","2.25859375","","20150218T121351"  ],
  ["42072","17.36.08","Borstcrawl","Track R","1.68","4.04","0.66","31.922","5.133","1.381","4.898","13.352","2.769","2.02969696969","","20150313T155629"  ],
  ["42084","09.47.24","Borstcrawl","Track R","1.62","3.86","0.66","32.206","5.097","1.293","4.85","12.093","2.926","2.214","","20150326T132759"  ],
  ["42084","09.49.22","Borstcrawl","Track R","1.6","3.84","0.66","29.115","4.954","1.101","4.705","12.116","3.142","2.25912698412","","20150326T133339"  ],
  ["42084","09.51.24","Borstcrawl","Track R","1.62","3.8","0.7","25.042","5.048","1.287","4.796","13.183","2.885","2.16096774193","","20150326T134651"  ],
  ["42114","17.41.39","Borstcrawl","Track R","1.72","4.08","0.74","28.407","4.971","1.285","5.028","11.437","2.947","2.15688073394","","20150429T094314"  ],
  ["42114","17.41.39","Borstcrawl","Track R","1.74","4.06","0.74","29.231","5.127","1.293","5.034","11.402","2.965","2.15231481481","","20151027T133309"  ],
  ["42153","17.34.27","Borstcrawl","Track R","1.58","3.74","0.66","27.201","5.152","1.155","5.045","11.246","2.961","2.35260416666","","20150603T142003"  ],
  ["42153","17.38.40","Borstcrawl","Track R","1.56","3.72","0.66","24.796","5.154","1.103","4.77","11.141","3.162","2.44375","","20150603T142635"  ],
  ["42153","17.41.04","Borstcrawl","Track R","1.58","3.78","0.66","26.401","5.199","1.019","5.056","11.359","3.099","2.31","","20150603T143553"  ],
  ["42174","16.35.16","Borstcrawl","Track R","1.66","3.84","0.7","31.408","5.128","1.159","5.241","11.632","3.333","2.28932038834","","20150629T124619"  ],
  ["42174","16.37.32","Borstcrawl","Track R","1.62","3.8","0.7","25.584","5.116","1.09","5.493","11.919","2.996","2.24285714285","","20150629T123955"  ],
  ["42174","16.40.33","Borstcrawl","Track R","1.66","3.8","0.72","27.559","4.97","1.185","5.215","12.23","3.126","2.24406779661","","20150629T123221"  ],
  ["42291","09.31.35","Borstcrawl","Track R","1.64","3.8","0.7","30.491","5.031","1.307","5.06","12.488","3.155","2.241015625","","20151022T095153"  ],
  ["42291","09.34.03","Borstcrawl","Track R","1.62","3.84","0.68","33.579","5.19","1.17","4.856","11.345","3.107","2.2929245283","","20151022T095555"  ],
  ["42291","09.36.36","Borstcrawl","Track R","1.62","3.76","0.68","29.786","5.193","1.188","4.811","12.216","3.167","2.31463414634","","20151022T100010"  ],
  ["42794","08.45.44","Borstcrawl","Track R","1.62","3.78","0.68","30.716","5.279","1.364","5.304","13.116","2.953","2.18057553956","5.92","20170307T100059"  ],
  ["42794","08.48.39","Borstcrawl","Track R","1.64","3.82","0.7","33.793","5.126","1.169","4.235","11.771","3.105","2.39426229508","5.92","20170307T100326"  ],
  ["42794","08.51.25","Borstcrawl","Track R","1.62","3.78","0.7","28.728","5.325","1.033","4.783","12.047","3.325","2.25731707317","5.94","20170307T100600"  ],
  ["42794","08.54.07","Borstcrawl","Track R","1.58","3.76","0.66","30.227","5.333","1.092","5.169","11.231","3.591","2.30478723404","5.84","20170307T101043"  ]
];

//fase 1 = tm 50    = faseAfsprong
//fase 2 = tm 100    = faseVluchtfase1
//fase 3 = tm 150   = faseKeerpunt
//fase 4 = tm 200   = faseVluchtfase2

var points = [
  //1
  {phase:faseAfsprong, value: "1,01m" ,text: "Afstand hoofd boven", position: hand1, weight: 1, meter: 10},
  {phase:faseAfsprong, value: "-0,782m" ,text: "Afstand heup eerste downbeat", position: enkel2, weight: 2, meter: 30},   
  {phase:faseAfsprong, value: "-16%" ,text: "Afzetkracht", position: middel2, weight: 1, meter: 36},
  //2
  {phase:faseVluchtfase1, value: "-16%" ,text: "Afzetkracht", position: enkel1, weight: 1, meter: 55},
  {phase:faseVluchtfase1, value: "-16%" ,text: "Afzetkracht", position: hand2, weight: 1, meter: 75},
  //3
  {phase:faseKeerpunt, value: "-16%" ,text: "Afzetkracht", position: hand1, weight: 1, meter: 100},
  {phase:faseKeerpunt, value: "-16%" ,text: "Afzetkracht", position: middel1, weight: 2, meter: 107},
  {phase:faseKeerpunt, value: "-16%" ,text: "Afzetkracht", position: enkel2, weight: 1, meter: 115},
  {phase:faseKeerpunt, value: "-16%" ,text: "Afzetkracht", position: middel2, weight: 2, meter: 120},
  {phase:faseKeerpunt, value: "-16%" ,text: "Afzetkracht", position: hand2, weight: 1, meter: 130},
  {phase:faseKeerpunt, value: "-16%" ,text: "Afzetkracht", position: knie1, weight: 2, meter: 135},
  {phase:faseKeerpunt, value: "-16%" ,text: "Afzetkracht", position: knie2, weight: 1, meter: 142},
  //4
  {phase:faseVluchtfase2, value: "-16%" ,text: "Afzetkracht", position: enkel1, weight: 1, meter: 180},
  {phase:faseVluchtfase2, value: "-16%" ,text: "Afzetkracht", position: hand2, weight: 1, meter: 189},
];

for (i = 0; i < points.length; i++) { 
  $('#timeline-svg').append('<circle style="opacity:1; transform-origin: center;" fill="#4991FF" cx="'+((timelineSVGwidth)/200*(points[i].meter)+32)+'" cy="30" r="'+points[i].weight*5+'"></circle>'); 

  points[i].phase[1].find(points[i].position).children().eq(2).html(points[i].value);
  points[i].phase[1].find(points[i].position).children().eq(3).html(points[i].text);
                            
  //svg workaround
  $(".timeline-line").html($(".timeline-line").html());
}

// : seperated time
function str_pad_left(string,pad,length) {
      return (new Array(length+1).join(pad)+string).slice(-length);
    }

// mc.on("panleft", function(ev){
//   if((ev.target.offsetLeft + 26) + ev.deltaX < start){
//     mc.stop();
//   }
// });

mc.on("panleft panright", function(ev) {

  currentDeltaX = adjustDeltaX + ev.deltaX;

  // if(ev.target.offsetLeft + (ev.target.clientWidth / 2) <= start && ev.direction == Hammer.DIRECTION_LEFT){
  //   console.log(ev.target.offsetLeft + (ev.target.outerWidth / 2), start);
  //   return;
  // }

  var firstStop = 0.032*timelineWidth;

  $('.tooltip').css("opacity","0");

  for (i = 0; i < points.length; i++) { 
      if( currentDeltaX >= ((timelineLength/200)*points[i].meter)+offsetLeft
       && currentDeltaX <= ((timelineLength/200)*points[i].meter)+offsetLeft + timelineWidth/20){
          points[i].phase[1].find(points[i].position).css("opacity","1"); 
      }else{ 
          points[i].phase[1].find(points[i].position).css("opacity","0");
      }
  }
    
  if(currentDeltaX <= faseAfsprong[0]){
     basis.addClass('active');
     }else{
       basis.removeClass('active');
     }
  if(currentDeltaX > faseAfsprong[0] && currentDeltaX < faseVluchtfase1[0]){
     faseAfsprong[1].addClass('active');
     }else{
       faseAfsprong[1].removeClass('active');
     }
  if(currentDeltaX >= faseVluchtfase1[0] && currentDeltaX < faseKeerpunt[0]){
     faseVluchtfase1[1].addClass('active');
     }else{
       faseVluchtfase1[1].removeClass('active');
     }
  if(currentDeltaX >= faseKeerpunt[0] && currentDeltaX < faseVluchtfase2[0]){
     faseKeerpunt[1].addClass('active');
     }else{
       faseKeerpunt[1].removeClass('active');
     }
  if(currentDeltaX >= faseVluchtfase2[0] && currentDeltaX < faseComment[0]){
     faseVluchtfase2[1].addClass('active');
     }else{
       faseVluchtfase2[1].removeClass('active');
     }
  if(currentDeltaX >= faseComment[0]){
     faseComment[1].addClass('active');
     }else{
       faseComment[1].removeClass('active');
     }  
   
   var time = currentDeltaX; //nog aanpassen naar echt een berekening seconden/meters oid
   var minutes = Math.floor(time / 60);
   var seconds = time % 60;
  var prettyTime = str_pad_left(minutes,'0',2)+':'+str_pad_left(seconds,'0',2);
  
  sliderdot.style.left = currentDeltaX+"px";
  $('.time').html(prettyTime+'s');
});

mc.on("panend", function(ev){
    adjustDeltaX = currentDeltaX;
});