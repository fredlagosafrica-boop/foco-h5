// FOCO 备考 - 示例题库数据
// 格式：exam → chapters → questions

const FOCO_DATA = {
  exams: [
    {
      id: 'iique',
      name: 'IIQE 保险中介资格',
      shortName: 'IIQE',
      cover: '📋',
      color: '#1a5fb4',
      description: '保险中介人资格考试必备题库',
      chapters: [
        {
          id: 'iique-1',
          name: '保险基础原理',
          questionCount: 5,
          questions: [
            {
              id: 'iique-1-1',
              type: 'single',
              content: '保险的基本原则是？',
              options: ['A. 赌博原则', 'B. 多数人分摊少数人损失', 'C. 投机取巧', 'D. 快速致富'],
              answer: 'B',
              analysis: '保险的本质是集合众人的保费，分摊少数人的损失，体现了"我为人人，人人为我"的互助精神。',
              difficulty: 1
            },
            {
              id: 'iique-1-2',
              type: 'single',
              content: '可保风险必须具备的条件不包括？',
              options: ['A. 风险必须是纯粹的', 'B. 风险必须具有偶然性', 'C. 风险必须有盈利可能', 'D. 风险必须有可测定性'],
              answer: 'C',
              analysis: '可保风险必须满足：纯粹性（无盈利可能）、偶然性、可测定性、可计算性等条件。',
              difficulty: 2
            },
            {
              id: 'iique-1-3',
              type: 'judge',
              content: '保险是一种风险转移机制，投保人通过缴纳保费将风险转移给保险公司。',
              options: ['正确', '错误'],
              answer: '正确',
              analysis: '保险的核心功能就是风险转移，投保人将不确定的风险损失转为确定的保费支出。',
              difficulty: 1
            },
            {
              id: 'iique-1-4',
              type: 'single',
              content: '保险合同中最大的诚信原则要求？',
              options: ['A. 双方无需披露信息', 'B. 投保人必须如实告知重要事实', 'C. 保险公司无需说明条款', 'D. 任何信息都不重要'],
              answer: 'B',
              analysis: '最大诚信原则（Utmost Good Faith）要求投保人如实告知影响保险公司承保决定的重要事实，否则可能影响合同效力。',
              difficulty: 2
            },
            {
              id: 'iique-1-5',
              type: 'single',
              content: '以下哪种情况属于保险利益原则的范畴？',
              options: ['A. 投保人对与自己无关的财产投保', 'B. 投保人对自己不具有法律上承认的利益投保', 'C. 投保人对与自己有血缘关系的家属具有利益', 'D. 投保人对赌博标的具有利益'],
              answer: 'C',
              analysis: '保险利益必须是法律上承认的、与投保人有直接利害关系的利益。血缘关系属于可认定利益范围。',
              difficulty: 2
            }
          ]
        },
        {
          id: 'iique-2',
          name: '香港保险监管',
          questionCount: 3,
          questions: [
            {
              id: 'iique-2-1',
              type: 'single',
              content: '香港保险业监管局（IA）的职责是？',
              options: ['A. 制定税务政策', 'B. 监管保险公司和保险经纪', 'C. 处理刑事案件', 'D. 提供银行贷款'],
              answer: 'B',
              analysis: '保险业监管局（Insurer Authority）负责监管香港保险公司及保险中介人的运作，确保市场规范。',
              difficulty: 1
            },
            {
              id: 'iique-2-2',
              type: 'judge',
              content: '在香港，所有保险中介人必须持有有效的保险牌照才能执业。',
              options: ['正确', '错误'],
              answer: '正确',
              analysis: '根据《保险业条例》，在香港从事保险中介业务必须持有香港保险业监管局颁发的牌照。',
              difficulty: 1
            },
            {
              id: 'iique-2-3',
              type: 'single',
              content: '保险代理人与保险经纪的主要区别是？',
              options: ['A. 代理人是个人，经纪是公司', 'B. 代理人代表保险公司，经纪代表客户', 'C. 两者无区别', 'D. 代理人无需培训'],
              answer: 'B',
              analysis: '保险代理人代表保险公司推销产品，保险经纪则代表客户为客户寻找合适的保险产品。',
              difficulty: 2
            }
          ]
        }
      ]
    },
    {
      id: 'hksi',
      name: 'HKSI 证券及期货从业员资格',
      shortName: 'HKSI',
      cover: '📊',
      color: '#26a269',
      description: '香港证券及期货从业员资格考试题库',
      chapters: [
        {
          id: 'hksi-1',
          name: '证券法规基础',
          questionCount: 4,
          questions: [
            {
              id: 'hksi-1-1',
              type: 'single',
              content: '《证券及期货条例》（SFO）监管以下哪些活动？',
              options: ['A. 房地产交易', 'B. 证券及期货合约交易', 'C. 银行贷款', 'D. 保险业务'],
              answer: 'B',
              analysis: '《证券及期货条例》是香港证券及期货市场的主要法例，监管证券、期货、杠杆外汇等受规管活动。',
              difficulty: 1
            },
            {
              id: 'hksi-1-2',
              type: 'single',
              content: '香港证监会（SFC）的职能不包括？',
              options: ['A. 监管交易所和结算所', 'B. 发牌和监管中介人', 'C. 直接参与证券交易', 'D. 执法和调查'],
              answer: 'C',
              analysis: '证监会是监管机构，不会直接参与交易。其职能包括监管市场参与者、制定规则、执法等。',
              difficulty: 2
            },
            {
              id: 'hksi-1-3',
              type: 'judge',
              content: '在香港从事受规管活动必须持有香港证监会发出的牌照。',
              options: ['正确', '错误'],
              answer: '正确',
              analysis: '根据《证券及期货条例》，从事任何受规管活动必须向证监会申请牌照并获批准。',
              difficulty: 1
            },
            {
              id: 'hksi-1-4',
              type: 'single',
              content: '以下哪种属于「证券」的定义范围？',
              options: ['A. 银行存款证明', 'B. 股票和债券', 'C. 房产证', 'D. 汽车登记证'],
              answer: 'B',
              analysis: '根据《证券及期货条例》，证券包括股票、债券、基金单位、衍生工具等。',
              difficulty: 1
            }
          ]
        },
        {
          id: 'hksi-2',
          name: '市场运作机制',
          questionCount: 2,
          questions: [
            {
              id: 'hksi-2-1',
              type: 'single',
              content: '香港交易所（HKEX）的主要产品包括？',
              options: ['A. 银行存款', 'B. 股票、债券、衍生产品', 'C. 房地产投资信托', 'D. B和C都是'],
              answer: 'D',
              analysis: '港交所提供多元化产品包括股票、债券、ETF、期货、期权、房地产投资信托等。',
              difficulty: 1
            },
            {
              id: 'hksi-2-2',
              type: 'single',
              content: '什么叫「对冲」？',
              options: ['A. 投机性买卖', 'B. 用相关资产抵消潜在损失', 'C. 长期持有不卖', 'D. 高频交易'],
              answer: 'B',
              analysis: '对冲是一种风险管理策略，通过建立与原有持仓相反的头寸来抵消潜在损失。',
              difficulty: 2
            }
          ]
        }
      ]
    },
    {
      id: 'cams',
      name: 'CAMS 反洗钱专家资格',
      shortName: 'CAMS',
      cover: '🛡️',
      color: '#c64600',
      description: '国际公认反洗钱师认证考试题库',
      chapters: [
        {
          id: 'cams-1',
          name: '反洗钱基础知识',
          questionCount: 4,
          questions: [
            {
              id: 'cams-1-1',
              type: 'single',
              content: '洗钱过程的三个阶段是？',
              options: ['A. 存入、转移、提取', 'B. Placement、Layering、Integration', 'C. 接收、保管、转交', 'D. 申报、审核、放行'],
              answer: 'B',
              analysis: '洗钱的三个经典阶段：Placement（入账）、Layering（分层）、Integration（整合）。这是ACAMS官方定义的洗钱流程。',
              difficulty: 1
            },
            {
              id: 'cams-1-2',
              type: 'single',
              content: 'FATF（金融行动特别工作组）的主要职责是？',
              options: ['A. 发行货币', 'B. 制定国际反洗钱标准', 'C. 监管银行利率', 'D. 提供贷款担保'],
              answer: 'B',
              analysis: 'FATF是G7建立的国际组织，负责制定反洗钱/反恐怖融资的国际标准，并推动各国执行。',
              difficulty: 2
            },
            {
              id: 'cams-1-3',
              type: 'judge',
              content: '客户尽职调查（CDD）是反洗钱合规的核心环节。',
              options: ['正确', '错误'],
              answer: '正确',
              analysis: '客户尽职调查是识别和验证客户身份、了解客户交易目的的核心程序，是反洗钱的基础。',
              difficulty: 1
            },
            {
              id: 'cams-1-4',
              type: 'single',
              content: '以下哪种情况需要提交可疑交易报告（STR）？',
              options: ['A. 客户正常存款1万港元', 'B. 客户频繁进行大额现金交易且无法解释', 'C. 客户开通网上银行', 'D. 客户更改联系电话'],
              answer: 'B',
              analysis: '当交易符合可疑交易特征（如频繁大额现金、无法解释的交易目的）时，机构有法律义务提交可疑交易报告。',
              difficulty: 2
            }
          ]
        }
      ]
    },
    {
      id: 'cfa-esg',
      name: 'CFA ESG 投资认证',
      shortName: 'ESG',
      cover: '🌱',
      color: '#9141ac',
      description: 'CFA ESG投资认证考试备考题库',
      chapters: [
        {
          id: 'esg-1',
          name: 'ESG概念与框架',
          questionCount: 4,
          questions: [
            {
              id: 'esg-1-1',
              type: 'single',
              content: 'ESG代表什么？',
              options: ['A. 经济增长、社会稳定、政府效率', 'B. 环境、社会、治理', 'C. 能源节约、可持续性、绿色', 'D. 以上都不是'],
              answer: 'B',
              analysis: 'ESG是Environmental（环境）、Social（社会）、Governance（治理）的缩写，是可持续发展投资的三大核心支柱。',
              difficulty: 1
            },
            {
              id: 'esg-1-2',
              type: 'single',
              content: '以下哪项属于环境（E）因素？',
              options: ['A. 员工多样性', 'B. 碳排放管理', 'C. 董事会独立性', 'D. 高管薪酬'],
              answer: 'B',
              analysis: '环境因素包括气候变化、碳排放、能源效率、废物管理、水资源利用等。',
              difficulty: 1
            },
            {
              id: 'esg-1-3',
              type: 'judge',
              content: 'ESG投资只在发达国家流行，发展中国家尚不普及。',
              options: ['正确', '错误'],
              answer: '错误',
              analysis: 'ESG投资已成为全球趋势，包括中国在内的许多发展中国家也在积极推动ESG投资发展。',
              difficulty: 2
            },
            {
              id: 'esg-1-4',
              type: 'single',
              content: 'UN PRI（责任投资原则）的全称是？',
              options: ['A. 联合国公共投资原则', 'B. 联合国责任投资原则', 'C. 统一风险评估原则', 'D. 普遍监管参与原则'],
              answer: 'B',
              analysis: 'UN PRI（United Nations Principles for Responsible Investment）于2006年由联合国发起，旨在帮助投资者将ESG因素纳入投资决策。',
              difficulty: 2
            }
          ]
        }
      ]
    }
  ]
};

// 导出供其他模块使用
if (typeof module !== 'undefined' && module.exports) {
  module.exports = FOCO_DATA;
}