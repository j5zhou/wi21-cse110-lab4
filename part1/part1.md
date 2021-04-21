## 1a 
### var declaration:
1. values added: 20
2. final result: 20

### let declaration:
1. values added: 20
2.  the code would return an error, because the variable result is not defined on the line 13. Using let to declare a variable, result only can be access in the if block. Outside the if block, the result varibale cannot be accese. Since it has an error, there is no output.

### const declaration:
1. the code would return an error: Assignment to constant variable. becasue we define result as an constant. And we try to assign an value to the constant variable result, so it would throw an error.
2. the code also would return an error: result is not defined. because we use the const to define the variable result. result would only be accessible on the if block. Outside the if block, the result variable is not  defined.

## 1b
1. it will print 3, because we use var to declare i, it is accessible on the function. we loop the i for 3 times, it would become 3. After the loop, we still could access the i variable.
2. it will print 150, because we also use var to declare discountedPrice in the for loop. So, discountedPrice could be access on the whole function. It will keep its latest value. The latest value would be price[3] * (1 - 0.5) = 150.
3. it will print 150, because we also use var to declare finalPrice in the function. So, finalPrice could be access anywhere inside the function. We update the finalPrice with its latest value with 150. 
4. it will return [50, 100, 150] as a list. Because for each time we calculate the finalPrice, which is the half value of the price, it would added into the discounted list. When we return the variable discounted, it would return this list.
5. the code also return an error: i is not defined. Because we use let to define the variable i in the for loop, which means that variable i only could be access within the for loop. When we try to access it outside the for loop, it would throw an error.
6. the code also return an error: discountedPrice is not defined. Because we use let to define the variable discountedPrice in the for loop, which means that variable discountedPrice only could be access within the for loop. When we try to access it outside the for loop, it would throw an error.
7. it would print 150. Although we use let to define the finalPrice, finalPrice is defined in the function. So it could access anywhere within the function. It would have no different with var to declare it.
8. it would return [50, 100, 150] as a list. Although we use let to define the discounted, discounted is defined in the function. So it could access anywhere within the function. It would have no different with var to declare it. When we return it, it would return [50, 100, 150].
9. the code also return an error: i is not defined. Because we use let to define the variable i in the for loop, which means that variable i only could be access within the for loop. When we try to access it outside the for loop, it would throw an error.
10. it would print 3. we use const to define a constant variable length with the value of prices.length, which is 3. Since we define it inside the function, we could access it anywhere within the function.
11. it would also return the list of [50, 100, 150]. Although we use const to declare the constant list, discounted. We still could perform some operation to modify the value inside the list, such as push, without changing the address of the list. However, we cannot reassign another list to discounted, because it would change the address of the list, which is not allowed for const list.
12. * A: student.name
    * B: student["Grad Year"]
    * C: student.greeting()
    * D: student['Favorite Teacher']['name']
    * E: student['courseLoad'][0]

13. 
