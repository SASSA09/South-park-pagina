import '../styles/Hero.css';
import '../styles/Home.css';
import '../styles/Creadores.css';
import '../styles/Card.css';

export const About = () => {
  return (
    <div>
      {/* SECCIÓN HERO */}
      <section id="inicio" className="hero">
        <h1>South Park</h1>
        <p>Descubre todo sobre los personajes y capítulos de South Park.</p>
        <a 
          href="https://es.wikipedia.org/wiki/South_Park" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn-saber-mas"
        >
          Saber más
        </a>
      </section>

      {/* SECCIÓN CREADORES */}
      <section id="servicios" className="servicios">
        <h2>Creadores de South Park</h2>
        <div className="cards-container">
          
          {/* Trey Parker */}
          <div className="card">
            <img 
              src="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTwVQl6zjRYeEtqPairZrTtqUljziwBSfbu5Ewekkf4O61b75VF09-DZMerUN0QS-1gsXNY0NlcLMYfb2OIKBRwpRFS_Nb6QZkP0opAMy89ecldzsfLtWRv8MJSTTW0vzIcI2MsWrjMyiM&s=19" 
              alt="Trey Parker" 
            />
            <h3>Trey Parker</h3>
            <p>Trey Parker es un director, animador y guionista...</p>
            <a 
              href="https://es.wikipedia.org/wiki/Trey_Parker" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-card"
            >
              Ver perfil
            </a>
          </div>

          {/* Matt Stone */}
          <div className="card">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5KQizYyjpIE6O_XNjaDaD12emWf_JDl9nn9sdqzM9_g&s=10" 
              alt="Matt Stone" 
              className="card-img" 
            />
            <h3>Matt Stone</h3>
            <p>Actor, guionista y productor estadounidense, reconocido principalmente por ser el cocreador de la serie animada South Park y del musical The Book of Mormon</p>
          </div>

        </div>
      </section>
    </div>
  );
};