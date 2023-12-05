let number = document.getElementById("number");

      number.addEventListener("keypress", function (event) {
        if (event.key == "Enter") {
          changeNumber();
        }
      });
      function changeNumber(num) {
        const currentValue = Number(number.innerHTML) + num;
        number.innerHTML = currentValue;
        console.log("number", number);
        if (currentValue == 0) {
          number.style.color = "black";
        } else if (currentValue > 0) {
          number.style.color = "green";
        } else {
          number.style.color = "red";
        }
      }