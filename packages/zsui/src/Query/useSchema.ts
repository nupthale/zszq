import { ref } from 'vue';

export const useSchema = () => {
    const schema = ref([
        {
            width: 174,
            field: 'noticeType',
            label: '通知类型',
            component: 'Select',
            componentProps: {
                placeholder: '请选择',
                allowClear: false,
            },
        },
        {
            width: 174,
            field: 'noticeStatusStr',
            label: '通知状态',
            component: 'Select',
            componentProps: {
                placeholder: '请选择',
                mode: 'multiple',
                maxTagCount: 'responsive',
            },
        },
        {
            width: 174,
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
            }
        },
        {
            width: 174,
            field: 'remindDaysTypeStr',
            label: '到期日类型',
            component: 'Select',
            componentProps: {
                placeholder: '请选择',
                mode: 'multiple',
            }
        },
        {
            width: 174,
            field: 'remindDaysStr',
            label: '到期日列表',
            component: 'Input',
            componentProps: {
                placeholder: '请选择',
                mode: 'multiple',
            }
        },    
    ]);

    return {
        schema,
    };
}