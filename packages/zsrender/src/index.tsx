import { Component } from 'vue';

import RenderEngine from './RenderEngine/index.vue';

import { context } from './context';

const addComponent = (name: string, component: Component) => {
    context.componentsMap[name] = component;
}

const deleteComponent = (name: string) => {
    delete context.componentsMap[name];
}

const setFieldComponent = (component: Component) => {
    context.fieldComponent = component;
}

export {
    RenderEngine,
    addComponent,
    deleteComponent,
    setFieldComponent,
};