async function fetchData(lang) {
  try {
    const response = await fetch(`https://us-central1-site-pessoal-9231e.cloudfunctions.net/${lang}`);
    const data = await response.json();
    return data; // Retorna os dados
  } catch (error) {
    console.error("Erro ao obter dados:", error);
    throw error; // Rejeita a promise em caso de erro
  }
}

function langSelection(){
  const lang = document.getElementById('base').lang;
  if(lang === 'pt-BR'){
    return 'ptbr';
  }
  else if(lang === 'en-US'){
    return 'enus';
  }
  else if(lang === 'es-ES'){
    return 'eses';
  }
  else if(lang === 'it-IT'){
    return 'itit';
  }
}

function defaultLang(){
  const lang = navigator.language;
  if(lang !== 'pt-BR' && lang !== 'en-US' && lang !== 'es-ES' && lang !== 'it-IT'){
    return 'pt-BR';
  }
  else return lang;
}

export { fetchData, langSelection, defaultLang };