# Take Assessment by JW Player


![JW Player design](/src/styles/assets/design.png)

## Goal
Spin up a simple and scalable React project that renders a single web page. It should match the design of the provided Photoshop file and populate all of the content dynamically from the provided JSON feed. 
### Estimated time for completion:
3 Days

## Project Installation
Fork Clone Repo

`$ git clone https://github.com/susanahan/jw-takehome.git`

Install all dependencies:

`$ npm install | yarn install`

You may run the project by typing the following in the terminal:

`$ npm start | yarn start`


##### File structure:  for styling I used SASS 
```
jw-takehome/
  README.md
  package.json
  yarn.lock
 .gitignore
  public/
    index.html
    favicon.ico

  src/
    App.js
    index.js
    data.json
    registerServiceWorker.js

      components/
        Home/
        Button.jsx  
        Features.jsx 
        Header.jsx  
        Items.jsx   
        Section.jsx

        Nav/
        Footer.jsx  
        NavBar.jsx
        
      styles/ >all styling goes here
         assets/
         css/
         scss/
```

## Instructions
*	Use React to render the front end 
*	 Use Less or Sass for your styles 
*	Use a build tool/module bundler of your choice to compile & minify your JS & CSS 
*	Populate the page content from the provided JSON (no hard-coding the data) 
* Create reusable components to render your data into UI elements. Get creative in how you choose to architect & render the components — there’s no right or wrong solution 
*	Make the page responsive for viewing on mobile, tablet and desktop displays 
*	Host your code on Github and include a README.md with a description of your project and instructions for how to build it locally 
#### Notes
*	The design shows lorem ipsum for the text, but the JSON contains actual copy that would appear on a real site. It’s your job to examine the data and determine where these text components belongs in the hierarchy of the page 
*	 Any extra images/icons that you don’t see in the JSON will be included for you in an assets folder

##### Bonus
*	Add your choice of CSS animations to make the page more slick and interactive
*	Add your choice of build tasks to optimize your app as you see fit
*	Target the latest versions of Chrome and Firefox for cross-browser compatibility. Support for Edge, IE11, and Safari is a plus

###### Thoughts
I really enjoyed making this website. It was fun trying to figure out the best way to create the layout. :)
