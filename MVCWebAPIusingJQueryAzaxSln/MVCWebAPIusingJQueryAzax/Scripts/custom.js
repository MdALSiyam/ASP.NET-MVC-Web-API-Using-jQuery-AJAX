var myData = null;
$(document).ready(function () {
    getData();
});
function getData() {
    $.ajax({
        type: 'GET',
        url: 'api/Person/',
        success: function (data) {
            $('#info').empty();
            $.each(data, function (key, val) {
                $('<tr>' + '<td>' + val.Name + '</td>' + '<td>' + val.Email + '</td>' + '<td>  <button class="btn btn-success" onclick="editItem(' + val.Id + ')"> Edit </button> &nbsp;&nbsp; ' + '<button class="btn btn-danger" onclick="deleteItem(' + val.Id + ')"> Delete </button></td>' + '</tr>').appendTo($('#info'));
        });
        myData = data;
    }
    });
}
function deleteItem(id) {
    $.ajax({
        type: "DELETE",
        url: "api/Person/" + id,
        contentType: "application/json; charset=utf-8",
        success: function (result) {
            getData();
        }
    })
}
$('#btnAdd').click(function ()
{
    var name = $("#name").val();
    var email = $("#email").val();
    var id = $("#id").val();
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "api/Person/",
        data: JSON.stringify({ name, email }),
        dataType: "JSON",
        success: function (data) {
            getData();
            $("#name").val('');
            $("#email").val('');
            $("#id").val('');
        }
    })
})
function editItem(id) {
    $.each(myData, function (key, item) {
        if (item.Id == id)
        {
            $("#name").val(item.Name);
            $("#email").val(item.Email);
            $("#id").val(item.Id);
        }
    })
}
$("#btnUpdate").click(function () {
    var name = $("#name").val();
    var email = $("#email").val();
    var id = $("#id").val();
    $.ajax({
        type: "PUT",
        contentType: "application/json; charset=utf-8",
        url: "api/Person/" + id,
        data: JSON.stringify({ name, email, id }),
        dataType: "JSON",
        success: function (data) {
            getData();
            $("#name").val('');
            $("#email").val('');
            $("#id").val('');
        }
    })
})