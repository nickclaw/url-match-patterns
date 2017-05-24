# url-match-patterns

A node module for testing URLs against match patterns, as defined by
[Google](https://developer.chrome.com/extensions/match_patterns) and
[Mozilla](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Match_patterns).

### Example

```js
import match from 'url-match-patterns';

// check that a url matches
match('*://*/', 'https://www.example.com'); // true

// or build a reusable function
const matches = match('*://*/');
matches('https://www.example.com'); // true

```

### API

##### `match(pattern, url) -> Boolean`
Compares a pattern against a URL. Returns `true` if the pattern matches
or `false` if it doesn't. Will throw an `AssertionError` if your pattern
is invalid.

##### `match(pattern) -> Function`
Create a reusable match function for a pattern. This will be faster since
it only has to initialize once. Will throw an `AssertionError` if your pattern
is invalid.
