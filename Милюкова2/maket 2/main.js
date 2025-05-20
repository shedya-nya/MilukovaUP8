document.addEventListener("DOMContentLoaded", function () {
  // сбор элементов
  const openButtons = document.querySelectorAll(".open-modal");
  const closeButtons = document.querySelectorAll(".close");
  const forms = document.querySelectorAll(".signup-form");

  // открытие окна при нажатии определенной кнопки
  openButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const modalId = this.getAttribute("data-modal");
      document.getElementById(modalId).style.display = "block";
    });
  });
  // закрытие окна при нажатии на крестик
  closeButtons.forEach((button) => {
    button.addEventListener("click", function () {
      this.closest(".modal").style.display = "none";
    });
  });

  // закрытие окна при внешнем нажатии
  window.addEventListener("click", function (event) {
    if (event.target.classList.contains("modal")) {
      event.target.style.display = "none";
    }
  });

  // перемещение между окнами
  document
    .querySelector(".switch-to-register")
    .addEventListener("click", function (e) {
      e.preventDefault();
      document.getElementById("myModalLogin").style.display = "none";
      document.getElementById("myModalReg").style.display = "block";
    });

  document
    .querySelector(".switch-to-login")
    .addEventListener("click", function (e) {
      e.preventDefault();
      document.getElementById("myModalReg").style.display = "none";
      document.getElementById("myModalLogin").style.display = "block";
    });
  // закрытие окна при нажатии на крестик
  closeButtons.forEach((button) => {
    button.addEventListener("click", function () {
      this.closest(".modal").style.display = "none";
    });
  });
});
