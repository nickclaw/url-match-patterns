import match from '../src';

describe('unit tests', () => {

  it('should compare a pattern to a url', () => {
    const result = match('<all_urls>', 'https://example.com');
    expect(result).to.equal.true;
  });

  it('should return a matching function if no url is provided', () => {
    const result = match('<all_urls>');
    expect(result).to.be.instanceOf(Function);
    expect(result('https://example.com')).to.equal.true;
  });
});
