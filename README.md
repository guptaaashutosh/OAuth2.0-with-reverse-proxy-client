

# OAuth2 React Frontend


This project is the frontend part of the OAuth2 workflow demonstration. It is built using React and demonstrates how to interact with the OAuth2 server (Hydra) and Oathkeeper proxy for secure access to protected resources. The frontend includes the following features:

- User login
- Consent form handling
- Token exchange and storage
- Access to protected resources

### Prerequisites
Before you begin, ensure you have the following installed on your machine:

1. Node.js
2. npm or yarn
3. Basic understanding of React and OAuth2 concepts
4. Git for version control

## Project Structure 
```
hydra_oathkeeper_proxy_demo_client/
├── public
│   ├── index.html
│   └── ...
├── src
│   ├── components
│   │   ├── Login.js
│   │   ├── Consent.js
│   │   └── ...
│   ├── contexts
│   │   └── AuthContext.js
│   ├── services
│   │   ├── authService.js
│   │   └── apiService.js
│   ├── App.js
│   ├── index.js
│   └── ...
├── .env.example
├── package.json
├── README.md
└── ...

```

## Installation
Follow these steps to install the project dependencies:

1. Clone the Repository
```
git clone https://github.com/guptaaashutosh/OAuth2.0-with-reverse-proxy-client.git
cd hydra_oathkeeper_proxy_demo_client
```

2. Install Dependencies
```
npm install
```

or, if you prefer yarn:

```
yarn install
```


2. In the project directory, you can run:
```
npm start
```

The OAuth2 React Frontend application will be running at http://localhost:3000.

