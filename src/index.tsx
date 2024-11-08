import { createRoot } from 'react-dom/client';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';

import './styles/index.css';

const messages = {
  en: () => import('../locales/en.json'),
  es: () => import('../locales/es.json'),
};

const getLocaleMessages = async (locale: string) => {
  try {
    return (await messages[locale as keyof typeof messages]()).default;
  } catch {
    // Fallback to English if the locale file isn’t found
    return (await messages['en']()).default;
  }
};

const container = document.getElementById('root');

// Only non-null assertion as It'll always exist
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(container!);

const locale = navigator.language.split('-')[0] || 'en';

// TODO: When nationalization is implemented and translations kept up with, insert locale.
getLocaleMessages('en').then((localeMessages) => {
  root.render(
    <Provider store={store}>
      <IntlProvider
        locale={locale}
        messages={localeMessages}
        defaultLocale="en"
      >
        <App />
      </IntlProvider>
    </Provider>,
  );
});
