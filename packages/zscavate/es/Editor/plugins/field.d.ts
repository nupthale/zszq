import { Ref } from 'vue';
import { Plugin } from 'prosemirror-state';
import { ContextType } from '../interface';

export declare const fieldPlugin: (_contextRef: Ref<ContextType>) => Plugin<any>;
