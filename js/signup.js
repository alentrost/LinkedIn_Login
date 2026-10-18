const password = document.querySelector("#password");
const togglePassword = document.querySelector("#toggle-password");
const passwordStrengthContainer = document.querySelector("#password-strength-container");

if (password && togglePassword) {
  togglePassword.addEventListener("mousedown", (e) => {
    e.preventDefault();
  });

  togglePassword.addEventListener("click", () => {
    const isHidden = password.type === "password";
    password.type = isHidden ? "text" : "password";
    togglePassword.textContent = isHidden ? "Hide" : "Show";
    togglePassword.setAttribute("aria-label", isHidden ? "Hide password" : "Show password");
  });
}

if (password && passwordStrengthContainer) {
  password.addEventListener("focus", () => {
    passwordStrengthContainer.classList.add("is-visible");
  });

  password.addEventListener("blur", () => {
    passwordStrengthContainer.classList.remove("is-visible");
  });

  passwordStrengthContainer.addEventListener("mousedown", (e) => {
    e.preventDefault();
  });
}

const confirmPassword = document.querySelector("#confirm-password");
const toggleConfirmPassword = document.querySelector("#toggle-confirm-password");
const passwordError = document.querySelector("#password-error");
const dobInput = document.querySelector("#dob");
const dobError = document.querySelector("#dob-error");
const signupForm = document.querySelector("#signup-form");
const emailInput = document.querySelector("#email");

const today = new Date();
const yyyy = today.getFullYear();
const mm = String(today.getMonth() + 1).padStart(2, "0");
const dd = String(today.getDate()).padStart(2, "0");
const todayStr = `${yyyy}-${mm}-${dd}`;
const minDateStr = `${yyyy - 150}-${mm}-${dd}`;

function checkDobValidity() {
  if (!dobInput || !dobInput.value) {
    if (dobError) dobError.style.display = "none";
    if (dobInput) {
      dobInput.classList.remove("input-error");
      dobInput.setCustomValidity("");
    }
    return true;
  }

  if (dobInput.value > todayStr) {
    if (dobError) {
      dobError.textContent = "Date of birth cannot be in the future.";
      dobError.style.display = "block";
    }
    dobInput.classList.add("input-error");
    dobInput.setCustomValidity("Date of birth cannot be in the future.");
    return false;
  } else if (dobInput.value < minDateStr) {
    if (dobError) {
      dobError.textContent = "Age cannot exceed 150 years.";
      dobError.style.display = "block";
    }
    dobInput.classList.add("input-error");
    dobInput.setCustomValidity("Age cannot exceed 150 years.");
    return false;
  } else {
    if (dobError) dobError.style.display = "none";
    dobInput.classList.remove("input-error");
    dobInput.setCustomValidity("");
    return true;
  }
}

if (dobInput) {
  dobInput.max = todayStr;
  dobInput.min = minDateStr;
  dobInput.addEventListener("input", checkDobValidity);
  dobInput.addEventListener("change", checkDobValidity);
}

if (confirmPassword && toggleConfirmPassword) {
  toggleConfirmPassword.addEventListener("mousedown", (e) => {
    e.preventDefault();
  });

  toggleConfirmPassword.addEventListener("click", () => {
    const isHidden = confirmPassword.type === "password";
    confirmPassword.type = isHidden ? "text" : "password";
    toggleConfirmPassword.textContent = isHidden ? "Hide" : "Show";
    toggleConfirmPassword.setAttribute("aria-label", isHidden ? "Hide password" : "Show password");
  });
}

const strengthFill = document.querySelector("#strength-fill");
const strengthLabel = document.querySelector("#strength-label");
const reqLength = document.querySelector("#req-length");
const reqUpper = document.querySelector("#req-upper");
const reqLower = document.querySelector("#req-lower");
const reqNumber = document.querySelector("#req-number");
const reqSpecial = document.querySelector("#req-special");

function updateReq(element, isMet) {
  if (!element) return;
  const icon = element.querySelector(".req-icon");
  if (isMet) {
    element.classList.add("met");
    if (icon) icon.innerHTML = "&#10003;";
  } else {
    element.classList.remove("met");
    if (icon) icon.innerHTML = "&#10005;";
  }
}

function evaluatePasswordStrength(val) {
  if (!val) {
    if (strengthFill) {
      strengthFill.style.width = "0%";
      strengthFill.style.backgroundColor = "#e0e0e0";
    }
    if (strengthLabel) {
      strengthLabel.textContent = "Too weak";
      strengthLabel.style.color = "rgba(0, 0, 0, 0.6)";
    }
    updateReq(reqLength, false);
    updateReq(reqUpper, false);
    updateReq(reqLower, false);
    updateReq(reqNumber, false);
    updateReq(reqSpecial, false);
    return 0;
  }

  const hasLength = val.length >= 8;
  const hasUpper = /[A-Z]/.test(val);
  const hasLower = /[a-z]/.test(val);
  const hasNumber = /[0-9]/.test(val);
  const hasSpecial = /[^A-Za-z0-9]/.test(val);

  updateReq(reqLength, hasLength);
  updateReq(reqUpper, hasUpper);
  updateReq(reqLower, hasLower);
  updateReq(reqNumber, hasNumber);
  updateReq(reqSpecial, hasSpecial);

  let score = 0;
  if (hasLength) score++;
  if (hasUpper) score++;
  if (hasLower) score++;
  if (hasNumber) score++;
  if (hasSpecial) score++;

  let width = "0%";
  let color = "#df3b3b";
  let label = "Weak";

  switch (score) {
    case 1:
      width = "20%";
      color = "#df3b3b";
      label = "Very weak";
      break;
    case 2:
      width = "40%";
      color = "#e65100";
      label = "Weak";
      break;
    case 3:
      width = "60%";
      color = "#f59e0b";
      label = "Fair";
      break;
    case 4:
      width = "80%";
      color = "#0a66c2";
      label = "Good";
      break;
    case 5:
      width = "100%";
      color = "#057642";
      label = "Strong";
      break;
    default:
      width = "0%";
      color = "#e0e0e0";
      label = "Too weak";
  }

  if (strengthFill) {
    strengthFill.style.width = width;
    strengthFill.style.backgroundColor = color;
  }
  if (strengthLabel) {
    strengthLabel.textContent = label;
    strengthLabel.style.color = color;
  }

  return score;
}

function checkPasswordMatch() {
  if (confirmPassword.value && password.value !== confirmPassword.value) {
    passwordError.style.display = "block";
    confirmPassword.classList.add("input-error");
    confirmPassword.setCustomValidity("Passwords do not match");
  } else {
    passwordError.style.display = "none";
    confirmPassword.classList.remove("input-error");
    confirmPassword.setCustomValidity("");
  }
}

if (password) {
  password.addEventListener("input", () => {
    evaluatePasswordStrength(password.value);
    checkPasswordMatch();
  });
}

if (confirmPassword) {
  confirmPassword.addEventListener("input", checkPasswordMatch);
}

function showAlert(options) {
  if (typeof Swal !== "undefined") {
    return Swal.fire(options);
  } else {
    alert(options.title + "\n\n" + options.text);
    return Promise.resolve();
  }
}

if (signupForm) {
  signupForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (password.value.length < 8) {
      showAlert({
        icon: "warning",
        title: "Password too short",
        text: "Password must be at least 8 characters long.",
        confirmButtonColor: "#0a66c2"
      });
      return;
    }

    if (password.value !== confirmPassword.value) {
      showAlert({
        icon: "error",
        title: "Passwords do not match",
        text: "Please make sure your passwords match before submitting.",
        confirmButtonColor: "#0a66c2"
      });
      return;
    }

    if (dobInput && !checkDobValidity()) {
      showAlert({
        icon: "error",
        title: "Invalid date of birth",
        text: dobInput.value > todayStr
          ? "Date of birth cannot be in the future."
          : "Age cannot exceed 150 years.",
        confirmButtonColor: "#0a66c2"
      });
      return;
    }

    showAlert({
      icon: "success",
      title: "Account created!",
      text: "Welcome to LinkedIn! Redirecting to sign in...",
      confirmButtonColor: "#0a66c2",
      confirmButtonText: "Go to Sign in"
    }).then(() => {
      window.location.assign("index.html");
    });
  });
}

const languageTrigger = document.querySelector("#language-trigger");
const languageDropdown = document.querySelector("#language-dropdown");
const languageItems = document.querySelectorAll(".language-item");

if (languageTrigger && languageDropdown) {
  languageTrigger.addEventListener("click", (e) => {
    e.stopPropagation();
    const isOpen = languageDropdown.classList.toggle("is-open");
    languageTrigger.setAttribute("aria-expanded", String(isOpen));
  });

  document.addEventListener("click", (e) => {
    if (!languageDropdown.contains(e.target) && e.target !== languageTrigger) {
      languageDropdown.classList.remove("is-open");
      languageTrigger.setAttribute("aria-expanded", "false");
    }
  });

  languageItems.forEach((item) => {
    item.addEventListener("click", () => {
      languageItems.forEach((btn) => btn.classList.remove("active"));
      item.classList.add("active");
      const chosenLang = item.querySelector(".lang-native").textContent;
      languageTrigger.innerHTML = `${chosenLang} <span class="language-caret">&#9662;</span>`;
      languageDropdown.classList.remove("is-open");
      languageTrigger.setAttribute("aria-expanded", "false");
    });
  });
}
