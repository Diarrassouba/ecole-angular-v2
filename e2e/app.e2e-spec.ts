import { AngularRoutageV2Page } from './app.po';

describe('angular-routage-v2 App', () => {
  let page: AngularRoutageV2Page;

  beforeEach(() => {
    page = new AngularRoutageV2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
