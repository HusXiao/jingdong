$(function(){
	// 数量减
	$(".minus").click(function() {
		var t = $(this).parent().find('.num');
		t.text(parseInt(t.text()) - 1);
		if (t.text() <= 1) {
			t.text(1);
		}
		TotalPrice();
	});
	// 数量加
	$(".plus").click(function() {
		var t = $(this).parent().find('.num');
		t.text(parseInt(t.text()) + 1);
		if (t.text() <= 1) {
			t.text(1);
		}
		TotalPrice();
	});
	/******------------打钩-----------------******/
	  // 点击商品按钮
  $(".goodsCheck").click(function() {
    var goods = $(this).closest(".aui-car-box").find(".goodsCheck"); //获取本店铺的所有商品
    var goodsC = $(this).closest(".aui-car-box").find(".goodsCheck:checked"); //获取本店铺所有被选中的商品
    var Shops = $(this).closest(".aui-car-box").find(".shopCheck"); //获取本店铺的全选按钮
    if (goods.length == goodsC.length) { //如果选中的商品等于所有商品
      Shops.prop('checked', true); //店铺全选按钮被选中
      if ($(".shopCheck").length == $(".shopCheck:checked").length) { //如果店铺被选中的数量等于所有店铺的数量
        $("#AllCheck").prop('checked', true); //全选按钮被选中
        TotalPrice();
      } else {
        $("#AllCheck").prop('checked', true); //else全选按钮不被选中
        TotalPrice();
      }
    } else { //如果选中的商品不等于所有商品
      Shops.prop('checked', true); //店铺全选按钮不被选中
      $("#AllCheck").prop('checked', true); //全选按钮也不被选中
    }
  });
  // 点击全选按钮
  $("#AllCheck").click(function() {
    if ($(this).prop("checked") == true) { //如果全选按钮被选中
      $(".goods-check").prop('checked', true); //所有按钮都被选中
      TotalPrice();
    } else {
      $(".goods-check").prop('checked', false); //else所有按钮不全选
      TotalPrice();
    }
    $(".shopCheck").change(); //执行店铺全选的操作
  });
});
