// CMPM 121 Smelly Code Activity

// This variable keeps track of the counter
let count = 0;

// this const contains all ids for the buttons
const ids = {
  title: "app-title",
  value: "counter-value",
  inc: "btn-inc",
  dec: "btn-dec",
  reset: "btn-reset",
};

function render() {
  document.title = `Clicked ${count}`;
  document.getElementById(ids.value)!.textContent = String(count);
  document.body.style.backgroundColor = count % 2 ? "pink" : "lightblue";
}

function changeBy(delta: number) {
  count += delta;
  render();
}

function reset() {
  count = 0;
  render();
}

function setup() {
  // Create the HTML for the counter
  document.body.innerHTML = `
      <h1 id="${ids.title}">CMPM 121 Project</h1>
      <p>Counter: <span id="${ids.value}">0</span></p>
      <div class="toolbar">
        <button id="${ids.inc}"  type="button">Increment</button>
        <button id="${ids.dec}"  type="button">Decrement</button>
        <button id="${ids.reset}" type="button">Reset</button>
      </div>
      <style>
        .toolbar { display:flex; gap:8px; align-items:center }
        button { padding:.5rem .75rem; border-radius:.5rem; border:1px solid #ddd }
      </style>
    `;

  const incBtn = document.getElementById(ids.inc);
  const decBtn = document.getElementById(ids.dec);
  const resetBtn = document.getElementById(ids.reset);

  if (!incBtn || !decBtn || !resetBtn) return;

  incBtn.addEventListener("click", () => changeBy(1));
  decBtn.addEventListener("click", () => changeBy(-1));
  resetBtn.addEventListener("click", reset);

  render();
}

// Start the counter app
setup();
