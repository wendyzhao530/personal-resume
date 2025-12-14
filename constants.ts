

import { BilingualData } from './types';

const AVATAR_URL = "https://xland.eu.org/autoupload/f/kaY5gXBCGefYwT9lOXiQByfNcKcqEnRmcljopnyJoMs/20251214/ty9m/3970X5351/微信图片_20251214154743_119_23.jpg";

export const RESUME_DATA: BilingualData = {
  zh: {
    personalInfo: {
      name: "赵文笛",
      location: "北京",
      phone: "132 2472 9306",
      email: "wendiii0530@163.com",
      avatar: AVATAR_URL
    },
    education: [
      {
        school: "清华大学",
        degreeType: "硕士（推免）",
        major: "管理科学与工程",
        period: "2024.09 - 2027.06",
        gpa: "99.5 (4/128)",
        courses: "运筹学，项目管理，金融机构与市场，高级计量经济学，大数据技术的应用与实践等",
        awards: "清华大学优秀共青团员（2025）、清华之友-惠妍英才奖学金（2025），系研团优秀学生干部（2025）等"
      },
      {
        school: "中央财经大学",
        degreeType: "本科",
        major: "房地产经济与管理 | 北京市优秀毕业生（前 5%）",
        period: "2020.09 - 2024.06",
        gpa: "93.31 (1/55)",
        courses: "投资学，微观经济学，计量经济学，Python，SQL 数据库原理与应用",
        awards: "中央财经大学三好学生（2022），全面发展一等奖学金（2023），全面发展二等奖学金（2022），鸿基世业奖学金（2024）等"
      }
    ],
    internship: [
      {
        company: "抖音 (ByteDance)",
        department: "生态 | 消费内容 | 搜索",
        role: "策略产品经理",
        period: "2025.09 - 2025.12",
        projects: [
          {
            name: "排序优化（主 own）",
            background: "前期，抖音精选 app 搜索强 boost 优质内容展现，未考虑到个性化；因此对粗排、精排环节进行新目标的建模和已有目标的调参，做好符合产品调性和用户心智的搜索体验。",
            responsibilities: [
              "数据分析：基于uid粒度数据，对 30 余项关键行为的 pv 渗透，与LT7、优质浓度进行spearman 相关性分析，为后续建模与参数调优提供数据支撑。",
              "策略设计与参数调优：在明确优势特征后，主导精排环节的参数调优工作。对已有埋点的行为，通过分析目标的分值分布、方差及模型预估分的分歧胜率，确定合理参数并推动实验上线，持续跟踪效果并进行迭代优化。",
              "实验评估与效果分析：负责精排新增特征（如横屏目标提权）的实验观测与效果验证。AB Test结果显示，本实验通过做好 优质中长内容的搜索分发，提高了重点人群（ 年轻双持 高知高线 ）的优质、中长视频消费（人均宽口径优质vv +5.05%，5min+视频vv占比 +0.68%），带来了人均搜索pv的上涨（人均手搜pv +3.28%），最终导向了手搜LT7（+1.68%）和 大盘LT1（+1.7%）的正向收益"
            ],
            growth: "系统掌握了搜索场景下“召回-粗排-精排”全链路策略知识，同时显著提升了数据分析与实验设计能力。"
          },
          {
            name: "AI 大模型生产标签信号",
            background: "游戏垂搜中，以打劣为主；负责迭代大模型，新增优质标签，作为补充信号在排序环节使用。",
            responsibilities: [
              "问题分析与标准定义：SQL 抽取训练集与测试集，将游戏供给分为五类，进行人工标注，参与制定优质 policy。",
              "大模型迭代：开展多轮 case 评估进行 PE 调优，落地 SFT 训练与调参，迭代后的准确率达 95%。",
              "信号生产与排序应用：信号覆盖率达 86%，在视频垂搜的融合公式增加游戏优质分乘项。"
            ],
            growth: "全流程参与 AI 模型在搜索场景的落地，深化了对需求分析、数据 pipeline 构建及业务价值转化的实践。"
          }
        ]
      },
      {
        company: "快手 (Kuaishou)",
        department: "电商 | 商城策略中心 | 推荐",
        role: "策略产品经理",
        period: "2025.03 - 2025.08",
        projects: [
          {
            name: "新增 item2tag2item“搭配”策略召回",
            background: "为解决商品追打过于集中的问题，促进用户“再买一单”，引入 AI 大模型生成的“场景标签”作为中间桥梁。",
            responsibilities: [
              "数据分析：通过 SQL 取数，分析用户购买、点击行为数据，确定该链路触发 trigger 的合理时间窗口为 14 天。",
              "策略设计：参与设计“两阶段”的召回策略。验收实体 tag 准召双 85%+；提升 tag 对 trigger-item 的覆盖度达 95%，确保策略生效。",
              "实验收益分析与推全：A/B 中猜你喜欢 feed 商品卡订单量显著+0.6%。下拆确认收益主要来自“支付成功页”的猜你喜欢模块，贡献度达 70+%，符合预期，申请推全。"
            ],
            growth: "通过设计基于大模型的召回策略，提升了从 0 到 1 构建高准高召推荐链路的能力，形成闭环迭代经验。"
          },
          {
            name: "用户上下文特征入模",
            background: "在推荐精排环节中，原有特征体系主要依赖单维度、秒级粒度的静态特征，难以精准捕捉用户实时意图。为提升“首次刷新”与“返回重刷”场景下的内容匹配精度，引入毫秒级长序列行为特征。",
            responsibilities: [
              "行为路径与埋点梳理：系统梳理用户在请求前的全链路行为路径，涵盖直播间互动、短视频停留时长、商城入口来源及站内行为轨迹（如订单查询、页面退出等），完成关键路径埋点设计，并推动客户端与服务端埋点落地，为特征工程提供数据基础。",
              "序列特征建模与实验推进：推动算法团队完成长序列特征的建模与工程化，主导策略设计及 AB 实验上线，持续跟踪核心指标表现，推动特征迭代与策略优化。"
            ],
            growth: "系统掌握了通过抓包技术验证数据链路、高效协同客户端与服务端完成数据基建的能力。"
          },
          {
            name: "召回 quota 调配",
            background: "线上 70+路召回存在截断逻辑，因此下线低效队列，从而提高其它队列的 quota 和整体效率。",
            responsibilities: [
              "数据分析：SQL 取数，计算不同链路在不同漏斗环节的当次 ROI 与 LTV。",
              "策略设计：与算法对接，上线实验。",
              "实验收益分析与推全：经观测，买家首页 feed 商品订单量显著+0.7%，推全。"
            ],
            growth: "通过数据驱动的 ROI 分析，增强了在复杂推荐系统中进行策略调配与效率提升的能力。"
          }
        ]
      }
    ],
    portfolio: [
      {
        name: "Style Mirror AI",
        description: "AI试衣助手",
        link: "https://ai.studio/apps/drive/1TBtY-WdigRtApAtLmPtDLF8prdZmIdu7?fullscreenApplet=true",
        note: "tips：请在连接vpn条件下打开。"
      },
      {
        name: "Article Agent",
        description: "AI文案生成器",
        link: "https://aistudio.google.com/apps/drive/1D3RYQ2vuGqqdnUmLJkcdvKj6Q78QGd9q?fullscreenApplet=true&showPreview=true&showAssistant=true",
        note: "tips：请在连接vpn条件下打开。"
      }
    ],
    skills: [
      "熟练掌握 SQL",
      "会使用 Python",
      "SPSS",
      "MATLAB"
    ],
    competitions: [
      { year: "2023", name: "“互联网+”创新创业大赛", award: "北京市银奖" },
      { year: "2023", name: "华数杯数学建模竞赛", award: "全国二等奖" },
      { year: "2023", name: "鸿基世业行业研究大赛", award: "季军" },
      { year: "2022", name: "美国大学生数学建模竞赛", award: "国际二等奖" }
    ],
    ui: {
      name: "make it happen",
      jobTitle: "产品经理",
      typewriterTexts: ["赵文笛 个人简历💗", "求职方向 产品经理"],
      download: "下载 PDF",
      nav: { home: "首页", education: "教育背景", experience: "实习经历", portfolio: "作品集", skills: "技能与荣誉" },
      sections: { education: "教育背景", experience: "实习经历", portfolio: "作品集", skills: "技能与荣誉", skillsTitle: "专业技能", competitionsTitle: "竞赛经历" },
      labels: { courses: "主要课程", awards: "荣誉奖励", gpa: "GPA", background: "背景 💭： ", responsibilities: "职责 ⚡", growth: "成长 🌱： " }
    }
  },
  en: {
    personalInfo: {
      name: "Wendy Zhao",
      location: "Beijing",
      phone: "132 2472 9306",
      email: "wendiii0530@163.com",
      avatar: AVATAR_URL
    },
    education: [
      {
        school: "Tsinghua University",
        degreeType: "Master (Recommended)",
        major: "Mgmt Science & Eng",
        period: "2024.09 - 2027.06",
        gpa: "99.5 (4/128)",
        courses: "Operations Research, Project Management, Financial Institutions, Advanced Econometrics, Big Data Applications",
        awards: "Outstanding Youth League Member (2025), Huiyan Talent Scholarship (2025), Outstanding Student Cadre (2025)"
      },
      {
        school: "Central Univ. of Finance & Economics",
        degreeType: "Bachelor",
        major: "Real Estate Eco & Mgmt | Outstanding Grad (Top 5%)",
        period: "2020.09 - 2024.06",
        gpa: "93.31 (1/55)",
        courses: "Investments, Microeconomics, Econometrics, Python, SQL Database Principles",
        awards: "Merit Student (2022), Comprehensive 1st Class Scholarship (2023), Hongji Shiye Scholarship (2024)"
      }
    ],
    internship: [
      {
        company: "Douyin (ByteDance)",
        department: "Eco | Consumer Content | Search",
        role: "Strategy PM",
        period: "2025.09 - 2025.12",
        projects: [
          {
            name: "Ranking Optimization (Owner)",
            background: "Search results focused too much on quality boost without personalization. Modeled new objectives for coarse/fine ranking to align with user mindset.",
            responsibilities: [
              "Data Analysis: Analyzed correlation of 30+ metrics with Action Rate & LT7 using T-7 data. Filtered eco-friendly targets for modeling.",
              "Strategy & Tuning: Led fine-ranking parameter tuning. Analyzed score distribution and variance to determine parameters. Launched AB tests.",
              "Evaluation: Validated new features. Achieved +0.3% LT7 overall, +0.8% in manual search."
            ],
            growth: "Mastered 'Recall-Coarse-Fine' ranking strategy; improved data analysis and experimental design skills."
          },
          {
            name: "AI LLM Label Generation",
            background: "Gaming search results were poor. Iterated LLM to generate quality tags as ranking signals.",
            responsibilities: [
              "Analysis: Extracted train/test sets, categorized game supply, defined quality policy.",
              "LLM Iteration: Multi-round evaluation for PE tuning and SFT. Accuracy reached 95%.",
              "Application: Signal coverage 86%, added quality score multiplier to video ranking formula."
            ],
            growth: "Full-process AI model deployment in search; deepened understanding of data pipelines."
          }
        ]
      },
      {
        company: "Kuaishou",
        department: "E-commerce | Strategy | Rec",
        role: "Strategy PM",
        period: "2025.03 - 2025.08",
        projects: [
          {
            name: "Item2Tag2Item 'Bundle' Recall",
            background: "Introduced AI-generated 'Scenario Tags' to bridge items and promote cross-selling.",
            responsibilities: [
              "Analysis: Determined 14-day trigger window via SQL analysis.",
              "Strategy: Designed 'Two-Stage' recall. Achieved 85%+ tag precision/recall.",
              "Revenue: AB test showed +0.6% feed card orders. 70% contribution from Payment Success Page. Rolled out."
            ],
            growth: "Designed LLM-based recall strategy, built high-precision recommendation capabilities."
          },
          {
            name: "Recall Quota Allocation",
            background: "70+ recall paths had truncation. Removed inefficient queues to increase quota for others.",
            responsibilities: [
              "Analysis: Calculated ROI & LTV for different paths.",
              "Strategy: Aligned with algo team, launched experiment.",
              "Result: Buyer homepage orders +0.7%. Rolled out."
            ],
            growth: "Enhanced strategy allocation efficiency via data-driven ROI analysis."
          },
          {
            name: "User Context Feature Integration",
            background: "Fine-ranking relied on static features. Introduced ms-level long sequence behavior features for better intent matching.",
            responsibilities: [
              "Tracking: Mapped full-link behavior (livestream, short video, etc.). Designed tracking points.",
              "Modeling: Pushed long-sequence feature modeling. Led strategy design & AB testing."
            ],
            growth: "Mastered data link verification and client/server collaboration for data infra."
          }
        ]
      }
    ],
    portfolio: [
      {
        name: "Style Mirror AI",
        description: "AI Virtual Try-on Assistant",
        link: "https://ai.studio/apps/drive/1TBtY-WdigRtApAtLmPtDLF8prdZmIdu7?fullscreenApplet=true",
        note: "tips: Please open with VPN connected."
      },
      {
        name: "Article Agent",
        description: "AI Copywriting Generator",
        link: "https://aistudio.google.com/apps/drive/1D3RYQ2vuGqqdnUmLJkcdvKj6Q78QGd9q?fullscreenApplet=true&showPreview=true&showAssistant=true",
        note: "tips: Please open with VPN connected."
      }
    ],
    skills: [
      "Proficient in SQL",
      "Python",
      "SPSS",
      "MATLAB"
    ],
    competitions: [
      { year: "2023", name: "Internet+ Innovation Competition", award: "Beijing Silver Award" },
      { year: "2023", name: "Huashu Cup Math Modeling", award: "National 2nd Prize" },
      { year: "2023", name: "Hongji Shiye Industry Research", award: "3rd Place" },
      { year: "2022", name: "MCM/ICM", award: "Intl 2nd Prize" }
    ],
    ui: {
      name: "make it happen",
      jobTitle: "Product Manager",
      typewriterTexts: ["Wendy Zhao Resume 💗", "Product Manager"],
      download: "Download PDF",
      nav: { home: "Home", education: "Education", experience: "Experience", portfolio: "Portfolio", skills: "Skills" },
      sections: { education: "Education", experience: "Internship", portfolio: "Portfolio", skills: "Skills & Awards", skillsTitle: "Professional Skills", competitionsTitle: "Competitions" },
      labels: { courses: "Core Courses", awards: "Awards", gpa: "GPA", background: "Background 🫧: ", responsibilities: "Responsibilities ⚡", growth: "Growth 🌱: " }
    }
  }
};