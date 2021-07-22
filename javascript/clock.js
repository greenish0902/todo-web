const clock = document.querySelector("#clock");
const dateToday = document.querySelector("#date");

function getClock() {
  date = new Date();
  const year = date.getFullYear().toString();
  const month = (parseInt(date.getMonth()) + 1).toString().padStart(2, "0");
  const datenow = date.getDate().toString().padStart(2, "0");
  const day = date.getHours().toString().padStart(2, "0");
  const min = date.getMinutes().toString().padStart(2, "0");
  const sec = date.getSeconds().toString().padStart(2, "0");
  dateToday.innerText = `It's ${datenow}, ${month}, ${year}.`;
  clock.innerText = `${day}:${min}:${sec}`;
}

getClock(); // 바로 실행되게끔!
setInterval(getClock, 1000);
