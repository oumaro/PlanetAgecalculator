let onlyNumbers = /^[0-9]+$/;
let age = document.getElementById("age");
let errorTxt = document.getElementById("error");
let submitBtn = document.getElementById("submitBtn");
let mercury = document.getElementById("mercury");
let venus = document.getElementById("venus");
let earth = document.getElementById("earth");
let mars = document.getElementById("mars");
let jupiter = document.getElementById("jupiter");
let saturn = document.getElementById("saturn");
let uranus = document.getElementById("uranus");
let neptune = document.getElementById("neptune");
age.addEventListener("input", getTheValue);

let orbitalPeriod = {
  Mercury: 0.2408467,
  Venus: 0.61519726,
  Earth: 1,
  Mars: 1.8808158,
  Jupiter: 11.862615,
  Saturn: 29.447498,
  Uranus: 84.016846,
  Neptune: 164.79132,
};
let number11;
function getTheValue() {
  const value = age.value;
  let showMe = onlyNumbers.test(value);
  if (!showMe) {
    errorTxt.innerHTML = "<span>Please Enter a Valid Number</span>";
    age.style.border = "3px solid red";
  } else {
    errorTxt.innerHTML = "";
    age.style.border = "3px solid green";
  }
  function showValue() {
    // console.log(value, "this is ShowValue Function");
    (function (number11) {
      number11 = (value / parseFloat(orbitalPeriod.Venus)).toFixed(0);
      number11 = number11.toString();
      if (number11.length > 4) {
        return (venus.innerHTML = number11.substring(0, 4));
      } else {
        return (venus.innerHTML = number11);
      }
    })();
    (function () {
      number11 = (value / parseFloat(orbitalPeriod.Earth)).toFixed(0);
      number11 = number11.toString();
      if (number11.length > 4) {
        return (earth.innerHTML = number11.substring(0, 4));
      } else {
        return (earth.innerHTML = number11);
      }
    })();
    (function () {
      number11 = (value / parseFloat(orbitalPeriod.Uranus)).toFixed(0);
      number11 = number11.toString();
      if (number11.length > 4) {
        return (uranus.innerHTML = number11.substring(0, 4));
      } else {
        return (uranus.innerHTML = number11);
      }
    })();
    (function () {
      number11 = (value / parseFloat(orbitalPeriod.Neptune)).toFixed(0);
      number11 = number11.toString();
      if (number11.length > 4) {
        return (neptune.innerHTML = number11.substring(0, 4));
      } else {
        return (neptune.innerHTML = number11);
      }
    })();
    (function () {
      number11 = (value / parseFloat(orbitalPeriod.Saturn)).toFixed(0);
      number11 = number11.toString();
      if (number11.length > 4) {
        return (saturn.innerHTML = number11.substring(0, 4));
      } else {
        return (saturn.innerHTML = number11);
      }
    })();
    (function () {
      number11 = (value / parseFloat(orbitalPeriod.Mercury)).toFixed(0);
      number11 = number11.toString();
      console.log(value / parseFloat(orbitalPeriod.Mercury));
      if (number11.length > 4) {
        return (mercury.innerHTML = number11.substring(0, 4));
      } else {
        return (mercury.innerHTML = number11);
      }
    })();
    (function () {
      number11 = (value / parseFloat(orbitalPeriod.Mars)).toFixed(0);
      number11 = number11.toString();
      if (number11.length > 4) {
        return (mars.innerHTML = number11.substring(0, 4));
      } else {
        return (mars.innerHTML = number11);
      }
    })();
    (function () {
      number11 = (value / parseFloat(orbitalPeriod.Jupiter)).toFixed(0);
      number11 = number11.toString();
      if (number11.length > 4) {
        return (jupiter.innerHTML = number11.substring(0, 4));
      } else {
        return (jupiter.innerHTML = number11);
      }
    })();
  }
  return showValue();
}
