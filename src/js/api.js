async function fetchData() {
  try {
    const response = await fetch("https://us-central1-site-pessoal-9231e.cloudfunctions.net/api");
    const data = await response.json();
    return data; // Retorna os dados
  } catch (error) {
    console.error("Erro ao obter dados:", error);
    throw error; // Rejeita a promise em caso de erro
  }
}

export { fetchData };