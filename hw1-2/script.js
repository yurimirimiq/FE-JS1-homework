//여기에 코드를 작성해주세요!
document.querySelector(".sliding").addEventListener("click", function () {
    const menu = document.querySelector(".menu");
    const openIcon = document.querySelector(".open");
    const closeIcon = document.querySelector(".close");

    menu.classList.toggle("active");
  
    if (menu.classList.contains("active")) {
      openIcon.style.display = "inline";
      closeIcon.style.display = "none";
    } else {
      openIcon.style.display = "none";
      closeIcon.style.display = "inline";
    }
  });