import {html, render} from 'https://unpkg.com/lit-html@latest?module';

const items = [
    "releases",
    "separator",
    "upcoming",
    "home",
    "info",
    "separator",
    "contact"
];

const homeOptionTemplate = () => html`
<a class="home" href="index.html"><img height="100" width="100" src="enmossed_logo_transparent.png" alt="The enmossed label logo."></a>
`;

const activeOptionTemplate = (selected) => html`
<a class="active" href="${selected}.html">${selected}</a>
`;

const optionTemplate = (selected) => html`
<a href="${selected}.html">${selected}</a>
`;

const separatorTemplate = () => html`
&frasl;
`;

const optionItemTemplate = function (selected, isActive, isHome, isSeparator) {
    if (isSeparator) {
        return separatorTemplate();
    }
    if (isHome) {
        return homeOptionTemplate();
    }
    if (isActive) {
        return activeOptionTemplate(selected);
    }

    return optionTemplate(selected);
};

const listItemTemplate = (selected, isActive, isHome, isSeparator) => html`
<li>
${optionItemTemplate(selected, isActive, isHome, isSeparator)}
</li>
`;

const getOptionObject = (item, activeItem) => ({
    selected: item,
    isActive: item === activeItem,
    isHome: item === 'home',
    isSeparator: item === 'separator'

});

const template = (activeItem) => html`
<nav>
<ul>
${items.map(item => getOptionObject(item, activeItem)).map(itemObj => listItemTemplate(itemObj.selected, itemObj.isActive, itemObj.isHome, itemObj.isSeparator))}
</ul>
</nav>
<hr>
`;

export default function navTemplate(templateElementSelector, activeItem) {
    let node = document.querySelector(templateElementSelector);
    render(template(activeItem), node);
};
