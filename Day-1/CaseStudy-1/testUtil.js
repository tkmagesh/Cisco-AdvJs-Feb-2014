function test(title,testCase){
		var resultStyle;
		try{
			resultStyle = testCase() ? "pass" : "fail";
		}
		catch (e){
			console.error(e);
			resultStyle = "fail"
		}
		
		var testItem = document.createElement("li");
		testItem.innerHTML = title;
		testItem.classList.add(resultStyle);
		document.getElementById("ulTestCaseList").appendChild(testItem);
	}