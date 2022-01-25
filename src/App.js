import { useEffect, useState } from "react";
import CardAllergies from "./Components/Card/CardAllergies";
import CardBegin from "./Components/Card/CardBegin";
import CardDiet from "./Components/Card/CardDiet";
import CardEnd from "./Components/Card/CardEnd";
import CardHealthy from "./Components/Card/CardHealthy";
import CardLove from "./Components/Card/CardLove";
import Stepper from "./Components/Stepper/Stepper";

function App() {
  const [width, setWidth] = useState(0);
  const [element, setElement] = useState(0);
  const [answer, setAnswer] = useState({
    healthy: '',
    love: [],
    allergies: [],
    diet: {}
  });

  useEffect(() => {
    element === 0 ?
      setWidth(0)
      :
      setWidth((element - 1) * 25)
  }, [element]);


  const writeAnswer = (index, data) => {
    setElement(index)


    if (data) {
      const newData = { ...answer }
      const firstPropObjet = Object.keys(data)

      newData[firstPropObjet] = data[firstPropObjet]
      setAnswer(newData)
    }
  }

  const elements = [
    <CardBegin onclick={writeAnswer} />,
    <CardHealthy onclick={writeAnswer} />,
    <CardLove onclick={writeAnswer} />,
    <CardAllergies onclick={writeAnswer} />,
    <CardDiet onclick={writeAnswer} />,
    <CardEnd onclick={writeAnswer} data={answer} />
  ]

  return (
    <div className="app">
      <Stepper width={width} />
      {elements[element]}
    </div>
  );
}

export default App;
