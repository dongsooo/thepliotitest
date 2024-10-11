// SDK 초기화
Kakao.init("db34edd42b36e8b1c566a73f5e7a709c");
Kakao.isInitialized();
console.log(Kakao.isInitialized());
Kakao.Channel.createChatButton({
  container: "#kakao-talk-channel-chat-button",
  channelPublicId: "_XxaAxhn",
  title: "consult",
  size: "small",
  color: "yellow",
  shape: "pc",
  supportMultipleDensities: true,
});

// 이미지와 텍스트 데이터를 담은 배열
const imgData = [
  {
    src: "https://cdn.pixabay.com/photo/2024/08/28/09/05/gannet-9003524_1280.jpg",
    text: "Vivamus et enim tincidunt, tempus quam a, varius dolor.",
    info: "→ 764—39/23",
  },
  {
    src: "https://cdn.pixabay.com/photo/2023/09/25/14/06/cat-8275147_1280.jpg",
    text: "Vivamus et enim tincidunt, tempus quam a, varius dolor.",
    info: "→ 764—39/23",
  },
  {
    src: "https://cdn.pixabay.com/photo/2017/01/31/13/40/shooting-star-2024127_1280.png",
    text: "Vivamus et enim tincidunt, tempus quam a, varius dolor.",
    info: "→ 764—39/23",
  },
];

// 원하는 개수만큼 반복해서 생성
const imageWrap = document.querySelector(".imageWrap");

imgData.forEach((data) => {
  const imgBox = document.createElement("div");
  imgBox.classList.add("imgBox");

  // imgBoxTextBox 생성
  const imgBoxTextBox = document.createElement("div");
  imgBoxTextBox.classList.add("imgBoxTextBox");

  const p1 = document.createElement("p");
  p1.textContent = data.text;
  const p2 = document.createElement("p");
  p2.textContent = data.info;

  imgBoxTextBox.appendChild(p1);
  imgBoxTextBox.appendChild(p2);

  // 이미지 생성
  const img = document.createElement("img");
  img.src = data.src;
  img.alt = "";

  imgBox.appendChild(imgBoxTextBox);
  imgBox.appendChild(img);

  imageWrap.appendChild(imgBox);
});
