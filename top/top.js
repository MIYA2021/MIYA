$(function(){
  /*=================================================
    スマホメニュー
    ===================================================*/
  // ハンバーガーメニューのクリックイベント
  $('.toggle_btn').on('click', function() {
    $('#header').toggleClass('open');
    $('#navi').toggleClass('open');
    $('#mask').toggleClass('open');
  });

  // #maskのエリアをクリックした時にメニューを閉じる
  $('#mask').on('click', function() {
    $('#header').removeClass('open');
    $('#navi').removeClass('open');
    $(this).removeClass('open'); 
  });

  // リンクをクリックした時にメニューを閉じる
  $('#navi a').on('click', function() {
    $('#header').removeClass('open');
    $('#navi').removeClass('open');
    $('#mask').removeClass('open');
  });

  /*=================================================
    スムーススクロール
    ===================================================*/
  // ページ内リンクのイベント
  $('a[href^="#"]').click(function(){
    let href = $(this).attr("href");
    let target = $(href == "#" || href == "" ? 'html' : href);
    let position = target.offset().top - 80; // ヘッダーの高さ分を調整
    $("html, body").animate({scrollTop:position}, 600, "swing");
    return false;
  });
    
  /*=================================================
    PICK UP スライダー 
    ===================================================*/
  $('.slick-area').slick({
    arrows: false,
    centerMode: true,
    centerPadding: '100px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerPadding: '50px',
          slidesToShow: 1
        }
      }
    ]
  });
});