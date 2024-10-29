import { createRoot } from 'react-dom/client';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';

import './styles/index.css';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <Provider store={store}>
    <IntlProvider locale="en" defaultLocale="en">
      <App />
    </IntlProvider>
  </Provider>,
);
