<script lang="tsx">
import { defineComponent, ref, toRef, PropType } from 'vue';
import { Drawer, Form, Button, Space } from 'ant-design-vue';

import TextButton from '../../TextButton/index.vue';
import Icon from '../../__shared/Icon/index.vue';

import { useFormComp } from '../useFormComp';

import { QueryFormSchema, QueryTag } from '../interface';

const FormItem = Form.Item;

export default defineComponent({
    props: {
        schema: {
            type: Array as PropType<QueryFormSchema[]>,
            default: () => [],
        },
    },
    emits: ['change'],
    setup(props, { emit, slots, expose }) {
        const drawerVisible = ref(true);

        const queryTags = ref<Record<string, QueryTag>>({});

        const formState = ref<Record<string, any>>({});
        const schemaRef = toRef(props, 'schema');

        const { renderComponent } = useFormComp(formState, queryTags);

        const handleOpenDrawer = () => {
            drawerVisible.value = true;
        }

        const handleOk = () => {
            emit('change', formState.value, {...queryTags.value});
            drawerVisible.value = false;
        }

        const handleReset = () => {
            formState.value = {};
            queryTags.value = {};

            emit('change', formState.value, {...queryTags.value});
        }

        expose({
            reset: handleReset,
            resetField: (field: string, value: any) => {
                formState.value[field] = value;
                delete queryTags.value[field];

                emit('change', formState.value, {...queryTags.value});
            }
        });

        return () => (
            <div onClick={handleOpenDrawer}>
                {slots.default?.()}

                <Drawer class="zsui-sideQueryDrawer" open={drawerVisible.value} closable={false} mask={false}>
                    <div class="zsui-sideQueryDrawer-header">
                        <div>筛选条件</div>
                        <TextButton size="large" onClick={() => drawerVisible.value = false}>
                            <Icon icon="close_outlined" />
                        </TextButton>
                    </div>

                    <div class="zsui-sideQueryDrawer-body">
                        <Form layout="vertical">
                            {schemaRef.value?.map((item) => (
                                <FormItem label={item.label}>
                                    {renderComponent(item)}
                                </FormItem>
                            ))}
                        </Form>
                    </div>

                    <div class="zsui-sideQueryDrawer-footer">
                        <Space>
                            <Button onClick={handleReset}>重置</Button>
                            <Button type="primary" onClick={handleOk}>查看结果</Button>
                        </Space>
                    </div>
                </Drawer>
            </div>
            
        )
    }
});
</script>

<style lang="less">
.zsui-sideQueryDrawer .ant-drawer-body {
    padding: 0!important;
}

.zsui-sideQueryDrawer-header {
    position: sticky;
    z-index: 2;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 16px;

    font-size: 16px;
    font-weight: 500;
    background: #fff;
    border-bottom: 1px solid rgba(31, 35, 41, 0.15);
}

.zsui-sideQueryDrawer-body {
    padding: 16px 16px 72px;

    .ant-picker {
        width: 100%;
    }
}

.zsui-sideQueryDrawer-footer {
    position: absolute;
    display: flex;
    align-items: center;
    z-index: 2;
    box-sizing: border-box;
    justify-content: flex-end;

    bottom: 0;
    left: 0;
    right: 0;
    height: 72px;
    background: #fff;
    padding: 16px;
    border-top: 1px solid rgba(31, 35, 41, 0.15);
}
</style>