const memberIdForm = document.querySelector("#memberId");
const memberIdInput = memberIdForm.querySelector("input");
const duplicationCheck = memberIdForm.querySelector("#duplication");

const MEMBERS_ID_KEY = "memberId";

const Id = [];

function onduplicationSubmit(event) {
  event.preventDefault();
  const memberId = memberIdInput.value;
  memberIdInput.value = "";
  Id.push(memberId);
  localStorage.setItem(MEMBERS_ID_KEY, JSON.stringify(Id));
  const saveMemberId = localStorage.getItem(MEMBERS_ID_KEY);
  const parsedId = JSON.parse(saveMemberId);
  check(parsedId);
}

function check(parsedId) {
  const set = new Set(parsedId);

  console.log(set);

  // duplicate
  if (parsedId.length !== set.size) {
    alert("아이디가 중복 됐습니다");
  }
}

memberIdForm.addEventListener("submit", onduplicationSubmit);

let timeout;
let password = document.getElementById("passEntry");
let strengthBadge = document.getElementById("strengthDisp");
let strongPassword = new RegExp(
  "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})"
);
let mediumPassword = new RegExp(
  "((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))"
);

function StrengthChecker(PasswordParameter) {
  if (strongPassword.test(PasswordParameter)) {
    strengthBadge.style.backgroundColor = "green";
    strengthBadge.textContent = "Strong";
  } else if (mediumPassword.test(PasswordParameter)) {
    strengthBadge.style.backgroundColor = "blue";
    strengthBadge.textContent = "Medium";
  } else {
    strengthBadge.style.backgroundColor = "red";
    strengthBadge.textContent = "Weak";
  }
}

password.addEventListener("input", () => {
  strengthBadge.style.display = "block";

  clearTimeout(timeout);

  timeout = setTimeout(() => StrengthChecker(password.value), 100);

  if (password.value.length !== 0) {
    strengthBadge.style.display != "block";
  } else {
    strengthBadge.style.display = "none";
  }
});
