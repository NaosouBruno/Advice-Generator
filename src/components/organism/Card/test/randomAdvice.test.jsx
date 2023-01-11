import { render, screen } from "@testing-library/react";
import { Card } from "../index";
import userEvent from "@testing-library/user-event";

/* testar se já começa com um advice */

test("o card já começa um advice aleatório", async () => {
  render(<Card />);
  const dataId = await screen.findAllByTestId("random-advice");

  expect(dataId).not.toBeNull();
});

test("quando clicar no button deve gerar um novo advice", async () => {
  const user = userEvent.setup();

  render(<Card />);

  const buttonGenerator = screen.getByRole("button");

  await user.click(buttonGenerator);
  const newAdivce = await screen.findAllByTestId("random-advice");
  expect(newAdivce).not.toBeNull();
});
