$(document).ready(function() {

$("#newsticker").jCarouselLite({
vertical: true,
hoverPause:true,
btnPrev: "#news-prev",
btnNext: "#news-next",
visible: 3,
auto:3000,
speed:500
});

$("#style-grid").click(function() {
$("#block-tovar-grid").show();
$("#block-tovar-list").hide();

$("#style-grid").attr("src","images/icon-grid-active.png");
$("#style-list").attr("src","images/icon-list.png");

$.cookie('select_style','grid');
});

$("#style-list").click(function() {
$("#block-tovar-grid").hide();
$("#block-tovar-list").show();

$("#style-list").attr("src","images/icon-list-active.png");
$("#style-grid").attr("src","images/icon-grid.png");

$.cookie('select_style','list');
});

if ($.cookie('select_style') == 'grid')
{
$("#block-tovar-grid").show();
$("#block-tovar-list").hide();

$("#style-grid").attr("src","images/icon-grid-active.png");
$("#style-list").attr("src","images/icon-list.png");
}
else
{
$("#block-tovar-grid").hide();
$("#block-tovar-list").show();

$("#style-list").attr("src","images/icon-list-active.png");
$("#style-grid").attr("src","images/icon-grid.png");
}

$("#select-sort").click(function(){
$("#sorting-list").slideToggle(200);
});

$('#block-category > ul > li > a').click(function(){
if ($(this).attr('class') != 'active'){
$('#block-category > ul > li > ul').slideUp(400);
$(this).next().slideToggle(400);
$('#block-category > ul > li > a').removeClass('active');
$(this).addClass('active');
$.cookie('select_cat', $(this).attr('id'));
}else
{
$('#block-category > ul > li > a').removeClass('active');
$('#block-category > ul > li > ul').slideUp(400);
$.cookie('select_cat', '');   
}                                  
});
if ($.cookie('select_cat') != '')
{
$('#block-category > ul > li > #'+$.cookie('select_cat')).addClass('active').next().show();
}

$('.add-cart-style-list,.add-cart-style-grid').click(function(){
              
 var  tid = $(this).attr("tid");

 $.ajax({
  type: "POST",
  url: "include/addtocart.php",
  data: "id="+tid,
  dataType: "html",
  cache: false,
  success: function(data) { 
  loadcart();
      }
});

});
function loadcart(){
     $.ajax({
  type: "POST",
  url: "include/loadcart.php",
  dataType: "html",
  cache: false,
  success: function(data) {
    
  if (data == "0")
  {
  
    $("#block-basket > a").html("Корзина пуста");
	
  }else
  {
    $("#block-basket > a").html(data);

  }  
    
      }
});    
       
}
 function fun_group_price(intprice) {  
   
  var result_total = String(intprice);
  var lenstr = result_total.length;
  
    switch(lenstr) {
  case 4: {
  groupprice = result_total.substring(0,1)+" "+result_total.substring(1,4);
    break;
  }
  case 5: {
  groupprice = result_total.substring(0,2)+" "+result_total.substring(2,5);
    break;
  }
  case 6: {
  groupprice = result_total.substring(0,3)+" "+result_total.substring(3,6); 
    break;
  }
  case 7: {
  groupprice = result_total.substring(0,1)+" "+result_total.substring(1,4)+" "+result_total.substring(4,7); 
    break;
  }
  default: {
  groupprice = result_total;  
  }
}  
    return groupprice;
    }




});