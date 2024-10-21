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

imgData.forEach((data, index) => {
  const imgBox = document.createElement("div");
  imgBox.classList.add("imgBox", "section", data.className); // 원하는 클래스 이름 추가

  // data-anchor 속성 추가
  imgBox.setAttribute("data-anchor", `section${index + 1}`); // 오름차순으로 숫자 매기기

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

// 모바일 메뉴바 관련
let mobileMenuBtn = document.querySelector(".mobileMenuBtn");
let mobileMenuBar = document.querySelector(".mobileMenuBar");
let mobileMenuCancleBtn = document.querySelector(".mobileMenuCancleBtn");

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

// 메뉴 항목 클릭 시 메뉴 닫기
const menuItems = mobileMenuBar.querySelectorAll("a");

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    mobileMenuBar.style.right = "-180px"; // 메뉴 닫기
    mobileMenuCancleBtn.style.display = "none";
    mobileMenuBtn.style.display = "block";
  });
});

// 검색관련
// const colorMapping = {
//   카페: "cafe",
//   식당: "restaurant",
//   스튜디오: "studio",
//   미용실: "hairShop",
// };

// const messageBox = document.createElement("div");
// messageBox.style.fontSize = "16px";
// messageBox.style.marginTop = "5px"; // 간격 조정
// messageBox.style.display = "none"; // 처음에는 숨김
// document.querySelector(".searchBar").appendChild(messageBox);

// document.getElementById("searchInput").addEventListener("input", function () {
//   const input = document
//     .getElementById("searchInput")
//     .value.toLowerCase()
//     .trim();
//   const divs = document.querySelectorAll(".imgBox");

//   if (input === "") {

//     divs.forEach((div) => {
//       div.classList.remove("hidden");
//     });
//     messageBox.style.display = "none";
//   } else if (!colorMapping.hasOwnProperty(input)) {

//     divs.forEach((div) => {
//       div.classList.remove("hidden");
//     });
//     messageBox.textContent = `${input}(으)로 검색된 레퍼런스는 없습니다.`;
//     messageBox.style.color = "red";
//     messageBox.style.backgroundColor = "black";
//     messageBox.style.display = "block";

//     setTimeout(() => {
//       messageBox.style.display = "none";
//     }, 3000);
//   } else {

//     const mappingValue = colorMapping[input];
//     let foundCount = 0;

//     divs.forEach((div) => {
//       const className = div.classList[1];

//       if (mappingValue === className) {
//         div.classList.remove("hidden");
//         foundCount++;
//       } else {
//         div.classList.add("hidden");
//       }
//     });

//     if (foundCount === 0) {

//       messageBox.textContent = `${input}(으)로 검색된 레퍼런스는 없습니다.`;
//       messageBox.style.color = "red";
//       messageBox.style.backgroundColor = "black";
//       messageBox.style.display = "block";

//       setTimeout(() => {
//         messageBox.style.display = "none";
//       }, 3000);

//       divs.forEach((div) => {
//         div.classList.remove("hidden");
//       });
//     } else {
//       messageBox.textContent = `${input}(으)로 검색된 레퍼런스는 ${foundCount}개 입니다.`;
//       messageBox.style.color = "white";
//       messageBox.style.backgroundColor = "black";
//       messageBox.style.display = "block";

//       setTimeout(() => {
//         messageBox.style.display = "none";
//       }, 3000);
//     }
//   }
// });

// 스크롤 이벤트
