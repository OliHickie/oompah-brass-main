# Website for a band
## Oompah Brass

### Project Aims:

Oompah Brass approached me needing a new website. They are a 5-piece brass band specialising in rock and pop covers. They perform as both an oompah band (wearing lederhosen for German themed events), and as a festival and wedding band (wearing pink and black). 

#### Client's requirements:

* Clear brand image - classy but not classical, fun but also professional
* Showcase the bands previous gigs and collaborations with famous comedians and bands
* A place for fans to access media
* Links to social media and download store
* A diary that can be updated via google calendar
* Website must stand out amongst competition


#### Target audience/User stories:

* Clients - oktoberfest party bookers/agents, people planning parties or weddings. These users need to see a clear and professional image, access contact information quickly, and view photographs.

* Fans - typically aged between 25-65 based in the UK. These users want to view the diary to see when the band is performing, hear tracks and watch videos, find links to the download store, read about the band.

* Schools - looking for infomation on education projects. These users might go straight to the education page in order to see what projects the band has done, and which schools they have been to.


### UX

I wanted a clear layout, without too much text. I wanted it to be easy to listen to tracks, watch clips, and access contact info.
Initially I wanted the background image covering the page and in a fixed position. However, on mobile screens the fixed property did not work and offered a poor UX as the image could not be properly seen. I then came up with a large heading/jumbotron with background image at small and medium screen sizes, and a full-length fixed background for desktops.


### Navigation

Using a mobile-first approach I created a fixed nav bar with clear bar icon, so that navigation can be used throughout the length of a page. I also included "back to the top" buttons for intuitive navigation, as well as social-media links on the footer of every page.
On screens over 992px, the navigation and social-media links move to either side of the screen, and remain in a fixed position.


### Technologies Used

I decided to use [bootstrap 4](https://getbootstrap.com) to provide a simple structure across all media widths, and to keep intuitive navigation, especially on small screens and mobiles.
**Git** and [Github](https://github.com) were used for version control.
I used the following resources for the dynamic/media elements:

* [Feedwind](https://feed.mikle.com) - used to create the diary, which is updated via the band's google calendar
* [Youtube](https://youtube.com) - I embedded Youtube videos via the youtube app to avoid any browser compatibility issues
* [Soundcloud](https://soundcloud.com) - The band had a playlist on soundcloud showcasing their track so I embedded a soundcloud player


### Deployment

The site was initially deployed on [GitHub Pages](https://pages.github.com/) without a custom domain so that it could be sent to the client for approval before taking over their existing domain.

Once approved for deployment, I used Github pages with the band's domain name, together with [Cloudflare](https://cloudflare.com) where I adjusted the A and CNAME records. 
I then updated the name server information on the band's domain name provider, [GoDaddy](https://uk.godaddy.com/). 

I set up Google Site Verification in order to keep track of the site's performance using [Google Webmaster tools](https://www.google.com/webmasters/).

The site is live at www.oompahbrass.com


### Testing

* I carried out functionality tests throughout the development process. 
* I used **Chrome Developer Tools** to test site for responsiveness across different devices. 
* All links were tested to make sure they were working and that they were opening in a new window.
* All media/carousel/soundcloud elements were checked for functionality. 
* I tested the website on various devices such as iPhone, Android phone and iPad.

#### Fixes

* During final tests I found an issue with the social media links on larger screen sizes. 
They were not able to be clicked due to the main nav bar taking up too much space. 
I was able to fix this using the max-width property on the nav items.
* I found an issue with the main navigation alignment in large screen sizes. The alignment needed to be changed to flex-start.

### Acknowledgements

I used the following sites for inspiration in this project:

* https://olddirtybrasstards.co.uk/
* https://www.squarespace.com/templates/music




