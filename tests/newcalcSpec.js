describe("Extra calculator functions", function() {
    describe("Area function", function() {
        it("should return 314.16 for a circle with radius 10", function() {
            expect(areaOfCircle(10)).toBe(314.16);
        });
        it("should return 78.54 for a circle with radius 5", function() {
            expect(areaOfCircle(5)).toBe(78.54);
        });
        it("should return an Error if argument is not a number", function() { //Added by Alex.
           expect(areaOfCircle("Fish")).toBe("Error"); 
        });
        it("should return an Error if argument is null", function() { //Added by Alex.
           expect(areaOfCircle()).toBe("Error"); 
        });
        it("should return an Error if more than one argument", function() { //Added by Alex.
           expect(areaOfCircle(10, 5)).toBe("Error"); 
        });
    });
    
    describe("Square Root function", function() {
        it("should return 3 for square root of 9", function() {
            expect(squareRoot(9)).toBe(3);
        });
    });
    
    describe("Square function", function() {
        it("should return 9 as the square of 3", function() {
            expect(squareMe(3)).toBe(9);
        });
        it("should return 16 as the square of 4", function() { //Added by Alex.
            expect(squareMe(4)).toBe(16);
        });
        it("should return an error if argument is not a number", function() { //Added by Alex.
           expect(squareMe("Fish")).toBe("Error"); 
        });
    });
    
//Added by Alex.    
    describe("Cube function", function() {
        it("should return 10 as the cube of 1000", function() {
           expect(cubeMe(1000)).toBe(10); 
        });
    });

//Added by Alex.    
    describe("Right-angle triangle function", function() {
        it("should return 21 for a right-angle triangle with base 6 and height 7", function() {
            expect(areaOfTriangle(6, 7)).toBe(21);
        });
    });

//Added by Alex.    
    describe("Years until 2073 function", function() {
        it("should return 55 as a modulo between 2073 and 2018", function() {
            expect(yearsRemaining(2073, 2018)).toBe(55);
        });
    });

});