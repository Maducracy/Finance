//    let x="chidubem"
//    console.log(x)
//    let b = "motorvan"
//    console.log(b)
// const myname = (x) => {
//    if(x>10){
//       console.log("yes, more than 10")

//    } else if(x<10){
//    console.log("no,less than 10")
//    }

//    }
//    myname(9)
document.addEventListener("DOMContentLoaded", function () {
  const minimizeMenu = document.querySelector(".minimize-menu");
  const sidebar = document.querySelector(".sidebar");

  if (minimizeMenu && sidebar) {
    minimizeMenu.addEventListener("click", function () {
      sidebar.classList.toggle("minimized");
    });
  } else {
    console.error("Elements not found");
  }

  // const inputvalue = document.querySelector(".inputvalue");
  // inputvalue.textContent = "$5,500.60";
  // const num = document.querySelector(".num");
  // num.textContent = "29,000.80";
});
const link = document.querySelector("link").addEventListener("click", () => {});

// const circle = document.querySelector(".progress-ring__circle");
// const radius = circle.r.baseVal.value;
// const circumference = 2 * Math.PI * radius;

// circle.style.strokeDasharray = `${circumference} ${circumference}`;
// circle.style.strokeDashoffset = `${circumference}`;

// function setProgress(percent) {
//   const offset = circumference - (percent / 100) * circumference;
//   circle.style.strokeDashoffset = offset;
//   document.querySelector(".progress-label").textContent = `${percent}%`;
// }

// // Example: Set progress to 65%
// setProgress(65);


// document.querySelector(".myoption").addEventListener("change", function () {
//   const myoption = this.value;
//   if (myoption) {
//     switch (myoption) {
//       case "myprofile":
//         window.location.href = "myprofile";
//         break;
//       case "addaccount":
//         window.location.href = "addaccount.html";
//         break;
//       case "askquestion":
//         window.location.href = "";
//         break;
//       case "policy":
//         window.location.href = "";
//         break;
//       default:
//         console.log("no valid option selected");
//     }
//   } 
// });
function redirecttolink(){
  const link = document.querySelector("#linkselect")
  const url = select.value
  if(url){
    window.open(url, "_blank");
    
  }

}
