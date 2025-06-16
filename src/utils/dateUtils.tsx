export const getDate = () => {
  const purchaseDate = new Date();
  return `${purchaseDate.getFullYear()}年${
    purchaseDate.getMonth() + 1
  }月${purchaseDate.getDate()}日`;
};
