fetch('http://localhost:8000/')
  .then(r => r.json()) 
  .then(console.log)