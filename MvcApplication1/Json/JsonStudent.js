$(document).ready(function () {
        $.ajax({
            type: "Get",
            beforeSend: function (request) {
                request.setRequestHeader("AppKey", "123456");
            },
            contentType: "application/json",
            url: "http://localhost:8080/WebDeploy/api/student?id=11386617",
            dataType: 'json',
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert("Request: " + XMLHttpRequest.toString() + "\n\nStatus: " + textStatus + "\n\nError: " + errorThrown);
            },
            success: function (result) {
                
                ko.applyBindings(result.Student);
                $("#table").fadeIn();
            }
        });
});