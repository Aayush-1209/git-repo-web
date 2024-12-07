Question 1(Problem Set for Promises and Callbacks:) -
 1.>
function fetchUser(callback) {
    setTimeout(() => {
        const user = null; 
    
        if (user) {
            callback(user.name);
        } else {
            callback("No user found!"); 
        }
    }, 1000);
}
fetchUser((name) => console.log(name));

3.> ouput based question

function result1() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
        .then((todo) => {
            <!-- console.log("Todo Data:", todo); -->
            return fetch("https://jsonplaceholder.typicode.com/user/1");
        })
        .then((response) => response.json()) 
        .then((post) => {
            <!-- console.log("User Data:", post); -->
            const combinedResult = { todo, post }; 
            console.log("Combined Result:", combinedResult); it will combine upper res.
        })
        .catch((error) => console.error("Error:", error));
}
  result1();

4.>  Using async-await makes the same operation easier to read and understand
     because it work as synchronus function 
    example -->>
    i have used json placeholde 
     async function fetchresult2() {
    try {
        const userRe = await fetch("https://jsonplaceholder.typicode.com/users/1");
        const user = await userRes.json();
        console.log("User Data:", user);

        const postRes = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        const post = await postRes.json();
        console.log("Post Data:", post);

        const allRes = { user, post };
        console.log("Full res:", allRes);
    } catch (error) {
        console.error("Fetch error:", error);
    }
}

        fetchresult2();

Question 2. 2. (Map, Filter, Reduce & Method Chaining) 

1.>bug .>

const nums = [11, 20, 30 , 3 , 8 , 23 , 28];
const result = nums.map((n) => n+2).filter((n) => n%2===0); 
reult.reduce((acc , curr)=> acc+curr, 0 )
console.log(result);
    
    (bug was there no values passed to reduce and dividing each num by 0 using map )
     
    3.> ouput based

  
    const nums = [1, 2, 3, 4, 5];
     const result = nums
     .filter(n => n % 2 === 0)  
     .map(n => n * 2)           
     .reduce((acc, n) => acc + n, 0);       

      console.log(result);  

      4.>
      forEach() method iterates over an array and executes a function for each item, but it does not return anything.

      let arr = [1,2,3,4,5]

      arr.forEach((n)=>{
        console.log(n)
      })
      reduce() iterates over the array and returns a single value
      
      ex-
      let arr = [2,3,4,5,6]

      let sum = arr.reduce((acc,curr)=> acc+curr , 0)

      console.log(sum)

 Question 3.(Frequency Creation in Objects Using Reduce) 

 1.Bug.>
       
       const chars = "aabbc";
       const freq = chars.split("").reduce((acc, char) => {
       acc[char] = (acc[char] || 0)+1
       return acc;
         }, {}); 
       console.log(freq);
          in this initial value was missing 
         
3.>     
       let arr = [1,2,3,4,5]

        arr.reduce((acc, num) => {
            if (num % 2 === 0) {
              acc.even = (acc.even || 0) + 1;
            } else {
               acc.odd = (acc.odd || 0) + 1;
               }
               return acc;
            }, { odd: 0, even: 0 }); 
         ;

4.>  For counting frequencies we can use bot for loop and reduce method but traditional for loop method we udate each frequency manually by controlling count 
and reduce method do it implicittly , and syntax wise it is much more simpler    
     
Question 4 .> . Sort 

  1.>
   const nums = [1, 10, 2];
    nums.sort((a,b)=>a-b);
    console.log(nums);

  2.> const input = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 }]
     ;

   const sortedArray = input.sort((a, b) => b.age - a.age);

      console.log(sortedArray);

   3.> localeCompare() method in JavaScript to sort strings according to specific language rules,
    making it especially useful for handling case sensitivity, accents, and locale-specific sorting. 
       
   const fruits = ['apple', 'Banana', 'Mango', 'Apple', 'banana' ,'Blueberries','blackberries' ];
     fruits.sort((a, b) =>  b.localeCompare(a, 'en' , { sensitivity: 'base' }));
    console.log(fruits);
 output = > [
    'Mango',
    'Blueberries',
    'blackberries',
    'Banana',
    'banana',
    'apple',
    'Apple'
  ]
     
Question 5.>>

  1.Bug .> 
  const obj = {
    name: "Alice",
    greet : function () { 
        console.log(`Hello, ${this.name}`);
    }
};

obj.greet(); 
 ==>  .this method doesn't work in arrow function because it inherits this method and refers to global centext

2.> output based 

    function Person(name) {
    this.name = name;
    this.sayName = function () {
        console.log(`My name is ${this.name}`);
      };
    }

   const alice = new Person("Alice");
   alice.sayName(); ouput is = > My name is Alice 

3.>  bind: Creates a new function with this permanently bound to the specified object.
    call: Invokes a function immediately with this set to the specified object and arguments passed individually.
     apply: Similar to call, but arguments are passed as an array.


Question 6. Call bind apply 

1.>
     const obj = {
    num: 42,
    getNum() {
        return this.num;
    }
};

const detachedGetNum = obj.getNum.bind(obj); 
console.log(detachedGetNum()); // Output: 42
