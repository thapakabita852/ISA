
function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").textContent = rateval;
  }
  
  function compute() {
    var principal = parseInt(document.getElementById("principal").value);
    var rate = parseFloat(document.getElementById("rate").value);
    var years = parseInt(document.getElementById("years").value);
  
    if (principal <= 0) {
      alert("Enter a positive number");
      document.getElementById("principal").focus();
    } else {
      var interest = (principal * rate * years) / 100;
      var amount = principal + interest;
  
      var currentYear = new Date().getFullYear();
      var futureYear = currentYear + years;
  
      document.getElementById("result").innerHTML =
        "If you deposit <mark>" +
        principal +
        "</mark>,<br>at an interest rate of <mark>" +
        rate +
        "%</mark>.<br>You will receive an amount of <mark>" +
        amount +
        "</mark>,<br>in the year <mark>" +
        futureYear +
        "</mark>.";
    }
  }
  
  