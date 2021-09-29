const responsesBody = document.querySelector("#responses");

fetch("https://animechan.vercel.app/api/random", {
  method: "GET",
})
  .then((res) => res.json())
  .then((data) => {
    let response = `
        <div class="col-lg-12 mb-4">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">Anime Quote API</h4>
                <h5 class="card-text mt-4">${data.quote}</h5>
                <br />
                <a href="https://github.com/vish-han" class="username">
                  <img
                    src="https://avatars.githubusercontent.com/u/44545745?v=4"
                    alt="DP"
                    class="rounded-circle img-fluid mr-2"
                    width="40"
                    height="40"/>Vishal Chauhan</a>
                &nbsp;
                <a href="https://api.adviceslip.com/"
                  class="btn btn-outline-dark btn-sm"><i class="fa fa-link" aria-hidden="true"></i> Advice Slip</a>
              </div>
            </div>
          </div>
        `;
    responsesBody.innerHTML += response;
  });
