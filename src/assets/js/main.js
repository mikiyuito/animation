// =====================================================
// 変数定義
// =====================================================

const $html = document.documentElement;

// =====================================================
// テキスト切り替え
// =====================================================

let $intervalTitle = document.querySelector(".js-intervalTitle");
let $intervalText = $intervalTitle.children;
let intervalTextCount = $intervalText.length;

document.addEventListener("DOMContentLoaded", () => {
  $intervalText[intervalTextCount - intervalTextCount].classList.add("is-active");
});

if (intervalTextCount !== 1) {
  let i = 0;
  for (let i = 1; i < intervalTextCount; i++) {
    $intervalText[i].classList.add("-behind");
  }
  window.setInterval(() => {
    $intervalText[i].classList.remove("is-active");
    if (intervalTextCount - 1 <= i) {
      i = 0;
    } else {
      i++;
    }
    $intervalText[i].classList.add("is-active");
  }, 3000);
} else {
  $html.style.setProperty("--animationCount", "infinite");
}

// =====================================================
// ハンバーガーメニュー
// =====================================================

let $hamburgerButton = document.getElementById("js-hamburger");
let $hamburgerText = document.getElementById("js-hamburgerText");
$hamburgerButton.addEventListener("click", () => {
  let isExpanded = $hamburgerButton.getAttribute("aria-expanded") === "false";
  $hamburgerButton.setAttribute("aria-expanded", isExpanded);

  if (isExpanded) {
    $hamburgerText.textContent = "メニューを閉じる";
    $hamburgerButton.style.setProperty("animation-play-state", "running");
  } else {
    $hamburgerText.textContent = "メニューを開く";
  }
});
