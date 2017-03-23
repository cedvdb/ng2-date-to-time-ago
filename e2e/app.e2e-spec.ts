import { TimeAgoPipePage } from './app.po';

describe('time-ago-pipe App', () => {
  let page: TimeAgoPipePage;

  beforeEach(() => {
    page = new TimeAgoPipePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
