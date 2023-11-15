function countPrimeNumbers () 

{
  let count = 0;
  for (let i = 2; i < 100; i++) 
{
    if (isPrime(i))
      count++;
}
  return count;
}
