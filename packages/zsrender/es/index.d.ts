import { Component } from 'vue';
import { default as RenderEngine } from './RenderEngine/index.vue';

declare const addComponent: (name: string, component: Component) => void;
declare const deleteComponent: (name: string) => void;
declare const setFieldComponent: (component: Component) => void;
export { RenderEngine, addComponent, deleteComponent, setFieldComponent, };
export * from './RenderEngine/interface';
