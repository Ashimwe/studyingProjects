const shoes = ["Nike Jordan 1", "Yeezy Adidas", "Air Force 1"];
shoes[3] = "Congo";

const objectArr = [];

objectArr["name"] = "Ashimwe";
objectArr["age"] = 19;
objectArr["department"] = "Applied Mathematics";

const id = {
    name: "Ashimwe",
    age: 19,
    department: "Applied Mathematics"
};

function objectPrint(input){
    let output = "";
    for(let [key,value] of Object.entries(input)){
        output += `${key}: ${value} <br>`;
    }
    return output;
}

function arrayPrint(input)
{
    let output = "<ul>";
    for(let x = 0; x < input.length; x++){
    output += "<li>" + input[x] + "</li>";
}

output += "</ul>";
return output;
}

const lesAutreChaussures = ["Air Jordan 3 Fragment", "Jordan Future"];
document.getElementById("playground").innerHTML = shoes.copyWithin(3,3);

const multiArray = [[1,2], [3,4], [5,6]]
document.getElementById("playground").innerHTML = multiArray.flat().flatMap(x => [x,x * 10] );
const newShoes = shoes.concat('lesAutresChaussures');
document.getElementById("playground").innerHTML = 

