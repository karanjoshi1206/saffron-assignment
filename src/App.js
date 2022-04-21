import Card from "./Components/Card/Card";
import "./App.scss";
import data from "./data";
function App() {
	return (
		<div className='App'>
			{data.map((elem) => {
				return <Card key={elem.id} elem={elem} />;
			})}
		</div>
	);
}

export default App;
