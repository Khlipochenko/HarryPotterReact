import { useNavigate } from "react-router-dom";
import  Gryffindor  from "../../assets/gryffindor.jpg";
import  Hufflepuff  from "../../assets/hufflepuff.jpg";
import  Ravenclaw  from "../../assets/ravenclaw.jpg";
import  Slytherin  from "../../assets/slytherin.jpg";
import noPfoto from '../../assets/noimage.jpg'
import "./Card.scss";

export const Card = ({ character }) => {
  const houses = [
    { name: "Gryffindor", img: Gryffindor },
    { name: "Hufflepuff", img: Hufflepuff },
    { name: "Ravenclaw", img: Ravenclaw },
    { name: "Slytherin", img: Slytherin },
  ];
  const houseImage = houses.find((house) => house.name === character.house)?.img;
  const navigate = useNavigate();
  function handleOnClick() {
    console.log(character.name);
    navigate(`/characters/${character.name}`);
  }
  return (
    <>
      <div className="card" onClick={handleOnClick}>
        <h2>{character.name}</h2>
        <img
          src={ character.image|| houseImage || noPfoto
          }
          alt={character.name}
        />
        <p>
          {" "}
          <b>House:</b> {character.house|| 'unknown'}
        </p>
        <p>
          {" "}
          <b>Data of Birth:</b> {character.dateOfBirth || 'unknown'}
        </p>
      </div>
    </>
  );
};
