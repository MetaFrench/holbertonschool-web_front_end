function countPrimeNumbers() {
    let primes = [];
    for (let i = 2; i <= 100; i++) {
        let isPrime = true;
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            primes.push(i);
        }
    }
    return primes.length;
}

const startTime = performance.now();
const primeCount = countPrimeNumbers();
const endTime = performance.now();

