import { ref, computed, Ref } from 'vue';
import type { Rule } from 'async-validator';

import Schema from 'async-validator';
import { isField } from '../../util';
import { NodeType, SchemaType } from '../../interface';

export const useValidate = (
    schema: Ref<SchemaType>, 
    formModel: Ref<Record<string, any>>
) => {
    const rulesRef = computed(() => {
        return schema.value?.rules || {};
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