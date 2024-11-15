function createHeader() {
    const header = document.createElement('header');
    header.innerHTML = `
        <div class="wrapper">

            <div id="logo">
                <a href="index.html" id="logoLink">
                    <img src="/img/logo.svg" alt="logo">
                    <h1><span class="wordLogo">T</span>ime<span class="wordLogo">C</span>ontrol</h1>
                </a>
            </div>

            <div class="dropdown" id="dropdownNav">

                <button class="btn btn-secondary dropdown-toggle buttonheader" type="button" id="dropdownMenuButton buttonMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <img src="/img/menuWhite.svg" alt="Menu de links">   
                </button>

                <div class="dropdown-menu dropdown-menu-right  p-3 mb-2 bg-dark text-white" aria-labelledby="dropdownMenuButton">
                  <a class="dropdown-item text-light bg-dark" href="./index.html">Home</a>
                  <a class="dropdown-item text-light bg-dark" href="/pages/history.html">Historico</a>
                  <a class="dropdown-item text-light bg-dark" href="/pages/userPerfil.html">Perfil</a>
                  <a class="dropdown-item text-light bg-dark" href="/pages/Contato.html">Contato</a>
                </div>
              </div>

        </div>
    `;
    document.body.prepend(header);
}

let teste1 = 1;

createHeader();