$(document).ready(function () {

    dialog = $(".employee-add-block").dialog({
        autoOpen: true,
        height: 700,
        width: 700,
        modal: true,
        
    });
    // b1 goij service lấy dữ liệu:( api.manhnv.net/api/customers)
    $.ajax({
        url: 'http://api.manhnv.net/api/customers',
        method: 'GET',
        async: false
    }).done(function (response) {
        $('#tbl > tbody').empty();
        console.log(response);
        for (var i = 0; i < response.length; i++) {
            var DOB = fomatDate(response[i].DateOfBirth);
            var trHtml = `<tr style="border-top: 1px solid #808080">
                    <td style="padding: 0px 10px">${response[i].CustomerCode}</td>
                    <td style="padding: 0px 10px; width: 200px">${response[i].FullName}</td>
                    <td style="padding: 0px 10px; width: 200px">${response[i].GenderName}</td>
                    <td style="padding: 0px 10px; width: 200px">${DOB}</td>
                    <td style="padding: 0px 10px; width: 200px">${response[i].CustomerGroupName}</td>
                    <td style="padding: 0px 10px; width: 200px">${response[i].PhoneNumber}</td>
                    <td style="padding: 0px 10px; width: 200px">${response[i].Email}</td>
                    <td style="padding: 0px 10px; width: 500px">${response[i].Address}</td>
                    <td style="padding: 0px 10px; width: 200px">${response[i].DebitAmount}</td>
                    <td style="padding: 0px 10px; width: 200px">${response[i].MemberCardCode}</td>
                </tr>`;
            $('#tbl > tbody:last-child').append(trHtml);
        }
    }).fail(function(response){

    })
})
// xu ly du lieu
function fomatDate(date) {
    var date = new Date(date);
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    return day + '/' + month + '/' + year;
}
