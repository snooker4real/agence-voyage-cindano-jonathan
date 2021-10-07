const { ipcRenderer } = require("electron");

function generateCard(data) {
  data.forEach((item) => {
    cardContent = document.querySelector("#card-content");
    let card = document.createElement("div");
    card.classList.add("card");
    card.classList.add("p-3");
    card.classList.add("m-3");
    card.classList.add("shadow");
    //card.classList.add("cursor-pointer");
    card.style.maxWidth = "540px";
    card.innerHTML = `
        <div class="row g-0">
              <div class="col-md-4">
                <img src="${item.image}" class="img-fluid rounded-start" />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">${item.title}</h5>
                  <p class="card-text">
                      ${item.destination}
                    </p>
                  <p class="card-text">
                    ${item.description}
                  </p>
                  <p class="card-text">
                    <ul>
                        <li>${item.pros}</li>
                    </ul>
                  </p>
                  <h3 class="text-success text-end">${item.price}€</h3>
                  <button type="button" class="btn btn-info">Voir détails</button>
                </div>
              </div>
            </div>
        `;
    cardContent.append(card);
  });

  console.log("test✔️");
}

////////////////////// Init data ///////////////////////////////////
ipcRenderer.on("init-data", (e, data) => {
  //console.log(data);
  generateCard(data);
});
