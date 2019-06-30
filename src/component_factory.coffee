
export default class ComponentFactory
  constructor: (@document = document) ->

  component: () ->
    el = @document.createElement('div')
    el.innerHTML = 'this is a manufactured component'
    el
