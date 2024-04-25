# Part 2
1. 3 is printed. The length of ```prices``` parameter is 3, so the for-loop stops when i=3. ```i``` was declared as a var, so it has function scope and is able to be printed outside the loop.
2. 150 is printed. The for-loop iterates through each of the prices, applies the discount, and stores in it ```discountedPrice```. Thus, when the loop ends, ```discountedPrice``` stores the last item in the list (300) with the calculation performed (150).
3. 150 is still printed. After the discounted price is calculated, the final price is rounded to be a whole number. Thus, when the loop ends, finalPrice stores the last ```discountedPrice``` calculated (150) with the rounding done (150).
4. [50, 100, 150] is returned. The function iterates through the prices [100, 200, 300], applies the discount (50%), rounds the number off, then returns the discounted prices as a list.
5. The code will error since ```i``` is now out-of-scope (let keyword gives it block scope limited to the for-loop).
6. The code will error since ```discountedPrice``` is now out-of-scope (let keyword gives it block scope limited to the for-loop).
7. 150 will be printed. Though ```finalPrice``` is now being created with the let keyword, it is not inside any other blocks, so it still has function scope. Thus, the behavior does not change.
8. [50, 100, 150] is returned. Similarly, the let keyword does not change the scope of discounted list in this example, so the behavior does not change.
9. The code will still error since ```i``` is now out-of-scope since the let keyword gives it block scope for the for-loop.
10. 3 is printed which is the length of the given ```prices``` parameter. It is a const variable with block scope that the code does not attempt to change.
11. [50, 100, 150] is returned. The const keyword did not change the scope of discounted list in this example. Pushing to an array is not the same thing as reassigning a variable, so that behavior is allowed.
12. notation:
    - A) ```student.name```
    - B) ```student['Grad Year']```
    - C) ```student.greeting()```
    - D) ```student['Favorite Teacher'].name```
    - E) ```student.courseLoad[0]```
13. arithmetic
    - A) '32'; the string was presented first, so the result was a concatenated string
    - B) 1; you cannot subtract strings, so the 3 was converted to an integer
    - C) 3; null can be interpreted as 0 when adding integers
    - D) '3null'; the null was cast as a string and concatenated
    - E) 4; true is mapped to 1, then added to 3
    - F) 0; false and null are both mapped to 0
    - G) '3undefined'; undefined is cast as a string and concatenated
    - H) NaN; undefined cannot be used in integer arithmetic
14. comparison
    - A) true; the character '2' is greater than '1'
    - B) false; the string '2' is less than '12'
    - C) true; '2' is converted to an integer which is equal to 2
    - D) false; the values's types are not converted, so they are unequal
    - E) false; true is converted to 1 which is not equal to 2
    - F) true; 2 is cast to a boolean. true is any non-zero number in JS
15. == is an equality operator that always attempts to type-convert. === is a strict equality operator, so the types are never converted before comparing.
16. see part2-question16.js
17. [2,4,6] is returned by modifyArray. It first iterates over the given array. Then, before pushing to a new array, each value is passed on to the parameter```doSomething()``` which doubles and returns each value
18. see part2-question18.js
19. 1 4 3 2 is printed. The line to print 1 is reached first, then 4 is printed because there is no timeout, then 3 is printed because it is set up with a timeout of 0ms but is executed after code with no timeouts is run, finally 2 is printed out with a timeout of 1000ms.
