// FOCO 备考 - 核心应用逻辑
// 适配 IIQE 两级章节结构：考试 → 卷（卷一/卷三）→ 章节

// ==================== 工具函数 ====================

function getUrlParam(key) {
  const params = new URLSearchParams(window.location.search);
  return params.get(key);
}

function formatTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

function storageSet(key, val) {
  try { localStorage.setItem(`foco_${key}`, JSON.stringify(val)); } catch(e) {}
}
function storageGet(key, defaultVal) {
  try {
    const raw = localStorage.getItem(`foco_${key}`);
    return raw ? JSON.parse(raw) : defaultVal;
  } catch(e) { return defaultVal; }
}

// ==================== 错题本 ====================
// 错题本结构：{ [questionId]: { wrongCount, streak, lastWrong } }
// streak: 连续答对次数，答错时重置为0
// wrongCount: 累计答错次数
// 连续答对3次 → 移出错题本

const WRONG_BANK_KEY = 'wrong_bank';

function getWrongBank() {
  return storageGet(WRONG_BANK_KEY, {});
}

function addToWrongBank(qId) {
  const bank = getWrongBank();
  if (!bank[qId]) bank[qId] = { wrongCount: 0, streak: 0 };
  bank[qId].wrongCount++;
  bank[qId].streak = 0;
  bank[qId].lastWrong = Date.now();
  storageSet(WRONG_BANK_KEY, bank);
}

function markCorrectInWrongBank(qId) {
  const bank = getWrongBank();
  if (!bank[qId]) return false; // 不在错题本，不处理
  bank[qId].streak++;
  storageSet(WRONG_BANK_KEY, bank);
  if (bank[qId].streak >= 3) {
    // 连续答对3次，移出错题本
    delete bank[qId];
    storageSet(WRONG_BANK_KEY, bank);
    return 'mastered'; // 已掌握
  }
  return 'streak'; // 继续练习
}

function removeFromWrongBank(qId) {
  const bank = getWrongBank();
  delete bank[qId];
  storageSet(WRONG_BANK_KEY, bank);
}

function getWrongBankCount() {
  return Object.keys(getWrongBank()).length;
}

// ==================== 首页 ====================

function renderHome() {
  const container = document.getElementById('app');
  const stats = getStats();
  const wrongCount = getWrongBankCount();

  container.innerHTML = `
    <div class="page">
      <div class="content">
        <div class="banner">
          <h2>📚 FOCO 备考</h2>
          <p>保险从业资格考试 · 章节练习 · 模拟考试</p>
        </div>

        <div class="stats-row">
          <div class="stat-card">
            <div class="num">${stats.total}</div>
            <div class="label">累计做题</div>
          </div>
          <div class="stat-card">
            <div class="num">${stats.accuracy}%</div>
            <div class="label">正确率</div>
          </div>
          <div class="stat-card">
            <div class="num" style="color:${wrongCount > 0 ? '#c01c28' : 'inherit'}">${wrongCount}</div>
            <div class="label">错题待练</div>
          </div>
        </div>

        ${wrongCount > 0 ? `
          <div class="section-title">🔥 错题克星</div>
          <div class="chapter-card" onclick="location.href='wrong.html'" style="border-left:4px solid #c01c28">
            <div class="chapter-icon" style="background:#fce8e6;color:#c01c28">✖</div>
            <div class="chapter-info">
              <div class="name">错题再练习</div>
              <div class="meta">${wrongCount}道错题 · 答对3次自动移除</div>
            </div>
            <div class="chapter-arrow">›</div>
          </div>
        ` : ''}

        <div class="section-title">📝 IIQE 考试科目</div>
        <div class="exam-grid">
          ${FOCO_DATA.exams[0].chapters.map(paper => `
            <div class="exam-card" onclick="location.href='paper.html?exam=${paper.id}'">
              <div class="icon" style="font-size:28px">${paper.id === 'paper1' ? '📋' : '🛡️'}</div>
              <div class="name">${paper.name}</div>
              <div class="desc">${paper.subtitle}</div>
              <div class="meta">${paper.desc}</div>
            </div>
          `).join('')}
        </div>

        <div class="section-title mt-20">ℹ️ 考试说明</div>
        <div style="background:var(--card-bg);border-radius:var(--radius);padding:16px;box-shadow:var(--shadow)">
          <table style="width:100%;font-size:13px;line-height:2;color:var(--text)">
            <tr><td style="color:var(--text-secondary)">卷一 Paper 1</td><td>保险原理及实务 · 75题 · 120分钟</td></tr>
            <tr><td style="color:var(--text-secondary)">卷三 Paper 3</td><td>长期保险 · 50题 · 75分钟</td></tr>
            <tr><td style="color:var(--text-secondary)">合格分数</td><td>约70%（卷一53题/卷三35题）</td></tr>
            <tr><td style="color:var(--text-secondary)">题型</td><td>单选题（4选1）</td></tr>
          </table>
        </div>

        <div class="section-title mt-20">📖 卷一章节（风险及保险）</div>
        <div style="background:var(--card-bg);border-radius:var(--radius);padding:12px 16px;box-shadow:var(--shadow);font-size:13px;color:var(--text-secondary);line-height:1.8">
          ① 风险及保险 &nbsp;② 法律原则 &nbsp;③ 保险原则<br>
          ④ 保险公司的主要功能 &nbsp;⑤ 香港保险业的结构<br>
          ⑥ 保险业的规管架构 &nbsp;⑦ 职业道德及其他有关问题
        </div>
      </div>
    </div>
  `;
}

function getStats() {
  const total = storageGet('total_answered', 0);
  const correct = storageGet('total_correct', 0);
  const days = storageGet('study_days', 0);
  return { total, accuracy: total > 0 ? Math.round(correct / total * 100) : 0, days };
}

// ==================== 卷选择页 ====================

function renderPaper() {
  const paperId = getUrlParam('exam');
  const paper = FOCO_DATA.exams[0].chapters.find(p => p.id === paperId);
  if (!paper) { location.href = 'index.html'; return; }

  const container = document.getElementById('app');
  const progress = storageGet(`progress_${paper.id}`, {});
  const wrongCount = getWrongBankCount();

  container.innerHTML = `
    <div class="page">
      <div class="header">
        <div class="header-back" onclick="location.href='index.html'">←</div>
        <div class="header-title">${paper.name}</div>
        <div style="width:32px"></div>
      </div>
      <div class="content">
        <div class="banner" style="background:linear-gradient(135deg,${paper.color} 0%,${paper.color}cc 100%)">
          <h2>${paper.name}</h2>
          <p>${paper.subtitle} · ${paper.desc}</p>
        </div>

        ${wrongCount > 0 && paper.id === 'paper1' ? `
          <div class="chapter-card" onclick="location.href='wrong.html'" style="border-left:4px solid #c01c28;margin-bottom:12px">
            <div class="chapter-icon" style="background:#fce8e6;color:#c01c28">✖</div>
            <div class="chapter-info">
              <div class="name">🔥 错题再练习（${wrongCount}道）</div>
              <div class="meta">答对3次自动移除 · 集中攻克薄弱点</div>
            </div>
            <div class="chapter-arrow">›</div>
          </div>
        ` : ''}

        <div class="section-title">📖 章节练习</div>
        ${paper.children.map((ch, i) => {
          const done = progress[ch.id] || 0;
          const pct = Math.round(done / ch.questions.length * 100);
          return `
            <div class="chapter-card" onclick="location.href='practice.html?paper=${paper.id}&chapter=${ch.id}'">
              <div class="chapter-icon" style="background:${paper.color}15;color:${paper.color}">${i+1}</div>
              <div class="chapter-info">
                <div class="name">${ch.name}</div>
                <div class="meta">约${ch.targetQuestions}题 · 已完成${done}题 · 权重${ch.weight}</div>
                <div class="progress-bar">
                  <div class="progress-fill" style="width:${pct}%;background:${paper.color}"></div>
                </div>
              </div>
              <div class="chapter-arrow">›</div>
            </div>
          `;
        }).join('')}

        <div class="section-title mt-20">🎯 模拟考试</div>
        <div class="chapter-card" onclick="location.href='mock.html?paper=${paper.id}'">
          <div class="chapter-icon" style="background:#9141ac15;color:#9141ac">🏆</div>
          <div class="chapter-info">
            <div class="name">${paper.name} 综合模拟</div>
            <div class="meta">${paper.children[0] ? paper.children.reduce((a,c)=>a+c.questions.length,0) : 0}题随机抽取 · 计时考试</div>
          </div>
          <div class="chapter-arrow">›</div>
        </div>
      </div>
    </div>
  `;
}

// ==================== 做题页 ====================

function renderPractice() {
  const paperId = getUrlParam('paper');
  const chapterId = getUrlParam('chapter');

  const paper = FOCO_DATA.exams[0].chapters.find(p => p.id === paperId);
  if (!paper) { location.href = 'index.html'; return; }
  const chapter = paper.children.find(c => c.id === chapterId);
  if (!chapter) { location.href = `paper.html?exam=${paperId}`; return; }

  const questions = chapter.questions;
  let current = parseInt(getUrlParam('q') || '0');
  let answers = JSON.parse(getUrlParam('answers') || '{}');

  const container = document.getElementById('app');

  function render() {
    const q = questions[current];
    const typeMap = { single: '单选题', judge: '判断题', multiple: '多选题' };
    const answered = Object.keys(answers).length;
    const inWrongBank = getWrongBank()[q.id] !== undefined;
    const streak = inWrongBank ? getWrongBank()[q.id].streak : 0;

    container.innerHTML = `
      <div class="page">
        <div class="header">
          <div class="header-back" onclick="location.href='paper.html?exam=${paperId}'">←</div>
          <div class="header-title">${chapter.name}</div>
          <div style="width:32px"></div>
        </div>
        <div class="content" style="padding-bottom:80px">
          <div class="question-header">
            <span class="question-type-tag">${typeMap[q.type] || '单选题'}</span>
            <span class="question-progress">${current + 1} / ${questions.length}</span>
          </div>

          ${inWrongBank ? `
            <div style="display:flex;align-items:center;gap:8px;margin-bottom:12px;padding:8px 12px;background:#fce8e6;border-radius:8px;font-size:12px;color:#c01c28">
              <span>✖</span>
              <span>此题为错题，连续答对 <strong>${streak}/3</strong> 次可移除</span>
            </div>
          ` : ''}

          <div class="question-card">
            <div class="question-content">${q.content}</div>
            <div class="question-options">
              ${q.options.map((opt, idx) => {
                const key = String.fromCharCode(65 + idx);
                const isSelected = answers[q.id] === key;
                const isCorrect = key === q.answer;
                const isAnswered = answers[q.id] !== undefined;
                let cls = '';
                if (isAnswered) {
                  if (isCorrect) cls = 'correct';
                  else if (isSelected) cls = 'wrong';
                }
                return `
                  <div class="option-item ${cls} ${isAnswered ? 'disabled' : ''}" onclick="${isAnswered ? '' : `selectOption('${q.id}','${key}')`}">
                    <div class="option-key">${key}</div>
                    <div class="option-text">${opt}</div>
                  </div>
                `;
              }).join('')}
            </div>
          </div>

          ${answers[q.id] !== undefined ? `
            <div class="analysis-card">
              <div class="analysis-title">📝 答案解析</div>
              <div class="analysis-text">
                <strong>正确答案：${q.answer}</strong><br><br>
                ${q.analysis}
              </div>
            </div>
          ` : ''}
        </div>

        <div class="btn-fixed">
          <div class="btn-group">
            <button class="btn btn-outline" ${current === 0 ? 'disabled style="opacity:0.4"' : ''} onclick="goQ(${current - 1})">← 上一题</button>
            ${current < questions.length - 1
              ? `<button class="btn btn-primary" onclick="goQ(${current + 1})">下一题 →</button>`
              : `<button class="btn btn-success" onclick="location.href='paper.html?exam=${paperId}'">完成本章 ✓</button>`
            }
          </div>
        </div>
      </div>
    `;
  }

  window.selectOption = function(qId, key) {
    const q = questions[current];
    answers[qId] = key;
    const isCorrect = key === q.answer;

    if (isCorrect) {
      const result = markCorrectInWrongBank(qId);
      if (result === 'mastered') {
        // 显示"已掌握"提示
        setTimeout(() => {
          const toast = document.createElement('div');
          toast.style.cssText = 'position:fixed;top:80px;left:50%;transform:translateX(-50%);background:#26a269;color:#fff;padding:10px 20px;border-radius:20px;font-size:14px;z-index:999';
          toast.textContent = '🎉 连续答对3次，已移出错题本！';
          document.body.appendChild(toast);
          setTimeout(() => toast.remove(), 2000);
        }, 300);
      }
    } else {
      addToWrongBank(qId);
    }

    recordAnswer(qId, isCorrect);
    const url = new URL(location.href);
    url.searchParams.set('answers', JSON.stringify(answers));
    history.replaceState(null, '', url.toString());
    render();
  };

  window.goQ = function(idx) {
    const url = new URL(location.href);
    url.searchParams.set('q', idx);
    url.searchParams.set('answers', JSON.stringify(answers));
    location.href = url.toString();
  };

  render();
}

function recordAnswer(qId, isCorrect) {
  let total = storageGet('total_answered', 0) + 1;
  let correct = storageGet('total_correct', 0) + (isCorrect ? 1 : 0);
  storageSet('total_answered', total);
  storageSet('total_correct', correct);
  const today = new Date().toDateString();
  const lastStudy = storageGet('last_study_date', '');
  if (lastStudy !== today) {
    storageSet('study_days', storageGet('study_days', 0) + 1);
    storageSet('last_study_date', today);
  }
}

// ==================== 错题本页 ====================

function renderWrong() {
  const bank = getWrongBank();
  const bankEntries = Object.entries(bank);

  const container = document.getElementById('app');

  if (bankEntries.length === 0) {
    container.innerHTML = `
      <div class="page">
        <div class="header">
          <div class="header-back" onclick="location.href='index.html'">←</div>
          <div class="header-title">错题克星</div>
          <div style="width:32px"></div>
        </div>
        <div class="content">
          <div class="empty-state">
            <div class="icon">🎉</div>
            <p>暂无错题，全部掌握！</p>
            <button class="btn btn-primary mt-20" onclick="location.href='paper.html?exam=paper1'" style="display:inline-block">去练习</button>
          </div>
        </div>
      </div>
    `;
    return;
  }

  // 构建题目列表（从 data.js 中查找）
  const allQuestions = FOCO_DATA.exams[0].chapters.flatMap(paper => paper.children.flatMap(ch => ch.questions));
  const wrongQuestions = bankEntries
    .map(([qId, info]) => {
      const q = allQuestions.find(q => q.id === qId);
      return q ? { ...q, ...info } : null;
    })
    .filter(Boolean);

  container.innerHTML = `
    <div class="page">
      <div class="header">
        <div class="header-back" onclick="location.href='index.html'">←</div>
        <div class="header-title">错题克星</div>
        <div style="width:32px"></div>
      </div>
      <div class="content">
        <div style="background:#fce8e6;border-radius:12px;padding:12px 16px;margin-bottom:16px;text-align:center">
          <div style="font-size:13px;color:#c01c28">
            <strong>${wrongQuestions.length}</strong> 道错题待攻克<br>
            <span style="font-size:11px;color:#9ca3af">每题连续答对 <strong>3次</strong> 自动移除</span>
          </div>
        </div>

        <div class="section-title">📋 错题列表</div>
        ${wrongQuestions.map((q, i) => `
          <div class="chapter-card" onclick="location.href='wrong.html?practice=${q.id}'">
            <div class="chapter-icon" style="background:#fce8e6;color:#c01c28">${i+1}</div>
            <div class="chapter-info">
              <div class="name">${q.content.substring(0, 40)}${q.content.length > 40 ? '...' : ''}</div>
              <div class="meta">
                连续答对 <strong style="color:${q.streak >= 2 ? '#26a269' : '#c01c28'}">${q.streak}/3</strong> 次 ·
                共答错 <strong>${q.wrongCount}</strong> 次
              </div>
              <div class="progress-bar" style="margin-top:6px">
                <div class="progress-fill" style="width:${Math.round(q.streak/3*100)}%;background:#c01c28"></div>
              </div>
            </div>
            <div class="chapter-arrow">›</div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// ==================== 错题练习页 ====================

function renderWrongPractice() {
  const qId = getUrlParam('practice');
  const bank = getWrongBank();

  if (!qId || !bank[qId]) {
    location.href = 'wrong.html';
    return;
  }

  const allQuestions = FOCO_DATA.exams[0].chapters.flatMap(paper => paper.children.flatMap(ch => ch.questions));
  const q = allQuestions.find(q => q.id === qId);
  if (!q) { location.href = 'wrong.html'; return; }

  const info = bank[qId];
  const container = document.getElementById('app');

  // 构建错题顺序列表（从 sessionStorage 读取，进入时设置一次）
  const SESSION_KEY = 'wrong_session_ids';
  let sessionIds = JSON.parse(sessionStorage.getItem(SESSION_KEY) || '[]');
  if (sessionIds.length === 0 || !sessionIds.includes(qId)) {
    sessionIds = Object.keys(bank);
    sessionStorage.setItem(SESSION_KEY, JSON.stringify(sessionIds));
  }

  function getNextWrongId(currentId) {
    const idx = sessionIds.indexOf(currentId);
    if (idx === -1) return null;
    // 过滤掉已经被移除的
    const bank2 = getWrongBank();
    for (let i = idx + 1; i < sessionIds.length; i++) {
      if (bank2[sessionIds[i]]) return sessionIds[i];
    }
    return null;
  }

  function render() {
    const currentStreak = getWrongBank()[q.id] ? getWrongBank()[q.id].streak : 0;
    const isAnswered = getUrlParam('answered') === '1';
    const nextId = getNextWrongId(q.id);

    container.innerHTML = `
      <div class="page">
        <div class="header">
          <div class="header-back" onclick="location.href='wrong.html'">←</div>
          <div class="header-title">错题克星</div>
          <div style="width:32px"></div>
        </div>
        <div class="content" style="padding-bottom:80px">
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:12px;padding:8px 12px;background:#fce8e6;border-radius:8px;font-size:12px;color:#c01c28">
            <span>✖</span>
            <span>连续答对 <strong>${currentStreak}/3</strong> 次可移除 · 共答错 ${info.wrongCount} 次</span>
          </div>

          <div class="question-card">
            <div class="question-content">${q.content}</div>
            <div class="question-options">
              ${q.options.map((opt, idx) => {
                const key = String.fromCharCode(65 + idx);
                const isCorrect = key === q.answer;
                return `
                  <div class="option-item ${isAnswered ? (isCorrect ? 'correct' : '') : ''}" onclick="${isAnswered ? '' : `selectWrongOption('${q.id}','${key}')`}">
                    <div class="option-key">${key}</div>
                    <div class="option-text">${opt}</div>
                  </div>
                `;
              }).join('')}
            </div>
          </div>

          ${isAnswered ? `
            <div class="analysis-card">
              <div class="analysis-title">📝 答案解析</div>
              <div class="analysis-text">
                <strong>正确答案：${q.answer}</strong><br><br>
                ${q.analysis}
              </div>
            </div>
          ` : ''}
        </div>

        <div class="btn-fixed">
          <div class="btn-group">
            <button class="btn btn-outline" ${currentStreak === 0 ? 'disabled style="opacity:0.4"' : ''} onclick="location.href='wrong.html'">← 错题本</button>
            ${nextId
              ? `<button class="btn btn-primary" onclick="location.href='wrong.html?practice=${nextId}'">下一题 →</button>`
              : `<button class="btn btn-success" onclick="location.href='wrong.html'">🎉 完成！</button>`
            }
          </div>
        </div>
      </div>
    `;
  }

  window.selectWrongOption = function(qId, key) {
    const q = allQuestions.find(q => q.id === qId);
    const isCorrect = key === q.answer;

    if (isCorrect) {
      const result = markCorrectInWrongBank(qId);
      const url = new URL(location.href);
      url.searchParams.set('answered', '1');
      history.replaceState(null, '', url.toString());

      if (result === 'mastered') {
        const toast = document.createElement('div');
        toast.style.cssText = 'position:fixed;top:80px;left:50%;transform:translateX(-50%);background:#26a269;color:#fff;padding:10px 20px;border-radius:20px;font-size:14px;z-index:999';
        toast.textContent = '🎉 连续答对3次，已移出错题本！';
        document.body.appendChild(toast);
        setTimeout(() => {
          const nextId = getNextWrongId(qId);
          if (nextId) {
            location.href = 'wrong.html?practice=' + nextId;
          } else {
            sessionStorage.removeItem(SESSION_KEY);
            location.href = 'wrong.html';
          }
        }, 1200);
      } else {
        render();
      }
    } else {
      addToWrongBank(qId);
      const url = new URL(location.href);
      url.searchParams.set('answered', '1');
      history.replaceState(null, '', url.toString());
      render();
    }
  };

  render();
}

// ==================== 模拟考试 ====================

function renderMock() {
  const paperId = getUrlParam('paper');
  const paper = FOCO_DATA.exams[0].chapters.find(p => p.id === paperId);
  if (!paper) { location.href = 'index.html'; return; }

  const allQuestions = paper.children.flatMap(ch => ch.questions);
  const questionCount = paper.id === 'paper1' ? 75 : 50;
  const shuffled = allQuestions.sort(() => Math.random() - 0.5).slice(0, Math.min(questionCount, allQuestions.length));
  const timeLimit = paper.id === 'paper1' ? 120 * 60 : 75 * 60;

  const container = document.getElementById('app');

  container.innerHTML = `
    <div class="page">
      <div class="header">
        <div class="header-back" onclick="location.href='paper.html?exam=${paperId}'">←</div>
        <div class="header-title">模拟考试</div>
        <div style="width:32px"></div>
      </div>
      <div class="content">
        <div class="mock-info">
          <div class="icon" style="font-size:48px;margin-bottom:12px">🏆</div>
          <div class="title">${paper.name} 综合模拟</div>
          <div class="desc">${paper.subtitle} · 随机抽题 · 计时考试</div>
          <div style="margin:20px 0">
            <div class="text-sm text-secondary">题目数量</div>
            <div class="font-bold" style="font-size:20px">${shuffled.length} 题</div>
          </div>
          <div style="margin-bottom:20px">
            <div class="text-sm text-secondary">建议时长</div>
            <div class="font-bold" style="font-size:20px">${Math.ceil(shuffled.length * 1.5)} 分钟</div>
          </div>
        </div>

        <button class="btn btn-primary btn-block" onclick="startMock()">
          🎯 开始考试
        </button>
      </div>
    </div>
  `;

  window.startMock = function() {
    storageSet(`mock_${paperId}`, {
      questions: shuffled,
      answers: {},
      startTime: Date.now(),
      timer: timeLimit
    });
    location.href = `mock.html?paper=${paperId}&mode=test`;
  };
}

function renderMockTest() {
  const paperId = getUrlParam('paper');
  const paper = FOCO_DATA.exams[0].chapters.find(p => p.id === paperId);
  if (!paper) { location.href = 'index.html'; return; }

  const mock = storageGet(`mock_${paperId}`, null);
  if (!mock) { location.href = `mock.html?paper=${paperId}`; return; }

  const { questions, answers } = mock;
  let current = parseInt(getUrlParam('q') || '0');
  const q = questions[current];
  const container = document.getElementById('app');

  function render() {
    const typeMap = { single: '单选题', judge: '判断题', multiple: '多选题' };

    container.innerHTML = `
      <div class="page">
        <div class="header">
          <div class="header-back" onclick="confirm('确定退出？进度将丢失') && (location.href='paper.html?exam=${paperId}')">←</div>
          <div class="header-title">${paper.name}</div>
          <div id="timer" class="timer-display" style="font-size:18px">--:--</div>
        </div>
        <div class="content" style="padding-bottom:80px">
          <div class="question-header">
            <span class="question-type-tag">${typeMap[q.type] || '单选题'}</span>
            <span class="question-progress">${current + 1} / ${questions.length}</span>
          </div>

          <div class="question-card">
            <div class="question-content">${q.content}</div>
            <div class="question-options">
              ${q.options.map((opt, idx) => {
                const key = String.fromCharCode(65 + idx);
                const isSelected = answers[q.id] === key;
                const isAnswered = answers[q.id] !== undefined;
                const isCorrect = key === q.answer;
                let cls = '';
                if (isAnswered) {
                  if (isCorrect) cls = 'correct';
                  else if (isSelected) cls = 'wrong';
                }
                return `
                  <div class="option-item ${cls} ${isAnswered ? 'disabled' : ''}" onclick="${isAnswered ? '' : `selectMockOption('${q.id}','${key}')`}">
                    <div class="option-key">${key}</div>
                    <div class="option-text">${opt}</div>
                  </div>
                `;
              }).join('')}
            </div>
          </div>

          ${answers[q.id] !== undefined ? `
            <div class="analysis-card">
              <div class="analysis-title">📝 答案解析</div>
              <div class="analysis-text">
                <strong>正确答案：${q.answer}</strong><br><br>
                ${q.analysis}
              </div>
            </div>
          ` : ''}
        </div>

        <div class="btn-fixed">
          <div class="btn-group">
            <button class="btn btn-outline" ${current === 0 ? 'disabled style="opacity:0.4"' : ''} onclick="goMockQ(${current - 1})">← 上一题</button>
            ${current < questions.length - 1
              ? `<button class="btn btn-primary" onclick="goMockQ(${current + 1})">下一题 →</button>`
              : `<button class="btn btn-success" onclick="submitMock()">交卷评分 ✓</button>`
            }
          </div>
        </div>
      </div>
    `;

    startTimer(mock.timer || (paper.id === 'paper1' ? 7200 : 4500));
  }

  window.selectMockOption = function(qId, key) {
    const q = questions.find(q => q.id === qId);
    answers[qId] = key;

    if (key !== q.answer) {
      addToWrongBank(qId);
    } else {
      markCorrectInWrongBank(qId);
    }

    mock.answers = answers;
    storageSet(`mock_${paperId}`, mock);
    render();
  };

  window.goMockQ = function(idx) {
    location.href = `mock.html?paper=${paperId}&mode=test&q=${idx}`;
  };

  window.submitMock = function() {
    const { questions, answers } = storageGet(`mock_${paperId}`, {});
    const total = questions.length;
    let correct = 0;
    questions.forEach(q => {
      if (answers[q.id] === q.answer) correct++;
    });
    const pct = Math.round(correct / total * 100);
    storageSet(`mock_result_${paperId}`, { total, correct, pct, answers });
    location.href = `mock.html?paper=${paperId}&mode=result`;
  };

  render();
}

function startTimer(seconds) {
  let remaining = seconds;
  const timerEl = document.getElementById('timer');
  if (!timerEl) return;

  const tick = () => {
    if (remaining <= 0) {
      timerEl.textContent = '00:00';
      timerEl.classList.add('timer-warning');
      if (typeof submitMock === 'function') submitMock();
      return;
    }
    const m = Math.floor(remaining / 60);
    const s = remaining % 60;
    timerEl.textContent = `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
    if (remaining <= 60) timerEl.classList.add('timer-warning');
    remaining--;
    setTimeout(tick, 1000);
  };
  tick();
}

function renderMockResult() {
  const paperId = getUrlParam('paper');
  const result = storageGet(`mock_result_${paperId}`, null);
  const paper = FOCO_DATA.exams[0].chapters.find(p => p.id === paperId);
  const container = document.getElementById('app');

  if (!result) {
    container.innerHTML = `
      <div class="page">
        <div class="header">
          <div class="header-back" onclick="location.href='paper.html?exam=${paperId}'">←</div>
          <div class="header-title">考试成绩</div>
          <div style="width:32px"></div>
        </div>
        <div class="content">
          <div class="empty-state">
            <div class="icon">📭</div>
            <p>暂无考试成绩</p>
            <button class="btn btn-primary mt-20" onclick="location.href='mock.html?paper=${paperId}'" style="display:inline-block">去考试</button>
          </div>
        </div>
      </div>
    `;
    return;
  }

  const { total, correct, pct } = result;
  const passed = paper.id === 'paper1' ? (correct >= 53) : (correct >= 35);
  const color = pct >= 80 ? '#26a269' : pct >= 70 ? '#e5a50a' : '#c01c28';

  container.innerHTML = `
    <div class="page">
      <div class="header">
        <div class="header-back" onclick="location.href='paper.html?exam=${paperId}'">←</div>
        <div class="header-title">考试成绩</div>
        <div style="width:32px"></div>
      </div>
      <div class="content">
        <div class="result-card">
          <div class="result-score" style="color:${color}">${pct}%</div>
          <div class="result-label">${passed ? '🎉 合格！' : '💪 继续加油！'}</div>
          <div style="font-size:13px;color:var(--text-secondary);margin-bottom:16px">
            合格线：${paper.id === 'paper1' ? '53题（70%）' : '35题（70%）'} · 你的成绩：${correct}题
          </div>
          <div class="result-stats">
            <div class="result-stat">
              <div class="num green">${correct}</div>
              <div class="label">答对</div>
            </div>
            <div class="result-stat">
              <div class="num red">${total - correct}</div>
              <div class="label">答错</div>
            </div>
            <div class="result-stat">
              <div class="num">${total}</div>
              <div class="label">总题数</div>
            </div>
          </div>
        </div>

        <button class="btn btn-primary btn-block mb-12" onclick="location.href='mock.html?paper=${paperId}'">🔄 再考一次</button>
        <button class="btn btn-outline btn-block" onclick="location.href='paper.html?exam=${paperId}'">📖 返回章节</button>
      </div>
    </div>
  `;
}

// ==================== 路由分发 ====================

function init() {
  const page = document.body.dataset.page;
  switch(page) {
    case 'home': renderHome(); break;
    case 'paper': renderPaper(); break;
    case 'practice': renderPractice(); break;
    case 'mock': renderMock(); break;
    case 'mock-test': renderMockTest(); break;
    case 'mock-result': renderMockResult(); break;
    case 'wrong': renderWrong(); break;
    case 'wrong-practice': renderWrongPractice(); break;
  }
}

document.addEventListener('DOMContentLoaded', init);