import { MockCity, MockIdea, MockCategory, MockZone } from "./mockTypes";

export interface MockData implements MockCity{
    city1: MockCity,
    city2: MockCity
}


export const mockData: MockCity = 
{
    city:[{
            lodging: {
                color: "orange",
                ideas:[{
                    name: "idea name",
                    description: "lorem ipsum dolor sit amet ...",
                    startTime:09.00,
                    endTime:12.00,
                    link: "http://..."
                }]
            },
            food: {
                color: "green",
                    ideas: [{
                            name: "idea name",
                            description: "lorem ipsum dolor sit amet ...",
                            startTime:09.00,
                            endTime:12.00,
                            link: "http://..."
                        }]
            },
            leisure: {
                color: "orange",
                ideas: [{
                    name: "idea name",
                    description: "lorem ipsum dolor sit amet ...",
                    startTime:09.00,
                    endTime:12.00,
                    link: "http://..."
                }]
            }
        },	
        {
            lodging: {
                color: "orange",
                ideas:[{
                    name: "idea name",
                    description: "lorem ipsum dolor sit amet ...",
                    startTime:09.00,
                    endTime:12.00,
                    link: "http://..."
                }]
            },
            food: {
                color: "green",
                    ideas: [{
                            name: "idea name",
                            description: "lorem ipsum dolor sit amet ...",
                            startTime:09.00,
                            endTime:12.00,
                            link: "http://..."
                        }]
            },
            leisure: {
                color: "orange",
                ideas: [{
                    name: "idea name",
                    description: "lorem ipsum dolor sit amet ...",
                    startTime:09.00,
                    endTime:12.00,
                    link: "http://..."
                }]
            }
        },	
    ],
    coordinates:{
        "type": "FeatureCollection",
        "features": [
          {
            "type": "Feature",
            "properties": {},
            "geometry": {
              "type": "Point",
              "coordinates": [
                -16.31916046142578,
                28.483478824137844
              ]
            }
          }
        ]
      }
}
