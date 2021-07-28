import { SkedoComponentProps, Topic } from '@skedo/core'
export default ({bridge, className} : SkedoComponentProps & {className : string}) => {
	const node = bridge.node
	return <>
		{node.getChildren().map(childNode => {
			return bridge.renderAsReact(childNode, childNode.getId())
		})}
	</>
}