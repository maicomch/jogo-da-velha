const celulas = document.querySelectorAll(".celula");
let checarTurno = true;
const jogador_x = "X";
const jogador_o = "O";
const combinacoes = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
document.addEventListener("click", (event) => {
  if (event.target.matches(".celula")) {
    jogar(event.target.id);
  }
});
function jogar(id) {
  const celula = document.getElementById(id);
  turno = checarTurno ? jogador_x : jogador_o;
  celula.textContent = turno;
  celula.classList.add(turno);
  checarVencedor(turno);
}
function checarVencedor(turno) {
  const vencedor = combinacoes.some((comb) => {
    return comb.every((index) => {
      return celulas[index].classList.contains(turno);
    });
  });
  if (vencedor) {
    encerrarJogo(turno);
  } else if (checarEmpate()) {
    encerrarJogo();
  } else {
    checarTurno = !checarTurno;
  }
}
function checarEmpate() {
  let x = 0;
  let o = 0;
  for (index in celulas) {
    if (!isNaN(index)) {
      if (celulas[index].classList.contains(jogador_x)) {
        x++;
      }
      if (celulas[index].classList.contains(jogador_o)) {
        o++;
      }
    }
  }
  return x + o === 9 ? true : false;
}
function encerrarJogo(vencedor = null) {
  if (vencedor) {
    console.log("vencedor:" + vencedor);
  } else {
    console.log("empate");
  }
}
