var sliderdot = document.getElementById('sliderdot');
var basis = $('.algemeen');
var timelineWidth = $('#timeline-svg').outerWidth();
var timelineRelative = timelineWidth/200;
var mc = new Hammer(sliderdot);

mc.get('pan').set({ direction: Hammer.DIRECTION_ALL });

var currentDeltaX = 0;
var adjustDeltaX = 0;

var faseAfsprong = [0.03*timelineWidth,$('.afsprong')];
var faseVluchtfase1 = [0.225*timelineWidth, $('.vluchtfase1')];
var faseKeerpunt = [0.415*timelineWidth, $('.keerpunt')];
var faseVluchtfase2 = [0.61*timelineWidth, $('.vluchtfase2')];
var faseComment = [0.805*timelineWidth, $('.comment')];

var bovenbeen1 = $('.bovenbeen1'),
    bovenbeen2 = $('.bovenbeen2'),
    shoulder1 = $('.shoulder1'),
    shoulder2 = $('.shoulder2'),
    hand1 = $('.hand1'),
    hand2 = $('.hand2'),
    onderbeen1 = $('.onderbeen1'),
    onderbeen2 = $('.onderbeen2');

var points = [
  {phase:faseAfsprong, percentage: 21 ,text: "te hoog", position: bovenbeen2, weight: 1, meter: 10},
  {phase:faseAfsprong, percentage: 21 ,text: "te hoog", position: hand2, weight: 2, meter: 20},   
  {phase:faseVluchtfase1, percentage: 21 ,text: "te hoog", position: onderbeen1, weight: 1, meter: 30},
  {phase:faseVluchtfase1, percentage: 21 ,text: "te hoog", position: hand1, weight: 1.5, meter: 35},
  {phase:faseKeerpunt, percentage: 21 ,text: "te hoog", position: bovenbeen2, weight: 1, meter: 40},
  {phase:faseKeerpunt, percentage: 21 ,text: "te hoog", position: hand1, weight: 1, meter: 50},
  {phase:faseVluchtfase2, percentage: 21 ,text: "te hoog", position: onderbeen2, weight: 2, meter: 60},
  {phase:faseVluchtfase2, percentage: 21 ,text: "te hoog", position: hand2, weight: 1.5, meter: 70}
];

for (i = 0; i < points.length; i++) { 
  $('#timeline-svg').append('<circle style="opacity:1" fill="#4991FF" cx="'+(timelineRelative*(points[i].meter))+'" cy="30" r="'+points[i].weight*8+'"></circle>'); 
                            
  //svg workaround
  $(".timeline-line").html($(".timeline-line").html());
}

mc.on("panleft panright", function(ev) {
  currentDeltaX = adjustDeltaX + ev.deltaX;
 
  for (i = 0; i < points.length; i++) { 
      if( currentDeltaX >= points[i].phase[0] && currentDeltaX <= points[i].phase[0] + timelineWidth/5){
points[i].phase[1].find(points[i].position).show(); 
      }else{
        points[i].phase[1].find(points[i].position).hide(); 
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
   
  
  sliderdot.style.left = currentDeltaX+"px";
});

mc.on("panend", function(ev){
    adjustDeltaX = currentDeltaX;
});