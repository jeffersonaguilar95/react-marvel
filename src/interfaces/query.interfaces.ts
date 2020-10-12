export type MarvelResource = Character | Event | Comic | Creator | Series

export interface QueryResponse<T> {
  count: number
  limit: number
  offset: number
  total: number
  results: T
}

export type MarvelResponse = CharactersResponse | EventsResponse | ComicsResponse | CreatorsResponse | SeriesResponse

export interface QueryParams {
  page: number
  orderBy?: string
  limit?: string | number
}

export interface Image {
  path: string
  extension: string
}

export interface Character {
  id: number
  modified: string
  name: string
  description?: string
  thumbnail: Image
  events: Event[]
  comics: Comic[]
  series: Series[]
}

export type CharactersResponse = QueryResponse<Character[]>

export interface Event {
  id: number
  modified: string
  title: string
  description?: string
  thumbnail: Image
  characters: Character[]
  comics: any
  creators: Creator[]
  series: Series[]
}

export type EventsResponse = QueryResponse<Event[]>

export interface Comic {
  id: number
  modified: string
  title: string
  variantDescription: string
  description: string
  thumbnail: Image
  series: Series[]
  creators: Creator[]
  characters: Character[]
  events: Event[]
}

export type ComicsResponse = QueryResponse<Comic[]>

export interface Creator {
  id: number
  firstName: string
  middleName: string
  lastName: string
  fullName: string
  modified: string
  thumbnail: Image
  series: Series[]
  comics: Comic[]
  events: Event[]
}

export type CreatorsResponse = QueryResponse<Creator[]>

export interface Series {
  id: number
  title: string
  description: string
  rating: string
  modified: string
  thumbnail: Image
  comics: Comic[]
  events: Event[]
  characters: Character[]
  creators: Creator[]
}

export type SeriesResponse = QueryResponse<Series[]>
