$(document).ready(function () {
    var urlParam = "page=1&PageSize=4000&StudentId=" + SessionSID + "&Active=true";
    var encodedUrl = SessionSID;
    //alert(encodedUrl);
    console.log(encodedUrl);
        $.ajax({
            type: "Get",
            beforeSend: function (request) {
                request.setRequestHeader("AppKey", "123456");
            },
            contentType: "application/json",
            url: "http://localhost:8080/WebDeploy/api/workshop/booking/search?" + "page=1&PageSize=4000&StudentId=" + encodedUrl + "&Active=true",
            dataType: 'json',
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert("Request: " + XMLHttpRequest.toString() + "\n\nStatus: " + textStatus + "\n\nError: " + errorThrown);
            },
            success: function (result) {
                var arrCate = [];
                console.log(result.Results);
                ko.applyBindings({
                    ko_array_url: result.Results
                });
                $("#table").fadeIn();
            }
        });
});