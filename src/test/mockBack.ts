import { mockData } from "./mockData";

export default {
    name: mockData.zone[0].food.ideas[0].name,
    description: mockData.zone[0].food.ideas[0].description,
    start: mockData.zone[0].food.ideas[0].startTime[0],
    end: mockData.zone[0].food.ideas[0].endTime[0],
  };
export const mock = {
    name: mockData.zone[0].food.ideas[0].name,
    description: mockData.zone[0].food.ideas[0].description,
    timeStart: mockData.zone[0].food.ideas[0].startTime[0],
    timeEnd: mockData.zone[0].food.ideas[0].endTime[0],
};