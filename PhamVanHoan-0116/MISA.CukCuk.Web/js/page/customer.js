$(document).ready(function(){
    // b1 goij service lấy dữ liệu:( api.manhnv.net/api/customers)
    $.ajax({
        url: 'http://api.manhnv.net/api/customers',
        method: 'GET',
        async: false
    }).done(function (response) {
        console.log(response);
    }).fail(function(response){

    })
})