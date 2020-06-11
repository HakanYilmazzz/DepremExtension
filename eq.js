
$("#eqTableBody tr").remove();
var tableBody = $("#eqTableBody");
var row;
$("#getButton").addClass("initial");
$("#getButton").removeClass("after-load");
LoadData();


function LoadData() {
    var sp = new Spinner();
    sp.spin(document.getElementById("mainTable"));
    $("#getButton").hide();
    $("#eqTableBody tr").remove();
    $.get("https://api.orhanaydogdu.com.tr/deprem/live.php?limit=9", function (data, status) {
        var dataResult = data.result;
        for (i = 0; i < dataResult.length; i++) {
            row = $("<tr/>");
            tableBody.append(row);
            row.append($('<td> <b>' + (i+1) + "</b></td>"));
            row.append($('<td>' + (dataResult[i].date.toLocaleString('us-US')) + "</td>"));
            row.append($('<td>' + dataResult[i].title + "</td>"));
            row.append($('<td>' + dataResult[i].depth.toFixed(1) + " km" + "</td>"));
            row.append($('<td> <b>' + dataResult[i].mag.toFixed(1) + "</b></td>"));

        }
        $("#getButton").removeClass("initial");
        $("#getButton").addClass("after-load");
        $("#getButton").show();
        sp.stop();
    });
}


$("#getButton").click(function () {
    LoadData();
});


