// Opgave 1
function inputLength() {
    let placeholder = document.createElement('p');
    placeholder.textContent = 'Eksempel: Relativitetsteori';
    document.body.appendChild(placeholder);
    
    let input = document.createElement('input');
    document.body.appendChild(input);
    
    let inputted = document.createElement('p');
    document.body.appendChild(inputted)

    input.addEventListener('input', () => {
        let value = input.value;
        let trimmed = value.trim().replace(/\s/g, '');

        inputted.textContent = `${value} er ${trimmed.length} bogstaver langt`
    })
}

inputLength();

// Opgave 2
let customerInfo = {
    firstName: "Dan",
    lastName: "Mark",
    email: "none@ofyour.business",
    phoneNumber: "8 zeroes",
    address: "Who asked",
    zipCode: "99Nein9"
}

console.log(customerInfo);

// Opgave 3
function updateCustomerInfo(obj, key, newValue) {
    obj[key] = newValue;
    
    return obj;
}

let updatedCustomerZip = updateCustomerInfo(customerInfo, 'zipCode', 'Twenty90six')
console.log("Zip was updated to", updatedCustomerZip.zipCode);

// Opgave 4 stolen from teacher
function objectType(obj) {
    for(let item in obj) {
        console.log("Type: ", typeof obj[item]);
    }
}

objectType(customerInfo);