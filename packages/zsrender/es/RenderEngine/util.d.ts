import { NodeType, ModuleNode, FieldNode, ComponentNode } from './interface';

export declare const isModule: (node?: NodeType) => node is ModuleNode;
export declare const isField: (node?: NodeType) => node is FieldNode;
export declare const isComponent: (node?: NodeType) => node is ComponentNode;
