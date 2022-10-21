import "./card.scss";
import getAdvice from "../../../services/getAdvice";
import { useState, useEffect } from "react";
import PartitionMobile from "../../atoms/PartitionLogo/PartitionMobile";
import ButtonLogo from "../../atoms/ButtonLogo/ButtonLogo";
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
    <main className="card">
      <div className="card--typography">
        <span className="card--typographyId">ADVICE #{advice.id}</span>
        <span className="card--typographyAdvice">"{advice.advices}"</span>
      </div>
      <PartitionMobile />

      <button className="card--btnRandom" onClick={reRender}>
        <ButtonLogo />
      </button>
    </main>
  );
}
