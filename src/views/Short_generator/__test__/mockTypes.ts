import { GeoJsonObject } from "geojson";


export interface MockIdea{
    name: string,
    description: string,
    startTime:  number,
    endTime: number,
    link: string
}
export interface MockCategory{
    color: string,
    ideas: MockIdea[]
}

export interface MockZone{
    lodging: MockCategory,
    food: MockCategory,
    leisure: MockCategory
}

export interface MockCity{
    city: MockZone[]
    coordinates: GeoJsonObject
}