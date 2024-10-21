// SDK 초기화
Kakao.init("db34edd42b36e8b1c566a73f5e7a709c");
Kakao.isInitialized();
console.log(Kakao.isInitialized());

// 카카오톡 문의하기 버튼 커스텀
let kakaoBtn = document.querySelector(".kakaoBtn");
kakaoBtn.addEventListener("click", (e) => {
  e.preventDefault();
  Kakao.Channel.chat({
    channelPublicId: "_XxaAxhn",
  });
});

// 이미지와 텍스트 데이터를 담은 배열
const imgData = [
  {
    src: "img/2021/Aube/SZ_02864.jpg",
    text: "Vivamus et enim tincidunt, tempus quam a, varius dolor.",
    info: "→ 764—39/23",
    link: "aube.html",
  },
  {
    src: "img/2021/molito/molito_main.jpg",
    text: "Vivamus et enim tincidunt, tempus quam a, varius dolor.",
    info: "→ 764—39/23",
    link: "molito.html",
  },
  {
    src: "img/2022/bagel_bazel/bagel_main.jpg",
    text: "Vivamus et enim tincidunt, tempus quam a, varius dolor.",
    info: "→ 764—39/23",
    link: "bagel_bazel.html",
  },
  {
    src: "img/2022/yookjihyang/yook_main.jpg",
    text: "Vivamus et enim tincidunt, tempus quam a, varius dolor.",
    info: "→ 764—39/23",
    link: "yugjihyang.html",
  },
];

const imageWrap = document.querySelector(".imageWrap");

imgData.forEach((data) => {
  const imgBox = document.createElement("div");
  imgBox.classList.add("imgBox");

  // a 태그 생성
  const anchor = document.createElement("a");
  anchor.href = data.link;

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
  anchor.appendChild(activeHover);
  anchor.appendChild(imgBoxTextBox);
  anchor.appendChild(img);
  imgBox.appendChild(anchor);
  imageWrap.appendChild(imgBox);

  // 첫 번째 imgBox에 대한 Intersection Observer 설정
  if (data === imgData[0]) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
        }
      });
    });

    observer.observe(imgBox); // 첫 번째 imgBox를 관찰
  }
});

// 스크롤 애니메이션
document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      console.log("스크롤됨");
    } else {
      console.log("맨위로 올라옴");
    }
  });
});

// 모바일 메뉴바 관련
let mobileMenuBtn = document.querySelector(".mobileMenuBtn");
let mobileMenuBar = document.querySelector(".mobileMenuBar");
let mobileMenuCancleBtn = document.querySelector(".mobileMenuCancleBtn");
let wrap = document.querySelector(".articleWrap");

mobileMenuBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  mobileMenuBar.style.right = "0";
  mobileMenuBtn.style.display = "none";
  mobileMenuCancleBtn.style.display = "block";
});

mobileMenuCancleBtn.addEventListener("click", () => {
  mobileMenuBar.style.right = "-180px"; // 필요한 만큼 이동
  mobileMenuCancleBtn.style.display = "none";
  mobileMenuBtn.style.display = "block";
});

mobileMenuBar.addEventListener("click", (e) => {
  e.stopPropagation();
});

wrap.addEventListener("click", (e) => {
  mobileMenuBar.style.right = "-180px"; // 필요한 만큼 이동
  mobileMenuCancleBtn.style.display = "none";
  mobileMenuBtn.style.display = "block";
});
