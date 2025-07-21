export function chunk<T>(array: T[], size = 1) {
  const arrayChunks = [];
  for (let i = 0; i < array.length; i += size) {
    const chunk = array.slice(i, i + size);
    arrayChunks.push(chunk);
  }
  return arrayChunks;
}
