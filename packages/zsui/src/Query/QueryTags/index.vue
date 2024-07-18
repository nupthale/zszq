<script lang="tsx">
import { defineComponent, PropType, computed } from 'vue';
import { Tag } from 'ant-design-vue';

import Icon from '../../__shared/Icon/index.vue';
import TextButton from '../../TextButton/index.vue';

import { QueryTag } from '../interface';

export default defineComponent({
    props: {
        tags: {
            type: Object as PropType<Record<string, QueryTag>>,
            default: () => {},
        },
    },
    emits: ['remove', 'clearAll'],
    setup(props, { emit }) {
        const tags = computed(() => {
            return Object.keys(props.tags).map(key => props.tags[key]);
        });

        const handleCloseTag = (tag: QueryTag) => {
            emit('remove', tag.field);;
        };

        const handleClearAll = () => {
            emit('clearAll');
        }

        return () => (
            tags.value?.length ? (
                <div class="zsui-queryTags">
                    <div class="zsui-queryTags-tags">
                        {
                            tags.value.map(tag => (
                                <Tag key={tag.field} closable bordered={false} onClose={() => handleCloseTag(tag)}>
                                    <div class="zsui-queryTags-tag">
                                        {tag.label}: &nbsp;{tag.valueText}
                                    </div>
                                </Tag>
                            ))
                        }
                        <TextButton class="zsui-queryTags__clearBtn" size="small" onClick={handleClearAll}>
                            <Icon icon="delete-trash_outlined" class="zsui-queryTags__clearBtnIcon" />
                            清空
                        </TextButton> 
                    </div>
                </div>
            ) : ''
        )
    }
});
</script>

<style>
.zsui-queryTags {
   
}

.zsui-queryTags-tags {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-right: 4px;
}

.zsui-queryTags-tags .ant-tag {
    height: 24px;
    line-height: 24px;
    margin-bottom: 8px;
    border-radius: 6px;
}

.zsui-queryTags-tag {
    display: inline-block;
    align-items: center;
    max-width: 300px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: bottom;
}

.zsui-queryTags__clearBtn.ant-btn.zsui-text-button {
    font-size: 14px;
    height: 24px;
    margin-bottom: 8px;
}

.zsui-queryTags__clearBtnIcon {
    margin-right: 4px;
}
</style>