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
                    placeholder: '请输入收支类型1',
                    // 小程序
                    noBorder: false,
                },
                rules: {
                    type: 'string',
                    required: true,
                    message: '收支类型1必填',
                },
            }, {
                type: 'field',
                fieldType: 'Input',
                name: 'incomeType2',
                fieldProps: {
                  label: '收支类型2',
                  layout: 'vertical',
                  required: true,
                },
                componentProps: {
                    placeholder: '请输入收支类型2',
                    // 小程序
                    noBorder: true,
                },
                rules: {
                    type: 'string',
                    required: true,
                    message: '收支类型2必填',
                },
            }, {
                type: 'component',
                name: 'tag',
                componentType: 'Tag',
                componentProps: {
                    type: 'primary',
                    round: true,
                    text: '标签1',
                },
            }, {
                type: 'component',
                name: 'customers',
                componentType: 'Table',
                componentProps: {
                    editable: true,
                    style: 'margin: 40rpx 0',
                    fields: [{
                        type: 'field',
                        fieldType: 'Text',
                        name: 'username',
                        fieldProps: {
                            label: '用户名',
                            required: true,
                            renderType: 'user',
                        },
                        componentProps: {},
                    }, {
                        type: 'field',
                        fieldType: 'Select',
                        name: 'gender',
                        fieldProps: {
                          label: '性别',
                          required: true,
                          renderType: 'amount',
                        },
                        componentProps: {
                            placeholder: '请选择性别',
                            options: [
                                { label: '男', value: 'male' },
                                { label: '女', value: 'female' },
                            ],
                            type: 'radio',
                            alignRight: true,
                        },
                        rules: {
                            type: 'string',
                            required: true,
                            message: '性别必填',
                        },
                    }]
                },
            }]
        }],
    }],
};