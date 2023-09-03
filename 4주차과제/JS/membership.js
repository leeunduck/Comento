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
  check(Id);
}

function check(Id) {
  const set = new Set(Id);

  // duplicate
  if (Id.length !== set.size) {
    alert("이미 사용 중인 아이디입니다.");
    Id.pop();
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
