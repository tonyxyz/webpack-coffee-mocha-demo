import { expect } from 'chai'
import { JSDOM } from 'jsdom'

import ComponentFactory from './component_factory.coffee'

describe 'a component factory instance, ', =>
  factory = null

  beforeEach =>
    dom = new JSDOM('<!DOCTYPE html><body><div>hello</div></body>')
    factory = new ComponentFactory(dom.window.document)

  it 'manufactures perfect components.', =>
    expect(factory.component().innerHTML).to.equal('this is a manufactured component')
