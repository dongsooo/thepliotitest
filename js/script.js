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
    className: "cafe", // 추가된 클래스 이름
  },
  {
    src: "img/2021/molito/molito_main.jpg",
    text: "Vivamus et enim tincidunt, tempus quam a, varius dolor.",
    info: "→ 764—39/23",
    link: "molito.html",
    className: "studio", // 추가된 클래스 이름
  },
  {
    src: "img/2022/bagel_bazel/bagel_main.jpg",
    text: "Vivamus et enim tincidunt, tempus quam a, varius dolor.",
    info: "→ 764—39/23",
    link: "bagel_bazel.html",
    className: "cafe", // 추가된 클래스 이름
  },
  {
    src: "img/2022/yookjihyang/yook_main.jpg",
    text: "Vivamus et enim tincidunt, tempus quam a, varius dolor.",
    info: "→ 764—39/23",
    link: "yugjihyang.html",
    className: "restaurant", // 추가된 클래스 이름
  },
];

const imageWrap = document.querySelector(".imageWrap");

imgData.forEach((data) => {
  const imgBox = document.createElement("div");
  imgBox.classList.add("imgBox", data.className); // 원하는 클래스 이름 추가

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

// 검색관련
const colorMapping = {
  카페: "cafe",
  식당: "restaurant",
  스튜디오: "studio",
  미용실: "hairShop",
};

const messageBox = document.createElement("div");
messageBox.style.fontSize = "16px";
messageBox.style.marginTop = "5px"; // 간격 조정
messageBox.style.display = "none"; // 처음에는 숨김
document.querySelector(".searchBar").appendChild(messageBox);

document.getElementById("searchInput").addEventListener("input", function () {
  const input = document
    .getElementById("searchInput")
    .value.toLowerCase()
    .trim();
  const divs = document.querySelectorAll(".imgBox");

  if (input === "") {
    // 입력이 비어있을 경우 모든 div 표시
    divs.forEach((div) => {
      div.classList.remove("hidden");
    });
    messageBox.style.display = "none"; // 메시지 숨김
  } else if (!colorMapping.hasOwnProperty(input)) {
    // colorMapping에 없는 경우 모든 div 표시
    divs.forEach((div) => {
      div.classList.remove("hidden");
    });
    messageBox.textContent = `${input}(으)로 검색된 레퍼런스는 없습니다.`;
    messageBox.style.color = "red"; // 실패 메시지 색상
    messageBox.style.backgroundColor = "black"; // 배경 색상
    messageBox.style.display = "block"; // 메시지 표시

    // 10초 후 메시지 숨김
    setTimeout(() => {
      messageBox.style.display = "none";
    }, 3000);
  } else {
    // 입력값에 따른 검색
    const mappingValue = colorMapping[input];
    let foundCount = 0; // 매장 발견 개수

    divs.forEach((div) => {
      const className = div.classList[1]; // 두 번째 클래스 이름 가져오기

      if (mappingValue === className) {
        div.classList.remove("hidden");
        foundCount++; // 발견 개수 증가
      } else {
        div.classList.add("hidden");
      }
    });

    // 매장 발견 개수에 따라 메시지 표시
    if (foundCount === 0) {
      // colorMapping에는 있지만, 실제로는 없는 경우
      messageBox.textContent = `${input}(으)로 검색된 레퍼런스는 없습니다.`;
      messageBox.style.color = "red"; // 실패 메시지 색상
      messageBox.style.backgroundColor = "black"; // 배경 색상
      messageBox.style.display = "block"; // 메시지 표시

      // 10초 후 메시지 숨김
      setTimeout(() => {
        messageBox.style.display = "none";
      }, 3000);

      // 모든 .imgBox 보이기
      divs.forEach((div) => {
        div.classList.remove("hidden");
      });
    } else {
      messageBox.textContent = `${input}(으)로 검색된 레퍼런스는 ${foundCount}개 입니다.`;
      messageBox.style.color = "white"; // 성공 메시지 색상
      messageBox.style.backgroundColor = "black"; // 배경 색상
      messageBox.style.display = "block"; // 메시지 표시

      // 10초 후 메시지 숨김
      setTimeout(() => {
        messageBox.style.display = "none";
      }, 3000);
    }
  }
});
