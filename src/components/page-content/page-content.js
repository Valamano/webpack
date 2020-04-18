import './page-content.scss';

class PageContent {
    render(text = 'sssssss') {
        const content = document.createElement('p');
        content.textContent = text;
        content.classList.add('page-content');

        const bodyDomElement = document.querySelector('body');
        bodyDomElement.appendChild(content);
    }
}

export default PageContent;
