[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

# 🦥 Sapdoku

Sapdoku is a daily game based on Super Auto Pets. The goal is to fill in the grid with pets that satisfy its row and column requirements. Don't forget to share your score with friends when you finish!

**Play now at [sapdoku.com](https://sapdoku.com)**

## 📋 Table of Contents

- [✨ Features](#-features)
- [🗺️ Roadmap](#-roadmap)
- [🚀 Running Locally](#-running-locally)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [🎮 How to Play](#-how-to-play)
- [🏗️ Project Structure](#️-project-structure)
- [🤝 Contributing](#-contributing)
  - [Adding New Pets](#adding-new-pets)
  - [Updating Pet Stats](#updating-pet-stats)
- [📄 License](#-license)

## ✨ Features

- Daily puzzles based on [Super Auto Pets](https://teamwoodgames.com/)
- Search and filter for all pets in the [pets database](https://sapdoku.com/pets)
- Responsive design so you can play on any device
- Share completed games and compete with your friends
- Play games from the past you missed out on

## 🗺️ Roadmap

- Gamemodes
  - Reverse gamemode: guess the categories from the pets
  - Pack specific: only use and only need pets from one pack
- Performance
  - Virtualize the pets page
  - Proper skeleton components while loading
- Account Creation
  - Link your email address to save scores and data
- Data Visualization
  - See your most used pets
  - See the community's most common board
- Pets Version History
  - As pets are adjusted, ensure past game results stay consistent
- Technical Improvements
  - Add redux, zustand, or valtio
  - Upload user data to postgres

## 🚀 Running Locally

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository:

```bash
 git clone https://github.com/yourusername/sapdoku.git
 cd sapdoku
```

2. Install dependencies:

```bash
 npm install

 # or

 yarn install
```

3. Start the development server:

```bash
 npm run dev

 # or

 yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🎮 How to Play

- Visit [sapdoku.com](https://sapdoku.com) daily to play the new puzzle
- Guess pet combinations based on the given criteria
- Share your results with friends

## 🏗️ Project Structure

- src/: Contains the main application code
  - app/: Main layout and pages
  - assets/: Fonts
  - components/: Reusable shadcn UI components
  - db/: Data-related files (constants, types, models)
  - lib/: Utility functions and custom hooks
  - modules/: Specific application modules
- public/: Static assets

## 🤝 Contributing

We welcome contributions to Sapdoku! Here's how you can help:

### Adding New Pets

1. Navigate to src/db/pets.ts
2. Follow the existing structure shown here:

```ts
export const PETS_LIST = [
  {
    name: 'Ant',
    imageSrc: 'https://superautopets.wiki.gg/images/5/56/Ant.png',
    pack: ['Turtle Pack'],
    tier: 1,
    attack: 2,
    health: 2,
    abilityTrigger: 'Faint',
    tags: ['Faint'],
  },
  // ... existing pets
  {
    name: 'New Pet Name',
    imageSrc: 'image link',
    pack: ['Example Pack'], // include all relevant packs
    tier: 1 - 6, // Adjust as needed
    attack: 1 - 16, // Level 1 attack
    health: 1 - 16, // Level 1 health
    ability: 'Ability Trigger in Bold', // may need to be added to ABILITY_TRIGGERS_LIST in src/db/constants.ts
    tags: [], // tags come from SAP create custom pack
  },
  // ...
] as const;
```

3. Create an issue or pull request with the [Pet Data](https://github.com/JerHowden/sapdoku/labels/pet%20data) tag

### Updating Pet Stats

1. Locate the pet in src/db/pets.ts
2. Update the relevant properties (attack, health, ability, etc.)
3. Create an issue or pull request with the [Pet Data](https://github.com/JerHowden/sapdoku/labels/pet%20data) tag

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

```

```
