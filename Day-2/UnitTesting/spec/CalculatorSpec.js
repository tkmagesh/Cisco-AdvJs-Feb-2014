describe("calculator",function(){
	it("Adding two numbers",function(){
			//arrange
			var number1 = 10, number2 = 20;

			//act
			var result = add(number1,number2);

			//assert
			expect(result).toBe(30);
		});

		it("Adding two numbers in string format",function(){
			//arrange
			var number1 = "10", number2 = "a";

			//act
			var result = add(number1,number2);

			//assert
			console.log(result);
			expect(result).toBe(10);
		});

		it("Adding more than one number",function(){
			//arrange

			//act
			var result = add(10,20,30,40);

			//assert
			console.log(result);
			expect(result).toBe(100);
		});

		it("Should return 0 when no arguments are passed",function(){
			//arrange

			//act
			var result = add();

			//assert
			console.log(result);
			expect(result).toBe(0);
		});

		it("Should be able to add an array of numbers",function(){
			//arrange

			//act
			var result = add([10,20,30,40]);

			//assert
			console.log(result);
			expect(result).toBe(100);
		});

		it("Should be able to add a nested array of numbers",function(){
			//arrange

			//act
			var result = add([10,[20,[30,40]]]);

			//assert
			console.log(result);
			expect(result).toBe(100);
		});

		it("Should be able to add functions returning numbers",function(){
			//arrange
			var f1 = function(){ return 10;},
				f2 = function(){ return 20;};
			//act
			var result = add(f1,f2);

			//assert
			console.log(result);
			expect(result).toBe(30);
		});
		
		it("Should be able to add functions returning array of numbers",function(){
			//arrange
			var f1 = function(){ return [10,20];},
				f2 = function(){ return [30,40];};
			//act
			var result = add(f1,f2);

			//assert
			console.log(result);
			expect(result).toBe(100);
		});

		it("Should be able to add array of functions returning array of numbers",function(){
			//arrange
			var f1 = function(){ return [10,20];},
				f2 = function(){ return [30,40];};
			//act
			var result = add([f1,f2]);

			//assert
			console.log(result);
			expect(result).toBe(100);
		});
})
		
	