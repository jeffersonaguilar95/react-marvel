export interface Filters {
  search?: string
  events?: string | number
  comics?: string | number
}

export type FilterKeys = 'search' | 'events' | 'comics'

export type SetFilter = (filter: FilterKeys, value?: string | number) => void

export interface FilterInputElement extends HTMLInputElement {
  name: FilterKeys
}
