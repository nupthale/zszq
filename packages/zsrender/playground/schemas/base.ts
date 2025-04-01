import { SchemaType } from '../../src/RenderEngine/interface';

export const schema: SchemaType = {
    content: [{
        type: 'module',
        title: '基础信息',
        titleClass: 'font-bold',
        content: [{
            type: 'field',
            fieldType: 'Input',
            name: 'incomeType',
            fieldProps: {
              label: '收支类型1',
              layout: 'vertical',
              required: true,
            },
            componentProps: {
                placeholder: '请输入哈乐',
                // 小程序
                noBorder: true,
            },
        }, {
            type: 'component',
            name: 'date',
            componentType: 'DatePicker',
            componentProps: {
                placeholder: '请选择哈乐日期',
            },
        }],
    }],
};