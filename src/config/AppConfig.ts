const ParseString = (val: string | undefined): string => {
  return val ?? "";
};

const ParseNumber = (val: string | undefined): number => {
  if (!val) return 0;
  const num = Number(val);
  if (isNaN(num)) return 0;
  return num;
};

const ParseBool = (val: string | undefined): boolean => {
  switch (val) {
    case "true":
    case "TRUE":
    case "1":
      return true;
    default:
      return false;
  }
};

export const AppConfig = {
  email: ParseString(process.env.NEXT_PUBLIC_EMAIL),
  githubLink: ParseString(process.env.NEXT_PUBLIC_GITHUB_LINK),
  linkedinLink: ParseString(process.env.NEXT_PUBLIC_GITHUB_LINK),
};
