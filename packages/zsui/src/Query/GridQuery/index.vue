<script lang="tsx">
import { defineComponent, ref, toRef, PropType, computed } from 'vue';
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
        gridColumns: {
            type: Number,
            default: 4,
        },
    },
    emits: ['search'],
    setup(props, { emit }) {
        const formState = ref<Record<string, any>>({});
        const schemaRef = toRef(props, 'schema');

        const { renderComponent } = useFormComp(formState);

        const gridTemplateColumns = computed(() => {
            return `repeat(${props.gridColumns}, 1fr)`;
        });

        const handleSearch = () => {
            emit('search', formState.value);
        }

        const handleReset = () => {
            formState.value = {};
            emit('search', {});
        }

        return () => (
            <Form class="zsui-gridQuery zsui-queryCustom">
                <div class="zsui-gridQuery-wrap" style={{ gridTemplateColumns: gridTemplateColumns.value }}>
                    {schemaRef.value?.map((item) => (
                        <div class="zsui-queryCustom-item">
                            <div class="zsui-queryCustom-itemLabel">{ item.label }</div>
                            <FormItem noStyle>
                                { renderComponent(item) }
                            </FormItem>
                        </div>
                    ))}
                </div>
                <Space class="zsui-gridQuery-actions">
                    <Button onClick={handleSearch} type="primary">查询</Button>
                    <Button onClick={handleReset}>重置</Button>
                </Space>
            </Form>
        )
    }
});
</script>

<style src="../inline.less"></style>

<style lang="less">
.zsui-gridQuery {
    display: flex;
    flex-wrap: nowrap;
    align-items: flex-start;
}

.zsui-gridQuery-wrap {
    display: grid;
    grid-gap: 12px;

    flex: 1;
}

.zsui-gridQuery-actions {
    display: flex;
    flex-wrap: nowrap;
}
</style>