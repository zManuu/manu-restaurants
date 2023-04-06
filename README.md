# Manu-Restaurants

A very simple fullstack application where restaurants could register, make some advertisement and even take orders.  
Fully imagined, only to build for the expirience.

## Tech Stack

**Client:** Vue3, Vue-Router, TailwindCSS, FontAwesome, Floating-Vue, TypeScript  
**Server:** Node, Express, TypeScript, Nodemon, UUID

## Installation

```bash
git clone https://github.com/zManuu/manu-restaurants
```  
```bash
cd manu-restaurants/backend
```  
```bash
npm i
```  
```bash
cd ../frontend
```  
```bash
npm i
```  
```bash
npm run build
```  

## Starting the Webserver

Run `npm run start` in the backend folder.  
Make sure you have `ts-node` installed globally.

## Publishing the client

After the last step of the installation, you can simply publish the files in the [dist folder](frontend/dist) anywhere you want, it's plain html/css/js.

## API Reference

#### Get all restaurants

```http
  GET /restaurants
```

### Get offers

```http
  GET /offers
```

| Parameter | Type     | Required?                |
| :-------- | :------- | :------------------------- |
| `restaurantId` | `number` | **✖** |

### Create a restaurant

```http
  POST /restaurant
```

| Parameter | Type     | Required?                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | **✔** |
| `description` | `string` | **✖** |
| `logoUrl` | `string` | **✖** |

### Create an offer

```http
  POST /offer
```

| Parameter | Type     | Required?                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | **✔** |
| `description` | `string` | **✔** |
| `restaurantId` | `number` | **✔** |
| `previewUrls` | `string[]` | **✔** |
| `adminKey` | `string` | **✔** |
