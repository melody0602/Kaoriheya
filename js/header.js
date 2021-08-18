$(function(){

  // 開啟 Modal 彈跳視窗
  $("button.btn_modal").on("click", function(){
    $("div.overlay").fadeIn();
  });

  // 關閉 Modal
  $("button.btn_modal_close").on("click", function(){
    $("div.overlay").fadeOut();
  });

});


// 點擊按鈕

// DOM 載入完成後執行
$(function(){

  // 點擊按鈕，頁面滑到最上方
  $("#go_top").on("click", function(e){
    e.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, 750);
  });

});
