import "./card.scss";

import getAdvice from "../../../services/getAdvice";
import { useState, useEffect } from "react";
import PartitionMobile from "../../atoms/PartitionLogo/PartitionMobile";
import PartitionDesktop from "../../atoms/PartitionLogo/PartitionDesktop";
import ButtonLogo from "../../atoms/ButtonLogo/ButtonLogo";
export function Card() {
  const [advice, setAdvice] = useState({ advices: "", id: "" });
  const [dimensions, setDimensions] = useState(false);
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
    const handleResize = () => {
      if (window.innerWidth > 500) {
        setDimensions(true);
      } else {
        setDimensions(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return (_) => {
      window.removeEventListener("resize", handleResize);
    };
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
      <span className="card--partitions">
        {dimensions ? <PartitionDesktop /> : <PartitionMobile />}
      </span>

      <button className="card--btnRandom" onClick={reRender}>
        <ButtonLogo />
      </button>
    </main>
  );
}
