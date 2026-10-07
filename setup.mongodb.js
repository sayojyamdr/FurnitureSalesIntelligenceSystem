use("FurnitureSalesIntelligenceSystem");
db.categories.insertMany([
  {
    name: "Beds",
    description: "Beds and bed-related furniture"
  },
  {
    name: "Storage Furniture",
    description: "Cupboards, shoe racks and bookshelves"
  },
  {
    name: "Tables",
    description: "Dining, tea and study tables"
  },
  {
    name: "Chairs & Seating",
    description: "Office chairs, round chairs and stools"
  },
  {
    name: "Home Decor",
    description: "P-form, mandir, carpets and doormats"
  },
  {
    name: "Kitchen",
    description: "Kitchen storage and racks"
  },
  {
    name: "Mattresses",
    description: "Mattresses for beds"
  },
  {
    name: "Curtain & Clothing Accessories",
    description: "Curtain pipes and clothes hangers"
  },
  {
    name: "Furniture Materials",
    description: "Materials and parts used for furniture"
  }
]);

db.products.insertMany([
  {
    name: "P-Form",
    category: "Home Decor",
    price: 1500,
    unit: "piece",
    status: "Available"
  },
  {
    name: "Mandir",
    category: "Home Decor",
    price: 8500,
    unit: "piece",
    status: "Available"
  },
  {
    name: "Doormat",
    category: "Home Decor",
    price: 500,
    unit: "piece",
    status: "Available"
  },
  {
    name: "Kitchen Rack",
    category: "Kitchen",
    price: 4500,
    unit: "piece",
    status: "Available"
  },
  {
    name: "Carpet",
    category: "Home Decor",
    price: 4500,
    unit: "piece",
    status: "Available"
  },
  {
    name: "Mattress",
    category: "Mattresses",
    price: 12000,
    unit: "piece",
    status: "Available"
  },
  {
    name: "Low Bed",
    category: "Beds",
    price: 28000,
    unit: "piece",
    status: "Available"
  },
  {
    name: "Single Bed",
    category: "Beds",
    price: 32000,
    unit: "piece",
    status: "Available"
  },
  {
    name: "Double Bed",
    category: "Beds",
    price: 45000,
    unit: "piece",
    status: "Available"
  },
  {
    name: "Wooden Shoe Rack",
    category: "Storage Furniture",
    price: 7500,
    unit: "piece",
    status: "Available"
  },
  {
    name: "Bamboo Shoe Rack",
    category: "Storage Furniture",
    price: 3500,
    unit: "piece",
    status: "Available"
  },
  {
    name: "Tea Table",
    category: "Tables",
    price: 6500,
    unit: "piece",
    status: "Available"
  },
  {
    name: "Office Chair",
    category: "Chairs & Seating",
    price: 8500,
    unit: "piece",
    status: "Available"
  },
  {
    name: "Low Back Round Chair",
    category: "Chairs & Seating",
    price: 3500,
    unit: "piece",
    status: "Available"
  },
  {
    name: "Dining Table",
    category: "Tables",
    price: 45000,
    unit: "piece",
    status: "Available"
  },
  {
    name: "Wooden Cupboard",
    category: "Storage Furniture",
    price: 38000,
    unit: "piece",
    status: "Available"
  },
  {
    name: "Steel Cupboard",
    category: "Storage Furniture",
    price: 22000,
    unit: "piece",
    status: "Available"
  },
  {
    name: "Stool",
    category: "Chairs & Seating",
    price: 750,
    unit: "piece",
    status: "Available"
  },
  {
    name: "Study Table Mini",
    category: "Tables",
    price: 750,
    unit: "piece",
    status: "Available"
  },
  {
    name: "Curtain Pipe",
    category: "Curtain & Clothing Accessories",
    price: 1500,
    unit: "piece",
    status: "Available"
  },
  {
    name: "Steel Cloth Hanger",
    category: "Curtain & Clothing Accessories",
    price: 940,
    unit: "piece",
    status: "Available"
  },
  {
    name: "Bamboo Cloth Hanger",
    category: "Curtain & Clothing Accessories",
    price: 640,
    unit: "piece",
    status: "Available"
  },
  {
    name: "Ply for Bed",
    category: "Furniture Materials",
    price: 4500,
    unit: "piece",
    status: "Available"
  },
  {
    name: "Bookshelf",
    category: "Storage Furniture",
    price: 12000,
    unit: "piece",
    status: "Available"
  }
]);

db.customers.insertMany([
  {
    name: "Ram Nepal",
    phone: "9841234567",
    address: "Koteshwor, Kathmandu"
  },
  {
    name: "Sita Thapa",
    phone: "9860123456",
    address: "Baneshwor, Kathmandu"
  },
  {
    name: "Gopal Karki",
    phone: "9812345678",
    address: "Bhaktapur"
  },
  {
    name: "Nisha Gurung",
    phone: "9801234567",
    address: "Lalitpur"
  },
  {
    name: "Geeta Poudel",
    phone: "9851234567",
    address: "Kirtipur, Kathmandu"
  },
  {
    name: "Sunita Joshi",
    phone: "9821234567",
    address: "Maitidevi, Kathmandu"
  },
  {
    name: "Prakash Tamang",
    phone: "9865432109",
    address: "Kalanki, Kathmandu"
  },
  {
    name: "Manisha KC",
    phone: "9815674321",
    address: "Chabahil, Kathmandu"
  }
]);

db.users.insertMany([
  {
    name: "Vijaya Das Manandhar",
    username: "admin",
    password: "admin123",
    role: "admin"
  },
  {
    name: "Mohan Thami",
    username: "employee",
    password: "employee123",
    role: "employee"
  },
  {
    name: "Shyam Karki",
    username: "employee",
    password: "employee123",
    role: "employee"
  },
  {
    name: "Shankar Karki",
    username: "employee",
    password: "employee123",
    role: "employee"
  }
]);

db.sales.insertMany([
  {
    "invoiceNumber": "INV-001",
    "date": "2026-09-01",
    "customerName": "Ram Nepal",
    "items": [
      {
        "productName": "Double Bed",
        "quantity": 1,
        "unitPrice": 45000,
        "total": 45000
      },
      {
        "productName": "Mattress",
        "quantity": 1,
        "unitPrice": 12000,
        "total": 12000
      }
    ],
    "grandTotal": 57000,
    "paymentMethod": "Cash"
  },

  {
    "invoiceNumber": "INV-002",
    "date": "2026-09-03",
    "customerName": "Sita Thapa",
    "items": [
      {
        "productName": "Dining Table",
        "quantity": 1,
        "unitPrice": 45000,
        "total": 45000
      },
      {
        "productName": "Low Back Round Chair",
        "quantity": 4,
        "unitPrice": 3500,
        "total": 14000
      }
    ],
    "grandTotal": 59000,
    "paymentMethod": "Bank Transfer"
  },

  {
    "invoiceNumber": "INV-003",
    "date": "2026-09-05",
    "customerName": "Gopal Karki",
    "items": [
      {
        "productName": "Steel Cupboard",
        "quantity": 1,
        "unitPrice": 22000,
        "total": 22000
      },
      {
        "productName": "Bamboo Shoe Rack",
        "quantity": 1,
        "unitPrice": 3500,
        "total": 3500
      }
    ],
    "grandTotal": 25500,
    "paymentMethod": "Cash"
  },

  {
    "invoiceNumber": "INV-004",
    "date": "2026-09-07",
    "customerName": "Nisha Gurung",
    "items": [
      {
        "productName": "Office Chair",
        "quantity": 2,
        "unitPrice": 8500,
        "total": 17000
      },
      {
        "productName": "Study Table Mini",
        "quantity": 1,
        "unitPrice": 750,
        "total": 750
      }
    ],
    "grandTotal": 17750,
    "paymentMethod": "Cash"
  },

  {
    "invoiceNumber": "INV-005",
    "date": "2026-09-10",
    "customerName": "Geeta Poudel",
    "items": [
      {
        "productName": "Wooden Cupboard",
        "quantity": 1,
        "unitPrice": 38000,
        "total": 38000
      }
    ],
    "grandTotal": 38000,
    "paymentMethod": "Bank Transfer"
  },

  {
    "invoiceNumber": "INV-006",
    "date": "2026-09-12",
    "customerName": "Sunita Joshi",
    "items": [
      {
        "productName": "Single Bed",
        "quantity": 1,
        "unitPrice": 32000,
        "total": 32000
      },
      {
        "productName": "Mattress",
        "quantity": 1,
        "unitPrice": 12000,
        "total": 12000
      }
    ],
    "grandTotal": 44000,
    "paymentMethod": "Cash"
  },

  {
    "invoiceNumber": "INV-007",
    "date": "2026-09-14",
    "customerName": "Prakash Tamang",
    "items": [
      {
        "productName": "Tea Table",
        "quantity": 1,
        "unitPrice": 6500,
        "total": 6500
      },
      {
        "productName": "Low Back Round Chair",
        "quantity": 2,
        "unitPrice": 3500,
        "total": 7000
      }
    ],
    "grandTotal": 13500,
    "paymentMethod": "Cash"
  },

  {
    "invoiceNumber": "INV-008",
    "date": "2026-09-16",
    "customerName": "Manisha KC",
    "items": [
      {
        "productName": "Kitchen Rack",
        "quantity": 1,
        "unitPrice": 4500,
        "total": 4500
      },
      {
        "productName": "Doormat",
        "quantity": 2,
        "unitPrice": 500,
        "total": 1000
      }
    ],
    "grandTotal": 5500,
    "paymentMethod": "Cash"
  },

  {
    "invoiceNumber": "INV-009",
    "date": "2026-09-18",
    "customerName": "Ram Nepal",
    "items": [
      {
        "productName": "Low Bed",
        "quantity": 1,
        "unitPrice": 28000,
        "total": 28000
      },
      {
        "productName": "Mattress",
        "quantity": 1,
        "unitPrice": 12000,
        "total": 12000
      }
    ],
    "grandTotal": 40000,
    "paymentMethod": "Bank Transfer"
  },

  {
    "invoiceNumber": "INV-010",
    "date": "2026-09-20",
    "customerName": "Sita Thapa",
    "items": [
      {
        "productName": "Bookshelf",
        "quantity": 1,
        "unitPrice": 12000,
        "total": 12000
      },
      {
        "productName": "Study Table Mini",
        "quantity": 1,
        "unitPrice": 750,
        "total": 750
      }
    ],
    "grandTotal": 12750,
    "paymentMethod": "Cash"
  },

  {
    "invoiceNumber": "INV-011",
    "date": "2026-09-22",
    "customerName": "Gopal Karki",
    "items": [
      {
        "productName": "Double Bed",
        "quantity": 1,
        "unitPrice": 45000,
        "total": 45000
      },
      {
        "productName": "Ply for Bed",
        "quantity": 1,
        "unitPrice": 4500,
        "total": 4500
      }
    ],
    "grandTotal": 49500,
    "paymentMethod": "Bank Transfer"
  },

  {
    "invoiceNumber": "INV-012",
    "date": "2026-09-24",
    "customerName": "Geeta Poudel",
    "items": [
      {
        "productName": "Carpet",
        "quantity": 1,
        "unitPrice": 4500,
        "total": 4500
      },
      {
        "productName": "Mandir",
        "quantity": 1,
        "unitPrice": 8500,
        "total": 8500
      }
    ],
    "grandTotal": 13000,
    "paymentMethod": "Cash"
  },

  {
    "invoiceNumber": "INV-013",
    "date": "2026-09-26",
    "customerName": "Sunita Joshi",
    "items": [
      {
        "productName": "Dining Table",
        "quantity": 1,
        "unitPrice": 45000,
        "total": 45000
      }
    ],
    "grandTotal": 45000,
    "paymentMethod": "Cash"
  },

  {
    "invoiceNumber": "INV-014",
    "date": "2026-09-28",
    "customerName": "Manisha KC",
    "items": [
      {
        "productName": "Wooden Shoe Rack",
        "quantity": 1,
        "unitPrice": 7500,
        "total": 7500
      },
      {
        "productName": "Steel Cloth Hanger",
        "quantity": 4,
        "unitPrice": 940,
        "total": 3760
      },
      {
        "productName": "Bamboo Cloth Hanger",
        "quantity": 3,
        "unitPrice": 640,
        "total": 1920
      }
    ],
    "grandTotal": 13180,
    "paymentMethod": "Cash"
  },

  {
    "invoiceNumber": "INV-015",
    "date": "2026-09-30",
    "customerName": "Prakash Tamang",
    "items": [
      {
        "productName": "Office Chair",
        "quantity": 1,
        "unitPrice": 8500,
        "total": 8500
      },
      {
        "productName": "Tea Table",
        "quantity": 1,
        "unitPrice": 6500,
        "total": 6500
      },
      {
        "productName": "Doormat",
        "quantity": 1,
        "unitPrice": 500,
        "total": 500
      },
      {
        "productName": "Stool",
        "quantity": 2,
        "unitPrice": 750,
        "total": 1500
      }
    ],
    "grandTotal": 17000,
    "paymentMethod": "Cash"
  }
]);