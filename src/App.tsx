import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyles';
import { Router } from './Router';

export function App() {
	return (
		<>
			<BrowserRouter>
				<Router />
			</BrowserRouter>
			<GlobalStyle />
		</>
	);
}

export default App;
