import { CreateAngularAppPage } from './app.po';

describe('create-angular-app App', () => {
  let page: CreateAngularAppPage;

  beforeEach(() => {
    page = new CreateAngularAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
