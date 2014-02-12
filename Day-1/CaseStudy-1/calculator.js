function add(){
	function parseArg(n){
		if (!!n.length && typeof n !== "string"){
			var result = 0;
			for(var i=0;i<n.length;i++)
				result += parseArg(n[i]);
			return result;
		}
		if (typeof n === "function") return parseArg(n());
		if (isNaN(n)) return 0;
		return parseInt(n);	
	}
	var result = 0;
	for(var i=0;i<arguments.length;i++)
		result += parseArg(arguments[i]);
	return result;
}