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
    console.log("Elements not found");
  }

  // Select the canvas element
  // // Handle Airtime Purchase
  // document
  //   .getElementById("airtime-form")
  //   .addEventListener("submit", function (event) {
  //     event.preventDefault();

  //     const network = document.getElementById("airtime-network").value;
  //     const phone = document.getElementById("airtime-phone").value;
  //     const amount = document.getElementById("airtime-amount").value;

  //     alert(
  //       "Airtime Purchase\nNetwork: ${network}\nPhone: ${phone}\nAmount: ₦${amount}"
  //     );
  //   });

  // Handle Data Purchase
  const dataform = document.querySelector("#data-form").value;

  dataform.addEventListener("click", function (event) {
    e.preventdefault();
    alert("buy today");
  });

  let selectid = document.getElementById("linkselect");

  selectid.addEventListener("change", function (e) {
    const target = event.target.value;
    console.log("target");
    switch (target) {
      case "policy":
        console.log(true);
        window.location.replace("");
        break;
      case "addacount":
        window.location.replace("addaccount");
        break;
      case "askquestion":
        window.location.replace("");
        break;
      case "profile":
        window.location.replace("profile.html");
        break;
      default:
        return;
    }
  });

  // const inputvalue = document.querySelector(".inputvalue");
  // inputvalue.textContent = "$5,500.60";
  // const num = document.querySelector(".num");
  // num.textContent = "29,000.80";
});

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

setTimeout(() => {}, timeout);

async (params) => {};


