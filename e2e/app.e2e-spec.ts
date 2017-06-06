import { FixDublinPage } from './app.po';

describe('fix-dublin App', () => {
  let page: FixDublinPage;

  beforeEach(() => {
    page = new FixDublinPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
