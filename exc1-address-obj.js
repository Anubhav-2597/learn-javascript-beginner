const address = {
    street: 'stree 503,',
    city: 'Las Vegas',
    zipCode: '40158'
};

function showAddress(address){
    for(let key in address)
        console.log(key, address[key]);
}

showAddress(address);