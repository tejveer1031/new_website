function loadProducts() {
    let products = [
        {
            'id': 0,
            'name': 'Red Jersey',
            'description': 'Manchester United Home Jersey, red, sponsored by Chevrolet',
            'price': 59.99,
            'pic': 'football1.jfif',
            'Stock': 200
        },
        {
            'id': 1,
            'name': 'White Jersey',
            'description': 'Manchester United Away Jersey, white, sponsored by Chevrolet',
            'price': 49.99,
            'pic': 'football2.jfif',
            'Stock': 133
        },
        {
            'id': 2,
            'name': 'Black Jersey',
            'description': 'Manchester United Extra Jersey, black, sponsored by Chevrolet',
            'price': 54.99,
            'pic': 'football3.jfif',
            'Stock': 544
        },
        {
            'id': 3,
            'name': 'Blue Jacket',
            'description': 'Blue Jacket for cold and raniy weather',
            'price': 129.99,
            'pic': 'football4.jfif',
            'Stock': 14
        },
        {
            'id': 4,
            'name': 'Snapback Cap',
            'description': 'Manchester United New Era Snapback Cap- Adult',
            'price': 24.99,
            'pic': 'football5.jfif',
            'Stock': 655
        },
        {
            'id': 5,
            'name': 'Champion Flag',
            'description': 'Manchester United Champions League Flag',
            'price': 24.99,
            'pic': 'football6.jfif',
            'Stock': 321
        }
    ];
    for (var x=0;x<products.length;x++) {
        if(products[x].Stock<=0){
            continue;
        }
        
        let yesss3 = document.createElement('div');
        yesss3.classList.add("product");
        let img = document.createElement('img');
        img.classList.add('img');
        img.alt = products[x].name;
        img.src =   products[x].pic;
        let pname = document.createElement('p');
        pname.className = "name";
        pname.innerText = products[x].name;
        let yess4 = document.createElement('p');
        yess4.className = "description";
        yess4.innerText = products[x].description;
        let yess2 = document.createElement('p');
        yess2.className = "price";
        yess2.innerText = products[x].price;
        let button = document.createElement('button');
        button.className = "button_grey";
        button.innerText = "BUY";



        yesss3.appendChild(img);
        yesss3.appendChild(pname);
        yesss3.appendChild(yess4);
        yesss3.appendChild(yess2);
        yesss3.appendChild(button);
        document.getElementById("container").appendChild(yesss3);


    }
}