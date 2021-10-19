function add(numA, numB){
    return numA + numB;
}

function multiply(numA, numB){
    return numA * numB
}

let result, expected;


// Test framework

function test(message, callBack){
    try {
        callBack();
        console.log("test passed" , message)
    } catch (error) {
        console.error(error)
        console.log("test failed" , message)
    }
}



// Assertion library


function expect(actual){
    return {
        toEqual : function(expected){
            if(actual !== expected){
                throw new Error(`${actual} is not equal to ${expected}`)
            }
        },
        toBeEqual : function(expected){
            if(typeof actual !== expected){
                throw new Error(`${typeof result} is not equal to ${expected}`)
            }
        }
    };
}



// test("add 20 and 20", ()=> {
//     expect(add(20,20)).toEqual(40)
// });

// test("add 50 and 30", ()=> {
//     expect(add(50,30)).toEqual(80)
// });

// test("add 50 and 50", ()=> {
//     expect(add(50,50)).toBeEqual("number")
// });

// test("add 60 and 40", ()=> {
//     expect(add(60,40)).toEqual(100)
// });

// test("add 85 and 30", ()=> {
//     expect(add(85,30)).toBeEqual("number")
// });




// test("multiply 2 and 5", ()=> {
//     expect(multiply(2, 5)).toEqual(10)
// });

// test("multiply 10 and 5", ()=> {
//     expect(multiply(10, 5)).toBeEqual("number")
// })

// test("multiply 15 and 3", ()=> {
//     expect(multiply(15, 3)).toEqual(45)
// })

// test("multiply 20 and 5", ()=> {
//     expect(multiply(20, 5)).toEqual(100)
// })

// test("multiply 25 and 5", ()=> {
//     expect(multiply(25, 5)).toBeEqual("number")
// })









function testAdd(){
    result = add(20,20);
    expected = 40;
    if(result !== expected){
        throw new Error(`${result} is not equal to ${expected}`)
    }

    // if(typeof result !== expected){
    //     throw new Error(`${result} is not equal to ${expected}`)
    // }
}


test("add 20 and 20", testAdd)


function testmultiply(){
    result = multiply(5,5);
    expected = "number"
    if(typeof result !== expected){
        throw new Error(`${typeof result} is not equal to ${expected}`)
    }
}
test("multi 5 and 5", testmultiply)