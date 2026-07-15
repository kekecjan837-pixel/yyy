const knowledge = [
  {
    title: "利率",
    category: "宏观",
    tags: ["资金成本", "货币政策", "债券"],
    summary: "利率是资金的价格。央行调整利率会影响贷款、储蓄、债券价格和市场估值。",
    details: "当利率上升，借钱更贵，债券收益率通常上行，成长股估值可能承压；当利率下降，融资成本变低，通常更利于风险资产。"
  },
  {
    title: "通胀",
    category: "宏观",
    tags: ["物价", "购买力", "CPI"],
    summary: "通胀描述价格普遍上涨，意味着同样的钱能买到的东西变少了。",
    details: "观察通胀时常看 CPI、PPI 等指标。温和通胀对经济活动往往更正常，但过高通胀会侵蚀购买力并影响利率政策。"
  },
  {
    title: "ETF",
    category: "投资",
    tags: ["基金", "指数化", "低费率"],
    summary: "ETF 是交易型开放式指数基金，通常跟踪某个指数或资产篮子。",
    details: "ETF 便于分散投资，透明度高，费用通常较低，适合长期配置和跟踪市场表现。"
  },
  {
    title: "资产配置",
    category: "入门",
    tags: ["分散风险", "组合", "长期"],
    summary: "把资金分散在不同资产上，降低单一资产波动对整体组合的冲击。",
    details: "常见的配置思路会兼顾收益、波动和流动性。不同年龄、目标和风险承受能力的人，配置比例会不同。"
  },
  {
    title: "现金流",
    category: "公司金融",
    tags: ["经营", "自由现金流", "报表"],
    summary: "现金流关注企业或个人真实进出的现金，而不是只看账面利润。",
    details: "企业分析里，自由现金流很关键，因为它更接近企业可以实际支配的资金，是估值和偿债能力的重要基础。"
  },
  {
    title: "ROE",
    category: "公司金融",
    tags: ["盈利能力", "净资产收益率", "杜邦分析"],
    summary: "ROE 是净资产收益率，衡量股东投入资本带来的回报。",
    details: "ROE 高不一定永远好，还要看是否可持续，以及是否来自高杠杆、资产周转还是利润率改善。"
  },
  {
    title: "估值",
    category: "投资",
    tags: ["PE", "PB", "DCF"],
    summary: "估值是在回答“这项资产值多少钱”。不同方法适用于不同资产。",
    details: "常见方法包括市盈率、市净率、EV/EBITDA 和 DCF。没有绝对标准，关键是和业务模型、增长预期一起看。"
  },
  {
    title: "风险",
    category: "风险",
    tags: ["波动", "回撤", "概率"],
    summary: "风险不是单纯的亏损，更常指结果不确定性和波动性。",
    details: "理解风险时要看本金损失、流动性、杠杆、集中度和期限错配。风险和收益往往是一起出现的。"
  },
  {
    title: "债券",
    category: "投资",
    tags: ["票息", "久期", "信用"],
    summary: "债券本质上是借款合同，发行人承诺按约定支付利息和本金。",
    details: "债券价格会受利率变化影响，久期越长，对利率越敏感。信用债还要关注违约风险。"
  },
  {
    title: "复利",
    category: "入门",
    tags: ["时间", "长期投资", "滚雪球"],
    summary: "复利是把收益继续投入，收益再产生收益。",
    details: "长期来看，复利是财富增长的重要来源。开始越早、持续越久，效果越明显。"
  },
  {
    title: "杠杆",
    category: "风险",
    tags: ["借贷", "放大收益", "放大风险"],
    summary: "杠杆是用借来的资金放大投资规模。",
    details: "杠杆会同时放大收益和亏损。在波动较大的市场里，杠杆使用需要更谨慎。"
  },
  {
    title: "宏观周期",
    category: "宏观",
    tags: ["增长", "政策", "景气"],
    summary: "宏观周期描述经济从扩张到放缓再到复苏的变化。",
    details: "宏观环境会影响企业盈利、利率、消费、就业和资产价格，因此理解周期很重要。"
  }
];

const fallbackMarket = [
  {
    symbol: "BTC",
    name: "比特币",
    source: "CoinGecko",
    value: 0,
    change: 0,
    unit: "USD",
    note: "示例回退数据，接口不可用时自动显示。"
  },
  {
    symbol: "ETH",
    name: "以太坊",
    source: "CoinGecko",
    value: 0,
    change: 0,
    unit: "USD",
    note: "示例回退数据，接口不可用时自动显示。"
  },
  {
    symbol: "SPY",
    name: "标普500 ETF",
    source: "FMP",
    value: 0,
    change: 0,
    unit: "USD",
    note: "示例回退数据，接口不可用时自动显示。"
  },
  {
    symbol: "QQQ",
    name: "纳斯达克100 ETF",
    source: "FMP",
    value: 0,
    change: 0,
    unit: "USD",
    note: "示例回退数据，接口不可用时自动显示。"
  }
];

const fallbackNews = [
  {
    symbol: "宏观",
    site: "本地回退",
    title: "等待外部新闻接口返回数据",
    text: "如果接口暂时不可用，这里会显示本地新闻摘要，确保页面始终可用。",
    publishedDate: new Date().toISOString().slice(0, 10),
    url: "#"
  },
  {
    symbol: "投资",
    site: "本地回退",
    title: "利率、通胀和估值常常会一起影响市场情绪",
    text: "你可以结合知识卡片和实时行情一起看，更容易理解宏观与资产价格的关系。",
    publishedDate: new Date().toISOString().slice(0, 10),
    url: "#"
  }
];

const els = {
  results: document.getElementById("results"),
  empty: document.getElementById("emptyState"),
  input: document.getElementById("searchInput"),
  clearBtn: document.getElementById("clearBtn"),
  topicGrid: document.getElementById("topicGrid"),
  resultCount: document.getElementById("resultCount"),
  marketGrid: document.getElementById("marketGrid"),
  marketCount: document.getElementById("marketCount"),
  marketStatus: document.getElementById("marketStatus"),
  refreshBtn: document.getElementById("refreshBtn"),
  newsList: document.getElementById("newsList"),
  newsCount: document.getElementById("newsCount")
};

let activeTopic = "全部";
let currentMarket = fallbackMarket;
let currentNews = fallbackNews;
let isLoading = false;

const currencyUSD = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 2
});

const currencyCNY = new Intl.NumberFormat("zh-CN", {
  style: "currency",
  currency: "CNY",
  maximumFractionDigits: 2
});

const compactNumber = new Intl.NumberFormat("en-US", {
  maximumFractionDigits: 2
});

function escapeHTML(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function formatSignedPercent(value) {
  if (!Number.isFinite(value)) return "暂无涨跌幅";
  const sign = value > 0 ? "+" : "";
  return `${sign}${compactNumber.format(value)}%`;
}

function formatSignedClass(value) {
  if (!Number.isFinite(value) || value === 0) return "neutral";
  return value > 0 ? "positive" : "negative";
}

function normalizeNumber(value) {
  if (typeof value === "number" && Number.isFinite(value)) return value;
  if (typeof value === "string") {
    const parsed = Number.parseFloat(value.replace(/[^0-9.-]/g, ""));
    return Number.isFinite(parsed) ? parsed : NaN;
  }
  return NaN;
}

function fmtPrice(value, unit = "USD") {
  if (!Number.isFinite(value)) return "暂无报价";
  return unit === "CNY" ? currencyCNY.format(value) : currencyUSD.format(value);
}

function fmtDateTime(value) {
  if (!value) return "未知时间";
  const date = value instanceof Date ? value : new Date(value);
  if (Number.isNaN(date.getTime())) return "未知时间";
  return new Intl.DateTimeFormat("zh-CN", {
    dateStyle: "medium",
    timeStyle: "short"
  }).format(date);
}

function renderKnowledge(list) {
  els.results.innerHTML = list.map((item) => `
    <article class="card">
      <div class="card-top">
        <span class="tag">${escapeHTML(item.category)}</span>
        ${item.tags.map((tag) => `<span class="tag">${escapeHTML(tag)}</span>`).join("")}
      </div>
      <h3>${escapeHTML(item.title)}</h3>
      <p>${escapeHTML(item.summary)}</p>
      <div class="meta">
        <span>适合：新手到进阶</span>
        <span>关键词：${escapeHTML(item.tags.join("、"))}</span>
      </div>
    </article>
  `).join("");

  els.empty.style.display = list.length ? "none" : "block";
  els.resultCount.textContent = list.length;
}

function filterKnowledge() {
  const query = els.input.value.trim().toLowerCase();
  const list = knowledge.filter((item) => {
    const topicHit = activeTopic === "全部" || item.category === activeTopic;
    const haystack = [item.title, item.category, item.summary, item.details, ...item.tags].join(" ").toLowerCase();
    const queryHit = !query || haystack.includes(query);
    return topicHit && queryHit;
  });
  renderKnowledge(list);
}

function renderMarket(list) {
  els.marketGrid.innerHTML = `
    <div class="metric-grid">
      ${list.map((item) => {
        const changeClass = formatSignedClass(item.change);
        const changeText = formatSignedPercent(item.change);
        const arrow = item.change > 0 ? "▲" : item.change < 0 ? "▼" : "•";
        return `
          <article class="metric">
            <div class="metric-head">
              <div>
                <div class="metric-name">${escapeHTML(item.name)}</div>
                <div class="hint">${escapeHTML(item.symbol)} · ${escapeHTML(item.source)}</div>
              </div>
              <span class="tag">${escapeHTML(item.unit)}</span>
            </div>
            <div class="metric-value">${fmtPrice(item.value, item.unit)}</div>
            <div class="metric-change ${changeClass}">
              <span>${arrow}</span>
              <span>${changeText}</span>
            </div>
            <div class="metric-foot">${escapeHTML(item.note)}</div>
          </article>
        `;
      }).join("")}
    </div>
  `;
  els.marketCount.textContent = String(list.length);
}

function renderNews(list) {
  els.newsList.innerHTML = list.map((item) => `
    <article class="card news-card">
      <div class="card-top">
        <span class="tag">${escapeHTML(item.symbol || "新闻")}</span>
        <span class="tag">${escapeHTML(item.site || "Unknown")}</span>
      </div>
      <h3 class="news-title">${escapeHTML(item.title || "无标题")}</h3>
      <p class="news-summary">${escapeHTML(item.text || item.summary || "暂无摘要")}</p>
      <div class="news-meta">
        <span>${escapeHTML(fmtDateTime(item.publishedDate))}</span>
      </div>
      ${item.url && item.url !== "#" ? `<a class="news-link" href="${escapeHTML(item.url)}" target="_blank" rel="noreferrer">阅读全文 →</a>` : ""}
    </article>
  `).join("");
  els.newsCount.textContent = String(list.length);
}

function setMarketStatus(text, loading = false) {
  isLoading = loading;
  els.marketStatus.innerHTML = loading
    ? `<span class="status-dot"></span>${escapeHTML(text)}`
    : `<span class="status-dot"></span>${escapeHTML(text)}`;
  els.refreshBtn.disabled = loading;
  els.refreshBtn.textContent = loading ? "刷新中…" : "刷新数据";
}

async function fetchJSON(url, timeoutMs = 8000) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetch(url, {
      signal: controller.signal,
      headers: {
        Accept: "application/json"
      }
    });
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    return await response.json();
  } finally {
    clearTimeout(timer);
  }
}

function toMarketItem(raw, fallback = {}) {
  const value = normalizeNumber(raw?.price ?? raw?.lastSalePrice ?? raw?.current_price ?? raw?.usd);
  const change = normalizeNumber(
    raw?.changesPercentage ?? raw?.usd_24h_change ?? raw?.changePercent ?? raw?.percent_change_24h
  );
  return {
    symbol: raw?.symbol || fallback.symbol || "N/A",
    name: raw?.name || fallback.name || raw?.symbol || "未知资产",
    source: fallback.source || raw?.source || "Market",
    value: Number.isFinite(value) ? value : fallback.value ?? NaN,
    change: Number.isFinite(change) ? change : fallback.change ?? NaN,
    unit: fallback.unit || "USD",
    note: fallback.note || `数据更新时间：${fmtDateTime(new Date())}`
  };
}

async function refreshLiveData() {
  setMarketStatus("正在加载行情和新闻…", true);

  const marketFallback = fallbackMarket.map((item) => ({ ...item }));
  const newsFallback = fallbackNews.map((item) => ({ ...item }));

  const tasks = [
    fetchJSON("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana&vs_currencies=usd,cny&include_24hr_change=true"),
    fetchJSON("https://financialmodelingprep.com/api/v3/quote/SPY,QQQ,AAPL,MSFT?apikey=demo"),
    fetchJSON("https://financialmodelingprep.com/api/v3/stock_news?limit=6&apikey=demo")
  ];

  const [cryptoResult, equityResult, newsResult] = await Promise.allSettled(tasks);

  const marketItems = [];

  if (cryptoResult.status === "fulfilled" && cryptoResult.value) {
    const crypto = cryptoResult.value;
    const map = [
      { key: "bitcoin", symbol: "BTC", name: "比特币" },
      { key: "ethereum", symbol: "ETH", name: "以太坊" },
      { key: "solana", symbol: "SOL", name: "Solana" }
    ];
    map.forEach((item) => {
      const row = crypto[item.key];
      if (!row) return;
      marketItems.push({
        symbol: item.symbol,
        name: item.name,
        source: "CoinGecko",
        value: normalizeNumber(row.usd),
        change: normalizeNumber(row.usd_24h_change),
        unit: "USD",
        note: `24h 参考价格，CNY 约 ${fmtPrice(normalizeNumber(row.cny), "CNY")}`
      });
    });
  }

  if (equityResult.status === "fulfilled" && Array.isArray(equityResult.value)) {
    equityResult.value.slice(0, 4).forEach((row) => {
      marketItems.push({
        symbol: row.symbol,
        name: row.name || row.symbol,
        source: "FMP",
        value: normalizeNumber(row.price),
        change: normalizeNumber(row.changesPercentage),
        unit: "USD",
        note: `日内区间：${fmtPrice(normalizeNumber(row.dayLow), "USD")} - ${fmtPrice(normalizeNumber(row.dayHigh), "USD")}`
      });
    });
  }

  currentMarket = marketItems.length ? marketItems : marketFallback;
  renderMarket(currentMarket);

  if (newsResult.status === "fulfilled" && Array.isArray(newsResult.value)) {
    currentNews = newsResult.value.slice(0, 6).map((row) => ({
      symbol: row.symbol || "新闻",
      site: row.site || "FMP",
      title: row.title || "无标题",
      text: row.text || row.summary || "暂无摘要",
      publishedDate: row.publishedDate || row.date || new Date().toISOString(),
      url: row.url || "#"
    }));
  } else {
    currentNews = newsFallback;
  }

  renderNews(currentNews);

  const sourceState = [
    cryptoResult.status === "fulfilled" ? "CoinGecko OK" : "CoinGecko fallback",
    equityResult.status === "fulfilled" ? "FMP quotes OK" : "FMP quotes fallback",
    newsResult.status === "fulfilled" ? "FMP news OK" : "FMP news fallback"
  ].join(" · ");

  setMarketStatus(`已更新 ${fmtDateTime(new Date())} · ${sourceState}`, false);
}

function syncTopicButtons(button) {
  document.querySelectorAll(".chip").forEach((chip) => {
    chip.classList.toggle("active", chip === button);
  });
}

els.topicGrid.addEventListener("click", (event) => {
  const button = event.target.closest(".chip");
  if (!button) return;
  activeTopic = button.dataset.topic;
  syncTopicButtons(button);
  filterKnowledge();
});

els.input.addEventListener("input", filterKnowledge);
els.clearBtn.addEventListener("click", () => {
  els.input.value = "";
  activeTopic = "全部";
  syncTopicButtons(document.querySelector('.chip[data-topic="全部"]'));
  filterKnowledge();
  els.input.focus();
});
els.refreshBtn.addEventListener("click", refreshLiveData);

renderKnowledge(knowledge);
renderMarket(fallbackMarket);
renderNews(fallbackNews);
filterKnowledge();
setMarketStatus("准备加载行情…", false);

refreshLiveData().catch(() => {
  currentMarket = fallbackMarket;
  currentNews = fallbackNews;
  renderMarket(currentMarket);
  renderNews(currentNews);
  setMarketStatus(`使用回退数据 · ${fmtDateTime(new Date())}`, false);
});

setInterval(() => {
  refreshLiveData().catch(() => {
    setMarketStatus(`使用回退数据 · ${fmtDateTime(new Date())}`, false);
  });
}, 5 * 60 * 1000);
