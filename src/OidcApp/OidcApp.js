import { useCallback, useState } from 'react';
import BubbleResponse from 'shared/components/Bubble';
import Doorbell from 'shared/components/Doorbell';
import UserCard from 'shared/components/UserCard';

import './style.scss';

import { callApi } from './service.js';

const OidcAppWithFetch = ({ injectedFetch }) => {
  const [response, setResponse] = useState(null);

  /* 👇 CHANGES HERE 👇 */

  // 🎯 SET OIDC USER
  const oidcUser = null;
  // 🎯  SET LOGIN FUNCTION
  const login = () => {
    console.log('LOGIN');
  };

  /* 👆 CHANGES HERE 👆 */

  const doKnockKnock = useCallback(async () => {
    const apiResponse = await callApi(injectedFetch);
    setResponse(apiResponse);
  }, [injectedFetch]);

  return (
    <div className="oidc-container">
      <UserCard user={oidcUser} onLogin={login} />
      <button className="doorbell-button" onClick={doKnockKnock}>
        <Doorbell />
      </button>
      {response && <BubbleResponse {...response} />}
    </div>
  );
};

// 🎯 REPLACE DEFAULT FETCH
const OidcApp = () => <OidcAppWithFetch injectedFetch={fetch} />;

export default OidcApp;
