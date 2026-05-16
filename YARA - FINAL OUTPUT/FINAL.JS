// ACT 1 — runs on load + button
function runAct1() {
  const msg = "BSIT - 104 - Hello Ma'am Gloria";
  console.log(msg);
  document.getElementById("act1-log").textContent = "✓ Logged: " + msg;
}
runAct1();

// ACT 2
function runAct2() {
  const el = document.getElementById("act2-out");
  el.textContent = "Hello Ma'am Gloriaaaa!";
}

// ACT 3
function runAct3() {
  alert("Hellooooo greetings from BSIT 104 - YARA");
}

// ACT 4
function runAct4() {
  var $name = "Yara, Dustin Craig D.";
  document.getElementById("act4-out").textContent = $name;
  console.log($name);
  alert($name);
}

// ACT 5
function runAct5() {
  var $name = "Sup bruhh";
  document.getElementById("act5-out").textContent = $name;
  console.log($name);
  alert($name);
}

// ACT 6
function runAct6() {
  window.alert("Hello World");
}

// ACT 7
function runAct7() {
  document.getElementById("act7-result").textContent = "50 + 60 = " + (50 + 60);
}