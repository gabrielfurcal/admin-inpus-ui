export const toPascalCase = (text: string): string => {
    const words: string[] = text.split(' ');
    let result: string = '';

    words.forEach((word: string) => {
        result += word.charAt(0).toUpperCase() + word.slice(1, word.length).toLowerCase() + ' ';
    });

    return result.trimEnd();
}