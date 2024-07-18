import { Ref } from 'vue';

import { QueryFormSchema, QueryTag } from './interface';

import { componentMap } from './componentMap';

export const useFormComp = (formState: Ref<Record<string, any>>, queryTags?: Ref<Record<string, QueryTag>>) => {
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

                    if (queryTags) {
                        queryTags.value[item.field] = {
                            field: item.field,
                            label: item.label,
                            valueText: valueText?.(item, value, ...rest) ?? value,
                        };
                    }
                }}
                {...baseProps}
                {...item.componentProps} 
            />
        );
    }

    return {
        renderComponent,
    }
}