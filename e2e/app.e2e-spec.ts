import { NgError404Page } from './app.po';

describe('ng-error404 App', () => {
  let page: NgError404Page;

  beforeEach(() => {
    page = new NgError404Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
