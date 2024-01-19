export const cardInputProperties = {
  name: {
    input: {
      name: "Full Name",
      type: "text",
      tabIndex: 1,
      placeholder: "e.g. Jane Appleseed",
      onKeyDown: (e) => !e.key.match("[A-Za-z ]") && e.preventDefault(),
    },
    validationHookForm: {
      required: {
        value: true,
        message: "nombre es requerido",
      },
      minLength: {
        value: 4,
        message: "minimo 4 char",
      },
      pattern: {
        value: /[A-Za-z ]/,
        message: "Solo letras permitidas",
      },
    },
  },

  numberCard: {
    input: {
      type: "number",
      tabIndex: 2,
      name: "number",
      placeholder: "e.g. 1231 3131 3213 1318",
      onKeyDown: (e) =>
        e.target.value.length > 15 &&
        e.key !== "Backspace" &&
        e.preventDefault(),
    },
    validationHookForm: {
      required: {
        value: true,
        message: "numero es requerido",
      },
      minLength: {
        value: 16,
        message: "minimo 16 char",
      },
      pattern: {
        value: /[0-9 ]/,
        message: "Solo numeros permitidas",
      },
    },
  },

  month: {
    input: {
      type: "number",
      tabIndex: 3,
      name: "month",
      placeholder: "MM",
      onKeyDown: (e) =>
        e.target.value.length > 1 &&
        e.key !== "Backspace" &&
        e.preventDefault(),
    },
    validationHookForm: {
      required: {
        value: true,
        message: "numero es requerido",
      },
      maxLength: {
        value: 1,
        message: "minimo 16 char",
      },
      pattern: {
        value: /[0-9 ]/,
        message: "Solo numeros permitidas",
      },
    },
  },

  year: {
    input: {
      type: "number",
      tabIndex: 4,
      name: "year",
      placeholder: "YY",
      onKeyDown: (e) =>
        e.target.value.length > 1 &&
        e.key !== "Backspace" &&
        e.preventDefault(),
    },
    validationHookForm: {
      required: {
        value: true,
        message: "numero es requerido",
      },
      maxLength: {
        value: 1,
        message: "minimo 16 char",
      },
      pattern: {
        value: /[0-9 ]/,
        message: "Solo numeros permitidas",
      },
    },
  },

  code: {
    input: {
      type: "number",
      tabIndex: 5,
      name: "code",
      placeholder: "e.g. 123",
      onKeyDown: (e) =>
        e.target.value.length > 2 &&
        e.key !== "Backspace" &&
        e.preventDefault(),
    },
    validationHookForm: {
      required: {
        value: true,
        message: "numero es requerido",
      },
      maxLength: {
        value: 1,
        message: "minimo 16 char",
      },
      pattern: {
        value: /[0-9 ]/,
        message: "Solo numeros permitidas",
      },
    },
  },
};
