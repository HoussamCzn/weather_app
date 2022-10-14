$(document).ready(function () {
  $("#voila").click(function () {
    var ville = $("#ville").val();
    var request = $.get(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        ville +
        "&appid=659496a5ec528c334c3663ea0927fdd9"
    );
    request.done(function (data) {
      $(".res").text(
        "Il fait " + Math.round(data.main.temp - 273.15) + "°C à " + ville
      );
    });
    request.fail(function (data){
        $(".res").text("La ville " + ville + " n'existe pas.");
        console.log(data);
    })
  });
});
