import { FormElements } from '~/enums/ui/form';

export interface FormSchemaItem {
    name: string
    element: keyof typeof FormElements
    attr?: Record<string, string>
    class?: string
    value?: string
    option?: any[]
    children?: FormSchemaItem[]
}
