
import { onMounted, onUnmounted, Ref } from 'vue';

import { LifeCycleEnum, ContextType } from '../interface';

export const useLifeCycleEffect = (
    context: ContextType,
    trigger: [LifeCycleEnum, LifeCycleEnum],
) => {
    onMounted(() => {
        context.schema.value?.lifeCycleEffects?.forEach(effect => {
            if (effect.triggerOn === trigger[0]) {
                effect.tap(context);
            }
        });
    });
    
    onUnmounted(() => {
        context.schema.value?.lifeCycleEffects?.forEach(effect => {
            if (effect.triggerOn === trigger[1]) {
                effect.tap(context);
            }
        });
    });
}