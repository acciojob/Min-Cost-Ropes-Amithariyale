function mincost(arr)
{ 
//write your code here
// return the min cost
	arr.sort((a,b)=>Number(a)-Number(b));
	while(arr.length>1){
		let first=arr.shift();
		let second=arr.shift();
		arr.push(first+second);
		arr.sort((a,b)=>Number(a)-Number(b));
	}
	  return arr[0];
}
module.exports=mincost;
