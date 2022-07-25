# The goal
is the dividing the given array into N (will be given) parts.
# Where the size of the original array cannot be divided equally by N
the final part should have a length equal to the remainder.

# Given problem
this is hard coded to the file because it's an interview question. The problem is to find the best way to divide the array. and the given array is ;
[1, 2, 3, 4, 5] and this is wanted to be divided into 3 equal parts.

# Expected output
[ [ 1, 2 ], [ 3, 4 ], [ 5 ] ]

# Solution
I created a function in shared folder to be called from the main file. 
Created a Higher order fuction to return a function that can be used a reducer function to achieve desired result.
In the reducer function I needed to know the 'mini array length' to be able to divide the array and leave the remainder size of element at the end.
So that's why I used Higher order function to fix given mini Array size and return a reducer function.

in the reducer fuction if  mod of the current index (mod with mini array legnth) is 0 then I pushed new list into that list so I can push the value in it. 

if  mod of the current index is not 0 then means I needed to find the last list in the main list and push the value into that. This achieved by using 
``` 
//finding the last list in the main list
prevVal[prevVal.length - 1].push(currArr);
```

and then I exported the main groupArrayElements so I can use it in the main file and return the result.


# How to Run
No need to download any packages, if you have already installed nodejs then you can run the file by typing in the terminal:
```
node index.js
```