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
<div>
<label for="toggle-${releaseObj.title}">${releaseObj.title}</label>
<input class="child" type="checkbox" id="toggle-${releaseObj.title}">
<div>
${embeddedPlayerTemplate(releaseObj.embed)}
${descriptionTemplate(releaseObj.description)}
</div>
</div>
`;

const seriesTemplate = (title, series) => html`
<div>
<label for="toggle-${title}">${title}</label>
<input class="parent" type="checkbox" id="toggle-${title}">
<div>
${series.map((release) => releaseTemplate(release))}
</div>
</div>
`;

const template = () => html`
${Object.keys(source).filter((label) => source.hasOwnProperty(label)).map((label) => seriesTemplate(label, source[label]))}
`;

export function ReleaseTree(templateElementSelector) {
    let node = document.querySelector(templateElementSelector);
    render(template(), node);
};

const toggleLookup = {};

const toggleFromLookup = (childToggles) => {
    childToggles.forEach((foundToggleId) => {
        let toggle = document.getElementById(foundToggleId);
        toggle.checked = false;
    });
};

const getReleaseToggle = (parentId, child) => {
    let releaseToggle = Array.from(child.children).filter((element) => {
        return element.classList.contains("child");
    });

    if (releaseToggle && releaseToggle.length > 0) {
        releaseToggle = releaseToggle[0];

        toggleLookup[parentId].push(releaseToggle.id);

        return releaseToggle;
    }

    return [];
};

const onSeriesToggle = (parent) => {
    if (parent.checked) {
        return;
    }

    if (toggleLookup[parent.id]) {
        toggleFromLookup(toggleLookup[parent.id]);
        return;
    }

    toggleLookup[parent.id] = [];

    Array.from(parent.nextElementSibling.children).map((child) => {
        return getReleaseToggle(parent.id, child);
    }).forEach(function (toggle) {
        toggle.checked = false;
    });
};

export function CollapseChildren() {
    [...document.querySelectorAll('.parent')].forEach((parent) => {
        parent.addEventListener('change', () => onSeriesToggle(parent));
    });
};
