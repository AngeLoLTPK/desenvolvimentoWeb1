let show = document.getElementById("buttonModal");
let modal = document.getElementById("modal");
let close = document.getElementById("buttonCloseModal");

const main = document.getElementById("modalMain");

main.addEventListener("outClick", () => {
    modal.style.display = "none"
})

show.addEventListener("click", function () {
    modal.style.display = "flex";
});

close.addEventListener("click", function () {
    modal.style.display = "none"
});

function closeModal(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

modal.addEventListener("click", closeModal);

function AddCard(event) {
    event.preventDefault();

    const cardList = document.querySelector("#cardList");

    const urlImage = event.target.urlLogo.value;
    const nameCompany = event.target.nameCompany.value;
    const ticker = event.target.ticker.value;
    const quantity = event.target.quantity.value;
    const closedValue = event.target.closedValue.value;

    cardList.innerHTML += `
         <div id="caixaAcao" id="${ticker}";>

                    <div class="topoCaixa">
                        <div style="display: flex; align-items: center; style="max-width: 50px;">
                        
                            <img src="${urlImage}" class="cardLogo">
                            <span style="margin-left: 10px;">${nameCompany}</span>
                        </div>

                        <h6>
                            ${ticker}
                        </h6>
                    </div>

                    <div class="corpoCaixa">

                        <span style="color: rgba(255, 252, 252, 0.555);">
                            Valor:
                        </span>

                        <h1>${closedValue} </h1>
                        <h4 style="padding-left: 10px; color:rgb(42, 189, 42);">▲</h4>

                    </div>

                    <div class="pernaCaixa">

                        <span style="color: rgba(255, 252, 252, 0.555);">
                            Quantidade:
                        </span>


                        <span style="color: rgb(255, 255, 255);">
                            ${quantity}
                        </span>

                        <span style="color: rgba(255, 252, 252, 0.555);">
                            Posição:
                        </span>


                        <span style="color: rgb(255, 255, 255);">
                            ${quantity * closedValue};
                        </span>


                    </div>

                </div>
    `;

    closeModal();
    event.target.reset();
}