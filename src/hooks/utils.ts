export const toPascalCase = (text: string): string => {
    const words: string[] = text.split(' ');
    let result: string = '';

    words.forEach((word: string) => {
        result += word.charAt(0).toUpperCase() + word.slice(1, word.length).toLowerCase() + ' ';
    });

    return result.trimEnd();
}

export function decodeJwtPayload<T = Record<string, unknown>>(token: string): T {
  const payload = token.split('.')[1];

  if (!payload) {
    throw new Error('Invalid JWT');
  }

  const decoded = atob(
    payload.replace(/-/g, '+').replace(/_/g, '/')
  );

  return JSON.parse(decoded);
}