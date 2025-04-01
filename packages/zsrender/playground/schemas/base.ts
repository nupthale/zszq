import { SchemaType } from '../../src/RenderEngine/interface';

export const schema: SchemaType = {
    content: [{
        type: 'module',
        title: '基础信息',
        titleClass: 'sectionTitle',
        content: [{
            type: 'component',
            name: 'basicWrap',
            componentType: 'FieldGroup',
            componentProps: {},
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
                    noBorder: false,
                },
            }, {
                type: 'field',
                fieldType: 'Input',
                name: 'incomeType1',
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
                componentType: 'Select',
                componentProps: {
                    label: '基本用法',
                    placeholder: '请选择哈乐日期',
                },
            }]
        }],
    }],
};