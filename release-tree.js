import {html, render} from 'https://unpkg.com/lit-html@latest?module';
import {unsafeHTML} from 'https://unpkg.com/lit-html@latest/directives/unsafe-html.js?module';
import {getSeries} from './enmossed-sources.js';

let source = getSeries();

const embeddedPlayerTemplate = (content) => html`
<dd>
${unsafeHTML(content)}
</dd>
`;

const descriptionTemplate = (description) => html`
<dd>
${description}
</dd>
`;

const releaseTemplate = (releaseObj) => html`
<li>
<details>
<summary>${releaseObj.Title}</summary>
<dl>
${descriptionTemplate(releaseObj.Description)}
${embeddedPlayerTemplate(releaseObj.Embed)}
</dl>
</details>
</li>
`;

const seriesTemplate = (title, series) => html`
<li>
<details>
<summary>${title}</summary>
<ul>
${series.map((release) => releaseTemplate(release))}
</ul>
</details>
</li>
`;

const template = () => html`
<ul>
${Object.keys(source).filter((label) => source.hasOwnProperty(label)).map((label) => seriesTemplate(label, source[label]))}
</ul>
`;

export default function releaseTree(templateElementSelector) {
    let node = document.querySelector(templateElementSelector);
    render(template(), node);
};
