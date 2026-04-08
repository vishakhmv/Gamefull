# 🎮 GameFull

**GameFull** is a web-based mini-game hub designed to bring together a collection of engaging, interactive, and responsive browser games into one seamless experience. It serves as a central arcade where users can easily access and switch between different uniquely styled games... but beware! The hub is also riddled with built-in pranks to troll players, starting right from the **wrong navigation links** on the homepage. Built entirely with HTML, CSS, and JavaScript, GameFull demonstrates clean, responsive design, audio integrations, custom logic, and a chaotic sense of humor.

This repository features the following game collections:
- **Tic Tac Goo**
- **Simon Master**
- **Drum Pulse**

---

## 🎮 Tic Tac Goo – Web-based Tic Tac Toe and Quad Strike Game

Tic Tac Goo is a fully interactive web-based mini-game collection featuring two game modes. The project focuses on game logic, responsive UI design, and rule-based gameplay.

### Game Modes

😈 **Troll Feature:** Both game modes in Tic Tac Goo are cursed! The turn indicator will intentionally malfunction and display the **wrong turn** to mess with players’ heads.  
And just when you think you’ve won… the game pulls its final prank—if **X wins, it shows O as the winner**, and if **O wins, it shows X instead!**

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
- 🔹 **Shuffled the button positions** on every level to make it much harder.
- 😈 **Troll Feature:** The game introduces distracting **new colors intro** at level 4 to confuse players and break their concentration!
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
- 😈 **Troll Features:** The kit is cursed! It features **wrong sounds, mismatched pictures, and incorrect key notations** for pranking user!

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

## The "Final Chance" Escape

If you choose to use the **QUIT** button, you are presented with one last task to complete the experience.

> "The way home is a reward for solving the challenge. You can't leave without solving it. So, this is your second and last chance to go home."

### The Arithmetic Challenge
A final screen appears featuring **2** randomly generated math problems—one addition and one subtraction. Solving these will provide you the path home.

### How to Solve It
* **The Goal**: You must enter the correct numerical answers into both input fields and click **Submit**.
* **Mystery c**: This progress tracker starts at **5** and decreases with each correct submission.
* **The Prank**: Even when you submit a correct answer, the system is designed to notify you that it is "WRONG!" as a prank while it changes the numbers of the problems and decreases **Mystery c**.
* **Interactive Mechanic**: To add a layer of challenge, the input fields are programmed to swap focus.
* **Typing Challenge**: Clicking on the first box will automatically move your focus to the second, and vice-versa, requiring careful navigation to type your answers.

### Victory: Solving the Mystery
Once **Mystery c** reaches **0**, the challenge is complete and the exit path is unlocked.
* **The Reveal**: A final **Home** button will appear, allowing you to navigate back to the **Gamefull** home page to explore other projects like **Simon Master**, **Tic-Tac-Goo**, or **Drum Pulse**.

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
