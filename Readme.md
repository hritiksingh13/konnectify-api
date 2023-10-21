# Video Conferencing App

This is a Node.js-based video conferencing application using Socket.io and WebRTC.

## Table of Contents

- [Features](#features)
- [Folder Structure](#folder-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Features

- Real-time video and audio communication.
- Multiple users can join the same room.
- Chat functionality within the video conferencing interface.
- Server-side and client-side implementation.
- Scalable and well-organized folder structure.

## Folder Structure

The project has the following folder structure:
project-root/
│
├── config/
│ ├── ...
│
├── controllers/
│ ├── ...
│
├── models/
│ ├── ...
│
├── routes/
│ ├── ...
│
├── sockets/
│ ├── ...
│
├── tests/
│ ├── demo.test.js
│ ├── ...
│
├── server.js
│
├── vercel.json
│
└── package.json

## Installation

1. Clone the repository
2. Install dependencies: npm install
3. Configure environment variables and settings as needed.

## Usage

Start the server:
PROD: npm start
DEV: npm run dev

Access the app in your browser at `http://localhost:${port}`

## Testing

npm test
