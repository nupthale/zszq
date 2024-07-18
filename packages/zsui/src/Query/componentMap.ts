import type { Component } from 'vue';

/**
 * Component list, register here to setting it in the form
 */
import {
  Input,
  Select,
  Radio,
  Checkbox,
  AutoComplete,
  Cascader,
  DatePicker,
  InputNumber,
  Switch,
  TimePicker,
  TreeSelect,
  Slider,
  Rate,
  Divider,
  Mentions,
} from 'ant-design-vue';

import { LabeledValue } from 'ant-design-vue/es/select/index';

type ComponentType = { 
  component: Component, 
  parseValue: (raw: any) => any,
  valueText: (value: any, ...rest: any[]) => string,
};

const componentMap = new Map<string, ComponentType>();

componentMap.set('Input', {
  component: Input,
  parseValue: (e: Event) => (e.target as HTMLInputElement).value,
  valueText: (e: Event) => {
    return (e.target as HTMLInputElement).value;
  },
});

componentMap.set('InputNumber', {
  component: InputNumber,
  parseValue: (e: Event) => (e.target as HTMLInputElement).value,
  valueText: (e: Event) => {
    return (e.target as HTMLInputElement).value;
  },
});

componentMap.set('Select', {
  component: Select,
  parseValue: (value) => value,
  valueText: (_value: string, options: LabeledValue | LabeledValue[]) => {
      let text = '';
      if (options instanceof Array) {
        return options.map(item => item.label)?.join('、');
      } else {
        text = options.label;
      }
      return options.label ?? '';
  },
});

// componentMap.set('RadioGroup', Radio.Group);
// componentMap.set('Checkbox', Checkbox);
// componentMap.set('CheckboxGroup', Checkbox.Group);

// componentMap.set('DatePicker', DatePicker);
// componentMap.set('MonthPicker', DatePicker.MonthPicker);
// componentMap.set('RangePicker', DatePicker.RangePicker);
// componentMap.set('TimeRangePicker', TimePicker.TimeRangePicker);
// componentMap.set('WeekPicker', DatePicker.WeekPicker);
// componentMap.set('TimePicker', TimePicker);

//注册自定义组件
export function regsiter(compName: string, component: ComponentType) {
  componentMap.set(compName, component);
}

export function unregister(compName: string) {
  componentMap.delete(compName);
}

export { componentMap };
