import {html, render} from 'https://unpkg.com/lit-html@latest?module';
import {unsafeHTML} from 'https://unpkg.com/lit-html@latest/directives/unsafe-html.js?module';
import {getSeries} from './enmossed-sources.js';

let source = getSeries();

const embeddedPlayerTemplate = (content) => html`
${unsafeHTML(content)}
`;

const descriptionTemplate = (description) => html`
<p>
${description}
</p>
`;

const releaseTemplate = (releaseObj) => html`
<details>
<summary>${releaseObj.title}</summary>
${embeddedPlayerTemplate(releaseObj.embed)}
${descriptionTemplate(releaseObj.description)}
</details>
`;

const seriesTemplate = (title, series) => html`
<details>
<summary>${title}</summary>
${series.map((release) => releaseTemplate(release))}
</details>
`;

const template = () => html`
${Object.keys(source).filter((label) => source.hasOwnProperty(label)).map((label) => seriesTemplate(label, source[label]))}
`;

export default function releaseTree(templateElementSelector) {
    let node = document.querySelector(templateElementSelector);
    render(template(), node);
};
