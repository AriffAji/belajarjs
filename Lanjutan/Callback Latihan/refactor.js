const searchButton = document.querySelector(".search-button");
searchButton.addEventListener("click", async function () {
  const inputKeyword = document.querySelector(".input-keyword");
  const movies = await getMovies(inputKeyword.value);
  updateUI(movies);
});

function getMovies(keyword) {
  fetch("https://www.omdbapi.com/?i=tt3896198&apikey=35cada45&s=" + keyword)
    .then((response) => response.json())
    .then((response) => response.Search);
}

function updateUI(movies) {
  let cards = "";
  movies.forEach((m) => (cards += showCards(m)));
  const movieContainer = document.querySelector(".movie-container");
  movieContainer.innerHTML = cards;
}

// event binding pada detail
document.addEventListener("click", async function (e) {
  if (e.target.classList.contains("modal-detail-button")) {
    const imdbid = e.target.dataset.imdbid;
    const movieDetail = await getMovieDetail(imdbid);
    updateUIDetail(movieDetail);
  }
});

function getMovieDetail(imdbid) {
  fetch("https://www.omdbapi.com/?apikey=35cada45&i=" + imdbid)
    .then((response) => response.json())
    .then((m) => m);
}

function updateUIDetail(m) {
  const movieDetail = showMovieDetail(m);
  const modalBody = document.querySelector(".modal-body");
  modalBody.innerHTML = movieDetail;
}

function showCards(m) {
  return `<div class="col-md-3 my-3">
                  <div class="card">
                    <img src="${m.Poster}" class="card-img-top" alt="" />
                    <div class="card-body">
                      <h5 class="card-title">${m.Title}</h5>
                      <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
                      <a href="#" class="btn btn-primary modal-detail-button" data-toggle="modal" data-target="#movieDetailModal" data-imdbid="${m.imdbID}">Show Details</a>
                    </div>
                  </div>
                </div>`;
}

function showMovieDetail(m) {
  return ` <div class="container-fluid">
                                  <div class="row">
                                    <div class="col-md-3">
                                      <img src="${m.Poster}" class="img-fluid" />
                                    </div>
                                    <div class="col-md">
                                      <ul class="list-group">
                                        <li class="list-group-item"><h4>${m.Title}(${m.Year})</h4></li>
                                        <li class="list-group-item"><strong>${m.Director}</strong></li>
                                        <li class="list-group-item"><strong>${m.Actors}</strong></li>
                                        <li class="list-group-item"><strong>${m.Writer}</strong></li>
                                        <li class="list-group-item"><strong>${m.Plot}</strong></li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>`;
}
