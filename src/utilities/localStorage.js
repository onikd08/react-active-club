export const getDataFromLocalStorage = () => {
  let storedData = {};
  const localStorageData = localStorage.getItem("exercise-details");
  if (localStorageData) {
    storedData = JSON.parse(localStorageData);
  }
  return storedData;
};

export const storeDataInLocalStorage = (category, time) => {
  const storedData = getDataFromLocalStorage();
  storedData[category] = time;
  localStorage.setItem("exercise-details", JSON.stringify(storedData));
};

export const removeDataFromLocalStorage = () => {
  localStorage.removeItem("exercise-details");
};
