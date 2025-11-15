// Comment Section Example
document.getElementById("commentBtn").addEventListener("click", function () {
  const textarea = document.querySelector("textarea");
  const comment = textarea.value.trim();

  if (comment !== "") {
    const li = document.createElement("li");
    li.textContent = comment;
    document.getElementById("commentList").appendChild(li);
    textarea.value = ""; // clear the box
  } else {
    alert("Please write a comment before posting!");
  }
});

// Contact Form Example
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    document.getElementById("response").textContent =
      "Thank you for contacting us!";
    contactForm.reset();
  });
}

let submit = document.querySelector("#search_btn");

submit.addEventListener("click", () => {
  alert("This is just for demo\n Hii");
});
