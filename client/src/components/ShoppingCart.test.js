import React from "react";
import { render } from "@testing-library/react";
import ShoppingCart from "./ShoppingCart";

const plants = [
  {
    description:
      "Rosalia is a stunner with glossy green leaves accompanied by bright red undersides. Her oval shaped leaves are deeply grooved, adding depth to her figure. Flower spikes will appear with bright light, adding even more character to this absolute beaut.",
    difficulty: "easy",
    id: 143,
    img:
      "https://cdn.shopify.com/s/files/1/2781/9558/products/PEPEROMIA_ROSSO-1_800x.png?v=1587156590",
    light: "direct",
    name: "Peperomia Rosso",
    price: 21,
    scientificName: "Peperomia caperata rosso",
  },
  {
    description:
      "Flipper's trailing stems are full of glossy succulent leaves, reminiscent to a pod of breaching dolphins. Flipper hails from South Africa, so he thrives in warm environments with lots of sun. This dolphin doesn't need too much water to thrive, making him low maintenance and easy to love.",
    difficulty: "easy",
    id: 125341,
    img:
      "https://cdn.shopify.com/s/files/1/2781/9558/products/SUCCULENT_DOLPHINS-1_800x.png?v=1587613674",
    light: "direct",
    name: "String of Dolphins",
    price: 15,
    scientificName: "Senecio peregrinus",
  },
];

test("displays plants in cart", () => {
  const { getByText } = render(<ShoppingCart cart={plants} />);
  const peperomiaPlant = getByText(/Peperomia Rosso/i);
  expect(peperomiaPlant).toBeInTheDocument();

  const dolphinsPlant = getByText(/String of Dolphins/i);
  expect(dolphinsPlant).toBeInTheDocument();
});
