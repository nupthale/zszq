import { Component } from 'vue';

const componentsMap: Record<string, Component> = {};

export const context = {
    componentsMap,  
    fieldComponent: null as Component | null,
};