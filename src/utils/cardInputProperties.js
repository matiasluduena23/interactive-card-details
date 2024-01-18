export const cardInputProperties = {
  nameProps: {
    type: "text",
    tabIndex: 1,
    name: "name",
    placeholder: "e.g. Jane Appleseed",
    onKeyDown: (e) => !e.key.match("[A-Za-z ]") && e.preventDefault(),
  },

  numberProps: {
    type: "number",
    tabIndex: 2,
    name: "number",
    placeholder: "e.g. 1231 3131 3213 1318",
    onKeyDown: (e) =>
      e.target.value.length > 15 && e.key !== "Backspace" && e.preventDefault(),
  },

  monthProps: {
    type: "number",
    tabIndex: 3,
    name: "month",
    placeholder: "MM",
    onKeyDown: (e) =>
      e.target.value.length > 1 && e.key !== "Backspace" && e.preventDefault(),
  },

  yearProps: {
    type: "number",
    tabIndex: 4,
    name: "year",
    placeholder: "YY",
    onKeyDown: (e) =>
      e.target.value.length > 1 && e.key !== "Backspace" && e.preventDefault(),
  },

  codeProps: {
    type: "number",
    tabIndex: 5,
    name: "code",
    placeholder: "e.g. 123",
    onKeyDown: (e) =>
      e.target.value.length > 2 && e.key !== "Backspace" && e.preventDefault(),
  },
};
