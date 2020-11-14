import 'antd/dist/antd.css';
import './App.css';

// 🎯 IMPORT CONFIG & REACT OIDC
import { AuthenticationProvider, OidcSecure } from '@axa-fr/react-oidc-context';
import configurations from './configurations.json';

import Header from 'shared/components/Header';
import OidcApp from './OidcApp';

function App() {
  return (
    <div className="App">
      {/* 🎯 CONFIGURE OIDC PROVIDER */}
      <AuthenticationProvider configuration={configurations.auth0}>
        <OidcSecure>
          <Header />
          <OidcApp />
        </OidcSecure>
      </AuthenticationProvider>
    </div>
  );
}

export default App;
