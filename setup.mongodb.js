use('FurnitureSalesIntelligenceSystem');
db.categories.insertMany([
    {
      "name":"Sofas",
      "description":"Sofa set and seating furniture"
    },
    {
        "name":"Beds",
        "descripton":"Singe, double and king-size beds"
    },
    {
        "name":"Tables",
        "description":"Dining, study and center tables"
    },
    {
        "name":"Chairs",
        "description":"Dining and office chairs"
    },
    {
        "name":"Wardrobes",
        "description":"Wooden wardrobes and storage furniture"
    }

])

db.products.insertMany([    
  {
    "name": "3-Seater Sofa",
    "category": "Sofas",
    "price": 38000,
    "status": "In Stock"
  },
  {
    "name": "5-Seater Sofa Set",
    "category": "Sofas",
    "price": 75000,
    "status": "In Stock"
  },
  {
    "name": "L-Shaped Sofa",
    "category": "Sofas",
    "price": 85000,
    "status": "In Stock"
  },
  {
    "name": "Single Bed",
    "category": "Beds",
    "price": 38000,
    "status": "In Stock"
  },
  {
    "name": "Double Bed",
    "category": "Beds",
    "price": 55000,
    "status": "In Stock"
  },
  {
    "name": "King Size Bed",
    "category": "Beds",
    "price": 75000,
    "status": "In Stock"
  },
  {
    "name": "6-Seater Dining Table",
    "category": "Tables",
    "price": 50000,
    "status": "In Stock"
  },
  {
    "name": "Center Table",
    "category": "Tables",
    "price": 12000,
    "status": "In Stock"
  },
  {
    "name": "Study Table",
    "category": "Tables",
    "price": 18000,
    "status": "In Stock"
  },
  {
    "name": "Dining Chair",
    "category": "Chairs",
    "price": 5000,
    "status": "In Stock"
  },
  {
    "name": "Office Chair",
    "category": "Chairs",
    "price": 8500,
    "status": "In Stock"
  },
  {
    "name": "Wooden Wardrobe",
    "category": "Wardrobes",
    "price": 38000,
    "status": "In Stock"
  },
  {
    "name": "Three-Door Wardrobe",
    "category": "Wardrobes",
    "price": 85000,
    "status": "In Stock"
  }
])

db.customers.insertMany([
  {
    "name": "Suresh Poudel",
    "phone": "9841234567",
    "address": "Koteshwor, Kathmandu"
  },
  {
    "name": "Sita Gajurel",
    "phone": "9860123456",
    "address": "Baneshwor, Kathmandu"
  },
  {
    "name": "Krishna Vaidya",
    "phone": "9812345678",
    "address": "Bhaktapur"
  },
  {
    "name": "Nisha Gurung",
    "phone": "9801234567",
    "address": "Kumaripati,Lalitpur"
  },
  {
    "name": "Ram Bajracharya",
    "phone": "9851234567",
    "address": "Kirtipur, Kathmandu"
  },
  {
    "name": "Niva Ranjit",
    "phone": "9821234567",
    "address": "Maitidevi, Kathmandu"
  }
])

db.users.insertMany(
    [
  {
    "name": "Vijaya Manandhar",
    "username": "admin",
    "password": "admin123",
    "role": "admin"
  },
  {
    "name": "Shyam Karki",
    "username": "employee01",
    "password": "employee1",
    "role": "employee"
  },
  {
    "name": "Mohan Dhami",
    "username": "employee02",
    "password": "employee2",
    "role": "employee"
  },
  {
    "name": "Shankar Karki",
    "username": "employee3",
    "password": "employee3",
    "role": "employee"
  }
])

db.sales.insertMany(
    [
  {
    "invoiceNumber": "INV-001",
    "date": "2026-08-01",
    "customerName": "Sita Gajurel",
    "items": [
      {
        "productName": "3-Seater Sofa",
        "quantity": 1,
        "unitPrice": 45000,
        "total": 45000
      }
    ],
    "grandTotal": 45000,
    "paymentMethod": "Cash"
  },
  {
    "invoiceNumber": "INV-002",
    "date": "2026-08-03",
    "customerName": "Suresh Poudel",
    "items": [
      {
        "productName": "Dining Chair",
        "quantity": 4,
        "unitPrice": 5000,
        "total": 20000
      },
      {
        "productName": "6-Seater Dining Table",
        "quantity": 1,
        "unitPrice": 50000,
        "total": 50000
      }
    ],
    "grandTotal": 70000,
    "paymentMethod": "Cash"
  },
  {
    "invoiceNumber": "INV-003",
    "date": "2026-08-05",
    "customerName": "Krishna Vaidya",
    "items": [
      {
        "productName": "Double Bed",
        "quantity": 1,
        "unitPrice": 55000,
        "total": 55000
      }
    ],
    "grandTotal": 55000,
    "paymentMethod": "Bank Transfer"
  },
  {
    "invoiceNumber": "INV-004",
    "date": "2026-08-08",
    "customerName": "Nisha Gurung",
    "items": [
      {
        "productName": "Office Chair",
        "quantity": 2,
        "unitPrice": 8500,
        "total": 17000
      },
      {
        "productName": "Study Table",
        "quantity": 1,
        "unitPrice": 18000,
        "total": 18000
      }
    ],
    "grandTotal": 35000,
    "paymentMethod": "Cash"
  },
  {
    "invoiceNumber": "INV-005",
    "date": "2026-08-10",
    "customerName": "Ram Bajracharya",
    "items": [
      {
        "productName": "5-Seater Sofa Set",
        "quantity": 1,
        "unitPrice": 75000,
        "total": 75000
      }
    ],
    "grandTotal": 75000,
    "paymentMethod": "Bank Transfer"
  },
  {
    "invoiceNumber": "INV-006",
    "date": "2026-08-13",
    "customerName": "Niva Ranjit",
    "items": [
      {
        "productName": "Single Bed",
        "quantity": 1,
        "unitPrice": 38000,
        "total": 38000
      },
      {
        "productName": "Wooden Wardrobe",
        "quantity": 1,
        "unitPrice": 38000,
        "total": 38000
      }
    ],
    "grandTotal": 76000,
    "paymentMethod": "Cash"
  },
  {
    "invoiceNumber": "INV-007",
    "date": "2026-08-15",
    "customerName": "Suresh Poudel",
    "items": [
      {
        "productName": "Center Table",
        "quantity": 1,
        "unitPrice": 12000,
        "total": 12000
      },
      {
        "productName": "3-Seater Sofa",
        "quantity": 1,
        "unitPrice": 45000,
        "total": 45000
      }
    ],
    "grandTotal": 57000,
    "paymentMethod": "Cash"
  },
  {
    "invoiceNumber": "INV-008",
    "date": "2026-08-18",
    "customerName": "Krishna Vaidya",
    "items": [
      {
        "productName": "3-Seater Sofa",
        "quantity": 2,
        "unitPrice": 45000,
        "total": 90000
      }
    ],
    "grandTotal": 90000,
    "paymentMethod": "Bank Transfer"
  },
  {
    "invoiceNumber": "INV-009",
    "date": "2026-08-22",
    "customerName": "Niva Ranjit",
    "items": [
      {
        "productName": "King Size Bed",
        "quantity": 1,
        "unitPrice": 75000,
        "total": 75000
      }
    ],
    "grandTotal": 75000,
    "paymentMethod": "Cash"
  },
  {
    "invoiceNumber": "INV-010",
    "date": "2026-08-25",
    "customerName": "Nisha Gurung",
    "items": [
      {
        "productName": "Dining Chair",
        "quantity": 6,
        "unitPrice": 5000,
        "total": 30000
      }
    ],
    "grandTotal": 30000,
    "paymentMethod": "Cash"
  },
  {
    "invoiceNumber": "INV-011",
    "date": "2026-08-28",
    "customerName": "Sita Gajurel",
    "items": [
      {
        "productName": "Three-Door Wardrobe",
        "quantity": 1,
        "unitPrice": 85000,
        "total": 85000
      }
    ],
    "grandTotal": 85000,
    "paymentMethod": "Bank Transfer"
  },
  {
    "invoiceNumber": "INV-012",
    "date": "2026-08-30",
    "customerName": "Suresh Poudel",
    "items": [
      {
        "productName": "3-Seater Sofa",
        "quantity": 1,
        "unitPrice": 45000,
        "total": 45000
      },
      {
        "productName": "Center Table",
        "quantity": 1,
        "unitPrice": 12000,
        "total": 12000
      }
    ],
    "grandTotal": 57000,
    "paymentMethod": "Cash"
  }
]
)
