import { Component } from 'vue';

import RenderEngine from './RenderEngine/index.vue';

import { components } from './components';

const addComponent = (name: string, component: Component) => {
    components.componentsMap[name] = component;
}

const deleteComponent = (name: string) => {
    delete components.componentsMap[name];
}

const setFieldComponent = (component: Component) => {
    components.fieldComponent = component;
}

export {
    RenderEngine,
    addComponent,
    deleteComponent,
    setFieldComponent,
};

export * from './RenderEngine/interface';