# 🍽️ Multi-Tenant Restaurant & Hotel Order Management System

## 📜 Overview

We are building a **multi-tenant** order management web application using the **MERN stack (MongoDB, Express.js, React, Node.js)** to replace the traditional pen-and-paper method used by restaurants and hotels for taking and managing orders.

This system supports multiple restaurants/hotels (tenants) from a single backend and frontend deployment.

---

## 🌟 Core Problem

Currently:

* Waiters use pen and paper to write down orders for both **table (dine-in)** and **room (hotel)** guests.
* They manually submit the written paper to the **kitchen**.
* The **cook** prepares the food and calls the waiter.
* The **waiter checks the paper** again and serves the food to the correct table/room.

---

## ✅ Proposed Digital Solution

Eliminate paper-based workflows using a web application that allows waiters to take orders via mobile/tablet and updates the kitchen in real-time.

---

## 🧑‍🍳 User Roles

* **Tenant Owner (Restaurant/Hotel Admin)**
* **Waiter** (Takes Orders)
* **Cook/Chef** (Prepares Orders)

---

## 🧹 Features

### 1. Tenant Onboarding

* Register new restaurant/hotel (tenant)
* Add users (waiters, chefs)
* Configure tables/rooms and menu

### 2. Login & Role-based Access

* JWT-based authentication
* Only see data relevant to tenant
* Different views for waiters and kitchen staff

### 3. Table Order (Dine-in)

* Select a table (e.g., Table-A with 3 seats)
* For each guest:

  * Dish
  * Notes
  * Allergy (optional)
* Submit order to kitchen

### 4. Room Order (Room Service)

* Select a room (e.g., Room-101)
* Enter ordered dishes, notes, and allergies
* Submit to kitchen

### 5. Kitchen Dashboard

* View all incoming orders
* Orders grouped by table/room
* Mark dish as:

  * "Preparing"
  * "Ready to serve"
* Optionally notify waiter in real-time

### 6. Waiter Notification

* View real-time updates when dishes are ready
* Mark order as “Served” once food is delivered

### 7. Multi-Tenancy (SaaS)

* Every model includes `tenantId`
* Only data scoped to tenant is accessible
* Single deployment for all tenants

---

## 📃 Backend Requirements

### 🛋️ API Endpoints

#### Auth

* `POST /api/auth/register-tenant` → Register a new tenant (restaurant/hotel)
* `POST /api/auth/login` → Login user (returns JWT)

#### User Management

* `POST /api/users/` → Add new user under tenant
* `GET /api/users/` → List users by tenant

#### Tables/Rooms

* `POST /api/locations/` → Create table or room (type: table|room)
* `GET /api/locations/` → List tables/rooms for tenant

#### Menu Items

* `POST /api/menu/` → Add new dish/item to menu
* `GET /api/menu/` → List menu for tenant

#### Orders

* `POST /api/orders/` → Place new order (table/room with guest dishes)
* `GET /api/orders/` → List orders (filter by status/type/table/room)
* `PUT /api/orders/:id/status` → Update order or dish status (e.g., to ready/served)

#### Real-Time (Socket.IO Events)

* `order:created` → Notify kitchen of new order
* `order:ready` → Notify waiter when order is ready

### 🔍 Middleware

* **authMiddleware**: Extracts user and tenant from JWT
* **tenantScope**: Validates that all data access is scoped by `tenantId`

---

## 📃 Database Models (MongoDB Schema)

### Tenant (Restaurant/Hotel)

```js
{
  _id,
  name,
  address,
  ownerEmail,
  createdAt
}
```

### User

```js
{
  _id,
  tenantId,
  name,
  role: 'waiter' | 'chef' | 'admin',
  email,
  passwordHash
}
```

### Table/Room

```js
{
  _id,
  tenantId,
  type: 'table' | 'room',
  name: 'Table-1' | 'Room-A',
  capacity
}
```

### MenuItem

```js
{
  _id,
  tenantId,
  name,
  category,
  price
}
```

### Order

```js
{
  _id,
  tenantId,
  type: 'table' | 'room',
  sourceId, // reference to Table/Room
  guests: [
    {
      name,
      dishes: [
        {
          name,
          notes,
          allergy,
          status: 'pending' | 'preparing' | 'ready' | 'served'
        }
      ]
    }
  ],
  status: 'pending' | 'preparing' | 'ready' | 'served',
  createdAt
}
```

---

## 🔔 Real-Time Updates (Optional Enhancement)

* Use Socket.IO to:

  * Push live order updates to kitchen
  * Notify waiters when dishes are ready

---

## 📊 Future Enhancements

* Mobile App (React Native)
* QR code scanning for quick login
* Analytics Dashboard (most ordered items, average prep time)
* Multi-language support
* Theme customization per tenant (restaurant branding)

---

## 🪰 Stack

| Layer      | Tech                            |
| ---------- | ------------------------------- |
| Frontend   | React, Tailwind, Axios          |
| Backend    | Node.js, Express.js             |
| DB         | MongoDB + Mongoose              |
| Auth       | JWT                             |
| Real-Time  | Socket.IO                       |
| Deployment | Vercel (FE), Render/Docker (BE) |

---

## ✅ Goal

Deliver a working MVP where:

* A new restaurant can register and start using the system
* Waiters can place orders
* Kitchen can manage and prepare those orders
* Orders are tenant-scoped and handled in real-time
