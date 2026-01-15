# AI Nexus

**AI Nexus** is an advanced conversational AI platform showcasing cutting-edge NLP capabilities in a clean, interactive, and visually engaging web interface. The project is designed as a showcase for AI-powered chatbots with a modern UI/UX and a focus on interactivity.

---

## Table of Contents

- [Demo](#demo)  
- [Features](#features)  
- [Technologies](#technologies)  
- [Installation](#installation)  
- [Usage](#usage)  
- [Project Structure](#project-structure)  
- [Contributing](#contributing)  
- [License](#license)  

---

## Demo

A live demo of AI Nexus can be accessed here:  
**[Live Demo](#)**  

---

## Features

- Fully interactive AI chat interface.  
- Modern and responsive UI built with React and Tailwind CSS.  
- Animated and engaging backgrounds with **Particles.js**.  
- Pages for Features, Showcase, and Technology with smooth navigation.  
- Persistent chat history via local storage.  
- Gradient buttons, polished typography, and sleek animations for professional presentation.  
- “Try Demo” and “View Code” buttons for quick interaction and exploration.  

---

## Technologies

- **Frontend**: React, Tailwind CSS, tsparticles (@tsparticles/react)  
- **Backend**: Custom API (can integrate with OpenAI GPT models)  
- **Routing**: React Router  
- **State Management**: React hooks  
- **Icons**: Feather Icons  
- **Other Tools**: Vite (development), ESLint & Prettier (code formatting)  

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/bboyd146/ai-nexus.git
cd ai-nexus
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to:

```bash
http://localhost:5173
```

## Usage

Navigate through the Features, Showcase, and Technology pages using the header links.

Interact with the AI chatbot in the main chat interface.

Click Try Demo to simulate sending messages through the AI engine.

Start a new chat by clicking New Chat, which resets the conversation.

Customize the interface and chat functionality by editing components in <src/components> and hooks in <src/hooks>.

## Project Structure
```
ai-nexus/
│
├─ src/
│  ├─ components/
│  │  ├─ Chat/
│  │  ├─ Layout/
│  │  ├─ UI/
│  │  └─ index.js
│  ├─ hooks/
│  │  └─ useChat.jsx
│  ├─ pages/
│  │  ├─ Home.jsx
│  │  ├─ Features.jsx
│  │  ├─ Showcase.jsx
│  │  └─ Technology.jsx
│  ├─ utils/
│  │  └─ feather.js
│  └─ main.jsx
│
├─ package.json
├─ tailwind.config.js
└─ README.md
```

## Contributing

Contributions are welcome!

Fork the repository.

Create a feature branch: git checkout -b feature-name

Commit your changes: git commit -m "Description of your changes"

Push to the branch: git push origin feature-name

Open a Pull Request

## License

This project is licensed under the MIT License.
