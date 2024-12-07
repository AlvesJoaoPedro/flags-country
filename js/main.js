import flags from './model/flags.js';

    // Seleciona o container onde as bandeiras serão inseridas
    const container = document.querySelector(".row");

    // Percorre as bandeiras e renderiza no container
    flags.forEach(flag => {
        // Cria o elemento div para a bandeira
        const flagDiv = document.createElement("div");
        flagDiv.className = "flag col-2 my-2 text-center";

        // Preenche o conteúdo HTML da div
        flagDiv.innerHTML = `
            <img src="${flag.image}" alt="${flag.name}" class="img-fluid">
            <p>${flag.name}</p>
        `;

        // Adiciona a div ao container
        container.appendChild(flagDiv);
    });
