import { useState } from "react";
import Form from "./components/Form";
import Card from "./components/Card";

export default function App() {
  const cardInicialValues = {
    name: "jane applessed".toUpperCase(),
    number: "0000 0000 0000 0000",
    month: "00",
    year: "00",
    code: "000",
  }
  const [isLoading, setIsLoading] = useState(false);
  const [card, setCard] = useState(cardInicialValues);

  const changeNumber = (newNumber) => {
    setCard({
      ...card,
      number: newNumber,
    });
  };

  const changeCard = (e) => {
    setCard({
      ...card,
      [e.target.name]: e.target.value.toUpperCase(),
    });
  };

  const sendForm = () => {
    setIsLoading(true)
    setTimeout(() => {
      setCard(cardInicialValues)
      setIsLoading(false)
    }, 3000)
  }

  return (
    <main className="main-flex">
      <Card card={card} />
      <Form changeNumber={changeNumber} changeCard={changeCard} sendForm={sendForm} />
      {isLoading &&
        <p className="send-form">Checking your card...</p>
      }


    </main>
  );
}
