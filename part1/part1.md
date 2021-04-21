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

13. * A: 32, because + between an string '3' and number 2, would convert the number 2 into its string format '2' and add two string '3' and '2' together, which become 32 as a string.
    * B: 1, because - between an string '3' and number 2, would convert the string 3 into its number format 3, then perform the subtraction between the number 3 and number 2, which is number 1 as the result.
    * C: 3, because +  between the number 3 and the null, would convert null into its Numeric value 0. So it would become number 3 + number 0, which gives the result of number 3.
    * D: 3null, because + between the string '3' and the null, would convert the null into the string 'null', then perform the string addition, which is '3' + 'null' = '3null'.
    * E: 4, because + between the boolean value true and the number 3, would convert the boolean value true into its numeric value 1, then perform number 1 + number 3, which gives the number 4 as a result.
    * F: 0, because + between the boolean value false and the null, would convert the boolean value false into its numeric value 0. It would also convert the null into its numeric value 0 as well. Then 0 + 0 would be 0. 
    * G: 3undefined, because + between the string '3' and the undefined, would convert the undefined into the string 'undefined', then perform the string addition, which is '3' + 'undefined' = '3undefined'.
    * H: NaN, because - between an string '3' and the undefined, would convert the string 3 into its number format 3, and convert the undefined into its numeric value NaN. Then perform number 3 - NaN, which would gives NaN, because NaN stands for not a number. 

14. * A: true, because the comparison between the string '2' and number 1, would convert string '2' into its numeric value 2, then compare 2>1, which is true.
    * B: false, because the comparison between the string '2' and the string '12', would compare letter by letter, which means that it would compare '2' with '1' first. Since, '2' is greater than '1', so '2'<'12' would return false.
    * C: true,  because the comparison between the string '2' and number 2, would convert string '2' into its numeric value 2, then compare 2 == 2 , which is true.
    * D: false, becaue === would checks the equality without type conversion, which means that it would compare the number 2 with the string '2'. Obviosly, they are not equal, which means it is false. 
    * E: false, because the comparison between the boolean value true and the number 2, would convert the boolean value true into its numeric value 0, then perform 0 == 2, which is false.
    * F: true, because Boolean(2) would convert 2 into its boolean value true, then compare true === true, which is true.

15. == would compare the value between the two variables. If they are in different type, they would convert them into the same type first, and then compare their value. === checks the equality without type conversion. === not only compared the value, but also compare the type. 

16. part1b-question16.js

17. [2,4,6].  For the function modifyArray, it accepts [1,2,3] as an array input and doSomething as the callback function input. for each number in the [1,2,3] array, it would pass it as the parameter to the callback function, which is doSomething at this case. The return value from the callback function would be push into the newArr array. Finally, it would return the newArr array.

18. part1b-question18.js
19. 
- 1
- 4
- 3
- 2

