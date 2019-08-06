import { MockCity } from "./mockTypes";


export const mockData: MockCity = 
{
    coordinates:{
      type: "Feature",
      properties: {},
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [
              -16.296672821044922,
              28.521946867678032
            ],
            [
              -16.347484588623047,
              28.49615219918497
            ],
            [
              -16.344566345214844,
              28.479706692570073
            ],
            [
              -16.306285858154297,
              28.462051326298756
            ],
            [
              -16.27967834472656,
              28.467031343699137
            ],
            [
              -16.28499984741211,
              28.511840936255435
            ],
            [
              -16.296672821044922,
              28.521946867678032
            ]
          ]
        ]
      }
    },
    zone:[{
            coordinates:{
              type: "Feature",
              properties: {},
              geometry: {
                type: "Polygon",
                coordinates: [
                  [
                    [
                      -16.320362091064453,
                      28.493134866934206
                    ],
                    [
                      -16.320018768310547,
                      28.488156080151704
                    ],
                    [
                      -16.31366729736328,
                      28.487099943678324
                    ],
                    [
                      -16.31246566772461,
                      28.495247008566704
                    ],
                    [
                      -16.320362091064453,
                      28.493134866934206
                    ]
                  ]
                ]
              }
            },
            lodging: {
                color: "orange",
                ideas:[{
                    name: "idea name",
                    description: "lorem ipsum dolor sit amet ...",
                    coordinates:{
                      "type": "Feature",
                      "properties": {},
                      "geometry": {
                        "type": "Point",
                        "coordinates": [
                          -16.318302154541016,
                          28.481819102847485
                        ]
                      }
                    },
                    startTime: [9,0],
                    endTime: [15,0],
                    link: "http://..."
                }]
            },
            food: {
                color: "green",
                    ideas: [{
                            name: "idea name",
                            description: "lorem ipsum dolor sit amet ...",
                            coordinates:{
                              "type": "Feature",
                              "properties": {},
                              "geometry": {
                                "type": "Point",
                                "coordinates": [
                                  -16.318302154541016,
                                  28.481819102847485
                                ]
                              }
                            },
                            startTime:[9,0],
                            endTime:[15,0],
                            link: "http://..."
                        }]
            },
            leisure: {
                color: "orange",
                ideas: [{
                    name: "idea name",
                    description: "lorem ipsum dolor sit amet ...",
                    coordinates:{
                      "type": "Feature",
                      "properties": {},
                      "geometry": {
                        "type": "Point",
                        "coordinates": [
                          -16.318302154541016,
                          28.481819102847485
                        ]
                      }
                    },
                    startTime:[15,0],
                    endTime:[15,0],
                    link: "http://..."
                }]
            }
        },	
        {
            coordinates:{
                type: "Feature",
                properties: {},
                geometry: {
                  type: "Polygon",
                  coordinates: [
                    [
                      [
                        -16.32242202758789,
                        28.484384115665033
                      ],
                      [
                        -16.320362091064453,
                        28.494643543841644
                      ],
                      [
                        -16.332721710205078,
                        28.498264280436544
                      ],
                      [
                        -16.343021392822266,
                        28.489061331577265
                      ],
                      [
                        -16.33031845092773,
                        28.481064675455944
                      ],
                      [
                        -16.32242202758789,
                        28.484384115665033
                      ]
                    ]
                  ]
                }
              },
            lodging: {
                color: "orange",
                ideas:[{
                    name: "idea name",
                    description: "lorem ipsum dolor sit amet ...",
                    coordinates:{
                      "type": "Feature",
                      "properties": {},
                      "geometry": {
                        "type": "Point",
                        "coordinates": [
                          -16.318302154541016,
                          28.481819102847485
                        ]
                      }
                    },
                    startTime:[15,0],
                    endTime:[12,0],
                    link: "http://..."
                }]
            },
            food: {
                color: "green",
                    ideas: [{
                            name: "idea name",
                            description: "lorem ipsum dolor sit amet ...",
                            coordinates:{
                              "type": "Feature",
                              "properties": {},
                              "geometry": {
                                "type": "Point",
                                "coordinates": [
                                  -16.318302154541016,
                                  28.481819102847485
                                ]
                              }
                            },
                            startTime:[9,0],
                            endTime:[12,0],
                            link: "http://..."
                        }]
            },
            leisure: {
                color: "orange",
                ideas: [{
                    name: "idea name",
                    description: "lorem ipsum dolor sit amet ...",
                    coordinates:{
                      "type": "Feature",
                      "properties": {},
                      "geometry": {
                        "type": "Point",
                        "coordinates": [
                          -16.318302154541016,
                          28.481819102847485
                        ]
                      }
                    },
                    startTime:[9,0],
                    endTime:[12,0],
                    link: "http://..."
                }]
            }
        },	
    ],
}
