// add a printDate function in here
// eg: console.log("Hello World")
<html>
<head>
<script>
function printDate() {
  document.getElementById("demo").innerHTML = Date()
}

console.log(printDate());

</script>
</head>
<body>

<h2>Current Time</h2>

<p id = "demo"></p>

<button type = "button" onclick = "printDate()">Click to Check Time</button>

</body>
</html>