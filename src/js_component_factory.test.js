
import { JSDOM } from 'jsdom';
import { expect } from 'chai';

import ComponentFactory from './component_factory.coffee';

describe('(JS test) a component factory instance, ', () => {
  let factory = null;

  beforeEach( () => {
    const dom = new JSDOM('<!DOCTYPE html><body><div>hello</div></body>');
    factory = new ComponentFactory(dom.window.document);
  });

  it('manufactures perfect components.', () => {
    expect(factory.component().innerHTML).to.equal('this is a manufactured component');
  });
});
