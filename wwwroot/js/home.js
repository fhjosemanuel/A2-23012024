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
                $("#Menu").append('<div class="col-5 border border-4 border-blue-oficial rounded-circle d-flex justify-content-center align-items-center mx-auto" style="height: 10rem;">'
                + '<div class="text-center">'
                    + '<img src="/wwwroot/' + value.Url + '" />'
                    + '<div class="mt-2">' + value.Title + '</div>'
                + '</div>'
            + '</div>');
            });
        },
        error: function (error){
            $("#Menu").append('<div class="alert alert-warning" role="alert">'
                + 'Error al mostrar menú, recarga nuevamente la página'
            + '</div>');
        }
    });
}