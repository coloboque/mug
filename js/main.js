// цена на кружку    
let $emalwhite = 70;
let $emalblack = 105;
let $emalred = 105;
let $emalgreen = 105;
let $emalblue = 105;
let $emalcobalt = 105;
let $emalliblue = 90;
let $emalmint = 105;
let $emalcreme = 90;

// цена за цветную каемку
let rimcolor= 15;

// цена на цифровую деколь
let $digitalR = 80;
let $digital = 20;

// цена на шелкографную деколь
let $scrR = 100;
let $scr = 25;

// цена за нанесение
let $round = 100;
let $1pcs = 30;
let $2pcs = 40;


$('.calculate').click(function(event){
    event.preventDefault();
    if($("input[name=emal_color]:checked").val() != "white" && $("input[name=rim_color]:checked").val() == "blue" ){
        $(".explain__rim").html("синяя каемка возможна только на белой кружке");
    }
    else{
        $(".explain__rim").html(" ");
    };
      
});





