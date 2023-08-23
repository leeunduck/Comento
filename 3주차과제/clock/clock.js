function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  const currentTime = `${hours}:${minutes}:${seconds}`;

  const digitalClock = document.getElementById("digitalClock");
  digitalClock.textContent = currentTime;
}

updateClock();
setInterval(updateClock, 1000); // 1초마다 시간 업데이트

function updateBatteryLevel() {
  const batteryLevelElement = document.getElementById("batteryLevel");

  // 배터리 감소 시뮬레이션
  let batteryLevel = 100;
  const interval = setInterval(() => {
    batteryLevel -= 1;
    batteryLevelElement.style.width = `${batteryLevel}%`;

    if (batteryLevel === 0) {
      clearInterval(interval); // 배터리가 0%가 되면 감소 중지
      document.body.style.backgroundColor = "#000"; // 배경을 검은색으로 변경
      document.getElementsByClassName("clock-container").style.display = "none"; // 시계 숨기기
    }
  }, 1000);
}

updateBatteryLevel();

const alarms = [];

function updateAlarmsList() {
  const alarmsList = document.getElementById("alarms");
  alarmsList.innerHTML = "";

  alarms.forEach((alarm, index) => {
    const li = document.createElement("li");
    li.textContent = `${index + 1}. ${alarm}`;
    alarmsList.appendChild(li);
  });
}

function addAlarm(time) {
  if (alarms.length < 3) {
    alarms.push(time);
    updateAlarmsList();
  } else {
    alert("알람은 최대 3개까지 추가할 수 있습니다.");
  }
}

document.getElementById("addAlarmButton").addEventListener("click", () => {
  const alarmTime = document.getElementById("alarmTime").value;
  addAlarm(alarmTime);
});

updateBatteryLevel();

const darkModeSwitch = document.getElementById("darkModeSwitch");
const body = document.body;

darkModeSwitch.addEventListener("change", () => {
  if (darkModeSwitch.checked) {
    body.classList.add("dark-mode");
  } else {
    body.classList.remove("dark-mode");
  }
});
