// examples taken from https://developer.chrome.com/extensions/match_patterns

exports.invalidPatterns = [

];

exports.patterns = [
  {
    pattern: 'http://*/*',
    accept: [
      'http://www.google.com/',
      'http://example.org/foo/bar.html',
    ],
    reject: [],
  },
  {
    pattern: 'http://*/foo*',
    accept: [
      'http://example.com/foo/bar.html',
      'http://www.google.com/foo',
    ],
    reject: [],
  },
  {
    pattern: 'https://*.google.com/foo*bar',
    accept: [
      // the example here was wrong
      // 'http://www.google.com/foo/baz/bar',
      // 'http://docs.google.com/foobar',
      'https://www.google.com/foo/baz/bar',
      'https://docs.google.com/foobar',
    ],
    reject: [],
  },
  {
    pattern: 'http://example.org/foo/bar.html',
    accept: [
      'http://example.org/foo/bar.html',
    ],
    reject: [],
  },
  {
    pattern: 'file:///foo*',
    accept: [
      'file:///foo/bar.html',
      'file:///foo',
    ],
    reject: [],
  },
  {
    pattern: 'http://127.0.0.1/*',
    accept: [
      'http://127.0.0.1/',
      'http://127.0.0.1/foo/bar.html',
    ],
    reject: [],
  },
  {
    pattern: '*://mail.google.com/*',
    accept: [
      'http://mail.google.com/foo/baz/bar',
      'https://mail.google.com/foobar',
    ],
    reject: [],
  },
  {
    pattern: '<all_urls>',
    accept: [
      'http://example.org/foo/bar.html',
      'file:///bar/baz.html',
    ],
    reject: [],
  },
];
