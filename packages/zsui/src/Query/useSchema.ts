import { ref } from 'vue';

export const useSchema = (blockOnly: boolean) => {
    let list: any[] = [
        {
            width: 140,
            field: 'secuipoStatusStr',
            label: '缴款状态',
            component: 'Select',
            componentProps: {
                placeholder: '请选择',
                options: [
                    { label: '已缴款', value: '1' },
                    { label: '未缴款', value: '2' },
                ],
                mode: 'multiple',
                maxTagCount: 'responsive',
                allowClear: true,
            }
        },
        {
            width: 240,
            field: 'noticeType',
            label: '银行流水号',
            component: 'Input',
            componentProps: {
                placeholder: '请输入',
            },
        },
        {
            width: 174,
            field: 'remindDaysStr',
            label: '到期日',
            component: 'DatePicker',
            componentProps: {
                placeholder: '请选择',
                format: 'YYYY-MM-DD'
            }
        }, 
        {
            width: 174,
            field: 'remindDaysRangeStr',
            label: '到期范围',
            component: 'DateRangePicker',
            componentProps: {
                placeholder: ['开始时间', '结束时间'],
                format: 'YYYY-MM-DD'
            }
        },
        {
            width: 174,
            field: 'noticeStatusStr3',
            label: '操作状态',
            component: 'Input',
            componentProps: {
                placeholder: '请选择',
                options: [
                    { label: '已通知', value: '1' },
                    { label: '未通知', value: '2' },
                ],
            },
        },
    ];

    if (!blockOnly) {
        list = list.concat([{
            width: 174,
            field: 'noticeStatusStr',
            label: '通知状态',
            component: 'RadioGroup',
            componentProps: {
                placeholder: '请选择',
                options: [
                    { label: '已通知', value: '1' },
                    { label: '未通知', value: '2' },
                ],
            },
        },
        {
            width: 174,
            field: 'remindDaysTypeStr',
            label: '到期日类型',
            component: 'CheckboxGroup',
            componentProps: {
                placeholder: '请选择',
                options: [
                    { label: 'T+1', value: '1' },
                    { label: 'T+2', value: '2' },
                ],
            }
        }]);
    }


    const schema = ref(list);

    return {
        schema,
    };
}