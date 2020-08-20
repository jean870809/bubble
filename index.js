var stock = [];
var price = [];
$.get("data.json", function (data) {
    $.each(data, function (i, item) {
        stock.push(item.name);
        price.push(item.price);
    });
}, "json");


function getbgcolor() {
    var numone = parseInt(Math.random() * (255 + 1), 10);
    var numtwo = parseInt(Math.random() * (255 + 1), 10);
    var numthree = parseInt(Math.random() * (255 + 1), 10);

    color = "rgba(" + numone + "," + numtwo + "," + numthree + ",0.2)";
    return color;
}
function getbdcolor() {
    var numone = parseInt(Math.random() * (255 + 1), 10);
    var numtwo = parseInt(Math.random() * (255 + 1), 10);
    var numthree = parseInt(Math.random() * (255 + 1), 10);

    color = "rgba(" + numone + "," + numtwo + "," + numthree + ",1)";
    return color;
}
$(function () {
    var table = document.getElementById("table");
    for (i = 0; i < stock.length; i++) {
        var row = table.insertRow(i);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        cell1.outerHTML = "<th scope='row'>" + (i + 1) + "</th>";
        cell2.innerHTML = "<td><div class='img-div'><img src='img/" + stock[i] + ".png' class='com-img'></div></td>";
        cell3.innerHTML = "<td value =" + stock[i] + ">" + stock[i] + "</td>";
    }


    
    var ctx = document.getElementById('chart'); //股價圖
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['DAY1', 'DAY2', 'DAY3', 'DAY4', 'DAY5', 'DAY6', 'DAY7', 'DAY8', 'DAY9', 'DAY10',
                'DAY11', 'DAY12', 'DAY13', 'DAY14', 'DAY15', 'DAY16', 'DAY17', 'DAY18', 'DAY19', 'DAY20'],
            datasets: []
        }
    });
    for (i = 0; i < stock.length; i++) {
        myChart.data.datasets.push({
            data: price[i],
            label: document.getElementById("table").rows[i].cells[2].innerHTML,
            backgroundColor: getbgcolor(),
            borderColor: getbdcolor(),
            fill: false
        });
        myChart.update();
    }
});


