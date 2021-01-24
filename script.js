const container = document.querySelector('#container');

const content = document.createElement('div');
    content.classList.add('content');
    content.textContent = 'This is the glorious text-content!';

const redPara = document.createElement('p');
    redPara.classList.add('redPara');
    redPara.textContent = "Hey I'm red!"; 
    redPara.style.color = 'red'

container.appendChild(content);
container.appendChild(redPara);