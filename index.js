//code javascriipt

document.getElementById("clickme").addEventListener("click", function () {
  const request = new XMLHttpRequest();
  const url =
    "https://api.numlookupapi.com/v1/validate/+261340117019?apikey=gK0Xj3Pe0Ob7Rp8DfnGBm5YGRuumJG5DIyVsi8Al";

  request.open("GET", url);
  request.send();

  request.onload = function () {
    if (request.status === 200) {
      //parse de json
      data = JSON.parse(request.responseText);
      document.getElementById("p1").innerHTML = data.number
      document.getElementById("p2").innerHTML = data.country_name
      document.getElementById("p3").innerHTML = data.country_code
      document.getElementById("p4").innerHTML = data.carrier
      document.getElementById("p5").innerHTML = data.line_type
    } else if (request.status === 404) {
      console.log("not found");
    }
  };
});
