const players = ["郁金帆", "邵文浩", "罗洁", "吴仙凤"];
const pairings = [
  [[0, 1], [2, 3]],
  [[0, 2], [1, 3]],
  [[0, 3], [1, 2]],
];

const truths = [
  "你现在有几个对象或正在暧昧的人？必须说真实数字。",
  "最近一次接吻是什么时候？当时是谁先主动？",
  "在场四个人里，谁最接近你的理想型？只能选一个。",
  "如果今晚必须和一个人约会，你会选谁？准备带 TA 去哪里？",
  "你手机里置顶的人是谁？为什么把 TA 置顶？",
  "你同时和最多几个人暧昧过？最后是怎么收场的？",
  "你谈过几次恋爱？哪一任最让你念念不忘？",
  "在场谁最适合谈恋爱，谁最适合只暧昧？",
  "你最近一次心动对象的名字里有几个字？",
  "你有没有喜欢过朋友的对象，或者对象的朋友？",
  "如果前任现在发来“我想你了”，你会怎么回复？",
  "你做过最恋爱脑的一件事是什么？",
  "在场谁主动追你，你最有可能答应？",
  "你有没有偷偷保存过喜欢的人的照片？现在还在吗？",
  "你最长的一段暧昧持续了多久？为什么没在一起？",
  "你更能接受对象查手机，还是和异性单独出去玩？",
  "说出你谈恋爱时最让人受不了的一个毛病。",
  "你有过喜欢两个人、不知道选谁的时候吗？",
  "你最想和在场谁体验一次情侣约会？",
  "你有没有假装发错消息，只为了找某个人聊天？",
  "你会和前任复合吗？哪一种情况下会？",
  "你最容易被哪种身体接触撩到：牵手、拥抱、摸头还是别的？",
  "在场谁看起来最会谈恋爱？谁最像感情里的笨蛋？",
  "你有没有对某个人说不喜欢，实际上心里很喜欢？",
  "如果今晚可以收到一个人的表白，你希望是谁？",
  "你能接受对象有异性知己吗？你的真实底线是什么？",
  "最近一个让你反复点进聊天框却没发消息的人是谁？",
  "你最想删除哪一段感情记忆？",
  "说一个你曾经用过、但绝不会承认是套路的暧昧操作。",
  "现在看着搭档的眼睛，用一句话说出你对 TA 的真实感觉。",
];

const dares = [
  "涂满口红，在搭档明确同意后亲一下脸颊；不同意则在手背盖一个唇印。",
  "走到门口，在不打扰他人的前提下大喊三遍：“我好寂寞啊！”",
  "和搭档对视 20 秒，谁先移开视线，谁就说：“我刚才害羞了。”",
  "选择一位玩家，模仿偶像剧壁咚姿势合影；双方可以保持一臂距离。",
  "给最近联系过的一位单身朋友发：“突然想问，你觉得我适合谈恋爱吗？”",
  "在搭档同意后牵手走一圈；不同意则各牵球杆一端走一圈。",
  "选一位玩家，认真说出三个你觉得 TA 很有吸引力的地方。",
  "用最深情的语气对搭档说：“我输掉的是球，还是你？”",
  "让搭档替你拍一张约会软件头像，并现场决定是否合格。",
  "对着门外喊：“有没有人愿意结束我的单身生活？”",
  "选择一位玩家，互相叫对方“宝宝”直到本轮结束。",
  "给搭档一个十秒拥抱；仅在双方明确同意时进行，否则改为隔空拥抱。",
  "打开通讯录，闭眼滑动后停下；说出你和这个人的关系，但不必联系 TA。",
  "模仿喝醉后给喜欢的人打电话，独自完成一段 20 秒小剧场。",
  "让其他三人替你写一句征友文案，然后大声朗读。",
  "选择一位玩家，用土味情话把 TA 逗笑，成功前不能放弃。",
  "给搭档整理衣领或头发；需先询问同意，不同意则改为整理球杆。",
  "现场表演第一次见对象家长，却把对方爸爸认成前任的场面。",
  "用撒娇语气请求赢家下一局让你一颗球，直到对方说“考虑一下”。",
  "给在场一位玩家起一个情侣备注，并解释为什么这么起。",
  "拿球杆当电话，假装正在和同时出现的两个暧昧对象解释误会。",
  "选一位玩家互拍一张“官宣照”；照片无需发布，可以当场删除。",
  "站到门口说：“本人感情状态不稳定，欢迎咨询！”然后优雅回来。",
  "和搭档十指相对但不接触，坚持十秒，谁碰到谁先说一句情话。",
  "用新闻播报腔宣布：“本人与搭档因共同输球，关系进入观察期。”",
  "让其他三人指定一位玩家，你要用三个词描述和 TA 约会的画面。",
  "假装向白球求婚，台词必须包含：“虽然你总跟别人走。”",
  "在搭档同意后让 TA 在你脸上画一颗小爱心；不同意则画在纸巾上。",
  "演出看到暗恋对象和别人牵手后，强装镇定打完一杆的全过程。",
  "面向搭档完成一段十秒即兴告白，最后必须补一句：“以上纯属游戏，除非你当真。”",
];

const state = {
  pairingIndex: null,
  teams: [],
  losses: [0, 0],
  round: 1,
  history: [],
  current: null,
  sound: true,
};

const $ = (selector) => document.querySelector(selector);
const pairingGrid = $("#pairingGrid");

function initials(name) { return name.slice(-2); }

function renderPairings() {
  pairingGrid.innerHTML = pairings.map((pairing, index) => `
    <button class="pair-option" data-pairing="${index}" type="button" aria-pressed="false">
      <small>组合 ${String(index + 1).padStart(2, "0")}</small>
      <span class="pair-line"><i></i>${players[pairing[0][0]]} · ${players[pairing[0][1]]}</span>
      <span class="pair-line"><i></i>${players[pairing[1][0]]} · ${players[pairing[1][1]]}</span>
    </button>
  `).join("");
}

function selectPairing(index) {
  state.pairingIndex = index;
  document.querySelectorAll(".pair-option").forEach((button, i) => {
    const active = i === index;
    button.classList.toggle("selected", active);
    button.setAttribute("aria-pressed", String(active));
  });
  $("#startGameBtn").disabled = false;
  ping(380, .045);
}

function startGame() {
  if (state.pairingIndex === null) return;
  state.teams = pairings[state.pairingIndex].map(team => team.map(i => players[i]));
  state.losses = [0, 0];
  state.round = 1;
  state.history = [];
  saveState();
  renderGame();
  showScreen("game");
  ping(520, .07);
}

function showScreen(name) {
  $("#setupScreen").classList.toggle("active", name === "setup");
  $("#gameScreen").classList.toggle("active", name === "game");
  $("#changeTeamsBtn").classList.toggle("hidden", name !== "game");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function avatarMarkup(name) { return `<span class="avatar" title="${name}">${initials(name)}</span>`; }

function renderGame() {
  if (!state.teams.length) return;
  [0, 1].forEach(i => {
    $(`#avatars${i === 0 ? "A" : "B"}`).innerHTML = state.teams[i].map(avatarMarkup).join("");
    $(`#names${i === 0 ? "A" : "B"}`).innerHTML = `${state.teams[i][0]} <span>×</span> ${state.teams[i][1]}`;
    $(`#loss${i === 0 ? "A" : "B"}`).textContent = `${state.losses[i]} 次落败`;
  });
  $("#roundNumber").textContent = state.round;
  renderHistory();
}

function randomItem(items, exclude = "") {
  const pool = items.filter(item => item !== exclude);
  return pool[Math.floor(Math.random() * pool.length)];
}

function decideLoss(teamIndex) {
  const team = state.teams[teamIndex];
  const previousLosses = state.losses[teamIndex];
  const dareIndex = previousLosses % 2;
  state.current = {
    teamIndex,
    darePerson: team[dareIndex],
    truthPerson: team[1 - dareIndex],
    dare: "",
    truth: "",
    mode: "",
  };
  openModePicker();
}

function openModePicker() {
  const overlay = $("#drawOverlay");
  $("#modeTeamName").textContent = `${state.current.teamIndex === 0 ? "A" : "B"} 队`;
  $("#drawStage").className = "draw-stage choosing";
  overlay.classList.add("open");
  overlay.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  ping(360, .045);
}

function chooseMode(mode) {
  if (!state.current) return;
  state.current.mode = mode;
  if (mode === "bank") {
    state.current.dare = randomItem(dares);
    state.current.truth = randomItem(truths);
  } else {
    state.current.dare = "请赢家或现场玩家即兴指定一项大冒险。尺度由你们决定，接受挑战的人拥有最终决定权。";
    state.current.truth = "请赢家或现场玩家即兴提出一个真心话。可以大胆发问，但回答的人随时可以选择跳过。";
  }
  openDraw();
}

function openDraw() {
  const overlay = $("#drawOverlay");
  const stage = $("#drawStage");
  stage.className = "draw-stage loading";
  overlay.classList.add("open");
  overlay.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  const teasers = ["擦亮球杆，屏住呼吸", "真心正在瞄准", "大冒险已进入袋口", "这一杆，没有退路"];
  let i = 0;
  $("#teaserText").textContent = teasers[0];
  const teaserTimer = setInterval(() => { $("#teaserText").textContent = teasers[++i % teasers.length]; }, 620);
  ping(260, .05);
  setTimeout(() => {
    clearInterval(teaserTimer);
    fillResult();
    stage.classList.remove("loading");
    ping(660, .09);
    setTimeout(() => ping(820, .05), 110);
  }, window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 300 : 2700);
}

function fillResult() {
  const c = state.current;
  $("#losingTeamName").textContent = `${c.teamIndex === 0 ? "A" : "B"} 队`;
  $("#darePerson").textContent = c.darePerson;
  $("#truthPerson").textContent = c.truthPerson;
  $("#dareAvatar").textContent = initials(c.darePerson);
  $("#truthAvatar").textContent = initials(c.truthPerson);
  $("#dareText").textContent = c.dare;
  $("#truthText").textContent = c.truth;
  document.querySelectorAll(".reroll-btn").forEach(button => button.classList.toggle("hidden", c.mode !== "bank"));
}

function reroll(type) {
  if (!state.current) return;
  state.current[type] = randomItem(type === "dare" ? dares : truths, state.current[type]);
  $(`#${type}Text`).animate([{ opacity: 0, transform: "translateY(7px)" }, { opacity: 1, transform: "none" }], { duration: 280 });
  $(`#${type}Text`).textContent = state.current[type];
  ping(type === "dare" ? 480 : 600, .05);
}

function completeRound() {
  const c = state.current;
  if (!c) return;
  state.losses[c.teamIndex] += 1;
  state.history.unshift({ ...c, round: state.round });
  state.round += 1;
  state.current = null;
  saveState();
  closeOverlay();
  renderGame();
  showToast("本局已记入战报");
}

function closeOverlay() {
  $("#drawOverlay").classList.remove("open");
  $("#drawOverlay").setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function renderHistory() {
  $("#emptyHistory").classList.toggle("hidden", state.history.length > 0);
  $("#historyList").innerHTML = state.history.map(item => `
    <li class="history-item">
      <time>R${String(item.round).padStart(2, "0")}</time>
      <span class="history-team">${item.teamIndex === 0 ? "A" : "B"} 队落败</span>
      <div class="history-detail">
        <span><b>${item.darePerson}</b> · 大冒险</span>
        <span><b>${item.truthPerson}</b> · 真心话</span>
        <span>${item.mode === "improvise" ? "临场发挥" : "题库抽取"}</span>
      </div>
    </li>
  `).join("");
}

function resetGame() {
  if (!state.history.length || window.confirm("确定清空今晚的全部战报吗？组队不会改变。")) {
    state.losses = [0, 0]; state.round = 1; state.history = []; state.current = null;
    saveState(); renderGame(); showToast("战报已清空");
  }
}

function changeTeams() {
  if (!state.history.length || window.confirm("更换组队会重置当前战报，确定继续吗？")) {
    localStorage.removeItem("poolTruthDareState");
    state.pairingIndex = null; state.teams = []; state.losses = [0, 0]; state.round = 1; state.history = [];
    document.querySelectorAll(".pair-option").forEach(b => { b.classList.remove("selected"); b.setAttribute("aria-pressed", "false"); });
    $("#startGameBtn").disabled = true;
    showScreen("setup");
  }
}

function saveState() {
  localStorage.setItem("poolTruthDareState", JSON.stringify({
    pairingIndex: state.pairingIndex, teams: state.teams, losses: state.losses, round: state.round, history: state.history,
  }));
}

function restoreState() {
  try {
    const saved = JSON.parse(localStorage.getItem("poolTruthDareState"));
    if (!saved?.teams?.length) return;
    Object.assign(state, saved);
    selectPairing(state.pairingIndex);
    renderGame();
    showScreen("game");
  } catch { localStorage.removeItem("poolTruthDareState"); }
}

let audioContext;
function ping(frequency, volume) {
  if (!state.sound) return;
  try {
    audioContext ||= new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();
    oscillator.frequency.value = frequency;
    oscillator.type = "sine";
    gain.gain.setValueAtTime(volume, audioContext.currentTime);
    gain.gain.exponentialRampToValueAtTime(.001, audioContext.currentTime + .18);
    oscillator.connect(gain).connect(audioContext.destination);
    oscillator.start(); oscillator.stop(audioContext.currentTime + .2);
  } catch { /* Audio is an enhancement only. */ }
}

function toggleSound() {
  state.sound = !state.sound;
  $("#soundToggle").style.opacity = state.sound ? "1" : ".4";
  $("#soundToggle").setAttribute("aria-label", state.sound ? "关闭音效" : "开启音效");
  if (state.sound) ping(500, .05);
}

let toastTimer;
function showToast(message) {
  const toast = $("#toast"); toast.textContent = message; toast.classList.add("show");
  clearTimeout(toastTimer); toastTimer = setTimeout(() => toast.classList.remove("show"), 1800);
}

renderPairings();
pairingGrid.addEventListener("click", event => {
  const option = event.target.closest(".pair-option");
  if (option) selectPairing(Number(option.dataset.pairing));
});
$("#startGameBtn").addEventListener("click", startGame);
$("#changeTeamsBtn").addEventListener("click", changeTeams);
$("#resetGameBtn").addEventListener("click", resetGame);
$("#soundToggle").addEventListener("click", toggleSound);
$("#closeOverlay").addEventListener("click", closeOverlay);
$("#nextRoundBtn").addEventListener("click", completeRound);
document.querySelectorAll(".lose-btn").forEach(button => button.addEventListener("click", () => decideLoss(Number(button.dataset.team))));
document.querySelectorAll(".mode-card").forEach(button => button.addEventListener("click", () => chooseMode(button.dataset.mode)));
document.querySelectorAll(".reroll-btn").forEach(button => button.addEventListener("click", () => reroll(button.dataset.type)));
document.addEventListener("keydown", event => { if (event.key === "Escape" && $("#drawOverlay").classList.contains("open")) closeOverlay(); });
restoreState();
