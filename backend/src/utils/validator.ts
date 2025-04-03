export const validator = {
  isValidUserId: (id: string) => /^[0-9]+$/.test(id),
  isValidToken: (token: string) => token.length > 0 && /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+$/.test(token),
};
