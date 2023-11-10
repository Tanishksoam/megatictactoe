export default function checkWinner(matrix) {
  // Check rows
  for (let i = 0; i < 9; i += 3) {
    if (
      matrix[i] !== -1 &&
      matrix[i] === matrix[i + 1] &&
      matrix[i] === matrix[i + 2]
    ) {
      return matrix[i]; // We have a winner
    }
  }

  // Check columns
  for (let i = 0; i < 3; i++) {
    if (
      matrix[i] !== -1 &&
      matrix[i] === matrix[i + 3] &&
      matrix[i] === matrix[i + 6]
    ) {
      return matrix[i]; // We have a winner
    }
  }

  // Check diagonals
  if (matrix[0] !== -1 && matrix[0] === matrix[4] && matrix[0] === matrix[8]) {
    return matrix[0]; // We have a winner
  }

  if (matrix[2] !== -1 && matrix[2] === matrix[4] && matrix[2] === matrix[6]) {
    return matrix[2]; // We have a winner
  }

  // If no winner, check for a tie
  if (!matrix.includes(-1)) {
    return "Tie"; // It's a tie
  }

  // Game is still ongoing
  return null;
}

// Example usage:
