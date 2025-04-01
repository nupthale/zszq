import { NodeType, ModuleNode, FieldNode, ComponentNode } from './interface';

export const isModule = (node?: NodeType): node is ModuleNode => {
    return node?.type === 'module';
}

export const isField = (node?: NodeType): node is FieldNode => {
    return node?.type === 'field';
}

export const isComponent = (node?: NodeType): node is ComponentNode => {
    return node?.type === 'component';
}

export const isVisible = (node?: NodeType) => {
    return node?.visible !== false;
}

export const isEditable = (node?: NodeType) => {
    return node?.editable !== false;
}