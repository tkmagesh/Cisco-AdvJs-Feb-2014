function add(){
	function parseArg(n){
		if (!!n && !!n.length && typeof n !== "string") return add.apply(this,n)
		if (typeof n === "function") return parseArg(n());
		return isNaN(n) ? 0 : parseInt(n);	
	}
	return arguments.length <= 1 ? parseArg(arguments[0]) 
		: parseArg(arguments[0]) + add.apply(this,[].splice.call(arguments,1));
}