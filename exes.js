
function XO(str) {
  var xcount = 0;
  var ocount = 0;
  for (var i = 0; i < str.length; i++) {
    if (str.charAt(i) === "x")
    {
     xcount = xcount + 1;
    }
      // console.log(`current X-Total is ${xcount}`)
    if (str.charAt(i) === "X")
    {
     xcount = xcount + 1;
      // console.log(`current X-Total is ${xcount}`)
    }
    if (str.charAt(i) === "o")
    {
      ocount = ocount + 1;
    }
    if (str.charAt(i) === "O")
    {
      ocount = ocount + 1;
      // console.log(`current O-Total is ${ocount}`)
    }
    console.log(`xcount currently ${xcount} ocount currently ${ocount}`);
    if (xcount === ocount) {
      console.log(true);
      } else 
      {
        console.log(false);
      }
             
  }
}

XO("pzpzpz");
