# LinkedIn Login

is a simple school project that simulates the login and registration system of a professional platform, specifically LinkedIn. This project focuses on user authentication, form validation, and basic functionality for a polished front-end experience.

## FEATURES

* **USER REGISTRATION**: Create a new account with first name, last name, email, password, confirm password, and date of birth.
* **USER LOGIN**: Authenticate and access the platform using email or phone and password.
* **FORM VALIDATION**: Real-time password strength meter (filler bar), password requirements checklist (8+ chars, uppercase, lowercase, number, special char), confirm password matching, and date of birth limits (150-year limit and future birth date protection).
* **SWEETALERT2 INTEGRATION**: Modern, animated modal dialogs for sign-in feedback and registration confirmation.
* **RESPONSIVE DESIGN**: Clean and simple interface for a user-friendly experience styled to match LinkedIn, including an interactive footer language selector.

## TECHNOLOGIES USED

* **FRONT-END**: HTML5, CSS3, JavaScript (ES6)
* **LIBRARIES**: SweetAlert2 (via CDN)

## SCREENSHOTS

| Login Page | Registration Page |
| :---: | :---: |
| <img src="pictures/login.png" alt="Login" width="420"> | <img src="pictures/register.png" alt="Register" width="420"> |

## FOLDER STRUCTURE

```
LinkedIn_Login/
│
├── index.html          # Main login HTML file
├── signup.html         # Registration HTML file
├── css/
│   └── style.css       # Stylesheets
├── js/
│   ├── login.js        # Login page interactivity & authentication
│   └── signup.js       # Signup validation, strength meter & DOB checks
├── pictures/
│   ├── favicon.ico     # Favicon
│   ├── login.png       # Screenshot of login page
│   └── register.png    # Screenshot of register page
└── README.md           # Project documentation
```

## USAGE

1. Open `index.html` in a browser to explore the interface.
2. Click "Join now" to navigate to the registration page (`signup.html`).
3. Fill in the fields and test real-time password strength and validation.
4. Enjoy the clean LinkedIn simulation.

OR

Open it from GitHub Pages: [LinkedIn_Login](https://alentrost.github.io/LinkedIn_Login/)

## SIMULATION CREDENTIALS

* **Email:** `example@gmail.com`
* **Password:** `Password123!`

## AUTHOR

Alen Trošt

## INSTALLATION

1. Clone the repository:
```bash
git clone https://github.com/alentrost/LinkedIn_Login.git
```
