class Api {
  constructor(settings) {
    this._settings = settings;
  }
  //qq
  getProfile() {
    return fetch(this._settings.baseUrl + "/users/me", {
      headers: this._settings.headers,
    }).then(this._checkResponse);
  }
  //qq
  getInitialCards() {
    return fetch(this._settings.baseUrl + "/cards", {
      headers: this._settings.headers,
    }).then(this._checkResponse);
  }
  //qq
  editProfile(data) {
    return fetch(this._settings.baseUrl + "/users/me", {
      method: "PATCH",
      headers: this._settings.headers,
      body: JSON.stringify({
        name: data.name,
        about: data.about,
      }),
    }).then(this._checkResponse);
  }

  addNewCard(item) {
    return fetch(this._settings.baseUrl + "/cards", {
      method: "POST",
      headers: this._settings.headers,
      body: JSON.stringify({
        name: item.name,
        link: item.link,
      }),
    }).then(this._checkResponse);
  }
  //qq
  deleteCard(id) {
    return fetch(this._settings.baseUrl + "/cards/" + id, {
      method: "DELETE",
      headers: this._settings.headers,
    }).then(this._checkResponse);
  }
  //qq
  deleteLike(id) {
    return fetch(this._settings.baseUrl + "/cards/" + id + "/likes", {
      method: "DELETE",
      headers: this._settings.headers,
    }).then(this._checkResponse);
  }
  //qq
  addLike(id) {
    return fetch(this._settings.baseUrl + "/cards/" + id + "/likes", {
      method: "PUT",
      headers: this._settings.headers,
    }).then(this._checkResponse);
  }
  //qq
  editAvatarProfile(data) {
    return fetch(this._settings.baseUrl + "/users/me/avatar", {
      method: "PATCH",
      headers: this._settings.headers,
      body: JSON.stringify({
        avatar: data.avatar,
      }),
    }).then(this._checkResponse);
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }
}

export const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-39",
  headers: {
    authorization: "30d87b7f-295d-4117-804d-85c019cdba1c",
    "Content-Type": "application/json",
  },
});
