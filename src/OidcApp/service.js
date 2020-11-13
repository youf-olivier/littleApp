export const apiUrl = '/api/dingdong';

// API CALL
export const callApi = async injectedFetch => {
  try {
    const response = await injectedFetch(apiUrl);
    if (response.status === 200) {
      const { message, token } = await response.json();
      return { message, token, error: false };
    }
    return { message: await response.text(), error: true };
  } catch (error) {
    return { message: error.message, error: true };
  }
};
