export const random_item = (items) =>
   items[Math.floor(Math.random()*items.length)];

export const getRandomSubarray = (arr, length) => {
  if (length > arr.length) {
    throw new Error("Desired subarray length exceeds the array length.");
  }

  const randomIndex = Math.floor(Math.random() * (arr.length - length + 1));
  return arr.slice(randomIndex, randomIndex + length);
}