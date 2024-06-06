$(document).ready(function (){
    fillMenu()
});

function fillMenu(){
    $("#Menu").empty();
    $.ajax({
        url: "/Data/JsonFiles/home/menu.json",
        dataType: "JSON",
        success: function (result){
            $.each(result, function (item, value){
                $("#Menu").append('<div onclick="GetComponent(' + value.Id + ',\'' + value.ComponentRoute + '\')" class="col-5 rounded-circle-div d-flex justify-content-center align-items-center" id="option' + value.Id + '">'
                + '<div class="text-center">'
                    + '<div class="bg-white rounded-circle py-2">'
                        + '<img src="/wwwroot/' + value.Url + '" alt="Inicio" />'
                    + '</div>'
                    + '<div class="mt-2 fw-bold">' + value.Title + '</div>'
                + '</div>'
            + '</div>'
            + '<div id="ShowHomeComponent' + value.Id + '" style="display: none;"><div>');
            });
        },
        error: function (error){
            $("#Menu").append('<div class="alert alert-warning" role="alert">'
                + 'Error al mostrar menú, recarga nuevamente la página'
            + '</div>');
        }
    });
}

function GetComponent(id,component){

    if( component != "null" &&  !$("#ShowHomeComponent" + id).is(':visible') ){
        if(!$("#option" + id).hasClass('bg-blue-oficial')) { $("#option" + id).addClass('bg-blue-oficial') }
        $("#ShowHomeComponent" + id).empty().show();
        $.ajax({
            url: "/" + component,
            dataType: "HTML",
            success: function (result){
                $("#ShowHomeComponent" + id).append(result);
            },
            error: function (error){
                $("#ShowHomeComponent" + id).append('<p class="text-center">Error al mostrar información :(</p>');
            }
        });
    } else {
        if($("#option" + id).hasClass('bg-blue-oficial')) { $("#option" + id).removeClass('bg-blue-oficial') }
        $("#ShowHomeComponent" + id).empty().hide();
    }
}