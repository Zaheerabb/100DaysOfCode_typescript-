// Question 141: Discuss the significance of the await reserved word in asynchronous JavaScript.

// Example use of the 'await' reserved word in asynchronous JavaScript
async function fetchData() {

    const Name = await getName();
    console.log(Name);
  }
  
  console.log(
    "The 'await' keyword allows asynchronous, promise-based behavior to be written in a cleaner, more linear fashion."
  );