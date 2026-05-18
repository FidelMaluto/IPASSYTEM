// MENU ACTIVO
  const menuLinks = document.querySelectorAll(".sidebar nav a");

  menuLinks.forEach(link  => {

    link.addEventListener("click", function(e){
      e.preventDefault();

      menuLinks.forEach(item => {
        item.classList.remove("active");
      });

      this.classList.add("active");

      mostrarMensagem(`Abrindo ${this.innerText}...`);
    });

  });



  // ANIMAÇÃO DOS CARDS
  const cards = document.querySelectorAll(".card");

  cards.forEach((card, index) => {

    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";

    setTimeout(() => {

      card.style.transition = "0.5s";
      card.style.opacity = "1";
      card.style.transform = "translateY(0px)";

    }, index * 200);

  });



  // BARRAS ANIMADAS
  const barras = document.querySelectorAll(".bar div");

  barras.forEach(bar => {

    let largura = bar.style.width;

    bar.style.width = "0%";

    setTimeout(() => {
      bar.style.transition = "1.5s";
      bar.style.width = largura;
    }, 500);

  });



  // MENSAGEM TOAST
  function mostrarMensagem(texto){

    const toast = document.createElement("div");

    toast.className = "toast";
    toast.innerText = texto;

    document.body.appendChild(toast);

    setTimeout(() => {
      toast.classList.add("show");
    }, 100);

    setTimeout(() => {

      toast.classList.remove("show");

      setTimeout(() => {
        toast.remove();
      }, 300);

    }, 2500);

  }



  // SIMULAR ACTUALIZAÇÃO DOS NÚMEROS
  function animarNumero(elemento, final){

    let actual = 0;

    const incremento = Math.ceil(final / 50);

    const intervalo = setInterval(() => {

      actual += incremento;

      if(actual >= final){
        actual = final;
        clearInterval(intervalo);
      }

      elemento.innerText = actual.toLocaleString();

    }, 30);

  }


  const numeros = document.querySelectorAll(".card h2");

  animarNumero(numeros[0], 1247);
  animarNumero(numeros[1], 438);
  animarNumero(numeros[2], 312);
  animarNumero(numeros[3], 212);



  // TABELA INTERACTIVA
  const linhasTabela = document.querySelectorAll("tbody tr");

  linhasTabela.forEach(linha => {

    linha.addEventListener("click", () => {

      linhasTabela.forEach(l => {
        l.classList.remove("selected-row");
      });

      linha.classList.add("selected-row");

      const nome = linha.children[1].innerText;

      mostrarMensagem(`Candidato ${nome} seleccionado`);

    });

  });



  // BOTÃO DARK/LIGHT MODE
  const botaoTema = document.createElement("button");

  botaoTema.innerText = "🌙";
  botaoTema.className = "theme-btn";

  document.body.appendChild(botaoTema);

  botaoTema.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){
      botaoTema.innerText = "☀️";
    }else{
      botaoTema.innerText = "🌙";
    }

  });



  // FORMULÁRIO - AVANÇAR PASSOS
  const passos = document.querySelectorAll(".step");

  passos.forEach((passo, index) => {

    passo.addEventListener("click", () => {

      passos.forEach(p => {
        p.classList.remove("active");
      });

      passo.classList.add("active");

      mostrarMensagem(`Passo ${index + 1} seleccionado`);

    });

  });
