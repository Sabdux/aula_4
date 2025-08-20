interface Clima{
    temperature: string;
    wind: string;
    description: string;
}


async function getClima(cidade:string) {
try {// API pública e gratuita
const response = await fetch(`https://goweather.herokuapp.com/weather/${cidade}`);
const data:Clima = await response.json();
console.log(`Clima em ${cidade}:`);
console.log(`Temperatura: ${data.temperature}`);
console.log(`Vento: ${data.wind}`);
console.log(`Descrição: ${data.description}`);
} catch (error) {
console.error("Falha ao buscar clima.", error);
}
}
getClima("São Paulo");