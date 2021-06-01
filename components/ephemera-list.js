import {html, render} from 'https://unpkg.com/lit-html@latest?module';
import {unsafeHTML} from 'https://unpkg.com/lit-html@latest/directives/unsafe-html.js?module';
import {getEphemera} from './enmossed-sources.js';

let source = getEphemera();

const imageTemplate = (content) => html`
<img height="260" width="290" src="${content}">
`;

const descriptionTemplate = (description) => html`
<p>${description}</p>
`;

const ephemeraTemplate = (title, ephemeraObj) => html`
<div>
<label for="toggle-${title}">${title}</label>
<input id="toggle-${title}" type="checkbox"></input>
<div>
${imageTemplate(ephemeraObj.src)}
${descriptionTemplate(ephemeraObj.description)}
</div>
</div>
`;

const template = () => html`
${Object.keys(source).filter((label) => source.hasOwnProperty(label)).map((label) => ephemeraTemplate(label, source[label]))}
`;

export default function ephemeraListTemplate(templateElementSelector) {
    let node = document.querySelector(templateElementSelector);
    render(template(), node);
};
