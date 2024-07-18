export interface QueryFormSchema {
    field: string;
    label: string;
    component: string;
    componentProps: Record<string, any>;
}
  
export interface QueryTag {
    field: string;
    label: string;
    valueText: string;
}