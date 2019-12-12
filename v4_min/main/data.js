var test_breadcrumb_node = [
    {"text":"docs", "selected":"/docs"},
    {"text":"widgets", "selected":"/widgets/intro"},
    {"text":"breadcrumb", "selected":"/widgets/breadcrumb"}
];
var chip_items = [{
    "text": "chip1",
    "value": "20190522",
    "icon": "icon-0"
}, {
    "text": "chip2",
    "value": "20190523",
    "icon": "icon-loading"
}];
var test_nodes = ["Seoul", "Incheon", "Bundang", "Daegu", "Busan"];
var line_data = [
    {name:"A", data: [30, 20, 10, 20, 30, 40, 3]},
    {name:"B", data: [40, 10, 60, 43, 36, 5, 22]}
];
var  line_option = {
    title: {
        text : "Line type Chart",
        margin : {
            bottom : 0
        },
        align:"center",

    },
    colors: ["#CC0000", "#3399FF"],
};
var test_items = [
    {"name":"Kim", "age":"20", "location":"Seoul"},
    {"name":"Lee", "age":"25", "location":"Busan"},
    {"name":"Park", "age":"30", "location":"Incheon"},
    {"name":"Choi", "age":"35", "location":"Bundang"},
    {"name":"Jung", "age":"40", "location":"Daegu"}
];
// dropdown - data model
var test_nodes1 = [
    { "text": "Look,if you have"},{ "text": "One shot"},
    { "text": "One opportunity"},{ "text": "To seize"},
    { "text": "everything you"},{ "text": "Wanted-One moment"},
    { "text": "Would you capture it"},{ "text": "Or just let it slip?"}
];

var test_labels = ["First", "Second", "Third"];

// floating, side, drawer - data model
var test_nodes2 = [
    { text: "A class", icon: "icon-expert", children: [
        { text: "Mr. Top" },
        { text: "Ms. Tos" },
        { text: "Docter. Jeus", selected: "/widgets/menu" }
    ]},
    { text: "B class", children: [
        { text: "Mr. Top" },
        { text: "Ms. Tos" },
        { text: "Docter. Jeus", selected: "/widgets/menu" }
    ]},
    { text: "Web Site", icon: "icon-file", children: [
        { text: "Naver", selected: "http://www.naver.com" },
        { text: "Google", selected: "http://www.google.com" }
    ]}
];
var test_treenodes = [{
    id: "Tmax_Group", text: "Tmax group", icon: "icon-folder", children: [
        { id: "TmaxSoft", text: "TmaxSoft", icon: "icon-search", children: [
            { id: "TP", text: "TP" },
            { id: "EP", text: "EP" },
            { id: "PM", text: "PM" }
        ]},
        { id: "TmaxData", text: "TmaxData", image: "./res/graph.png", children: [
            { id: "DB1", text: "DB1" },
            { id: "DB2", text: "DB2" },
            { id: "DB3", text: "DB3" }
        ]},
        { id: "TmaxGlobal", text: "TmaxGlobal", children: [
            { id: "USA", text: "USA" },
            { id: "Japan", text: "Japan"},
            { id: "CHN", text: "CHN" }
        ]}
    ]
},
{
    id: "Tmax_Group2", text: "Tmax group2", icon: "icon-folder", children: [
        { id: "TmaxSoft2", text: "TmaxSoft2", icon: "icon-search", children: [
            { id: "TP2", text: "TP2" },
            { id: "EP2", text: "EP2" },
            { id: "PM2", text: "PM2" }
        ]}
    ]
}];

var tree_option = {
    node: {
        checkable: true,
        editable: true,
        deletable: true,
        draggable: true
    },
    view : {
        expand: true
    }
};