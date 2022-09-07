export const abilityModifierCalculation = (abilityScore) => {
  return Math.ceil((+abilityScore - 1) / 2 - 5);
};

export const challengeProficiencyBonus = (challengeRating) => {
  if (parseInt(challengeRating) === NaN) {
    return 2;
  } else {
    return Math.max(0, Math.ceil((challengeRating - 4) / 4)) + 2;
  }
};

export const skillModifierCalculation = (challengeRating, abilityNumber) => {
  const result =
    challengeProficiencyBonus(challengeRating) +
    abilityModifierCalculation(abilityNumber);
  return result;
};

export const challengeRatingXpTable = {
  0: 0,
  "1/8": 25,
  "1/4": 50,
  "1/2": 100,
  1: 200,
  2: 450,
  3: 700,
  4: 1100,
  5: 1800,
  6: 2300,
  7: 2900,
  8: 3900,
  9: 5000,
  10: 5900,
  11: 7200,
  12: 8400,
  13: 10000,
  14: 11500,
  15: 13000,
  16: 15000,
  17: 18000,
  18: 20000,
  19: 22000,
  20: 25000,
  21: 33000,
  22: 41000,
  23: 50000,
  24: 62000,
  25: 75000,
  26: 90000,
  27: 105000,
  28: 120000,
  29: 135000,
  30: 155000,
};

export const encounterXpTable = [
  { easy: 25, medium: 50, hard: 75, deadly: 100 },
  { easy: 50, medium: 100, hard: 150, deadly: 200 },
  { easy: 75, medium: 150, hard: 225, deadly: 400 },
  { easy: 125, medium: 250, hard: 375, deadly: 500 },
  { easy: 250, medium: 500, hard: 750, deadly: 1100 },
  { easy: 300, medium: 600, hard: 900, deadly: 1400 },
  { easy: 350, medium: 750, hard: 1100, deadly: 1700 },
  { easy: 450, medium: 900, hard: 1400, deadly: 2100 },
  { easy: 550, medium: 1100, hard: 1600, deadly: 2400 },
  { easy: 600, medium: 1200, hard: 1900, deadly: 2800 },
  { easy: 800, medium: 1600, hard: 2400, deadly: 3600 },
  { easy: 1000, medium: 2000, hard: 3000, deadly: 4500 },
  { easy: 1100, medium: 2200, hard: 3400, deadly: 5100 },
  { easy: 1250, medium: 2500, hard: 3800, deadly: 5700 },
  { easy: 1400, medium: 2800, hard: 4300, deadly: 6400 },
  { easy: 1600, medium: 3200, hard: 4800, deadly: 7200 },
  { easy: 2000, medium: 3900, hard: 5900, deadly: 8800 },
  { easy: 2100, medium: 4200, hard: 6300, deadly: 9500 },
  { easy: 2400, medium: 4900, hard: 7300, deadly: 10900 },
  { easy: 2800, medium: 5700, hard: 8500, deadly: 12700 },
];
