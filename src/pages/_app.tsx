import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';
import { store } from 'store/store';

import 'styles/index.css';
import Header from 'components/Layouts/Header';

function App({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<Component {...pageProps} />
		</Provider>
	);
}
export default App;
