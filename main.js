document.querySelector("#button").addEventListener("click", findHoroscope)

// let birthdayM = "#month"
// let birthdayD = "#day"



function findHoroscope(e) {
  e.preventDefault()
 let birthdayM = document.querySelector("#month").value
  let birthdayD = Number(document.querySelector("#day").value)


  if (birthdayM == "Janaury" && birthdayD >= 21 || birthdayM == "Febuary" && birthdayD <= 19){
    console.log (month,day)
      document.querySelector("#results").innerText="Aquarius" 
      document.getElementById("y").src="./images/jCole.jpg"

    }else if (birthdayM == "Febuary" && birthdayD >= 19 || birthdayM == "March" && birthdayD <= 20) {
      document.querySelector("#results").innerText="Pisces"
      document.getElementById("y").src="./images/tyCreate.jpg"

  } else if (birthdayM == "March" && birthdayD >= 21 || birthdayM == "April" && birthdayD <= 20) {
    document.querySelector("#results").innerText="Aries"
    document.getElementById("y").src="./images/tyDol.jpg"

  }else if (birthdayM == "April" && birthdayD >= 21 || birthdayM == "May" && birthdayD <= 20) {
  document.querySelector("#results").innerText="Taurus"
  document.getElementById("y").src="./images/meekM.jpg"

  }else if (birthdayM == "May" && birthdayD >= 21 || birthdayM == "June" && birthdayD <= 21) {
    document.querySelector("#results").innerText="Gemini"
    document.getElementById("y").src="./images/remyaMa.jpg"

  }else if (birthdayM == "June" && birthdayD >= 22 || birthdayM == "July" && birthdayD <= 22) {
    document.querySelector("#results").innerText="Cancer"
    document.getElementById("y").src="./images/centF.jpg"

  }else if (birthdayM == "July" && birthdayD >= 23 || birthdayM == "August" && birthdayD <= 22) {
    document.querySelector("#results").innerText="Leo"
    document.getElementById("y").src="./images/cheefK.jpg"

  }else if (birthdayM == "August" && birthdayD >= 23 || birthdayM == "September" && birthdayD <= 22) {
    document.querySelector("#results").innerText="Virgo"
    document.getElementById("y").src="./images/wizK.jpg"
  
  }else if (birthdayM == "September" && birthdayD >= 23 || birthdayM == "October" && birthdayD <= 22) {
    document.querySelector("#results").innerText="Libra"
    document.getElementById("y").src="./images/cardiB.jpg"

  }else if (birthdayM == "October" && birthdayD >= 23 || birthdayM == "November" && birthdayD <= 22) {
    document.querySelector("#results").innerText="Scorpio"
    document.getElementById("y").src="./images/drizzyD.png"

  }else if (birthdayM == "November" && birthdayD >= 23|| birthdayM == "December" && birthdayD <= 21) {
    document.querySelector("#results").innerText="Sagittarius"
    document.getElementById("y").src="./images/nickiiM.jpg"

  }else if (birthdayM == "December" && birthdayD >= 22 || birthdayM == "July" && birthdayD <= 20) {
    document.querySelector("#results").innerText="Capricorn"
    document.getElementById("y").src="./images/macM.jpg"
    //   alert("you are an aries")
  // } else if (birthdayM == "May" && birthdayD >= 22 || birthdayM == "June" && birthdayD <= 21) {
  //   alert("you are an gemini")
  }
}


