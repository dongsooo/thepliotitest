const swiper = new Swiper(".swiper-container", {
  loop: true, // 반복 여부
  slidesPerView: 1, // 한 번에 보여줄 슬라이드 개수
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// 카카오톡 문의하기
// SDK 초기화
Kakao.init("db34edd42b36e8b1c566a73f5e7a709c");
Kakao.isInitialized();
console.log(Kakao.isInitialized());
// Kakao.Channel.createChatButton({
//   container: "#kakao-talk-channel-chat-button",
//   channelPublicId: "_XxaAxhn",
//   title: "consult",
//   size: "small",
//   color: "yellow",
//   shape: "pc",
//   supportMultipleDensities: true,
// });
let kakaoBtn = document.querySelector(".kakaoBtn");
let kakaoText = document.querySelector(".kakaoText");

kakaoBtn.addEventListener("click", (e) => {
  e.preventDefault();
  Kakao.Channel.chat({
    channelPublicId: "_XxaAxhn", // 카카오톡 채널 홈 URL에 명시된 id로 설정합니다.
  });
});

kakaoText.addEventListener("click", (e) => {
  e.preventDefault();
  Kakao.Channel.chat({
    channelPublicId: "_XxaAxhn", // 카카오톡 채널 홈 URL에 명시된 id로 설정합니다.
  });
});

// 사진 더보기 버튼 관련
const moreViewBtn = document.querySelector(".moreViewBtn");
const hiddenImages = document.querySelectorAll(".deImgBox:not(.show)");

moreViewBtn.addEventListener("click", () => {
  hiddenImages.forEach((imgBox) => {
    imgBox.classList.add("show"); // show 클래스 추가하여 이미지 표시
  });
  hiddenImages.forEach((imgBox) => (imgBox.style.display = "block")); // 보이도록 설정
  moreViewBtn.style.display = "none"; // 버튼 숨김
});

// 맨위로 가기 버튼
document.querySelector(".goToUpBtn").addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // 부드러운 스크롤
  });
});
