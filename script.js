function setCalendrier(index) {
  const calendarCase = document.querySelector("[title='" + index + "']");

  const todayDate = new Date();
  var dateDayIndex = new Date(2021, 10, 1, 0, 1, 0);
  dateDayIndex.setDate(dateDayIndex.getDate() + index - 1);

  calendarCase.addEventListener("click", () => {
    if (todayDate < dateDayIndex) {
      alert("Too soon !");
    } else if (todayDate >= dateDayIndex) {
      window.open("images/" + index + ".jpg", "fullscreen=yes", "toolbar=yes");
      document.querySelector("[title='" + index + "']>iframe").style.display =
        "block";
    }
  });
}

for (let i = 1; i <= 24; i++) {
  setCalendrier(i);
}
