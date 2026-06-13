// FOCO 备考 - IIQE 题库数据
// Paper 1 保险原理及实务 + Paper 3 长期保险
// 章节结构按香港 IA 官方大纲拆分

const FOCO_DATA = {
  exams: [
    {
      id: 'iique',
      name: 'FOCO 备考',
      shortName: 'IIQE',
      cover: '📚',
      color: '#1a5fb4',
      description: '保险从业资格考试 · 章节练习 · 模拟考试',
      chapters: []
    }
  ]
};

// ==================== Paper 1 卷一 ====================
// 官方大纲：7大模块，75题/卷，合格53题（70.7%）
const PAPER1 = {
  examId: 'iique',
  examName: '卷一 Paper 1',
  shortName: '卷一',
  fullName: '保险原理及实务',
  totalQuestions: 75,
  passScore: 53,
  timeMinutes: 120,
  color: '#1a5fb4',
  chapters: [
    {
      id: 'p1-ch1',
      name: '风险及保险',
      weight: '15%',
      targetQuestions: 12,
      questions: [
        {
          id: 'p1-ch1-1', type: 'single',
          content: '风险的定义为？',
          options: ['A. 任何可能发生的事件', 'B. 潜在损失的不确定性', 'C. 必然发生的损失', 'D. 仅指自然灾害'],
          answer: 'B',
          analysis: '风险是指在特定情况下，某一结果的不确定性，特别是潜在损失发生的不确定性。',
          difficulty: 1
        },
        {
          id: 'p1-ch1-2', type: 'single',
          content: '纯风险与投机风险的主要区别是？',
          options: ['A. 纯风险可以保险，投机风险不可以', 'B. 两者都可以保险', 'C. 投机风险可能带来收益，纯风险只会造成损失', 'D. 纯风险发生概率更高'],
          answer: 'C',
          analysis: '纯风险（Pure Risk）只会造成损失或无损失，不会带来收益；投机风险（Speculative Risk）则可能同时带来收益或损失。保险主要承保纯风险。',
          difficulty: 1
        },
        {
          id: 'p1-ch1-3', type: 'single',
          content: '以下哪种不属于风险管理的方法？',
          options: ['A. 风险规避', 'B. 风险控制', 'C. 风险投机', 'D. 风险转移'],
          answer: 'C',
          analysis: '风险管理的基本方法包括：风险规避（Avoidance）、风险控制（Control）、风险转移（Transfer）和风险自留（Retention）。"风险投机"不是正规风险管理方法。',
          difficulty: 1
        },
        {
          id: 'p1-ch1-4', type: 'judge',
          content: '可保利益原则要求投保人对保险标的必须具有法律上承认的利益。',
          options: ['正确', '错误'],
          answer: '正确',
          analysis: '可保利益（Insurable Interest）是保险的基本原则之一，投保人必须对保险标的具有法律上承认的利益，否则保险合同无效。',
          difficulty: 1
        },
        {
          id: 'p1-ch1-5', type: 'single',
          content: '最大诚信原则（Utmost Good Faith）要求？',
          options: ['A. 保险公司必须完全告知所有信息', 'B. 投保人必须如实告知重要事实', 'C. 双方无需披露任何信息', 'D. 仅在理赔时适用'],
          answer: 'B',
          analysis: '最大诚信原则要求投保人/被保险人在投保时如实告知所有影响保险公司承保决定的重要事实（Material Facts）。违反此原则可导致合同无效或拒赔。',
          difficulty: 2
        },
        {
          id: 'p1-ch1-6', type: 'single',
          content: '近因原则（Principle of Proximate Cause）在保险中的含义是？',
          options: ['A. 最近发生的原因', 'B. 直接导致损失的最主要、最有效的原因', 'C. 时间上最后发生的原因', 'D. 所有原因的平均'],
          answer: 'B',
          analysis: '近因是指造成损失的最主要、最有效的原因（the dominant and efficient cause）。保险公司只对近因造成的损失承担赔偿责任。',
          difficulty: 2
        },
        {
          id: 'p1-ch1-7', type: 'single',
          content: '代位求偿权（Subrogation）是指？',
          options: ['A. 投保人有权代位保险公司进行求偿', 'B. 保险公司赔付后取得投保人对第三方的求偿权', 'C. 投保人可代位其他投保人', 'D. 保险公司放弃求偿权'],
          answer: 'B',
          analysis: '代位求偿权指保险公司在赔付被保险人的损失后，依法取得被保险人对第三方（责任人）的求偿权利。这避免被保险人双重获利。',
          difficulty: 2
        },
        {
          id: 'p1-ch1-8', type: 'single',
          content: '保险分类中，"长期保险"与"一般保险"的根本区别是？',
          options: ['A. 保障期限长短', 'B. 保费高低', 'C. 承保风险类型', 'D. A和C'],
          answer: 'D',
          analysis: '长期保险（Long-Term Insurance）通常指保障期限超过一年、以人死亡或生存为保险事故的保险，如寿险、年金；一般保险（General Insurance）主要承保财产损失、责任风险等短期风险。两者在保障期限和承保风险类型上均有区别。',
          difficulty: 2
        },
        {
          id: 'p1-ch1-9', type: 'judge',
          content: '分摊原则（Contribution）允许保险公司在重复保险情况下按比例分摊赔偿。',
          options: ['正确', '错误'],
          answer: '正确',
          analysis: '分摊原则适用于重复保险：当同一标的向多家保险公司投保时，各保险公司按比例分摊赔偿金额，被保险人不能获得超过实际损失的赔偿。',
          difficulty: 2
        },
        {
          id: 'p1-ch1-10', type: 'single',
          content: '以下哪种风险属于可保风险？',
          options: ['A. 赌博输钱', 'B. 投机股票失利', 'C. 火灾导致财产损失', 'D. 商业投资失败'],
          answer: 'C',
          analysis: '可保风险需满足：纯粹性（只造成损失）、偶然性、可测定性、可计算性等条件。火灾属于纯粹风险，符合可保风险条件。赌博和投机股票属于投机风险，通常不可保。',
          difficulty: 1
        }
      ]
    },
    {
      id: 'p1-ch2',
      name: '法律原则',
      weight: '15%',
      targetQuestions: 12,
      questions: [
        {
          id: 'p1-ch2-1', type: 'single',
          content: '保险合同的基本要素不包括？',
          options: ['A. 要约与承诺', 'B. 对价', 'C. 赌博筹码', 'D. 合法行为能力'],
          answer: 'C',
          analysis: '保险合同是民事合同的一种，其有效要件包括：要约与承诺、对价、合法行为能力。赌博筹码不是合同要素。',
          difficulty: 1
        },
        {
          id: 'p1-ch2-2', type: 'single',
          content: '保险合同区别于普通合同的主要特点是？',
          options: ['A. 无需承诺', 'B. 射幸性', 'C. 可以口头形式', 'D. 无需书面'],
          answer: 'B',
          analysis: '保险合同是典型的射幸合同（Aleatory Contract），其效力取决于保险事故是否发生，具有很大的偶然性。这是保险合同与普通等价交换合同的根本区别。',
          difficulty: 1
        },
        {
          id: 'p1-ch2-3', type: 'single',
          content: '一份完整保单的构成部分不包括？',
          options: ['A. 声明页', 'B. 承保条款', 'C. 除外责任', 'D. 投资收益条款'],
          answer: 'D',
          analysis: '标准保单通常由声明页（Declarations）、承保条款（Insuring Clause）、除外责任（Exclusions）、条件条款（Conditions）和批注（Endorsements）组成。投资收益条款不是保单必需组成部分。',
          difficulty: 2
        },
        {
          id: 'p1-ch2-4', type: 'judge',
          content: '保险合同中可以约定"除外责任"条款，明确保险公司不承担赔偿责任的情形。',
          options: ['正确', '错误'],
          answer: '正确',
          analysis: '除外责任（Exclusions）是保单的重要组成部分，明确列出保险公司不承担赔偿责任的情形，如战争、自杀、故意行为等。',
          difficulty: 1
        },
        {
          id: 'p1-ch2-5', type: 'single',
          content: '保险合同解除与终止的主要区别是？',
          options: ['A. 解除可溯及既往，终止不溯及', 'B. 两者无区别', 'C. 终止可溯及既往，解除不溯及', 'D. 解除仅适用于财险'],
          answer: 'A',
          analysis: '合同解除（Rescission）是指使合同自始无效，通常溯及既往；合同终止（Termination）是指合同从某一时刻起不再继续效力，不溯及既往。',
          difficulty: 2
        },
        {
          id: 'p1-ch2-6', type: 'single',
          content: '保单复效（Reinstatement）的条件一般不包括？',
          options: ['A. 被保险人身体健康', 'B. 缴清欠缴保费及利息', 'C. 保险公司同意', 'D. 投保人无需提出申请'],
          answer: 'D',
          analysis: '保单复效是指失效保单恢复效力，通常需要满足：投保人提出申请、缴清欠缴保费及利息、被保险人符合可保条件、保险公司审核同意等条件。',
          difficulty: 2
        },
        {
          id: 'p1-ch2-7', type: 'judge',
          content: '保险合同是附和合同（Contract of Adhesion），即保险条款由保险公司预先拟定，投保人只能整体接受或拒绝。',
          options: ['正确', '错误'],
          answer: '正确',
          analysis: '保险合同是典型的附和合同，条款由保险公司单方拟定，投保人处于"接受或拒绝"的选择地位。这导致对条款解释有疑义时，通常作有利于被保险人的解释（Contra Preferentem）。',
          difficulty: 2
        },
        {
          id: 'p1-ch2-8', type: 'single',
          content: '以下哪种情况可能导致保险合同失效？',
          options: ['A. 保费按时缴纳', 'B. 保险标的灭失', 'C. 受益人变更', 'D. 投保人搬迁'],
          answer: 'B',
          analysis: '当保险标的全部灭失（Total Loss）时，保险合同失去承保对象，通常导致合同失效。保费缴纳、受益人变更、投保人搬迁一般不影响合同效力。',
          difficulty: 1
        },
        {
          id: 'p1-ch2-9', type: 'single',
          content: '保险合同中的"条件"条款主要规定的是？',
          options: ['A. 承保范围', 'B. 投保人和保险公司的权利义务', 'C. 理赔金额', 'D. 投资收益'],
          answer: 'B',
          analysis: '保单条件（Conditions）是保单中规定投保人和保险公司各自权利义务的条款，如通知义务、损失减少义务、理赔配合义务等。违反条件可能导致保险公司拒绝赔付。',
          difficulty: 2
        },
        {
          id: 'p1-ch2-10', type: 'single',
          content: '批注（Endorsement）对保单的作用是？',
          options: ['A. 仅用于美观', 'B. 修改或增加保单条款', 'C. 仅在财险中使用', 'D. 取消保单'],
          answer: 'B',
          analysis: '批注（Endorsement）是保单签发后，经双方同意对原保单条款进行修改、补充或删除的文件，具有与保单正文同等的法律效力。',
          difficulty: 1
        }
      ]
    },
    {
      id: 'p1-ch3',
      name: '保险原则',
      weight: '10%',
      targetQuestions: 8,
      questions: [
        {
          id: 'p1-ch3-1', type: 'single',
          content: '香港保险业监管局（IA）的职能是？',
          options: ['A. 制定货币政策', 'B. 监管保险公司和保险中介人', 'C. 直接承保保险业务', 'D. 提供银行贷款'],
          answer: 'B',
          analysis: '保险业监管局（Insurer Authority，IA）是香港保险业的独立监管机构，负责监管保险公司和保险中介人的活动，确保市场稳健运作。',
          difficulty: 1
        },
        {
          id: 'p1-ch3-2', type: 'single',
          content: '香港保险中介人主要分为？',
          options: ['A. 代理人和经纪人', 'B. 银行和券商', 'C. 个人和法人', 'D. 国内和国外'],
          answer: 'A',
          analysis: '香港保险中介人主要分为两大类：保险代理人（Insurance Agent，代表保险公司）和保险经纪人（Insurance Broker，代表客户）。',
          difficulty: 1
        },
        {
          id: 'p1-ch3-3', type: 'judge',
          content: '在香港，保险中介人必须持有有效牌照才能从事保险销售业务。',
          options: ['正确', '错误'],
          answer: '正确',
          analysis: '根据《保险业条例》（Insurance Ordinance），在香港从事保险中介业务必须持有香港保险业监管局颁发的有效牌照，并遵守相关操守准则。',
          difficulty: 1
        },
        {
          id: 'p1-ch3-4', type: 'single',
          content: '保险代理人与保险经纪人的核心区别是？',
          options: ['A. 代理人是个人，经纪人是公司', 'B. 代理人代表保险公司，经纪人代表客户', 'C. 两者无区别', 'D. 代理人无需培训'],
          answer: 'B',
          analysis: '保险代理人（Agent）代表保险公司推销保险产品；保险经纪人（Broker）则代表客户，为客户寻找合适的保险产品。两者代表利益不同，这是根本区别。',
          difficulty: 1
        },
        {
          id: 'p1-ch3-5', type: 'single',
          content: '《个人资料（私隐）条例》对保险中介人的要求是？',
          options: ['A. 禁止收集客户资料', 'B. 必须妥善保护客户个人资料', 'C. 可自由使用客户资料', 'D. 仅适用于电子资料'],
          answer: 'B',
          analysis: '保险中介人在业务中收集大量客户个人资料，必须遵守《个人资料（私隐）条例》，妥善保护客户资料，不得未经授权使用或披露。',
          difficulty: 2
        },
        {
          id: 'p1-ch3-6', type: 'single',
          content: '保险中介人操守准则（Code of Conduct）主要规范的是？',
          options: ['A. 投资建议', 'B. 中介人的专业行为和道德标准', 'C. 产品定价', 'D. 税收申报'],
          answer: 'B',
          analysis: '保险中介人操守准则由香港保险业监管局制定，主要规范中介人的专业行为、道德标准、合规要求，确保为客户提供专业、诚信的服务。',
          difficulty: 2
        },
        {
          id: 'p1-ch3-7', type: 'judge',
          content: '保险经纪必须为客户购买保险时，必须以最优惠的条件为客户寻找最适合的产品。',
          options: ['正确', '错误'],
          answer: '正确',
          analysis: '保险经纪的职责是代表客户，在市场上为客户寻找最适合的保险产品，并以最优惠的条件为客户争取。这是经纪人与代理人的重要区别。',
          difficulty: 2
        },
        {
          id: 'p1-ch3-8', type: 'single',
          content: '香港保险业监管局对保险中介人的违规行为可采取的处分不包括？',
          options: ['A. 纪律处分', 'B. 罚款', 'C. 撤销牌照', 'D. 刑事起诉'],
          answer: 'D',
          analysis: 'IA可对违规中介人采取的处分包括：纪律处分（斥责、罚款）、暂停牌照、撤销牌照等。严重刑事犯罪会转交执法部门处理。',
          difficulty: 2
        }
      ]
    },
    {
      id: 'p1-ch4',
      name: '保险公司的主要功能',
      weight: '20%',
      targetQuestions: 15,
      questions: [
        {
          id: 'p1-ch4-1', type: 'single',
          content: '投保流程的第一步一般是？',
          options: ['A. 签发保单', 'B. 填写投保申请书', 'C. 缴纳保费', 'D. 体检'],
          answer: 'B',
          analysis: '投保流程通常第一步是填写投保申请书（Proposal Form），如实告知个人信息和健康状况，保险公司据此进行核保评估。',
          difficulty: 1
        },
        {
          id: 'p1-ch4-2', type: 'single',
          content: '核保（Underwriting）的主要目的是？',
          options: ['A. 加快理赔速度', 'B. 评估风险、决定是否承保及保费高低', 'C. 推销更多产品', 'D. 降低保险公司成本'],
          answer: 'B',
          analysis: '核保是保险公司评估投保标的的风险程度，决定是否接受承保、以何种条件承保（标准体、次标准体或拒保）以及厘定适当保费的过程。',
          difficulty: 1
        },
        {
          id: 'p1-ch4-3', type: 'single',
          content: '保费计算的基础是？',
          options: ['A. 投保人喜好', 'B. 保险标的的预期损失率', 'C. 市场竞争', 'D. 保险公司规模'],
          answer: 'B',
          analysis: '保费计算基于大数法则，参考保险标的的历史损失数据和预期损失率，加上附加费用和合理利润，形成保费水平。',
          difficulty: 2
        },
        {
          id: 'p1-ch4-4', type: 'judge',
          content: '现金价值（Cash Value）是投保人解除保单时可获得的退保价值。',
          options: ['正确', '错误'],
          answer: '正确',
          analysis: '现金价值（Cancellation Value）是长期人身保险中，投保人按时缴纳保费并经过一定时期后，保单累积的解约退还金。现金价值通常低于已缴保费总额。',
          difficulty: 1
        },
        {
          id: 'p1-ch4-5', type: 'single',
          content: '理赔流程的第一步是？',
          options: ['A. 支付赔款', 'B. 报案并提出索赔申请', 'C. 调查保险事故', 'D. 起诉第三方'],
          answer: 'B',
          analysis: '理赔流程第一步是出险后及时向保险公司报案并提出正式的索赔申请（Notification + Claim Application），这是启动理赔程序的前提。',
          difficulty: 1
        },
        {
          id: 'p1-ch4-6', type: 'single',
          content: '保险公司拒绝赔付的常见理由不包括？',
          options: ['A. 未如实告知', 'B. 属于除外责任', 'C. 保费已按时缴纳', 'D. 损失不属于承保范围'],
          answer: 'C',
          analysis: '常见拒赔理由包括：违反如实告知义务、损失属于除外责任、不属于承保范围、保单已失效等。保费按时缴纳是保险公司应履行赔付义务的前提，不是拒赔理由。',
          difficulty: 1
        },
        {
          id: 'p1-ch4-7', type: 'single',
          content: '保单变更中，变更受益人需要？',
          options: ['A. 保险公司同意', 'B. 被保险人同意', 'C. 只需投保人通知', 'D. 不允许变更'],
          answer: 'B',
          analysis: '受益人变更涉及被保险人的利益，通常需要被保险人同意（除非被保险人即是投保人），并书面通知保险公司完成批注手续。',
          difficulty: 2
        },
        {
          id: 'p1-ch4-8', type: 'single',
          content: '宽限期（Grace Period）一般是多少天？',
          options: ['A. 10天', 'B. 30天', 'C. 60天', 'D. 90天'],
          answer: 'B',
          analysis: '宽限期（Grace Period）是指保费到期后，保险公司给予投保人补缴保费而不致保单立即失效的期限，通常为30天（长期寿险标准宽限期）。',
          difficulty: 1
        },
        {
          id: 'p1-ch4-9', type: 'judge',
          content: '退保（ lapsation）是指投保人中途解除保险合同的行为。',
          options: ['正确', '错误'],
          answer: '正确',
          analysis: '退保（Lapsation）是指在保险合同有效期内，投保人申请解除合同的行为。长期险退保可获得现金价值；财险退保按短期费率计算退还保费。',
          difficulty: 1
        },
        {
          id: 'p1-ch4-10', type: 'single',
          content: '投保建议书（Illustration）的主要作用是？',
          options: ['A. 作为正式合同', 'B. 说明保险产品特点、演示利益', 'C. 确定保费', 'D. 代替核保'],
          answer: 'B',
          analysis: '投保建议书（Illustration）是向潜在客户解释保险产品特点、演示保险利益、说明保费和保障范围的文件，帮助客户理解产品，非正式合同文件。',
          difficulty: 1
        },
        {
          id: 'p1-ch4-11', type: 'single',
          content: '保险公估行（Loss Adjuster）的作用是？',
          options: ['A. 承保保险业务', 'B. 评估损失程度和金额', 'C. 销售保险产品', 'D. 制定保险费率'],
          answer: 'B',
          analysis: '保险公估行（Loss Adjuster/Assessor）是独立的专业机构，受保险公司或被保险人委托，对保险事故损失进行评估、勘察和确定损失金额。',
          difficulty: 2
        },
        {
          id: 'p1-ch4-12', type: 'single',
          content: '保费缴付方式一般不包括？',
          options: ['A. 年缴', 'B. 半年缴', 'C. 按股票盈利缴付', 'D. 月缴'],
          answer: 'C',
          analysis: '保费缴付方式通常有年缴、半年缴、季缴、月缴等。按股票盈利缴付不是正规的保费缴付方式。',
          difficulty: 1
        },
        {
          id: 'p1-ch4-13', type: 'judge',
          content: '保险事故发生后，被保险人有义务采取合理措施减少损失。',
          options: ['正确', '错误'],
          answer: '正确',
          analysis: '保险合同中通常有"损失减少义务"条款，要求被保险人在保险事故发生后采取合理措施减少损失，否则保险公司对扩大部分不承担赔偿责任。',
          difficulty: 1
        },
        {
          id: 'p1-ch4-14', type: 'single',
          content: '保单签发后，投保人一般有多少天可申请撤单？',
          options: ['A. 7天', 'B. 14天', 'C. 21天', 'D. 30天'],
          answer: 'B',
          analysis: '香港保险业监管局规定，投保人收到保单后一般有14天（冷静期/Cooling-off Period）的考虑期，在此期间可申请撤单并获得全额退还保费。',
          difficulty: 1
        },
        {
          id: 'p1-ch4-15', type: 'single',
          content: '保险理赔中的"比例赔付"一般适用于？',
          options: ['A. 足额保险', 'B. 不足额保险或超额保险', 'C. 定值保险', 'D. 人寿保险'],
          answer: 'B',
          analysis: '比例赔付（Pro-rata）通常适用于不足额保险（保额低于实际价值）或超额保险（保额超过实际价值）的情况，按保险金额与实际价值的比例计算赔付。',
          difficulty: 2
        }
      ]
    },
    {
      id: 'p1-ch5',
      name: '香港保险业的结构',
      weight: '15%',
      targetQuestions: 12,
      questions: [
        {
          id: 'p1-ch5-1', type: 'single',
          content: '一般保险主要承保哪类风险？',
          options: ['A. 人身风险', 'B. 财产损失和法律责任风险', 'C. 股票投资风险', 'D. 退休保障风险'],
          answer: 'B',
          analysis: '一般保险（General Insurance）主要承保财产损失风险（如火灾、盗窃）和法律责任风险（如第三者责任），与以人身为保险标的的人寿保险相区别。',
          difficulty: 1
        },
        {
          id: 'p1-ch5-2', type: 'single',
          content: '家居保险（Home Insurance）主要保障的是？',
          options: ['A. 房屋结构', 'B. 家居财物及第三方责任', 'C. 房屋贷款', 'D. 业主法律责任'],
          answer: 'B',
          analysis: '家居保险主要保障家居财物因火灾、盗窃等造成的损失，以及因家居意外导致的第三方人身/财产损害赔偿责任。房屋结构通常由楼宇保险保障。',
          difficulty: 1
        },
        {
          id: 'p1-ch5-3', type: 'single',
          content: '雇员补偿保险（Employees Compensation Insurance）的特点是？',
          options: ['A. 自愿投保', 'B. 强制性保险', 'C. 仅适用于高层管理人员', 'D. 由雇员自行购买'],
          answer: 'B',
          analysis: '雇员补偿保险是香港强制性的保险，雇主必须为所有雇员（包括本地及外地雇员）投保，以保障雇员因工受伤或患职业病时的权益。',
          difficulty: 1
        },
        {
          id: 'p1-ch5-4', type: 'judge',
          content: '汽车保险中的"第三者责任险"是强制保险。',
          options: ['正确', '错误'],
          answer: '正确',
          analysis: '在香港，汽车第三者责任保险（Third Party Liability）是强制保险，车主必须投保，以保障因交通意外造成第三方人身伤亡的赔偿。综合保险（Comprehensive）则为自选投保。',
          difficulty: 1
        },
        {
          id: 'p1-ch5-5', type: 'single',
          content: '旅游保险一般不包括以下哪项保障？',
          options: ['A. 行程取消', 'B. 行李遗失', 'C. 原有疾病医疗', 'D. 紧急医疗费用'],
          answer: 'C',
          analysis: '旅游保险通常保障：行程取消/缩短、行李遗失/延误、紧急医疗费用、个人责任等。原有疾病（Pre-existing Condition）一般不在保障范围内，是常见不保事项。',
          difficulty: 2
        },
        {
          id: 'p1-ch5-6', type: 'single',
          content: '财产保险中，"实际现金价值"是指？',
          options: ['A. 重置价值扣除折旧', 'B. 购入价格', 'C. 市场评估价值', 'D. 投保金额'],
          answer: 'A',
          analysis: '实际现金价值（Actual Cash Value，ACV）是指财产在损失发生时的重置价值扣除折旧后的金额，是财产险赔付的计算基础之一。',
          difficulty: 2
        },
        {
          id: 'p1-ch5-7', type: 'single',
          content: '责任保险的赔付一般以什么为限？',
          options: ['A. 保单限额', 'B. 被保险人收入', 'C. 保险标的的价值', 'D. 保费金额'],
          answer: 'A',
          analysis: '责任保险的赔付以保单规定的责任限额（Policy Limit）为上限，每次事故和累计赔偿均有额度限制，超出部分由被保险人自行承担。',
          difficulty: 1
        },
        {
          id: 'p1-ch5-8', type: 'judge',
          content: '意外保险（Personal Accident Insurance）主要保障因意外导致的身故、伤残和医疗费用。',
          options: ['正确', '错误'],
          answer: '正确',
          analysis: '意外保险保障因意外事故（Accident）导致的身体伤害，包括：意外身故（Accidental Death）、意外伤残（Disability）和意外医疗（Medical Expenses）。疾病导致的身故或医疗不属于意外险保障范围。',
          difficulty: 1
        },
        {
          id: 'p1-ch5-9', type: 'single',
          content: '保险中的"共同保险"（Co-insurance）是指？',
          options: ['A. 多家保险公司共同承保同一风险', 'B. 投保人与保险公司共同承担损失', 'C. 政府与保险公司共同承担', 'D. 再保险公司承保'],
          answer: 'B',
          analysis: '共同保险（Co-insurance）通常要求投保人自留一定比例（%）的保险金额或损失金额，如80%共同保险条款下，保险公司仅赔付损失的80%，其余20%由投保人自担。',
          difficulty: 2
        },
        {
          id: 'p1-ch5-10', type: 'single',
          content: '火灾保险的除外责任通常不包括？',
          options: ['A. 战争行为', 'B. 投保人故意行为', 'C. 正常磨损', 'D. 地震'],
          answer: 'C',
          analysis: '火灾保险一般除外：战争、核辐射、地震（需单独附加）、投保人故意行为等。正常磨损（Wear and Tear）属于自然损耗，不属于火灾保险保障范围，但不是"除外责任"条款中的内容。',
          difficulty: 2
        },
        {
          id: 'p1-ch5-11', type: 'single',
          content: '工程保险（Contractors All Risks）主要保障的是？',
          options: ['A. 工程延期损失', 'B. 建筑工程期间的物料和工程本身', 'C. 设计师责任', 'D. 环境污染'],
          answer: 'B',
          analysis: '工程保险（CAR/EAR）主要保障建筑工程期间的施工物料、工程本身以及第三者责任，保障范围包括火灾、盗窃、意外损坏等。',
          difficulty: 2
        },
        {
          id: 'p1-ch5-12', type: 'single',
          content: '海上保险（Marine Insurance）的"一切险"（All Risks）实际承保的是？',
          options: ['A. 所有风险', 'B. 列明风险除外后的一切风险', 'C. 仅指自然灾害', 'D. 战争风险'],
          answer: 'B',
          analysis: '海上保险中的"一切险"（All Risks）是列明承保方式的简称，并非字面意义的"所有风险"，而是在除外责任列明后，其余风险均予承保。通常需要结合列明风险条款理解。',
          difficulty: 2
        }
      ]
    },
    {
      id: 'p1-ch6',
      name: '保险业的规管架构',
      weight: '15%',
      targetQuestions: 12,
      questions: [
        {
          id: 'p1-ch6-1', type: 'single',
          content: '人寿保险的基本类型不包括？',
          options: ['A. 定期寿险', 'B. 终身寿险', 'C. 年金保险', 'D. 投资相连保险'],
          answer: 'D',
          analysis: '人寿保险的基本类型主要包括：定期寿险（Term Life）、终身寿险（Whole Life）、两全保险（Endowment）。投资相连保险（UL）是一种创新产品，不属于传统基本类型。',
          difficulty: 1
        },
        {
          id: 'p1-ch6-2', type: 'single',
          content: '定期寿险（Term Life）的特点是？',
          options: ['A. 保障终身', 'B. 纯保障型，无储蓄成分', 'C. 保费最高', 'D. 无现金价值'],
          answer: 'B',
          analysis: '定期寿险（Term Life）是在约定期限内（如10年、20年）提供保障的纯保障型保险，被保险人在期限内身故赔付，否则合同终止无任何退还。保费相对低廉，无现金价值。',
          difficulty: 1
        },
        {
          id: 'p1-ch6-3', type: 'single',
          content: '分红保单与非分红保单的主要区别是？',
          options: ['A. 分红保单可分享保险公司盈利', 'B. 非分红保单保费更高', 'C. 两者保障相同', 'D. 无本质区别'],
          answer: 'A',
          analysis: '分红保单（With-Profits）的投保人可参与保险公司可分配盈余的分配，获得分红；非分红保单（Non-Par）则不参与分红，保费通常较低。分红取决于保险公司实际经营成果。',
          difficulty: 1
        },
        {
          id: 'p1-ch6-4', type: 'judge',
          content: '年金保险（Annuity）是以被保险人生存为给付条件的保险。',
          options: ['正确', '错误'],
          answer: '正确',
          analysis: '年金保险是以被保险人生存为给付条件，按约定期间和金额给付生存金的保险。常见形式包括：即期年金（购买后立即开始给付）和延期年金（退休后开始给付）。',
          difficulty: 1
        },
        {
          id: 'p1-ch6-5', type: 'single',
          content: '重大疾病保险（Cancer/Dread Disease）的给付方式是？',
          options: ['A. 必须提供医疗费用收据', 'B. 确诊即一次性给付', 'C. 按实际治疗费用报销', 'D. 分期给付'],
          answer: 'B',
          analysis: '重大疾病保险是定额给付型保险，当被保险人确诊患有合同约定的重大疾病时，保险公司一次性给付约定金额，无需提供费用收据，给付金额与实际医疗费用无关。',
          difficulty: 1
        },
        {
          id: 'p1-ch6-6', type: 'single',
          content: '核保中，影响保费的主要因素不包括？',
          options: ['A. 年龄', 'B. 职业', 'C. 投保人国籍', 'D. 健康状况'],
          answer: 'C',
          analysis: '核保评估的主要因素包括：年龄、性别、健康状况（既往病史）、职业、爱好（高风险运动）、财务状况等。国籍本身不是直接核保因素（但可能涉及居住地风险评估）。',
          difficulty: 1
        },
        {
          id: 'p1-ch6-7', type: 'single',
          content: '投资相连保险（UL）与传统寿险的主要区别是？',
          options: ['A. 无身故保障', 'B. 保费部分进入投资账户，连接投资基金', 'C. 无需核保', 'D. 保费更便宜'],
          answer: 'B',
          analysis: '投资相连保险（Unit Linked，UL）将保费分为保障部分和投资部分，投资部分连接投资基金，单位价值随市场波动，投资风险由投保人承担。传统寿险则提供保证的保障和现金价值。',
          difficulty: 2
        },
        {
          id: 'p1-ch6-8', type: 'single',
          content: '人寿保险核保中，"标准体"是指？',
          options: ['A. 被保险人身体完全健康', 'B. 风险在正常范围内，按标准保费承保', 'C. 风险较高，需要加费', 'D. 保险公司不承保'],
          answer: 'B',
          analysis: '标准体（Standard Risk）是核保结论之一，指被保险人的风险程度在保险公司可接受的正常范围内，按标准保费和标准条件承保。并非"完全健康"，而是风险在可接受范围。',
          difficulty: 2
        },
        {
          id: 'p1-ch6-9', type: 'judge',
          content: '健康如实告知（Health Declaration）与体检要求在核保中是等效的。',
          options: ['正确', '错误'],
          answer: '错误',
          analysis: '健康如实告知是投保人主动披露健康状况的义务；体检是保险公司指定医疗机构对被保险人进行身体检查。两者在核保中相互补充，但不等效——保险公司可同时要求如实告知和体检。',
          difficulty: 2
        },
        {
          id: 'p1-ch6-10', type: 'single',
          content: '长期护理保险（LTC）的给付触发条件通常是？',
          options: ['A. 确诊重大疾病', 'B. 无法完成日常生活中至少2项活动', 'C. 住院治疗', 'D. 身故'],
          answer: 'B',
          analysis: '长期护理保险的给付条件通常是：被保险人因年老、疾病或伤残导致无法完成日常生活中规定的若干项活动（如沐浴、穿衣、如厕、移动、进食中的2-3项），需要持续护理。',
          difficulty: 2
        },
        {
          id: 'p1-ch6-11', type: 'single',
          content: '人寿保险中，"保额"与"保费"的区别是？',
          options: ['A. 两者相同', 'B. 保额是保险公司给付的金额，保费是投保人缴纳的费用', 'C. 保额是投保金额，保费是赔偿金额', 'D. 无区别'],
          answer: 'B',
          analysis: '保额（Sum Insured/Death Benefit）是保险公司在保险事故发生时应给付的金额；保费（Premium）是投保人为获得保障而按期缴纳的费用。两者是完全不同的概念。',
          difficulty: 1
        },
        {
          id: 'p1-ch6-12', type: 'single',
          content: '医疗保险通常是哪种给付方式？',
          options: ['A. 定额给付', 'B. 费用报销（实报实销）', 'C. 一次性给付', 'D. 投资收益'],
          answer: 'B',
          analysis: '医疗保险通常采用费用报销方式（Indemnity Basis），被保险人因病或意外产生医疗费用后，凭收据向保险公司申请报销，实际赔付金额不超过实际费用支出（不可双重获利）。',
          difficulty: 1
        }
      ]
    },
    {
      id: 'p1-ch7',
      name: '职业道德及其他有关问题',
      weight: '10%',
      targetQuestions: 8,
      questions: [
        {
          id: 'p1-ch7-1', type: 'single',
          content: '强积金制度（MPF）适用于哪些人士？',
          options: ['A. 所有香港居民', 'B. 18-65岁的雇员和自雇人士', 'C. 只有雇员', 'D. 只有自雇人士'],
          answer: 'B',
          analysis: '强积金制度（Mandatory Provident Fund）适用于18-65岁的雇员（不论全职或兼职）和自雇人士。家务雇员、法定退休年龄以上的雇员及某些短期访客可豁免。',
          difficulty: 1
        },
        {
          id: 'p1-ch7-2', type: 'single',
          content: '强积金供款比例，雇员一般需要供款多少？',
          options: ['A. 1%', 'B. 5%', 'C. 10%', 'D. 15%'],
          answer: 'B',
          analysis: '根据强积金法规，雇员一般需按相关收入的5%供款（上限为$1,500/月）；雇主亦需同比例供款。自雇人士则按纯利的5%供款。',
          difficulty: 1
        },
        {
          id: 'p1-ch7-3', type: 'judge',
          content: '强积金是强制性公积金，雇主和雇员都必须按法例要求供款。',
          options: ['正确', '错误'],
          answer: '正确',
          analysis: '强积金制度是香港法定强制性公积金计划，雇主和雇员都必须按法例规定比例供款，是香港退休保障的重要支柱之一。',
          difficulty: 1
        },
        {
          id: 'p1-ch7-4', type: 'single',
          content: '强积金账户的"归属"（Vesting）是指？',
          options: ['A. 账户开立', 'B. 雇员对雇主供款部分的拥有权', 'C. 账户注销', 'D. 投资收益'],
          answer: 'B',
          analysis: '归属（Vesting）是指雇员对强积金供款（特别是雇主供款部分）逐步获得拥有权的安排。根据规定，雇主供款在雇员服务满一定年限后逐步归属雇员（最多100%）。',
          difficulty: 2
        },
        {
          id: 'p1-ch7-5', type: 'single',
          content: '强积金提取的主要条件是？',
          options: ['A. 任何时候均可提取', 'B. 达到法定退休年龄（65岁）', 'C. 离职即可提取', 'D. 患病即可提取'],
          answer: 'B',
          analysis: '强积金提取的主要法定条件是年满65岁（退休）。其他可提前提取的情况包括：永久离开香港、完全丧失工作能力、末期疾病、小额结余账户等，但需提供相关证明。',
          difficulty: 1
        },
        {
          id: 'p1-ch7-6', type: 'single',
          content: '强积金计划中的"集成信托计划"是指？',
          options: ['A. 所有强积金计划合并', 'B. 不同雇主/雇员可共同参与的投资计划', 'C. 政府统一管理的计划', 'D. 单一保险公司计划'],
          answer: 'B',
          analysis: '集成信托计划（Master Trust）是强积金制度下的一种计划模式，允许不同雇主和自雇人士共同参与，整合规模效益，提供多种投资基金选择，是最常见的强积金计划类型。',
          difficulty: 2
        },
        {
          id: 'p1-ch7-7', type: 'judge',
          content: '强积金供款的投资收益无需缴税。',
          options: ['正确', '错误'],
          answer: '正确',
          analysis: '强积金供款可作为税务扣除项（年薪金扣除上限$18,000），且强积金账户内的投资收益均免税，这是强积金作为退休储蓄工具的税务优惠之一。',
          difficulty: 1
        },
        {
          id: 'p1-ch7-8', type: 'single',
          content: '强积金计划成员转换投资基金的限制是？',
          options: ['A. 每年只能转换一次', 'B. 通常每历月可转换一次', 'C. 不可转换', 'D. 需缴高额手续费'],
          answer: 'B',
          analysis: '强积金成员通常每历月（Calendar Month）可免费转换投资基金一次（部分计划允许更频繁），以分散投资风险和适应个人风险承受能力的变化。',
          difficulty: 2
        }
      ]
    }
  ]
};

// ==================== Paper 3 卷三 ====================
// 官方大纲：5大章节，50题/卷，合格35题（70%）
const PAPER3 = {
  examId: 'iique',
  examName: '卷三 Paper 3',
  shortName: '卷三',
  fullName: '长期保险',
  totalQuestions: 50,
  passScore: 35,
  timeMinutes: 75,
  color: '#9141ac',
  chapters: [
    {
      id: 'p3-ch1',
      name: '人寿保险简介',
      weight: '10%',
      targetQuestions: 5,
      questions: [
        {
          id: 'p3-ch1-1', type: 'single',
          content: '人寿保险的基本功能是？',
          options: ['A. 储蓄增值', 'B. 为被保险人提供经济保障', 'C. 避税工具', 'D. 投资理财'],
          answer: 'B',
          analysis: '人寿保险的基本功能是为被保险人提供经济保障，在其身故或生存至约定期限时给付保险金，为家庭或个人提供财务安全网。储蓄和投资是附加功能。',
          difficulty: 1
        },
        {
          id: 'p3-ch1-2', type: 'single',
          content: '人寿保险与其他保险的主要区别是？',
          options: ['A. 人寿保险以生死为保险事故', 'B. 人寿保险保费最低', 'C. 人寿保险无需核保', 'D. 人寿保险只保意外'],
          answer: 'A',
          analysis: '人寿保险（Life Insurance）以被保险人的生命（死亡或生存）为保险事故标的，与以财产、责任或健康为标的的一般保险不同。',
          difficulty: 1
        },
        {
          id: 'p3-ch1-3', type: 'judge',
          content: '人寿保险可承保的风险类型包括死亡风险、生存风险和健康风险。',
          options: ['正确', '错误'],
          answer: '正确',
          analysis: '人寿保险实际上覆盖三类风险：死亡风险（Term Life/Whole Life保障身故）、生存风险（Annuity保障生存至约定期限）和健康风险（Health Insurance/Critical Illness保障疾病）。',
          difficulty: 2
        },
        {
          id: 'p3-ch1-4', type: 'single',
          content: '香港人寿保险市场的监管机构是？',
          options: ['A. 证监会', 'B. 保险业监管局', 'C. 金管局', 'D. 税务局'],
          answer: 'B',
          analysis: '香港人寿保险业务由保险业监管局（Insurer Authority，IA）监管，持牌人寿保险代理人和经纪人均需遵守《保险业条例》和相关操守准则。',
          difficulty: 1
        },
        {
          id: 'p3-ch1-5', type: 'single',
          content: '人寿保险的历史起源是？',
          options: ['A. 海上保险', 'B. 火灾保险', 'C. 工伤赔偿保险', 'D. 农业保险'],
          answer: 'A',
          analysis: '人寿保险的历史起源可追溯至17世纪的伦敦皇家交易交易所（Royal Exchange），最初与人寿保险相结合的组织形式便是从海上保险（劳合社，Lloyd\'s）中发展而来。',
          difficulty: 2
        }
      ]
    },
    {
      id: 'p3-ch2',
      name: '人寿保险及年金种类',
      weight: '20%',
      targetQuestions: 10,
      questions: [
        {
          id: 'p3-ch2-1', type: 'single',
          content: '定期寿险（Term Life）的"续保性"（Renewable）是指？',
          options: ['A. 可将定期寿险转为终身寿险', 'B. 期满后可续保而无需重新核保', 'C. 可延长保障期限', 'D. 可增加保额'],
          answer: 'B',
          analysis: '可续保定期寿险（Renewable Term）在保险期满时，被保险人可选择续保同样的保障而无需提供可保证明（健康状况），保费则按续保时的年龄重新计算。',
          difficulty: 2
        },
        {
          id: 'p3-ch2-2', type: 'single',
          content: '终身寿险（Whole Life）的特点是？',
          options: ['A. 保障期限固定', 'B. 无现金价值', 'C. 保障终身，无论何时身故都赔付', 'D. 保费最低'],
          answer: 'C',
          analysis: '终身寿险（Whole Life）提供终身保障，被保险人无论何时身故，保险公司都将给付保险金，并通常具有现金价值和分红成分。保费较定期寿险高。',
          difficulty: 1
        },
        {
          id: 'p3-ch2-3', type: 'single',
          content: '两全保险（Endowment）与定期寿险的主要区别是？',
          options: ['A. 两全保险在保障期内身故赔付，期满生存也给付', 'B. 两者完全相同', 'C. 两全保险保费更低', 'D. 两全保险无需核保'],
          answer: 'A',
          analysis: '两全保险（Endowment）兼具保障和储蓄功能：若被保险人在保险期内身故，给付保险金；若生存至期满，则给付满期金。是"保障+储蓄"的组合产品。',
          difficulty: 1
        },
        {
          id: 'p3-ch2-4', type: 'judge',
          content: '年金保险（Annuity）只在被保险人身故时给付保险金。',
          options: ['正确', '错误'],
          answer: '错误',
          analysis: '年金保险的给付条件是被保险人生存，主要在被保险人生存期间定期给付生存金，以提供退休收入保障。身故时的给付（退还已缴保费或现金价值）视具体条款而定。',
          difficulty: 1
        },
        {
          id: 'p3-ch2-5', type: 'single',
          content: '即期年金（Immediate Annuity）与延期年金（Deferred Annuity）的主要区别是？',
          options: ['A. 即期年金购买后立即开始给付，延期年金在积累期后才给付', 'B. 即期年金保费更低', 'C. 两者无区别', 'D. 延期年金只给付一次'],
          answer: 'A',
          analysis: '即期年金在缴清保费后立即开始给付；延期年金则先经历积累期（Accumulation Phase），投保人持续供款或一次过缴付，到约定时间（通常是退休）才开始给付。',
          difficulty: 1
        },
        {
          id: 'p3-ch2-6', type: 'single',
          content: '少儿保险（Juvenile Life Insurance）的特点是？',
          options: ['A. 以儿童为主要被保险人', 'B. 投保人须为父母或法定监护人', 'C. 保单须经父母或监护人同意', 'D. 以上全部'],
          answer: 'D',
          analysis: '少儿保险是以未成年子女为被保险人、由父母或法定监护人作为投保人的保险产品。投保须经监护人同意，且监护人须对少儿具有保险利益。',
          difficulty: 1
        },
        {
          id: 'p3-ch2-7', type: 'single',
          content: '分红保单中，"终期红利"（Terminal Bonus）一般何时给付？',
          options: ['A. 每年', 'B. 保单期满或退保时', 'C. 随时可领', 'D. 被保险人身故时'],
          answer: 'B',
          analysis: '终期红利（Terminal Bonus）是分红保单中的一种额外分红，通常在保单期满、退保或被保险人身故时一次性给付，是对长期持有保单的一种奖励。',
          difficulty: 2
        },
        {
          id: 'p3-ch2-8', type: 'single',
          content: '变额年金（Variable Annuity）与固定年金的主要区别是？',
          options: ['A. 变额年金的投资收益不保证，连接投资基金', 'B. 两者给付金额相同', 'C. 变额年金保费更低', 'D. 变额年金无需核保'],
          answer: 'A',
          analysis: '变额年金的投资部分连接投资基金，单位价值随市场波动，投资风险由投保人承担，给付金额不保证；固定年金则提供保证的给付金额。',
          difficulty: 2
        },
        {
          id: 'p3-ch2-9', type: 'judge',
          content: '家庭保障保单（Family Income Assurance）是一种将定期寿险与生存保险相结合的产品。',
          options: ['正确', '错误'],
          answer: '正确',
          analysis: '家庭保障保单（Family Income Assurance）在保障期内若被保险人身故，持续给付收入年金给受益人；若生存至保障期满，则给付一笔过的满期金。是定期寿险与生存保险的组合。',
          difficulty: 2
        },
        {
          id: 'p3-ch2-10', type: 'single',
          content: '非分红保单（Non-Par）与分红保单的主要区别是？',
          options: ['A. 非分红保单保费较低，不参与保险公司盈余分配', 'B. 非分红保单保障更高', 'C. 两者无本质区别', 'D. 非分红保单保费更高'],
          answer: 'A',
          analysis: '非分红保单（Non-Participating）保费通常较低，投保人不参与保险公司可分配盈余的分配，给付金额在合同中保证确定；分红保单则参与分配红利，保费通常较高。',
          difficulty: 2
        }
      ]
    },
    {
      id: 'p3-ch3',
      name: '保险利益附约及其他产品',
      weight: '24%',
      targetQuestions: 12,
      questions: [
        {
          id: 'p3-ch3-1', type: 'single',
          content: '附约（Rider）与主险的关系是？',
          options: ['A. 独立保险合同', 'B. 附加于主险，不能独立存在', 'C. 可单独取消', 'D. 无关联'],
          answer: 'B',
          analysis: '附约（Rider）是附加于主险保单的附加条款，不能独立存在，须依附于主险合同。附约可扩展主险保障范围或增加额外给付项目。',
          difficulty: 1
        },
        {
          id: 'p3-ch3-2', type: 'single',
          content: '重大疾病附约（Critical Illness Rider）一般何时给付？',
          options: ['A. 住院时', 'B. 确诊合同约定的重大疾病时一次性给付', 'C. 每次门诊时', 'D. 身故时'],
          answer: 'B',
          analysis: '重大疾病附约是定额给付型产品，当被保险人确诊患有合同约定的重大疾病（如癌症、心脏病、中风等）时，一次性给付约定金额，与实际医疗费用无关。',
          difficulty: 1
        },
        {
          id: 'p3-ch3-3', type: 'single',
          content: '豁免保费附约（Premium Waiver Rider）在什么情况下触发？',
          options: ['A. 确诊重大疾病', 'B. 投保人身故或全残', 'C. 住院治疗', 'D. 第三年缴费期届满'],
          answer: 'B',
          analysis: '豁免保费附约（Premium Waiver on Death or TPD）当投保人（即缴纳保费的人）身故或完全伤残时，主险保单的未来应缴保费获豁免，保单继续有效，保障不变。',
          difficulty: 2
        },
        {
          id: 'p3-ch3-4', type: 'judge',
          content: '住院医疗保险通常采用费用报销方式，按实际医疗费用给付。',
          options: ['正确', '错误'],
          answer: '正确',
          analysis: '住院医疗保险（Hospitalization Insurance）通常采用实报实销的费用报销方式（Indemnity），被保险人凭医疗收据等证明向保险公司申请报销，实际赔付不超过实际支出。',
          difficulty: 1
        },
        {
          id: 'p3-ch3-5', type: 'single',
          content: '意外保险（Accident Rider）的给付条件是？',
          options: ['A. 任何疾病', 'B. 因意外导致的身故、伤残或医疗费用', 'C. 住院治疗', 'D. 慢性疾病'],
          answer: 'B',
          analysis: '意外保险附约保障因意外事故（Accident）导致的身体伤害，包括：意外身故、意外伤残（按伤残程度比例给付）和意外医疗费用。疾病不属意外险保障范围。',
          difficulty: 1
        },
        {
          id: 'p3-ch3-6', type: 'single',
          content: '长期护理保险（LTC）的给付方式通常是？',
          options: ['A. 一次性大额给付', 'B. 按月给付护理费用', 'C. 报销医疗费用', 'D. 给付投资收益'],
          answer: 'B',
          analysis: '长期护理保险的给付方式通常是按月给付护理津贴（Monthly Benefit），金额固定，帮助被保险人支付护理机构或家庭护理费用，而非一次性给付。',
          difficulty: 2
        },
        {
          id: 'p3-ch3-7', type: 'single',
          content: '高端医疗险（Top-up Medical）与普通医疗险的主要区别是？',
          options: ['A. 保障范围更广、限额更高、更多私立/国际医院选择', 'B. 保费更低', 'C. 无需核保', 'D. 只能住院使用'],
          answer: 'A',
          analysis: '高端医疗险（Top-up/High-end Medical）提供更高的保障限额、更广的保障范围（如私家病房、进口药物、高端体检），并可在更多私立或国际医院就医，但保费较高。',
          difficulty: 2
        },
        {
          id: 'p3-ch3-8', type: 'single',
          content: '门诊保险（Outpatient Insurance）一般不包括？',
          options: ['A. 普通科门诊', 'B. 专科门诊', 'C. 住院费用', 'D. 处方药物'],
          answer: 'C',
          analysis: '门诊保险主要保障普通科/专科门诊、处方药物、门诊检查化验等一般不在住院情况下产生的医疗费用。住院费用由住院医疗保险保障。',
          difficulty: 1
        },
        {
          id: 'p3-ch3-9', type: 'single',
          content: '伤残收入保险（Disability Income Insurance）的给付条件是？',
          options: ['A. 身故', 'B. 因伤残导致无法工作而失去收入', 'C. 确诊疾病', 'D. 住院'],
          answer: 'B',
          analysis: '伤残收入保险在被保险人因疾病或意外导致伤残（通常是指丧失工作能力）时，按月给付约定的收入津贴，以补偿因无法工作而失去的收入。',
          difficulty: 2
        },
        {
          id: 'p3-ch3-10', type: 'judge',
          content: '医疗保险中的"既有疾病"（Pre-existing Condition）通常在保障范围之外。',
          options: ['正确', '错误'],
          answer: '正确',
          analysis: '既有疾病（Pre-existing Condition）是指在投保前已存在的疾病或症状，通常在医疗险中有特定的等待期（如2-4年）后才纳入保障，或直接列为不保事项。这是医疗险核保的重要考量因素。',
          difficulty: 2
        },
        {
          id: 'p3-ch3-11', type: 'single',
          content: '健康险核保中，家族病史（如父母有癌症史）对核保的影响是？',
          options: ['A. 无影响', 'B. 可能被视为较高风险因素，增加保费或加设不保事项', 'C. 直接拒保', 'D. 加快核保速度'],
          answer: 'B',
          analysis: '家族病史（如直系亲属有癌症、心脏病、糖尿病等）会作为核保评估因素之一，可能被视为潜在健康风险，导致加设不保事项（如不保家族病史相关疾病）或加收保费。',
          difficulty: 2
        },
        {
          id: 'p3-ch3-12', type: 'single',
          content: '健康险保单中"合理及惯常费用"（R&C）的定义是？',
          options: ['A. 保险公司任意决定', 'B. 当地同类医疗服务的一般收费水平', 'C. 客户自愿支付的费用', 'D. 最高收费水平'],
          answer: 'B',
          analysis: '"合理及惯常费用"（Reasonable and Customary charges）是指在特定地区和时间内，同类医疗服务的一般收费水平。保险公司只赔付在此范围内的费用，超出部分需客户自付。',
          difficulty: 2
        }
      ]
    },
    {
      id: 'p3-ch4',
      name: '阐释人寿保险单',
      weight: '24%',
      targetQuestions: 12,
      questions: [
        {
          id: 'p3-ch4-1', type: 'single',
          content: '保单结构中，"声明页"（Specifications）载明的内容是？',
          options: ['A. 理赔流程', 'B. 被保险人基本信息、保额、保费、保障期限等核心信息', 'C. 投资收益', 'D. 除外责任'],
          answer: 'B',
          analysis: '声明页（Specifications/Decelerations）是保单中载明被保险人基本信息（如姓名、年龄）、保单基本信息（保额、保费、保障期限、受益人等）的页面，是理解保单的关键。',
          difficulty: 1
        },
        {
          id: 'p3-ch4-2', type: 'single',
          content: '人寿保险单中，除外责任（Exclusions）的法律效力是？',
          options: ['A. 仅供参考', 'B. 明确列明保险公司不承担责任的情形，具有法律效力', 'C. 可由代理人口头解释更改', 'D. 仅在理赔时适用'],
          answer: 'B',
          analysis: '除外责任（Exclusions）在保单中以明确条款列出，具法律效力。在保险期间内，若损失事故属于除外责任范围，保险公司有权拒绝赔付。常见除外责任包括：自杀（首年内）、战争、犯罪等。',
          difficulty: 1
        },
        {
          id: 'p3-ch4-3', type: 'single',
          content: '保单贷款（Policy Loan）的特点是？',
          options: ['A. 无需抵押', 'B. 以保单现金价值为上限，利率优惠', 'C. 无限额', 'D. 会导致保单失效'],
          answer: 'B',
          analysis: '保单贷款是以保单累积的现金价值为最高上限的贷款，利率通常较银行贷款优惠。贷款不影响保单效力（除非贷款本息超过现金价值导致保单失效），但未偿还贷款会在给付保险金时扣除。',
          difficulty: 2
        },
        {
          id: 'p3-ch4-4', type: 'judge',
          content: '保单现金价值（Cash Value）在投保后立即产生。',
          options: ['正确', '错误'],
          answer: '错误',
          analysis: '保单现金价值是随着保费缴纳和保险期间推移而累积的价值，通常在缴费若干年后才开始产生（前期费用高）。不同产品现金价值的累积速度和金额不同。',
          difficulty: 1
        },
        {
          id: 'p3-ch4-5', type: 'single',
          content: '宽限期（Lapse Grace Period）内，保单状态是？',
          options: ['A. 立即失效', 'B. 仍然有效，但发生事故可能无法获赔', 'C. 现金价值翻倍', 'D. 自动续保'],
          answer: 'B',
          analysis: '宽限期（通常30天）内保单仍然有效，但若发生保险事故，保险公司在计算赔付时会扣除未缴保费；若宽限期满仍未缴费，保单可能失效或进入 Reduced Paid-Up 状态。',
          difficulty: 1
        },
        {
          id: 'p3-ch4-6', type: 'single',
          content: '理赔申请中，"时效"（Limitation）要求是？',
          options: ['A. 无时间限制', 'B. 必须在保险事故发生后5年内提出', 'C. 尽快提出，通常在事故发生后30天内通知保险公司', 'D. 仅在身故理赔有时效'],
          answer: 'C',
          analysis: '保单通常要求被保险人在保险事故发生后尽快提出理赔申请，一般为30天内通知保险公司（通知义务）。逾期可能影响理赔或导致保险公司拒赔。',
          difficulty: 1
        },
        {
          id: 'p3-ch4-7', type: 'single',
          content: '身故理赔所需的"死亡证明"一般要求是？',
          options: ['A. 只需医生证明', 'B. 须提交由政府注册医生或相关机构签发的死亡证明文件', 'C. 只需家属声明', 'D. 无需证明文件'],
          answer: 'B',
          analysis: '身故理赔须提交由香港注册医生或医院签发的死亡医学证明，以及由政府生死登记处签发的死亡登记证明（CND），部分情况还需警方或验尸官报告。',
          difficulty: 1
        },
        {
          id: 'p3-ch4-8', type: 'single',
          content: '保险金给付方式中，"分期给付"（Installment）是？',
          options: ['A. 一次性全额给付', 'B. 按约定时间分期给付，给付期间投保人去世则给付给受益人', 'C. 仅给付一次', 'D. 给付投资收益'],
          answer: 'B',
          analysis: '分期给付（Installment）是保险公司将保险金按约定方式（如按年、按月）分期给付，若被保险人在给付期间去世，剩余未给付的保险金将继续给付给受益人。',
          difficulty: 2
        },
        {
          id: 'p3-ch4-9', type: 'single',
          content: '保单复效（Reinstatement）申请被拒绝的最常见原因是？',
          options: ['A. 保费太低', 'B. 被保险人健康状况恶化，不符合可保条件', 'C. 投保时间太长', 'D. 理赔次数太多'],
          answer: 'B',
          analysis: '保单复效时，保险公司会重新核保。若被保险人健康状况已不符合可保条件（如已患有严重疾病），保险公司有权拒绝复效申请。',
          difficulty: 1
        },
        {
          id: 'p3-ch4-10', type: 'judge',
          content: '受益人变更须经被保险人同意，并以书面形式通知保险公司。',
          options: ['正确', '错误'],
          answer: '正确',
          analysis: '受益人变更涉及被保险人利益，须经被保险人书面同意（除非被保险人即为投保人），并由保险公司批注后方生效。指定未成年受益人时，保险金将给付给监护人代为管理。',
          difficulty: 1
        },
        {
          id: 'p3-ch4-11', type: 'single',
          content: '保单"保费豁免"（Premium Holiday）是指？',
          options: ['A. 免缴保费且保障继续有效', 'B. 允许暂停缴纳保费，但保障可能受影响', 'C. 永久免除保费', 'D. 保费自动降低'],
          answer: 'B',
          analysis: '保费豁免（Premium Holiday）通常指在保单现金价值足够支付到期保费的情况下，投保人可暂停缴纳保费，保单以现金价值抵交保费继续有效，但现金价值会持续减少。',
          difficulty: 2
        },
        {
          id: 'p3-ch4-12', type: 'single',
          content: '健康理赔申请中最重要的是？',
          options: ['A. 尽快出院', 'B. 提交完整医疗报告和费用收据', 'C. 多次申请', 'D. 自行判断赔付金额'],
          answer: 'B',
          analysis: '健康理赔须提交：由主诊医生签发的医疗报告、诊断证明、治疗明细，以及所有医疗费用收据正本。文件不完整是理赔延迟或拒赔的常见原因。',
          difficulty: 1
        }
      ]
    },
    {
      id: 'p3-ch5',
      name: '人寿保险程序',
      weight: '22%',
      targetQuestions: 11,
      questions: [
        {
          id: 'p3-ch5-1', type: 'single',
          content: '投保建议书（Illustration）与正式保单的区别是？',
          options: ['A. 建议书具有法律效力', 'B. 建议书仅供参考，非正式合同文件', 'C. 建议书即是保单', 'D. 两者无区别'],
          answer: 'B',
          analysis: '投保建议书（Illustration）是向客户解释产品特点、演示预期利益和费用的说明文件，不构成正式合同。正式合同权利义务以保单条款为准。',
          difficulty: 1
        },
        {
          id: 'p3-ch5-2', type: 'single',
          content: '核保中，"财务核保"（Financial Underwriting）的主要目的是？',
          options: ['A. 评估被保险人健康状况', 'B. 评估保险金额与被保险人财务状况是否匹配，防止道德风险', 'C. 加快核保速度', 'D. 确定保费金额'],
          answer: 'B',
          analysis: '财务核保（Financial Underwriting）是评估投保金额是否与被保险人的财务状况、经济需要相匹配，防止过高保额可能引发的道德风险（如为非经济依赖者投保高额寿险）。',
          difficulty: 2
        },
        {
          id: 'p3-ch5-3', type: 'single',
          content: '核保结论"次标准体"（Substandard Risk）是指？',
          options: ['A. 标准体但保费更低', 'B. 风险程度高于标准体，以附加条件（如加费/不保事项）承保', 'C. 保险公司不承保', 'D. 被保险人完全健康'],
          answer: 'B',
          analysis: '次标准体（Substandard Risk）是核保结论之一，指被保险人风险程度高于标准体，保险公司会以加收保费（Loading）、加设不保事项（Exclusion）或缩短保障期限等方式附加条件承保。',
          difficulty: 2
        },
        {
          id: 'p3-ch5-4', type: 'judge',
          content: '人寿保险合同中，健康如实告知义务仅在投保时适用，合同生效后无需更新健康状况。',
          options: ['正确', '错误'],
          answer: '错误',
          analysis: '健康如实告知义务主要在投保时适用（不可抗辩条款通常限制保险公司在合同生效一定年限后以未如实告知为由拒赔）。但若在保单有效期内被保险人健康状况发生重大变化，可能涉及补充告知义务。',
          difficulty: 2
        },
        {
          id: 'p3-ch5-5', type: 'single',
          content: '保单签发后，投保人发现内容有误，应该？',
          options: ['A. 自行涂改', 'B. 立即联系保险公司申请更正', 'C. 忽略不计', 'D. 向媒体投诉'],
          answer: 'B',
          analysis: '收到保单后若发现内容有误（如姓名、出生日期、保额等），投保人应在冷静期内联系保险公司申请更正。更正须经保险公司核批，并以批注形式记录。',
          difficulty: 1
        },
        {
          id: 'p3-ch5-6', type: 'single',
          content: '核保中，"逆选择"（Adverse Selection）是指？',
          options: ['A. 保险公司选择客户', 'B. 高风险人群更倾向于投保的现象', 'C. 客户选择保险公司', 'D. 低风险人群更倾向于投保'],
          answer: 'B',
          analysis: '逆选择（Adverse Selection）是指高风险人群（如已有疾病者）比低风险人群更积极投保的倾向，因为已知自身风险更高。这是保险公司核保时必须应对的核心挑战。',
          difficulty: 2
        },
        {
          id: 'p3-ch5-7', type: 'single',
          content: '保单交付（Policy Delivery）的重要性在于？',
          options: ['A. 仅是礼节性程序', 'B. 确认投保人收到并理解保单内容，标志冷静期开始', 'C. 加快理赔', 'D. 降低保费'],
          answer: 'B',
          analysis: '保单交付是重要程序：代理人有责任向投保人完整交付保单并解释条款，这标志着冷静期（14天）的开始，也是确认投保人了解产品的重要环节。',
          difficulty: 1
        },
        {
          id: 'p3-ch5-8', type: 'single',
          content: '客户服务中，投诉处理的原则是？',
          options: ['A. 忽略不理', 'B. 及时受理、客观调查、公正处理、及时反馈', 'C. 拖延处理', 'D. 仅记录不处理'],
          answer: 'B',
          analysis: '客户服务投诉处理原则：及时受理投诉、客观公正调查、依法合规处理、及时向投诉人反馈处理结果。若内部处理无法解决，客户可向香港保险投诉局（ICAC）求助。',
          difficulty: 1
        },
        {
          id: 'p3-ch5-9', type: 'single',
          content: '核保中，体检要求主要取决于哪些因素？',
          options: ['A. 仅年龄', 'B. 年龄、投保金额和健康告知内容', 'C. 仅投保金额', 'D. 仅健康告知'],
          answer: 'B',
          analysis: '保险公司要求体检的因素主要包括：被保险人年龄、投保金额（保额较高通常要求体检）、健康告知中披露的健康状况（如有既往病史通常要求体检或补充医疗报告）。',
          difficulty: 2
        },
        {
          id: 'p3-ch5-10', type: 'single',
          content: '保单变更（Policy Amendment）的一般程序是？',
          options: ['A. 口头通知即可', 'B. 投保人提出书面申请，保险公司核批后以批注形式记录', 'C. 无需任何程序', 'D. 保险公司自动变更'],
          answer: 'B',
          analysis: '保单变更须由投保人提出书面申请（如变更受益人、保额、缴费方式等），保险公司审核同意后，以批注（Endorsement）形式记录，成为保单的组成部分。',
          difficulty: 1
        },
        {
          id: 'p3-ch5-11', type: 'judge',
          content: '保险中介人在核保过程中应向投保人如实解释条款，不得隐瞒重要信息。',
          options: ['正确', '错误'],
          answer: '正确',
          analysis: '根据香港保险业监管局的操守准则，保险中介人有义务向投保人清楚解释产品条款，包括保障范围、除外责任、费用等重要信息，不得误导或隐瞒重要内容。',
          difficulty: 1
        }
      ]
    }
  ]
};

// ==================== 合并到 FOCO_DATA ====================

// Paper 1 整体作为一个"卷一"入口章节
FOCO_DATA.exams[0].chapters = [
  {
    id: 'paper1',
    name: '卷一 Paper 1',
    subtitle: '保险原理及实务',
    desc: '75题 · 合格53题 · 120分钟',
    color: '#1a5fb4',
    paperType: 'paper1',
    children: PAPER1.chapters
  },
  {
    id: 'paper3',
    name: '卷三 Paper 3',
    subtitle: '长期保险',
    desc: '50题 · 合格35题 · 75分钟',
    color: '#9141ac',
    paperType: 'paper3',
    children: PAPER3.chapters
  }
];

// 导出
if (typeof module !== 'undefined' && module.exports) {
  module.exports = FOCO_DATA;
}