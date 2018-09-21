// Bar Chart Example, captured from https://vega.github.io/vega/examples/bar-chart/
// tslint:disable no-var-requires
declare var require: any
import { parseScene } from '@chart-parts/scenegraph'
const data = require('../resources/annual_temperature.json')

export const scenegraph = parseScene(data)
export const title = 'Annual Temperature'
export const dimensions = {
	height: 700,
	width: 850,
	origin: [70, 19] as [number, number],
}