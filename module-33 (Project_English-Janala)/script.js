//* API
const loadLessons = () => {
  fetch("https://openapi.programming-hero.com/api/levels/all")
    .then(response => response.json())
    .then((json) => displayLesson(json.data))
}

//? LESSON BUTTONS
const loadLevelWord = (id) => {
  const url = `https://openapi.programming-hero.com/api/level/${id}`
  fetch(url)
    .then(res => res.json())
    .then(data => displayLevelWord(data.data))
}

//? LESSON CARD (WORD MEANINGS)
const displayLevelWord = (words) => {
  const wordDiv = document.getElementById("lesson-card-div");
  wordDiv.innerHTML = "";

  words.forEach(word => {
    const card = document.createElement("div");
    card.innerHTML += `
    <div class="p-5 bg-white rounded-xl md:p-10 xl:p-14">
            
            <!--? Word Definition -->
            <div class="flex flex-col items-center gap-6">
              <h3 class="text-3xl font-bold">${word.word}</h3>
              <p class="text-xl font-medium">Meaning /Pronounciation</p>
              <p class="font-hind_siliguri text-2xl font-semibold text-[#464649]">"${word.meaning} / ${word.pronunciation}"</p>
            </div>

            <!--? Info & voice -->
            <div class="flex justify-between mt-14">

              <button class="p-4 bg-[#1A91FF1A] size-14 rounded-lg transition-colors ease-linear duration-200 btn-hover">
                <i class="fa-solid fa-circle-info word-detail-i"></i>
              </button>

              <button class="p-4 bg-[#1A91FF1A] size-14 rounded-lg transition-colors ease-linear duration-200 btn-hover">
                <i class="fa-solid fa-volume-high word-detail-i"></i>
              </button>

            </div>
            
          </div>
  `
  wordDiv.append(card);
  });
}

//? LESSON BUTTONS
const displayLesson = (lessons) => {

  const lessonButtonUl = document.getElementById("lesson-button-ul");
  lessonButtonUl.innerHTML = "";

  for (let lesson of lessons) {

    const lessonButtonLi = document.createElement("li");
    lessonButtonLi.innerHTML += `
      <button onclick="loadLevelWord(${lesson.level_no})" 
        class="btn text-sm font-semibold bg-transparent accent-clr-purple border-2 border-[#422ad5] rounded-md transition-colors ease-linear duration-200 btn-hover">
        <i class="fa-solid fa-book-open"></i>
        Lesson - ${lesson.level_no}
      </button>
    `

    lessonButtonUl.append(lessonButtonLi);

  }

}

loadLessons();


// //* EMAIL & PASSWORD ALERT MESSAGE
// alert("Email: abd@gmail.com, Password: 12")

// //* LOGIN FORM
// const userEmailInput = document.getElementById("user-email-input");
// const userPasswordInput = document.getElementById("user-password-input");
// const submitButton = document.getElementById("submit-button");

// submitButton.addEventListener("click", function (stopReload) {
//   stopReload.preventDefault();

//   const email = userEmailInput.value;
//   const password = userPasswordInput.value;

//   if (email === "abd@gmail.com") {
//     if (password === "12") {
//       document.querySelector("header").classList.remove("hidden");
//       document.getElementById("main").classList.remove("hidden");
//       document.getElementById("form").classList.add("hidden");
//       userEmailInput.value = "";
//       userPasswordInput.value = "";
//     } else {
//       alert("Invalid password");
//     }
//   } else {
//     alert("Invalid email")
//   }

// });

// //* LOGOUT INTERACTIVITY
// const logoutButtons = document.querySelectorAll('.logout-button');

// logoutButtons.forEach(button => {
//   button.addEventListener("click", function (stopReload) {
//     stopReload.preventDefault();

//     document.querySelector("header").classList.add("hidden");
//     document.getElementById("form").classList.remove("hidden");

//   });
// });