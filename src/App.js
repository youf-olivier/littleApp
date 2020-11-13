import './App.css';
import 'antd/dist/antd.css';

// 🎯 IMPORT CONFIG & REACT OIDC
import { AuthenticationProvider } from '@axa-fr/react-oidc-context';
import configurations from './configurations.json';

import Header from 'shared/components/Header';
import OidcApp from './OidcApp';

function App() {
  return (
    <div className="App">
      {/* 🎯 CONFIGURE OIDC PROVIDER */}
      <AuthenticationProvider configuration={configurations.auth0}>
        <Header />
        <OidcApp />
      </AuthenticationProvider>
    </div>
  );
}

export default App;
