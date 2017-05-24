// from https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Match_patterns

exports.invalidPatterns = [
  {
    pattern: 'resource://path/',
    reason: /Invalid/,
  },
  {
    pattern: 'https://mozilla.org',
    reason: /Invalid/,
  },
  {
    pattern: 'https://mozilla.*.org/',
    reason: /Invalid/,
  },
  {
    pattern: 'https://*zilla.org/',
    reason: /Invalid/,
  },
  {
    pattern: 'http*://mozilla.org/',
    reason: /Invalid/,
  },
  {
    pattern: 'file://*',
    reason: /Invalid/,
  },
];

exports.patterns = [
  {
    pattern: '<all_urls>',
    accept: [
      'http://example.org/',
      'ftp://files.somewhere.org/',
      'https://a.org/some/path/',
    ],
    reject: [
      'resource://a/b/c/',
    ],
  },
  {
    pattern: '*://*.mozilla.org/*',
    accept: [
      'http://mozilla.org/',
      'https://mozilla.org/',
      'http://a.mozilla.org/',
      'http://a.b.mozilla.org/',
      'https://b.mozilla.org/path/',
    ],
    reject: [
      'ftp://mozilla.org/',
      'http://mozilla.com/',
      'http://firefox.org/',
    ],
  },
  {
    pattern: '*://mozilla.org/',
    accept: [
      'http://mozilla.org/',
      'https://mozilla.org/',
    ],
    reject: [
      'ftp://mozilla.org/',
      'http://a.mozilla.org/',
      'http://mozilla.org/a',
    ],
  },
  {
    pattern: 'ftp://mozilla.org/',
    accept: [
      'ftp://mozilla.org',
    ],
    reject: [
      'http://mozilla.org/',
      'ftp://sub.mozilla.org/',
      'ftp://mozilla.org/path',
    ],
  },
  {
    pattern: 'https://*/path',
    accept: [
      'https://mozilla.org/path',
      'https://a.mozilla.org/path',
      'https://something.com/path',
    ],
    reject: [
      'http://mozilla.org/path',
      'https://mozilla.org/path/',
      'https://mozilla.org/a',
      'https://mozilla.org/',
    ],
  },
  {
    pattern: 'https://*/path/',
    accept: [
      'https://mozilla.org/path/',
      'https://a.mozilla.org/path/',
      'https://something.com/path/',
    ],
    reject: [
      'http://mozilla.org/path/',
      'https://mozilla.org/path',
      'https://mozilla.org/a',
      'https://mozilla.org/',
    ],
  },
  {
    pattern: 'https://mozilla.org/*',
    accept: [
      'https://mozilla.org/',
      'https://mozilla.org/path',
      'https://mozilla.org/another',
      'https://mozilla.org/path/to/doc',
    ],
    reject: [
      'http://mozilla.org/path',
      'https://mozilla.com/path',
    ],
  },
  {
    pattern: 'https://mozilla.org/a/b/c/',
    accept: [
      'https://mozilla.org/a/b/c/',
    ],
    reject: [

    ],
  },
  {
    pattern: 'https://mozilla.org/*/b/*/',
    accept: [
      'https://mozilla.org/a/b/c/',
      'https://mozilla.org/d/b/f/',
      'https://mozilla.org/a/b/c/d/',
    ],
    reject: [
      'https://mozilla.org/b/*/',
      'https://mozilla.org/a/b/',
    ],
  },
  {
    pattern: 'file:///blah/*',
    accept: [
      'file:///blah/',
      'file:///blah/bleh',
    ],
    reject: [
      'file:///bleh/',
    ],
  }
];
