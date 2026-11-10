const players = ["郁金帆", "邵文浩", "罗洁", "吴仙凤"];
const pairings = [
  [[0, 2], [1, 3]],
  [[0, 3], [1, 2]],
];

const truths = [
  "你现在有几个对象或正在暧昧的人？必须说真实数字。",
  "你手机里置顶的人是谁？为什么把 TA 置顶？",
  "最近一个让你把消息删了又重新编辑的人是谁？",
  "如果在场有一个人突然说喜欢你，你最希望是谁？",
  "你现在最怕哪一个人翻到你的聊天记录？为什么？",
  "说出一个你明知道是暧昧，却一直假装没看懂的瞬间。",
  "如果今晚必须和一个人共享一副耳机走回家，你会选谁？",
  "你嘴上说不可能，心里却动摇过的人是谁？",
  "你更想被喜欢的人叫宝宝，还是被 TA 直呼全名？为什么？",
  "如果把你的感情状态比作一颗台球，现在是进袋、卡袋口，还是还没开球？",
  "你有没有等过一个人的消息等到睡着？那个人现在还联系吗？",
  "在场谁最容易让你产生‘再靠近一点也没关系’的想法？",
];

const dares = [
  "涂满口红，搭档亲一下搭档的脸颊",
  "走到门口，在不打扰他人的前提下大喊一遍：“我好寂寞啊！”",
  "和搭档对视 20 秒，谁先移开视线，谁就说：“我刚才害羞了。”",
  "选择一位玩家，模仿偶像剧壁咚姿势合影；双方可以保持一臂距离。",
  "用最深情的语气对搭档说：“我输掉的是球，还是你？”",
  "微信换上情头发朋友圈。",
  "对着门外喊：“有没有人愿意结束我的单身生活？”",
  "选择一位玩家，互相叫对方“宝宝”直到本轮结束。",
  "给搭档一个十秒拥抱",
  "打开通讯录，闭眼滑动后停下；说出你和这个人的关系，但不必联系 TA。",
  "模仿喝醉后给喜欢的人打电话，独自完成一段 20 秒小剧场。",
  "让其他三人替你写一句征友文案，然后大声朗读。",
  "用撒娇语气请求赢家下一局让你一颗球，直到对方说“考虑一下”。",
  "选一位玩家互拍一张“官宣照”发朋友圈",
  "站到门口说：“本人感情状态不稳定，欢迎咨询！”然后优雅回来。",
  "和搭档十指相对但不接触，坚持十秒，谁碰到谁先说一句情话。",
  "假装向白球求婚，台词必须包含：“虽然你总跟别人走。”",
  "面向搭档完成一段十秒即兴告白",
  "给搭档起一个只有情侣才会用的昵称，并连续叫三遍。",
  "把球杆当麦克风，唱一句最像在暗示某个人的情歌。",
  "选择一位玩家，认真夸 TA 三句；不许出现‘人很好’。",
  "对搭档说一句只说前半句的情话，让 TA 自己猜后半句。",
  "拍一张捂脸害羞的照片，配文‘刚刚有人让我心跳漏了一拍’，保留十分钟。",
  "用播音腔宣布：‘本人今晚正式进入可被追求状态。’",
  "让搭档在你的手背上写一个字，你要把它解释成暧昧暗号。",
  "随机指一位玩家，对 TA 说：‘你再这样看我，我就要误会了。’",
  "模仿收到喜欢的人一句‘睡了吗’之后，从冷静到失控的全过程。",
  "给一位单身朋友发：‘认真问，你觉得我适合被谁喜欢？’",
  "用最委屈的语气对赢家说：‘球可以输，你不能不哄我。’",
  "选一位玩家，和 TA 隔空比心合影，照片是否保存由你决定。",
  "对着白球说三句分手台词，最后一句必须是‘你自由了’。",
  "把自己的微信昵称临时改成‘感情咨询中’，保持到下一局结束。",
  "让搭档替你设计一句暧昧朋友圈文案，你必须大声念出来。",
  "在不接触的情况下，和搭档摆出最像情侣合照的姿势十秒。",
  "选一位玩家，问 TA：‘如果我追你，第一关是什么？’",
  "现场演一段发现暧昧对象把你备注成‘台球搭子’后的反应。",
  "盯着搭档看十秒，然后说：‘没什么，就是确认一下。’",
  "拿手机当镜子，练习三遍见到喜欢的人时最自然的表情。",
  "对门口轻声说：‘我的缘分是不是走错包间了？’",
  "用三个动作演出‘嘴硬、心动、假装无事发生’，让其他人猜。",
  "选择一位玩家，让 TA 给你取一个暧昧期专属代号。",
  "模仿偶像剧主角，在球进袋后回头说：‘这一杆是为你打的。’",
  "给搭档发一个句号，等 TA 回复后立刻当面解释这是心动暗号。",
  "把今晚某位玩家设为手机锁屏一分钟；照片由本人同意后选择。",
  "让其他三人投票选出你最像谁的理想型，你要向当选者鞠躬致意。",
  "选一位玩家，说一句听起来像告白、实际上完全没说明白的话。",
  "对搭档伸出手说：‘合作愉快，余生也可以。’双方可选择握手或隔空击掌。",
  "用五秒钟给自己拍一条征友视频，开头必须是‘本人优点不详’。",
  "让赢家替你选择一个名字，你要对空气深情喊：‘我等你很久了。’",
  "模拟被问‘我们现在算什么关系’，给出一个最抽象的回答。",
  "选一位玩家对视十秒，随后各用一个词形容刚才的气氛。",
  "把纸巾折成戒指向白球求婚，并邀请搭档担任证婚人。",
  "对搭档说：‘下一局你保护我，我就考虑给你名分。’",
  "表演一次误把普通问候理解成表白后，努力装作冷静的样子。",
  "给最近聊天的人发一个台球表情，并补一句：‘突然想到你。’发送前可由本人决定是否继续。",
  "选一位玩家，用一句话把‘借我十块钱’说得像在求婚。",
  "站起来郑重宣布：‘从现在起，我的择偶标准暂时以本桌为准。’",
  "让搭档指定一个表情，你保持这个表情完成下一次击球。",
  "用最暧昧的语气念出一句天气预报，至少包含‘今晚’和‘升温’。",
  "向一颗彩球道歉，因为你刚才只顾着看某个人没有看它。",
  "选择一位玩家，邀请 TA 共同完成一个只存在三十秒的‘假装情侣’片段；双方同意后开始。",
];

const DARE_PROBABILITY = 0.8;

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

function randomType() {
  return Math.random() < DARE_PROBABILITY ? "dare" : "truth";
}

function typeLabel(type) {
  return type === "dare" ? { english: "DARE", chinese: "大冒险" } : { english: "TRUTH", chinese: "真心话" };
}

function decideLoss(teamIndex) {
  const team = state.teams[teamIndex];
  state.current = {
    teamIndex,
    assignments: team.map(person => ({ person, type: "", text: "" })),
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
  state.current.assignments.forEach((assignment, index) => {
    assignment.type = randomType();
    if (mode === "bank") {
      const source = assignment.type === "dare" ? dares : truths;
      const previous = index > 0 && state.current.assignments[index - 1].type === assignment.type
        ? state.current.assignments[index - 1].text
        : "";
      assignment.text = randomItem(source, previous);
    } else {
      assignment.text = assignment.type === "dare"
        ? "请赢家或现场玩家即兴指定一项大冒险。尺度由你们决定，接受挑战的人拥有最终决定权。"
        : "请赢家或现场玩家即兴提出一个真心话。可以大胆发问，但回答的人随时可以选择跳过。";
    }
  });
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
  c.assignments.forEach((assignment, index) => {
    const label = typeLabel(assignment.type);
    const card = $(`#challengeCard${index}`);
    card.classList.toggle("dare-card", assignment.type === "dare");
    card.classList.toggle("truth-card", assignment.type === "truth");
    $(`#typeEnglish${index}`).textContent = label.english;
    $(`#typeChinese${index}`).textContent = label.chinese;
    $(`#person${index}`).textContent = assignment.person;
    $(`#avatar${index}`).textContent = initials(assignment.person);
    $(`#challengeText${index}`).textContent = assignment.text;
  });
  document.querySelectorAll(".reroll-btn").forEach(button => button.classList.toggle("hidden", c.mode !== "bank"));
}

function reroll(index) {
  if (!state.current) return;
  const assignment = state.current.assignments[index];
  const source = assignment.type === "dare" ? dares : truths;
  assignment.text = randomItem(source, assignment.text);
  const text = $(`#challengeText${index}`);
  text.animate([{ opacity: 0, transform: "translateY(7px)" }, { opacity: 1, transform: "none" }], { duration: 280 });
  text.textContent = assignment.text;
  ping(assignment.type === "dare" ? 480 : 600, .05);
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
        ${item.assignments.map(assignment => `<span><b>${assignment.person}</b> · ${typeLabel(assignment.type).chinese}</span>`).join("")}
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
    const savedSignature = saved.teams.map(team => [...team].sort().join("|")).sort().join("::");
    const restoredPairingIndex = pairings.findIndex(pairing => {
      const teams = pairing.map(team => team.map(index => players[index]));
      const signature = teams.map(team => [...team].sort().join("|")).sort().join("::");
      return signature === savedSignature;
    });
    if (restoredPairingIndex < 0) {
      localStorage.removeItem("poolTruthDareState");
      return;
    }
    saved.pairingIndex = restoredPairingIndex;
    if (saved.history?.some(item => !Array.isArray(item.assignments))) {
      saved.history = [];
      saved.losses = [0, 0];
      saved.round = 1;
    }
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
document.querySelectorAll(".reroll-btn").forEach(button => button.addEventListener("click", () => reroll(Number(button.dataset.index))));
document.addEventListener("keydown", event => { if (event.key === "Escape" && $("#drawOverlay").classList.contains("open")) closeOverlay(); });
restoreState();
