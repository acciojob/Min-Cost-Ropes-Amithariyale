function mincost(arr)
{ 
//write your code here
// return the min cost
	arr.sort((a,b)=>Number(a)-Number(b));
	let ans=0;
	while(arr.length>1){
		let first=arr.shift();
		let second=arr.shift();
		let sum=first+second;
		ans+=sum;
		arr.push(sum);
		arr.sort((a,b)=>Number(a)-Number(b));
	}
	  return ans;
	
}

module.exports=mincost;
