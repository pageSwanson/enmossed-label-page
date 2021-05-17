const source =
      {
          "distributors" : {
              "korea": [
                  { name: "Rope Editions", link: "https://enmossed.bandcamp.com" }
              ],
              "japan": [
                  { name: "Tobira Records", link: "https://enmossed.bandcamp.com" },
                  { name: "Art Into Life", link: "https://enmossed.bandcamp.com" }
              ],
              "russia": [
                  { name: "Stellage", link: "https://enmossed.bandcamp.com" }
              ],
              "uk": [
                  { name: "Industrial Coast", link: "https://enmossed.bandcamp.com" },
                  { name: "Boomkat", link: "https://enmossed.bandcamp.com" }
              ],
              "usa": [
                  { name: "Torn Light", link: "https://enmossed.bandcamp.com" },
                  { name: "Madriguera", link: "https://enmossed.bandcamp.com" },
                  { name: "Commend", link: "https://enmossed.bandcamp.com" },
                  { name: "All Day Records", link: "https://enmossed.bandcamp.com" }
              ],
              "digital": [
                  { name: "Bandcamp", link: "https://enmossed.bandcamp.com" },
                  { name: "YouTube (ad-free)", link: "https://enmossed.bandcamp.com" }
              ]
          },
          "series" : {
              "ENM (lp)": [
                  {
                      title: "Emily Berregaard \"Hallowed\" (ENM-01)",
                      description: ":: searching yielding further labyrinths; embracing less, yielding to our-selves, our-bodies, our-ouroboros ::",
                      embed : '<iframe style="border: 0; width: 290px; height: 486px;" src="https://bandcamp.com/EmbeddedPlayer/album=602863093/size=large/bgcol=333333/linkcol=ffffff/package=4047819444/tracklist=false/transparent=true/" seamless><a href="https://enmossed.bandcamp.com/album/hallowed">Hallowed by Emily Berregaard</a></iframe>'
                  },
                  {
                      title : "Lauren Tosswill \"my home in the year\" (ENM-02)",
                      description : ':: probing loops of soma-acoustic manipulation of the psyche; beyond the eye\'s eye to our depths ::',
                      embed : '<iframe style="border: 0; width: 290px; height: 486px;" src="https://bandcamp.com/EmbeddedPlayer/album=3631777261/size=large/bgcol=333333/linkcol=ffffff/package=1195189199/tracklist=false/transparent=true/" seamless><a href="https://enmossed.bandcamp.com/album/my-home-in-the-year">my home in the year by Lauren Tosswill</a></iframe>'
                  },
                  {
                      title : "Chaperone \"Northeastern Meditations\" (ENM-03)",
                      description : ':: hushed beauty, filtered through the crumbling industrial backdrop of North Philadelphia; dandelions, crabgrass, and lambs-quarters emerging from the detritus of abandoned warehouses ::',
                      embed : '<iframe style="border: 0; width: 290px; height: 486px;" src="https://bandcamp.com/EmbeddedPlayer/album=2686673876/size=large/bgcol=333333/linkcol=ffffff/package=2618891556/tracklist=false/transparent=true/" seamless><a href="https://enmossed.bandcamp.com/album/northeastern-meditations">Northeastern Meditations by Chaperone</a></iframe>'
                  }
              ],
              "ENMF (flexi)": [
                  {
                      title: "MARV - Con Moto (Edit) (ENMF-01)",
                      description: "",
                      embed: '<iframe width="290" height="290" src="https://www.youtube.com/embed/hSVWJGoidHM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
                  }
              ]
          },
          "upcoming" : [
              {
                  title: "Something upcoming",
                  description: ":: a description for the upcoming release ::",
                  date: "07/2021"
              },
              {
                  title: "Something upcoming",
                  description: ":: a description for the upcoming release ::",
                  date: "09/2021"
              },
              {
                  title: "Another upcoming",
                  description: ":: a description for the upcoming release ::",
                  date: "12/2021"
              },
          ]
      };

export function getSeries() {
    return source.series;
};

export function getUpcoming() {
    return source.upcoming;
};

export function getDistributors() {
    return source.distributors;
};
