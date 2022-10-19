import getAdvice from "../../../services/getAdvice";
import { useState, useEffect } from "react";

export function Card() {
  const [advice, setAdvice] = useState({ advices: "", id: "" });
  useEffect(() => {
    const fetch = async () => {
      let data = await getAdvice();
      setAdvice({
        ...advice,
        advices: data.advice,
        id: data.id,
      });
    };
    fetch();
  }, []);

  const reRender = async () => {
    let data = await getAdvice();
    setAdvice({
      ...advice,
      advices: data.advice,
      id: data.id,
    });
  };
  return (
    <div>
      <h1>Hello</h1>
      {advice.advices}
      <button onClick={reRender}>teste</button>
    </div>
  );
}
