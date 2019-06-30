import ComponentFactory from './component_factory.coffee'

const factory = new ComponentFactory();
document.body.appendChild(factory.component());
