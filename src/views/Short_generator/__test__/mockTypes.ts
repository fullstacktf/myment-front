import { GeoJsonObject, FeatureCollection, Feature } from "geojson";


export interface MockIdea{
    name: string,
    description: string,
    coordinates: Feature
    startTime:  number[],
    endTime: number[],
    link: string
}
export interface MockCategory{
    color: string,
    ideas: MockIdea[]
}

export interface MockZone{
    coordinates: Feature
    lodging: MockCategory,
    food: MockCategory,
    leisure: MockCategory
}

export interface MockCity {
    coordinates: Feature,
    zone: MockZone[]
}