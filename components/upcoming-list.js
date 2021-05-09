import {html, render} from 'https://unpkg.com/lit-html@latest?module';
import {getUpcoming} from './enmossed-sources.js';

let source = getUpcoming();

const releaseTemplate = (release) => html`
<dt>
${release.title} - ${release.date}
</dt>
<dd>
<p>${release.description}</p>
</dd>
`;

const template = (location, distributors) => html`
<dl>
${source.map((release) => releaseTemplate(release))}
</dl>
`;

export default function upcomingList(templateElementSelector) {
    let node = document.querySelector(templateElementSelector);
    render(template(), node);
};
