import {html, render} from 'https://unpkg.com/lit-html@latest?module';
import {getDistributors} from './enmossed-sources.js';

let source = getDistributors();

const distributorTemplate = (name) => html`
<dd>
${name}
</dd>
`;

const distributorListTemplate = (location, distributors) => html`
<dt>
${location}
</dt>
${distributors.map((distributor) => distributorTemplate(distributor))}
`;

const template = (location, distributors) => html`
<dl>
${Object.keys(source).filter((key) => source.hasOwnProperty(key)).map((location) => distributorListTemplate(location, source[location]))}
</dl>
`;

export default function infoList(templateElementSelector) {
    let node = document.querySelector(templateElementSelector);
    render(template(), node);
};
