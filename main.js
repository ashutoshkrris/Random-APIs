const responsesBody = document.querySelector("#responses");

fetch("https://api.adviceslip.com/advice", {
  method: "GET",
})
  .then((res) => res.json())
  .then((data) => {
    let response = `
        <div class="col-lg-12 mb-4">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">Random Advice API</h4>
                <h5 class="card-text mt-4">${data.slip.advice}</h5>
                <br />
                <a href="https://github.com/ashutoshkrris" class="username">
                  <img
                    src="https://avatars.githubusercontent.com/u/47353498?v=4"
                    alt="DP"
                    class="rounded-circle img-fluid mr-2"
                    width="40"
                    height="40"/>ashutoshkrris</a>
                &nbsp;
                <a href="https://api.adviceslip.com/"
                  class="btn btn-outline-dark btn-sm"><i class="fa fa-link" aria-hidden="true"></i> Advice Slip</a>
              </div>
            </div>
          </div>
        `;
    responsesBody.innerHTML += response;
  });

fetch("http://api.icndb.com/jokes/random", {
  method: "GET",
})
  .then((res) => res.json())
  .then((data) => {
    let response = `
        <div class="col-lg-12 mb-4">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">Chuck Norris Jokes</h4>
                <h5 class="card-text mt-4">${data.value.joke}</h5>
                <br />
                <a href="https://github.com/rahulshawdev" class="username">
                  <img
                    src="https://avatars.githubusercontent.com/u/82671048?s=400&u=7be9f8ac1458b191b6e46c66990cd8c82ec8915b&v=4"
                    alt="DP"
                    class="rounded-circle img-fluid mr-2"
                    width="40"
                    height="40"/>rahulshawdev</a>
                &nbsp;
                <a href="http://www.icndb.com/api/"
                  class="btn btn-outline-dark btn-sm"><i class="fa fa-link" aria-hidden="true"></i> Chuck Norris Joke</a>
              </div>
            </div>
          </div>
        `;
    responsesBody.innerHTML += response;
  });
