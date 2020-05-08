import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  const { getByText } = render(<CheckoutForm />);
  const header = getByText(/checkout form/i);
  expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
  const { getByLabelText, getByText, getByTestId } = render(<CheckoutForm />);

  fireEvent.change(getByLabelText(/First Name:/i), {
    target: { value: "Gabriel" },
  });
  fireEvent.change(getByLabelText(/Last name:/i), {
    target: { value: "Romero" },
  });
  fireEvent.change(getByLabelText(/Address:/i), {
    target: { value: "5132 Coventry Lane" },
  });
  fireEvent.change(getByLabelText(/City:/i), {
    target: { value: "Gurnee" },
  });
  fireEvent.change(getByLabelText(/State:/i), {
    target: { value: "Illinois" },
  });
  fireEvent.change(getByLabelText(/Zip:/i), {
    target: { value: "60031" },
  });

  const checkoutBtn = getByTestId("checkout");
  fireEvent.click(checkoutBtn);

  const submitData = getByText(/Woo-hoo!/i);
  expect(submitData).toBeInTheDocument();
});
