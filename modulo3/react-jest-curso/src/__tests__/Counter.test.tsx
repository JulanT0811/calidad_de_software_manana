import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "../components/Counter";

describe("Counter", () => {
  test("debería mostrar el título 'Counter'", () => {
    render(<Counter />);
    const title = screen.getByRole("heading", { name: /counter/i });
    expect(title).toBeInTheDocument();
  });

  test("muestra initial por defecto en 0", () => {
    render(<Counter />);
    expect(screen.getByLabelText("count-value")).toHaveTextContent("0");
  });

  test("muestra initial personalizado", () => {
    render(<Counter initial={5} />);
    expect(screen.getByLabelText("count-value")).toHaveTextContent("5");
  });

  test("debería usar 0 si el valor initial es menor a 0", () => {
    render(<Counter initial={-10} />);
    expect(screen.getByLabelText("count-value")).toHaveTextContent("0");
  });

  test("incrementa y decrementa con clicks", async () => {
    const user = userEvent.setup();
    render(<Counter initial={1} />);

    await user.click(screen.getByRole("button", { name: "+1" }));
    expect(screen.getByLabelText("count-value")).toHaveTextContent("2");

    await user.click(screen.getByRole("button", { name: "-1" }));
    expect(screen.getByLabelText("count-value")).toHaveTextContent("1");
  });

  test("debería incrementar +5 cuando se hace click en el botón +5", async () => {
    const user = userEvent.setup();
    render(<Counter initial={0} />);
    const boton5 = screen.getByRole("button", { name: "+5" });
    await user.click(boton5);
    expect(screen.getByLabelText("count-value")).toHaveTextContent("5");
  });

  test("reset vuelve al initial", async () => {
    const user = userEvent.setup();
    render(<Counter initial={10} />);

    await user.click(screen.getByRole("button", { name: "-1" }));
    expect(screen.getByLabelText("count-value")).toHaveTextContent("9");

    await user.click(screen.getByRole("button", { name: "Reset" }));
    expect(screen.getByLabelText("count-value")).toHaveTextContent("10");
  });
});