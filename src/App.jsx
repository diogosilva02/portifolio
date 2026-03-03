import {
  CaretDownIcon,
  LinkIcon,
  LinkedinLogoIcon,
  GithubLogoIcon,
  EnvelopeSimpleIcon,
} from "@phosphor-icons/react";
import { Experiences } from "./Experiences";
import "./App.css";

function App() {
  const githubURL = `https://github.com/diogosilva02.png`;

  return (
    <>
      <div className="container">
        <main>
          <img
            src={githubURL}
            alt="Foto de perfil do Diogo Silva"
            className="profile-image"
          />
          <p className="greeting">Olá, eu sou o</p>
          <div className="name-container">
            <h1 className="name">Diogo Silva :) </h1>
          </div>
          <p className="greeting">Desenvolvedor Fullstack</p>
          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/diogo-silva-4281b41a1/"
              className="button-link"
              target="_blank"
            >
              <LinkedinLogoIcon size={24} />
              LinkedIn
            </a>

            <a
              href="mailto:dihogohsilva@gmail.com"
              className="button-link"
              target="_blank"
            >
              <EnvelopeSimpleIcon size={24} />
              Email
            </a>

            <a
              href="https://github.com/diogosilva02"
              className="button-link"
              target="_blank"
            >
              <GithubLogoIcon size={24} />
              GitHub
            </a>

            <a
              href="https://financas-lite.onrender.com"
              className="button-link"
              target="_blank"
            >
              <LinkIcon size={20} />
              Finanças Lite
            </a>
          </div>
          <div className="DownArrow">
            <CaretDownIcon size={32} weight="bold" />
          </div>

          <section className="sobre-mim-container">
            <div className="sobre-texto">
              <h2>Sobre mim:</h2>

              <p>
                Venho do mercado logístico, atuei durante 4 anos em uma empresa
                terceira dentro da multinacional Ambev, o que me deixou na
                bagagem forte capacidade analítica.
              </p>

              <p>
                Sempre gostei muito de tecnologia e o mercado de desenvolvimento
                me deixou fascinado devido a quantidade de oportunidades e
                novidades que ele trás. Me formei em ADS pela UNIP e{" "}
                <span className="destaque">
                  busco minha primeira oportunidade como Dev Junior.{" "}
                </span>
              </p>

              <p>
                Minha stack atual é{" "}
                <span className="destaque">
                  HTML, CSS, JavaScript/TypeScript, Node.js/Express, React
                </span>{" "}
                mas estou em constante apredizado e aberto a utilizar novas
                tecnologias.
              </p>

              <p>
                Quero construir carreira na área de desenvolvimento Web e 2026 é
                o ano onde começa essa jornada !
              </p>
            </div>

            <div className="sobre-imagem-wrapper">
              <img src="/img-me.jfif" alt="" className="sobre-imagem" />
            </div>
          </section>

          <Experiences />
        </main>
      </div>
    </>
  );
}

export default App;
