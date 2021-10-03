const responsesBody = document.querySelector("#responses");

const loading = document.getElementById("loader");

loading.style.display = "block";
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
                  class="btn btn-outline-dark btn-sm"><i class="fa fa-link mr-2" aria-hidden="true"></i> Advice Slip</a>
              </div>
            </div>
          </div>
        `;
        loading.style.display = "none";
        responsesBody.innerHTML += response;
    });

loading.style.display = "block";
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
                    height="40"/>vish-han</a>
                &nbsp;
                <a href="https://animechan.vercel.app/"
                  class="btn btn-outline-dark btn-sm"><i class="fa fa-link mr-2" aria-hidden="true"></i>Anime Quote</a>
              </div>
            </div>
          </div>
        `;
        loading.style.display = "none";
        responsesBody.innerHTML += response;
    });
loading.style.display = "block";
fetch("https://foodish-api.herokuapp.com/api/", {
    method: "GET",
})
    .then((res) => res.json())
    .then((data) => {
        function basename(path) {
            let base = path.split("/").reverse()[0];
            return base.split(".")[0];
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
                  class="btn btn-outline-dark btn-sm"><i class="fa fa-link mr-2" aria-hidden="true"></i>Foodish API</a>
              </div>
            </div>
          </div>
        `;
        loading.style.display = "none";
        responsesBody.innerHTML += response;
    });

loading.style.display = "block";
fetch("https://api.icndb.com/jokes/random", {
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
                <a href="https://www.icndb.com/api/"
                  class="btn btn-outline-dark btn-sm"><i class="fa fa-link mr-2" aria-hidden="true"></i> Chuck Norris Joke</a>
              </div>
            </div>
          </div>
        `;
        loading.style.display = "none";
        responsesBody.innerHTML += response;
    });
loading.style.display = "block";
fetch("https://asli-fun-fact-api.herokuapp.com/", {
    method: "GET",
})
    .then((res) => res.json())
    .then((data) => {
        let response = `
        <div class="col-lg-12 mb-4">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">Random Fun Facts</h4>
                <h5 class="card-text mt-4">
                  ${data.data.fact}
                </h5>
                <br />
                <a href="https://github.com/surya-doc" class="username"
                  ><img
                    src="https://avatars.githubusercontent.com/u/69008196?s=96&v=4"
                    alt="DP"
                    class="rounded-circle img-fluid mr-2"
                    width="40"
                    height="40"
                  />surya-doc</a
                >
                &nbsp;
                <a
                  href="https://asli-fun-fact-api.herokuapp.com/"
                  class="btn btn-outline-dark btn-sm"
                  ><i class="fa fa-link mr-2" aria-hidden="true"></i> Fun Fact</a
                >
              </div>
            </div>
          </div>
        `;
        loading.style.display = "none";
        responsesBody.innerHTML += response;
    });

loading.style.display = "block";
fetch(`https://swapi.dev/api/people/${Math.floor(Math.random() * 50)}?format=json`, {
    method: "GET",
})
    .then((res) => res.json())
    .then((data) => {
        let response = `
        <div class="col-lg-12 mb-4">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">Random Star Wars Name</h4>
                <h5 class="card-text mt-4">
                  ${data.name}
                </h5>
                <br />
                <a href="https://github.com/apoorvcodes" class="username"
                  ><img
                    src="https://avatars.githubusercontent.com/u/75479355?s=400&u=f11f8a0b39b9c606f3d4313ca3dafd846623e40e&v=4"
                    alt="DP"
                    class="rounded-circle img-fluid mr-2"
                    width="40"
                    height="40"
                  />Apoorv</a
                >
                &nbsp;
                <a
                  href="https://swapi.dev/api/people/"
                  class="btn btn-outline-dark btn-sm"
                  ><i class="fa fa-link mr-2" aria-hidden="true"></i> Fun Names</a
                >
              </div>
            </div>
          </div>
        `;
        loading.style.display = "none";
        responsesBody.innerHTML += response;
    });
loading.style.display = "block";
fetch("https://random.dog/woof.json", {
    method: "GET",
})
    .then((res) => res.json())
    .then((data) => {
        let response = `
        <div class="col-lg-12 mb-4">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">Random Dogs</h4>
                <h5 class="card-text mt-4">
                  <img src=${data.url} alt="Random Dog" class="card-img-top"/>
                </h5>
                <br />
                <a href="https://github.com/developer-diganta" class="username"
                  ><img
                    src="https://avatars.githubusercontent.com/u/65999534?v=4"
                    alt="DP"
                    class="rounded-circle img-fluid mr-2"
                    width="40"
                    height="40"
                  />developer-diganta</a
                >
                &nbsp;
                <a
                  href="https://random.dog/woof.json"
                  class="btn btn-outline-dark btn-sm"
                  ><i class="fa fa-link mr-2" aria-hidden="true"></i> Random Dogs</a
                >
              </div>
            </div>
          </div>
        `;
        loading.style.display = "none";
        responsesBody.innerHTML += response;
    });
loading.style.display = "block";
fetch("https://randomfox.ca/floof/", {
    method: "GET",
})
    .then((res) => res.json())
    .then((data) => {
        let response = `
          <div class="col-lg-12 mb-4">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">Random Fox Image</h4>
                  <h5 class="card-text mt-4">
                    <img src=${data.image} alt="Random Fox" class="card-img-top"/>
                  </h5>
                  <br />
                  <a href="https://github.com/vae97" class="username"
                    ><img
                      src="https://avatars.githubusercontent.com/u/62983845?v=4"
                      alt="DP"
                      class="rounded-circle img-fluid mr-2"
                      width="40"
                      height="40"
                    />R.M.V.Akash Ekanayaka</a
                  >
                  &nbsp;
                  <a
                    href="https://randomfox.ca/floof/"
                    class="btn btn-outline-dark btn-sm"
                    ><i class="fa fa-link mr-2" aria-hidden="true"></i> Random Fox</a
                  >
                </div>
              </div>
            </div>
          `;
        loading.style.display = "none";
        responsesBody.innerHTML += response;
    });
loading.style.display = "block";
fetch("https://forza-api.tk/", {
    method: "GET",
})
    .then((res) => res.json())
    .then((data) => {
        let response = `
        <div class="col-lg-12 mb-4">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">Random Car</h4>
                <h5 class="card-text mt-4">
                  <img src=${data.image} alt="Random Car" class="card-img-top"/>
                </h5>
                <br />
                <a href="https://github.com/euhidaman" class="username"
                  ><img
                    src="https://avatars.githubusercontent.com/u/65843257?v=4"
                    alt="DP"
                    class="rounded-circle img-fluid mr-2"
                    width="40"
                    height="40"
                  />euhidaman</a
                >
                &nbsp;
                <a
                  href="https://docs.forza-api.tk/"
                  class="btn btn-outline-dark btn-sm"
                  ><i class="fa fa-link mr-2" aria-hidden="true"></i> Random Car</a
                >
              </div>
            </div>
          </div>
        `;
        loading.style.display = "none";
        responsesBody.innerHTML += response;
    });
loading.style.display = "block";
fetch("https://api.tvmaze.com/search/shows?q=Midnight%20Mass", {
    method: "GET",
})
    .then((res) => res.json())
    .then((data) => {
        const result = data[0].show;

        let response = `
        <div class="col-lg-12 mb-4">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">${result.name}</h4>
                <h5 class="card-text mt-4">
                  <img src=${result.image.original} alt="Midnight Mass" class="card-img-top"/>
                </h5>
                <h5 class="card-text mt-4">
                  ${result.summary}
                </h5>
                <br />
                <a href="https://github.com/rahulshawdev" class="username"
                  ><img
                    src="https://avatars.githubusercontent.com/u/82671048?s=400&u=7be9f8ac1458b191b6e46c66990cd8c82ec8915b&v=4"
                    alt="DP"
                    class="rounded-circle img-fluid mr-2"
                    width="40"
                    height="40"
                  />rahulshawdev</a
                >
                &nbsp;
                <a
                  href="https://www.tvmaze.com/api"
                  class="btn btn-outline-dark btn-sm"
                  ><i class="fa fa-link mr-2 mr-2" aria-hidden="true"></i> TV Maze API</a
                >
              </div>
            </div>
          </div>
        `;
        loading.style.display = "none";
        responsesBody.innerHTML += response;
    });
loading.style.display = "block";
fetch("https://api.waifu.pics/sfw/happy", {
    method: "GET",
})
    .then((res) => res.json())
    .then((data) => {
        let response = `
          <div class="col-lg-12 mb-4">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">Anime Image API</h4>
                  <h5 class="card-text mt-4">
                    <img src=${data.url} alt="happy anime" class="card-img-top"/>
                  </h5>
                  <br />
                  <a href="https://github.com/yash2002109" class="username"
                    ><img
                      src="https://avatars.githubusercontent.com/u/77677278?v=4"
                      alt="DP"
                      class="rounded-circle img-fluid mr-2"
                      width="40"
                      height="40"
                    />yash2002109</a
                  >
                  &nbsp;
                  <a
                    href="https://waifu.pics/docs"
                    class="btn btn-outline-dark btn-sm"
                    ><i class="fa fa-link mr-2" aria-hidden="true"></i>Waifu Pics</a
                  >
                </div>
              </div>
            </div>
          `;
        loading.style.display = "none";
        responsesBody.innerHTML += response;
    });
loading.style.display = "block";
fetch("https://my-bao-server.herokuapp.com/api/breadpuns", {
    method: "GET",
})
    .then((res) => res.json())
    .then((data) => {
        let response = `
        <div class="col-lg-12 mb-4">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">Bread Puns API</h4>
                <h5 class="card-text mt-4">${data}</h5>
                <br />
                <a href="https://github.com/itzmeowww" class="username">
                  <img
                    src="https://avatars.githubusercontent.com/u/28824919?s=96&v=4"
                    alt="DP"
                    class="rounded-circle img-fluid mr-2"
                    width="40"
                    height="40"/>itzmeowww</a>
                &nbsp;
                <a href="https://my-bao-server.herokuapp.com/"
                  class="btn btn-outline-dark btn-sm"><i class="fa fa-link mr-2" aria-hidden="true"></i>Bread Puns</a>
              </div>
            </div>
          </div>
        `;
        loading.style.display = "none";
        responsesBody.innerHTML += response;
    });
loading.style.display = "block";
fetch("https://dev.to/api/articles?per_page=1&tag=python", {
    method: "GET",
})
    .then((res) => res.json())
    .then((data) => {
        let result = data[0];
        let response = `
        <div class="col-lg-12 mb-4">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">${result.title}</h4>
                <h5 class="card-text mt-4">
                  <img src=${result.social_image} alt="Midnight Mass" class="card-img-top"/>
                </h5>
                <h5 class="card-text mt-4">
                  ${result.description}
                </h5>
                <br />
                <a href="https://github.com/coderaman07" class="username"
                  ><img
                    src="https://avatars.githubusercontent.com/u/54279831?s=400&u=66c997b6ce4e780969395dfea320a35d8461a690&v=4"
                    alt="DP"
                    class="rounded-circle img-fluid mr-2"
                    width="40"
                    height="40"
                  />coderaman07</a
                >
                &nbsp;
                <a
                  href="https://developers.forem.com/api#operation/getArticles"
                  class="btn btn-outline-dark btn-sm"
                  ><i class="fa fa-link mr-2 mr-2" aria-hidden="true"></i>Dev.to API</a
                >
              </div>
            </div>
          </div>
        `;
        loading.style.display = "none";
        responsesBody.innerHTML += response;
    });
loading.style.display = "block";
fetch("https://api.imgflip.com/get_memes", {
    method: "GET",
})
    .then((res) => res.json())
    .then((data) => {
        // In case if the API Doesn't responds
        let randomImg = "https://i.imgflip.com/4acd7j.png";
        let imageList = data.data.memes;
        const randomIndex = Math.floor(Math.random() * imageList.length);
        randomImg = imageList[randomIndex].url;
        let response = `
            <div class="col-lg-12 mb-4">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title">Random Meme Template Generator API (ImgFlip)</h4>
                        <h5 class="card-text mt-4">
                            <img src=${randomImg} alt="Random Meme Template" class="card-img-top"/>
                        </h5>
                        <br />
                        <a href="https://github.com/shubhamjha25" class="username">
                            <img
                                src="https://avatars.githubusercontent.com/u/63443481?v=4"
                                alt="DP"
                                class="rounded-circle img-fluid mr-2"
                                width="40"
                                height="40"
                            />
                            Shubham Jha
                        </a>
                        &nbsp;
                        <a href="https://imgflip.com/api"
                            class="btn btn-outline-dark btn-sm"><i class="fa fa-link mr-2" aria-hidden="true"></i>ImgFlip</a>
                    </div>
                </div>
            </div>
        `;
        loading.style.display = "none";
        responsesBody.innerHTML += response;
    });
loading.style.display = "block";
fetch("https://aws.random.cat/meow", {
    method: "GET",
})
    .then((res) => res.json())
    .then((data) => {
        let response = `
        <div class="col-lg-12 mb-4">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">RandomCat API</h4>
                <h5 class="card-text mt-4">
                  <img src=${data.file} alt="Random cat gif/image" class="card-img-top"/>
                </h5>
                <br />
                <a href="https://github.com/camperjett" class="username">
                  <img
                    src="https://avatars.githubusercontent.com/u/84286404?v=4"
                    alt="DP"
                    class="rounded-circle img-fluid mr-2"
                    width="40"
                    height="40"/>camperjett</a>
                &nbsp;
                <a href="https://aws.random.cat/meow"
                  class="btn btn-outline-dark btn-sm"><i class="fa fa-link mr-2" aria-hidden="true"></i>RandomCat</a>
              </div>
            </div>
          </div>
        `;
        loading.style.display = "none";
        responsesBody.innerHTML += response;
    });
loading.style.display = "block";
fetch("https://breakingbadapi.com/api/characters", {
    method: "GET",
})
    .then((res) => res.json())
    .then((data) => {
        const result = data[0];

        console.log(result);
        let response = `
        <div class="col-lg-12 mb-4">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">${result.name}</h4>
                <h5 class="card-text mt-4">
                  <img src=${result.img} alt="${result.name}" class="card-img-top"/>
                </h5>
                <br />
                <a href="https://github.com/rahulshawdev" class="username">
                  <img
                    src="https://avatars.githubusercontent.com/u/82671048?v=4"
                    alt="DP"
                    class="rounded-circle img-fluid mr-2"
                    width="40"
                    height="40"/>rahulshawdev</a>
                &nbsp;
                <a href="https://breakingbadapi.com/documentation"
                  class="btn btn-outline-dark btn-sm"><i class="fa fa-link mr-2" aria-hidden="true"></i> Breaking Bad</a>
              </div>
            </div>
          </div>
        `;
        loading.style.display = "none";
        responsesBody.innerHTML += response;
    });
loading.style.display = "block";
fetch("https://api.dictionaryapi.dev/api/v2/entries/en/peculiar", {
    method: "GET",
})
    .then((res) => res.json())
    .then((data) => {
        const result = data[0];

        let response = `
        <div class="col-lg-12 mb-4">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">${result.word}</h4>
                <h5 class="card-text mt-4">
                  ${result.origin}
                </h5>
                <br />
                <a href="https://github.com/rahulshawdev" class="username">
                  <img
                    src="https://avatars.githubusercontent.com/u/82671048?v=4"
                    alt="DP"
                    class="rounded-circle img-fluid mr-2"
                    width="40"
                    height="40"/>rahulshawdev</a>
                &nbsp;
                <a href="https://dictionaryapi.dev/"
                  class="btn btn-outline-dark btn-sm"><i class="fa fa-link mr-2" aria-hidden="true"></i>Free Dictionary</a>
              </div>
            </div>
          </div>
        `;
        loading.style.display = "none";
        responsesBody.innerHTML += response;
    });
loading.style.display = "block";
fetch("https://nekos.best/api/v1/nekos", {
    method: "GET",
})
    .then((res) => res.json())
    .then((data) => {
        let response = `
        <div class="col-lg-12 mb-4">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">nekos.best API</h4>
                <h5 class="card-text mt-4">
                  <img src=${data.url} alt="Random anime girl image" class="card-img-top"/>
                </h5>
                <br />
                <a href="https://github.com/xemeds" class="username">
                  <img
                    src="https://avatars.githubusercontent.com/u/60552252?v=4"
                    alt="DP"
                    class="rounded-circle img-fluid mr-2"
                    width="40"
                    height="40"/>xemeds</a>
                &nbsp;
                <a href="https://docs.nekos.best/"
                  class="btn btn-outline-dark btn-sm"><i class="fa fa-link mr-2" aria-hidden="true"></i>nekos.best API</a>
              </div>
            </div>
          </div>
        `;
        loading.style.display = "none";
        responsesBody.innerHTML += response;
    });
loading.style.display = "block";
fetch("https://api.kanye.rest", {
    method: "GET",
})
    .then((res) => res.json())
    .then((data) => {
        let response = `
        <div class="col-lg-12 mb-4">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">Random Kanye West Quotes</h4>
                <h5 class="card-text mt-4">${data.quote}</h5>
                <br />
                <a href="https://github.com/ANISH0309" class="username">
                  <img
                    src="https://avatars.githubusercontent.com/ANISH0309"
                    alt="DP"
                    class="rounded-circle img-fluid mr-2"
                    width="40"
                    height="40"/>ANISH0309</a>
                &nbsp;
                <a href="https://kanye.rest/"
                  class="btn btn-outline-dark btn-sm"><i class="fa fa-link mr-2" aria-hidden="true"></i> Kanye.rest</a>
              </div>
            </div>
          </div>
        `;
        loading.style.display = "none";
        responsesBody.innerHTML += response;
    });
loading.style.display = "block";
fetch("https://game-of-thrones-quotes.herokuapp.com/v1/random", {
    method: "GET",
})
    .then((res) => res.json())
    .then((data) => {
        let response = `
        <div class="col-lg-12 mb-4">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">Game of Thrones Quote API</h4>
                <h5 class="card-text mt-4">${data.sentence}</h5>
                <br />
                <a href="https://github.com/jaimeAlorg" class="username">
                  <img
                    src="https://avatars.githubusercontent.com/jaimeAlorg"
                    alt="DP"
                    class="rounded-circle img-fluid mr-2"
                    width="40"
                    height="40"/>jaimeAlorg</a>
                &nbsp;
                <a href="https://gameofthronesquotes.xyz"
                  class="btn btn-outline-dark btn-sm"><i class="fa fa-link mr-2" aria-hidden="true"></i> Game of Thrones</a>
              </div>
            </div>
          </div>
        `;
        loading.style.display = "none";
        responsesBody.innerHTML += response;
    });
loading.style.display = "block";
fetch("https://pokeapi.co/api/v2/pokemon-species?limit=0", {
    method: "GET",
})
    .then((res) => res.json())
    .then((data) => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * data.count)}`, {
            method: "GET",
        })
            .then((res) => res.json())
            .then((data) => {
                let response = `
                    <div class="col-lg-12 mb-4">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="card-title">PokéAPI</h4>
                                <h5 class="card-text">
                                    <img src=${data.sprites.front_default} alt="${data.name}" class="card-img-top"/>
                                </h5>
                                <h5 class="card-text mt-4">
                                    ${data.name}
                                </h5>
                                <br />
                                <a href="https://github.com/ivanovishado" class="username">
                                    <img
                                    src="https://avatars.githubusercontent.com/ivanovishado"
                                    alt="DP"
                                    class="rounded-circle img-fluid mr-2"
                                    width="40"
                                    height="40"/>ivanovishado</a>
                                &nbsp;
                                <a href="https://pokeapi.co/"
                                    class="btn btn-outline-dark btn-sm"><i class="fa fa-link mr-2" aria-hidden="true"></i> PokéAPI</a>
                            </div>
                        </div>
                    </div>
                `;
                loading.style.display = "none";
                responsesBody.innerHTML += response;
            });
    });

loading.style.display = "block";
// TheCocktailDB API -  returns a random cocktail recipe 🍹
fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php", {
    method: "GET",
})
    .then((res) => res.json())
    .then((data) => {
        let drinkObj = data.drinks[0];
        //returns all ingredients used in recipe
        let ingredients = () => {
            const {
                strIngredient1,
                strIngredient2,
                strIngredient3,
                strIngredient4,
                strIngredient5,
                strIngredient6,
                strIngredient7,
                strIngredient8,
                strIngredient9,
                strIngredient10,
                strIngredient11,
                strIngredient12,
                strIngredient13,
                strIngredient14,
                strIngredient15,
            } = drinkObj;
            return [
                strIngredient1,
                strIngredient2,
                strIngredient3,
                strIngredient4,
                strIngredient5,
                strIngredient6,
                strIngredient7,
                strIngredient8,
                strIngredient9,
                strIngredient10,
                strIngredient11,
                strIngredient12,
                strIngredient13,
                strIngredient14,
                strIngredient15,
            ];
        };
        //filters out all NULL ingredients and returns an array of <li> elements
        const filteredIngredients = ingredients()
            .filter((ingredient) => ingredient)
            .map((ing) => `<li>${ing}</li>`);
        let response = `
        <div class="col-lg-12 mb-4">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">Random Cocktail Recipe</h4>
                <h5 class="card-text mt-4">${drinkObj.strDrink}</h5>
                <img src="${drinkObj.strDrinkThumb}" alt="random cocktail" class="card-img-top"/>
                <h6 class="font-bold">Ingredients</h6>
                <ul>
                  ${filteredIngredients.join("")} 
                </ul>
                <h6 class="font-bold">Instructions</h6>
                <p>${drinkObj.strInstructions}</p>
                <br />
                <a href="https://github.com/Kenny-Vu" class="username">
                  <img
                    src="https://avatars.githubusercontent.com/Kenny-Vu"
                    alt="DP"
                    class="rounded-circle img-fluid mr-2"
                    width="40"
                    height="40"/>Kenny Vu</a>
                &nbsp;
                <a href="https://www.thecocktaildb.com/api.php"
                  class="btn btn-outline-dark btn-sm"><i class="fa fa-link mr-2" aria-hidden="true"></i>TheCocktailDB</a>
              </div>
            </div>
          </div>
        `;
        loading.style.display = "none";
        responsesBody.innerHTML += response;
    });

loading.style.display = "block";
fetch("https://some-random-api.ml/img/panda", {
    method: "GET",
})
    .then((res) => res.json())
    .then((data) => {
        let response = `
        <div class="col-lg-12 mb-4">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">Panda API</h4>
                <h5 class="card-text mt-4">
                  <img src=${data.link} alt="Random panda image" class="card-img-top"/>
                </h5>
                <br />
                <a href="https://github.com/xemeds" class="username">
                  <img
                    src="https://avatars.githubusercontent.com/u/60552252?v=4"
                    alt="DP"
                    class="rounded-circle img-fluid mr-2"
                    width="40"
                    height="40"/>xemeds</a>
                &nbsp;
                <a href="https://some-random-api.ml/"
                  class="btn btn-outline-dark btn-sm"><i class="fa fa-link mr-2" aria-hidden="true"></i>Some Random API</a>
              </div>
            </div>
          </div>
        `;
        loading.style.display = "none";
        responsesBody.innerHTML += response;
    });

loading.style.display = "block";
fetch("https://passwordinator.herokuapp.com/generate", {
    method: "GET",
})
    .then((res) => res.json())
    .then((data) => {
        let response = `
          <div class="col-lg-12 mb-4">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">Password Generator</h4>
                  <h5 class="card-text mt-4">${data.data}</h5>
                  <br />
                  <a href="https://github.com/smotastic" class="username">
                    <img
                      src="https://avatars.githubusercontent.com/smotastic"
                      alt="DP"
                      class="rounded-circle img-fluid mr-2"
                      width="40"
                      height="40"/>smotastic</a>
                  &nbsp;
                  <a href="https://github.com/fawazsullia/password-generator/"
                    class="btn btn-outline-dark btn-sm"><i class="fa fa-link mr-2" aria-hidden="true"></i>Password Generator</a>
                </div>
              </div>
            </div>
          `;
        loading.style.display = "none";
        responsesBody.innerHTML += response;
    });

loading.style.display = "block";
fetch("https://coronavirus-19-api.herokuapp.com/all", {
    method: "GET",
})
    .then((res) => res.json())
    .then((data) => {
        let response = `
        <div class="col-lg-12 mb-4">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">Covid Data Global Cases API</h4>
                <h5 class="card-text mt-4">${data.cases}</h5>
                <br />
                <a href="https://github.com/Sampahcokk-dev" class="username">
                  <img
                    src="https://avatars.githubusercontent.com/u/69108782?v=4"
                    alt="DP"
                    class="rounded-circle img-fluid mr-2"
                    width="40"
                    height="40"/>Sampahcokk-dev</a>
                &nbsp;
                <a href="https://coronavirus-19-api.herokuapp.com/all"
                  class="btn btn-outline-dark btn-sm"><i class="fa fa-link mr-2" aria-hidden="true"></i>Covid Data Global Cases API</a>
              </div>
            </div>
          </div>
        `;
        loading.style.display = "none";
        responsesBody.innerHTML += response;
    });
