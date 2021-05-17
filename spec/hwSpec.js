/////////////////////EJERCICIO 1/////////////////////
//Devuelve la suma de 1 a N. Por ejemplo,  Sum1toN(3) devolverá la suma de 1+2+3, la cual es 6
//sum1toN(255) devuelve la suma de todos los números de 1 a 255
function Sum1toN(n){
    var sum = 0;	
    if(n < 0){
		return false;        
		}
	for(i = 0; i <= n; i++){		
		if(i > 0){	
			sum = sum + i;			
		}	
	}
return sum;
}		
y = Sum1toN(255);			
console.log(y);		

//devuelve la suma del primer y último número en el array
function sumFirstLast(arr){
    var sum = 0;			
    for (i = 0; i < arr.length; i++) {				
            sum = arr[i]+arr[arr.length-1];	
            break;	
    }			
    return sum;	
}
console.log(sumFirstLast([1,2,3]));	

describe("Sum1toN", function() { 
    it("debería devolver 3 cuando pasamos 2 como argumento", function() { 
        expect(Sum1toN(2)).toEqual(3); 
    }); 
    it("debería devolver 6 cuando pasamos 3 como argumento", function() { 
        expect(Sum1toN(3)).toEqual(6); 
    }); 
    it("debería devolver 10 cuando pasamos 4 como argumento", function() { 
        expect(Sum1toN(4)).toEqual(10); 
    }); 
    it("debería devolver 32640 cuando pasamos 255 como argumento", function() { 
        expect(Sum1toN(255)).toEqual(32640); 
    }); 
    it("debería devolver false cuando pasamos -10 como argumento", function() { 
        expect(Sum1toN(-10)).toEqual(false); 
    }); 
});
    
describe("sumFirstLast", function() { 
    it("debería devolver 3 cuando pasamos [1,2] como argumento", function() { 
        expect(sumFirstLast([1,2])).toEqual(3); 
    }); 
    it("debería devolver 10 cuando pasamos [2,3,8] como argumento", function() { 
        expect(sumFirstLast([2,3,8])).toEqual(10); 
    }); 
    it("debería devolver -10 cuando pasamos [-6,23,3, -4] como argumento", function() { 
        expect(sumFirstLast([-6,23,3,-4])).toEqual(-10); 
    }); 
    it("debería devolver -2 cuando pasamos [1,23,3,-3] como argumento", function() { 
        expect(sumFirstLast([1,23,3,-3])).toEqual(-2); 
    });  
    it("debería devolver -5 cuando pasamos [-3,-2] como argumento", function() { 
        expect(sumFirstLast([-3,-2])).toEqual(-5); 
    });    
});

/////////////////////EJERCICIO 2/////////////////////
function sumMaxMin(x){
    var sum = 0;
    var mayorNum = x[0];	
    var menorNum = x[0];		
    for (i = 0; i < x.length; i++) {			
        if(x[i] > mayorNum){            		
            mayorNum = x[i];		
        }
        if(x[i] < menorNum){
            menorNum = x[i];
        }
    }			
    sum = mayorNum + menorNum;
    return sum;	
}
y = sumMaxMin([1,3,10]);
console.log(y);

describe("sumMaxMin", function() { 
    it("debería devolver 11 cuando pasamos [1,3,10] como argumento", function() { 
        expect(sumMaxMin([1,3,10])).toEqual(11); 
    }); 
    it("debería devolver -14 cuando pasamos [-2,-15,1] como argumento", function() { 
        expect(sumMaxMin([-2,-15,1])).toEqual(-14); 
    }); 
    it("debería devolver -12 cuando pasamos [-2,-5,-10] como argumento", function() { 
        expect(sumMaxMin([-2,-5,-10])).toEqual(-12); 
    }); 
    it("debería devolver 10 cuando pasamos [20,-5,-10] como argumento", function() { 
        expect(sumMaxMin([20,-5,-10])).toEqual(10); 
    });  
    it("debería devolver 20 cuando pasamos [20,0,10] como argumento", function() { 
        expect(sumMaxMin([20,0,10])).toEqual(20); 
    });    
});