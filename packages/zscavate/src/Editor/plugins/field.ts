import { Ref } from 'vue';
import { v4 as uuid } from 'uuid';

import { Plugin } from 'prosemirror-state';

import { ContextType } from '../interface';

export const fieldPlugin = (_contextRef: Ref<ContextType>) => new Plugin({
  props: {
    handleTextInput(view, from, to, text) {
      const state = view.state;
      const tr = state.tr;
      const doc = tr.doc;
      const schema = state.schema;
      const fieldType = schema.nodes.field;

      const start = from - 2;
      const end = to;

      // 检查输入的文本是否包含连续的三个下划线
      const prevText = doc.textBetween(start, from);

      if (text === '_' && prevText === '__') {
        view.dispatch(
          tr.replaceRangeWith(start, end, fieldType.create({
            id: uuid(),
          })),
        );

        return true; // 返回 true 表示已处理该输入
      }
      return false; // 返回 false 以允许其他处理
    }
  }
});