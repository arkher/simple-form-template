import { MAX_PASSWORD, MIN_PASSWORD } from "../constants";

export const validatePassword = (password: string) => {
  let isValid = false;

  if (password.length !== 6) {
    return false;
  }

  for (let i = 0; i < password.length - 1; i++) {
    if (password[i] === password[i + 1]) {
      isValid = true;
    }
  }

  for (let i = 0; i < password.length - 1; i++) {
    if (password[i] > password[i + 1]) {
      return false;
    }
  }

  if (parseInt(password) < MIN_PASSWORD || parseInt(password) > MAX_PASSWORD) {
    return false;
  }

  return isValid;
};
