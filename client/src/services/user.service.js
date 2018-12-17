export const userService = {
  login,
  logout
};

function login(email, password) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  };

  return fetch(`/api/signin`, requestOptions)
    .then(handleResponse)
    .then(user => {
      console.log(user);
      // login successful if there's a jwt token in the response
      // if (user.token) {
      //   console.log("user token" + user.token);
      //   // store user details and jwt token in local storage to keep user logged in between page refreshes
      //   localStorage.setItem("user", JSON.stringify(user.token));
      //   console.log(localStorage.getItem("user"));
      // }

      return user;
    });
}

function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem("user");
}

function handleResponse(response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    console.log(response);
    console.log(data);
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        // logout();
        // location.reload(true);
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}
