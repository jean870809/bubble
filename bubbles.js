
var nodes = new vis.DataSet([
    { id: "AAPL", title: "AAPL", image: "bubbleimg/AAPL.PNG" },
    { id: "AXP", title: "AXP", image: "bubbleimg/AXP.PNG" },
    { id: "CSCO", title: "CSCO", image: "bubbleimg/CSCO.PNG" },
    { id: "CAT", title: "CAT", image: "bubbleimg/CAT.PNG" },
    { id: "DIS", title: "DIS", image: "bubbleimg/DIS.PNG" },
    { id: "HD", title: "HD", image: "bubbleimg/HD.PNG" },
    { id: "IBM", title: "IBM", image: "bubbleimg/IBM.png" },
    { id: "KO", title: "KO", image: "bubbleimg/KO.png" },
    { id: "MCD", title: "MCD", image: "bubbleimg/MCD.png" },
    { id: "MSFT", title: "MSFT", image: "bubbleimg/MSFT.png" },
    { id: "V", title: "V", image: "bubbleimg/V.png" },
]);
var edges = new vis.DataSet();

var container = document.getElementById('bubbles');
var data = {
    nodes: nodes,
    edges: edges
};

var options = {
    nodes: { borderWidth: 0, shape: "image", size: 30, color: { background: '#19334d' } },
    physics: {
        stabilization: false,
        minVelocity: 0.01,
        solver: "repulsion",
        repulsion: {
            nodeDistance: 55
        }
    }
};
var network = new vis.Network(container, data, options);

var choose = [];
// Events
network.on("click", function (e) {
    if (e.nodes.length) {
        var node = nodes.get(e.nodes[0]);
        if (node.size != 45) {
            node.size = 45;
            choose.push(node.id);
            console.log(choose);
        } else {
            node.size = 30;
            choose.splice(choose.indexOf(node.id), 1);
            console.log(choose);
        }
        // Do something
        nodes.update(node);
    }
});

function reset() {
    choose = [];
    console.log(choose);

}
