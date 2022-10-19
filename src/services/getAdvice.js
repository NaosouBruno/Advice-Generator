async function getAdvice() {
  const baseUrl = "https://api.adviceslip.com/advice";

  const advice = await fetch(baseUrl);
  const adviceData = await advice.json();
  const advices = { advice: adviceData.slip.advice, id: adviceData.slip.id };
  console.log("json", advices);
  /*  advices.push(adviceData); */
  return advices;
}

export default getAdvice;
