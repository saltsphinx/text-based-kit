05 26 23
this package should focus on both the html and css, and also handling of JS. JS being things like printing messages to the screen. This package should be pluggable if that makes sense, meaning that it can be imported in any project and just needs to be configured to work properly. It should rely on events, say a 'printToLog' message that'll trigger with text and a listener in this package being able to pick it up and create an element with the text. Some cool things like maybe the player dying or an explosion or critical hit could also cause SFX. I dont know, well have to see.

With the above said, this package shouldnt have its own pub/sub or any event based system of its own. im creating it for the simple rpg game i have in mind, but id also like to be able to use it for other projects if i decide to make any more. I think itll be as simple as just making the methods and exposing them as an API, and allowing any pub/sub system figure out the rest. well see. Im also interested in continuing my jQuery clone, so ill use jQuery in this project to get a better understanding of it. besides that, the project is fairly vanilla

never mind, i forgot how much of a headache it was tickering around with jQuery objects and reading though its docs verse just using vanilla dom manipulation

one thing im concerned about is when i install into into another package, what would be a good way of getting the html and css into the new projects dist folder?

A function that takes a string and an options object, and creates elements based on those and puts them inside the message log. options include font size, weight, color and the number empty elements after

A function that takes an integer and a number of creates empty elements

A function that clears the message log

I think itd be a good idea to have a config file that returns an object with default values for things.