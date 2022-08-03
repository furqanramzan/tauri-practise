export type Value = number | string;
export interface Option {
	value: string;
	label?: string;
	order?: number;
}
export type Options = Option[];
