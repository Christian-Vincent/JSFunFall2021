(function () {
  /**
   * As a user, I should be able to click on the a button to see random dog images.
   * Please use axios in this example.
   *
   * You will be making an HTTP request to this API:
   * https://dog.ceo/api/breeds/image/random
   *
   * You should expect this as a response:
   * {
   *    "status": "success",
   *    "message": "https://images.dog.ceo/breeds/poodle-toy/n02113624_9550.jpg"
   * }
   */
   axios({
    method: 'GET',
    url: "https://cdnjs.cloudflare.com/ajax/libs/foundation/6.4.3/css/foundation.css",
  })
  .then(response => {
    // e.g. { data: data: { [{ first_name: ... },{ first_name: ... }] } }
    response.data.data.forEach((user) => {
      const { first_name, last_name, avatar } = user;
      const htmlStr = `<img src="${avatar}"><p>${first_name} ${last_name}</p>`;
      document.querySelector('.container')
        .insertAdjacentHTML('beforeend', htmlStr); // Use a library to prevent XSS
    });
  })
  .catch(err => {
    console.error(err);
    const htmlStr = 'no display';
    document.querySelector(".container").innerHTML = htmlStr; // Use a library to prevent XSS
  });
})();
