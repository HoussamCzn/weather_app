$(document).ready(function(){
    $("#voila").click(function() {
        $.get('https://api.openweathermap.org/data/2.5/weather?q=' + $("#inpt").val() +'&appid=659496a5ec528c334c3663ea0927fdd9', function(data){
            $(".rep").attr()
            });
        });
});