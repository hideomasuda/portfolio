// スムーススクロール
$(function () {
  $('a[href^="#"]').click(function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top - 100;
    var speed = 500;
    $("html, body").animate({
      scrollTop: position
    }, speed, "swing");
    return false;
  });
});

// ハンバーガーメニュー
$(function(){
  $('.hamburger').on('click', function(){
    $(this).toggleClass('active');
    $('.header-nav').toggleClass('active');
  });

  $('.header-nav li a').on('click', function(){
    $('.header-nav li').removeClass('active');
    $(this).parent().addClass('active');
    $('.hamburger').removeClass('active');
    $('.header-nav').removeClass('active');
  });
});

// ページトップボタン
$(function(){
  $(window).scroll(function () {
    var scrollH = $(document).height();
    var scrollPos = $(window).height() + $(window).scrollTop();
    var footerH = $('footer').innerHeight();

    if ($(this).scrollTop() > 100) { //100pxスクロールしたら
      $('.page-top').addClass('show');
    } else {
      $('.page-top').removeClass('show');
    };

    if (scrollH - scrollPos <= footerH) {
      $('.page-top').css({
        position: 'absolute',
        bottom: footerH + 20
      });
    } else {
      $(".page-top").css({
        position: 'fixed',
        bottom: '20px'
      });
    }
  });
});

// スクロールによるアニメーションの関数
function fadeAnime(){
  $('.fadeup').each(function(){
    var elemPos = $(this).offset().top - 50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
      // 画面内に入ったらshowというクラス名を追記
      $(this).addClass('show');
    }else{
      // 画面外に出たらfadeInというクラス名を外す
      $(this).removeClass('show');
    }
  });
};

// スクロール時にfadeAnime関数を呼び出し
$(window).scroll(function (){
  fadeAnime();
});

// ページ読み込み直後に関数を呼び出す場合
// $(window).on('load', function(){
//   fadeAnime();
// });

// MV スライダー
$(function(){
  $('.mv-slider').slick({
      autoplay:true,
      autoplaySpeed:4000,
      dots:false,
      infinite:true,
      fade:true,
      speed:500,//フェードするスピード 0.5秒
      pauseOnHover: false,
  });
});

// MV テキスト アニメーション
function EachTextAnimeControl() {
  $('.mv-text').each(function () {
    var elemPos = $(this).offset().top - 50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass("show");
    }
  });
};

//spanタグを追加する関数
function wrappingSpan() {
  var element = $(".mv-text .text-wrap");
  element.each(function () {
    var text = $(this).text();
    var textbox = "";
    text.split('').forEach(function (t, i) {
      if (t !== " ") {
        if (i < 10) {
          textbox += '<span style="animation-delay:.' + i + 's;">' + t + '</span>';
        } else {
          var n = i / 10;
          textbox += '<span style="animation-delay:' + n + 's;">' + t + '</span>';
        }
      } else {
        textbox += t;
      }
    });
    $(this).html(textbox);
  });
};

$(window).on('load', function () {
  setTimeout(function(){$('.mv-text').addClass('slidein')}, 1000);
  wrappingSpan();
  setTimeout(function(){EachTextAnimeControl()}, 1500);
});

$(window).on('scroll', function () {
  $('.marker').each(function () {
    var elemPos = $(this).offset().top + 50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass('active');
    } else {
      $(this).removeClass('active');
    }
  });
});
