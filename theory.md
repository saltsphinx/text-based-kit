05 27 23
im not quite at being able to make a game, but im pretty close. now all i have to do is combine all of the components, and make one more additional one, and then ill be ready. that doesnt  mean once this package is done, ill be able to jump right into it though. itll probably need some extensions to these packages

one of the missing components is an input handler. the game module inside of the game engine can handle scenes and call commands, but theres no way of getting the input from the UI's textarea to the module. once thats and its tests are done, i can move onto hooking everything up using the pub/sub package. i dont know how to write intergration tests, so itll only be unit tests for the input handler. its fairly simple, make sure the string isnt empty, i dont know if there could be weird things the value property of textareas can do like include escape characters, ill have to look it up. check that its empty and split the command part from the other words. put those words into an array, and return the command and array in an object. thats one to two tests worthy if textarea doesnt present any whacky problems.

move inputerHandler, what i renamed to be parser since thats what it actually is, to text-based-game-engine

the parser is done and the inputerHandler will be the publisher, connecting the Game module and textarea together. I think ill need a game loop as well, and also some way of manipulating the dom, so for things like clearing the text area.

graph of things that need to be connected with publishers, i think theyre all one way relationships

textarea > inputhandler
logInterface > inputHandler ? im going to have to make another method or module that deals with outputs from the commands. not sure how thatll work out

when submitting textarea contents, call event. pass contents to parser, who returns the command and array of words. pass command and array properties to callCommand. there needs to be some central module that others link to. the script that deals with textarea and the inputhandler should be seperate. I guess this is where the idea of topics come from.

Topics module that has a publishers object and also properties pointing towards main ones that should be initialize on load time. One called messenger, whos main function is just a function that returns its parameters. One of its subscribers will be the logInterface, and there could also be things like logHistory that can load in the old load after reloading the game.