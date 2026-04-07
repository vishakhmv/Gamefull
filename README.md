# 🎮 GameFull

**GameFull** is a web-based mini-game hub designed to bring together a collection of engaging, interactive, and responsive browser games into one seamless experience. It serves as a central arcade where users can easily access and switch between different uniquely styled games. Built entirely with HTML, CSS, and JavaScript, GameFull demonstrates clean, responsive design, audio integrations, and custom logic.

This repository features the following game collections:
- **Tic Tac Goo**
- **Simon Master**
- **Drum Pulse**

---

## 🎮 Tic Tac Goo – Web-based Tic Tac Toe and Quad Strike Game

Tic Tac Goo is a fully interactive web-based mini-game collection featuring two game modes. The project focuses on game logic, responsive UI design, and rule-based gameplay.

### Game Modes

#### 1. Tic Tac Toe (3x3)
This mode follows the traditional two-player Tic Tac Toe format:
- One player plays as **X** and the other as **O**.
- **X** always starts the game.
- The board is a standard 3x3 grid.
- A turn indicator shows whose turn it is.
- **Win Condition:** Placing three identical symbols in a straight line (horizontal, vertical, or diagonal).
- Includes audio feedback with a winner sound effect when the game is won.
- **Dynamic Erase Mechanic:**
  - Only the **last 6 moves** remain visible on the board.
  - When a new move is played beyond this limit, the oldest move is automatically erased.
  - The oldest active move turns **red** as a warning before removal.
- **How to Play Page:** A dedicated page that explains turn rules, win conditions, the erase-and-warning mechanism, and how to use the reset and navigation controls. This makes the game easy for new users to understand while still being strategically engaging.

#### 2. Quad Strike Mode (5x5)
Quad Strike is a more competitive and strategic version played on a 5x5 grid:
- One player plays as **X** and the other as **O**.
- **X** starts the game.
- **Win Condition:** Forming **four** identical symbols in a straight line.
- Includes audio feedback with a victory sound when a player wins.
- **Advanced Erase System:**
  - Only the **last 22 moves** stay active on the board.
  - When the move limit is close, the oldest active move turns **red**.
  - On the next move, the red-highlighted block is automatically erased.
  - This encourages players to predict, block, and plan ahead.
- **How to Play Page:** Explains turn order, win conditions, the 22-move system, and available controls. This mode offers a high-strategy competitive experience while remaining easy to understand.

**Tech Stack & Features:**
- HTML, CSS, JavaScript
- Responsive design
- Audio feedback
- Queue-based move management using arrays
- Turn indicator system with color-coded styling
- Reset and New Game controls
- Simple navigation between game modes and How-to-Play pages

---

## 🧠 Simon Master

Inspired by the original Simon Game (which has only 4 buttons that stay in the same place every round), I wanted to create a harder version. In **Simon Master**, I:

- 🔹 Added **6 colorful buttons** instead of 4.
- 🔹 **Shuffled the button positions** on every level to make it much harder
- 🔹 Included **high score tracking** so you can challenge yourself as well as your friends.
- 🔹 Added a "**How to Play**" button for new players.

**🛠 Built with:** HTML, CSS, JavaScript (jQuery)

---

## 🥁 Drum Pulse

Drum Pulse is an interactive web-based drum kit and Simon-like memory game. It is fully responsive and works smoothly across different screen sizes, including desktops, tablets, and mobile devices.

### Game Modes

#### 1. Drum Kit Mode
Each drum element — such as the snare, toms, cymbals, etc. — produces a distinct sound when triggered. This offers an engaging drumming experience with:
-  Immediate audio feedback for every hit
-  Animated button effects that react to user input
-  Keyboard and mouse support for flexible playing
-  Smooth performance across all screen sizes
-  A dedicated “How to Use” page for beginners charting controls and key mappings

#### 2. Drum Kit Simon Mode
This mode transforms drumming into a Simon-style memory challenge that tests both rhythm and recall.
- Starts at **Level 1** with a single drum sound. With each level, the sequence adds one more sound, becoming longer and faster.
- The player must repeat the exact pattern in the correct order to successfully move on to the next level.
-  Multiple, progressively challenging levels.
-  Memory-based progression, where players must remember and repeat the correct sound or letter patterns.
-  Built-in timer to track gameplay duration.
-  High score tracking to motivate players to beat their previous best.
-  Responsive layout ensuring smooth play across different screen sizes.
-  Includes a detailed "How to Play" page providing clear guidance on gameplay, controls, and level advancement.

**🛠 Built with:** HTML, CSS, JavaScript, and jQuery

---

## 🤫 Secret Page

There is a secret button on the home page which redirects the user to the secret page.

**What is the Secret Page?**
It is a prank/puzzle challenge! You are greeted with a "Fooled! 😂" message and a fake "Home" button, combined with funny "Fooled" sound effects. 

The challenge puts you through three mock trials to find the real exit. You are instructed to unlock the true path to the Home page using one of three methods:
1. Solving a riddle about clicking on the page's "identity" after returning from the GitHub Repo.
2. Inspecting the page's source code to discover hidden developer routes.
3. Checking out the repository's README page.

**How to exit:** In order to exit the secret page, you must follow these specific steps: First, click on the **GitHub Repo** button, which will open the repository in a new tab. This action will secretly unlock the exit path by turning the website's logo and the "GameFull" name at the top of the secret page into a hidden link. You must then return to the secret page tab and click on either the logo or the "GameFull" text to be successfully redirected back to the home page! Alternatively, if you want to give up, there's a "QUIT" button.

---

## 📂 Folder Tree Structure

```text
GameFull/
├── index.html
├── index.css
├── Drum-pulse/
├── Tic-Tac/
├── simon-master/
├── secret/
├── images/
├── .vscode/
└── Readme.md
```
