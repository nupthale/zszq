import { ref, computed, Ref } from 'vue';
import type { Rule } from 'async-validator';

import Schema from 'async-validator';
import { isField } from '../../util';
import { NodeType } from '../../interface';

export const useValidate = (
    schemaMap: Ref<Record<string, NodeType>>, 
    formModel: Ref<Record<string, any>>
) => {
    const rulesRef = computed(() => {
        const rules: Record<string, Rule> = {};
        Object.keys(schemaMap.value)?.forEach((key) => {
            const node = schemaMap.value[key];
            if (isField(node)) {
                rules[node.name] = node.rules;
            }
        });

        return rules;
    });

    const errors = ref<{
        errors: Array<{
            field: string,
            message: string,
        }>,
        fields: Record<string, Array<{
            field: string,
            message: string,
        }>>,
    } | null>(null);

    const validate = async () => {
        const validator = new Schema(rulesRef.value || {});

        try {
            await validator.validate(formModel.value || {});
            errors.value = null;
    
            return true;
        } catch(e) {
            errors.value = e as any;
    
            return false;
        }
    }; 

    return {
        validate,
        errors,
    };
}