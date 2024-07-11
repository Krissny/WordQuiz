# Vocabulary Revision App

## About

This Vocabulary Revision App is a simple, interactive tool designed to help users revise and quiz themselves on the most commonly asked vocabulary words. Built with HTML, CSS, and JavaScript, it features a user-friendly interface that allows users to reveal meanings of words and move on to the next word with ease.

## Live Site

Experience the Vocabulary Revision App live [here](https://your-live-site-url.com).

## Usage

- Click on the **Reveal Meaning** button to see the meaning of the current word.
- Use the **Next Word** button to proceed to the next vocabulary word.
- Toggle between light and dark mode using the **Light** button at the top left corner of the page.

## Word List

The word list is stored in a separate JavaScript file (`words.js`) in an array of objects format, where each object contains a `word` and its corresponding `meaning`. Here's an example structure:

```javascript
// words.js
const wordList = [
  { word: "Abate", meaning: "To lessen in intensity or degree" },
  { word: "Aberrant", meaning: "Deviating from the norm" },
  // Add more words here
];
```

## Contributing

Contributions are welcome! If you have suggestions for improving the app or extending the word list, feel free to create a pull request or open an issue.

## License

This project is open-sourced under the MIT license.
