(function($) {
  $.fn.extend({
    roulette: function(options) {
      var defaults = {
        angle: 0,
        angleOffset: -45,
        speed: 5000,
        easing: "easeInOutElastic"
      };

      var opt = $.extend(default,options);

      return this.each(function(){
          var o = opt;
          var data = [
            {
                color: '#3f297e',
                text: 'N분의 1'
            },
            {
                color: '#1d61ac',
                text: '요즘것들'
            },
            {
                color: '#169ed8',
                text: '도박'
            },
            {
                color: '#209b6c',
                text: '젓가락'
            },
            {
                color: '#60b236',
                text: '거북선'
            },
            {
                color: '#efe61f',
                text: '겁'
            },
            {
                color: '#f7a416',
                text: 'Day Day'
            },
            {
                color: '#e6471d',
                text: '호랑나비'
            },
            {
                color: '#dc0936',
                text: 'Okey Dokey'
            },
            {
                color: '#e5177b',
                text: '오빠차'
            },
            {
                color: '#be107f',
                text: 'RESPECT'
            },
            {
                color: '#881f7e',
                text: '작두'
            }
            ];

            var $wrap = $(this);
            var $btnStart = $wrap.find("#btn-start");
            var $roulette = $wrap.find(".roulette");
            var wrapW = $wrap.width();
            var angle = o.angle;
            var angleOffset = o.angleOffset;
            var speed = o.speed;
            var esing = o.esing;
            var itemSize = data.length;
            var itemSelector = "item";
            var labelSelector = "label";
            var d = 360/itemSize;
            var borderTopWidth = wrapW;
            var borderRightWidth = tanDeg(d);

            for(i=1;i<=itemSize;i+=1){
                var idx = i-1;
                var rt = i*d+angleOffset;
                var itemHTML = $('div class="' + itemSelector + '">');
                
            }
      })
    }
  });
});
$(function() {
  $(".box-roulette").roulette();
});
