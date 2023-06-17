<p align="center">
  <img width="1000px" src="https://raw.githubusercontent.com/tjtanjin/portfolio-2/master/public/screenshot.jpg" />
  <h1 align="center">Personal Portfolio 2</h1>
</p>

## Table of Contents
* [Introduction](#introduction)
* [Changes](#changes)
* [Setup](#setup)
* [Team](#team)
* [Contributing](#contributing)
* [Others](#others)

### Introduction
Personal portfolio 2 contains the code for my second and current portfolio website made in 2023. This portfolio is based off the [Three.js 3D Portfolio](https://github.com/ladunjexa/Threejs-3D-Portfolio) template. Several changes have been made from the original copy which I will highlight in the section below.

### Changes

Note that the original works are great in their own regards and that the following changes were made due to my personal preferences.

#### Landing Page
For the landing page, one very noticeable difference is that the Computer Canvas has been removed in favour of an [interactive stars](https://codepen.io/Thibka/pen/BRzgOM) background.

In addition, an animated rocket is also first presented to users when they visit the website. This decision was made because **Three.js** may take a while to render objects and I opted to buy time with a welcome animation instead of having a canvas loader.

#### About Page
The about page remains largely similar, though I have squeezed in space for a personal picture. I thought it would be nice to at least share a photo of myself on my portfolio website and found a pretty neat space to do so on the right side of this section.

I've also expanded the section slightly to briefly touch upon my education as well as provide a link to my resume.

#### Experience Page
For the experience page, I made the company logos larger and removed the alternating background colours. I also updated the term **Work Experience** to **Job Experiences** and changed the term **Work** to **Experiences** on the navigation bar.

In addition, I also added a `company_link` field so users can click on the company logo to visit the company website.

#### Project Page
On the [original repository](https://github.com/ladunjexa/Threejs-3D-Portfolio), the showcasing of projects was subsumed under the **Work** section. However, I broke it up into its own **Projects** section as I wished to share a little bit more and wanted the website to remain easily navigable.

I have also expanded the project section to include an `app_link` such that users will be redirected to the application when they click on the project card.

#### Articles Page
I removed the **Testimonials** section (also under **Work**) from the [original repository](https://github.com/ladunjexa/Threejs-3D-Portfolio) and opted to have an **Articles** section instead as I wanted to share my github gists.

Said articles can be clicked on and viewed directly on the website as it opens up a modal with the embedded github gists that I wrote. Note that it still opens up to the github gists website directly when viewed on mobile.

#### Contact Page
For the contact page, I squeezed in space for my email, linkedin and github so users can easily contact me on various platforms. 

In addition, I also added validation to the contact page to ensure that all fields are filled in prior to a submission. Should there be any empty fields, a neat little toast appears to inform the user of what is lacking.

#### Chatbot
To make things a little more interactive, I added a lightweight chatbot at the bottom right of the website. Said chatbot was obtained from [TIDIO](https://www.tidio.com/) and setup was surprisingly easy. I will not be covering the setup here but if you are interested, feel free to find out more from their website.

#### PC/Mobile Variations
While the PC is able to load the website with little lag, I have noticed that mobile devices (especially older ones) tend to struggle with **Three.js**. After some considerations, I made the following changes:

- Ball Canvas is replaced with PNG images on mobile devices
- Star Canvas is entirely removed on mobile devices
- Earth Canvas is replaced with a GIF on mobile devices

These "nerfs" on mobile devices do not significantly affect the looks of the website, but they do give a huge boost to performance on mobile devices so I think it's worth the tradeoff.

#### Others
Apart from small styling changes, the tech section also now comes with a tooltip. This makes it easier for people to identify the technologies used in case they are unfamiliar with any of the logos.

There are probably more minute changes I have made but not all come to mind/are not significant enough to bring up. Overall, I really like the template from the [original repository](https://github.com/ladunjexa/Threejs-3D-Portfolio) (many thanks to the original authors) and tried my best to adapt it to my preferences.

### Setup
For the initial setup, please refer to the original project's [README](https://github.com/ladunjexa/Threejs-3D-Portfolio#readme).

Should you wish to use the chatbot feature that I have added, then you will be required to create an account with [TIDIO](https://tidio.com/). I will not be covering the details of setting up the TIDIO chatbot as this is sufficiently covered by the resources on their website. However, note that once you have setup your bot, you will need to embed your own `<script>` for the bot within **App.jsx**. Other than that, the setup should be entirely the same.

### Team
* [Original Contributors](https://github.com/ladunjexa/Threejs-3D-Portfolio#wave-contributing)
* [Tan Jin](https://github.com/tjtanjin)

### Contributing
If you have code to contribute, open a pull request and describe clearly the changes and what they are intended to do (enhancement, bug fixes etc). Alternatively, you may simply raise bugs or suggestions by opening an issue.

**Note:** You may also wish to make a pull request to the [original repository](https://github.com/ladunjexa/Threejs-3D-Portfolio) if your changes are general enough to benefit everyone.

### Others
For any questions regarding this specific implementation of my portfolio, please drop an email to: cjtanjin@gmail.com. Otherwise, you may wish to raise your issue at the [original repository](https://github.com/ladunjexa/Threejs-3D-Portfolio).
