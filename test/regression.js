import match from '../src';

describe('regresssion tests', () => {

  describe('path glob escaping', () => {
    it('should properly escape "?"', () => {
      const result = match('*://*/fo?o', 'http://example.com/fo');
      expect(result).to.equal(false);
    });

    it('should properly escape "."', () => {
      const result = match('*://*/f.o', 'http://example.com/foo');
      expect(result).to.equal(false);
    });

    it('should properly escape "+"', () => {
      const result = match('*://*/fo+', 'http://example.com/foo');
      expect(result).to.equal(false);
    });

    it('should properly escape "^"', () => {
      const result = match('*://*/fo^', 'http://example.com/fo^');
      expect(result).to.equal(true);
    });

    it('should properly escape "$"', () => {
      const result = match('*://*/fo$', 'http://example.com/fo$');
      expect(result).to.equal(true);
    });

    it('should properly escape "{" and "}"', () => {
      const result = match('*://*/fo{1,2}', 'http://example.com/foo');
      expect(result).to.equal(false);
    });

    it('should properly escape "("', () => {
      const result = match('*://*/fo(', 'http://example.com/fo(');
      expect(result).to.equal(true);
    });

    it('should properly escape ")"', () => {
      const result = match('*://*/fo)', 'http://example.com/fo)');
      expect(result).to.equal(true);
    });

    it('should properly escape "|"', () => {
      const result = match('*://*/fo|a)', 'http://example.com/fo|a)');
      expect(result).to.equal(true);
    });

    it('should properly escape "[" and "]"', () => {
      const result = match('*://*/[fo])', 'http://example.com/[fo])');
      expect(result).to.equal(true);
    });

    it.skip('should properly escape "\\"', () => {
      const result = match('*://*/\.', 'http://example.com/\.');
      expect(result).to.equal(true);
    });
  });
});
