import { Mark } from 'prosemirror-model';

export const errorMark = {
    attrs: {
      error: { default: false },
    },
    // 标记的渲染方式，可以在这里定义标记在DOM中的呈现方式
    parseDOM: [
      {
        tag: 'span',
        getAttrs: (dom: HTMLElement) => ({
          error: dom.classList.contains('zs-form-item-errorMark'),
        }),
      },
    ],
    toDOM: (mark: Mark) => {
      const { error } = mark.attrs;
      debugger;
      return ['span', { class: `${error ? 'zs-form-item-errorMark' : ''}` }, 0];
    },
};