var http = require('http');
var url = 'http://api.openweathermap.org/data/2.5/weather?q=Dallas,us&appid=314c5e8e3d47366fb0dee7be57402adb'

var server = http.createServer(function(request,response){

    var request  = require('request');
    request(url, function(err, res, body){
        if(res.statusCode == 200){
            console.log('Working fine');
        var data = JSON.parse(body);
        response.write("<html><body><div id='container'>");
        response.write("<h1>" + 'City Name: ' + data['name']+ '<br>' + "</h1>");
        response.write("<h2>" + 'Temperature: ' + data.main['temp'] + '°C' + '<br>' + "</h2>");
        response.write("<h2>"+ 'Sunset time: ' + new Date(data.sys['sunset']*1000)+"</h2>");
        response.write("</div></body></html>");
        response.end();
        }
        console.log(body);
        response.write("suka")
        response.end();
    });




}).listen(8081);