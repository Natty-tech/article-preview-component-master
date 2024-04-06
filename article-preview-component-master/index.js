//get the sharebar
const sharebar = document.getElementsByClassName("sharebar")[0];

//get the status element
const status = document.querySelectorAll("img")[5];

//get the box element
const box = document.getElementsByClassName("box")[0];

//setting an event listerner to status
status.addEventListener("click", (e) => {
  if (sharebar.style.display === "flex") {
    //hide the sharebar and the box
    sharebar.style.display = "none";
    box.style.display = "none";
  } else {
    // Show the sharebar and the box
    sharebar.style.display = "flex";
    if (window.innerWidth > 600) {
      box.style.display = "flex";
    }
  }
});
