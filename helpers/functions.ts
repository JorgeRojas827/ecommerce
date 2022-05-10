export const firstLetterUppercase = (s: string) => {
    return s.charAt(0).toUpperCase() + s.slice(1)
}

export const removeLastLetter = (s: string) => {
    return s.substring(0, s.length - 1)
}