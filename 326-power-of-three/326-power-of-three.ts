function isPowerOfThree(n: number): boolean {
 let div = Math.log10(n)/Math.log10(3);
 return (div - Number.parseInt(div.toString()) === 0);
};