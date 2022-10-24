



  // Carousel-news
function myFunction(x) {
  if (x.matches) { // If media query matches
      window.onscroll = myScroll;
      var counter = 0; // Global Variable
      function myScroll(){
         var val = document.getElementById("envelope");
         if(counter == 0){ // if counter is 1, it will not execute
           if(window.pageYOffset > 500){
              init();
              $('.box').addClass('margin');
              $('.open').addClass('opacity1');
              setTimeout(function() {
                $('.box').addClass('is-open');
              }, 2500);
              counter++; // increment the counter by 1, new value = 1
           }
         }
        }
  } else {
      init();
      $('.box').addClass('margin');
      $('.open').addClass('opacity1');
      setTimeout(function() {
        $('.box').addClass('is-open');
      }, 2500);
  }
};

var x = window.matchMedia("(min-width: 768px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes



  var canvas, stage, exportRoot;
  function init() {
    // --- write your JS code here ---
    
    createjs.MotionGuidePlugin.install();

    canvas = document.getElementById("canvas");
    images = images||{};

    var loader = new createjs.LoadQueue(false);
    loader.addEventListener("fileload", handleFileLoad);
    loader.addEventListener("complete", handleComplete);
    loader.loadManifest(lib.properties.manifest);
  }

  function handleFileLoad(evt) {
    if (evt.item.type == "image") { images[evt.item.id] = evt.result; }
  }

  function handleComplete(evt) {
    exportRoot = new lib.Rewire_2021_China_d();

    stage = new createjs.Stage(canvas);
    stage.addChild(exportRoot);
    stage.update();

    createjs.Ticker.setFPS(lib.properties.fps);
    createjs.Ticker.addEventListener("tick", stage);
  
      }
  // $(document).ready(function() {
  //   $(window).scroll(function () { // При прокрутке попадаем в эту функцию
  //      В зависимости от положения полосы прокрукти и значения top_show, скрываем или открываем кнопку "Наверх" 
  //     if ($(this).scrollTop() > top_show) init();
  //     else init();
  //   });
  // });

