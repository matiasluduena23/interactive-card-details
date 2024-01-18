import { useState } from "react";
import Form from "./components/Form";
import Card from "./components/Card";

export default function App() {
  const [card, setCard] = useState({
    name: "jane applessed".toUpperCase(),
    number: "0000 0000 0000 0000",
    month: "00",
    year: "00",
    code: "000",
  });

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

  return (
    <main className="main-flex">
      <Card card={card} />
      <Form changeNumber={changeNumber} changeCard={changeCard} />
    </main>
  );
}
