function loadProducts() {
    let products = [
        {
            'id': 0,
            'name': '',
            'description': '',
            'price': 59.99,
            'pic': 'pro_img/1.jpg',
            'Stock': 200
        },
        {
            'id': 1,
            'name': '',
            'description': '',
            'price': 49.99,
            'pic': 'pro_img/2.jpg',
            'Stock': 133
        },
        {
            'id': 2,
            'name': '',
            'description': '',
            'price': 54.99,
            'pic': 'pro_img/3.jpg',
            'Stock': 544
        },
        {
            'id': 3,
            'name': '',
            'description': '',
            'price': 129.99,
            'pic': 'pro_img/4.jpg',
            'Stock': 14
        },
        {
            'id': 4,
            'name': '',
            'description': '',
            'price': 24.99,
            'pic': 'pro_img/5.jpg',
            'Stock': 655
        },
        {
            'id': 5,
            'name': '',
            'description': '',
            'price': 24.99,
            'pic': 'pro_img/6.jpg',
            'Stock': 321
        },
        {
            'id': 6,
            'name': '',
            'description': '',
            'price': 50,
            'pic': 'pro_img/7.jpg',
            'Stock': 321
        },
        {
            'id': 7,
            'name': '',
            'description': '',
            'price': 50,
            'pic': 'pro_img/8.jpg',
            'Stock': 321
        },
        {
            'id': 8,
            'name': '',
            'description': '',
            'price': 50,
            'pic': 'pro_img/9.jpg',
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