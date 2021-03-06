
	import { render } from 'react-dom'
	import Example from './components/DragAndDrop/call/example'
	import { DndProvider } from 'react-dnd'
	import { HTML5Backend } from 'react-dnd-html5-backend'
	import "./Config/firebase";
	function App() {
		return (
			<div className="App">
				<DndProvider backend={HTML5Backend}>
					<Example />
				</DndProvider>
			</div>
		)
	}

	const rootElement = document.getElementById('root')
	render(<App />, rootElement)
