export const dataAction = (name,lastName) => {
  return {
    type: "addelement",
    payload: {
      lastName: lastName,
      name: name
    },
  };
};