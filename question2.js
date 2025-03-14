function delayedGreeting(name) {
  setTimeout(() => {
    console.log(`Hello, ${name}!`);
  }, 3000);
}

delayedGreeting("Marianne Mae");