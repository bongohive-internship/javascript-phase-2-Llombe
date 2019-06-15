// the greeting function should be below here
<html>
    <body>
        <h1>Enter Your Full Names Below</h1>

        <p>First name:</p>
        <input type="text" id="myText" value=""></input>
        <p>Last name:</p>
        <input type="text" id="myText1" value=""></input>
        <br></br>

        <button onclick="greet()">Display Greeting</button>

        <p id="demo"></p>
        
        <script>
            function greet() {
  var x = document.getElementById("myText").value;
  var y = document.getElementById("myText1").value;
  document.getElementById("demo").innerHTML = "Hello!" +" "+ x +" "+ y;
 
 if (x.length == 0) {
    document.getElementById('demo').style.display='none'
    alert("Please Type in Your First name");
    submitOK = "false";
  }
if  (y.length == 0) {
    document.getElementById('demo').style.display='none'
    alert("Please Type in Your Last name");
    submitOK = "false";
  }
    
}
        </script>
    </body>
</html>