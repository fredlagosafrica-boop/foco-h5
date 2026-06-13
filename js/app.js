// FOCO 备考 - 核心应用逻辑

// ==================== 工具函数 ====================

// 从URL参数获取值
function getUrlParam(key) {
  const params = new URLSearchParams(window.location.search);
  return params.get(key);
}

// 格式化时间（秒 → MM:SS）
function formatTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

// 存储本地数据
function storageSet(key, val) {
  try {
    localStorage.setItem(`foco_${key}`, JSON.stringify(val));
  } catch(e) {}
}

function storageGet(key, defaultVal) {
  try {
    const raw = localStorage.getItem(`foco_${key}`);
    return raw ? JSON.parse(raw) : defaultVal;
  } catch(e) {
    return defaultVal;
  }
}

// 进度环SVG
function progressRing(pct, size = 80) {
  const r = (size / 2) - 6;
  const circ = 2 * Math.PI * r;
  const offset = circ - (pct / 100) * circ;
  return `
    <div class="progress-ring" style="width:${size}px;height:${size}px">
      <svg width="${size}" height="${size}">
        <circle class="bg" cx="${size/2}" cy="${size/2}" r="${r}"/>
        <circle class="fill" cx="${size/2}" cy="${size/2}" r="${r}"
          stroke-dasharray="${circ}"
          stroke-dashoffset="${offset}"/>
      </svg>
      <div class="text">${pct}%</div>
    </div>`;
}

// ==================== 首页渲染 ====================

function renderHome() {
  const container = document.getElementById('app');
  const stats = getStats();

  container.innerHTML = `
    <div class="page">
      <div class="content">
        <div class="banner">
          <h2>📚 FOCO 备考</h2>
          <p>极简金融题库 · 随时随地高效学习</p>
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
            <div class="num">${stats.days}</div>
            <div class="label">学习天数</div>
          </div>
        </div>

        <div class="section-title">📝 选择考试</div>
        <div class="exam-grid">
          ${FOCO_DATA.exams.map(exam => `
            <div class="exam-card" onclick="location.href='exam.html?exam=${exam.id}'">
              <div class="icon">${exam.cover}</div>
              <div class="name">${exam.shortName}</div>
              <div class="desc">${exam.name}</div>
              <div class="meta">${exam.chapters.reduce((a,c) => a+c.questionCount, 0)}题</div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

function getStats() {
  const total = storageGet('total_answered', 0);
  const correct = storageGet('total_correct', 0);
  const days = storageGet('study_days', 0);
  return {
    total,
    accuracy: total > 0 ? Math.round(correct / total * 100) : 0,
    days
  };
}

// ==================== 题库页渲染 ====================

function renderExam() {
  const examId = getUrlParam('exam');
  const exam = FOCO_DATA.exams.find(e => e.id === examId);
  if (!exam) { location.href = 'index.html'; return; }

  const container = document.getElementById('app');

  // 计算每个章节的进度
  const progress = storageGet(`progress_${examId}`, {});

  container.innerHTML = `
    <div class="page">
      <div class="header">
        <div class="header-back" onclick="location.href='index.html'">←</div>
        <div class="header-title">${exam.shortName} 题库</div>
        <div style="width:32px"></div>
      </div>
      <div class="content">
        <div class="banner" style="background:linear-gradient(135deg,${exam.color} 0%,${exam.color}cc 100%)">
          <h2>${exam.cover} ${exam.shortName}</h2>
          <p>${exam.name}</p>
          <p style="margin-top:6px;font-size:12px;opacity:0.8">共 ${exam.chapters.reduce((a,c)=>a+c.questionCount,0)} 道题目</p>
        </div>

        <div class="section-title">📖 章节列表</div>
        ${exam.chapters.map((ch, i) => {
          const done = progress[ch.id] || 0;
          const pct = Math.round(done / ch.questionCount * 100);
          return `
            <div class="chapter-card" onclick="location.href='practice.html?exam=${examId}&chapter=${ch.id}'">
              <div class="chapter-icon" style="background:${exam.color}15;color:${exam.color}">${i+1}</div>
              <div class="chapter-info">
                <div class="name">${ch.name}</div>
                <div class="meta">${ch.questionCount}题 · 已完成${done}题</div>
                <div class="progress-bar">
                  <div class="progress-fill" style="width:${pct}%;background:${exam.color}"></div>
                </div>
              </div>
              <div class="chapter-arrow">›</div>
            </div>
          `;
        }).join('')}

        <div class="section-title mt-20">🎯 模拟考试</div>
        <div class="chapter-card" onclick="location.href='mock.html?exam=${examId}'">
          <div class="chapter-icon" style="background:#9141ac15;color:#9141ac">🏆</div>
          <div class="chapter-info">
            <div class="name">综合模拟卷</div>
            <div class="meta">随机抽题 · 计时考试 · 即时评分</div>
          </div>
          <div class="chapter-arrow">›</div>
        </div>
      </div>
    </div>
  `;
}

// ==================== 做题页渲染 ====================

function renderPractice() {
  const examId = getUrlParam('exam');
  const chapterId = getUrlParam('chapter');
  const exam = FOCO_DATA.exams.find(e => e.id === examId);
  if (!exam) { location.href = 'index.html'; return; }
  const chapter = exam.chapters.find(c => c.id === chapterId);
  if (!chapter) { location.href = `exam.html?exam=${examId}`; return; }

  const questions = chapter.questions;
  let current = parseInt(getUrlParam('q') || '0');
  let answers = JSON.parse(getUrlParam('answers') || '{}');

  const q = questions[current];
  const container = document.getElementById('app');

  function render() {
    const answered = Object.keys(answers).length;
    const typeMap = { single: '单选题', judge: '判断题', multiple: '多选题' };

    container.innerHTML = `
      <div class="page">
        <div class="header">
          <div class="header-back" onclick="location.href='exam.html?exam=${examId}'">←</div>
          <div class="header-title">${chapter.name}</div>
          <div style="width:32px"></div>
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
                return `
                  <div class="option-item ${isSelected ? 'selected' : ''}" onclick="selectOption('${q.id}','${key}')">
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
              : `<button class="btn btn-success" onclick="location.href='exam.html?exam=${examId}'">完成本章 ✓</button>`
            }
          </div>
        </div>
      </div>
    `;
  }

  window.selectOption = function(qId, key) {
    answers[qId] = key;
    // 记录答案
    const isCorrect = key === q.answer;
    recordAnswer(qId, isCorrect);
    // 更新URL保持状态
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

  // 记录日期（用于学习天数统计）
  const today = new Date().toDateString();
  const lastStudy = storageGet('last_study_date', '');
  if (lastStudy !== today) {
    let days = storageGet('study_days', 0) + 1;
    storageSet('study_days', days);
    storageSet('last_study_date', today);
  }
}

// ==================== 模拟考试页渲染 ====================

function renderMock() {
  const examId = getUrlParam('exam');
  const exam = FOCO_DATA.exams.find(e => e.id === examId);
  if (!exam) { location.href = 'index.html'; return; }

  const allQuestions = exam.chapters.flatMap(ch => ch.questions);
  // 随机抽10题
  const shuffled = allQuestions.sort(() => Math.random() - 0.5).slice(0, Math.min(10, allQuestions.length));

  // 存储试卷
  storageSet(`mock_${examId}`, { questions: shuffled, answers: {}, startTime: Date.now() });

  const container = document.getElementById('app');

  function renderStart() {
    container.innerHTML = `
      <div class="page">
        <div class="header">
          <div class="header-back" onclick="location.href='exam.html?exam=${examId}'">←</div>
          <div class="header-title">模拟考试</div>
          <div style="width:32px"></div>
        </div>
        <div class="content">
          <div class="mock-info">
            <div class="icon" style="font-size:48px;margin-bottom:12px">🏆</div>
            <div class="title">${exam.shortName} 综合模拟</div>
            <div class="desc">随机抽题 · 计时考试 · 即时评分</div>
            <div style="margin:20px 0">
              <div class="text-sm text-secondary">题目数量</div>
              <div class="font-bold" style="font-size:20px">${shuffled.length} 题</div>
            </div>
            <div style="margin-bottom:20px">
              <div class="text-sm text-secondary">建议时长</div>
              <div class="font-bold" style="font-size:20px">${shuffled.length * 1.5} 分钟</div>
            </div>
          </div>

          <button class="btn btn-primary btn-block" onclick="startMock()">
            🎯 开始考试
          </button>
        </div>
      </div>
    `;
  }

  window.startMock = function() {
    storageSet(`mock_${examId}`, {
      questions: shuffled,
      answers: {},
      startTime: Date.now(),
      current: 0,
      timer: shuffled.length * 90 // 每题90秒
    });
    location.href = `mock.html?exam=${examId}&mode=test`;
  };

  renderStart();
}

function renderMockTest() {
  const examId = getUrlParam('exam');
  const mode = getUrlParam('mode');
  const exam = FOCO_DATA.exams.find(e => e.id === examId);
  if (!exam) { location.href = 'index.html'; return; }

  const mock = storageGet(`mock_${examId}`, null);
  if (!mock) { location.href = `mock.html?exam=${examId}`; return; }

  const { questions, answers, current: startIdx } = mock;
  let current = parseInt(getUrlParam('q') || '0');
  const q = questions[current];
  const container = document.getElementById('app');

  function render() {
    const typeMap = { single: '单选题', judge: '判断题', multiple: '多选题' };
    const answered = Object.keys(answers).length;

    container.innerHTML = `
      <div class="page">
        <div class="header">
          <div class="header-back" onclick="confirm('确定退出？进度将丢失') && (location.href='exam.html?exam=${examId}')">←</div>
          <div class="header-title">模拟考试</div>
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
                return `
                  <div class="option-item ${isSelected ? 'selected' : ''}" onclick="selectMockOption('${q.id}','${key}')">
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

    // 启动计时器
    startTimer(mock.timer || questions.length * 90);
  }

  window.selectMockOption = function(qId, key) {
    answers[qId] = key;
    mock.answers = answers;
    storageSet(`mock_${examId}`, mock);
    render();
  };

  window.goMockQ = function(idx) {
    location.href = `mock.html?exam=${examId}&mode=test&q=${idx}`;
  };

  window.submitMock = function() {
    // 计算分数
    const total = questions.length;
    let correct = 0;
    questions.forEach(q => {
      if (answers[q.id] === q.answer) correct++;
    });
    const pct = Math.round(correct / total * 100);

    // 清理试卷
    storageSet(`mock_result_${examId}`, { total, correct, pct, answers });
    location.href = `mock.html?exam=${examId}&mode=result`;
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
      // 自动交卷
      submitMock();
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

function submitMock() {
  const examId = getUrlParam('exam');
  const mock = storageGet(`mock_${examId}`, null);
  if (!mock) return;

  const { questions, answers } = mock;
  const total = questions.length;
  let correct = 0;
  questions.forEach(q => {
    if (answers[q.id] === q.answer) correct++;
  });
  const pct = Math.round(correct / total * 100);

  storageSet(`mock_result_${examId}`, { total, correct, pct, answers });
  location.href = `mock.html?exam=${examId}&mode=result`;
}

function renderMockResult() {
  const examId = getUrlParam('exam');
  const result = storageGet(`mock_result_${examId}`, null);
  const exam = FOCO_DATA.exams.find(e => e.id === examId);

  const container = document.getElementById('app');

  if (!result) {
    container.innerHTML = `
      <div class="page">
        <div class="header">
          <div class="header-back" onclick="location.href='exam.html?exam=${examId}'">←</div>
          <div class="header-title">考试成绩</div>
          <div style="width:32px"></div>
        </div>
        <div class="content">
          <div class="empty-state">
            <div class="icon">📭</div>
            <p>暂无考试成绩</p>
            <button class="btn btn-primary mt-20" onclick="location.href='mock.html?exam=${examId}'" style="display:inline-block">去考试</button>
          </div>
        </div>
      </div>
    `;
    return;
  }

  const { total, correct, pct } = result;
  const color = pct >= 70 ? '#26a269' : pct >= 50 ? '#e5a50a' : '#c01c28';

  container.innerHTML = `
    <div class="page">
      <div class="header">
        <div class="header-back" onclick="location.href='exam.html?exam=${examId}'">←</div>
        <div class="header-title">考试成绩</div>
        <div style="width:32px"></div>
      </div>
      <div class="content">
        <div class="result-card">
          <div class="result-score" style="color:${color}">${pct}%</div>
          <div class="result-label">${pct >= 70 ? '🎉 成绩合格！' : pct >= 50 ? '📚 继续加油！' : '💪 还需努力！'}</div>
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

        <button class="btn btn-primary btn-block mb-12" onclick="location.href='mock.html?exam=${examId}'">🔄 再考一次</button>
        <button class="btn btn-outline btn-block" onclick="location.href='exam.html?exam=${examId}'">📖 返回题库</button>
      </div>
    </div>
  `;
}

// ==================== 路由分发 ====================

function init() {
  const page = document.body.dataset.page;
  switch(page) {
    case 'home': renderHome(); break;
    case 'exam': renderExam(); break;
    case 'practice': renderPractice(); break;
    case 'mock': renderMock(); break;
    case 'mock-test': renderMockTest(); break;
    case 'mock-result': renderMockResult(); break;
  }
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', init);