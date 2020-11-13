import { useCallback, useState } from 'react';
import { withAuthentication } from '@axa-fr/react-oidc-context-fetch';
import BubbleResponse from 'shared/components/Bubble';
import Doorbell from 'shared/components/Doorbell';
import UserCard from 'shared/components/UserCard';

import './style.scss';

import { callApi } from './service.js';
import { useReactOidc } from '@axa-fr/react-oidc-context';

const OidcAppWithFetch = ({ fetch: injectedFetch }) => {
  const [response, setResponse] = useState(null);

  /* 👇 CHANGES HERE 👇 */
  const { oidcUser, login } = useReactOidc();
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
const OidcApp = withAuthentication(fetch)(OidcAppWithFetch);

export default OidcApp;
