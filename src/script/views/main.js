import go from 'gojs';
import '../../style/app.css';

export default class MainView {
	constructor() {
		console.log('initialize main view');
		this._createView();
	}

	_createView() {
		let element = `<div style="height:100%;width:100%;" id="main-container"></div>`;
		document.write(element);
		const $ = go.GraphObject.make;

		this.myDiagram = $(go.Diagram, 'main-container', {
			initialContentAlignment: go.Spot.Center,
		});

		// define a simple Node template
		this.myDiagram.nodeTemplate = $(go.Node, 'Auto', // the Shape will go around the TextBlock
			$(go.Shape, 'RoundedRectangle', {
					strokeWidth: 0,
				},
				// Shape.fill is bound to Node.data.color
				new go.Binding('fill', 'color')),
			$(go.TextBlock, {
					margin: 8,
				}, // some room around the text
				// TextBlock.text is bound to Node.data.key
				new go.Binding('text', 'key')),
		);

		// but use the default Link template, by not setting Diagram.linkTemplate

		// create the model data that will be represented by Nodes and Links
		this.myDiagram.model = new go.GraphLinksModel(
			[{
					key: 'Alpha',
					color: 'lightblue',
				},
				{
					key: 'Beta',
					color: 'orange',
				},
				{
					key: 'Gamma',
					color: 'lightgreen',
				},
				{
					key: 'Delta',
					color: 'pink',
				}
			], [{
					from: 'Alpha',
					to: 'Beta',
				},
				{
					from: 'Alpha',
					to: 'Gamma',
				},
				{
					from: 'Beta',
					to: 'Beta',
				},
				{
					from: 'Gamma',
					to: 'Delta',
				},
				{
					from: 'Delta',
					to: 'Alpha',
				}
			]);
	}
}
