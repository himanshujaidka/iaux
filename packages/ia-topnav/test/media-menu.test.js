import { html, fixture, expect } from '@open-wc/testing';

import '../src/media-menu';

const component = html`<media-menu></media-menu>`;

describe('<media-menu>', () => {
  it('sets default properties', async () => {
    const mediaMenu = await fixture(component);

    expect(mediaMenu.mediaMenuAnimate).to.be.false;
    expect(mediaMenu.mediaMenuOpen).to.be.false;
    expect(mediaMenu.selectedMenuOption).to.equal('');
  });

  it('renders menu icon as selected when selectedMenuOption matches', async () => {
    const mediaMenu = await fixture(component);
    const mediaType = 'texts';

    mediaMenu.selectedMenuOption = mediaType;
    await mediaMenu.updateComplete;

    const textsButton = mediaMenu
      .shadowRoot
      .querySelector(`[mediatype=${mediaType}`)
      .shadowRoot
      .querySelector('.selected');

    expect(textsButton).to.not.be.null;
  });

  it('renders with closed class if done animating', async () => {
    const mediaMenu = await fixture(component);

    mediaMenu.mediaMenuAnimate = true;
    await mediaMenu.updateComplete;

    expect(mediaMenu.shadowRoot.querySelector('nav').classList.contains('closed')).to.be.true;
  });
});
