const blockedWords = ['badword1', 'badword2'];

export const hasProfanity = (text = '') => {
  const normalized = text.toLowerCase();
  return blockedWords.some((word) => normalized.includes(word));
};

export const sanitizeMessage = (text = '') => text.trim();
