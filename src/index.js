console.log('index.js start');
const projectList = [
    'main', 'test', 'page'
]
const name = 'intro';

$.ajax({
    url: 'index-body.html',
    type: 'GET',
}).done(function(data) {
    $('body').append(data);
    printInformation(topjs, name);
    makeButtons(name);
})

function makeButtons() {
    projectList.forEach(function(name) {
        makeButton(name);
    })
}

function makeButton(name) {
    let button = document.createElement('button');
    button.classList.add('gnb-button');
    button.classList.add('flex-item');
    button.innerText = name;

    button.onclick = () => {
        $.ajax({
            url: `${topjs}/${name}/data.html`,
            type: 'GET',
        })
        .done(function(data) {
            printInformation(topjs, name);
            document.getElementById('main').innerHTML = data;
            TopUI.Render.renderDom(document.querySelector('div#layoutEditor'), function() { console.log('render done')});
        })
        .fail(function(xhr, status, errorThrown) {
            alert(status);
        });
    }

    document.getElementById('header').appendChild(button);
}

function printInformation(topjs, name) {
    document.getElementById('version').innerText = topjs;
    document.getElementById('name').innerText = name;
}