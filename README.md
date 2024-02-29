# CopyToClipboard

## Aim
The aim of this project is to create a basic JavaScript function that enables copying text to the clipboard.

## Description
This project provides a simple solution to copy text to the clipboard using JavaScript. It includes a basic HTML structure with a text input field and a button. When the button is clicked, the text from the input field is copied to the clipboard.

## Features
- Copy text to clipboard with a single click
- Easy to integrate into existing projects
- No external dependencies

## Usage
1. Include the `copyToClipboard.js` file in your project.
2. Ensure you have an HTML element containing the text you want to copy (e.g., an input field or a paragraph).
3. Add an event listener to the element triggering the copy action (e.g., a button).
4. Call the `copyToClipboard()` function inside the event listener, passing the text you want to copy as a parameter.

Example:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Copy To Clipboard</title>
    <script src="copyToClipboard.js" defer></script>
</head>
<body>
    <input type="text" id="textToCopy" value="Text to copy">
    <button id="copyButton">Copy Text</button>

    <script>
        document.getElementById('copyButton').addEventListener('click', function() {
            var textToCopy = document.getElementById('textToCopy').value;
            copyToClipboard(textToCopy);
            alert('Text copied to clipboard: ' + textToCopy);
        });
    </script>
</body>
</html>
```



```JavaScript
You would need to create a `copyToClipboard.js` file containing the JavaScript function `copyToClipboard()` for this README to be complete.
```
