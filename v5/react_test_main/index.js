console.log('index.js start');

let main = document.createElement('button');
main.classList.add('gnb-button');
main.classList.add('flex-item');
main.innerText = 'MAIN';

main.onclick = () => {
    $.ajax({
        url: 'main/main.html',
        type: 'GET',
    })
    .done(function(data) {
        document.getElementById('main').innerHTML = data;
        TopUI.Render.renderDom(document.querySelector('div#layoutEditor'), function() { console.log('render done')});
    })
    .fail(function(xhr, status, errorThrown) {
        alert('status: ', status);
    });
}

document.getElementById('header').appendChild(main);


