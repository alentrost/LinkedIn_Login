const password = document.querySelector("#password");
const togglePassword = document.querySelector("#toggle-password");

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

const signinForm = document.querySelector("#signin-form");
const emailInput = document.querySelector("#email");

function showAlert(options) {
  if (typeof Swal !== "undefined") {
    return Swal.fire(options);
  } else {
    alert(options.title + "\n\n" + options.text);
    return Promise.resolve();
  }
}

if (signinForm) {
  signinForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const emailVal = emailInput ? emailInput.value.trim() : "";
    const passVal = password ? password.value : "";

    if (emailVal.toLowerCase() === "example@gmail.com" && passVal === "Password123!") {
      showAlert({
        icon: "success",
        title: "Signed in successfully!",
        text: "Welcome back, example@gmail.com!",
        confirmButtonColor: "#0a66c2",
        confirmButtonText: "Continue"
      });
    } else {
      showAlert({
        icon: "error",
        title: "Sign in failed",
        text: "Incorrect email or password. For testing, use example@gmail.com and Password123!.",
        confirmButtonColor: "#0a66c2",
        confirmButtonText: "Try again"
      });
    }
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
