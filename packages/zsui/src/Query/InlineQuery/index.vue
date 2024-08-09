<script lang="tsx">
import { defineComponent, ref, toRef, PropType } from 'vue';
import { Form, Button, Space } from 'ant-design-vue';

import { useFormComp } from '../useFormComp';

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

        const { renderComponent } = useFormComp(formState);

        const handleSearch = () => {
            emit('search', formState.value);
        }

        const handleReset = () => {
            formState.value = {};
            emit('search', {});
        }

        return () => (
            <Form class="zsui-inlineQuery zsui-queryCustom">
                <div class="zsui-inlineQuery-wrap">
                    {schemaRef.value?.map((item) => (
                        <div class="zsui-queryCustom-item" style={{ width: `${item.width}px`}}>
                            <div class="zsui-queryCustom-itemLabel">{ item.label }</div>
                            <FormItem noStyle>
                                { renderComponent(item) }
                            </FormItem>
                        </div>
                    ))}
                    <Space>
                        <Button onClick={handleSearch} type="primary">查询</Button>
                        <Button onClick={handleReset}>重置</Button>
                    </Space>
                </div>
            </Form>
        )
    }
});
</script>

<style src="../inline.less"></style>

<style lang="less">
.zsui-inlineQuery-wrap {
    display: flex;
    align-items: center;
}
</style>