[![MIT License on GitHub](https://img.shields.io/github/license/seankelliher/us-presidents-3.0?style=flat-square)](/LICENSE.txt)
## US Presidents - 3.0

Interactive component about demographics of the 45 US Presidents.

## Project Screen Shots

* Starting view - birthplace, all presidents.
![screen shot of project](/screenshots/us-presidents-3.0-screenshot1.png?s=600)

* View with previous job, filtered for congress.
![screen shot of project](/screenshots/us-presidents-3.0-screenshot2.png?s=600)

* View with departure, filtered for not nominated. Also, Fillmore's "dates of service" are displayed. (Clicking "potus #" shows/hides "dates of service").
![screen shot of project](/screenshots/us-presidents-3.0-screenshot3.png?s=600)

## Installation and Setup Instructions

This is a static component. All you need is a web browser. However, component uses ES6 modules. Developing locally may require disabling your browser's local file restrictions.

## Reflection

My goal was to build a component that lets users compare all US Presidents by specific demographics such as birthplace, and then also filter these results by smaller groups, for example, only presidents born in the Southwest.

I wanted to create elements dynamically, but also avoid looping through a detailed array of 45 (or more) presidents and building numerous elements each time a user clicked something. To accomplish this, I chose a practical middle ground: I loop through the detailed "presidents" array and build elements only when users click a category such as birthplace. When users filter that category, I use the existing elements and show/hide them as needed.

While building, I discovered that one category/filter combination (birthplace and Rocky Mountain) produced no results. No presidents were born in the Rocky Mountain region. A blank result looked bad. I needed an "empty" message to display when needed so I created a function that counts the number of "president" divs with style.display === "none". If that number reaches 45, the "empty" message displays. Otherwise, it is hidden.

Lastly, there was the challenge of how to display two "nav" lists and the details of 45 presidents on smaller screens. I drew a number of "box models" placing titles and text in different positions until I discovered one that worked well.

## Acknowledgments

* Data about presidents from [US House of Representatives](https://history.house.gov/Institution/Presidents-Coinciding/Presidents-Coinciding/) and [Wikipedia](https://www.wikipedia.org).
* All photographs are public domian.
* Readme guidance from [Brenna Martenson](https://gist.github.com/martensonbj/6bf2ec2ed55f5be723415ea73c4557c4).
* JavaScript guidance from [JSLint](http://jslint.com).
* Design guidance from Google's [Material Design](https://material.io/design) and [Adobe Color](https://color.adobe.com/trends).
* Shields from [Shields](https://shields.io).