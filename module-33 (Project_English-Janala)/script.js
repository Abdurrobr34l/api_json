//* API
const loadLessons = () => {
  fetch("https://openapi.programming-hero.com/api/levels/all")
    .then(response => response.json())
    .then((json) => displayLesson(json.data))
}

//? REMOVE ACTIVE CLASS FROM OTHER BUTTONS
const removeActive = () => {
  const lessonButtons = document.querySelectorAll(".lesson-button");
  lessonButtons.forEach(button => button.classList.remove("btn-active"))
}

//? LESSON BUTTONS
const loadLevelWord = (id) => {
  const url = `https://openapi.programming-hero.com/api/level/${id}`
  fetch(url)
    .then(res => res.json())
    .then(data => {
      // clickBtn.classList.remove("btn-active")
      removeActive();
      const clickBtn = document.getElementById(`lesson-button-${id}`);
      clickBtn.classList.add("btn-active")
      displayLevelWord(data.data)
    })
}

//? LESSON CARD WORD DETAILS
const loadWordDetails = (id) => {
  const url = `https://openapi.programming-hero.com/api/word/${id}`;
  // console.log(url);
  fetch(url)
    .then(res => res.json())
    .then(data => displayWordDetails(data.data))

  // onclick="my_modal_5.showModal()"
}

displayWordDetails = (word) => {
  console.log(word);
}

//? LESSON CARD (WORD MEANINGS)
const displayLevelWord = (words) => {
  const wordDiv = document.getElementById("lesson-card-div");
  wordDiv.innerHTML = "";

  //? CONDITION TO SEE IF ANY LESSON IS EMPTY OR NOT
  if (words.length === 0) {
    wordDiv.innerHTML += `
      <div class="col-span-12 py-[30px] text-center">
        <img src="./assets/alert-error.png" alt="It is an alert image" class="mx-auto">
        <h3 class="font-hind_siliguri my-[15px] text-[#79716]">আপনি এখনো কোন Lesson Select করেন ন।</h3>
        <p class="font-hind_siliguri text-[34px] font-medium text-[#292524]"><span>একটি</span> Lesson Select <span>করুন।</span>
        </p>
      </div>
  `
  }

  words.forEach(word => {
    const card = document.createElement("div");
    card.innerHTML += `
    <div class="p-5 bg-white rounded-xl h-full md:p-10 xl:p-14">
            
            <!--? Word Definition -->
            <div class="flex flex-col items-center gap-6">
              <h4 class="text-3xl font-bold">${word.word ? word.word : "Word not found"}</h4>
              <p class="text-xl font-medium">Meaning /Pronounciation</p>
              <p class="font-hind_siliguri text-2xl font-semibold text-[#464649]">"${word.meaning ? word.meaning : "Meaning not found"} / ${word.pronunciation ? word.pronunciation : "Pronunciation not found"}"</p>
            </div>

            <!--? Info & voice -->
            <div class="flex justify-between mt-14">
<!--? onclick="loadWordDetails(${word.id})"-->
              <button  onclick="my_modal_5.showModal()" class="p-4 bg-[#1A91FF1A] size-14 rounded-lg transition-colors ease-linear duration-200 btn-hover">
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
      <button id="lesson-button-${lesson.level_no}" onclick="loadLevelWord(${lesson.level_no})" 
        class="btn lesson-button text-sm font-semibold bg-transparent accent-clr-purple border-2 border-[#422ad5] rounded-md transition-colors ease-linear duration-200 btn-hover">
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