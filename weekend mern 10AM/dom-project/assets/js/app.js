class ProductList {
    products = [
        {
            "image": "assets/images/image1.jpg",
            "title": "Fasfadsf",
            "description": "Fasfsadf"
        },
        {
            "image": "assets/images/image1.jpg",
            "title": "Fasfadsf",
            "description": "Fasfsadf"
        },
        {
            "image": "assets/images/image1.jpg",
            "title": "Fasfadsf",
            "description": "Fasfsadf"
        },
        {
            "image": "assets/images/image1.jpg",
            "title": "Fasfadsf",
            "description": "Fasfsadf"
        },
        {
            "image": "assets/images/image1.jpg",
            "title": "Fasfadsf",
            "description": "Fasfsadf"
        }
    ]

    render() {
        const root = document.getElementById('root');

        for (const index in this.products) {

            const productEL = new Product(this.products[index],index);

            const cardEl = productEL.render();

            root.append(cardEl);
        }
    }
}

class Product {
    constructor(product,index) {
        this.product = product;
        this.index = index;
    }

    clickMe = (event) => {
        console.log(this.product);
        console.log("click me");
    }

    render() {
        const card = document.createElement('div');
        card.className = "card";
        card.style.width = "18rem"

        const img = document.createElement('img');
        img.className = "card-img-top"
        img.src = this.product.image

        const cardBody = document.createElement('div');
        cardBody.className = "card-body";

        const h5 = document.createElement('h5');
        h5.className = "card-title"
        h5.innerHTML = this.product.title

        const p = document.createElement('p')
        p.className = "card-text";
        p.innerHTML = this.product.description

        const button = document.createElement('button')
        button.id = `card-${this.index}`
        button.className = "btn btn-primary btn-lg btn-block"
        button.innerHTML = "Click Me!"

        cardBody.append(h5);
        cardBody.append(p);
        cardBody.append(button)

        card.append(img);
        card.append(cardBody)

        let buttonId = document.getElementById(`card-${this.index}`);
        document.addEventListener('click',this.clickMe)

        return card;
    }
}

const productList = new ProductList();
productList.render();