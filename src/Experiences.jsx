import { useState } from "react";
import { minhasExperiencias } from "./utils/experiences";
import "./Experiences.css";

export function Experiences() {
  const [abaAtiva, setAbaAtiva] = useState(0);

  return (
    <section className="experiencia-container">
      <h2>Minhas experiências:</h2>

      <div className="experiencia-conteudo">
       
        <div className="abas-empresas">
          {minhasExperiencias.map((exp, index) => (
            <button
              key={exp.id}
              
              className={`aba-botao ${abaAtiva === index ? "ativo" : ""}`}
              onClick={() => setAbaAtiva(index)}
            >
              {exp.empresa}
            </button>
          ))}
        </div>

        
        <div className="detalhes-experiencia">
          <h3>
            {minhasExperiencias[abaAtiva].cargo}{" "}
            <span className="destaque-empresa">
              @ {minhasExperiencias[abaAtiva].empresa}
            </span>
          </h3>
          <p className="periodo">{minhasExperiencias[abaAtiva].periodo}</p>

          <ul>
            {minhasExperiencias[abaAtiva].atividades.map((atividade, i) => (
              <li key={i}>{atividade}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
