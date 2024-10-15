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

// 카카오톡 문의하기 버튼 커스텀

let kakaoBtn = document.querySelector(".kakaoBtn");

kakaoBtn.addEventListener("click", (e) => {
  e.preventDefault();
  Kakao.Channel.chat({
    channelPublicId: "_XxaAxhn", // 카카오톡 채널 홈 URL에 명시된 id로 설정합니다.
  });
});

// 이미지와 텍스트 데이터를 담은 배열
const imgData = [
  {
    src: "https://media.istockphoto.com/id/1293762741/ko/%EC%82%AC%EC%A7%84/%ED%98%84%EB%8C%80%EC%A0%81%EC%9D%B8-%EA%B1%B0%EC%8B%A4-%EC%9D%B8%ED%85%8C%EB%A6%AC%EC%96%B4-3d-%EB%A0%8C%EB%8D%94.jpg?s=2048x2048&w=is&k=20&c=VDAGO5lyHiMu1GaOIDjCZJYNydBZUeYSOcsFqJBjmq8=",
    text: "Vivamus et enim tincidunt, tempus quam a, varius dolor.",
    info: "→ 764—39/23",
    link: "port1.html", // 링크 추가
  },
  {
    src: "https://cdn.pixabay.com/photo/2023/09/10/15/33/traditional-8245250_1280.jpg",
    text: "Vivamus et enim tincidunt, tempus quam a, varius dolor.",
    info: "→ 764—39/23",
    link: "https://www.google.co.kr/?hl=ko", // 링크 추가
  },
  {
    src: "https://cdn.pixabay.com/photo/2019/01/23/14/56/house-3950416_1280.jpg",
    text: "Vivamus et enim tincidunt, tempus quam a, varius dolor.",
    info: "→ 764—39/23",
    link: "https://example.com/link3", // 링크 추가
  },
];

const imageWrap = document.querySelector(".imageWrap");

imgData.forEach((data) => {
  const imgBox = document.createElement("div");
  imgBox.classList.add("imgBox");

  // a 태그 생성
  const anchor = document.createElement("a");
  anchor.href = data.link; // 객체에서 링크 가져오기

  // imgBoxTextBox 생성
  const imgBoxTextBox = document.createElement("div");
  imgBoxTextBox.classList.add("imgBoxTextBox");

  const p1 = document.createElement("p");
  p1.textContent = data.text;
  const p2 = document.createElement("p");
  p2.textContent = data.info;

  imgBoxTextBox.appendChild(p1);
  imgBoxTextBox.appendChild(p2);

  // activeHover div 생성
  const activeHover = document.createElement("div");
  activeHover.classList.add("activeHover");

  // 이미지 생성
  const img = document.createElement("img");
  img.src = data.src;
  img.alt = "";

  // anchor에 imgBoxTextBox, activeHover, img 추가
  anchor.appendChild(activeHover); // activeHover 추가
  anchor.appendChild(imgBoxTextBox);

  anchor.appendChild(img);

  // imgBox에 anchor 추가
  imgBox.appendChild(anchor);

  // imageWrap에 imgBox 추가
  imageWrap.appendChild(imgBox);
});
