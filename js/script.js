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
    className: "hairShop",
  },
  {
    src: "img/2021/molito/molito_main.jpg",
    text: "Vivamus et enim tincidunt, tempus quam a, varius dolor.",
    info: "→ 764—39/23",
    link: "molito.html",
    className: "studio",
  },
  {
    src: "img/2022/bagel_bazel/bagel_main.jpg",
    text: "Vivamus et enim tincidunt, tempus quam a, varius dolor.",
    info: "→ 764—39/23",
    link: "bagel_bazel.html",
    className: "cafe",
  },
  {
    src: "img/2022/yookjihyang/yook_main.jpg",
    text: "Vivamus et enim tincidunt, tempus quam a, varius dolor.",
    info: "→ 764—39/23",
    link: "yugjihyang.html",
    className: "restaurant",
  },
];

const imageWrap = document.querySelector(".imageWrap");

imgData.forEach((data, index) => {
  const imgBox = document.createElement("div");
  imgBox.classList.add("imgBox", "section", data.className);

  // data-anchor 속성 추가
  imgBox.setAttribute("data-anchor", `section${index + 1}`);

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

mobileMenuBtn.addEventListener("click", () => {
  mobileMenuBar.style.right = "0";
  mobileMenuBtn.style.display = "none";
  mobileMenuCancleBtn.style.display = "block";
});

mobileMenuCancleBtn.addEventListener("click", () => {
  mobileMenuBar.style.right = "-180px";
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
    mobileMenuBar.style.right = "-180px";
    mobileMenuCancleBtn.style.display = "none";
    mobileMenuBtn.style.display = "block";
  });
});

// input 활성화 관련
const searchInput = document.getElementById("searchInput");
const dropdown = document.querySelector(".dropdown");

searchInput.addEventListener("focus", () => {
  dropdown.style.display = "block"; // 포커스 시 보여줌
});

searchInput.addEventListener("blur", () => {
  dropdown.style.display = "none"; // 포커스 해제 시 숨김
});

// 검색관련
const colorMapping = {
  카페: "cafe",
  식당: "restaurant",
  스튜디오: "studio",
  미용실: "hairShop",
};

const messageBox = document.createElement("div");

messageBox.style.marginTop = "5px";
messageBox.style.display = "none";
document.querySelector(".searchBar").appendChild(messageBox);

const searchField = document.getElementById("searchInput"); // 변수명 변경
const divs = document.querySelectorAll(".imgBox");

// 검색어 입력 이벤트
searchField.addEventListener("input", function () {
  const input = searchField.value.trim();

  if (input === "") {
    // 입력창이 비어있을 경우 모든 div 보여주기
    showAllDivs();
    messageBox.style.display = "none"; // 메시지 숨김
  } else {
    const mappingValue = colorMapping[input];
    let foundCount = 0; // 검색된 레퍼런스 개수

    if (mappingValue) {
      // 해당 검색어가 colorMapping에 있을 경우
      divs.forEach((div) => {
        if (div.classList.contains(mappingValue)) {
          showDiv(div); // showDiv 함수 사용
          foundCount++; // 일치하는 div 개수 증가
        } else {
          hideDiv(div); // hideDiv 함수 사용
        }
      });

      // 검색된 개수 메시지 표시
      if (foundCount === 0) {
        // 검색어에 해당하는 div가 없을 경우
        showAllDivs(); // 모든 div 보여주기
        messageBox.textContent = `${input}(으)로 검색된 레퍼런스는 없습니다.`;
      } else {
        messageBox.textContent = `${input}(으)로 검색된 레퍼런스는 ${foundCount}개 입니다.`;
      }

      messageBox.style.display = "block";
      setTimeout(() => {
        messageBox.style.display = "none"; // 메시지 숨김
      }, 5000);

      // 검색이 완료되면 화면을 가장 위로 스크롤
      window.scrollTo(0, 0);
    } else {
      // colorMapping에 없는 검색어 입력 시
      showAllDivs();
      messageBox.textContent = `${input}(으)로 검색된 레퍼런스는 없습니다.`;
      messageBox.style.display = "block";

      setTimeout(() => {
        messageBox.style.display = "none"; // 메시지 숨김
      }, 5000);
    }
  }
});

// Enter 키 처리
searchField.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const input = searchField.value.trim();

    if (input !== "") {
      const mappingValue = colorMapping[input];

      if (mappingValue) {
        // colorMapping에 있는 검색어인 경우
        let foundCount = 0;
        divs.forEach((div) => {
          if (div.classList.contains(mappingValue)) {
            foundCount++;
          }
        });

        if (foundCount === 0) {
          // 검색어가 colorMapping에 있지만 결과가 없을 경우
          showAllDivs(); // 모든 div 보여주기
          messageBox.textContent = `${input}(으)로 검색된 레퍼런스는 없습니다.`;
          messageBox.style.display = "block";

          setTimeout(() => {
            messageBox.style.display = "none"; // 메시지 숨김
          }, 5000);
        }
      } else {
        // colorMapping에 없는 검색어 입력 시
        showAllDivs(); // 모든 div 보여주기
        messageBox.textContent = `${input}(으)로 검색된 레퍼런스는 없습니다.`;
        messageBox.style.display = "block";

        setTimeout(() => {
          messageBox.style.display = "none"; // 메시지 숨김
        }, 5000);
      }
    }
  }
});

// 모든 div 보여주기 함수
function showAllDivs() {
  divs.forEach((div) => {
    showDiv(div); // showDiv 함수 사용
  });
}

// div 숨기기 함수
function hideDiv(div) {
  div.style.opacity = "0"; // 숨김
  div.style.visibility = "hidden"; // 요소는 숨기지만 레이아웃은 유지
  setTimeout(() => {
    div.style.display = "none"; // 일정 시간 후에 display: none 처리
  }, 300); // 애니메이션 효과에 맞춰 300ms 후 숨김
}

// div 보이기 함수
function showDiv(div) {
  div.style.display = "block"; // 요소를 다시 보이게 함
  setTimeout(() => {
    div.style.opacity = "1"; // opacity를 1로 설정
    div.style.visibility = "visible"; // 요소를 보이게 설정
  }, 0); // 잠시 후 opacity 변경
}
