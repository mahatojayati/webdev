
// for loop - when you know the number of times the loop will run
for(let i = 1; i<=10; i++){
    
    if(i%2 === 0)
    {
        console.log("Even number", i);
        
    }
    else{
        console.log("Odd number", i);
        
    }
}

// while loop - checks the condition first, when number of steps is not confirm

let count = 0;
while (count < 3) {
  console.log(count);
  count++;
}

// do while loop - Runs once even though the condition is false


let i = 24;
do {
  console.log(i);
  i++;
} 
while (i < 5); 


const colors = ['red', 'green', 'blue'];

for (let i  = 0; i<=colors.length; i++)
{
    console.log(colors[i]);
    
}

