const images = document.querySelectorAll(".popup-image");
const popup = document.getElementById("popup");
const popupImage = document.getElementById("popup-image");

images.forEach((image) => {
    image.addEventListener("click", () => {
        // Set the source of the popup image to the clicked image
        popupImage.src = image.src;
        
        // Calculate random positions for the popup
        const randomX = Math.random() * (window.innerWidth - 400);
        const randomY = Math.random() * (window.innerHeight - 400);

        // Set the position of the popup
        popup.style.left = `${randomX}px`;
        popup.style.top = `${randomY}px`;

        // Display the popup
        popup.classList.add("active");
    });
});

popup.addEventListener("click", () => {
    // Hide the popup when clicked
    popup.classList.remove("active");
});

function name() {
    var x = document.getElementById("nameTab");
    var a = document.getElementById("workTab");
    var b = document.getElementById("resumeTab");
    var c = document.getElementById("aboutTab");
    var d = document.getElementById("workeTab");

    if (x.style.display === "none") {
      x.style.display = "block";
      a.style.display = "none";
      b.style.display = "none";
      c.style.display = "none";
      d.style.display = "none";
    } else {
      x.style.display = "none";
    }
  }

  function home() {
    var x = document.getElementById("nameTab");
    var a = document.getElementById("workTab");
    var b = document.getElementById("resumeTab");
    var c = document.getElementById("aboutTab");
    var d = document.getElementById("workeTab");

    if (x.style.display === "none") {
      x.style.display = "none";
      a.style.display = "none";
      b.style.display = "none";
      c.style.display = "none";
      d.style.display = "none";
    } else {
      x.style.display = "none";
    }
  }

  function home() {
    var x = document.getElementById("nameTab");
    var a = document.getElementById("workTab");
    var b = document.getElementById("resumeTab");
    var c = document.getElementById("aboutTab");
    var d = document.getElementById("workeTab");

    if (x.style.display === "none") {
      x.style.display = "none";
      a.style.display = "none";
      b.style.display = "none";
      c.style.display = "none";
      d.style.display = "none";
    } else {
      x.style.display = "none";
    }
  }

  function worke() {
    var x = document.getElementById("nameTab");
    var a = document.getElementById("workTab");
    var b = document.getElementById("resumeTab");
    var c = document.getElementById("aboutTab");
    var d = document.getElementById("workeTab");

    if (d.style.display === "none") {
      d.style.display = "block";
      x.style.display = "none";
      a.style.display = "none";
      b.style.display = "none";
      c.style.display = "none";
    } else {
      d.style.display = "none";
    }
  }

  function abtme() {
    var x = document.getElementById("nameTab");
    var a = document.getElementById("workTab");
    var b = document.getElementById("resumeTab");
    var c = document.getElementById("aboutTab");
    var d = document.getElementById("workeTab");

    if (c.style.display === "none") {
      c.style.display = "block";
      x.style.display = "none";
      b.style.display = "none";
      a.style.display = "none";
      d.style.display = "none";
    } else {
      c.style.display = "none";
    }
  }

  function work() {
    var x = document.getElementById("nameTab");
    var a = document.getElementById("workTab");
    var b = document.getElementById("resumeTab");
    var c = document.getElementById("aboutTab");
    var d = document.getElementById("workeTab");

    if (a.style.display === "none") {
      a.style.display = "block";
      x.style.display = "none";
      b.style.display = "none";
      c.style.display = "none";
      d.style.display = "none";
    } else {
      a.style.display = "none";
    }
  }

  function resume() {
    var x = document.getElementById("nameTab");
    var a = document.getElementById("workTab");
    var b = document.getElementById("resumeTab");
    var c = document.getElementById("aboutTab");
    var d = document.getElementById("workeTab");

    if (b.style.display === "none") {
      b.style.display = "block";
      x.style.display = "none";
      a.style.display = "none";
      c.style.display = "none";
      d.style.display = "none";
    } else {
      b.style.display = "none";
    }
  }

