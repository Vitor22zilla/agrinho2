const nomes = ["Godzilla", "Mothra", "and", "King Guidorah", "Destroyer", "Giant Monster" "All-Out - Attack"];
export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

const nome = aleatorio(nomes);