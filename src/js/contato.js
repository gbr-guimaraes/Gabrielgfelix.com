import{fetchData as t,langSelection as e}from"./api.js";export function carregarConteudoContato(){t(e()).then(t=>{let e=t.find(t=>"contato"===t.id),n=document.getElementById("lista-contatos");document.getElementById("head-title").innerHTML=`${e.titulo} - Gabriel G.F.`,document.getElementById("titulocontato").innerHTML=e.titulo,Object.entries(e.listacontatos).forEach(([t,e])=>{if("id"!==t&&"titulo"!==t){let o=document.createElement("div");o.classList.add("contato"),o.innerHTML=`
                    <a href="${e.link}" target="_blank"
                        rel="noopener noreferrer"><img src="${e.icon}" alt="${e.nome} loading="lazy"">
                        <p>${e.user}</p>
                    </a>
                `,n.appendChild(o)}})})}