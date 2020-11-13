import './App.css';
import 'antd/dist/antd.css';

// 🎯 IMPORT CONFIG & REACT OIDC

import Header from 'shared/components/Header';
import OidcApp from './OidcApp';

function App() {
  return (
    <div className="App">
      {/* 🎯 CONFIGURE OIDC PROVIDER */}
      <Header />
      <OidcApp />
    </div>
  );
}

export default App;
