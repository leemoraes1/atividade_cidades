const elemento = document.querySelectorAll("img");

const texto = "Curitiba, capital do Paraná, é conhecida por seu planejamento urbano exemplar e qualidade de vida. A cidade destaca-se pelo inovador sistema de transporte público BRT, suas extensas áreas verdes como o Jardim Botânico e o Parque Barigui, além de marcos culturais como a Ópera de Arame e o  Museu Oscar Niemeyer. O centro histórico e a Feirinha do Largo da Ordem revelam o charme cultural e a diversidade de eventos como o Festival de Teatro de Curitiba. Com uma população de cerca de 1,9 milhões de habitantes, Curitiba é um exemplo de sustentabilidade e modernidade no Brasil.";


const paragrafos = document.querySelectorAll(".texto");


paragrafos.forEach(paragrafo => {
    paragrafo.textContent = texto;
});

