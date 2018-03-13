$(document).ready(function() {

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
  let rimcolor = 15;

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

  // Белая кружка и каёмки
  let $whiteCup = $("#white");
  let $whiteBorderCup = $("#rim-white");
  let $blueBorderCup = $("#rim-blue");
  let $emalColors = $("input[name='emal_color']");
  let $decoleDigital = $("input[id='digital']");
  let $decoleFakeButton = $("#digital").siblings();

  // Проверяем форму при каждом изменении
  $('#calc-form').change(function() {
    checkBorder();
    decoleDisabled();
  });

  // Проверяем совместимость цвета кружки и каемки
  function checkBorder() {
    $(".explain__rim").html(" ");
    if ($whiteCup.prop('checked') == true) {
      $whiteBorderCup.siblings().css("opacity", "0.5");
      $whiteBorderCup.prop("checked", false);
    }
    else {
      $whiteBorderCup.siblings().css("opacity", "1.0");
    }
    if ($whiteCup.prop('checked') == false) {
      $blueBorderCup.siblings().css("opacity", "0.5");
      $blueBorderCup.prop("checked", false);
    } else {
      $blueBorderCup.siblings().css("opacity", "1.0");
    }
  }

  // проверяем совместимость цвета и деколи
  function decoleDisabled() {
    $emalColors.each(function() {
      if($(this).prop('checked') == true) {
        switch ($(this).attr('value')) {
          case 'black':
          case 'red':
          case 'green':
          case 'blue':
          case 'cobalt': {
            $decoleDigital.prop("disabled", true);
            console.log("кнопке деколи присовено значение " + $decoleDigital.prop("checked"));
            $decoleDigital.siblings().css("opacity", "0.5");
            $decoleDigital.siblings().css("transform", "none");
            break;
          }
          default:  
          $decoleDigital.prop("disabled", false);
          $decoleDigital.siblings().css("opacity", "");
          $decoleDigital.siblings().css("transform", "");
        }
      }
    });
  }


  // Обрабатываем клик по синей кайме 
  $blueBorderCup.click(function(event) {   

    if ($whiteCup.prop('checked') == false) {
      $(".explain__rim").html("Cиняя каёмка возможна только на белой кружке");
      $blueBorderCup.siblings().css("opacity", "0.5");
      $blueBorderCup.siblings().css("transform", "none");
      $blueBorderCup.prop("checked", false);
    }
    else {
      $(".explain__rim").html(" ");
      $blueBorderCup.siblings().css("opacity", "");
      $blueBorderCup.siblings().css("transform", "");
    }
  });

  // Обрабатываем клик по белой кайме
  $whiteBorderCup.click(function(event) {

    if ($whiteCup.prop("checked") == true) {
      $(".explain__rim").html("Белую каёмку нельзя выбрать на белой кружке!");
      $whiteBorderCup.siblings().css("opacity", "0.5");
      $whiteBorderCup.siblings().css("transform", "none");
      $whiteBorderCup.prop("checked", false);
    }
    else {
      $(".explain__rim").html(" ");
      $whiteBorderCup.siblings().css("opacity", "");
      $whiteBorderCup.siblings().css("transform", "");
    }
  });

  // Обрабатываем  клик по кнопке цифровой деколи
  $decoleFakeButton.click(function(event) {
    
    $(".explain__decal").html(" ");
    if ($decoleDigital.prop("disabled") == true) {
      $(".explain__decal").html("Нельзя выбрать цифровую деколь для данного цвета!");
    }
  });

  // Обработчик кнопки "рассчитать"
  $('.calculate').click(function(event) {
    event.preventDefault();
  });

});