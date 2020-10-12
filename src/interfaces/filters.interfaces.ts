export interface Filters {
  search?: string
  events?: string
  comics?: string
}

export type SetFilter = (filter: keyof Filters, value?: string | number) => void

export interface FilterInputElement extends HTMLInputElement {
  name: keyof Filters
}
