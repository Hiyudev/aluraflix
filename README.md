# Alura Challenge Back-End

This is a challenge proposed by Alura (a Brazilian online education platform).

<img align="right" width="145" height="35" src="https://i.imgur.com/LN16y28.png">

The challenge focused on the Back-end, it consisted of simulating a real situation of a company in the labor market. We had four weeks to complete four challenges, ranging from making a REST-API to a functional AUTH API.

---

<p align="center">
 <a href="#api-reference">API Reference</a> • 
 <a href="#technology">Technology</a> • 
 <a href="#installation">Installation</a>
</p>


## Installation
```bash
git clone https://github.com/KeysHD/aluraflix.git
npm install
```

## Setting up
1. Create a account on Firebase
2. Create new project
3. Create a firestore database
4. Get Admin SDK json file on the database configuration
5. Create a `.env` file
6. Copy and paste the informations on the variables
```
type=<YOUR_INFORMATION>
project_id=<YOUR_INFORMATION>
private_key_id=<YOUR_INFORMATION>
private_key=<YOUR_INFORMATION>
client_email=<YOUR_INFORMATION>
client_id=<YOUR_INFORMATION>
auth_uri=<YOUR_INFORMATION>
token_uri=<YOUR_INFORMATION>
client_x509_cert_url=<YOUR_INFORMATION>
```
7. Initialize using the command `npm run dev`

## API Reference

#### Get all items

```http
  GET /videos
```

#### Get item

```http
  GET /videos/{id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `number` | **Required**. Id of item to fetch |

#### Post item

```http
  POST /videos
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `titulo`  | `string` | **Required**. Title to the database |
| `url`     | `string` | **Required**. URL to the database |

```http
  DELETE /videos/{id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `number` | **Required**. Id of item to delete |

```http
  PUT /videos
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `number` | **Required**. Id of item to delete |
| `data`      | `object` | **Required**. New data object to update |


## Technology
<p align="center">
  <img alt="HTML5" src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white"/>
  <img alt="CSS3" src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white"/>
  <img alt="Styled components" src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"/>
  <img alt="JavaScript" src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/>
  <img alt="React" src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"/>
  <img alt="Express" src="https://img.shields.io/badge/Express-%2320232a.svg?style=for-the-badge&logo=express&logoColor=%fff"/>
  <img alt="Firebase" src="https://img.shields.io/badge/firebase-ffca28?style=for-the-badge&logo=firebase&logoColor=black"/>
<<<<<<< HEAD
</p>
=======
  
  
</p>

## Installation
```bash
git clone https://github.com/KeysHD/aluraflix.git
npm install
```

## Setting up
1. Create a account on Firebase
2. Create new project
3. Create a firestore database
4. Get Admin SDK json file on the database configuration
5. Create a `.env` file
6. Copy and paste the informations on the variables
```
type=<YOUR_INFORMATION>
project_id=<YOUR_INFORMATION>
private_key_id=<YOUR_INFORMATION>
private_key=<YOUR_INFORMATION>
client_email=<YOUR_INFORMATION>
client_id=<YOUR_INFORMATION>
auth_uri=<YOUR_INFORMATION>
token_uri=<YOUR_INFORMATION>
client_x509_cert_url=<YOUR_INFORMATION>
```
7. Initialize using the command `npm run dev`
8. Enter `localhost:3000` for the Website view
9. Send requests on `localhost:8080`
>>>>>>> f7e3ea785007169762d274f2b7e9164915158a35
