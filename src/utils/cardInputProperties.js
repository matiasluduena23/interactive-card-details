
export const cardInputProperties = {
  name: {
    input: {
      label: 'cardholder name',
      name: "name",
      type: "text",
      tabIndex: 1,
      placeholder: "e.g. Jane Appleseed",
      onKeyDown: (e) => !e.key.match("[A-Za-z ]") && e.preventDefault(),
    },
    validationHookForm: {
      required: {
        value: true,
        message: "Can't be blank",
      },
      minLength: {
        value: 4,
        message: "Minimun 4 character",
      },
      pattern: {
        value: /[A-Za-z ]/,
        message: "Just letters",
      },
    },
  },

  numberCard: {
    input: {
      label: 'card number',
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
        message: "Can't be blank",
      },
      minLength: {
        value: 16,
        message: "16 numbers",
      },
      pattern: {
        value: /[0-9 ]/,
        message: "Wrong format, numbers only",
      },
    },
  },

  month: {
    input: {
      label: 'exp.date(mm/yy)',
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
        message: "Can't be blank",
      },
      pattern: {
        value: /[0-9 ]/,
        message: "Numbers only",
      },
    },
  },

  year: {
    input: {
      label: '',
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
        message: "Can't be blank",
      },
      pattern: {
        value: /[0-9 ]/,
        message: "Numbers only",
      },
    },
  },

  code: {
    input: {
      label: 'cvc',
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
        message: "Can't be blank",
      },
      minLength: {
        value: 2,
        message: "Minimo 3 char",
      },
      pattern: {
        value: /[0-9 ]/,
        message: "Just Numbers",
      },
    },
  },
};
