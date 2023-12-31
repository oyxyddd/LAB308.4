//Part 1: Refactoring old code
const testString=`Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232`;
let dataArray = testString.split('\n');
let row = [];
for(let i = 0; i < dataArray.length; i++){
    row = dataArray[i].split(',');
    console.log(row);
}

//Part 2: Expanding Functionality 
const testString2='ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26';
let dataArray2 = testString2.split('\n');
dataArray2.forEach((row,i)=> {dataArray2.splice(i,1,row.split(','))});
console.log(dataArray2);

// Part 3: Transforming Data

const headingRow = dataArray2.shift()
headingRow.forEach((header,index) => {headingRow[index] = header.toLowerCase()});
const objectArray = [];
dataArray2.forEach((row) => {
    const objectRow={};
    row.forEach((item, index) => {objectRow[headingRow[index]]=item;});
    objectArray.push(objectRow);
})
console.log(objectArray);

//Part 4: Sorting and Manipulating Data
// 1. Remove the last element from the sorted array
objectArray.pop();

// 2. Insert an object at index 1
objectArray.splice(1,0,{ id: "48", name: "Barry", occupation: "Runner", age: "25" });

// 3. Add an object to the end of the array
objectArray.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });
console.log(objectArray);

// 4. Calculate average age of the group using a loop
let totalAge = 0;
for(let i = 0; i < objectArray.length; i++){
    totalAge += parseInt(objectArray[i].age);
}
const averageAge = totalAge / objectArray.length; 
console.log(averageAge);

// Part 5: Full Circle
csvData = '';
const header = Object.keys(objectArray[0]);
csvData += header.join(',') +'\n';

objectArray.forEach((row) => {
    let rowArray = [];
    for(let key in row){
     rowArray.push(row[key]);
    }
    csvData += rowArray.join(',') +'\n'
})
console.log(csvData)