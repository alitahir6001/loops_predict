// Snippet 1 of 3

for(var num = 0; num < 15; num++){
    console.log(num);
}

// Output = All numbers from 1-14 (1, 2, 3, etc.). Does not include 15 because it was not num <=, which would include the last number


// Snippet 2 of 3


for(var i = 1; i < 10; i+=2){  // setting i to = 1, if 1 is less than 10 than add 2 to i.
    if(i % 3 == 0){  //if i modulous 3 (if i divided by 3 has a remainder of 0), then...
        console.log(i);  //log i.
    }
}

// Output = 3, 9  --> 1-2, 4-8, and 10 would not be console logged because the remainder is not zero. 



// Snippet 3

for(var j = 1; j <= 15; j++){  // starting at j which is set to 1, if 1 is less than or equal to 15, add 1 to j.
    if(j % 2 == 0){ // if j modulous 2 (if j divided by 2 leaves a remainder of 0)
        j+=2;  // Add two to j
    }
    else if(j % 3 == 0){  // Otherwise, if j modulous 3 (j divided by 3 leaves a remainder of 0), 
        j++;  // add one to j.
    }
    console.log(j);  //then log j.
}

// Output = 1, 4, 5, 8, 10, 11, 14, 16.  