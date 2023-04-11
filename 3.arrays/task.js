function compareArrays(arr1, arr2) {
  return arr1.length === arr2.length && arr1.every((item, idx) => item === arr2[idx])
}

function getUsersNamesInAgeRange(users, gender) {
  
  let result = users.filter(people => people.gender === gender).map(people => people.age).reduce((acc, age, idx, userAges) => acc + age / userAges.length, 0);
  return result 
}