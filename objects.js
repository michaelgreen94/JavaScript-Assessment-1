//1. Using dot and bracket notation modify the existing object values to replace the information with your own

var me = {
	'name': 'Jake Overall',
	'age': 29,
	'hair color': 'brown'
};

me.name = 'Michael Green'
me.age = '23'
me['hair color'] = 'reddish brown'

console.log(me)
console.clear()

//2. Iterate over the object to console.log the propery or key names. 

for (var key in me) {
	console.log(key, me[key])
}

console.log(Object.values(me))
console.clear()