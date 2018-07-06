import { SceneNode, ItemSpace, AxisOrientation, Axis } from '@gog/interfaces'
import { SceneFrame } from '../SceneFrame'
import { buildAxis } from '../axes/buildAxis'
import { AxisSpace } from '../../interfaces'
import { SGMarkAny } from '../processNode'

export function buildAxes(
	node: SceneNode,
	frame: SceneFrame,
): {
	axes: SGMarkAny[]
	remainingSpace: ItemSpace
} {
	if (node.axes.length === 0) {
		return {
			axes: [],
			remainingSpace: { origin: { x: 0, y: 0 }, shape: frame.view },
		}
	}

	const axisSpace = getAxisSpace(frame)
	const axes = node.axes.map(axis => buildAxis(axis, frame, axisSpace))

	// Build the frame here so that the marks have updated scales
	const remainingSpace = getRemainingSpace(frame, axisSpace)
	return {
		axes,
		remainingSpace,
	}
}

function getRemainingSpace(frame: SceneFrame, axisSpace: AxisSpace): ItemSpace {
	const { width: availableWidth = 0, height: availableHeight = 0 } = frame.view
	// Build the frame here so that the marks have updated scales
	const remainingSpace: ItemSpace = {
		origin: {
			x: axisSpace.left,
			y: axisSpace.top,
		},
		shape: {
			width: availableWidth - axisSpace.left - axisSpace.right,
			height: availableHeight - axisSpace.top - axisSpace.bottom,
		},
	}
	return remainingSpace
}

/**
 * Gets the space consumed by the axes. Each key is an axis orientation, and the values are their respective thickness
 * @param frame
 */
function getAxisSpace(frame: SceneFrame) {
	/**
	 * Hard space is space required by an axis. Soft space is space
	 * required for labels to not bleed over the edge. Soft space is only used
	 * if hard space is zero.
	 */
	const space = {
		top: {
			hard: 0,
			soft: 0,
		},
		left: {
			hard: 0,
			soft: 0,
		},
		bottom: {
			hard: 0,
			soft: 0,
		},
		right: {
			hard: 0,
			soft: 0,
		},
	}

	frame.node.axes.forEach(a => {
		const thickness = axisThickness(a)
		const fontSize = a.labelFontSize as number
		const fontPad = fontSize / 2
		switch (a.orient) {
			case AxisOrientation.Top:
				space.top.hard = Math.max(space.top.hard, thickness)
				break
			case AxisOrientation.Right:
				space.right.hard = Math.max(space.right.hard, thickness)
				space.top.soft = Math.max(space.top.soft, fontPad)
				space.bottom.soft = Math.max(space.top.soft, fontPad)
				break
			case AxisOrientation.Bottom:
				space.bottom.hard = Math.max(space.bottom.hard, thickness)
				break
			case AxisOrientation.Left:
				space.left.hard = Math.max(space.left.hard, thickness)
				space.top.soft = Math.max(space.top.soft, fontPad)
				space.bottom.soft = Math.max(space.top.soft, fontPad)
				break
		}
	})
	return {
		top: Math.max(space.top.hard, space.top.soft),
		left: Math.max(space.left.hard, space.left.soft),
		bottom: Math.max(space.bottom.hard, space.bottom.soft),
		right: Math.max(space.right.hard, space.right.soft),
	}
}

function axisThickness(axis: Axis) {
	return 20
}
