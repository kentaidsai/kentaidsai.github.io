// AB-100 題庫（由 AB-100_questions.docx 解析；答案為社群共識，非官方）
const AB100_DATA = {
 "title": "AB-100 模擬測驗題庫",
 "source": "ExamTopics 討論區整理（共 125 題）；答案依社群投票與討論摘要整理，非官方答案。",
 "domains": {
  "S": "規劃 AI 驅動的商業解決方案",
  "D": "設計 AI 驅動的商業解決方案",
  "P": "部署 AI 驅動的商業解決方案"
 },
 "categories": {
  "S1": {
   "name": "規劃｜AI 策略、ROI 與成本",
   "domain": "S"
  },
  "S2": {
   "name": "規劃｜資料與知識來源",
   "domain": "S"
  },
  "D1": {
   "name": "設計｜Copilot Studio Agent",
   "domain": "D"
  },
  "D2": {
   "name": "設計｜Dynamics 365 / M365 Copilot 與預建 Agent",
   "domain": "D"
  },
  "D3": {
   "name": "設計｜多代理、Foundry 與模型",
   "domain": "D"
  },
  "P1": {
   "name": "部署｜ALM 與環境部署",
   "domain": "P"
  },
  "P2": {
   "name": "部署｜測試與提示詞",
   "domain": "P"
  },
  "P3": {
   "name": "部署｜監控與分析",
   "domain": "P"
  },
  "P4": {
   "name": "部署｜安全、治理與負責任 AI",
   "domain": "P"
  }
 },
 "cases": {
  "fabrikam": {
   "title": "Case Study：Fabrikam, Inc.",
   "text": "Background\nFabrikam, Inc., is a global consumer goods company that is undergoing a digital transformation initiative to migrate its entire infrastructure to the Microsoft cloud. As a key element of this cloud migration, the company will implement Microsoft Dynamics 365 Sales, moving away from the current on-premises proprietary technologies used by its business-to-business (B2B) sales team.\nAs part of the cloud migration, Fabrikam will adopt an AI-first approach to its business solutions and implement AI solutions, wherever possible, to streamline operations.\nProblem Statements\nFabrikam's infrastructure currently relies on various on-premises systems that require sales executives to use corporate computers with physical keyboards to access business information during customer interactions. Mobile phones cannot be used for these purposes, as the systems depend on keyboard input. As a result, the sales executives spend a lot of time using keyboards to search for data on several disparate systems and file servers, rather than focusing on the customers. This affects the customer experience.\nFabrikam stakeholders are concerned that users will be hesitant to adopt AI. If the AI initiatives are NOT adopted, cost savings will never be realized. Additionally, funding for future AI initiatives will depend on demonstrating an increase in AI adoption month over month. As the AI agent initiative for the sales team will be the first for Fabrikam, the rapid adoption of the agent is a high priority.\nPlanned Initiatives\nGeneral\nFabrikam management has prioritized AI-driven projects to improve efficiency, customer engagement, and responsible AI adoption. The current application infrastructure is on-premises and must be migrated to the cloud to support the adoption of these technologies.\nInfrastructure Migration\nFabrikam plans to migrate from its current on-premises infrastructure to a completely cloud-based topology; this will include user authentication, the security framework, and, primarily, the adoption of the services by end users.\nAll the data from the different systems will be consolidated into a single data source - a common data model that will use a Microsoft Dataverse environment as a single source of truth (SSOT) for the sales team.\nSales Cycle Enablement\nTo achieve the company's objectives, Fabrikam intends to implement the following strategies to enhance the sales cycle:\nUse low-code development to create a single AI agent that has Dataverse as its core component.\nEnsure that sales managers can access unanswered correspondence from prospects and intervene as appropriate.\nReplace the previous proprietary software with Dynamics 365 Sales to track sales cycles and customer interactions.\nHave the sales executives use Dynamics 365 Sales to track interactions for open opportunities and send follow-up communications to prospects.\nHave the sales executives use handsfree headsets to interact with an AI agent when they have questions about internal policies or customer data.\nRequirements\nInfrastructure Migration\nFabrikam has identified the following infrastructure migration requirements:\nAzure must be used for all future infrastructure workloads.\nThe company must follow Microsoft-recommended methodologies for infrastructure migration to the cloud.\nAny created AI agents must have their return on investment (ROI) calculated to ensure that the solution will save the company money.\nSales Cycle Enablement\nFabrikam has identified the following requirements for sales cycle enablement:\nThe final AI agent must follow Microsoft recommendations for a conversational user experience.\nA designated checklist must be reviewed to ensure that the AI agent follows Microsoft deployment recommendations for a compliant solution.\nDetailed telemetry must be logged for the first created AI agent to help troubleshoot and optimize the agent during the initial AI agent adoption process.\nUnexpected AI agent actions must end in an escalation to a live representative. For example, a sales executive must be rerouted to a representative if the agent cannot answer a question after two failed attempts.\nThe return on investment (ROI) of switching from the current process to the future process is required for stakeholder sign off.\nThe sales team must use Dynamics 365 Sales to correspond with prospects more quickly and efficiently than currently.\nSales managers must report on the adoption of the AI agent to key Fabrikam stakeholders on a monthly basis.\nAny sensitive information, such as user IDs and names, shared via the AI agent must be tracked for future auditing."
  },
  "contoso": {
   "title": "Case Study：Contoso, Ltd.",
   "text": "Overview\nContoso, Ltd. is a high-tech manufacturing company that uses Microsoft Dynamics 365 Finance. Dynamics 365 Supply Chain Management, and Dynamics 365 Commerce for its North American operations. The company designs and develops innovative products that have many patents and proprietary technologies. The patents and engineering designs are closely guarded secrets.\nContoso executives want to integrate and adopt AI solutions to help scale the company in preparation for an anticipated period of rapid growth.\nThe company has multiple legal entities and Azure subscriptions that will be used in the adopted AI solutions.\nRequirements\nAI Adoption\nThe following executives will have specific responsibilities in the overall AI adoption:\n•\tChief Technology Officer (CTO): Select one Dynamics 365 Finance, Dynamics 365 Supply Chain Management or Dynamics 365 Commerce prebuilt AI agent and one custom Microsoft Copilot Studio AI agent to prioritize and deploy during the initial AI adoption phase.\n•\tChief Information Officer (CIO): Ensure that appropriate security labels are assigned to the data used by the AI agents.\n•\tChief Financial Officer (CFO): Analyze the return on investment (ROI) for the AI agents being deployed.\n•\tChief Information Security Officer (CISO): Discover and inventory AI resources for auditing.\n•\tChief Executive Officer (CEO): Ensure that all solutions adhere to industry-standard responsible AI practices.\nAll AI initiatives and agents will have a detailed business use case, a defined audience profile, and an estimated ROI that will compare the cost savings of the current process against the estimated costs of using the new AI solutions.\nThe company's research and development (R&D) department already has a custom Model Context Protocol (MCP) server that contains comprehensive product specifications and compliance data.\nPrebuilt AI Agent\nThe CTO has NOT yet selected which prebuilt AI agent to use in Dynamics 365 Supply Chain Management. The CTO wants to view available agent templates to identify which agent will add the most business value.\nDepending on which high-priority AI agents are identified, its agent capabilities must be previewed in a discovery meeting with the relevant business operation stakeholders.\nCustom AI Agent\nContoso has identified the following custom AI agent requirements:\n•\tThe custom AI agent will use data from Dynamics 365 Supply Chain Management to answer questions for the manufacturing team as a low-code solution.\n•\tThe custom AI agent will be accessible from within Microsoft Teams.\n•\tThe custom AI agent must be designed to eventually connect to other agents that can be selected based on their description.\n•\tThe topics used in the custom AI agent will be selected based NOT on a trigger phrase, but on a description of the purpose of the query, to make the interactions more conversational.\n•\tThe custom AI agent must be able to answer questions about product specifications by using existing technologies. The product specifications are maintained by the R&D department.\n•\tThe custom AI agent must be integrated with and accessible from Dynamics 365 Supply Chain Management.\n•\tThe custom AI agent must be able to use Dynamics 365 Supply Chain Management business logic that is stored outside of the application.\nAnalysis, Reporting, and Troubleshooting\nContoso has identified the following analysis, reporting, and troubleshooting requirements:\n•\tThe CISO will audit all the AI solutions monthly for compliance and security.\n•\tThe CFO will analyze all the AI solutions quarterly to compare the estimated ROI against actual measured efficiencies and adoption. The CFO will use the Copilot Studio agent usage estimator to perform this analysis.\n•\tThe CISO wants to identify how much sensitive data was accessed for a given AI agent run and who accessed the data. Too much sensitive data accessed by a single user might indicate a high security risk.\n•\tThe CTO wants to track user feedback on the quality of the AI agent responses during user interactions with the agents. Consistently poor feedback will trigger an escalated reengineering discussion.\n•\tThe CEO wants a quarterly assessment of all the required metrics for their specific responsibilities. The tools used for the assessments must be Microsoft-recommended and must verify reliability, interpretability, fairness, and compliance.\n•\tThe CFO wants to identify how many interactions with the AI agents are abandoned on a given day as compared to resolved conversations. Too many abandoned sessions might indicate that Copilot Studio credits are being used inefficiently by end users."
  }
 },
 "questions": [
  {
   "id": "T1Q1",
   "exam": "Topic 1 Q1",
   "q": "Which framework should you use to meet the AI agent requirements for the sales cycle enablement? To answer, select the appropriate options in the answer area.",
   "url": "",
   "case": "fabrikam",
   "type": "slots",
   "kind": "hotspot",
   "slots": [
    {
     "label": "For Microsoft Copilot Studio best practices:",
     "options": [
      "the ALM Accelerator for Microsoft Power Platform",
      "Microsoft Cloud Adoption Framework for Azure",
      "Microsoft Power Platform Well-Architected framework",
      "Success by Design"
     ],
     "answer": "Microsoft Power Platform Well-Architected framework"
    },
    {
     "label": "For conversational user experiences:",
     "options": [
      "the ALM Accelerator for Microsoft Power Platform",
      "Microsoft Cloud Adoption Framework for Azure",
      "Microsoft Power Platform Well-Architected framework",
      "Success by Design"
     ],
     "answer": "Success by Design"
    }
   ],
   "cat": "D1",
   "exp": "Well-Architected 提供 Copilot Studio 最佳實務；Success by Design 對應對話體驗與採用。",
   "imgs": [
    "image1.png"
   ],
   "imgText": "For Microsoft Copilot Studio best practices:（選項：the ALM Accelerator for Microsoft Power Platform ｜ Microsoft Cloud Adoption Framework for Azure ｜ Microsoft Power Platform Well-Architected framework ｜ Success by Design）\nFor conversational user experiences:（選項：the ALM Accelerator for Microsoft Power Platform ｜ Microsoft Cloud Adoption Framework for Azure ｜ Microsoft Power Platform Well-Architected framework ｜ Success by Design）"
  },
  {
   "id": "T1Q2",
   "exam": "Topic 1 Q2",
   "q": "Which framework should you use for the infrastructure migration?",
   "url": "",
   "case": "fabrikam",
   "type": "single",
   "options": [
    {
     "k": "A",
     "t": "Microsoft Cloud Adoption Framework for Azure"
    },
    {
     "k": "B",
     "t": "Success by Design"
    },
    {
     "k": "C",
     "t": "Microsoft Power Platform Center of Excellence (CoE)"
    },
    {
     "k": "D",
     "t": "Microsoft Power Platform Project Setup Wizard"
    }
   ],
   "answer": [
    "A"
   ],
   "cat": "S1",
   "exp": "從地端遷移到 Azure 的 Microsoft 建議方法論是 Cloud Adoption Framework (CAF)。"
  },
  {
   "id": "T1Q3",
   "exam": "Topic 1 Q3",
   "q": "A company uses Microsoft Dynamics 365 Sales to manage leads that are stored in a Microsoft Dataverse table named Lead and use non-standard terminology and custom columns.\nYou need to configure business terms in the Lead table so that Microsoft Copilot controls can summarize the leads efficiently. The solution must minimize administrative effort.\nHow should you configure the business terms?",
   "url": "",
   "type": "single",
   "options": [
    {
     "k": "A",
     "t": "Combine all the fields into one custom field."
    },
    {
     "k": "B",
     "t": "Map the field display names as business terms."
    },
    {
     "k": "C",
     "t": "Add the schema names as business terms."
    },
    {
     "k": "D",
     "t": "Create new business terms for each field."
    }
   ],
   "answer": [
    "B"
   ],
   "cat": "S2",
   "exp": "直接對應既有欄位顯示名稱為業務術語，行政工作量最低。"
  },
  {
   "id": "T1Q4",
   "exam": "Topic 1 Q4",
   "q": "You are designing two Microsoft Copilot Studio agents named Agent1 and Agent2. Each agent must meet the following requirements:\nEach agent must use a standard model.\nEach agent must NOT use generative orchestration.\nAgent1 must support simple and short phrases for a given topic.\nAgent2 must integrate with Microsoft Dynamics 365 Contact Center voice channel.\nYou need to recommend language models for the agents.\nWhat should you recommend for each agent? To answer, drag the appropriate language models to the correct agents. Each language model may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.",
   "url": "",
   "type": "slots",
   "kind": "dragdrop",
   "slots": [
    {
     "label": "Agent1",
     "options": [
      "Azure Language in Foundry Tools",
      "Azure OpenAI",
      "Conversational language understanding (CLU)",
      "Natural language understanding (NLU)",
      "Natural language understanding + (NLU+)"
     ],
     "answer": "Natural language understanding (NLU)"
    },
    {
     "label": "Agent2",
     "options": [
      "Azure Language in Foundry Tools",
      "Azure OpenAI",
      "Conversational language understanding (CLU)",
      "Natural language understanding (NLU)",
      "Natural language understanding + (NLU+)"
     ],
     "answer": "Natural language understanding + (NLU+)"
    }
   ],
   "cat": "D1",
   "exp": "標準模型：簡短語句用 NLU；Dynamics 365 Contact Center 語音通道用 NLU+（社群討論 CLU 為自訂模型，故不選）。",
   "imgs": [
    "image2.png"
   ],
   "imgText": "選項池：Azure Language in Foundry Tools ｜ Azure OpenAI ｜ Conversational language understanding (CLU) ｜ Natural language understanding (NLU) ｜ Natural language understanding + (NLU+)\nAgent1：［　］\nAgent2：［　］",
   "verify": "official",
   "ref": "https://learn.microsoft.com/microsoft-copilot-studio/nlu-overview"
  },
  {
   "id": "T1Q5",
   "exam": "Topic 1 Q5",
   "q": "A company uses Microsoft Dynamics 365 finance and operations apps.\nThe company plans to use Microsoft Copilot in-app help and guidance to generate responses for internal business processes.\nYou need to add an additional knowledge source for the business processes. The solution must NOT add new topics to the Copilot agent for the finance and operations apps.\nWhich knowledge source should you add?",
   "url": "",
   "type": "single",
   "options": [
    {
     "k": "A",
     "t": "Microsoft Dataverse"
    },
    {
     "k": "B",
     "t": "a public website"
    },
    {
     "k": "C",
     "t": "Azure AI Search"
    },
    {
     "k": "D",
     "t": "a file upload"
    }
   ],
   "answer": [
    "D"
   ],
   "cat": "S2",
   "exp": "只需新增知識來源且不能新增 topic：檔案上傳是 Dynamics 365 F&O 產生式說明可用的知識來源。"
  },
  {
   "id": "T1Q6",
   "exam": "Topic 1 Q6",
   "q": "A company has an AI business solution.\nYou need to extend the solution so that Microsoft 365 Copilot can invoke external logic hosted in Azure services.\nWhat should you include in the solution?",
   "url": "",
   "type": "single",
   "options": [
    {
     "k": "A",
     "t": "Microsoft Copilot Studio skills"
    },
    {
     "k": "B",
     "t": "Microsoft Power Platform connectors"
    },
    {
     "k": "C",
     "t": "custom engine agents"
    }
   ],
   "answer": [
    "B"
   ],
   "cat": "D1",
   "exp": "Power Platform 連接器可讓 Copilot 呼叫 Azure 上的外部邏輯（社群有 Copilot Studio skills / custom engine agents 的爭議）。",
   "verify": "partial",
   "ref": "https://learn.microsoft.com/microsoft-365-copilot/extensibility/faq"
  },
  {
   "id": "T1Q7",
   "exam": "Topic 1 Q7",
   "q": "You need to design a shared prompt library that will be used across multiple business units. The solution must meet the following requirements:\nEnsure consistent AI responses with reusable formats.\nSupport governance and version control.\nMinimize administrative effort.\nMinimize ongoing costs.\nWhat should you recommend for each requirement? To answer, select the appropriate options in the answer area.",
   "url": "",
   "type": "slots",
   "kind": "hotspot",
   "slots": [
    {
     "label": "Ensure consistent AI responses:",
     "options": [
      "Delegate department-specific prompt templates.",
      "Define standardized prompt templates.",
      "Maintain a prompt history."
     ],
     "answer": "Define standardized prompt templates."
    },
    {
     "label": "Support governance and version control:",
     "options": [
      "Define standardized prompt templates.",
      "Store prompts in a Git repository.",
      "Categorize prompts by business function."
     ],
     "answer": "Store prompts in a Git repository."
    }
   ],
   "cat": "P2",
   "exp": "標準化模板確保一致；Git 儲存庫提供治理與版本控制。",
   "imgs": [
    "image3.png"
   ],
   "imgText": "Ensure consistent AI responses:（選項：Delegate department-specific prompt templates. ｜ Define standardized prompt templates. ｜ Maintain a prompt history.）\nSupport governance and version control:（選項：Define standardized prompt templates. ｜ Store prompts in a Git repository. ｜ Categorize prompts by business function.）"
  },
  {
   "id": "T1Q8",
   "exam": "Topic 1 Q8",
   "q": "A company has a Microsoft Foundry project that uses a single agent and a single prompt to complete a series of tasks.\nThe agent encounters the following issues:\nIt frequently produces incomplete results.\nIt struggles with domain-specific reasoning.\nAgent response times are remarkably slow.\nYou need to recommend a solution to improve the overall performance and accuracy of the agent.\nWhat should you include in the recommendation? To answer, drag the appropriate actions to the correct requirements. Each action may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.",
   "url": "",
   "type": "slots",
   "kind": "dragdrop",
   "slots": [
    {
     "label": "To improve performance",
     "options": [
      "Add a grounding data source.",
      "Add a prebuilt connector.",
      "Move to a multi-agent architecture.",
      "Upgrade to a larger generative AI model."
     ],
     "answer": "Move to a multi-agent architecture."
    },
    {
     "label": "To improve accuracy",
     "options": [
      "Add a grounding data source.",
      "Add a prebuilt connector.",
      "Move to a multi-agent architecture.",
      "Upgrade to a larger generative AI model."
     ],
     "answer": "Add a grounding data source."
    }
   ],
   "cat": "D3",
   "exp": "多代理架構分工提升速度；加入 grounding 資料源提升準確度。",
   "imgs": [
    "image4.png"
   ],
   "imgText": "選項池：Add a grounding data source. ｜ Add a prebuilt connector. ｜ Move to a multi-agent architecture. ｜ Upgrade to a larger generative AI model.\nTo improve performance：［　］\nTo improve accuracy：［　］"
  },
  {
   "id": "T1Q9",
   "exam": "Topic 1 Q9",
   "q": "A financial services company uses Microsoft Dynamics 365 Finance.\nCurrently, the company's support staff manually reviews customer transaction histories to detect potential fraud cases before escalating the cases.\nYou need to recommend an automation solution for the review process. The solution must ensure that escalations reach a human analyst for final decision making. What should you recommend?",
   "url": "",
   "type": "single",
   "options": [
    {
     "k": "A",
     "t": "Deploy an autonomous agent that closes non-fraud cases automatically."
    },
    {
     "k": "B",
     "t": "Use Microsoft 365 Copilot in Word to automatically finalize fraud detection policies."
    },
    {
     "k": "C",
     "t": "Configure a task agent to generate fraud risk scores for the human analyst to review."
    },
    {
     "k": "D",
     "t": "Export the data to a data lake for analysis in Microsoft Power BI."
    }
   ],
   "answer": [
    "C"
   ],
   "cat": "D1",
   "exp": "工作代理(task agent)產生風險分數，最終決策仍由人工分析師完成。"
  },
  {
   "id": "T1Q10",
   "exam": "Topic 1 Q10",
   "q": "A company plans to deploy a Microsoft Copilot Studio agent that will analyze historical business data to predict customer behavior.\nThe data is currently stored in an Azure SQL database, flat files, APIs, and logs.\nYou need to organize the data into a format that can be used as a knowledge source in Copilot Studio.\nWhat should you include in the solution?",
   "url": "",
   "type": "single",
   "options": [
    {
     "k": "A",
     "t": "Azure AI Search"
    },
    {
     "k": "B",
     "t": "Azure Data Lake Storage"
    },
    {
     "k": "C",
     "t": "Azure Cosmos DB"
    },
    {
     "k": "D",
     "t": "Azure Translator in Foundry Tools"
    }
   ],
   "answer": [
    "A"
   ],
   "cat": "S2",
   "exp": "Azure AI Search 可整合 SQL、檔案、API、記錄並建立索引，作為 Copilot Studio 知識來源。"
  },
  {
   "id": "T1Q11",
   "exam": "Topic 1 Q11",
   "q": "A retail company plans to deploy Microsoft Copilot Studio agents to support:\nMicrosoft Dynamics 365 Commerce scenarios.\nA Microsoft Power Apps inventory management solution.\nYou need to recommend a solution to organize product catalog data as a consistent source for multiple AI systems.\nWhat should you recommend?",
   "url": "",
   "type": "single",
   "options": [
    {
     "k": "A",
     "t": "Let each agent scrape product details from Microsoft SharePoint Online libraries."
    },
    {
     "k": "B",
     "t": "Store the product catalog data in a separate custom table for each agent."
    },
    {
     "k": "C",
     "t": "Configure prompts to pull product details from the PDFs of external vendors."
    },
    {
     "k": "D",
     "t": "Centralize the product catalog data in Microsoft Dataverse and expose the data to both agents."
    }
   ],
   "answer": [
    "D"
   ],
   "cat": "S2",
   "exp": "Dataverse 作為單一事實來源，多個 Agent 共用同一份產品目錄。"
  },
  {
   "id": "T1Q12",
   "exam": "Topic 1 Q12",
   "q": "A company has a portfolio of AI initiatives at different stages of development.\nYou need to recommend a structured approach to evaluating the return on AI investment (ROAI) across all the initiatives. The solution must balance immediate results with long-term values and strategic innovations.\nWhat should you include in the recommendation?",
   "url": "",
   "type": "single",
   "options": [
    {
     "k": "A",
     "t": "a simple cost and benefit analysis"
    },
    {
     "k": "B",
     "t": "a horizon-based framework"
    },
    {
     "k": "C",
     "t": "the internal rate of return (IRR) function"
    },
    {
     "k": "D",
     "t": "a prioritization grid"
    }
   ],
   "answer": [
    "B"
   ],
   "cat": "S1",
   "exp": "Horizon（H1/H2/H3）框架平衡短期成效與長期策略價值。"
  },
  {
   "id": "T1Q13",
   "exam": "Topic 1 Q13",
   "q": "You need to recommend a Microsoft Power Platform business solution that consolidates data from multiple internal and external data sources. The solution must meet the following requirements:\nProvide the data as a centralized source for multiple AI systems, including Microsoft Copilot Studio agents, Dynamics 365 applications, and external AI models.\nSupport built-in data classification and protection policies.\nProvide data for grounding and analytics.\nWhat should you include in the recommendation?",
   "url": "",
   "type": "single",
   "options": [
    {
     "k": "A",
     "t": "Microsoft Dataverse"
    },
    {
     "k": "B",
     "t": "Azure Data Lake Storage"
    },
    {
     "k": "C",
     "t": "a Microsoft Power BI semantic model"
    },
    {
     "k": "D",
     "t": "Azure Cosmos DB"
    }
   ],
   "answer": [
    "A"
   ],
   "cat": "S2",
   "exp": "Dataverse 具內建資料分類/保護、可集中供 Copilot Studio、D365 使用。"
  },
  {
   "id": "T1Q14",
   "exam": "Topic 1 Q14",
   "q": "A company plans to deploy an AI-based customer service app that will autonomously manage interactions, escalate complex cases, and learn from historical ticket data.\nYou need to perform a return on AI investment (ROAI) analysis of the app deployment. The solution must ensure that the analysis is accurate.\nWhat should you do first?",
   "url": "",
   "type": "single",
   "options": [
    {
     "k": "A",
     "t": "Establish the AI performance metrics."
    },
    {
     "k": "B",
     "t": "Conduct an AI market benchmarking study."
    },
    {
     "k": "C",
     "t": "Model the customer experience."
    },
    {
     "k": "D",
     "t": "Identify and quantify all the development, deployment, and operating costs."
    }
   ],
   "answer": [
    "D"
   ],
   "cat": "S1",
   "exp": "ROAI 分析首先要辨識並量化所有開發、部署與營運成本（TCO）。"
  },
  {
   "id": "T1Q15",
   "exam": "Topic 1 Q15",
   "q": "You are designing end-to-end test scenarios for a business solution that uses Microsoft Dynamics 365 Sales and Dynamics 365 Finance.\nYou need to ensure that the business solution meets the following test requirements:\n•\tProperly exchanges data between the Dynamics 365 apps\n•\tAligns with defined user workflows and business processes\nWhich type of testing should you use for each requirement? To answer, drag the appropriate testing types to the correct requirements. Each testing type may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.",
   "url": "",
   "type": "slots",
   "kind": "dragdrop",
   "slots": [
    {
     "label": "Properly exchanges data between the Dynamics 365 apps",
     "options": [
      "Drift",
      "Exploratory",
      "Integration",
      "Performance",
      "User acceptance"
     ],
     "answer": "Integration"
    },
    {
     "label": "Aligns with defined user workflows and business processes",
     "options": [
      "Drift",
      "Exploratory",
      "Integration",
      "Performance",
      "User acceptance"
     ],
     "answer": "User acceptance"
    }
   ],
   "cat": "P2",
   "exp": "整合測試驗證系統間資料交換；UAT 驗證業務流程。",
   "imgs": [
    "image5.png"
   ],
   "imgText": "選項池：Drift ｜ Exploratory ｜ Integration ｜ Performance ｜ User acceptance\nProperly exchanges data between the Dynamics 365 apps：［　］\nAligns with defined user workflows and business processes：［　］"
  },
  {
   "id": "T1Q16",
   "exam": "Topic 1 Q16",
   "q": "A company has a Microsoft 365 tenant in Canada and multiple Microsoft Power Platform environments in Canada and the United States.\nThe company plans to deploy a Microsoft Copilot Studio agent to the Canadian environment that will use:\n•\tMicrosoft Dataverse data stored in Canada\n•\tA connector that connects to an Azure OpenAI instance in the United States\nYou need to ensure that the agent adheres to data residency and data movement policies before being deployed.\nWhat should you do?",
   "url": "",
   "type": "single",
   "options": [
    {
     "k": "A",
     "t": "Ensure that the data processed by Azure OpenAI is stored in the United States."
    },
    {
     "k": "B",
     "t": "From the Microsoft Purview portal, validate the Data loss prevention settings."
    },
    {
     "k": "C",
     "t": "Migrate the tenant to the United States."
    },
    {
     "k": "D",
     "t": "Ensure that cross-region data movement is enabled for the Canadian environment and connector dependencies."
    }
   ],
   "answer": [
    "D"
   ],
   "cat": "P4",
   "exp": "跨區域使用美國的 Azure OpenAI，須確認環境與連接器的跨區域資料移動設定。"
  },
  {
   "id": "T1Q17",
   "exam": "Topic 1 Q17",
   "q": "A company has a Microsoft Copilot Studio agent for customer support.\nYou are reviewing and validating the following prompts:\n•\tA prompt that has instructions to \"help the customer as best you can\"\n•\tA prompt that helps retrieve product information from a knowledge base\nYou need to ensure that the agent delivers consistent and accurate responses.\nWhat should you do for each prompt? To answer, select the appropriate options in the answer area.",
   "url": "",
   "type": "slots",
   "kind": "hotspot",
   "slots": [
    {
     "label": "A prompt that has instructions to “help the customer as best you can”:",
     "options": [
      "Add filler words to make the prompt sound more natural and conversational.",
      "Keep the prompt vague to enable model flexibility.",
      "Rewrite the prompt with clear and task-specific instructions."
     ],
     "answer": "Rewrite the prompt with clear and task-specific instructions."
    },
    {
     "label": "A prompt that helps retrieve product information from a knowledge base:",
     "options": [
      "Add several open-ended questions to give the model broader context.",
      "Use responses with only reference sources and limit the response scope.",
      "Remove the knowledge source so that the model responds freely with general product information."
     ],
     "answer": "Use responses with only reference sources and limit the response scope."
    }
   ],
   "cat": "P2",
   "exp": "模糊指示要改成明確任務；知識庫提示應限制回應範圍只用參考來源。",
   "imgs": [
    "image6.png"
   ],
   "imgText": "A prompt that has instructions to “help the customer as best you can”:（選項：Add filler words to make the prompt sound more natural and conversational. ｜ Keep the prompt vague to enable model flexibility. ｜ Rewrite the prompt with clear and task-specific instructions.）\nA prompt that helps retrieve product information from a knowledge base:（選項：Add several open-ended questions to give the model broader context. ｜ Use responses with only reference sources and limit the response scope. ｜ Remove the knowledge source so that the model responds freely with general product information.）"
  },
  {
   "id": "T1Q18",
   "exam": "Topic 1 Q18",
   "q": "You are designing a testing solution for Microsoft Copilot Studio agents.\nYou need to validate prompt engineering best practices to ensure that the agents generate accurate and contextually relevant responses.\nWhich prompt validation techniques and metrics should you include in the solution? To answer, select the appropriate options in the answer area.",
   "url": "",
   "type": "slots",
   "kind": "hotspot",
   "slots": [
    {
     "label": "Prompt validation techniques:",
     "options": [
      "Exclude domain-specific terminology from the prompts.",
      "Use prompts that have varied phrasing.",
      "Use only simple, one-word prompts."
     ],
     "answer": "Use prompts that have varied phrasing."
    },
    {
     "label": "Metrics:",
     "options": [
      "The number of words generated per response",
      "Response relevance and accuracy",
      "The response generation time"
     ],
     "answer": "Response relevance and accuracy"
    }
   ],
   "cat": "P2",
   "exp": "以多樣化措辭驗證穩健性；以回應相關性與準確度作為指標。",
   "imgs": [
    "image7.png"
   ],
   "imgText": "Prompt validation techniques:（選項：Exclude domain-specific terminology from the prompts. ｜ Use prompts that have varied phrasing. ｜ Use only simple, one-word prompts.）\nMetrics:（選項：The number of words generated per response ｜ Response relevance and accuracy ｜ The response generation time）"
  },
  {
   "id": "T1Q19",
   "exam": "Topic 1 Q19",
   "q": "A company has two Microsoft Power Platform environments named Dev1 and Prod1. A Microsoft Copilot Studio agent named Agent1 is built into a solution in the Dev1 environment.\nYou plan to deploy Agent1 to Prod1.\nYou need to make Agent1 available to the users in Prod1. The solution must minimize administrative effort.\nWhat should you do?",
   "url": "",
   "type": "single",
   "options": [
    {
     "k": "A",
     "t": "Share Agent1 with the users in Prod1."
    },
    {
     "k": "B",
     "t": "Export the solution as an unmanaged solution and import the solution into Prod1."
    },
    {
     "k": "C",
     "t": "Export the solution as a managed solution and import the solution into Prod1."
    },
    {
     "k": "D",
     "t": "Create a new Copilot Studio agent in Prod1 by replicating the configuration of Agent1."
    }
   ],
   "answer": [
    "C"
   ],
   "cat": "P1",
   "exp": "Dev 到 Prod 應匯出為受控(managed)解決方案後匯入，努力最低。"
  },
  {
   "id": "T1Q20",
   "exam": "Topic 1 Q20",
   "q": "A company has a Microsoft Power Platform environment that contains Microsoft Dataverse data.\nYou create a Microsoft Copilot Studio agent named Agent1 that processes the Dataverse data.\nYou discover that Agent1 fails to return relevant or accurate results.\nYou need to improve the quality and reliability of data grounding.\nWhat should you do?",
   "url": "",
   "type": "single",
   "options": [
    {
     "k": "A",
     "t": "Retrain Agent1."
    },
    {
     "k": "B",
     "t": "Verify and cleanse the Dataverse data."
    },
    {
     "k": "C",
     "t": "Use an adaptive card in Agent1."
    },
    {
     "k": "D",
     "t": "Add example user inputs to the training data of Agent1."
    }
   ],
   "answer": [
    "B"
   ],
   "cat": "S2",
   "exp": "Grounding 結果不佳，先驗證並清理 Dataverse 資料品質。"
  },
  {
   "id": "T1Q22",
   "exam": "Topic 1 Q22",
   "q": "A manufacturing company wants to deploy an agent that will automate supplier invoice processing.\nYou are designing a solution to evaluate the financial implications of the deployment. The company is especially concerned about budget overruns.\nYou need to ensure that the solution considers the total cost of ownership (TCO), the expected savings from using automation, and whether to extend the existing AI capabilities.\nWhat should you include in the design?",
   "url": "",
   "type": "single",
   "options": [
    {
     "k": "A",
     "t": "a break-even analysis only"
    },
    {
     "k": "B",
     "t": "adopting prebuilt agents to reduce the deployment time"
    },
    {
     "k": "C",
     "t": "training a custom model"
    },
    {
     "k": "D",
     "t": "a return on AI investment (ROAI) analysis"
    }
   ],
   "answer": [
    "D"
   ],
   "cat": "S1",
   "exp": "ROAI 分析涵蓋 TCO、預期節省與是否擴充 AI。"
  },
  {
   "id": "T1Q23",
   "exam": "Topic 1 Q23",
   "q": "A company has a Microsoft Power Platform solution that contains the following components:\n•\tMicrosoft Dataverse tables\n•\tA Microsoft Power BI workspace named WS1\n•\tA canvas app named App1 that uses Dataverse\n•\tA Power BI semantic model that connects to Dataverse by using DirectQuery\nYou plan to use generative AI to provide answers to queries based on a subset of corporate data.\nYou need to ensure that the data is available as a grounding data source for AI systems.\nWhat should you do?",
   "url": "",
   "type": "single",
   "options": [
    {
     "k": "A",
     "t": "Populate a Dataverse table."
    },
    {
     "k": "B",
     "t": "Share WS1."
    },
    {
     "k": "C",
     "t": "Endorse the semantic model."
    },
    {
     "k": "D",
     "t": "Export the semantic model."
    }
   ],
   "answer": [
    "A"
   ],
   "cat": "S2",
   "exp": "將子集資料放入 Dataverse 資料表，即為原生的 grounding 資料來源。"
  },
  {
   "id": "T1Q24",
   "exam": "Topic 1 Q24",
   "q": "A company plans to implement an AI business solution for a consumer goods company.\nYou need to create agents that meet the following requirements:\n•\tOrchestrate the sales order fulfillment and shipping of goods to customers.\n•\tAnalyze historical data and trends to replenish stock.\nWhich type of agent should you use for each requirement? To answer, drag the appropriate agent types to the correct requirements. Each agent type may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.",
   "url": "",
   "type": "slots",
   "kind": "dragdrop",
   "slots": [
    {
     "label": "Orchestrate the sales order fulfillment and shipping",
     "options": [
      "Autonomous",
      "Prompt-and-response",
      "Task"
     ],
     "answer": "Autonomous"
    },
    {
     "label": "Analyze historical data and trends",
     "options": [
      "Autonomous",
      "Prompt-and-response",
      "Task"
     ],
     "answer": "Task"
    }
   ],
   "cat": "D2",
   "exp": "訂單履行與出貨流程編排用自主代理；歷史資料與趨勢分析用任務代理。",
   "imgs": [
    "image8.png"
   ],
   "imgText": "選項池：Autonomous ｜ Prompt-and-response ｜ Task\nOrchestrate the sales order fulfillment and shipping：［　］\nAnalyze historical data and trends：［　］"
  },
  {
   "id": "T1Q25",
   "exam": "Topic 1 Q25",
   "q": "A company has an AI agent that automates the review of customer feedback stored in a cloud database.\nYou plan to generate monthly reports from the agent's output to provide insights into customer sentiment and guide product development and marketing.\nYou need to ensure that the data ingested by the agent is clean and suitable for the intended use.\nWhat should you do to prepare the data?",
   "url": "",
   "type": "single",
   "options": [
    {
     "k": "A",
     "t": "Create a workflow in Microsoft Power Automate."
    },
    {
     "k": "B",
     "t": "Identify and address biased data."
    },
    {
     "k": "C",
     "t": "Create an agent flow in Microsoft Copilot Studio."
    },
    {
     "k": "D",
     "t": "Sort the database by customer last name."
    }
   ],
   "answer": [
    "B"
   ],
   "cat": "S2",
   "exp": "準備資料首要任務：識別並處理有偏見的資料（負責任 AI）。"
  },
  {
   "id": "T1Q26",
   "exam": "Topic 1 Q26",
   "q": "A company is designing a Microsoft Power Platform solution to reduce the manual steps of a business process by deploying an existing AI model.\nYou need to calculate the return on AI investment (ROAI) by identifying the metadata and telemetry of the solution.\nWhat should you use?",
   "url": "",
   "type": "single",
   "options": [
    {
     "k": "A",
     "t": "Microsoft Power Platform admin center"
    },
    {
     "k": "B",
     "t": "Success by Design"
    },
    {
     "k": "C",
     "t": "the Business value toolkit"
    },
    {
     "k": "D",
     "t": "Microsoft Cloud Adoption Framework for Azure"
    }
   ],
   "answer": [
    "C"
   ],
   "cat": "S1",
   "exp": "Business value toolkit 透過解決方案中繼資料與遙測計算 ROI/ROAI。"
  },
  {
   "id": "T1Q27",
   "exam": "Topic 1 Q27",
   "q": "A company has a Microsoft Power Platform environment.\nYou need to build two agents named Agent1 and Agent2. The solution must meet the following requirements:\n•\tAgent1 must be extendable by using the Semantic Kernel and must connect to multiple business apps and APIs.\n•\tAgent2 must connect directly to data stored in Microsoft Dataverse and must be embeddable in a Microsoft Power Apps canvas app.\nWhat should you use to build each agent? To answer, select the appropriate options in the answer area.",
   "url": "",
   "type": "slots",
   "kind": "hotspot",
   "slots": [
    {
     "label": "Agent1:",
     "options": [
      "Microsoft Foundry",
      "Azure Logic Apps",
      "Copilot in Power Apps",
      "Microsoft Copilot Studio"
     ],
     "answer": "Microsoft Foundry"
    },
    {
     "label": "Agent2:",
     "options": [
      "Microsoft Foundry",
      "Azure Logic Apps",
      "Copilot in Power Apps",
      "Microsoft Copilot Studio"
     ],
     "answer": "Microsoft Copilot Studio"
    }
   ],
   "cat": "D3",
   "exp": "Semantic Kernel 可擴充、連多 App/API 用 Foundry；直接連 Dataverse 並嵌入 canvas app 用 Copilot Studio（社群對第二項有 Copilot in Power Apps 之爭議）。",
   "imgs": [
    "image9.png"
   ],
   "imgText": "Agent1:（選項：Microsoft Foundry ｜ Azure Logic Apps ｜ Copilot in Power Apps ｜ Microsoft Copilot Studio）\nAgent2:（選項：Microsoft Foundry ｜ Azure Logic Apps ｜ Copilot in Power Apps ｜ Microsoft Copilot Studio）"
  },
  {
   "id": "T1Q28",
   "exam": "Topic 1 Q28",
   "q": "A company has an Azure environment that supports multiple business units.\nThe company plans to implement an AI solution that will perform sentiment analysis on customer product reviews.\nYou need to evaluate the potential cost of the solution to support return on AI investment (ROAI) analysis.\nWhat should you use?",
   "url": "",
   "type": "single",
   "options": [
    {
     "k": "A",
     "t": "Cost Management + Billing"
    },
    {
     "k": "B",
     "t": "Microsoft Fabric SKU Estimator"
    },
    {
     "k": "C",
     "t": "Total Cost of Ownership (TCO) Calculator"
    },
    {
     "k": "D",
     "t": "Azure Reservations"
    }
   ],
   "answer": [
    "C"
   ],
   "cat": "S1",
   "exp": "評估尚未部署的方案成本，使用 TCO 計算器（社群另有 Cost Management 之爭議）。",
   "verify": "partial",
   "ref": "https://learn.microsoft.com/training/modules/describe-cost-management-azure/3-compare-pricing-total-cost-of-ownership-calculators"
  },
  {
   "id": "T1Q29",
   "exam": "Topic 1 Q29",
   "q": "You need to recommend a Microsoft Power Platform solution for customer support. The solution must include AI capabilities in Microsoft Power Automate and must meet the following requirements:\n•\tUse a centralized workspace for AI models.\n•\tGenerate short overviews from large amounts of unstructured text, such as case notes or transcripts, without requiring additional training or coding.\nWhat should you include in the recommendation for each requirement? To answer, select the appropriate options in the answer area.",
   "url": "",
   "type": "slots",
   "kind": "hotspot",
   "slots": [
    {
     "label": "Use a centralized workspace:",
     "options": [
      "An Microsoft Foundry hub",
      "Azure OpenAI Foundry",
      "Microsoft Copilot Studio",
      "Microsoft Dataverse"
     ],
     "answer": "An Microsoft Foundry hub"
    },
    {
     "label": "Generate short overviews:",
     "options": [
      "An AI Builder prebuilt model",
      "An AI Builder prebuilt prompt",
      "Azure OpenAI",
      "GitHub Copilot",
      "Microsoft Copilot in Power Automate"
     ],
     "answer": "An AI Builder prebuilt prompt"
    }
   ],
   "cat": "D2",
   "exp": "Foundry hub 是 AI 模型集中工作區；AI Builder 預建提示詞可免訓練產生摘要。",
   "imgs": [
    "image10.png"
   ],
   "imgText": "Use a centralized workspace:（選項：An Microsoft Foundry hub ｜ Azure OpenAI Foundry ｜ Microsoft Copilot Studio ｜ Microsoft Dataverse）\nGenerate short overviews:（選項：An AI Builder prebuilt model ｜ An AI Builder prebuilt prompt ｜ Azure OpenAI ｜ GitHub Copilot ｜ Microsoft Copilot in Power Automate）"
  },
  {
   "id": "T1Q30",
   "exam": "Topic 1 Q30",
   "q": "A company uses Microsoft Dynamics 365 Finance for accounts payable and customer debt recovery.\nYou are designing an AI finance process that meets the following requirements:\n•\tProvides AI-driven details to help staff identify overdue vendor invoices and outstanding balances\n•\tHelps staff reduce how long it takes to review overdue invoices and payment history\nYou need to recommend which Microsoft Copilot features to include in the design.\nWhat should you recommend for each requirement? To answer, select the appropriate options in the answer area.",
   "url": "",
   "type": "slots",
   "kind": "hotspot",
   "slots": [
    {
     "label": "Help identify vendor overdue invoices and outstanding balances:",
     "options": [
      "Agent management",
      "AI Summaries with Copilot",
      "The Account Reconciliation agent",
      "The Supplier Communication agent"
     ],
     "answer": "AI Summaries with Copilot"
    },
    {
     "label": "Reduce how long it takes to review overdue invoices and payment history:",
     "options": [
      "Analyze demand plans with Copilot",
      "Collections coordinator summary",
      "The Account Reconciliation agent",
      "The Supplier Communication agent"
     ],
     "answer": "Collections coordinator summary"
    }
   ],
   "cat": "D2",
   "exp": "D365 Finance：AI 摘要協助辨識逾期發票；催收協調員摘要縮短逾期發票與付款歷史審查。",
   "imgs": [
    "image11.png"
   ],
   "imgText": "Help identify vendor overdue invoices and outstanding balances:（選項：Agent management ｜ AI Summaries with Copilot ｜ The Account Reconciliation agent ｜ The Supplier Communication agent）\nReduce how long it takes to review overdue invoices and payment history:（選項：Analyze demand plans with Copilot ｜ Collections coordinator summary ｜ The Account Reconciliation agent ｜ The Supplier Communication agent）"
  },
  {
   "id": "T1Q31",
   "exam": "Topic 1 Q31",
   "q": "Which two components in the custom AI agent design should the CFO evaluate in the quarterly agent analysis? Each correct answer presents part of the solution.",
   "url": "",
   "case": "contoso",
   "type": "multi",
   "options": [
    {
     "k": "A",
     "t": "the GPT models used for the agent"
    },
    {
     "k": "B",
     "t": "the average characters in a chat message"
    },
    {
     "k": "C",
     "t": "the agent orchestration method"
    },
    {
     "k": "D",
     "t": "the average session time per agent"
    }
   ],
   "answer": [
    "A",
    "C"
   ],
   "cat": "S1",
   "exp": "CFO 檢視的是 Agent 設計「元件」：GPT 模型與協調(orchestration)方式；B、D 是指標。"
  },
  {
   "id": "T1Q32",
   "exam": "Topic 1 Q32",
   "q": "What should you configure for the custom AI agent?",
   "url": "",
   "case": "contoso",
   "type": "single",
   "options": [
    {
     "k": "A",
     "t": "AI-assisted evaluators"
    },
    {
     "k": "B",
     "t": "classic orchestration"
    },
    {
     "k": "C",
     "t": "generative orchestration"
    },
    {
     "k": "D",
     "t": "Azure OpenAI reasoning models"
    }
   ],
   "answer": [
    "C"
   ],
   "cat": "D1",
   "exp": "以描述選擇 topic、對話式、可連接其他 agent，只有產生式協調(generative orchestration)支援。"
  },
  {
   "id": "T1Q33",
   "exam": "Topic 1 Q33",
   "q": "A company has an AI agent that automates the review of customer feedback stored in a cloud database.\nYou plan to generate monthly reports from the agent's output to provide insights into customer sentiment and guide product development and marketing.\nYou need to ensure that the data ingested by the agent is clean and suitable for the intended use.\nWhat should you do to prepare the data?",
   "url": "",
   "type": "single",
   "options": [
    {
     "k": "A",
     "t": "Ensure that the size of the database does not exceed 100 GB."
    },
    {
     "k": "B",
     "t": "Translate the data into a single language."
    },
    {
     "k": "C",
     "t": "Identify and address biased data."
    },
    {
     "k": "D",
     "t": "Sort the database by customer last name."
    }
   ],
   "answer": [
    "C"
   ],
   "cat": "S2",
   "exp": "資料準備要識別並處理偏見資料。"
  },
  {
   "id": "T1Q34",
   "exam": "Topic 1 Q34",
   "q": "A company has an Azure environment that supports multiple business units.\nThe company plans to implement an AI solution that will perform sentiment analysis on customer product reviews.\nYou need to evaluate the potential cost of the solution to support return on AI investment (ROAI) analysis.\nWhat should you use?",
   "url": "",
   "type": "single",
   "options": [
    {
     "k": "A",
     "t": "Total Cost of Ownership (TCO) Calculator"
    },
    {
     "k": "B",
     "t": "Azure Reservations"
    },
    {
     "k": "C",
     "t": "Azure pricing calculator"
    },
    {
     "k": "D",
     "t": "Azure Monitor"
    }
   ],
   "answer": [
    "C"
   ],
   "cat": "S1",
   "exp": "部署前估算成本用 Azure 定價計算器（TCO 計算器已將停用）。",
   "verify": "official",
   "ref": "https://learn.microsoft.com/azure/cost-management-billing/costs/pricing-calculator"
  },
  {
   "id": "T1Q35",
   "exam": "Topic 1 Q35",
   "q": "A company has an Azure environment that supports multiple business units.\nThe company plans to implement an AI solution that will perform sentiment analysis on customer product reviews.\nYou need to evaluate the potential cost of the solution to support return on AI investment (ROAI) analysis.\nWhat should you use?",
   "url": "",
   "type": "single",
   "options": [
    {
     "k": "A",
     "t": "Azure savings plans"
    },
    {
     "k": "B",
     "t": "Microsoft Fabric SKU Estimator"
    },
    {
     "k": "C",
     "t": "Cost Management + Billing"
    },
    {
     "k": "D",
     "t": "Azure Monitor"
    }
   ],
   "answer": [
    "C"
   ],
   "cat": "S1",
   "exp": "依社群投票選 Cost Management + Billing（部分討論認為應為預估工具，有爭議）。",
   "verify": "partial",
   "ref": "https://learn.microsoft.com/azure/cost-management-billing/costs/pricing-calculator"
  },
  {
   "id": "T1Q36",
   "exam": "Topic 1 Q36",
   "q": "A company has an Azure environment that supports multiple business units.\nThe company plans to implement an AI solution that will perform sentiment analysis on customer product reviews.\nYou need to evaluate the potential cost of the solution to support return on AI investment (ROAI) analysis.\nWhat should you use?",
   "url": "",
   "type": "single",
   "options": [
    {
     "k": "A",
     "t": "Azure Reservations"
    },
    {
     "k": "B",
     "t": "Microsoft Fabric SKU Estimator"
    },
    {
     "k": "C",
     "t": "Anomaly Detection in Azure Cost Management"
    },
    {
     "k": "D",
     "t": "Azure pricing calculator"
    }
   ],
   "answer": [
    "D"
   ],
   "cat": "S1",
   "exp": "Azure 定價計算器可預估未來 Azure 服務費用。",
   "verify": "official",
   "ref": "https://learn.microsoft.com/azure/cost-management-billing/costs/pricing-calculator"
  },
  {
   "id": "T1Q37",
   "exam": "Topic 1 Q37",
   "q": "A company has an Azure environment that supports multiple business units.\nThe company plans to implement an AI solution that will perform sentiment analysis on customer product reviews.\nYou need to evaluate the potential cost of the solution to support return on AI investment (ROAI) analysis.\nWhat should you use?",
   "url": "",
   "type": "single",
   "options": [
    {
     "k": "A",
     "t": "Anomaly Detection in Azure Cost Management"
    },
    {
     "k": "B",
     "t": "Azure pricing calculator"
    },
    {
     "k": "C",
     "t": "Azure savings plans"
    },
    {
     "k": "D",
     "t": "Microsoft Fabric SKU Estimator"
    }
   ],
   "answer": [
    "B"
   ],
   "cat": "S1",
   "exp": "Azure 定價計算器用於部署前的預估。",
   "verify": "official",
   "ref": "https://learn.microsoft.com/azure/cost-management-billing/costs/pricing-calculator"
  },
  {
   "id": "T1Q38",
   "exam": "Topic 1 Q38",
   "q": "A company has an Azure environment that supports multiple business units.\nThe company plans to implement an AI solution that will perform sentiment analysis on customer product reviews.\nYou need to evaluate the potential cost of the solution to support return on AI investment (ROAI) analysis.\nWhat should you use?",
   "url": "",
   "type": "single",
   "options": [
    {
     "k": "A",
     "t": "Azure savings plans"
    },
    {
     "k": "B",
     "t": "Anomaly Detection in Azure Cost Management"
    },
    {
     "k": "C",
     "t": "Azure Monitor"
    },
    {
     "k": "D",
     "t": "Cost Management + Billing"
    }
   ],
   "answer": [
    "D"
   ],
   "cat": "S1",
   "exp": "Cost Management + Billing（社群作答，有爭議）。",
   "verify": "partial",
   "ref": "https://learn.microsoft.com/azure/cost-management-billing/costs/pricing-calculator"
  },
  {
   "id": "T1Q39",
   "exam": "Topic 1 Q39",
   "q": "A company has an AI agent that automates the review of customer feedback stored in a cloud database.\nYou plan to generate monthly reports from the agent's output to provide insights into customer sentiment and guide product development and marketing.\nYou need to ensure that the data ingested by the agent is clean and suitable for the intended use.\nWhat should you do to prepare the data?",
   "url": "",
   "type": "single",
   "options": [
    {
     "k": "A",
     "t": "Identify and address missing or inconsistent data."
    },
    {
     "k": "B",
     "t": "Sort the database by customer last name."
    },
    {
     "k": "C",
     "t": "Ensure that the size of the database does not exceed 100 GB."
    },
    {
     "k": "D",
     "t": "Verify data privacy and security compliance."
    }
   ],
   "answer": [
    "A"
   ],
   "cat": "S2",
   "exp": "資料應先處理缺漏與不一致的資料，使其乾淨可用。"
  },
  {
   "id": "T1Q40",
   "exam": "Topic 1 Q40",
   "q": "A company uses multiple Microsoft Copilot Studio agents across different channels.\nYou need to recommend a monitoring solution that provides comprehensive telemetry data and performance insights for the agents.\nWhat should you include in the recommendation?",
   "url": "",
   "type": "single",
   "options": [
    {
     "k": "A",
     "t": "Azure DevOps"
    },
    {
     "k": "B",
     "t": "Microsoft Power BI"
    },
    {
     "k": "C",
     "t": "Microsoft Dynamics 365 Customer Voice"
    },
    {
     "k": "D",
     "t": "Application Insights"
    }
   ],
   "answer": [
    "D"
   ],
   "cat": "P3",
   "exp": "Application Insights 提供 Copilot Studio 完整遙測與效能洞察。",
   "verify": "official",
   "ref": "https://learn.microsoft.com/microsoft-copilot-studio/telemetry-overview"
  },
  {
   "id": "T1Q41",
   "exam": "Topic 1 Q41",
   "q": "A company uses multiple Microsoft Copilot Studio agents across different channels.\nYou need to recommend a monitoring solution that provides comprehensive telemetry data and performance insights for the agents.\nWhat should you include in the recommendation?",
   "url": "",
   "type": "single",
   "options": [
    {
     "k": "A",
     "t": "the Analytics tab in Copilot Studio"
    },
    {
     "k": "B",
     "t": "Microsoft Power BI"
    },
    {
     "k": "C",
     "t": "Microsoft Dynamics 365 Customer Voice"
    },
    {
     "k": "D",
     "t": "Microsoft Purview"
    }
   ],
   "answer": [
    "A"
   ],
   "cat": "P3",
   "exp": "選項中最適合的是 Copilot Studio 內建的 Analytics（現稱 Monitor/Analytics）。",
   "verify": "official",
   "ref": "https://learn.microsoft.com/microsoft-copilot-studio/analytics-overview"
  },
  {
   "id": "T1Q42",
   "exam": "Topic 1 Q42",
   "q": "A company uses multiple Microsoft Copilot Studio agents across different channels.\nYou need to recommend a monitoring solution that provides comprehensive telemetry data and performance insights for the agents.\nWhat should you include in the recommendation?",
   "url": "",
   "type": "single",
   "options": [
    {
     "k": "A",
     "t": "Azure Advisor"
    },
    {
     "k": "B",
     "t": "Microsoft Dynamics 365 Customer Voice"
    },
    {
     "k": "C",
     "t": "Application Insights"
    },
    {
     "k": "D",
     "t": "Log Analytics"
    }
   ],
   "answer": [
    "C"
   ],
   "cat": "P3",
   "exp": "選項中有 Application Insights 時，以其作為完整遙測方案。",
   "verify": "official",
   "ref": "https://learn.microsoft.com/microsoft-copilot-studio/telemetry-overview"
  },
  {
   "id": "T1Q43",
   "exam": "Topic 1 Q43",
   "q": "A company uses multiple Microsoft Copilot Studio agents across different channels.\nYou need to recommend a monitoring solution that provides comprehensive telemetry data and performance insights for the agents.\nWhat should you include in the recommendation?",
   "url": "",
   "type": "single",
   "options": [
    {
     "k": "A",
     "t": "the Analytics tab in Copilot Studio"
    },
    {
     "k": "B",
     "t": "Azure Advisor"
    },
    {
     "k": "C",
     "t": "Log Analytics"
    },
    {
     "k": "D",
     "t": "Microsoft Purview"
    }
   ],
   "answer": [
    "A"
   ],
   "cat": "P3",
   "exp": "官方文件指出 Analytics 頁面提供 agent 的完整資料（綜合遙測與效能洞察）；選項中無 Application Insights 時選它。",
   "verify": "official",
   "ref": "https://learn.microsoft.com/microsoft-copilot-studio/analytics-overview"
  },
  {
   "id": "T1Q44",
   "exam": "Topic 1 Q44",
   "q": "A company has an AI agent that automates the review of customer feedback stored in a cloud database.\nYou plan to generate monthly reports from the agent's output to provide insights into customer sentiment and guide product development and marketing.\nYou need to ensure that the data ingested by the agent is clean and suitable for the intended use.\nWhat should you do to prepare the data?",
   "url": "",
   "type": "single",
   "options": [
    {
     "k": "A",
     "t": "Identify and address biased data."
    },
    {
     "k": "B",
     "t": "Ensure that the size of the database does not exceed 100 GB."
    },
    {
     "k": "C",
     "t": "Verify data privacy and security compliance."
    },
    {
     "k": "D",
     "t": "Translate the data into a single language."
    }
   ],
   "answer": [
    "A"
   ],
   "cat": "S2",
   "exp": "識別並處理偏見資料，確保情感分析公平可靠。"
  },
  {
   "id": "T1Q45",
   "exam": "Topic 1 Q45",
   "q": "You have a proposal for an AI claims handling solution.\nBefore the proposal is approved, the solution requires a return on investment (ROI) analysis that provides early indicators of value and a complete accounting of lifecycle costs.\nYou need to select the ROI category and the cost driver for total cost of ownership (TCO).\nWhat should you select? To answer, select the appropriate options in the answer area.",
   "url": "",
   "type": "slots",
   "kind": "hotspot",
   "slots": [
    {
     "label": "ROI category:",
     "options": [
      "Financial",
      "Strategic",
      "Time-based"
     ],
     "answer": "Time-based"
    },
    {
     "label": "TCO cost driver:",
     "options": [
      "Data quality and preparation",
      "Infrastructure",
      "Ongoing operations"
     ],
     "answer": "Ongoing operations"
    }
   ],
   "cat": "S1",
   "exp": "時間節省是早期價值指標；TCO 需完整計入營運持續成本。",
   "imgs": [
    "image12.png"
   ],
   "imgText": "ROI category:（選項：Financial ｜ Strategic ｜ Time-based）\nTCO cost driver:（選項：Data quality and preparation ｜ Infrastructure ｜ Ongoing operations）"
  },
  {
   "id": "T1Q46",
   "exam": "Topic 1 Q46",
   "q": "Your company has a business solution that uses Microsoft Dynamics 365 Customer Service and Power Platform.\nYou plan to design an AI strategy for the business solution.\nYou need to recommend a process that supports the adoption of AI solutions and includes steps for managing, securing, and governing AI workloads.\nWhat should you include in the recommendation?",
   "url": "",
   "type": "single",
   "options": [
    {
     "k": "A",
     "t": "Microsoft Power Platform Center of Excellence (CoE)"
    },
    {
     "k": "B",
     "t": "Microsoft Cloud Adoption Framework for Azure"
    },
    {
     "k": "C",
     "t": "Success by Design"
    },
    {
     "k": "D",
     "t": "Microsoft Foundry Control Plane"
    }
   ],
   "answer": [
    "A"
   ],
   "cat": "S1",
   "exp": "Power Platform CoE 支援 AI 採用並涵蓋管理、安全與治理。"
  },
  {
   "id": "T2Q1",
   "exam": "Topic 2 Q1",
   "q": "Which template should you use for the AI agent to meet the requirements for the sales executives?",
   "url": "",
   "case": "fabrikam",
   "type": "single",
   "options": [
    {
     "k": "A",
     "t": "IT Helpdesk in Microsoft Copilot Studio"
    },
    {
     "k": "B",
     "t": "AI agents in Microsoft Foundry"
    },
    {
     "k": "C",
     "t": "Voice in Microsoft Copilot Studio"
    },
    {
     "k": "D",
     "t": "AI chat in Microsoft Foundry"
    }
   ],
   "answer": [
    "C"
   ],
   "cat": "D1",
   "exp": "業務主管使用免持耳機互動，因此選 Copilot Studio 的 Voice 範本。"
  },
  {
   "id": "T2Q2",
   "exam": "Topic 2 Q2",
   "q": "Which tool should you use for the prospect communication requirements in Dynamics 365 Sales?",
   "url": "",
   "case": "fabrikam",
   "type": "single",
   "options": [
    {
     "k": "A",
     "t": "Azure AI Search"
    },
    {
     "k": "B",
     "t": "Copilot email assist"
    },
    {
     "k": "C",
     "t": "the Voice template Microsoft Copilot Studio"
    },
    {
     "k": "D",
     "t": "Deep Research in Microsoft Foundry Agent Service"
    }
   ],
   "answer": [
    "B"
   ],
   "cat": "D2",
   "exp": "Copilot email assist 在 Dynamics 365 Sales 內產生郵件草稿與跟進建議。"
  },
  {
   "id": "T2Q3",
   "exam": "Topic 2 Q3",
   "q": "Which components should you use to meet the sales cycle enablement requirements? To answer, select the appropriate options in the answer area.",
   "url": "",
   "case": "fabrikam",
   "type": "slots",
   "kind": "hotspot",
   "slots": [
    {
     "label": "For AI agent creation:",
     "options": [
      "Microsoft Foundry",
      "Dynamics 365 Sales",
      "Microsoft Copilot Studio",
      "the Power Platform admin center"
     ],
     "answer": "Microsoft Copilot Studio"
    },
    {
     "label": "For unexpected AI agent actions:",
     "options": [
      "a custom connector",
      "an event trigger",
      "a Fallback topic",
      "a REST API"
     ],
     "answer": "a Fallback topic"
    }
   ],
   "cat": "D1",
   "exp": "低程式碼 agent 用 Copilot Studio；非預期行為由 Fallback topic 處理並升級真人。",
   "imgs": [
    "image13.png"
   ],
   "imgText": "For AI agent creation:（選項：Microsoft Foundry ｜ Dynamics 365 Sales ｜ Microsoft Copilot Studio ｜ the Power Platform admin center）\nFor unexpected AI agent actions:（選項：a custom connector ｜ an event trigger ｜ a Fallback topic ｜ a REST API）"
  },
  {
   "id": "T2Q4",
   "exam": "Topic 2 Q4",
   "q": "You need to design a Microsoft 365 Copilot solution to optimize employee productivity. The solution must meet the following requirements:\nEnsure that the employees can query content stored in a subset of Microsoft SharePoint Online sites and in Teams by using natural language-based prompt actions.\nEnsure that employees receive contextually relevant responses in Microsoft 365 Copilot.\nWhat should you include in the design?",
   "url": "",
   "type": "single",
   "options": [
    {
     "k": "A",
     "t": "Build a Microsoft Power Automate desktop flow to read the SharePoint content and post the responses to Teams."
    },
    {
     "k": "B",
     "t": "Modify SharePoint settings."
    },
    {
     "k": "C",
     "t": "Create a custom REST API that crawls the SharePoint content."
    },
    {
     "k": "D",
     "t": "Configure Microsoft Graph access."
    }
   ],
   "answer": [
    "D"
   ],
   "cat": "D2",
   "exp": "Microsoft 365 Copilot 透過 Microsoft Graph 以組織資料（SharePoint、Teams）接地。"
  },
  {
   "id": "T2Q5",
   "exam": "Topic 2 Q5",
   "q": "A company uses Microsoft Dynamics 365 Finance to manage accounts payable.\nYou are designing an AI invoice processing solution.\nYou need to recommend the prerequisites to configure a prebuilt copilot for accounts payable.\nWhat should you recommend?",
   "url": "",
   "type": "single",
   "options": [
    {
     "k": "A",
     "t": "From Microsoft Copilot Studio, create an accounts payable agent."
    },
    {
     "k": "B",
     "t": "Extend Microsoft 365 Copilot for Sales to an accounts payable agent."
    },
    {
     "k": "C",
     "t": "Build an AI tool in Microsoft Foundry."
    },
    {
     "k": "D",
     "t": "From the Power Platform admin center, assign the Finance and Operations AI security role to users."
    }
   ],
   "answer": [
    "D"
   ],
   "cat": "D2",
   "exp": "啟用 D365 Finance 預建應付帳款 Copilot 的前置條件：指派 Finance and Operations AI 安全角色。"
  },
  {
   "id": "T2Q6",
   "exam": "Topic 2 Q6",
   "q": "A company plans to deploy a Microsoft Dynamics 365 Contact Center agent.\nYou need to ensure that the agent can transfer the conversation to a live customer service representative.\nWhich two components should you include in the solution? Each correct answer presents part of the solution.",
   "url": "",
   "type": "multi",
   "options": [
    {
     "k": "A",
     "t": "Microsoft Foundry"
    },
    {
     "k": "B",
     "t": "Microsoft Copilot Studio"
    },
    {
     "k": "C",
     "t": "Microsoft 365 Agents Toolkit"
    },
    {
     "k": "D",
     "t": "an Azure AI Bot Service skill"
    },
    {
     "k": "E",
     "t": "Customer engagement hub"
    }
   ],
   "answer": [
    "B",
    "E"
   ],
   "cat": "D2",
   "exp": "Contact Center Agent 以 Copilot Studio 建置，轉接真人由 Customer engagement hub 承接。"
  },
  {
   "id": "T2Q7",
   "exam": "Topic 2 Q7",
   "q": "A company uses Microsoft Dynamics 365 Supply Chain Management.\nYou are designing an AI supply chain process that meets the following requirements:\nProvides managers with AI-driven insights that surface key information from customer orders\nHelps planners use AI to anticipate future product needs more accurately\nYou need to recommend which Microsoft Copilot features to include in the design.\nWhat should you recommend for each requirement? To answer, select the appropriate options in the answer area.",
   "url": "",
   "type": "slots",
   "kind": "hotspot",
   "slots": [
    {
     "label": "Provide AI-driven insights from customer orders:",
     "options": [
      "AI Summaries with Copilot",
      "Generative insights for Demand planning",
      "The Customer credit and collections workspace",
      "Workload insights with Copilot"
     ],
     "answer": "AI Summaries with Copilot"
    },
    {
     "label": "Anticipate future product needs:",
     "options": [
      "Generative insights for Demand planning",
      "Microsoft Power BI",
      "Product information management",
      "The Supplier Communications Agent"
     ],
     "answer": "Generative insights for Demand planning"
    }
   ],
   "cat": "D2",
   "exp": "SCM：AI 摘要呈現訂單重點；需求規劃產生式洞察預測未來需求。",
   "imgs": [
    "image14.png"
   ],
   "imgText": "Provide AI-driven insights from customer orders:（選項：AI Summaries with Copilot ｜ Generative insights for Demand planning ｜ The Customer credit and collections workspace ｜ Workload insights with Copilot）\nAnticipate future product needs:（選項：Generative insights for Demand planning ｜ Microsoft Power BI ｜ Product information management ｜ The Supplier Communications Agent）"
  },
  {
   "id": "T2Q8",
   "exam": "Topic 2 Q8",
   "q": "A company has a Microsoft 365 E5 subscription and uses Microsoft Copilot Studio.\nThe company has a Microsoft SharePoint Online library that contains 10,000 policy PDFs from various departments. The library contains a populated column named Department for each PDF.\nYou need to design a Copilot Studio agent that will use the SharePoint library as a knowledge source. The solution must meet the following requirements:\nEnable the agent to answer user questions about company policies.\nEnsure that the agent can identify which departments and policies are connected.\nWhat should you include in the design for each requirement? To answer, select the appropriate options in the answer area.",
   "url": "",
   "type": "slots",
   "kind": "hotspot",
   "slots": [
    {
     "label": "Enable the agent to answer questions about company policies:",
     "options": [
      "Build a custom model in Microsoft Foundry.",
      "From Copilot Studio, add SharePoint as a knowledge source.",
      "Import the PDFs into Microsoft Dataverse.",
      "Use AI Builder to process and feed SharePoint content."
     ],
     "answer": "From Copilot Studio, add SharePoint as a knowledge source."
    },
    {
     "label": "Identify which departments and policies are connected:",
     "options": [
      "Apply Microsoft Purview sensitivity labels.",
      "Create a Microsoft Dataverse table for the departments.",
      "From Copilot Studio, configure the SharePoint tool.",
      "Upgrade to SharePoint Premium."
     ],
     "answer": "Create a Microsoft Dataverse table for the departments."
    }
   ],
   "cat": "S2",
   "exp": "SharePoint 當知識來源；以 Dataverse 資料表維護部門與政策的關聯（社群有爭議）。",
   "imgs": [
    "image15.png"
   ],
   "imgText": "Enable the agent to answer questions about company policies:（選項：Build a custom model in Microsoft Foundry. ｜ From Copilot Studio, add SharePoint as a knowledge source. ｜ Import the PDFs into Microsoft Dataverse. ｜ Use AI Builder to process and feed SharePoint content.）\nIdentify which departments and policies are connected:（選項：Apply Microsoft Purview sensitivity labels. ｜ Create a Microsoft Dataverse table for the departments. ｜ From Copilot Studio, configure the SharePoint tool. ｜ Upgrade to SharePoint Premium.）"
  },
  {
   "id": "T2Q9",
   "exam": "Topic 2 Q9",
   "q": "You need to design a Microsoft Copilot Studio agent that meets the following requirements:\nSupports interactive speech responses\nOptimizes decision-making and the accuracy of responses\nWhat should you include in the design for each requirement? To answer, drag the appropriate options to the correct requirements.  Each option may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.",
   "url": "",
   "type": "slots",
   "kind": "dragdrop",
   "slots": [
    {
     "label": "Supports interactive speech responses",
     "options": [
      "A deep reasoning model",
      "Azure Language in Foundry Tools",
      "Azure AI Speech",
      "Copilot Studio voice features",
      "Speech Synthesis Markup Language (SSML)"
     ],
     "answer": "Copilot Studio voice features"
    },
    {
     "label": "Optimizes decision-making and response accuracy",
     "options": [
      "A deep reasoning model",
      "Azure Language in Foundry Tools",
      "Azure AI Speech",
      "Copilot Studio voice features",
      "Speech Synthesis Markup Language (SSML)"
     ],
     "answer": "A deep reasoning model"
    }
   ],
   "cat": "D1",
   "exp": "語音功能支援互動語音；深度推理模型優化決策與準確度。",
   "imgs": [
    "image16.png"
   ],
   "imgText": "選項池：A deep reasoning model ｜ Azure Language in Foundry Tools ｜ Azure AI Speech ｜ Copilot Studio voice features ｜ Speech Synthesis Markup Language (SSML)\nSupports interactive speech responses：［　］\nOptimizes decision-making and response accuracy：［　］"
  },
  {
   "id": "T2Q10",
   "exam": "Topic 2 Q10",
   "q": "You are designing a low-code AI business solution by using Microsoft Copilot Studio.\nThe solution must include an agent that automates tasks by simulating user interactions across third-party apps and websites, such as clicking buttons, entering text, and extracting information from screens.\nYou need to recommend what to include in the agent.\nWhat should you recommend?",
   "url": "",
   "type": "single",
   "options": [
    {
     "k": "A",
     "t": "Model Context Protocol (MCP)"
    },
    {
     "k": "B",
     "t": "a natural language understanding + (NLU+) model in Copilot Studio"
    },
    {
     "k": "C",
     "t": "Computer Use in Copilot Studio"
    },
    {
     "k": "D",
     "t": "Copilot skills"
    }
   ],
   "answer": [
    "C"
   ],
   "cat": "D1",
   "exp": "Computer use 可模擬點擊、輸入與擷取畫面資訊。"
  },
  {
   "id": "T2Q11",
   "exam": "Topic 2 Q11",
   "q": "You need to recommend a solution to integrate a Microsoft Copilot agent with a Microsoft Dynamics 365 Contact Center chat channel.\nThe agent must respond to customer questions and hand off the conversation to a live customer service representative when the customer requests an escalation.\nWhat should you recommend?",
   "url": "",
   "type": "single",
   "options": [
    {
     "k": "A",
     "t": "Build an agent flow."
    },
    {
     "k": "B",
     "t": "Configure the Conversation Start topic."
    },
    {
     "k": "C",
     "t": "Configure a skill."
    },
    {
     "k": "D",
     "t": "Call a Microsoft Power Automate connector."
    },
    {
     "k": "E",
     "t": "Configure the Escalate topic."
    }
   ],
   "answer": [
    "E"
   ],
   "cat": "D1",
   "exp": "Escalate topic 是內建的轉接真人機制。"
  },
  {
   "id": "T2Q12",
   "exam": "Topic 2 Q12",
   "q": "A company has a customer order system that creates sales orders manually.\nYou need to design an AI solution to automate the following tasks as part of the system:\nSave the order details to a database.\nUpdate the order status in the database.\nExtract the order details from an order file.\nPrepare and send a confirmation email to customers.\nThe solution must minimize development effort and support intelligent automation and solution integration.\nWhat should you include in the design?",
   "url": "",
   "type": "single",
   "options": [
    {
     "k": "A",
     "t": "a workflow in Azure Logic Apps"
    },
    {
     "k": "B",
     "t": "a multi-agent solution that uses the Semantic Kernel SDK"
    },
    {
     "k": "C",
     "t": "a multi-agent solution that uses Microsoft Foundry Agent Service"
    },
    {
     "k": "D",
     "t": "a Microsoft Copilot Studio agent that uses Microsoft Power Automate workflows"
    }
   ],
   "answer": [
    "D"
   ],
   "cat": "D1",
   "exp": "Copilot Studio + Power Automate 低程式碼，開發量最小且具智慧整合。"
  },
  {
   "id": "T2Q13",
   "exam": "Topic 2 Q13",
   "q": "You are designing an AI strategy for Microsoft Dynamics 365 finance and operations apps. You are evaluating the use of Microsoft Copilot Studio to provide in-app help and guidance based on generative AI general knowledge.\nYou need to recommend which knowledge sources to include in the generative help and guidance agent. The solution must minimize the risk of generating inaccurate responses.\nWhat should you recommend? To answer, select the appropriate options in the answer area.",
   "url": "",
   "type": "slots",
   "kind": "hotspot",
   "slots": [
    {
     "label": "Custom knowledge sources:",
     "options": [
      "Must be uploaded to the agent",
      "Must be excluded from the agent",
      "Are not supported"
     ],
     "answer": "Must be uploaded to the agent"
    },
    {
     "label": "AI general knowledge:",
     "options": [
      "Must be enabled for the agent",
      "Must be disabled for the agent",
      "Is not supported"
     ],
     "answer": "Must be disabled for the agent"
    }
   ],
   "cat": "S2",
   "exp": "降低不準確回應：上傳自有知識來源、停用 AI 一般知識（社群有爭議）。",
   "imgs": [
    "image17.png"
   ],
   "imgText": "Custom knowledge sources:（選項：Must be uploaded to the agent ｜ Must be excluded from the agent ｜ Are not supported）\nAI general knowledge:（選項：Must be enabled for the agent ｜ Must be disabled for the agent ｜ Is not supported）",
   "verify": "official",
   "ref": "https://learn.microsoft.com/dynamics365/fin-ops-core/dev-itpro/copilot/extend-copilot-generative-help"
  },
  {
   "id": "T2Q14",
   "exam": "Topic 2 Q14",
   "q": "You need to design a multi-agent solution that will include a custom agent. The solution must meet the following requirements:\nDefine the rules and constraints that the agent must follow.\nAutomate a backend process that involves data movement between services and runs independently of the agent's reasoning steps.\nWhat should you include in the design for each requirement? To answer, select the appropriate options in the answer area.",
   "url": "",
   "type": "slots",
   "kind": "hotspot",
   "slots": [
    {
     "label": "Define rules and constraints:",
     "options": [
      "Agent flows",
      "Conversation topics",
      "Microsoft Power Automate cloud flow"
     ],
     "answer": "Conversation topics"
    },
    {
     "label": "Automate a backend process:",
     "options": [
      "Conversation topics",
      "Microsoft Power Automate cloud flow",
      "Microsoft Power Pages"
     ],
     "answer": "Microsoft Power Automate cloud flow"
    }
   ],
   "cat": "D1",
   "exp": "規則與限制以對話 topic 定義；獨立於推理的後端流程用 Power Automate 雲端流程。",
   "imgs": [
    "image18.png"
   ],
   "imgText": "Define rules and constraints:（選項：Agent flows ｜ Conversation topics ｜ Microsoft Power Automate cloud flow）\nAutomate a backend process:（選項：Conversation topics ｜ Microsoft Power Automate cloud flow ｜ Microsoft Power Pages）",
   "verify": "partial",
   "ref": "https://learn.microsoft.com/microsoft-copilot-studio/flows-faqs"
  },
  {
   "id": "T2Q15",
   "exam": "Topic 2 Q15",
   "q": "A company uses Microsoft 365 and Dynamics 365.\nYou need to recommend a solution to automatically summarize email threads, generate suggested replies in Microsoft Outlook, and provide meeting preparation summaries that include relevant customer relationship management (CRM) data.\nSolution: You recommend Microsoft 365 Copilot for Sales.\nDoes this meet the goal?",
   "url": "",
   "type": "single",
   "options": [
    {
     "k": "A",
     "t": "Yes"
    },
    {
     "k": "B",
     "t": "No"
    }
   ],
   "answer": [
    "A"
   ],
   "cat": "D2",
   "exp": "Copilot for Sales 提供 Outlook 郵件摘要、建議回覆及含 CRM 資料的會議準備。",
   "verify": "official",
   "ref": "https://learn.microsoft.com/microsoft-sales-copilot/sales-copilot-faq"
  },
  {
   "id": "T2Q16",
   "exam": "Topic 2 Q16",
   "q": "A company uses Microsoft 365 and Dynamics 365.\nYou need to recommend a solution to automatically summarize email threads, generate suggested replies in Microsoft Outlook, and provide meeting preparation summaries that include relevant customer relationship management (CRM) data.\nSolution: You recommend a classic Microsoft Dataverse workflow.\nDoes this meet the goal?",
   "url": "",
   "type": "single",
   "options": [
    {
     "k": "A",
     "t": "Yes"
    },
    {
     "k": "B",
     "t": "No"
    }
   ],
   "answer": [
    "B"
   ],
   "cat": "D2",
   "exp": "傳統 Dataverse 工作流程沒有產生式 AI 功能。"
  },
  {
   "id": "T2Q17",
   "exam": "Topic 2 Q17",
   "q": "A company uses Microsoft 365 and Dynamics 365.\nYou need to recommend a solution to automatically summarize email threads, generate suggested replies in Microsoft Outlook, and provide meeting preparation summaries that include relevant customer relationship management (CRM) data.\nSolution: You recommend a Microsoft 365 Copilot agent template.\nDoes this meet the goal?",
   "url": "",
   "type": "single",
   "options": [
    {
     "k": "A",
     "t": "Yes"
    },
    {
     "k": "B",
     "t": "No"
    }
   ],
   "answer": [
    "B"
   ],
   "cat": "D2",
   "exp": "Agent 範本用於建置自訂 agent，不直接提供這些 Outlook 功能。"
  },
  {
   "id": "T2Q18",
   "exam": "Topic 2 Q18",
   "q": "You need to design an application lifecycle management (ALM) process for a Microsoft Power Platform environment that contains a solution named Solution1.\nSolution1 must include a custom connector for Copilot in Microsoft Dynamics 365 Customer Service. Solution1 must meet the following requirements:\n•\tEnsure that the custom connector can be deployed consistently across environments as part of the ALM process.\n•\tAllow the custom connector to be edited only in the development environment.\nWhat should you include in the design?",
   "url": "",
   "type": "single",
   "options": [
    {
     "k": "A",
     "t": "Add the custom connector to GitHub."
    },
    {
     "k": "B",
     "t": "Share the custom connector."
    },
    {
     "k": "C",
     "t": "Create the custom connector in the default solution."
    },
    {
     "k": "D",
     "t": "Add the custom connector to Solution1."
    }
   ],
   "answer": [
    "D"
   ],
   "cat": "P1",
   "exp": "將自訂連接器放進解決方案 Solution1，才能跨環境一致部署，且僅於開發環境可編輯（受控匯入）。"
  },
  {
   "id": "T2Q19",
   "exam": "Topic 2 Q19",
   "q": "A company uses a Microsoft Copilot Studio agent to automate tasks in a web app.\nDuring testing, you discover that the automation sometimes fails because of frequent changes to the app's user interface.\nYou need to recommend a solution to ensure that the agent successfully automates the tasks. The solution must minimize changes to the agent.\nWhat should you include in the recommendation?",
   "url": "",
   "type": "single",
   "options": [
    {
     "k": "A",
     "t": "Computer Use in Copilot Studio"
    },
    {
     "k": "B",
     "t": "custom models in Azure AI Studio"
    },
    {
     "k": "C",
     "t": "conversation topics in Copilot Studio"
    },
    {
     "k": "D",
     "t": "an agent flow in Copilot Studio"
    }
   ],
   "answer": [
    "A"
   ],
   "cat": "D1",
   "exp": "UI 常變動時，Computer use 以視覺方式操作，不需修改 agent。"
  },
  {
   "id": "T2Q20",
   "exam": "Topic 2 Q20",
   "q": "A company processes invoices stored across multiple systems in multiple formats.\nYou need to implement an AI solution to automate the invoice processing. The solution must meet the following requirements:\n•\tAutomate multi-step invoice processing tasks, including document analysis, data validation, and approval routing.\n•\tEnable users to interact directly via Microsoft Teams to review and approve invoices.\n•\tMinimize development efforts to define and customize approval workflows.\nWhat should you include in the solution?",
   "url": "",
   "type": "single",
   "options": [
    {
     "k": "A",
     "t": "Azure Document Intelligence in Foundry Tools and Azure Logic Apps"
    },
    {
     "k": "B",
     "t": "a SharePoint agent"
    },
    {
     "k": "C",
     "t": "Microsoft Copilot Studio and AI Builder"
    },
    {
     "k": "D",
     "t": "Azure OpenAI and Azure Functions"
    }
   ],
   "answer": [
    "C"
   ],
   "cat": "D1",
   "exp": "Copilot Studio + AI Builder 處理發票擷取，並可經 Teams 核准，低程式碼。"
  },
  {
   "id": "T2Q21",
   "exam": "Topic 2 Q21",
   "q": "You need to design a Microsoft Copilot Studio agent for customer support.\nThe agent must securely retrieve product warranty data from a REST API. The solution must minimize development effort.\nWhat should you include in the design?",
   "url": "",
   "type": "single",
   "options": [
    {
     "k": "A",
     "t": "Export the agent as a managed solution and customize the agent in Power Apps."
    },
    {
     "k": "B",
     "t": "Create a custom connector in Copilot Studio and use the connector to call the API."
    },
    {
     "k": "C",
     "t": "Use a Microsoft Power Automate desktop flow to screen scrape the warranty data."
    },
    {
     "k": "D",
     "t": "Add the warranty data to the Fallback topic."
    }
   ],
   "answer": [
    "B"
   ],
   "cat": "D1",
   "exp": "自訂連接器是安全呼叫 REST API 且最省開發的方式。"
  },
  {
   "id": "T2Q22",
   "exam": "Topic 2 Q22",
   "q": "A company has an ecommerce support portal that uses Microsoft Dataverse.\nYou are designing a Microsoft Copilot Studio agent for the portal. The agent must meet the following requirements:\n•\tRespond with a default help message when the user input is unclear.\n•\tInitiate external processes, such as retrieving the order status, when users make specific requests.\nGenerative orchestration will be enabled for the solution.\nYou need to recommend a feature for each requirement.\nWhat should you recommend? To answer, drag the appropriate features to the correct requirements. Each feature may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.",
   "url": "",
   "type": "slots",
   "kind": "dragdrop",
   "slots": [
    {
     "label": "Respond with a default help message when the user input is unclear",
     "options": [
      "A tool (connector)",
      "A trigger phrase",
      "The Fallback topic",
      "A skill",
      "The Escalate topic"
     ],
     "answer": "The Fallback topic"
    },
    {
     "label": "Initiate external processes when requested",
     "options": [
      "A tool (connector)",
      "A trigger phrase",
      "The Fallback topic",
      "A skill",
      "The Escalate topic"
     ],
     "answer": "A tool (connector)"
    }
   ],
   "cat": "D1",
   "exp": "Fallback topic 回應無法辨識的輸入；啟動外部流程用 tool(connector)。",
   "imgs": [
    "image19.png"
   ],
   "imgText": "選項池：A tool (connector) ｜ A trigger phrase ｜ The Fallback topic ｜ A skill ｜ The Escalate topic\nRespond with a default help message when the user input is unclear：［　］\nInitiate external processes when requested：［　］"
  },
  {
   "id": "T2Q23",
   "exam": "Topic 2 Q23",
   "q": "A company uses Microsoft Dynamics 365 to manage service operations. Dispatchers coordinate service requests, and technicians perform scheduled on-site work.\nYou need to design a solution that will use Microsoft Copilot to improve the efficiency of the service operations. The solution must meet the following requirements:\n•\tProvide AI-driven assistance to help staff organize and resolve work orders.\n•\tDeliver contextual AI support to frontline workers as they prepare for and complete customer appointments.\nWhich two components should you include in the design? Each correct answer presents part of the solution.",
   "url": "",
   "type": "multi",
   "options": [
    {
     "k": "A",
     "t": "Copilot Service workspace"
    },
    {
     "k": "B",
     "t": "Copilot in Outlook"
    },
    {
     "k": "C",
     "t": "Dynamics 365 Customer Service"
    },
    {
     "k": "D",
     "t": "Copilot in Customer Service"
    },
    {
     "k": "E",
     "t": "Copilot in Field Service"
    },
    {
     "k": "F",
     "t": "the Dynamics 365 Field Service mobile app"
    }
   ],
   "answer": [
    "E",
    "F"
   ],
   "cat": "D2",
   "exp": "Copilot in Field Service 與 Field Service 行動 App 對應派工與外勤人員需求。"
  },
  {
   "id": "T2Q24",
   "exam": "Topic 2 Q24",
   "q": "A company uses Microsoft Foundry agents.\nYou need to ensure that an agent can dynamically use external tools at runtime without updating the agent.\nWhat should you include in the solution?",
   "url": "",
   "type": "single",
   "options": [
    {
     "k": "A",
     "t": "a Microsoft Foundry hub"
    },
    {
     "k": "B",
     "t": "a Model Context Protocol (MCP) server"
    },
    {
     "k": "C",
     "t": "Azure AI Search"
    },
    {
     "k": "D",
     "t": "Microsoft Copilot Studio"
    }
   ],
   "answer": [
    "B"
   ],
   "cat": "D3",
   "exp": "MCP 伺服器讓 Foundry agent 於執行時動態探索與使用外部工具。"
  },
  {
   "id": "T2Q25",
   "exam": "Topic 2 Q25",
   "q": "A company has a Microsoft Dynamics 365 Sales environment that has Microsoft Copilot enabled.\nYou need to customize Copilot by tailoring how opportunity summaries are generated or how they are presented to users.\nSolution: You add fields to the opportunity summary.\nDoes this meet the goal?",
   "url": "",
   "type": "single",
   "options": [
    {
     "k": "A",
     "t": "Yes"
    },
    {
     "k": "B",
     "t": "No"
    }
   ],
   "answer": [
    "A"
   ],
   "cat": "D2",
   "exp": "可在 D365 Sales 的商機摘要設定中新增欄位以自訂摘要。",
   "verify": "official",
   "ref": "https://learn.microsoft.com/dynamics365/sales/copilot-configure-summary-fields"
  },
  {
   "id": "T2Q26",
   "exam": "Topic 2 Q26",
   "q": "A company has a Microsoft Dynamics 365 Sales environment that has Microsoft Copilot enabled.\nYou need to customize Copilot by tailoring how opportunity summaries are generated or how they are presented to users.\nSolution: You build Microsoft Power Automate flows to trigger customized Copilot summaries.\nDoes this meet the goal?",
   "url": "",
   "type": "single",
   "options": [
    {
     "k": "A",
     "t": "Yes"
    },
    {
     "k": "B",
     "t": "No"
    }
   ],
   "answer": [
    "B"
   ],
   "cat": "D2",
   "exp": "Power Automate 流程不會改變 Copilot 摘要的產生或呈現。"
  },
  {
   "id": "T2Q27",
   "exam": "Topic 2 Q27",
   "q": "A company has a Microsoft Dynamics 365 Sales environment that has Microsoft Copilot enabled.\nYou need to customize Copilot by tailoring how opportunity summaries are generated or how they are presented to users.\nSolution: You configure AI Builder lead scoring models to influence opportunity summaries.\nDoes this meet the goal?",
   "url": "",
   "type": "single",
   "options": [
    {
     "k": "A",
     "t": "Yes"
    },
    {
     "k": "B",
     "t": "No"
    }
   ],
   "answer": [
    "B"
   ],
   "cat": "D2",
   "exp": "AI Builder 潛在客戶評分不影響商機摘要。"
  },
  {
   "id": "T2Q28",
   "exam": "Topic 2 Q28",
   "q": "What should you recommend to assist the CTO with the prebuilt agent selection process?",
   "url": "",
   "case": "contoso",
   "type": "single",
   "options": [
    {
     "k": "A",
     "t": "Agent management"
    },
    {
     "k": "B",
     "t": "Copilot Studio"
    },
    {
     "k": "C",
     "t": "Lifecycle Services (LCS)"
    },
    {
     "k": "D",
     "t": "Immersive Home"
    }
   ],
   "answer": [
    "A"
   ],
   "cat": "D2",
   "exp": "CTO 需檢視可用的預建 agent 範本：Agent management（社群與 Immersive Home 票數相當，有爭議）。",
   "verify": "official",
   "ref": "https://learn.microsoft.com/dynamics365/fin-ops-core/fin-ops/copilot/agent-mgmt"
  },
  {
   "id": "T2Q29",
   "exam": "Topic 2 Q29",
   "q": "What should you include in the custom AI agent design to meet the R&D product specifications and the compliance information requirements? To answer, select the appropriate options in the answer area.",
   "url": "",
   "case": "contoso",
   "type": "slots",
   "kind": "hotspot",
   "slots": [
    {
     "label": "To expose the data to the agent, create:",
     "options": [
      "an Azure AI Bot Service channel",
      "a custom connector",
      "a custom OData entity",
      "the Semantic Kernel"
     ],
     "answer": "a custom connector"
    },
    {
     "label": "Add to the agent:",
     "options": [
      "an event trigger",
      "the MCP server",
      "a REST API",
      "a tool"
     ],
     "answer": "a tool"
    }
   ],
   "cat": "D3",
   "exp": "透過自訂連接器暴露既有 MCP 伺服器資料，並在 agent 中加入為 tool（社群有 MCP server 一項之爭議）。",
   "imgs": [
    "image20.png"
   ],
   "imgText": "To expose the data to the agent, create:（選項：an Azure AI Bot Service channel ｜ a custom connector ｜ a custom OData entity ｜ the Semantic Kernel）\nAdd to the agent:（選項：an event trigger ｜ the MCP server ｜ a REST API ｜ a tool）",
   "verify": "official",
   "ref": "https://learn.microsoft.com/microsoft-copilot-studio/mcp-add-components-to-agent"
  },
  {
   "id": "T2Q30",
   "exam": "Topic 2 Q30",
   "q": "A company has a Microsoft Dynamics 365 Sales environment that has Microsoft Copilot enabled.\nYou need to customize Copilot by tailoring how opportunity summaries are generated or how they are presented to users.\nSolution: You add the opportunity summary widget to the Opportunity form.\nDoes this meet the goal?",
   "url": "",
   "type": "single",
   "options": [
    {
     "k": "A",
     "t": "Yes"
    },
    {
     "k": "B",
     "t": "No"
    }
   ],
   "answer": [
    "A"
   ],
   "cat": "D2",
   "exp": "將商機摘要小工具加到商機表單，改變摘要呈現方式（社群有爭議）。",
   "verify": "official",
   "ref": "https://learn.microsoft.com/dynamics365/sales/copilot-configure-summary-fields"
  },
  {
   "id": "T2Q31",
   "exam": "Topic 2 Q31",
   "q": "Your company is designing a Microsoft Copilot Studio solution for loan review specialists who use a model-driven app. The loan form contains a custom Microsoft Power Apps component framework (PCF) control that invokes a Copilot Studio agent by raising a custom event and passing the record ID, selected columns, and user context. The PCF control renders the returned recommendation inside the form.\nThe solution has the following requirements:\n•\tThe specialists must be able to use the same agent in Microsoft Teams and SharePoint.\n•\tIf the agent service is unavailable, the form must remain usable and display cached guidance or rule-based guidance.\n•\tLoan approval fields in Microsoft Dataverse must be updated only after a specialist reviews and accepts a recommendation.\n•\tOnly the minimum required fields can be sent to the agent, and personal data must be excluded unless governance approves the data.\n•\tSeparate development, test, and production environments must be used, and managed packages for controlled promotion must be deployed across each environment.\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.",
   "url": "",
   "type": "slots",
   "kind": "hotspot",
   "slots": [
    {
     "label": "Publishing the agent to Microsoft 365 Copilot meets the usage requirements for the specialists.",
     "options": [
      "Yes",
      "No"
     ],
     "answer": "Yes"
    },
    {
     "label": "Using managed packages across separate environments and sending only selected non-sensitive fields to the agent meet the documented deployment and security requirements.",
     "options": [
      "Yes",
      "No"
     ],
     "answer": "Yes"
    },
    {
     "label": "Configuring the PCF control to write the agent recommendation directly to the approval fields when the asynchronous response is received meets the accountability requirements.",
     "options": [
      "Yes",
      "No"
     ],
     "answer": "No"
    }
   ],
   "cat": "P4",
   "exp": "前兩項符合需求；直接寫入核准欄位違反「專員審核接受後才更新」的責任要求（第一項社群有爭議）。",
   "imgs": [
    "image21.png"
   ],
   "imgText": "Publishing the agent to Microsoft 365 Copilot meets the usage requirements for the specialists.（選項：Yes ｜ No）\nUsing managed packages across separate environments and sending only selected non-sensitive fields to the agent meet the documented deployment and security requirements.（選項：Yes ｜ No）\nConfiguring the PCF control to write the agent recommendation directly to the approval fields when the asynchronous response is received meets the accountability requirements.（選項：Yes ｜ No）"
  },
  {
   "id": "T2Q33",
   "exam": "Topic 2 Q33",
   "q": "Your company uses an Azure OpenAI model to analyze customer feedback and generate responses. The model retrieves product information from Azure Blob Storage and responds to user queries.\nYou discover that users can use malicious prompts and inputs to manipulate the model by submitting text that contains hidden instructions.\nYou need to recommend a security control to mitigate the threat. The solution must minimize development effort.\nWhat should you include in the recommendation?",
   "url": "",
   "type": "single",
   "options": [
    {
     "k": "A",
     "t": "content filters"
    },
    {
     "k": "B",
     "t": "an Azure AI Content Safety policy"
    },
    {
     "k": "C",
     "t": "a data loss prevention (DLP) policy"
    },
    {
     "k": "D",
     "t": "Azure Content Understanding in Microsoft Foundry Tools"
    }
   ],
   "answer": [
    "A"
   ],
   "cat": "P4",
   "exp": "Azure OpenAI 內容篩選可防範提示詞注入，且開發量最小（社群與 AI Content Safety 票數相當）。",
   "verify": "official",
   "ref": "https://learn.microsoft.com/azure/ai-services/openai/concepts/content-filter-prompt-shields"
  },
  {
   "id": "T2Q34",
   "exam": "Topic 2 Q34",
   "q": "You are designing a multi-agent solution to orchestrate a set of specialized agents.\nYou plan to include an agent that connects to a third-party data source. The agent must be discoverable and usable by users in Microsoft 365 Copilot and Microsoft Teams.\nYou need to recommend a development strategy for the agent.\nWhich two tools should you include in the recommendation? Each correct answer presents part of the solution.",
   "url": "",
   "type": "multi",
   "options": [
    {
     "k": "A",
     "t": "Foundry Agent Service"
    },
    {
     "k": "B",
     "t": "the Assistants API in Azure OpenAI"
    },
    {
     "k": "C",
     "t": "the Foundry SDK"
    },
    {
     "k": "D",
     "t": "Microsoft Copilot Studio"
    },
    {
     "k": "E",
     "t": "the Microsoft 365 Agents SDK"
    }
   ],
   "answer": [
    "D",
    "E"
   ],
   "cat": "D3",
   "exp": "Copilot Studio 與 Microsoft 365 Agents SDK 可讓 agent 在 M365 Copilot 與 Teams 被發現與使用。"
  },
  {
   "id": "T3Q1",
   "exam": "Topic 3 Q1",
   "q": "Which tool should you recommend to address the sensitive information concerns in the sales process?",
   "url": "",
   "case": "fabrikam",
   "type": "single",
   "options": [
    {
     "k": "A",
     "t": "the Analytics tab in Microsoft Copilot Studio"
    },
    {
     "k": "B",
     "t": "Model Context Protocol (MCP)"
    },
    {
     "k": "C",
     "t": "Application Insights"
    },
    {
     "k": "D",
     "t": "Microsoft Foundry Tracing UI"
    },
    {
     "k": "E",
     "t": "Monitoring in Microsoft Foundry"
    }
   ],
   "answer": [
    "C"
   ],
   "cat": "P3",
   "exp": "Application Insights 可記錄遙測以稽核敏感資訊。",
   "verify": "official",
   "ref": "https://learn.microsoft.com/microsoft-copilot-studio/telemetry-overview"
  },
  {
   "id": "T3Q2",
   "exam": "Topic 3 Q2",
   "q": "Which existing tool and data should you use to gather the required metrics for stakeholder signoff for the AI agents? To answer, select the appropriate options in the answer area.",
   "url": "",
   "case": "fabrikam",
   "type": "slots",
   "kind": "hotspot",
   "slots": [
    {
     "label": "Tool:",
     "options": [
      "Microsoft Foundry",
      "Azure Resource Monitor (ARM)",
      "Dynamics 365 Sales",
      "Microsoft Copilot Studio"
     ],
     "answer": "Microsoft Copilot Studio"
    },
    {
     "label": "Data required for the tool:",
     "options": [
      "the cumulative time spent on the task over the past year",
      "the current cost to complete the tasks per instance",
      "the current time to complete the task today per instance",
      "the current cost of the Dynamics 365 Sales licenses"
     ],
     "answer": "the current time to complete the task today per instance"
    }
   ],
   "cat": "S1",
   "exp": "以 Copilot Studio 遙測計算 ROI，需要目前每次執行任務耗時作基準。",
   "imgs": [
    "image22.png"
   ],
   "imgText": "Tool:（選項：Microsoft Foundry ｜ Azure Resource Monitor (ARM) ｜ Dynamics 365 Sales ｜ Microsoft Copilot Studio）\nData required for the tool:（選項：the cumulative time spent on the task over the past year ｜ the current cost to complete the tasks per instance ｜ the current time to complete the task today per instance ｜ the current cost of the Dynamics 365 Sales licenses）"
  },
  {
   "id": "T3Q3",
   "exam": "Topic 3 Q3",
   "q": "Which tool should you recommend to help secure funding for future AI agent development?",
   "url": "",
   "case": "fabrikam",
   "type": "single",
   "options": [
    {
     "k": "A",
     "t": "Evaluations in Microsoft Foundry"
    },
    {
     "k": "B",
     "t": "the Azure Cost Optimization workbook"
    },
    {
     "k": "C",
     "t": "Azure Operator Insights"
    },
    {
     "k": "D",
     "t": "the Analytics tab in Microsoft Copilot Studio"
    },
    {
     "k": "E",
     "t": "Direct Preference Optimization (DPO)"
    }
   ],
   "answer": [
    "D"
   ],
   "cat": "P3",
   "exp": "Copilot Studio Analytics 提供採用與成效數據，支持後續 AI 投資。",
   "verify": "official",
   "ref": "https://learn.microsoft.com/microsoft-copilot-studio/analytics-overview"
  },
  {
   "id": "T3Q4",
   "exam": "Topic 3 Q4",
   "q": "You are designing a Microsoft Copilot Studio agent that uses a custom Microsoft Foundry model to generate responses.\nYou need to ensure that the agent can securely connect to and invoke the custom model during user interactions.\nWhat should you include in the design?",
   "url": "",
   "type": "single",
   "options": [
    {
     "k": "A",
     "t": "Configure the agent to use classic orchestration."
    },
    {
     "k": "B",
     "t": "Create a connection to Microsoft Foundry in the agent."
    },
    {
     "k": "C",
     "t": "Add the Microsoft Foundry model as a Copilot Studio skill."
    },
    {
     "k": "D",
     "t": "Create a custom engine agent."
    }
   ],
   "answer": [
    "B"
   ],
   "cat": "D1",
   "exp": "在 agent 中建立與 Microsoft Foundry 的連線即可安全呼叫自訂模型。"
  },
  {
   "id": "T3Q5",
   "exam": "Topic 3 Q5",
   "q": "You are designing an AI business solution that contains the following components:\nA Microsoft Power Automate workflow\nA Microsoft Copilot Studio agent\nA Microsoft Dataverse database\nA Microsoft Power Apps app\nAs part of the application lifecycle management (ALM) process, you plan to package the components, so that they can be deployed to other environments as a group.\nYou need to recommend a solution that supports versioning, dependencies, and deployments.\nWhat should you include in the recommendation?",
   "url": "",
   "type": "single",
   "options": [
    {
     "k": "A",
     "t": "GitHub Actions"
    },
    {
     "k": "B",
     "t": "Azure DevOps"
    },
    {
     "k": "C",
     "t": "Microsoft Power Platform solutions"
    }
   ],
   "answer": [
    "C"
   ],
   "cat": "P1",
   "exp": "Power Platform 解決方案可將元件封裝，支援版本、相依性與部署。"
  },
  {
   "id": "T3Q6",
   "exam": "Topic 3 Q6",
   "q": "A company has Microsoft 365 Copilot agents.\nYou need to design a security solution for the agents. The solution must meet the following requirements:\nIdentify and mitigate potential risks that relate to AI use.\nProtect AI apps and the sensitive data processed or generated by the agents.\nSupport responsible AI governance by retaining and logging interactions, detecting policy violations, and investigating incidents.\nWhich two components should you include in the design? Each correct answer presents part of the solution.",
   "url": "",
   "type": "multi",
   "options": [
    {
     "k": "A",
     "t": "Microsoft Purview"
    },
    {
     "k": "B",
     "t": "Azure AI Content Safety"
    },
    {
     "k": "C",
     "t": "role-based access control (RBAC) in Microsoft Foundry"
    },
    {
     "k": "D",
     "t": "Microsoft Defender"
    }
   ],
   "answer": [
    "A",
    "D"
   ],
   "cat": "P4",
   "exp": "Purview 與 Defender 分別提供 AI 資料保護/稽核與風險偵測。"
  },
  {
   "id": "T3Q7",
   "exam": "Topic 3 Q7",
   "q": "You are creating validation criteria for a custom generative AI model that produces business reports based on internal enterprise data.\nYou need to assess whether the model's outputs are appropriate and meaningful for the business reports.\nWhich metric should you use?",
   "url": "",
   "type": "single",
   "options": [
    {
     "k": "A",
     "t": "the number of active users interacting with the model"
    },
    {
     "k": "B",
     "t": "alignment of the output to domain-specific tasks"
    },
    {
     "k": "C",
     "t": "the average system resource usage during inference"
    },
    {
     "k": "D",
     "t": "the model training duration"
    }
   ],
   "answer": [
    "B"
   ],
   "cat": "P2",
   "exp": "評估報告輸出是否適當有意義，應看輸出與網域任務的一致性。"
  },
  {
   "id": "T3Q8",
   "exam": "Topic 3 Q8",
   "q": "A company has Microsoft Foundry agents that generate responses by using Azure OpenAI resources. The agents are deployed to both the United States and Europe.\nA company mandate states that the agents and their grounding data must adhere to data residency and movement regulations.\nYou need to recommend a governance solution for the agents.\nWhat should you include in the recommendation?",
   "url": "",
   "type": "single",
   "options": [
    {
     "k": "A",
     "t": "Microsoft Defender for Cloud"
    },
    {
     "k": "B",
     "t": "Azure Policy"
    },
    {
     "k": "C",
     "t": "Azure Monitor"
    },
    {
     "k": "D",
     "t": "Microsoft Purview"
    }
   ],
   "answer": [
    "B"
   ],
   "cat": "P4",
   "exp": "Azure Policy 強制資源部署於核准區域（社群與 Purview 有爭議）。",
   "verify": "partial",
   "ref": "https://learn.microsoft.com/azure/governance/policy/samples/mcfs-baseline-global"
  },
  {
   "id": "T3Q9",
   "exam": "Topic 3 Q9",
   "q": "A company has a Microsoft Copilot Studio agent that uses custom connectors to interact with enterprise APIs.\nYou need to recommend an application lifecycle management (ALM) process to ensure that the connectors are deployed consistently across development, test, and production environments and meet governance and traceability requirements.\nWhat should you recommend?",
   "url": "",
   "type": "single",
   "options": [
    {
     "k": "A",
     "t": "Deploy the APIs as Azure Functions."
    },
    {
     "k": "B",
     "t": "Manage the connectors as solution components and deploy the components by using ALM pipelines."
    },
    {
     "k": "C",
     "t": "Maintain connector definitions in environment variables."
    },
    {
     "k": "D",
     "t": "Export and import the connectors between the environments as unmanaged solutions."
    }
   ],
   "answer": [
    "B"
   ],
   "cat": "P1",
   "exp": "連接器作為解決方案元件，並以 ALM 管線部署，符合一致性與可追溯。"
  },
  {
   "id": "T3Q10",
   "exam": "Topic 3 Q10",
   "q": "A company plans to implement an AI solution that will contain a Microsoft Copilot Studio agent and a Microsoft Foundry agent. The solution will be stored in a source code repository.\nYou need to recommend a deployment method for each agent. The solution must meet the following requirements:\nA test environment must be used before a deployment to production.\nProduction must be isolated from development and testing.\nThe deployment must be repeatable and fully automated.\nThe solution must NOT require manual intervention.\nWhich deployment method should you recommend for each agent? To answer, select the appropriate options in the answer area.",
   "url": "",
   "type": "slots",
   "kind": "hotspot",
   "slots": [
    {
     "label": "Copilot Studio:",
     "options": [
      "Export from the source code repository and import to the target environment.",
      "Use a Bicep file.",
      "Use a Microsoft Power Platform deployment pipeline."
     ],
     "answer": "Use a Microsoft Power Platform deployment pipeline."
    },
    {
     "label": "Microsoft Foundry:",
     "options": [
      "Use a Bicep file.",
      "Use a Microsoft Power Platform deployment pipeline.",
      "Use an Azure DevOps pipeline."
     ],
     "answer": "Use an Azure DevOps pipeline."
    }
   ],
   "cat": "P1",
   "exp": "Copilot Studio 用 Power Platform pipelines；Foundry 用 Azure DevOps pipeline 自動化。",
   "imgs": [
    "image23.png"
   ],
   "imgText": "Copilot Studio:（選項：Export from the source code repository and import to the target environment. ｜ Use a Bicep file. ｜ Use a Microsoft Power Platform deployment pipeline.）\nMicrosoft Foundry:（選項：Use a Bicep file. ｜ Use a Microsoft Power Platform deployment pipeline. ｜ Use an Azure DevOps pipeline.）"
  },
  {
   "id": "T3Q11",
   "exam": "Topic 3 Q11",
   "q": "A company has a Microsoft Copilot Studio prompt-and-response agent.\nYou need to ensure that the agent meets the following requirements:\nProvides effective and relevant responses\nProvides conversational outcomes\nWhich metric should you use for each requirement? To answer, select the appropriate options in the answer area.",
   "url": "",
   "type": "slots",
   "kind": "hotspot",
   "slots": [
    {
     "label": "Provides effective and relevant responses:",
     "options": [
      "Generated answer rate and quality",
      "Reactions",
      "Tool use"
     ],
     "answer": "Generated answer rate and quality"
    },
    {
     "label": "Provides conversational outcomes:",
     "options": [
      "Satisfaction",
      "Tool use",
      "Topics by outcome"
     ],
     "answer": "Topics by outcome"
    }
   ],
   "cat": "P3",
   "exp": "產生答案率與品質衡量回應有效性；Topics by outcome 呈現對話結果。",
   "imgs": [
    "image24.png"
   ],
   "imgText": "Provides effective and relevant responses:（選項：Generated answer rate and quality ｜ Reactions ｜ Tool use）\nProvides conversational outcomes:（選項：Satisfaction ｜ Tool use ｜ Topics by outcome）",
   "verify": "official",
   "ref": "https://learn.microsoft.com/microsoft-copilot-studio/analytics-improve-agent-effectiveness"
  },
  {
   "id": "T3Q12",
   "exam": "Topic 3 Q12",
   "q": "A company extends Copilot in Microsoft Dynamics 365 Customer Service.\nYou need to recommend an automated application lifecycle management (ALM) process so that the Copilot components can be safely developed, tested, and promoted to production.\nWhich two actions should you include in the ALM process? Each correct answer presents part of the solution.",
   "url": "",
   "type": "multi",
   "options": [
    {
     "k": "A",
     "t": "Use an unmanaged solution in production."
    },
    {
     "k": "B",
     "t": "Rebuild the agents in each environment."
    },
    {
     "k": "C",
     "t": "Use Microsoft Power Platform pipelines."
    },
    {
     "k": "D",
     "t": "Include the components in a solution."
    },
    {
     "k": "E",
     "t": "Store the agent transcripts in source control."
    }
   ],
   "answer": [
    "C",
    "D"
   ],
   "cat": "P1",
   "exp": "元件放入解決方案並使用 Power Platform pipelines 自動化 ALM。"
  },
  {
   "id": "T3Q13",
   "exam": "Topic 3 Q13",
   "q": "You are designing a testing solution for a Microsoft Copilot Studio agent that integrates with Microsoft Dynamics 365 Customer Service and Dynamics 365 Sales.\nYou need to design end-to-end scenarios to test the agent's ability to perform the following actions:\nCoordinate tasks and data interactions across both Dynamics 365 apps.\nInterpret user input and provide contextually relevant outputs.\nWhich test scenario and metric should you include in the design? To answer, select the appropriate options in the answer area.",
   "url": "",
   "type": "slots",
   "kind": "hotspot",
   "slots": [
    {
     "label": "Test scenario:",
     "options": [
      "In each app, test isolated tasks without using workflows.",
      "Run task-based scenarios that involve both apps.",
      "Test visual consistency across both apps."
     ],
     "answer": "Run task-based scenarios that involve both apps."
    },
    {
     "label": "Metric:",
     "options": [
      "Measure the initial prompt response time for each app.",
      "Track the average click rate across both apps.",
      "Track the successful completion of cross-app tasks."
     ],
     "answer": "Track the successful completion of cross-app tasks."
    }
   ],
   "cat": "P2",
   "exp": "端到端測試需跨兩個 App 的任務情境，並以跨 App 任務完成率為指標。",
   "imgs": [
    "image25.png"
   ],
   "imgText": "Test scenario:（選項：In each app, test isolated tasks without using workflows. ｜ Run task-based scenarios that involve both apps. ｜ Test visual consistency across both apps.）\nMetric:（選項：Measure the initial prompt response time for each app. ｜ Track the average click rate across both apps. ｜ Track the successful completion of cross-app tasks.）"
  },
  {
   "id": "T3Q14",
   "exam": "Topic 3 Q14",
   "q": "A company has multiple AI models that support generation of sales transactions.\nEach release of the models must be reviewed by a security and compliance team before being deployed to the production environment. The security and compliance team must have access to prior versions to properly determine potential exposures introduced.\nYou need to recommend a solution to evaluate the impact of each deployment to production. The solution must enhance business continuity.\nWhat should you recommend?",
   "url": "",
   "type": "single",
   "options": [
    {
     "k": "A",
     "t": "Create a central model registry that uses version history."
    },
    {
     "k": "B",
     "t": "Establish a promotion process by using a quality gate."
    },
    {
     "k": "C",
     "t": "Implement version control for all the AI system components."
    },
    {
     "k": "D",
     "t": "Track model retirement schedules to prevent service disruptions."
    }
   ],
   "answer": [
    "A"
   ],
   "cat": "P1",
   "exp": "中央模型登錄庫(registry)保存版本歷程，供合規團隊檢視舊版本。"
  },
  {
   "id": "T3Q15",
   "exam": "Topic 3 Q15",
   "q": "A company has an AI solution that uses a Microsoft Copilot Studio agent.\nYou need to monitor the agent's performance. The solution must meet the following requirements:\nMonitor the agent's telemetry in near-real-time (NRT).\nDownload transcripts of full conversations.\nMonitor the agent's usage and performance.\nWhat should you use for each requirement? To answer, drag the appropriate options to the correct requirements. Each option may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.",
   "url": "",
   "type": "slots",
   "kind": "dragdrop",
   "slots": [
    {
     "label": "Monitor the agent's telemetry in NRT",
     "options": [
      "Application Insights",
      "Copilot Studio",
      "Log Analytics",
      "Microsoft Power Apps"
     ],
     "answer": "Application Insights"
    },
    {
     "label": "Download transcripts of full conversations",
     "options": [
      "Application Insights",
      "Copilot Studio",
      "Log Analytics",
      "Microsoft Power Apps"
     ],
     "answer": "Copilot Studio"
    },
    {
     "label": "Monitor the agent's usage and performance",
     "options": [
      "Application Insights",
      "Copilot Studio",
      "Log Analytics",
      "Microsoft Power Apps"
     ],
     "answer": "Copilot Studio"
    }
   ],
   "cat": "P3",
   "exp": "Application Insights 近即時遙測；對話逐字稿與使用/效能由 Copilot Studio 提供。",
   "imgs": [
    "image26.png"
   ],
   "imgText": "選項池：Application Insights ｜ Copilot Studio ｜ Log Analytics ｜ Microsoft Power Apps\nMonitor the agent's telemetry in NRT：［　］\nDownload transcripts of full conversations：［　］\nMonitor the agent's usage and performance：［　］"
  },
  {
   "id": "T3Q16",
   "exam": "Topic 3 Q16",
   "q": "A company deploys a Microsoft Copilot Studio agent that integrates with a Microsoft Power Automate desktop flow.\nYou need to recommend a testing solution that meets the following requirements:\nTest cases must validate the most recent changes to the agent before the agent is released.\nThe flow must be validated as part of the agent's orchestration.\nWhat should you recommend for each requirement? To answer, select the appropriate options in the answer area.",
   "url": "",
   "type": "slots",
   "kind": "hotspot",
   "slots": [
    {
     "label": "Validate the most recent changes to the agent before release:",
     "options": [
      "Publish the agent to a channel and test the agent on live users.",
      "Run tests against the latest unpublished version of the agent.",
      "Run tests against the production version of the agent."
     ],
     "answer": "Run tests against the latest unpublished version of the agent."
    },
    {
     "label": "Validate the flow as part of the agent's orchestration:",
     "options": [
      "Add the flow to the agent as a tool.",
      "Add the flow to a canvas app.",
      "Use the Power Automate for desktop console."
     ],
     "answer": "Add the flow to the agent as a tool."
    }
   ],
   "cat": "P2",
   "exp": "發佈前針對最新未發佈版本測試；將流程加為 agent 的 tool 驗證協調。",
   "imgs": [
    "image27.png"
   ],
   "imgText": "Validate the most recent changes to the agent before release:（選項：Publish the agent to a channel and test the agent on live users. ｜ Run tests against the latest unpublished version of the agent. ｜ Run tests against the production version of the agent.）\nValidate the flow as part of the agent's orchestration:（選項：Add the flow to the agent as a tool. ｜ Add the flow to a canvas app. ｜ Use the Power Automate for desktop console.）"
  },
  {
   "id": "T3Q17",
   "exam": "Topic 3 Q17",
   "q": "A company has a Microsoft Copilot Studio agent that provides answers based on a knowledge base for customer support.\nUsers report that, occasionally, the agent provides inaccurate answers.\nYou need to use metrics from the Analytics tab in Copilot Studio to identify the cause of the inaccuracies.\nWhich two options should you use? Each correct answer presents part of the solution.",
   "url": "",
   "type": "multi",
   "options": [
    {
     "k": "A",
     "t": "survey results"
    },
    {
     "k": "B",
     "t": "session information and session outcomes"
    },
    {
     "k": "C",
     "t": "topic usage and topics with low resolution"
    },
    {
     "k": "D",
     "t": "engagement, resolution, and escalation rates"
    },
    {
     "k": "E",
     "t": "quality of generated answers"
    }
   ],
   "answer": [
    "C",
    "E"
   ],
   "cat": "P3",
   "exp": "以主題使用/低解決率的主題與產生答案品質找出不準確原因。"
  },
  {
   "id": "T3Q18",
   "exam": "Topic 3 Q18",
   "q": "A company uses a fine-tuned Microsoft Foundry model that requires frequent updates as new customer feedback becomes available.\nYou need to design an application lifecycle management (ALM) process that meets the following requirements:\nData changes must be tracked and versioned.\nThe model must be retrained consistently by using approved training data.\nWhich two actions should you include in the design? Each correct answer presents part of the solution.",
   "url": "",
   "type": "multi",
   "options": [
    {
     "k": "A",
     "t": "Associate the storage location to the fine-tuning job."
    },
    {
     "k": "B",
     "t": "Create a content filter."
    },
    {
     "k": "C",
     "t": "Store the training data in Azure Files."
    },
    {
     "k": "D",
     "t": "Upload the training data to Microsoft Foundry data files"
    },
    {
     "k": "E",
     "t": "Store the training data in Azure Blob Storage that has version control enabled."
    }
   ],
   "answer": [
    "A",
    "E"
   ],
   "cat": "P1",
   "exp": "訓練資料存放於啟用版本控制的 Blob，並將儲存位置關聯至微調作業。"
  },
  {
   "id": "T3Q19",
   "exam": "Topic 3 Q19",
   "q": "A company deploys agents that generate responses by using Azure OpenAI resources. The agents are deployed to both the United States and Europe.\nYou need to recommend a governance solution that meets the following requirements:\nEnforces the deployment of the resources to only approved Azure regions\nProvides continuous compliance verification of the resources\nWhat should you include in the recommendation for each requirement? To answer, select the appropriate options in the answer area.",
   "url": "",
   "type": "slots",
   "kind": "hotspot",
   "slots": [
    {
     "label": "Enforces the deployment of the resources to only approved regions:",
     "options": [
      "Azure Monitor",
      "Azure Policy",
      "Microsoft Defender for Cloud",
      "Microsoft Purview",
      "Microsoft Sentinel"
     ],
     "answer": "Azure Policy"
    },
    {
     "label": "Provides continuous compliance verification of the resources:",
     "options": [
      "Azure Monitor",
      "Azure Policy",
      "Microsoft Defender for Cloud",
      "Microsoft Purview",
      "Microsoft Sentinel"
     ],
     "answer": "Microsoft Defender for Cloud"
    }
   ],
   "cat": "P4",
   "exp": "Azure Policy 限制部署區域；Defender for Cloud 持續檢查合規（社群對第二項亦有 Azure Policy 之見）。",
   "imgs": [
    "image28.png"
   ],
   "imgText": "Enforces the deployment of the resources to only approved regions:（選項：Azure Monitor ｜ Azure Policy ｜ Microsoft Defender for Cloud ｜ Microsoft Purview ｜ Microsoft Sentinel）\nProvides continuous compliance verification of the resources:（選項：Azure Monitor ｜ Azure Policy ｜ Microsoft Defender for Cloud ｜ Microsoft Purview ｜ Microsoft Sentinel）",
   "verify": "partial",
   "ref": "https://learn.microsoft.com/azure/foundry/control-plane/how-to-manage-compliance-security"
  },
  {
   "id": "T3Q20",
   "exam": "Topic 3 Q20",
   "q": "A company has an AI solution that uses Azure OpenAI models.\nYou need to recommend a governance solution that monitors and audits changes to model configurations and data usage. The solution must minimize administrative effort.\nWhat should you include in the recommendation?",
   "url": "",
   "type": "single",
   "options": [
    {
     "k": "A",
     "t": "Azure Monitor"
    },
    {
     "k": "B",
     "t": "Azure Stream Analytics"
    },
    {
     "k": "C",
     "t": "Azure API Management"
    },
    {
     "k": "D",
     "t": "Azure Policy"
    },
    {
     "k": "E",
     "t": "Microsoft Purview"
    }
   ],
   "answer": [
    "E"
   ],
   "cat": "P4",
   "exp": "Microsoft Purview 提供資料使用與模型相關資產的稽核治理（社群有 API Management 之爭議）。",
   "verify": "official",
   "ref": "https://learn.microsoft.com/purview/ai-microsoft-purview"
  },
  {
   "id": "T3Q21",
   "exam": "Topic 3 Q21",
   "q": "A company uses Azure OpenAI models that use grounding data from Microsoft Fabric for agents. The models are fine-tuned by using proprietary datasets.\nYou need to design a governance solution that meets the following requirements:\nRestricts access to the grounding data to only assigned roles\nRestricts model fine-tuning to only the AI engineering team\nWhat should you include in the design? To answer, select the appropriate options in the answer area.",
   "url": "",
   "type": "slots",
   "kind": "hotspot",
   "slots": [
    {
     "label": "Restricts access to the grounding data:",
     "options": [
      "Azure AI Content Safety",
      "Azure Monitor alerts",
      "Azure Policy compliance rules",
      "Microsoft Purview access policies"
     ],
     "answer": "Microsoft Purview access policies"
    },
    {
     "label": "Restricts model fine-tuning:",
     "options": [
      "Azure Policy compliance rules",
      "Azure Resource Manager (ARM) resource locks",
      "Microsoft Entra Conditional Access",
      "Role-based access control (RBAC) in Microsoft Foundry"
     ],
     "answer": "Role-based access control (RBAC) in Microsoft Foundry"
    }
   ],
   "cat": "P4",
   "exp": "Purview 存取原則限制 grounding 資料；Foundry RBAC 限制只有 AI 工程團隊可微調。",
   "imgs": [
    "image29.png"
   ],
   "imgText": "Restricts access to the grounding data:（選項：Azure AI Content Safety ｜ Azure Monitor alerts ｜ Azure Policy compliance rules ｜ Microsoft Purview access policies）\nRestricts model fine-tuning:（選項：Azure Policy compliance rules ｜ Azure Resource Manager (ARM) resource locks ｜ Microsoft Entra Conditional Access ｜ Role-based access control (RBAC) in Microsoft Foundry）"
  },
  {
   "id": "T3Q22",
   "exam": "Topic 3 Q22",
   "q": "A company has a Microsoft Copilot Studio agent that has been in production for three months.\nThe agent has received positive feedback from users.\nYou need to identify the number of questions unanswered by the agent and the number of abandoned sessions between the users and the agent.\nWhich Copilot Studio insights should you use? To answer, drag the appropriate insights to the correct requirements. Each insight may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.",
   "url": "",
   "type": "slots",
   "kind": "dragdrop",
   "slots": [
    {
     "label": "The number of unanswered questions",
     "options": [
      "Conversation outcomes",
      "Generated answer rate and quality",
      "Reactions",
      "Survey results"
     ],
     "answer": "Generated answer rate and quality"
    },
    {
     "label": "The number of abandoned sessions",
     "options": [
      "Conversation outcomes",
      "Generated answer rate and quality",
      "Reactions",
      "Survey results"
     ],
     "answer": "Conversation outcomes"
    }
   ],
   "cat": "P3",
   "exp": "未回答問題看產生答案率與品質；中斷工作階段看對話結果。",
   "imgs": [
    "image30.png"
   ],
   "imgText": "選項池：Conversation outcomes ｜ Generated answer rate and quality ｜ Reactions ｜ Survey results\nThe number of unanswered questions：［　］\nThe number of abandoned sessions：［　］",
   "verify": "official",
   "ref": "https://learn.microsoft.com/microsoft-copilot-studio/analytics-improve-agent-effectiveness"
  },
  {
   "id": "T3Q23",
   "exam": "Topic 3 Q23",
   "q": "You are evaluating a Microsoft Copilot Studio agent that supports Microsoft Dynamics 365 Customer Service representatives.\nYou need to recommend a testing solution that meets the following requirements:\nEvaluates agent effectiveness during active sessions\nValidates whether the agent delivers accurate and helpful responses\nProvides measurable, actionable insights for continuous improvement\nWhat should you recommend?",
   "url": "",
   "type": "single",
   "options": [
    {
     "k": "A",
     "t": "Track resolution, deflection, and accuracy by using dashboards and use scripts to ensure consistent responses."
    },
    {
     "k": "B",
     "t": "Perform load testing to validate how the agent scales under a high chat volume."
    },
    {
     "k": "C",
     "t": "Review historical tickets to find agents that have the shortest resolution times."
    },
    {
     "k": "D",
     "t": "Measure uptime and page load times."
    }
   ],
   "answer": [
    "A"
   ],
   "cat": "P2",
   "exp": "以儀表板追蹤解決率、轉移率與準確度並以指令碼確保一致回應。"
  },
  {
   "id": "T3Q24",
   "exam": "Topic 3 Q24",
   "q": "A company uses multiple Microsoft Copilot Studio agents across different channels.\nYou need to recommend a monitoring solution that provides comprehensive telemetry data and performance insights for the agents.\nWhat should you include in the recommendation?",
   "url": "",
   "type": "single",
   "options": [
    {
     "k": "A",
     "t": "Application Insights"
    },
    {
     "k": "B",
     "t": "Azure Advisor"
    },
    {
     "k": "C",
     "t": "Azure DevOps"
    },
    {
     "k": "D",
     "t": "Microsoft Dynamics 365 Customer Voice"
    }
   ],
   "answer": [
    "A"
   ],
   "cat": "P3",
   "exp": "Application Insights 提供跨通道的遙測與效能資訊。",
   "verify": "official",
   "ref": "https://learn.microsoft.com/microsoft-copilot-studio/telemetry-overview"
  },
  {
   "id": "T3Q25",
   "exam": "Topic 3 Q25",
   "q": "A company has an AI solution built by using Microsoft Copilot Studio and Power Platform. The solution is used by the company's sales, marketing, and customer service teams.\nYou are performing a return on AI investment (ROAI) analysis to evaluate the impact of the solution.\nYou need to identify which measurable business drivers to include in the analysis.\nWhich two business drivers should you identify? Each correct answer presents part of the solution.",
   "url": "",
   "type": "multi",
   "options": [
    {
     "k": "A",
     "t": "the reduced average case resolution time"
    },
    {
     "k": "B",
     "t": "market capitalization"
    },
    {
     "k": "C",
     "t": "economic market predictability"
    },
    {
     "k": "D",
     "t": "increased employee productivity"
    },
    {
     "k": "E",
     "t": "brand awareness"
    }
   ],
   "answer": [
    "A",
    "D"
   ],
   "cat": "S1",
   "exp": "可量測的商業驅動因子：案件處理時間縮短、員工生產力提升。"
  },
  {
   "id": "T3Q26",
   "exam": "Topic 3 Q26",
   "q": "A company has a Microsoft Foundry agent that summarizes customer feedback and recommends products to customers. The agent references data from multiple knowledge sources.\nUsers report that the agent response time is slow.\nTelemetry data shows that the agent frequently reaches its token usage limit.\nYou need to recommend a solution to reduce token usage without degrading the quality of the generated responses.\nWhat should you recommend?",
   "url": "",
   "type": "single",
   "options": [
    {
     "k": "A",
     "t": "Chunk documents during indexing."
    },
    {
     "k": "B",
     "t": "Reduce the number of knowledge sources used by the agent."
    },
    {
     "k": "C",
     "t": "Reconfigure the prompts to limit the amount of retrieved content from the knowledge sources."
    },
    {
     "k": "D",
     "t": "Lower the maximum token usage limit for the responses."
    }
   ],
   "answer": [
    "C"
   ],
   "cat": "D3",
   "exp": "調整提示詞限制由知識來源取回的內容量，可降低 token 使用。"
  },
  {
   "id": "T3Q27",
   "exam": "Topic 3 Q27",
   "q": "A company has Microsoft Power Platform development, staging, and production environments. Each environment has its own Microsoft Dataverse tables and Azure AI Search index.\nYou are designing an application lifecycle management (AIM) process to deploy a Microsoft Copilot Studio agent between the environments.\nThe company has a Copilot Studio agent named Agent1 in development. Agent1 uses the following grounding data sources:\n•\tA Dataverse table named CustomerOrders\n•\tAn Azure AI Search index named customer-knowledge\nYou need to deploy Agent1 to production. The solution must ensure that the agent uses the production grounding data sources, minimizes downtime, and handles credentials and endpoints securely.\nWhat should you include in the deployment package solution, and what should you reconfigure after the deployment? To answer, select the appropriate options in the answer area.",
   "url": "",
   "type": "slots",
   "kind": "hotspot",
   "slots": [
    {
     "label": "Include in the deployment package solution:",
     "options": [
      "Agent1 only",
      "The data sources only",
      "Agent and the data source connections",
      "Agent1 and references to the data sources",
      "Agent1, the data sources, and the data source connections"
     ],
     "answer": "Agent1 and references to the data sources"
    },
    {
     "label": "Reconfigure after the deployment:",
     "options": [
      "The Dataverse connection only",
      "The Azure AI Search connection only",
      "The Dataverse and Azure AI Search connections",
      "The Agent1 configuration",
      "The environment variables"
     ],
     "answer": "The Dataverse and Azure AI Search connections"
    }
   ],
   "cat": "P1",
   "exp": "解決方案包含 agent 與資料來源參考（不含資料本身）；部署後需重設 Dataverse 與 AI Search 連線。",
   "imgs": [
    "image31.png"
   ],
   "imgText": "Include in the deployment package solution:（選項：Agent1 only ｜ The data sources only ｜ Agent and the data source connections ｜ Agent1 and references to the data sources ｜ Agent1, the data sources, and the data source connections）\nReconfigure after the deployment:（選項：The Dataverse connection only ｜ The Azure AI Search connection only ｜ The Dataverse and Azure AI Search connections ｜ The Agent1 configuration ｜ The environment variables）"
  },
  {
   "id": "T3Q28",
   "exam": "Topic 3 Q28",
   "q": "A company has a Microsoft Copilot Studio agent that uses generative AI to assist Microsoft Dynamics 365 Customer Service representatives.\nThe agent currently exhibits a low resolution rate and a high escalation rate.\nYou need to identify the issue.\nWhat should you use?",
   "url": "",
   "type": "single",
   "options": [
    {
     "k": "A",
     "t": "the Agent dashboard of Dynamics 365 Customer Service historical analytics"
    },
    {
     "k": "B",
     "t": "the Insights tab from the Search & intelligence settings of the Microsoft 365 admin center"
    },
    {
     "k": "C",
     "t": "the Copilot hub in the Power Platform admin center"
    },
    {
     "k": "D",
     "t": "the Analytics tab in Copilot Studio"
    }
   ],
   "answer": [
    "D"
   ],
   "cat": "P3",
   "exp": "Copilot Studio Analytics 提供解決率、轉人工率等指標。",
   "verify": "official",
   "ref": "https://learn.microsoft.com/microsoft-copilot-studio/analytics-overview"
  },
  {
   "id": "T3Q29",
   "exam": "Topic 3 Q29",
   "q": "A company has a Microsoft Foundry generative AI model.\nYou need to evaluate the model's output to measure the overall quality and coherence of generated responses. The evaluation must use GPT-4o as a judge and return a numeric score for each output.\nWhich type of metric should you use?",
   "url": "",
   "type": "single",
   "options": [
    {
     "k": "A",
     "t": "AI quality (NLP)"
    },
    {
     "k": "B",
     "t": "risk and safety"
    },
    {
     "k": "C",
     "t": "Groundedness"
    },
    {
     "k": "D",
     "t": "AI quality (AI assisted)"
    }
   ],
   "answer": [
    "D"
   ],
   "cat": "P2",
   "exp": "以 GPT-4o 作為評審並回傳數值分數屬於 AI quality (AI assisted) 指標。"
  },
  {
   "id": "T3Q30",
   "exam": "Topic 3 Q30",
   "q": "You use Microsoft Copilot Studio analytics to analyze the performance of a deployed Copilot Studio agent.\nYou need to identify which performance metrics to use to measure the following:\n•\tThe percentage of engaged sessions that are escalated to a live customer service representative\n•\tThe number of agent queries that cause a knowledge source error\nWhat should you identify for each requirement? To answer, select the appropriate options in the answer area.",
   "url": "",
   "type": "slots",
   "kind": "hotspot",
   "slots": [
    {
     "label": "The percentage of engaged sessions that are escalated to a representative:",
     "options": [
      "Answer quality",
      "Customer Satisfaction (CSAT) score",
      "Engagement rate",
      "Escalation rate"
     ],
     "answer": "Escalation rate"
    },
    {
     "label": "The number of agent queries that cause a knowledge source error:",
     "options": [
      "Answer quality",
      "Engagement rate",
      "Escalation rate"
     ],
     "answer": "Answer quality"
    }
   ],
   "cat": "P3",
   "exp": "轉人工比例=Escalation rate；知識來源錯誤歸於 Answer quality。",
   "imgs": [
    "image32.png"
   ],
   "imgText": "The percentage of engaged sessions that are escalated to a representative:（選項：Answer quality ｜ Customer Satisfaction (CSAT) score ｜ Engagement rate ｜ Escalation rate）\nThe number of agent queries that cause a knowledge source error:（選項：Answer quality ｜ Engagement rate ｜ Escalation rate）"
  },
  {
   "id": "T3Q31",
   "exam": "Topic 3 Q31",
   "q": "A company plans to deploy a Microsoft Foundry agent.\nYou need to recommend an application lifecycle management (ALM) process to ensure that the agent evaluates against baseline accuracy metrics before being deployed.\nWhat should you recommend?",
   "url": "",
   "type": "single",
   "options": [
    {
     "k": "A",
     "t": "Configure GitHub Actions for new agent versions."
    },
    {
     "k": "B",
     "t": "Deploy each new agent version directly to production."
    },
    {
     "k": "C",
     "t": "Use Observability in Foundry Control Plane with evaluation and drift monitoring."
    },
    {
     "k": "D",
     "t": "Enable Application Insights and use Azure Monitor."
    }
   ],
   "answer": [
    "A"
   ],
   "cat": "P1",
   "exp": "以 GitHub Actions 在新版本部署前自動化評估（社群票數；Foundry 可觀測性亦有討論）。",
   "verify": "official",
   "ref": "https://learn.microsoft.com/azure/ai-foundry/how-to/evaluation-github-action"
  },
  {
   "id": "T3Q32",
   "exam": "Topic 3 Q32",
   "q": "You need to recommend a security solution for agents in a Microsoft Power Platform environment.\nThe agents must use only approved connectors and services. The solution must prevent the agents from accessing sensitive data.\nWhat should you recommend?",
   "url": "",
   "type": "single",
   "options": [
    {
     "k": "A",
     "t": "Configure Azure Monitor to capture connector activity logs."
    },
    {
     "k": "B",
     "t": "Enable a Microsoft Dataverse audit."
    },
    {
     "k": "C",
     "t": "Deploy data loss prevention (DLP) policies in Power Platform."
    },
    {
     "k": "D",
     "t": "Enable customer-managed keys in Microsoft Dataverse."
    }
   ],
   "answer": [
    "C"
   ],
   "cat": "P4",
   "exp": "Power Platform DLP 政策控制 agent 可用的連接器並防止存取敏感資料。"
  },
  {
   "id": "T3Q33",
   "exam": "Topic 3 Q33",
   "q": "A company has an AI business solution that uses Microsoft Copilot Studio agents.\nYou need to recommend prompt best practices to improve the effectiveness of agent interactions.\nWhich two actions should you include in the recommendation? Each correct answer presents part of the solution.",
   "url": "",
   "type": "multi",
   "options": [
    {
     "k": "A",
     "t": "Track the duration of the average user session."
    },
    {
     "k": "B",
     "t": "Analyze the prompt length distribution."
    },
    {
     "k": "C",
     "t": "Regularly test and refine the prompts based on user input."
    },
    {
     "k": "D",
     "t": "Use clear and specific instructions in the prompts."
    },
    {
     "k": "E",
     "t": "Measure system resource usage during prompt processing."
    }
   ],
   "answer": [
    "C",
    "D"
   ],
   "cat": "P2",
   "exp": "提示詞最佳實務：清楚具體的指示，並依使用者輸入持續測試與調整。"
  },
  {
   "id": "T3Q34",
   "exam": "Topic 3 Q34",
   "q": "A company has a cloud-based AI solution that uses Azure OpenAI models.\nYou need to design a monitoring solution that meets the following requirements:\n•\tMonitors performance metrics and operational health for the models\n•\tMonitors AI apps and agents for compliance\n•\tUses Azure-native capabilities\n•\tMinimizes development effort\nWhat should you use for each requirement? To answer, drag the appropriate options to the correct requirements. Each option may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.",
   "url": "",
   "type": "slots",
   "kind": "dragdrop",
   "slots": [
    {
     "label": "Monitors AI app and agents for compliance",
     "options": [
      "Azure API Management",
      "Azure Policy",
      "Microsoft Defender",
      "Azure Monitor",
      "Azure Stream Analytics",
      "Microsoft Purview"
     ],
     "answer": "Microsoft Purview"
    },
    {
     "label": "Monitors performance metrics and operational health",
     "options": [
      "Azure API Management",
      "Azure Policy",
      "Microsoft Defender",
      "Azure Monitor",
      "Azure Stream Analytics",
      "Microsoft Purview"
     ],
     "answer": "Azure Monitor"
    }
   ],
   "cat": "P4",
   "exp": "Purview 負責合規監控；Azure Monitor 監控效能與營運健康（社群對第一項有 Defender 之見）。",
   "imgs": [
    "image33.png"
   ],
   "imgText": "選項池：Azure API Management ｜ Azure Policy ｜ Microsoft Defender ｜ Azure Monitor ｜ Azure Stream Analytics ｜ Microsoft Purview\nMonitors AI app and agents for compliance：［　］\nMonitors performance metrics and operational health：［　］",
   "verify": "official",
   "ref": "https://learn.microsoft.com/purview/ai-microsoft-purview"
  },
  {
   "id": "T3Q35",
   "exam": "Topic 3 Q35",
   "q": "A company has Microsoft Copilot Studio agents.\nThe company plans to deploy custom connectors across development, test and production environments.\nYou need to design an application lifecycle management (ALM) process to ensure consistency and prevent direct editing in production.\nWhich two actions should you include in the design? Each correct answer presents part of the solution.",
   "url": "",
   "type": "multi",
   "options": [
    {
     "k": "A",
     "t": "Deploy managed solutions to production."
    },
    {
     "k": "B",
     "t": "Deploy unmanaged solutions to production."
    },
    {
     "k": "C",
     "t": "Manually rebuild the agents in each environment."
    },
    {
     "k": "D",
     "t": "Move the agents between the environments by using data export and import."
    },
    {
     "k": "E",
     "t": "Include agents and connectors in a solution."
    }
   ],
   "answer": [
    "A",
    "E"
   ],
   "cat": "P1",
   "exp": "解決方案包含 agent 與連接器，並以受控方案部署到正式環境避免直接編輯。"
  },
  {
   "id": "T3Q36",
   "exam": "Topic 3 Q36",
   "q": "A company uses multiple Microsoft Copilot Studio agents across different channels.\nYou need to recommend a monitoring solution that provides comprehensive telemetry data and performance insights for the agents.\nWhat should you include in the recommendation?",
   "url": "",
   "type": "single",
   "options": [
    {
     "k": "A",
     "t": "Application Insights"
    },
    {
     "k": "B",
     "t": "Microsoft Dynamics 365 Customer Voice"
    },
    {
     "k": "C",
     "t": "Log Analytics"
    },
    {
     "k": "D",
     "t": "Microsoft Purview"
    }
   ],
   "answer": [
    "A"
   ],
   "cat": "P3",
   "exp": "Application Insights 提供完整遙測。",
   "verify": "official",
   "ref": "https://learn.microsoft.com/microsoft-copilot-studio/telemetry-overview"
  },
  {
   "id": "T3Q37",
   "exam": "Topic 3 Q37",
   "q": "A company has an AI solution named Solution1 that is deployed to the production environment. Solution1 uses an Azure OpenAI model to generate marketing emails for existing customers.\nDuring an internal review, you identify that Solution1 creates different emails depending on the customers’ traits.\nYou need to recommend a strategy to mitigate the bias. The strategy must adhere to Microsoft responsible AI principles.\nWhat should you recommend?",
   "url": "",
   "type": "single",
   "options": [
    {
     "k": "A",
     "t": "Modify Solution1 to randomly generate emails for different traits."
    },
    {
     "k": "B",
     "t": "Modify the system instructions of Solution1."
    },
    {
     "k": "C",
     "t": "Retrain the model by using a larger dataset."
    },
    {
     "k": "D",
     "t": "Modify the contents of the training dataset."
    }
   ],
   "answer": [
    "B"
   ],
   "cat": "P4",
   "exp": "修改系統指示（system instructions）以落實公平性，緩解偏見。"
  },
  {
   "id": "T3Q38",
   "exam": "Topic 3 Q38",
   "q": "A company has a canvas app named App1 in a Microsoft Power Platform environment named Env1.\nEnv1 uses a customer-managed key for data encryption. App1 connects to multiple data sources to retrieve and update customer and order information.\nYou need to recommend a solution to add Microsoft Copilot components to App1. The solution must NOT modify the current security or encryption configurations of Env1.\nWhat should you include in the recommendation?",
   "url": "",
   "type": "single",
   "options": [
    {
     "k": "A",
     "t": "Modify the data sources of App1 to make them compatible with Copilot."
    },
    {
     "k": "B",
     "t": "Duplicate App1 and republish the app in Env1."
    },
    {
     "k": "C",
     "t": "Enable Copilot features for Env1."
    },
    {
     "k": "D",
     "t": "Move App1 to a new environment that uses Microsoft-managed keys."
    }
   ],
   "answer": [
    "D"
   ],
   "cat": "P4",
   "exp": "使用客戶自控金鑰的環境無法使用 Copilot，需移至使用 Microsoft 管理金鑰的新環境。"
  },
  {
   "id": "T3Q39",
   "exam": "Topic 3 Q39",
   "q": "Which two components for the custom AI agent should you include in the application lifecycle management (AIM) process? Each correct answer presents part of the solution.",
   "url": "",
   "case": "contoso",
   "type": "multi",
   "options": [
    {
     "k": "A",
     "t": "an Azure package"
    },
    {
     "k": "B",
     "t": "a ZIP package"
    },
    {
     "k": "C",
     "t": "a Microsoft Power Platform solution"
    },
    {
     "k": "D",
     "t": "a Cloud Scale Unit (CSU) package"
    },
    {
     "k": "E",
     "t": "an X++model"
    }
   ],
   "answer": [
    "C",
    "E"
   ],
   "cat": "P1",
   "exp": "自訂 agent 的 ALM 需 Power Platform 解決方案，與 D365 SCM 外部商業邏輯所需的 X++ 模型。"
  },
  {
   "id": "T3Q40",
   "exam": "Topic 3 Q40",
   "q": "Which tools should you recommend to assist the CISO and the CIO with their specific responsibilities? To answer, drag the appropriate tools to the correct executives. Each tool may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.",
   "url": "",
   "case": "contoso",
   "type": "slots",
   "kind": "dragdrop",
   "slots": [
    {
     "label": "CISO",
     "options": [
      "Azure Blob Storage",
      "Azure Resource Graph Explorer",
      "Copilot Studio",
      "Microsoft Purview"
     ],
     "answer": "Azure Resource Graph Explorer"
    },
    {
     "label": "CIO",
     "options": [
      "Azure Blob Storage",
      "Azure Resource Graph Explorer",
      "Copilot Studio",
      "Microsoft Purview"
     ],
     "answer": "Microsoft Purview"
    }
   ],
   "cat": "P4",
   "exp": "CISO 盤點 AI 資源用 Resource Graph；CIO 指派資料安全標籤用 Purview。",
   "imgs": [
    "image34.png"
   ],
   "imgText": "選項池：Azure Blob Storage ｜ Azure Resource Graph Explorer ｜ Copilot Studio ｜ Microsoft Purview\nCISO：［　］\nCIO：［　］"
  },
  {
   "id": "T3Q41",
   "exam": "Topic 3 Q41",
   "q": "What should you recommend to assist the CEO with their specific responsibilities?",
   "url": "",
   "case": "contoso",
   "type": "single",
   "options": [
    {
     "k": "A",
     "t": "the Microsoft Service Trust Portal"
    },
    {
     "k": "B",
     "t": "Microsoft Foundry Tools"
    },
    {
     "k": "C",
     "t": "Microsoft Purview"
    },
    {
     "k": "D",
     "t": "the Responsible AI dashboard"
    },
    {
     "k": "E",
     "t": "Compliance Center"
    }
   ],
   "answer": [
    "D"
   ],
   "cat": "P4",
   "exp": "Responsible AI dashboard 可驗證可靠性、可解釋性、公平性與合規。"
  },
  {
   "id": "T3Q42",
   "exam": "Topic 3 Q42",
   "q": "Which Copilot Studio analytics metrics should you recommend to assist the executives with their specific responsibilities? To answer, drag the appropriate metrics to the correct executives. Each metric may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.",
   "url": "",
   "case": "contoso",
   "type": "slots",
   "kind": "dragdrop",
   "slots": [
    {
     "label": "CFO concerns about Copilot Studio credit usage",
     "options": [
      "Effectiveness",
      "Tool use",
      "Satisfaction",
      "Use"
     ],
     "answer": "Effectiveness"
    },
    {
     "label": "CTO concerns about poor feedback on AI agent responses",
     "options": [
      "Effectiveness",
      "Tool use",
      "Satisfaction",
      "Use"
     ],
     "answer": "Satisfaction"
    }
   ],
   "cat": "P3",
   "exp": "CFO 看已解決與中斷的對話（Effectiveness）；CTO 看使用者回饋（Satisfaction）（社群對 CFO 有 Use 之見）。",
   "imgs": [
    "image35.png"
   ],
   "imgText": "選項池：Effectiveness ｜ Tool use ｜ Satisfaction ｜ Use\nCFO concerns about Copilot Studio credit usage：［　］\nCTO concerns about poor feedback on AI agent responses：［　］",
   "verify": "official",
   "ref": "https://learn.microsoft.com/microsoft-copilot-studio/analytics-improve-agent-effectiveness"
  },
  {
   "id": "T3Q43",
   "exam": "Topic 3 Q43",
   "q": "A company has a team that analyzes its customers by using a manual process.\nYou are designing an AI-based agent to automate and improve the process.\nYou need to recommend on which platform to build the agent. The solution must meet the following requirements:\n•\tUse generative AI to answer common questions.\n•\tProvide analytics to review AI performance.\n•\tIdentify customer demographics.\n•\tMinimize custom development.\nSolution: You recommend GitHub Copilot.\nDoes this meet the goal?",
   "url": "",
   "type": "single",
   "options": [
    {
     "k": "A",
     "t": "Yes"
    },
    {
     "k": "B",
     "t": "No"
    }
   ],
   "answer": [
    "B"
   ],
   "cat": "D1",
   "exp": "GitHub Copilot 是開發者生產力工具，不符合需求。"
  },
  {
   "id": "T3Q44",
   "exam": "Topic 3 Q44",
   "q": "A company has a team that analyzes its customers by using a manual process.\nYou are designing an AI-based agent to automate and improve the process.\nYou need to recommend on which platform to build the agent. The solution must meet the following requirements:\n•\tUse generative AI to answer common questions.\n•\tProvide analytics to review AI performance.\n•\tIdentify customer demographics.\n•\tMinimize custom development.\nSolution: You recommend Microsoft Security Copilot.\nDoes this meet the goal?",
   "url": "",
   "type": "single",
   "options": [
    {
     "k": "A",
     "t": "Yes"
    },
    {
     "k": "B",
     "t": "No"
    }
   ],
   "answer": [
    "B"
   ],
   "cat": "D1",
   "exp": "Security Copilot 用於資安營運，不是建置客服 agent 的平台。"
  },
  {
   "id": "T3Q45",
   "exam": "Topic 3 Q45",
   "q": "A company has a team that analyzes its customers by using a manual process.\nYou are designing an AI-based agent to automate and improve the process.\nYou need to recommend on which platform to build the agent. The solution must meet the following requirements:\n•\tUse generative AI to answer common questions.\n•\tProvide analytics to review AI performance.\n•\tIdentify customer demographics.\n•\tMinimize custom development.\nSolution: You recommend Microsoft Copilot Studio.\nDoes this meet the goal?",
   "url": "",
   "type": "single",
   "options": [
    {
     "k": "A",
     "t": "Yes"
    },
    {
     "k": "B",
     "t": "No"
    }
   ],
   "answer": [
    "A"
   ],
   "cat": "D1",
   "exp": "Copilot Studio 具產生式 AI、分析且低開發量，符合需求。"
  },
  {
   "id": "T3Q46",
   "exam": "Topic 3 Q46",
   "q": "A company uses multiple Microsoft Copilot Studio agents across different channels.\nYou need to recommend a monitoring solution that provides comprehensive telemetry data and performance insights for the agents.\nWhat should you include in the recommendation?",
   "url": "",
   "type": "single",
   "options": [
    {
     "k": "A",
     "t": "Microsoft Power BI"
    },
    {
     "k": "B",
     "t": "the Analytics tab in Copilot Studio"
    },
    {
     "k": "C",
     "t": "Log Analytics"
    },
    {
     "k": "D",
     "t": "Azure Advisor"
    }
   ],
   "answer": [
    "B"
   ],
   "cat": "P3",
   "exp": "選項中無 Application Insights，Copilot Studio 的 Analytics 頁籤即內建完整監控。",
   "verify": "official",
   "ref": "https://learn.microsoft.com/microsoft-copilot-studio/analytics-overview"
  },
  {
   "id": "T3Q47",
   "exam": "Topic 3 Q47",
   "q": "Your company extends Copilot capabilities in Microsoft Dynamics 365 Finance.\nYou plan to use Azure DevOps for application lifecycle management (ALM).\nYou need to recommend a management solution for the ALM process.\nWhat should you include in the recommendation?",
   "url": "",
   "type": "single",
   "options": [
    {
     "k": "A",
     "t": "Lifecycle Services (LCS)"
    },
    {
     "k": "B",
     "t": "pipelines in Microsoft Power Platform"
    },
    {
     "k": "C",
     "t": "solutions in Microsoft Power Platform"
    },
    {
     "k": "D",
     "t": "Azure DevOps test plans"
    }
   ],
   "answer": [
    "C"
   ],
   "cat": "P1",
   "exp": "D365 Finance Copilot 擴充以 Power Platform 解決方案封裝並搭配 Azure DevOps。"
  }
 ]
};
