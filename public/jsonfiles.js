for(var i = 0; i < data.length; i++){
   $('.weeniespaper').append('<div class="items"><p class="itemTitle">' + data[i].item  +'<p class="itemPrice"> ' + data[i].price + '</p>'+
   '</p><p class="itemDescription">' + data[i].Description + '</div>');
}
$('.paperitems').append('<div class="allbeef"><p id="allbeefweenies">100% ALL BEEF Weenies</p></div>')

$.getJSON("../json/subsNSandwiches.json", function (data) {
  for(var i = 0; i < data.length; i++){
    $('.subsNSandwiches').append('<br /><div class="items4"><p class="itemTitle">' + data[i].item + '<p class="itemPrice">' + data[i].price + '</p><br /><p class="itemDescription">' + data[i].description + '</div>');
  }
});

$.getJSON("../json/henHouse.json", function (data) {
  for(var i = 0; i < data.length; i++){
    $('.henpaper').append('<br /><div class="items4"><p class="itemTitle">' + data[i].item + '<p class="itemPrice">' + data[i].price + '</p><br /><p class="itemDescription">' + data[i].description + '</div>');
  }
});

$.getJSON("../json/rabbitFixins.json", function (data) {
  for(var i = 0; i < data.length; i++){
    $('.rabbitFixins').append('<br /><div class="items4"><p class="itemTitle">' + data[i].item + '<p class="itemPrice">' + data[i].price + '</p><br /><p class="itemDescription">' + data[i].description + '</div>');
  }
});

$.getJSON("../json/xtraFixins.json", function (data) {
  for(var i = 0; i < data.length; i++){
    $('.xtrapaper').append('<br /><div class="items4"><p class="itemTitle">' + data[i].item + '<p class="itemPrice">' + data[i].price + '</p><br /><p class="itemDescription">' + data[i].description + '</div>');
  }
});

$.getJSON("../json/deezerts.json", function (data) {
  for(var i = 0; i < data.length; i++){
    $('.deezertspaper').append('<br /><div class="items4"><p class="itemTitle">' + data[i].item + '<p class="itemPrice">' + data[i].price + '</p><br /><p class="itemDescription">' + data[i].description + '</div>');
  }
});


    $.getJSON("../json/combos.json", function (data) {
      for(var i = 0; i < data.length; i++){
        $('.combospaper').append('<br /><div class="items"><li class="itemTitle">' + data[i].item + '</li> <p class="itemPrice">' + data[i].price + '</p><br /><p class="itemDescription">' + data[i].description + '</div>');
      }
    });
    $.getJSON("../json/wetyerwissel.json", function (data) {
      for(var i = 0; i < data.length; i++){
        $('.wisselpaper').append('<br /><div class="items"><li class="itemTitle">' + data[i].item + '</li> <p class="itemPrice">' + data[i].price + '</p><br /><p class="itemDescription">' + data[i].description + '</div>');
      }
    });
    $.getJSON("../json/brewskies.json", function (data) {
      for(var i = 0; i < data.length; i++){
        $('.testpaper2').append('<br /><div class="brewitems"><li class="brewitemTitle">' + data[i].item + '</li> <p class="brewitemPrice">' + data[i].price + '</p><br /><p class="brewitemDescription">' + data[i].description + '</div>');
      }
    });
