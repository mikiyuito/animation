// =====================================================
// 変数定義
// =====================================================

const $html = document.documentElement;

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
