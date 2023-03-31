const apiBaseUrl = 'http://localhost:4000'

const signup = async (body) => {
    return fetch(`${apiBaseUrl}/signup`, {
      method: 'POST',
      body: JSON.stringify(body),
    }).then((response) => response?.json());
}

const signin = async (body) => {
    return fetch(`${apiBaseUrl}/signin`, {
      method: 'POST',
      body: JSON.stringify(body),
    }).then((response) => response?.json());
}

export {
    signup,
    signin
}