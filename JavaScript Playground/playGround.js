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

document.getElementById("playground").innerHTML = arrayPrint(shoes);
document.getElementById("playground").innerHTML = objectPrint(id);
document.getElementById("playground").innerHTML = arrayPrint(shoes);
document.getElementById("playground").innerHTML = shoes.toString();