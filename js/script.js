$(document).ready(function(){
    $("#voila").click(function() {
        var ville = $("#ville").val()
        if (ville == "Ville" || ville == "ville")
        {
            alert("Tu as mis Ville, ceci n'est pas une ville petit rigolo, mets une vraie ville !")
        }
        else {
            $.get('https://api.openweathermap.org/data/2.5/weather?q=' + ville +'&appid=659496a5ec528c334c3663ea0927fdd9', function(data){
            $( '.res' ).text( "Il fait " + (Math.round(data.main.temp - 273.15)) + "°C à " + ville)
            });
        }
        
        });
});