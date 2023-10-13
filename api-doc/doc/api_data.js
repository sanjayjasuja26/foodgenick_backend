define({ "api": [
  {
    "type": "post",
    "url": "/foodgienic/blog",
    "title": "Add Blog",
    "name": "Add_Blog",
    "group": "Content",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>Title <code>Mendatory</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "image",
            "description": "<p>Image <code>Mendatory</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": "<p>Description <code>Mendatory</code>.`.</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Authorization.</p>"
          }
        ]
      }
    },
    "description": "<p>Content Service..</p>",
    "version": "0.0.0",
    "filename": "src/controller/foodgenicContentController.js",
    "groupTitle": "Content",
    "sampleRequest": [
      {
        "url": "https://foodgienic.com/api/foodgienic/blog"
      }
    ]
  },
  {
    "type": "post",
    "url": "/foodgienic/content",
    "title": "Add Content",
    "name": "Add_Content",
    "group": "Content",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "home_page_sections",
            "description": "<p>HomePageSections of User <code>Mendatory</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "about_page_sections",
            "description": "<p>AboutPageSections of User <code>Mendatory</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "price_page_sections",
            "description": "<p>PricePageSections of User <code>Mendatory</code>.`.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "service_page_sections",
            "description": "<p>ServicePageSections of User <code>Mendatory</code>.`.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "blog_page_sections",
            "description": "<p>Blog_page_sections of User <code>Mendatory</code>.`.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "partners_page_sections",
            "description": "<p>Partners_page_sections of User <code>Mendatory</code>.`.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "type",
            "description": "<p>Type of User <code>Mendatory</code>.</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Authorization.</p>"
          }
        ]
      }
    },
    "description": "<p>Content Service..</p>",
    "version": "0.0.0",
    "filename": "src/controller/foodgenicContentController.js",
    "groupTitle": "Content",
    "sampleRequest": [
      {
        "url": "https://foodgienic.com/api/foodgienic/content"
      }
    ]
  },
  {
    "type": "get",
    "url": "/foodgienic/getAllBlog",
    "title": "GetAllBlog",
    "name": "GetAllBlog",
    "group": "Content",
    "description": "<p>Content Service..</p>",
    "version": "0.0.0",
    "filename": "src/controller/foodgenicContentController.js",
    "groupTitle": "Content",
    "sampleRequest": [
      {
        "url": "https://foodgienic.com/api/foodgienic/getAllBlog"
      }
    ]
  },
  {
    "type": "get",
    "url": "/foodgienic/getcontent",
    "title": "GetAllContent",
    "name": "GetAllContent",
    "group": "Content",
    "description": "<p>Content Service..</p>",
    "version": "0.0.0",
    "filename": "src/controller/foodgenicContentController.js",
    "groupTitle": "Content",
    "sampleRequest": [
      {
        "url": "https://foodgienic.com/api/foodgienic/getcontent"
      }
    ]
  },
  {
    "type": "get",
    "url": "/foodgienic/blogDetails/:id",
    "title": "Blog Details",
    "group": "Content",
    "description": "<p>Content Service..</p>",
    "version": "0.0.0",
    "filename": "src/controller/foodgenicContentController.js",
    "groupTitle": "Content",
    "name": "GetFoodgienicBlogdetailsId",
    "sampleRequest": [
      {
        "url": "https://foodgienic.com/api/foodgienic/blogDetails/:id"
      }
    ]
  },
  {
    "type": "post",
    "url": "/foodgienic/deleteBlog",
    "title": "Delete Blog",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "BlogId",
            "description": "<p>BlogId <code>Mendatory</code>.`.</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Authorization.</p>"
          }
        ]
      }
    },
    "group": "Content",
    "description": "<p>Content Service..</p>",
    "version": "0.0.0",
    "filename": "src/controller/foodgenicContentController.js",
    "groupTitle": "Content",
    "name": "PostFoodgienicDeleteblog",
    "sampleRequest": [
      {
        "url": "https://foodgienic.com/api/foodgienic/deleteBlog"
      }
    ]
  },
  {
    "type": "post",
    "url": "/foodgienic/updateBlog",
    "title": "update Blog",
    "name": "update_Blog",
    "group": "Content",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>id <code>Mendatory</code>.`.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>Title <code>Mendatory</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "image",
            "description": "<p>Image <code>Mendatory</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": "<p>Description <code>Mendatory</code>.`.</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Authorization.</p>"
          }
        ]
      }
    },
    "description": "<p>Content Service..</p>",
    "version": "0.0.0",
    "filename": "src/controller/foodgenicContentController.js",
    "groupTitle": "Content",
    "sampleRequest": [
      {
        "url": "https://foodgienic.com/api/foodgienic/updateBlog"
      }
    ]
  },
  {
    "type": "post",
    "url": "/restaurent/addRestaurent",
    "title": "Add Restaurent",
    "name": "Add_Restaurent",
    "group": "Restaurent",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>firstname of User <code>Mendatory</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>lastName of User <code>Mendatory</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email of User <code>Mendatory</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>phone of User <code>Mendatory</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "restaurantname",
            "description": "<p>restaurantname of User <code>Mendatory</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "companyName",
            "description": "<p>companyName of User <code>Mendatory</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gst",
            "description": "<p>gst of User <code>Mendatory</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "kitchenArea",
            "description": "<p>kitchenArea of User <code>Mendatory</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "streetAddress",
            "description": "<p>streetAddress of User <code>Mendatory</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>city of User <code>Mendatory</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "state",
            "description": "<p>state of User <code>Mendatory</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "postalZipCode",
            "description": "<p>postalZipCode of User <code>Mendatory</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "country",
            "description": "<p>country of User <code>Mendatory</code>.</p>"
          }
        ]
      }
    },
    "description": "<p>User Service..</p>",
    "version": "0.0.0",
    "filename": "src/controller/restaurentController.js",
    "groupTitle": "Restaurent",
    "sampleRequest": [
      {
        "url": "https://foodgienic.com/api/restaurent/addRestaurent"
      }
    ]
  },
  {
    "type": "post",
    "url": "/restaurent/deleteRestaurent",
    "title": "Delete Restaurent",
    "name": "Delete_Restaurent",
    "group": "Restaurent",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "restaurentId",
            "description": "<p>restaurentId of User <code>Mendatory</code>.</p>"
          }
        ]
      }
    },
    "description": "<p>User Service..</p>",
    "version": "0.0.0",
    "filename": "src/controller/restaurentController.js",
    "groupTitle": "Restaurent",
    "sampleRequest": [
      {
        "url": "https://foodgienic.com/api/restaurent/deleteRestaurent"
      }
    ]
  },
  {
    "type": "get",
    "url": "/restaurent/getRestaurent",
    "title": "Get Restaurent",
    "name": "Get_Restaurent",
    "group": "Restaurent",
    "description": "<p>User Service..</p>",
    "version": "0.0.0",
    "filename": "src/controller/restaurentController.js",
    "groupTitle": "Restaurent",
    "sampleRequest": [
      {
        "url": "https://foodgienic.com/api/restaurent/getRestaurent"
      }
    ]
  },
  {
    "type": "get",
    "url": "/restaurent/getVerifiedRestaurent",
    "title": "Get VerifiedRestaurent",
    "name": "Get_VerifiedRestaurent",
    "group": "Restaurent",
    "description": "<p>User Service..</p>",
    "version": "0.0.0",
    "filename": "src/controller/restaurentController.js",
    "groupTitle": "Restaurent",
    "sampleRequest": [
      {
        "url": "https://foodgienic.com/api/restaurent/getVerifiedRestaurent"
      }
    ]
  },
  {
    "type": "post",
    "url": "/restaurent/signupRestaurent",
    "title": "Signup Restaurent",
    "name": "Signup_Restaurent",
    "group": "Restaurent",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>firstname of User <code>Mendatory</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>lastName of User <code>Mendatory</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email of User <code>Mendatory</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>phone of User <code>Mendatory</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "restaurantname",
            "description": "<p>restaurantname of User <code>Mendatory</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "companyName",
            "description": "<p>companyName of User <code>Mendatory</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gst",
            "description": "<p>gst of User <code>Mendatory</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "kitchenArea",
            "description": "<p>kitchenArea of User <code>Mendatory</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "streetAddress",
            "description": "<p>streetAddress of User <code>Mendatory</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>city of User <code>Mendatory</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "state",
            "description": "<p>state of User <code>Mendatory</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "postalZipCode",
            "description": "<p>postalZipCode of User <code>Mendatory</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password of User <code>Mendatory</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "confirmPassword",
            "description": "<p>confirmPassword of User <code>Mendatory</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "country",
            "description": "<p>country of User <code>Mendatory</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>Image of User <code>Mendatory</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description of User <code>Mendatory</code>.</p>"
          }
        ]
      }
    },
    "description": "<p>User Service..</p>",
    "version": "0.0.0",
    "filename": "src/controller/restaurentController.js",
    "groupTitle": "Restaurent",
    "sampleRequest": [
      {
        "url": "https://foodgienic.com/api/restaurent/signupRestaurent"
      }
    ]
  },
  {
    "type": "post",
    "url": "/restaurent/updateRestaurent",
    "title": "Update Restaurent",
    "name": "Update_Restaurent",
    "group": "Restaurent",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>firstname of User <code>Mendatory</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "restaurentId",
            "description": "<p>restaurentId of User <code>Mendatory</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>lastName of User <code>Mendatory</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email of User <code>Mendatory</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>phone of User <code>Mendatory</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "restaurantname",
            "description": "<p>restaurantname of User <code>Mendatory</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "companyName",
            "description": "<p>companyName of User <code>Mendatory</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gst",
            "description": "<p>gst of User <code>Mendatory</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "kitchenArea",
            "description": "<p>kitchenArea of User <code>Mendatory</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "streetAddress",
            "description": "<p>streetAddress of User <code>Mendatory</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>city of User <code>Mendatory</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "state",
            "description": "<p>state of User <code>Mendatory</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "postalZipCode",
            "description": "<p>postalZipCode of User <code>Mendatory</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "country",
            "description": "<p>country of User <code>Mendatory</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>Image of User <code>Mendatory</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description of User <code>Mendatory</code>.</p>"
          }
        ]
      }
    },
    "description": "<p>User Service..</p>",
    "version": "0.0.0",
    "filename": "src/controller/restaurentController.js",
    "groupTitle": "Restaurent",
    "sampleRequest": [
      {
        "url": "https://foodgienic.com/api/restaurent/updateRestaurent"
      }
    ]
  },
  {
    "type": "post",
    "url": "/restaurent/verifiedRestaurent",
    "title": "Verified Restaurent",
    "name": "Verified_Restaurent",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "restaurentId",
            "description": "<p>restaurentId of User <code>Mendatory</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "isVerified",
            "description": "<p>IsVerified of User <code>Mendatory</code>.</p>"
          }
        ]
      }
    },
    "group": "Restaurent",
    "description": "<p>User Service..</p>",
    "version": "0.0.0",
    "filename": "src/controller/restaurentController.js",
    "groupTitle": "Restaurent",
    "sampleRequest": [
      {
        "url": "https://foodgienic.com/api/restaurent/verifiedRestaurent"
      }
    ]
  },
  {
    "type": "post",
    "url": "/user/addUser",
    "title": "Add User",
    "name": "Add_User",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>firstname of User <code>Mendatory</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>lastName of User <code>Mendatory</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email of User <code>Mendatory</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password of User <code>Mendatory</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "confirmPassword",
            "description": "<p>confirmPassword of User <code>Mendatory</code>.</p>"
          }
        ]
      }
    },
    "description": "<p>User Service..</p>",
    "version": "0.0.0",
    "filename": "src/controller/userController.js",
    "groupTitle": "User",
    "sampleRequest": [
      {
        "url": "https://foodgienic.com/api/user/addUser"
      }
    ]
  },
  {
    "type": "post",
    "url": "/user/login",
    "title": "Log In",
    "name": "Log_In",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email of User <code>Mendatory</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password of User <code>Mendatory</code>.</p>"
          }
        ]
      }
    },
    "description": "<p>User Service..</p>",
    "version": "0.0.0",
    "filename": "src/controller/userController.js",
    "groupTitle": "User",
    "sampleRequest": [
      {
        "url": "https://foodgienic.com/api/user/login"
      }
    ]
  },
  {
    "type": "post",
    "url": "/user/payment",
    "title": "MakePayment",
    "name": "MakePayment",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "amount",
            "description": "<p>Amount.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Type.</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Authorization.</p>"
          }
        ]
      }
    },
    "description": "<p>User Service..</p>",
    "version": "0.0.0",
    "filename": "src/controller/userController.js",
    "groupTitle": "User",
    "sampleRequest": [
      {
        "url": "https://foodgienic.com/api/user/payment"
      }
    ]
  },
  {
    "type": "get",
    "url": "/user/getUser",
    "title": "GetUser",
    "name": "getUser",
    "group": "User",
    "description": "<p>User Service..</p>",
    "version": "0.0.0",
    "filename": "src/controller/userController.js",
    "groupTitle": "User",
    "sampleRequest": [
      {
        "url": "https://foodgienic.com/api/user/getUser"
      }
    ]
  }
] });
