import {html, render} from 'https://unpkg.com/lit-html@latest?module';
import {unsafeHTML} from 'https://unpkg.com/lit-html@latest/directives/unsafe-html.js?module';

const source =
      {
          "ENM (lp)": [
              {
                  "Title" : "Emily Berregaard \"Hallowed\" (ENM-01)",
                  "Description" : ":: searching yielding further labyrinths; embracing less, yielding to our-selves, our-bodies, our-ouroboros ::",
                  "Embed" : '<iframe style="border: 0; width: 350px; height: 537px;" src="https://bandcamp.com/EmbeddedPlayer/album=602863093/size=large/bgcol=333333/linkcol=ffffff/package=4047819444/tracklist=false/transparent=true/" seamless><a href="https://enmossed.bandcamp.com/album/hallowed">Hallowed by Emily Berregaard</a></iframe>'
              },
              {
                  "Title" : "Lauren Tosswill \"my home in the year\" (ENM-02)",
                  "Description" : ':: probing loops of soma-acoustic manipulation of the psyche; beyond the eye\'s eye to our depths ::',
                  "Embed" : '<iframe style="border: 0; width: 350px; height: 537px;" src="https://bandcamp.com/EmbeddedPlayer/album=3631777261/size=large/bgcol=333333/linkcol=ffffff/package=1195189199/tracklist=false/transparent=true/" seamless><a href="https://enmossed.bandcamp.com/album/my-home-in-the-year">my home in the year by Lauren Tosswill</a></iframe>'
              },
              {
                  "Title" : "Chaperone \"Northeastern Meditations\" (ENM-03)",
                  "Description" : ':: hushed beauty, filtered through the crumbling industrial backdrop of North Philadelphia; dandelions, crabgrass, and lambs-quarters emerging from the detritus of abandoned warehouses ::',
                  "Embed" : '<iframe style="border: 0; width: 350px; height: 537px;" src="https://bandcamp.com/EmbeddedPlayer/album=2686673876/size=large/bgcol=333333/linkcol=ffffff/package=2618891556/tracklist=false/transparent=true/" seamless><a href="https://enmossed.bandcamp.com/album/northeastern-meditations">Northeastern Meditations by Chaperone</a></iframe>'
              }
          ]
      };

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
<li>${releaseObj.Title}
<dl>
${descriptionTemplate(releaseObj.Description)}
${embeddedPlayerTemplate(releaseObj.Embed)}
</dl>
</li>
`;

const seriesTemplate = (title, series) => html`
<li>${title}
<ul>
${series.map((release) => releaseTemplate(release))}
</ul>
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
