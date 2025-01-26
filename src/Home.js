import { useEffect, useState } from "react";
import Card from "./Card";

export default function Home({ color, mode }) {
 
  const images = ['images/animal1.jpeg', 'images/animal2.jpeg', 'images/animal3.jpeg', 'images/animal4.jpeg'];

  const [cards, setCards] = useState(() => creerCard(mode));
  const [indexcardretourne, setindexcardretourne] = useState([]);
  const [cardegal, setcardegal] = useState([]);
  const [move, setmove] = useState(0);
  const [time, setTime] = useState(0);
  const [terminer, setTerminer] = useState(false); 

 
  function creerCard(mode) {
    let numberOfCards = mode;  // Le mode est le nombre total de cartes
    let cardsData = [];

    // Calculer le nombre de paires d'images
    const pairs = numberOfCards / 2;

    // Ajouter les paires d'images à partir de l'array `images`
    for (let i = 0; i < pairs; i++) {
      // Ajouter les images deux fois pour chaque paire
      cardsData.push(images[i % images.length]);
      cardsData.push(images[i % images.length]);
    }

    // Mélanger les cartes
    const cardmelange = cardsData.sort(() => Math.random() - 0.5);

    // Retourner les cartes sous forme d'objet
    return cardmelange.map((imageUrl, index) => ({
      id: index,
      imageUrl,
      tourner: false,
    }));
  }

  // Fonction pour gérer le retournement des cartes
  function saveindexCard(index) {
    if (indexcardretourne.length === 2 || cards[index].tourner || cardegal.includes(cards[index].imageUrl)) {
      return;
    }

    const newCards = [...cards];
    newCards[index].tourner = true;
    setCards(newCards);
    setmove(move + 1);

    const newcardretournee = [...indexcardretourne, index];
    setindexcardretourne(newcardretournee);

    if (newcardretournee.length === 2) {
      const [firstIndex, secondIndex] = newcardretournee;
      if (cards[firstIndex].imageUrl === cards[secondIndex].imageUrl) {
        setcardegal([...cardegal, cards[firstIndex].imageUrl]);
      } else {
        setTimeout(() => {
          const resetCards = [...cards];
          resetCards[firstIndex].tourner = false;
          resetCards[secondIndex].tourner = false;
          setCards(resetCards);
        }, 1000);
      }
      setindexcardretourne([]);
    }
  }

  // Vérification de la fin du jeu
  useEffect(() => {
    if (cardegal.length === (mode / 2)) {
      setTerminer(true); // Le jeu est terminé si toutes les paires sont affiché
    }
  }, [cardegal, mode]);

  // Timer du jeu
  useEffect(() => {
    if (terminer) return; // Arrêter le timer si le jeu est terminé

    const timer = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => clearInterval(timer); 
  }, [terminer]);

  return (
    <div style={{ backgroundColor: color }}>
      <div>
        <h1>Jeu de Mémoire</h1>
        <p>Touches: {move}</p>
        <p>Temps: {time}s</p>
        {!terminer ? (
          <div className="game-board">
            {cards.map((card, index) => (
              <Card
                key={card.id}
                card={card}
                onClick={() => saveindexCard(index)}
              />
            ))}
          </div>
        ) : (
          <div className="game-over">
            <h2>Félicitations, vous avez gagné !</h2>
            <p>Nombre de touches : {move}</p>
            <p>Temps écoulé : {time} secondes</p>
          </div>
        )}
      </div>
    </div>
  );
}
