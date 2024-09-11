

 //右侧导航伸缩效果
 var right_nav = $(".right_nav");
 var tempS;
 $(".right_nav").hover(function () {
       var thisObj = $(this);
       tempS = setTimeout(function () {
          thisObj.find("li").each(function (i) {
             var tA = $(this);
             setTimeout(function () {
                tA.animate({
                   right: "0"
                }, 200);
             }, 50 * i);
          });
       }, 200);
    },
    function () {
       if (tempS) {
          clearTimeout(tempS);
       }
       $(this).find("li").each(function (i) {
          var tA = $(this);
          setTimeout(function () {
             tA.animate({
                right: "-80"
             }, 200, function () {});
          }, 50 * i);
       });
    });

 //右侧导航点击事件
 $(".right_nav li").each(function (i) {
    if (i == 0 || i == 1 || i == 2) {
       $(this).mouseover(function () {
          $(this).children(".hideBox").stop().show();
          right_nav.css('overflow', 'visible')
       });
       $(this).mouseout(function () {
          $(this).children(".hideBox").hide();
          right_nav.css('overflow', 'hidden')
       });
    } else if (i == 3) {
       $(this).click(function () {
          location.href = 'https://t.me/Apixis_jp/';
       })
    } else if (i == 4) {
       $(this).click(function () {
          $('body,html').animate({
             scrollTop: 0
          }, 400);
       })
    }
 })