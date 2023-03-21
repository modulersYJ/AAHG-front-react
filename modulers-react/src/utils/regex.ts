// 대문자, 소문자, 숫자, 특수문자가 각각 하나 이상 포함되어 있는지 확인합니다.
export const validateRegex = (password: string): boolean => {
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSymbol = /[@$!%*#?&]/.test(password);

  console.log(
    "hasLowerCase : ",
    hasLowerCase,
    "hasNumber : ",
    hasNumber,
    "hasSymbol : ",
    hasSymbol,
    "hasUpperCase : ",
    hasUpperCase
  );
  if (hasUpperCase && hasLowerCase && hasNumber && hasSymbol) {
    return false;
  } else {
    return true;
  }
};
