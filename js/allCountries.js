$(function () {
    var mainDiv = $('.row');
    var i;
    $.get('https://restcountries.eu/rest/v2/all', function (response) {

        for (i = 0; i < response.length; i++) {

            var obj = response[i];
            var flagUrl = obj.flag;
            var code = $('<div class="code">').html(obj.alpha2Code);
            var flagImg = $('<img>').attr({'src': flagUrl, 'width': 120, 'height': 80, 'border': '1px solid grey'});
            var name = $('<div class="name">').html(obj.name);
            var capital = $('<div class="capital">').html(obj.capital);
            var population = $('<div class="population">').html(obj.population);
            mainDiv.append(code);
            mainDiv.append($('<div class="flag">').append(flagImg));
            mainDiv.append(name);
            mainDiv.append(capital);
            mainDiv.append(population);
            $('div').css('border', '1px solid grey');
        }
    }).fail(function (jqXHR) {
        jAlert(jqXHR.responseText);
    });
});