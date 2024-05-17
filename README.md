

# OAuth2 React Frontend


This project is the frontend part of the OAuth2 workflow demonstration. It is built using React and demonstrates how to interact with the OAuth2 server (Hydra) and Oathkeeper proxy for secure access to protected resources. The frontend includes the following features:

- User login
- Consent form handling
- Token exchange and storage
- Access to protected resources

### Prerequisites
Before running the OAuth2 React Frontend, ensure you have the following prerequisites installed:

1. Access to the OAuth2 server backend (refer to the [OAuth2 server repository](https://github.com/guptaaashutosh/OAuth2.0-with-reverse-proxy) for setup instructions)
2. Node.js
3. npm or yarn
4. Basic understanding of React and OAuth2 concepts
5. Git for version control

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

<br>

## Video Demonstration
This video guides you through the process of obtaining access tokens in Hydra, an authorization server framework.

- **Exchange Code Flow:** Witness how an authorization code is exchanged for an access token.
- **Login and Consent Forms:** Explore the user interaction during login and consent for authorization requests.
- **Utilizing Access Tokens:** Discover how to leverage the acquired access tokens for secured API access.

### By the end of this video, you'll gain a comprehensive understanding of:

- The flow of obtaining access tokens using Hydra.
- The significance of the exchange code and its role in authorization.
- How login and consent forms interact with user authentication.
- Practical applications of access tokens for secure API communication.

<br>

https://github.com/guptaaashutosh/OAuth2.0-with-reverse-proxy/assets/83817233/ea387c73-ef1c-4445-979a-ba565af3681c



<br><br>

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


<br>
<br>

**For any questions or feedback, feel free to reach out to me:** <a href="https://www.linkedin.com/in/aashutosh-gupta-06a8b7210/" target="_blank">Aashutosh Gupta</a>
