import { Mark, MarkSpec } from 'prosemirror-model';

export const errorMark: MarkSpec = {
    attrs: {
      error: { default: false },
    },
    // 标记的渲染方式，可以在这里定义标记在DOM中的呈现方式
    parseDOM: [
      {
        tag: 'span',
        getAttrs: (dom: HTMLElement) => ({
          error: dom.classList.contains('zs-field-errorMark'),
        }),
      },
    ],
    toDOM: (mark: Mark) => {
      const { error } = mark.attrs;
      return ['span', { class: `${error ? 'zs-field-errorMark' : ''}` }, 0];
    },
};