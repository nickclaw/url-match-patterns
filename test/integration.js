import match from '../src';
import chromeExamples from './fixtures/chrome-examples';
import firefoxExamples from './fixtures/firefox-examples';

describe('integration tests', () => {

  describe('from chromium examples', () => {
    chromeExamples.invalidPatterns.forEach(item =>
      it(`should reject the pattern "${item.pattern}"`, () => {
        expect(() => match(item.pattern)).to.throw(item.reason);
      })
    );

    chromeExamples.patterns.forEach(item =>
      describe(`for the pattern "${item.pattern}"`, () => {
        item.accept.forEach(url =>
          it(`it should accept ${url}`, () => {
            expect(match(item.pattern, url)).to.be.true;
          })
        );

        item.reject.forEach(url =>
          it(`it should reject ${url}`, () => {
            expect(match(item.pattern, url)).to.be.false;
          })
        );
      })
    );
  });

  describe('from mozilla examples', () => {
    firefoxExamples.invalidPatterns.forEach(item =>
      it(`should reject the pattern "${item.pattern}"`, () => {
        expect(() => match(item.pattern)).to.throw(item.reason);
      })
    );

    firefoxExamples.patterns.forEach(item =>
      describe(`for the pattern "${item.pattern}"`, () => {
        item.accept.forEach(url =>
          it(`it should accept ${url}`, () => {
            expect(match(item.pattern, url)).to.be.true;
          })
        );

        item.reject.forEach(url =>
          it(`it should reject ${url}`, () => {
            expect(match(item.pattern, url)).to.be.false;
          })
        );
      })
    );
  });
});
