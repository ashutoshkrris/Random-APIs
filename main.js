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

fetch("https://foodish-api.herokuapp.com/api/", {
  method: "GET",
})
  .then((res) => res.json())
  .then((data) => {

    function basename(path) {
      let base = path.split('/').reverse()[0];
      return base.split('.')[0];
    }

    let response = `
        <div class="col-lg-12 mb-4">
            <div class="card">
	          <img src="${data.image}" class="card-img-top" alt="Food Dish">
              <div class="card-body">
                <h4 class="card-title">Random Food Dishes</h4>
                <h5 class="card-text mt-4">${basename(data.image)}</h5>
                <br />
                <a href="https://github.com/ashish-patwal" class="username">
                  <img
                    src="https://avatars.githubusercontent.com/u/63491234?s=400&u=22a3334163c280ff19958b53b8318cce45d66e0e&v=4"
                    alt="DP"
                    class="rounded-circle img-fluid mr-2"
                    width="40"
                    height="40"/>ashish patwal</a>
                &nbsp;
                <a href="https://foodish-api.herokuapp.com/"
                  class="btn btn-outline-dark btn-sm"><i class="fa fa-link" aria-hidden="true"></i>Foodish API</a>
              </div>
            </div>
          </div>
        `;
    responsesBody.innerHTML += response;
  });
