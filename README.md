# text-based-browser-ui
A simple UI meant to be hooked up to a texted based game. Inspirations come from MUD games such as Sindome and Achaea. I made this package to be used along side my other text-based-game packages, but I'm sure it can be hooked up to others pretty easily with a look over its API.

Any advice oh how to improve would be apperciated. Send me a message or leave an issue report, and I'll get back to you as soon as possible.

# API
# logInterface
printMessage(msg, msgConfig)
- A method that takes a string and an optional config object, and prints a message to the msgLog div.
- msgConfig is options:
  - msgElement, default is p(paragraph)
  - textColor, defaults to a transparent white
  - textBackground, default is transparent
  - fontSize, default is 0.95rem
  - fontWeight, default is 400
  - lineBreakHeight, the height of line breaks between messages. default is 0.5rem
  - lineBreakCount, the number of line breaks between messages. default is 1

printMulti(...msgs)(msgConfig, breakAfterEach = true)
- a method that prints multiple messages to the log
- this method returns another method that has two optional parameters. first method simply stores the msgs array, and the second calls printMessage for each message, and only prints one line break if breakAfterEach is set to false.
- only invoking the function once does nothing.

printBreak(count = config.lineBreakCount, height = config.lineBreakHeight)
- a method that prints a given number of line breaks at a specified height. Its called by printMsg
- the line breaks arent br elements, but are divs

clearMsgs()
- a method that clears all messages in the log

## Warnings
- Didn't do any unit tests for this project since unit tests and web api's dont mix out the box. Sorry
- I'm not sure how to get a packages dist folder over into the projects dist folder, so you might have to do it manually until i figure if its possible automatically