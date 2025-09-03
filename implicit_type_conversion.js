// * 1.  [] + []  =  ""
// * 2.  [] + {}  =  '[object Object]'
// * 3.  {} + []  =  '[object Object]'
// * 4.  {} + {}  = '[object Object][object Object]'
// * 5.  [] == ![]  is true
// * 6.  null == undefined  is true
// * 7.  0 == '0'  is true
// * 8.  ' \t\n' == 0  is true
// * 9.  true + true  = 2
// * 10. '5' - - '2'  7
// * 11. [] == ''  is true
// * 12. [1,2,3] + [4,5,6]  is "1,2,34,5,6" 
// * 13. 0 || '0'  = '0'
// * 14. '0' && {}  = {}
// * 15. NaN == NaN  is false
// * 16. '' == false  is true
// * 17. ' \n' == 0  is true
// * 18. [null] == ''  is true
// * 19. [undefined] == 0  is true
// * 20. [] == 0 is true

console.log([undefined] == 0);
