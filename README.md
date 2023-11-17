# PixelPantry
E-Commerce Website

### Pixel Pantry is an online platfrom designed to provide a seamless shopping experience for a wide range of products.

## Features

User Registration and Authentication: Secure sign-up and login process for users.<br>
Product Catalog: A comprehensive listing of all available products, including detailed descriptions, pricing, and images.<br>
Shopping Cart: An interactive cart where users can add and modify product selections.

## Wireframe
![**Capstone Wireframe**](images/wireframe.jpeg)
## Models
![**Capstone Model**](images/models.jpeg)

## Routes
#### User Management<br>
POST /users/register: Register a new user.<br>
POST /users/login: Authenticate a user and issue a session token.<br>
GET /users/profile: Retrieve the authenticated user's profile.
PUT /users/profile: Update the authenticated user's profile.<br>
POST /users/logout: Log out the current user.<br>

#### Product Catalog<br>
GET /products: Retrieve a list of products.<br>
GET /products/:productId: Retrieve details of a specific product.<br>
POST /products: Create a new product (admin only).<br>
PUT /products/:productId: Update a specific product (admin only).<br>
DELETE /products/:productId: Delete a specific product (admin only).<br>


#### Shopping Cart<br>
GET /cart: Retrieve the current user's shopping cart.<br>
POST /cart/add: Add a product to the shopping cart.<br>
POST /cart/remove: Remove a product from the shopping cart.<br>
PUT /cart/update: Update quantities of products in the shopping cart.<br>
POST /cart/checkout: Proceed to checkout with the items in the shopping cart.

## Built With
-Node.js<br>
-NPM<br>
-MongoDB