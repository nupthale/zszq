<script lang="tsx">
import { defineComponent, ref, toRef, PropType } from 'vue';
import { Form, Button, Space } from 'ant-design-vue';

import TextButton from '../../TextButton/index.vue';
import Icon from '../../__shared/Icon/index.vue';

import { componentMap } from '../componentMap';

import { QueryFormSchema } from '../interface';

const FormItem = Form.Item;

export default defineComponent({
    props: {
        schema: {
            type: Array as PropType<QueryFormSchema[]>,
            default: () => [],
        },
    },
    emits: ['search'],
    setup(props, { emit }) {
        const formState = ref<Record<string, any>>({});
        const schemaRef = toRef(props, 'schema');

        const renderComponent = (item: QueryFormSchema) => {
            const Comp = componentMap.get(item.component);
            const FormComp = Comp?.component;
            const valueText = Comp?.valueText;
            const parseValue = Comp?.parseValue;

            if (!FormComp) return <div></div>;

            const baseProps: Record<string, any> = {
                getPopupContainer: (node: HTMLElement) => node.parentNode,
            };

            return (
                <FormComp
                    value={formState.value[item.field]} 
                    onChange={(value: any, ...rest: any[]) => {
                        formState.value[item.field] = parseValue?.(value) ?? value;
                    }}
                    {...baseProps}
                    {...item.componentProps} 
                />
            );
        }

        const handleSearch = () => {
            emit('search', formState.value);
        }

        const handleReset = () => {
            formState.value = {};
            emit('search', {});
        }

        return () => (
            <Form class="zsui-inlineQuery">
                <div class="zsui-inlineQuery-wrap">
                    {schemaRef.value?.map((item) => (
                        <div class="zsui-inlineQuery-item">
                            <div class="zsui-inlineQuery-itemLabel">{ item.label }</div>
                            <FormItem noStyle>
                                { renderComponent(item) }
                            </FormItem>
                        </div>
                    ))}
                    <div>
                        <Button onClick={handleSearch}>查询</Button>
                    </div>
                </div>
            </Form>
        )
    }
});
</script>

<style lang="less">
.zsui-inlineQuery {
    .ant-input, .ant-picker, .ant-input-affix-wrapper {
        border: none!important;
        box-shadow: none!important;
    }

    .ant-select-selector {
        height: 30px!important;
        border: none!important;
        box-shadow: none!important;
    }
}

.zsui-inlineQuery-wrap {
    display: flex;
    align-items: center;
}

.zsui-inlineQuery-item {
    box-sizing: border-box;
    display: flex;
    flex-shrink: 0;
    align-items: center;
    height: 32px;
    min-width: 220px;
    margin-right: 8px;

    padding: 0 7px;

    border: 1px solid rgb(208, 211, 214);
    border-radius: 6px;
    background: #fff;
}

.zsui-inlineQuery-itemLabel {
    white-space: nowrap;
    flex-wrap: nowrap;

    color: rgb(31, 35, 41);
}
</style>