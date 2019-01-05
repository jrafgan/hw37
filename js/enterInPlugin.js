$(function () {

    var tBody= $('.root');

    var i;
    $.get('https://restcountries.eu/rest/v2/all', function (response) {

        for (i = 0; i < response.length; i++) {
            var newTr = $('<tr>');
            var obj = response[i];
            var flagUrl = obj.flag;
            var code = $('<td class="code">').html(obj.alpha2Code);
            var flagImg = $('<img>').attr({'src': flagUrl, 'width': 120, 'height': 80, 'border': '1px solid grey'});
            var name = $('<td class="name">').html(obj.name);
            var capital = $('<td class="capital">').html(obj.capital);
            var population = $('<td class="population">').html(obj.population);
            newTr.append(code);
            newTr.append($('<td class="flag">').append(flagImg));
            newTr.append(name);
            newTr.append(capital);
            newTr.append(population);
            $(tBody).append(newTr);
            $(newTr).css('border', '1px solid grey');
        }
    });
});