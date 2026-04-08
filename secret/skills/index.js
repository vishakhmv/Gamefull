const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const playAudio = (src) => {
  try {
    new Audio(src).play();
  } catch (e) {}
};

const sequence = [
  "🧠 Scanning neural patterns...",
  "📡 Analyzing brain signals...",
  "🔍 Deep behavior analysis...",
  "🌐 Searching Google...",
  "⚠️ Suspicious behavior detected: trusting every button 😂",
  "🔁 Loop detected: click → regret → repeat 😂",
];

async function runScan() {
  await sleep(1000);

  for (let line of sequence) {
    document.getElementById("typing").innerText = "";
    for (let char of line) {
      document.getElementById("typing").innerText += char;
      await sleep(30);
    }
    document.getElementById("logs").innerHTML += `<p class="log">${line}</p>`;

    document.getElementById("screen").scrollTop =
      document.getElementById("screen").scrollHeight;

    await sleep(500 + Math.random() * 400);
  }

  document.getElementById("cursor-line").style.display = "none";
  await sleep(1000);

  playAudio("../../simon-master/sounds/wrong.mp3");
  document.getElementById("screen").classList.add("shake");
  document.getElementById("terminal").innerHTML +=
    `<div class="error">❌ RESULT:<br><br>404 - No skill found</div>`;

  await sleep(1500);

  const fakeBtn = document.createElement("button");
  fakeBtn.id = "fake-home";
  fakeBtn.innerText = "< Return Home";
  document.getElementById("terminal").appendChild(fakeBtn);

  fakeBtn.addEventListener("mouseenter", async function trap() {
    fakeBtn.removeEventListener("mouseenter", trap);

    document.getElementById("terminal").style.display = "none";
    document.getElementById("screen").classList.remove("shake");
    document.getElementById("punchline").style.display = "flex";

    await sleep(2000);

    document.querySelector(".scan").style.display = "none";
    document.querySelector(".wait").style.display = "none";
    document.querySelector(".success").style.display = "block";

    await sleep(1500);

    document.getElementById("reveal").style.display = "block";
    playAudio("../sounds/fooled.mpeg");
  });
}

window.onload = runScan;
