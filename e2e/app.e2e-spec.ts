import { OfflinetestPage } from './app.po';

describe('offlinetest App', () => {
  let page: OfflinetestPage;

  beforeEach(() => {
    page = new OfflinetestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
