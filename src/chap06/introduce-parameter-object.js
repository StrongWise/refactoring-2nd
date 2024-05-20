export const station = {
  name: 'ZB1',
  readings: [
    {temp: 47, time: '2024-05-20 11:42'},
    {temp: 53, time: '2024-05-20 11:43'},
    {temp: 58, time: '2024-05-20 11:44'},
    {temp: 53, time: '2024-05-20 11:45'},
    {temp: 51, time: '2024-05-20 11:46'},
  ]
};

export function readingsOutsideRange(station, min, max) {
	return station.readings.filter(r => r.temp < min || r.temp > max);
}
