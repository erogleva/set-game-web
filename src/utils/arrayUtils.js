// @flow

export function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function shuffleArray(array) {

  const shuffled = [...array];

  for (let i = shuffled.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
}

export function checkIfMatrixContainsItem(matrix: Array<Array<string>>, arr: Array<string>): boolean {
  return matrix.some(r => r.length === arr.length &&
      r.every((value, index) => arr[index] === value));
}

export function equals(a1, a2) {
    return a1.length === a2.length && a1.every((e,i) => e === a2[i])
}

