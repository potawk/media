// ボタンのクリックイベントを受け取った時の処理
const hamburgerMenu = document.querySelector('.hamburger-menu');

const navi = document.getElementById('hamburger-navigation');

const sections = document.querySelector('.sections');

// クリックイベントを受け取ったときにボタンの表示と非表示を切り替える処理
hamburgerMenu.addEventListener('click', function () {
		navi.classList.toggle('active');
		// sections.classList.toggle('active');
		hamburgerMenu.classList.toggle('active');
});

// セクションをクリックした時にメニューを閉じる処理
navi.addEventListener('click', function(){
  navi.classList.remove('active');
  hamburgerMenu.classList.remove('active');
	// sections.classList.remove('active');
});

// スムーススクロール
const smoothScrollTrigger = document.querySelectorAll('a[href^="#"]');
for (let i = 0; i < smoothScrollTrigger.length; i++){
  smoothScrollTrigger[i].addEventListener('click', (e) => {
    e.preventDefault();
    let href = smoothScrollTrigger[i].getAttribute('href');
    let targetElement = document.getElementById(href.replace('#', ''));
    const rect = targetElement.getBoundingClientRect().top;
    const offset = window.pageYOffset;
    const gap = 0;
    const target = rect + offset - gap;
    window.scrollTo({
      top: target,
      behavior: 'smooth',
    });
  });
}

// Swiper
const mySwiper = new Swiper('.swiper', {
	slidesPerView: 1.25,
	spaceBetween: 40,
	breakpoints: {
		768: {
			slidesPerView: 3.5,
			spaceBetween: 60,
		}
	},
	centeredSlides: true,
	loop: true,
});

// スクロールして表示領域に入ったらclass付与
$(function () {
  $(".item__img").on("inview", function () {
    $(this).addClass("is-inview");
  });
  $(".item__content").on("inview", function () {
    $(this).addClass("is-inview");
  });
});