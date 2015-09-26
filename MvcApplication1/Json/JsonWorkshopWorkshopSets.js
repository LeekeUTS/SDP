$(document).ready(function () {
        $.ajax({
            type: "Get",
            beforeSend: function (request) {
                request.setRequestHeader("AppKey", "123456");
            },
            contentType: "application/json",
            url: JsonUrl+"api/workshop/workshopSets/true",
            dataType: 'json',
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert("Request: " + XMLHttpRequest.toString() + "\n\nStatus: " + textStatus + "\n\nError: " + errorThrown);
            },
            success: function (result) {
                var arrCate = [];
                $.each(result.Results, function (index, row) {
                    arrCate.push(row);
                });
                ko.applyBindings({
                    ko_array_url: result.Results
                });
                $("#table").fadeIn();
            }
        });
});