$(function () {

    var url;
    var createInfo = function () {
        $.get(url, function (response) {
            var obj = response[0];
            $('#name').html(obj.name);
            $('#region').html(obj.region);
            $('#subregion').html(obj.subregion);
            $('#capital').html(obj.capital);
            var flagUrl = obj.flag;
            $('#flag').append($('<br /><br /><img>').attr({
                'src': flagUrl,
                'width': 360,
                'height': 240,
                'border': '1px solid grey'
            }));
        }).fail(function (jqXHR) {
            jAlert(jqXHR.responseText);
        });
    }

    $('#show').on('click', function (event) {
        var countryName = $('#country-name').val();
        url = 'https://restcountries.eu/rest/v2/name/' + countryName;
        createInfo();
    });
});