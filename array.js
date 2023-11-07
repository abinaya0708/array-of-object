var tops=[
	{
		id:1,
		size:"xl",
		fabric:"cotton",
		price:300,
		color:"red",
		sleeveLength:3/4
	},
	
	{
		id:2,
		size:"xl",
		fabric:"rayon",
		price:500,
		color:"purple",
		sleeveLength:3/4
	},
	
	{
		id:3,
		size:"xl",
		fabric:"cotton",
		price:350,
		color:"yellow",
		sleeveLength:"normal"
	},
	
	{
		id:4,
		size:"2xl",
		fabric:"cotton",
		price:400,
		color:"red",
		sleeveLength:3/4
	},
	
	{
		id:5,
		size:"xl",
		fabric:"cotton",
		price:300,
		color:"pink",
		sleeveLength:3/4
	},
	
	{
		id:6,
		size:"xl",
		fabric:"velvet",
		price:100,
		color:"yellow",
		sleeveLength:"normal"
	},
	
	{
		id:7,
		size:"xl",
		fabric:"cotton",
		price:400,
		color:"red",
		sleeveLength:3/4
	},
	
	{
		id:8,
		size:"2xl",
		fabric:"cotton",
		price:450,
		color:"red",
		sleeveLength:3/4
	},
	
	{
		id:9,
		size:"3xl",
		fabric:"velvet",
		price:800,
		color:"red",
		sleeveLength:3/4
	},
	
	{
		id:10,
		size:"xxl",
		fabric:"cotton",
		price:200,
		color:"white",
		sleeveLength:"normal"
	},

]

document.write("Array of object"+"<br>");

//filter red color

var result=tops.filter(function(e){
	return e.color=="red";
}
)
console.log(result);

document.write("Select red color------"+"<br>");
document.write(JSON.stringify(result)+"<br>");



//filter size above xl

var result=tops.filter(function(e){
	return e.size!="xl";
}
)
console.log(result);


document.write("Select size above xl------"+"<br>");
document.write(JSON.stringify(result)+"<br>");


//filter price under 500

var result=tops.filter(function(e){
	
	return e.price<500;	
	
})
console.log(result);



document.write("Select price under 500------"+"<br>");
document.write(JSON.stringify(result)+"<br>");

//change value-map

var result=tops.map(function(e){
	return e.color="red";
})

console.log(result);


document.write("Change all color to red----"+"<br>");
document.write(JSON.stringify(tops));
console.log(tops);