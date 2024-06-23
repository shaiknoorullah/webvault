export const factorial = (n: number): number => {
    if (n < 0) {
        throw new Error('Factorial undefined for negative numbers');
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
};