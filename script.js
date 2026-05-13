//////////////////////////////
// 🌙 首页 11句（原样保留）
//////////////////////////////

const quotes = [
  "我开始忽冷又忽热隐藏我的感受 只是怕爱你的心被你看透",
  "如果你在前方回头 而我不回头 你要不要我",
  "在拥有爱的世纪里悲伤",
  "如果你冷，我将你拥入怀中",
  "人潮拥挤握住湿热的手心",
  "被人想念的时候不要心慌，想念别人的时候不要害怕。",
  "那一天你走进了我的生命",
  "我爱你 快回到我身边",
  "在所有不被想起的快乐里 我最喜欢你",
  "你扔下的习惯还顽强活在我身上",
  "赞美你包容你都是我的使命 用一生去执行"
];

//////////////////////////////
// 🌙 36题（完整原题库）
//////////////////////////////

const questions = [
  {
    q: "你觉得和她在一起最浪漫的事情是：",
    options: [
      { text: "凌晨一起走很长的路，谁都没有说喜欢，但谁都不想先回家", type: "AM" },
      { text: "她坐在你旁边低头看手机，你什么都没做，却觉得时间变得很慢", type: "NO" },
      { text: "一起窝在房间里，各自做自己的事，但偶尔抬头就能看到对方", type: "AT" },
      { text: "她突然很自然地把你划进她的生活里", type: "SD" }
    ]
  },
  {
    q: "你表现喜欢的方式更像：",
    options: [
      { text: "默默记住她说过的话", type: "NO" },
      { text: "假装只是顺手关心", type: "EX" },
      { text: "忍不住靠近分享很多东西", type: "SD" },
      { text: "一直留在她身边", type: "AT" }
    ]
  },
  {
    q: "你第一次意识到她不一样是：",
    options: [
      { text: "开始下意识找她聊天", type: "AT" },
      { text: "什么都想发给她", type: "SD" },
      { text: "她不在会空掉", type: "HS" },
      { text: "记住她所有小习惯", type: "NO" }
    ]
  },
  {
    q: "你最喜欢的关系氛围是：",
    options: [
      { text: "安静也不尴尬", type: "NO" },
      { text: "暧昧但不说破", type: "AM" },
      { text: "突然靠近心跳很快", type: "HS" },
      { text: "稳定存在", type: "AT" }
    ]
  },
  {
    q: "她靠在你旁边睡着时你会：",
    options: [
      { text: "不敢动怕吵醒她", type: "NO" },
      { text: "偷偷看很久", type: "HS" },
      { text: "心跳乱掉但装正常", type: "EX" },
      { text: "希望时间停住", type: "AM" }
    ]
  },
  {
    q: "你最容易喜欢一个女生是因为：",
    options: [
      { text: "她记得你的小事", type: "AT" },
      { text: "她对你和别人不一样", type: "JE" },
      { text: "你被理解", type: "SD" },
      { text: "你很放松", type: "NO" }
    ]
  },
  {
    q: "你最想共享的是：",
    options: [
      { text: "耳机", type: "AM" },
      { text: "深夜", type: "HS" },
      { text: "房间", type: "AT" },
      { text: "很长时间", type: "NO" }
    ]
  },
  {
    q: "你觉得喜欢已经发生的瞬间是：",
    options: [
      { text: "开始等她消息", type: "AT" },
      { text: "习惯她存在", type: "NO" },
      { text: "她影响你情绪", type: "HS" },
      { text: "开始幻想未来", type: "AM" }
    ]
  },
  {
    q: "你最常做的事情是：",
    options: [
      { text: "反复看聊天记录", type: "NO" },
      { text: "猜她心情", type: "HS" },
      { text: "忍住不发消息", type: "EX" },
      { text: "等她主动找你", type: "AT" }
    ]
  },
  {
    q: "你最害怕的关系是：",
    options: [
      { text: "她突然冷淡", type: "HS" },
      { text: "关系变淡但没人说破", type: "NO" },
      { text: "你认真她不认真", type: "EX" },
      { text: "她有了更重要的人", type: "JE" }
    ]
  },
  {
    q: "你们最常见的互动是：",
    options: [
      { text: "频繁聊天但不谈关系", type: "AM" },
      { text: "她偶尔关心你", type: "AT" },
      { text: "像朋友但不只是朋友", type: "EX" },
      { text: "谁都不先开口", type: "NO" }
    ]
  },
  {
    q: "你什么时候最想她？",
    options: [
      { text: "晚上躺下的时候", type: "HS" },
      { text: "她没回消息的时候", type: "AT" },
      { text: "看到相似的人", type: "NO" },
      { text: "情绪低的时候", type: "EX" }
    ]
  },
  {
    q: "你最想和她分享的是：",
    options: [
      { text: "所有生活碎片", type: "SD" },
      { text: "情绪变化", type: "AT" },
      { text: "但最后没发出去", type: "AV" },
      { text: "不重要的小事", type: "NO" }
    ]
  },
  {
    q: "你喜欢一个人的表现是：",
    options: [
      { text: "一直想告诉她事情", type: "SD" },
      { text: "变得在意她情绪", type: "AT" },
      { text: "变得敏感", type: "HS" },
      { text: "什么都不说", type: "EX" }
    ]
  },
  {
    q: "你们关系像：",
    options: [
      { text: "每天都会出现的人", type: "NO" },
      { text: "情绪依赖对象", type: "AT" },
      { text: "未完成关系", type: "AM" },
      { text: "一直在拉扯", type: "EX" }
    ]
  },
  {
    q: "你最常幻想：",
    options: [
      { text: "她主动找你", type: "AT" },
      { text: "你们更近一点", type: "AM" },
      { text: "她在意你", type: "JE" },
      { text: "关系自然发展", type: "SD" }
    ]
  },
  {
    q: "你会控制喜欢吗？",
    options: [
      { text: "会但失败", type: "EX" },
      { text: "会一直压抑", type: "AV" },
      { text: "不会控制", type: "AT" },
      { text: "不知道", type: "HS" }
    ]
  },
  {
    q: "你们真实感觉是：",
    options: [
      { text: "靠近但不确定", type: "AM" },
      { text: "熟悉但不稳定", type: "NO" },
      { text: "喜欢但不说", type: "EX" },
      { text: "已经依赖", type: "AT" }
    ]
  },
  {
    q: "你最在意她什么？",
    options: [
      { text: "她对你的态度变化", type: "HS" },
      { text: "她有没有回应你", type: "AT" },
      { text: "她有没有在意别人", type: "JE" },
      { text: "她的沉默", type: "EX" }
    ]
  },
  {
    q: "你最典型行为？",
    options: [
      { text: "等她先发消息", type: "AT" },
      { text: "假装不在意", type: "NO" },
      { text: "一直看聊天记录", type: "HS" },
      { text: "忍住不联系", type: "AV" }
    ]
  },
  {
    q: "你对她的感觉更像：",
    options: [
      { text: "习惯", type: "NO" },
      { text: "依赖", type: "AT" },
      { text: "暧昧", type: "AM" },
      { text: "拉扯", type: "EX" }
    ]
  },
  {
    q: "你最怕发生什么？",
    options: [
      { text: "她彻底消失", type: "HS" },
      { text: "关系变清晰", type: "AM" },
      { text: "你更认真", type: "EX" },
      { text: "她不再找你", type: "AT" }
    ]
  },
  {
    q: "你们的聊天状态？",
    options: [
      { text: "忽冷忽热", type: "HS" },
      { text: "不断延续", type: "NO" },
      { text: "不说重点", type: "AM" },
      { text: "你在等她", type: "AT" }
    ]
  },
  {
    q: "你最真实的一句话？",
    options: [
      { text: "我其实很在意你", type: "EX" },
      { text: "但我不会说", type: "AV" },
      { text: "我在等你", type: "AT" },
      { text: "算了没事", type: "NO" }
    ]
  }
];

//////////////////////////////
// 🌙 评分系统 + 结果逻辑
//////////////////////////////

let score = {
  HS: 0,
  EX: 0,
  AV: 0,
  NO: 0,
  AM: 0,
  AT: 0,
  SD: 0,
  JE: 0
};

let index = 0;

function startQuiz() {
  document.getElementById("home").classList.remove("active");
  document.getElementById("quiz").classList.add("active");
  render();
}

function render() {
  const q = questions[index];

  document.getElementById("progress").innerText =
    `${index + 1} / ${questions.length}`;

  document.getElementById("question").innerText = q.q;

  const box = document.getElementById("options");
  box.innerHTML = "";

  q.options.forEach(opt => {
    const div = document.createElement("div");
    div.className = "option";
    div.innerText = opt.text;

    div.onclick = () => {
      score[opt.type]++;
      index++;
      if (index >= questions.length) showResult();
      else render();
    };

    box.appendChild(div);
  });
}

function getResult() {
  const top = Object.keys(score).sort((a,b)=>score[b]-score[a])[0];

  const map = {
    HS: "她句号打太重了型",
    EX: "消息打完又删掉型",
    AV: "聊着聊着突然开始冷静型",
    NO: "聊天记录舍不得删型",
    AM: "不说破比较安全型",
    AT: "总之先发给她型",
    SD: "已经习惯每天找她型",
    JE: "其实很在意她跟谁玩型"
  };

  return map[top];
}

function showResult() {
  document.getElementById("quiz").classList.remove("active");
  document.getElementById("result").classList.add("active");

  document.getElementById("resultTitle").innerText = getResult();

  document.getElementById("resultDesc").innerText =
    "你不是不在意，只是习惯不说。";

  document.getElementById("resultQuote").innerText =
    "有些关系没有开始，也没有结束，只是一直在。";
}

function restart() {
  index = 0;
  Object.keys(score).forEach(k => score[k]=0);

  document.getElementById("result").classList.remove("active");
  document.getElementById("home").classList.add("active");

  document.getElementById("quote").innerText =
    quotes[Math.floor(Math.random()*quotes.length)];
}

document.getElementById("quote").innerText =
  quotes[Math.floor(Math.random()*quotes.length)];
