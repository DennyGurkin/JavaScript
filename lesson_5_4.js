
let buttons = document.querySelectorAll('button');
buttons.forEach(function(button){
    button.addEventListener('click', function(event){
        handleClick(event);
    });
});

function handleClick(clickedButtonEvent){
    let cardNode = clickedButtonEvent.target.parentNode;

    let card = {
        wrap: cardNode,
        img: cardNode.querySelector('img'),
        productName: cardNode.querySelector('.productName'),
        button: cardNode.querySelector('button'),
    };

    let textOnButton = card.button.innerText;
    if (textOnButton === 'Подробнее'){
        showMoreText(card);
    }
    else if (textOnButton === 'Отмена') {
        hideMoreText(card);
    }
}

function hideMoreText(card){
    card.img.style.display = 'block';
    card.wrap.querySelector('.desc').remove();
    card.button.innerText = 'Подробнее'
}

function showMoreText(card){
    card.img.style.display = 'none';
    let text = 'Lorem ipsum dolor';
    card.productName.insertAdjacentHTML('afterend', `<div class="desc">${text}</div>`);
    card.button.innerText = 'Отмена';
}

