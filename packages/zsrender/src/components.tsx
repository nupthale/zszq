import { Component } from 'vue';

const componentsMap: Record<string, Component> = {};

export const components = {
    componentsMap,  
    fieldComponent: null as Component | null,
};