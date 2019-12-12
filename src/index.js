// import { LibsLoader } from './libs-loader'
console.log('index.js start');

// const v5 = new LibsLoader('v5');
// console.log(`${v5.getVersion()} loaded`);

// v5.makeButton();
const topjs = 'v5';

makeButton('main');

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
            document.getElementById('main').innerHTML = data;
            TopUI.Render.renderDom(document.querySelector('div#layoutEditor'), function() { console.log('render done')});
        })
        .fail(function(xhr, status, errorThrown) {
            alert(status);
        });
    }

    document.getElementById('header').appendChild(button);
}