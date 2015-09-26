$(document).ready(function () {
        $.ajax({
            type: "Get",
            beforeSend: function (request) {
                request.setRequestHeader("AppKey", "123456");
            },
            contentType: "application/json",
            url: "http://localhost:8080/WebDeploy/api/misc/campus/1",
            dataType: 'json',
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert("Request: " + XMLHttpRequest.toString() + "\n\nStatus: " + textStatus + "\n\nError: " + errorThrown);
            },
            success: function (result) {
                var arrCate = [];
                ko.applyBindings({
                    ko_array_url: result.Results
                });
                $("#table").fadeIn();
            }
        });
});