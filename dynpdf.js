let fs = require('fs');
let pdf = require('dynamic-html-pdf');
let html = fs.readFileSync('index.html', 'utf8');


let options = {
    format: "A3",
    orientation: "portrait",
    border: "10mm"
};

let data = [
    {
        Category: "customer",
        customerList: [
            {
                Name: "Sanatan bharadwaj",
                Location: "HSR Layout, Bengaluru, Karnataka 560102, India"
            },
        ],
        orderList: [
            {
                orderNo:123,
                placedAt:"January 1, 2015",
                deliveredAt:"January 1, 2015",
                placedBy:"Sanatan bharadwaj",
                placedFrom:"Burger king",
                items:[
                    {
                    itemName:"2 Chicken Chilli Cheese Melt",
                    itemQty:1,
                    itemPrice:199
                
                    },
                    {
                        itemName:" Chicken Cheese Melt",
                        itemQty:1,
                        itemPrice:199
                    
                        },
                    ]
                 }
                ],
         clientList: [
                    {
                        Name: "Burger King",
                        Location: "Sunny Road Sunnyville, CA 12345"
                    },
                ]

    }
    
];

let document = {
    type: 'file',     
    context: {
        data: data
    },
    path: "./outputnew.pdf"   
};

pdf.create(document, options)
    .then(res => {
        console.log(res)
    })
    .catch(error => {
        console.error(error)
    });