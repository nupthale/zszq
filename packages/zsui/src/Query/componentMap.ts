import type { Component } from 'vue';
import { Dayjs } from 'dayjs';
/**
 * Component list, register here to setting it in the form
 */
import {
  Input,
  Select,
  Radio,
  Checkbox,
  DatePicker,
  InputNumber,
  CheckboxOptionType,
} from 'ant-design-vue';

import { LabeledValue } from 'ant-design-vue/es/select/index';
import { QueryFormSchema } from './interface';

type ComponentType = { 
  component: Component, 
  parseValue: (raw: any) => any,
  valueText: (item: QueryFormSchema, value: any, ...rest: any[]) => string,
};

const componentMap = new Map<string, ComponentType>();

componentMap.set('Input', {
  component: Input,
  parseValue: (e: Event) => (e.target as HTMLInputElement).value,
  valueText: (_item: QueryFormSchema, e: Event) => {
    return (e.target as HTMLInputElement).value;
  },
});

componentMap.set('InputNumber', {
  component: InputNumber,
  parseValue: (e: Event) => (e.target as HTMLInputElement).value,
  valueText: (_item: QueryFormSchema, e: Event) => {
    return (e.target as HTMLInputElement).value;
  },
});

componentMap.set('Select', {
  component: Select,
  parseValue: (value) => value,
  valueText: (_item: QueryFormSchema, _value: string, options: LabeledValue | LabeledValue[]) => {
      if (options instanceof Array) {
        return options.map(item => item.label)?.join('、');
      }
      return options.label ?? '';
  },
});

componentMap.set('RadioGroup', {
  component: Radio.Group,
  parseValue: (e: Event) => (e.target as HTMLInputElement).value,
  valueText: (item: QueryFormSchema, e: Event) => {
      const options = item.componentProps?.options || [];
      const value = (e.target as HTMLInputElement).value;

      return options.find((option: CheckboxOptionType) => option.value === value)?.label ?? '';
  },
});

componentMap.set('CheckboxGroup', {
  component: Checkbox.Group,
  parseValue: (value) => value,
  valueText: (item: QueryFormSchema, values: string[]) => {
      const options = item.componentProps?.options || [];
      
      return values?.map(value => {
        const option = options.find((option: CheckboxOptionType) => option.value === value);
        return option.label;
      })?.join('、') ?? '';
  },
});

componentMap.set('DatePicker', {
  component: DatePicker,
  parseValue: (value: Dayjs) => value,
  valueText: (item: QueryFormSchema, value: Dayjs) => {
      const { format } = item.componentProps || {};

      return value?.format(format);
  },
});

componentMap.set('DateRangePicker', {
  component: DatePicker.RangePicker,
  parseValue: (value: Dayjs[]) => value,
  valueText: (item: QueryFormSchema, value: Dayjs[]) => {
      const { format } = item.componentProps || {};

      return `[${value?.[0]?.format(format)}, ${value?.[1]?.format(format)}]`;
  },
});

//注册自定义组件
export function regsiter(compName: string, component: ComponentType) {
  componentMap.set(compName, component);
}

export function unregister(compName: string) {
  componentMap.delete(compName);
}

export { componentMap };
