import { YuxiGlobalAngularTestPage } from './app.po';

describe('yuxi-global-angular-test App', () => {
  let page: YuxiGlobalAngularTestPage;

  beforeEach(() => {
    page = new YuxiGlobalAngularTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
