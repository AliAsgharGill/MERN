
// Select the database to use.
use('SigmaDatabase');

// Insert a few documents into the sales collection.
db.getCollection('courses').insertMany(
  [
    {
      "name": "JavaScript",
      "price": "20,000"
    },
    {
      "name": "React",
      "price": "25,000"
    },
    {
      "name": "Python",
      "price": "30,000"
    },
    {
      "name": "Node.js",
      "price": "22,000"
    },
    {
      "name": "Angular",
      "price": "28,000"
    },
    {
      "name": "Vue.js",
      "price": "27,000"
    },
    {
      "name": "TypeScript",
      "price": "24,000"
    },
    {
      "name": "HTML & CSS",
      "price": "15,000"
    },
    {
      "name": "Django",
      "price": "32,000"
    },
    {
      "name": "Flask",
      "price": "26,000"
    }
  ]
  
);

console.log(`Done Inserting Data`);
