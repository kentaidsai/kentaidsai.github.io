window.MS_AI103 = {
"title": "Microsoft AI-103 題庫（ExamTopics）",
"domains": [
{
"id": "P",
"name": "① 規劃與管理",
"w": "25–30%"
},
{
"id": "G",
"name": "② 生成式 AI 與 Agent",
"w": "30–35%"
},
{
"id": "V",
"name": "③ 電腦視覺",
"w": "10–15%"
},
{
"id": "T",
"name": "④ 文字分析（含語音）",
"w": "10–15%"
},
{
"id": "I",
"name": "⑤ 資訊擷取",
"w": "10–15%"
}
],
"cases": {
"C1": [
"Case Study",
"This is a case study. Case studies are not timed separately from other exam sections. You can use as much exam time as you would like to complete each case study. However, there might be additional case studies or other exam sections. Manage your time to ensure that you can complete all the exam sections in the time provided. Pay attention to the Exam Progress at the top of the screen so you have sufficient time to complete any exam sections that follow this case study.",
"To answer the case study questions, you will need to reference information that is provided in the case. Case studies and associated questions might contain exhibits or other resources that provide more information about the scenario described in the case. Information provided in an individual question does not apply to the other questions in the case study.",
"A Review Screen will appear at the end of this case study. From the Review Screen, you can review and change your answers before you move to the next exam section. After you leave this case study, you will NOT be able to return to it.",
"To start the case study",
"To display the first question in this case study, select the “Next” button. To the left of the question, a menu provides links to information such as business requirements, the existing environment, and problem statements. Please read through all this information before answering any questions. When you are ready to answer a question, select the “Question” button to return to the question.",
"Overview",
"Company Information",
"Contoso, Ltd is a multinational retail company that builds, deploys, and manages generative AI and agent-based solutions by using Microsoft Foundry.",
"Existing Environment",
"Identity Environment",
"Contoso uses Microsoft Entra ID for identity management, authentication, and authorization capabilities that enable agents to access organizational resources and services.",
"Contoso recently formed a new AI engineering team named Agent1Dev Team to optimize and maintain existing AI solutions. The team collaborates with solution architects, DevOps engineers, and security engineers to design, implement, monitor, and secure AI applications.",
"Contoso also has a team named Agent1Test Team that is responsible for validating AI solutions before the solution deployments. Generative Environment",
"Contoso has a Microsoft Foundry deployment that contains two projects named Project1 and Project2.",
"Project1",
"Project1 contains a customer support agent named Agent1 that assists customers with product inquiries and troubleshooting requests. Agent1 has the following configurations:",
"• Agent1 uses a base model deployment.",
"• A safety evaluation pipeline is NOT enabled.",
"• Tool invocation approval workflows are NOT enabled.",
"• Conversation memory constraints are NOT configured.",
"Agent1 interacts with customers by using digital support channels and answers general questions about Contoso products. Project1 is deployed to an Azure region located in the European Union (EU).",
"Agent1Dev Team will use Project1 to optimize and maintain Agent1.",
"Project2",
"Project2 contains a deployed video generation model. The marketing department at Contoso has access to Project2 and plans to use the model to develop a video creation solution.",
"Development of the solution is incomplete.",
"Data Environment",
"Contoso stores product-related information in Azure resources that support AI applications.",
"The Azure environment contains an Azure Blob Storage account named storage1 that stores product detail sheets for all the Contoso products. The product sheets include specifications, feature descriptions, and product support information that Agent1 can use to answer customer questions. The product sheets are stored in the PDF format.",
"Problem Statements",
"Contoso identifies the following issues:",
"• Agent1 has only general knowledge of the Contoso products.",
"• A recent chat interaction with Agent1 was analyzed for sentiment. The results of the analysis have NOT been processed yet. • Agent1 does NOT use the detailed product information in the product sheets stored in storage1 when responding to customer questions. • The finance department at Contoso reports that vendor invoices must be reviewed manually to ensure that the invoices match the terms defined in the vendor contracts. The invoices contain tables, logos, and varied layouts that make the documents difficult to process consistently. Requirements",
"Planned Changes",
"Contoso plans to implement the following changes:",
"• Implement a solution for Project1 that analyzes the vendor invoices by evaluating both the visual layout and the textual content of the invoices, so that the invoice details can be verified against the vendor contract terms.",
"• Update the base model deployment used by Agent1 and standardize the model version to ensure continuity and consistent responses. • Enable Agent1 to retrieve and use the detailed product information from the product sheets stored in storage1. • Implement an indexing solution for the product sheets that Agent1 can use to answer customer questions.",
"• Complete the development of the video creation solution.",
"Technical Requirements",
"Contoso identifies the following technical requirements:",
"• The model deployment used by Agent1 must support scalable, high-throughput generative AI workloads and dynamically scale to handle variable customer support traffic, without requiring reserved throughput capacity.",
"• The product sheets must be processed by using an indexing pipeline that enables semantic and vector search, so that Agent1 can retrieve the relevant product information.",
"• Responses generated by using the product sheet information must be relevant, complete, and accurate.",
"• Agent1 must be able to use the product sheets to answer natural language questions about product details.",
"• The model version used by Agent1 must remain consistent to ensure stable responses.",
"• The data processed by the model must remain within the EU.",
"Security and Compliance Requirements",
"Contoso identifies the following security and compliance requirements:",
"• API keys must NOT be used to access Foundry-deployed models.",
"• Access to the Azure resources must follow the principle of least privilege.",
"• The developers at Contoso must authenticate to Microsoft Foundry resources by using Microsoft Entra authentication. • Access to Project1 must be assigned to the members of Agent1Dev Team by using a security group named SC_Agent1_Dev. • Access to Project1 must be assigned to the members of Agent1Test Team by using a security group named SC_Agent1_Test. • Agent1 must never reveal customer information, even if a document that contains customer data is added erroneously to the product sheet repository in storage1.",
"• The product sheets might contain images that include embedded text. Agent1 must be protected from malicious instructions potentially hidden within the images.",
"Business Requirements",
"Contoso identifies the following business requirements:",
"• Users that interact with Agent1 must have a personalized experience in future interactions, including the ability for Agent1 to retain conversation context and recall relevant information from previous interactions.",
"• Agent1 must answer questions only about the products sold by Contoso."
]
},
"questions": [
{
"n": 1,
"dom": "P",
"case": "C1",
"type": "HOTSPOT",
"page": 2,
"text": [
"You need to configure the model deployment for Agent1 to meet the technical requirements.",
"What should you configure? To answer, select the appropriate options in the answer area."
],
"imgs": [
"ms_ai103_img/out-3_1.jpg"
],
"ocr": [
"Deployment type:\nStandard\nGlobal Standard\nGlobal Provisioned\nVersion update policy:\nOnce the current version expires\nOpt out of automatic model version upgrades\nUpgrade once a new default version becomes available"
],
"opts": [],
"ans": "",
"multi": false,
"vote": "",
"dist": [],
"aimgs": [
"ms_ai103_img/out-4_1.png"
],
"aocr": [
"Answer Area\nDeployr\nStandard,\nGlobal Standard\nGlobal Provisioned\nVersion update policy\nOnce the current version exp\n>n upgrade\nutom\ntic\n‘Opt out o\nUpgrade once a new default version becomes available"
]
},
{
"n": 2,
"dom": "P",
"case": "C1",
"type": "MCQ",
"page": 5,
"text": [
"You need to configure Agent1 to meet the security and compliance requirements.",
"What should you use?"
],
"imgs": [],
"ocr": [],
"opts": [
{
"l": "A",
"t": "self-harm content filtering"
},
{
"l": "B",
"t": "prompt shields"
},
{
"l": "C",
"t": "Personally identifiable information (PII) Detection"
},
{
"l": "D",
"t": "violence content filtering"
}
],
"ans": "B",
"multi": false,
"vote": "B",
"dist": [
"B 52%",
"BC 6%",
"C 42%"
],
"aimgs": [],
"aocr": []
},
{
"n": 3,
"dom": "P",
"case": "",
"type": "MCQ",
"page": 7,
"text": [
"You are planning a Microsoft Foundry project named Project1 that will contain multiple agents. Each agent will access the same Azure AI Search resource.",
"You need to recommend a solution to centrally manage the Azure AI Search credentials within Project1. The solution must be implemented across all the agents.",
"What should you recommend?"
],
"imgs": [],
"ocr": [],
"opts": [
{
"l": "A",
"t": "Enable role-based access control (RBAC) for the Azure AI Search resource."
},
{
"l": "B",
"t": "Disable key-based access control on the Azure AI Search resource."
},
{
"l": "C",
"t": "Add a connection to the Azure AI Search resource."
},
{
"l": "D",
"t": "Create a managed private endpoint that connects to the Azure AI Search resource."
}
],
"ans": "C",
"multi": false,
"vote": "",
"dist": [
"C 100%"
],
"aimgs": [],
"aocr": []
},
{
"n": 4,
"dom": "G",
"case": "",
"type": "HOTSPOT",
"page": 8,
"text": [
"Your company is piloting a customer support agent in a Microsoft Foundry project name Project1. Project1 is connected to an existing Application Insights resource, and the company’s support team reviews runs in the Traces tab.",
"The Foundry Agent Service is configured to perform the following actions:",
"Retrieve the Application Insights connection string by calling project_client.telemetry.get_application_insights_connection_string(). Call configure_azure_monitor(connection_string=...) to enable telemetry.",
"A separate LangChain service is configured to use OpenTelemetry and has the following configurations:",
"Uses AzureAIOpenTelemetryTracer(connection_string=..., enable_content_recording=False)",
"Passes the tracer by using config={“callbacks”:[azure_tracer]} Company policy has the following requirements:",
"Telemetry from LangChain and OpenTelemetry must be distinguishable within the same Application Insights resource. Secrets and credentials must NOT be stored in prompts, tool arguments, or span attributes.",
"For each of the following statements, select Yes if the statement is true. Otherwise, select No."
],
"imgs": [
"ms_ai103_img/out-8_1.jpg"
],
"ocr": [
"Answer Area\nStatements\nThe LangChain service will appear in Traces\nwithout configuring a tracer.\nSetting different oreL_servIce_Name values\nseparates the services in Application Insights.\nWhen using enable_content_recording=False,\nprompts and tool data will be captured in the telemetry."
],
"opts": [],
"ans": "",
"multi": false,
"vote": "",
"dist": [],
"aimgs": [
"ms_ai103_img/out-8_2.png"
],
"aocr": [
"Answer Area\nStatements\nThe LangChain service will appear in Traces\nwithout configuring a tracer.\nSetting different oret_service_NaMe values\nseparates the services in Application Insights.\nWhen using enable_content_recording=False,\nprompts and tool data will be captured in the telemetry."
]
},
{
"n": 5,
"dom": "V",
"case": "",
"type": "DRAG DROP",
"page": 9,
"text": [
"You have a Microsoft Foundry project that processes procurement documents submitted by suppliers.",
"You need to implement two pipelines by using Azure Content Understanding in Foundry Tools. The solution must meet the following requirements: Include a pipeline named Pipeline1 that supports cost-effective, high-volume processing of standalone PDF invoices. Include a pipeline named Pipeline2 that supports cross-document validation by using multi-step reasoning and reference data. How should you configure each pipeline? To answer, drag the appropriate configurations to the correct pipelines. Each configuration may be used once, more than once, of not at all. You may need to drag the split bar between panes or scroll to view content. NOTE: Each correct selection is worth one point."
],
"imgs": [
"ms_ai103_img/out-9_1.jpg"
],
"ocr": [
"Configurations Answer Area\n#2 Multi-file task in pro mode Pipeline1: Configuration\n#2 Multi-file task in standard mode\nPipeline2: Configuration\n# Single-file task in pro mode\n3: Single-file task in standard mode"
],
"opts": [],
"ans": "",
"multi": false,
"vote": "",
"dist": [],
"aimgs": [
"ms_ai103_img/out-9_2.png"
],
"aocr": [
"3 Mullti-file task in pro mode"
]
},
{
"n": 6,
"dom": "G",
"case": "",
"type": "HOTSPOT",
"page": 10,
"text": [
"You have a Python application named App1 that integrates with a Microsoft Foundry project named Project1.",
"You need to ensure that App1 meets the following requirements:",
"Authenticates by using a Microsoft Entra managed identity",
"Sends prompts to a deployed model by using the Azure OpenAI Responses API How should you complete the Python code? To answer, select the appropriate options in the answer area."
],
"imgs": [
"ms_ai103_img/out-10_1.jpg"
],
"ocr": [
"Answer Area\nfrom azure.identity import DefaultazureCredential\nfrom azure.ai-projects import AIProjectClient\ncredential = m 0\nAzureKeyCredential\nClientSecretCredential\nDefaultAzureCredential\nproject_client = aIProjectClient(\nendpoint=\"https://contosoai.services.ai.azure.com/api/projects/projecti™,\ncredential=credential,\n>\nwith project_client.get_openai_client() as openai_client:\nresponse = openai_client.responses A «\ncompact\ncreate\nretrieve\nmodel=\"trail-guide-chat™,\ninput-\"Create a 3-day hiking itinerary near Seattle.~,\n>\nprint (response-output_text)"
],
"opts": [],
"ans": "",
"multi": false,
"vote": "",
"dist": [],
"aimgs": [
"ms_ai103_img/out-10_2.png"
],
"aocr": [
"Answer Area\nwreCredentiol\nfrom azure.identity import Default)\nfrom azure.ai.projects import AIProjectClient\n~Lo\neredentiol =\n‘AzurekeyCredential\nClientSecretCredential\nproject_client = Arprojectclient(\nendpoint=\"https://contosoai.services.a1.azure.com/api/projects/projecti™,\ncredential=credentiol,\n>\nwith project_client.get_openat_client() as openai_client:\nresponse = openai_client.responses. )c\ncompact\nmodel=\"tratl-guide-chat\nInput=\"Create @ 3-day hiking itinerary near Seattle\n>\nprint(response-output_text)"
]
},
{
"n": 7,
"dom": "G",
"case": "",
"type": "HOTSPOT",
"page": 11,
"text": [
"You have a Microsoft Foundry project that contains a workflow for a customer support triage process.",
"You have an Ask a question node that stores user responses in a local variable named Var01.",
"You need to create the following Power Fx expressions:",
"An if/else condition expression that ensures that Var01 contains a value A Send message expression that returns the stored user response in uppercase How should you configure the expressions? To answer, select the appropriate options in the answer area."
],
"imgs": [
"ms_ai103_img/out-11_1.jpg"
],
"ocr": [
"Answer Area\nIf/else condition expression:\nSend message expression:\nIsBlank(Local.Var01)\nIsEmpty(Local.Var01)\nNot(IsBlank(Local.Var01))\n{Local.Var01}\n{Upper(Local.var01)}\n{Upper(var01))"
],
"opts": [],
"ans": "",
"multi": false,
"vote": "",
"dist": [],
"aimgs": [
"ms_ai103_img/out-11_2.png"
],
"aocr": [
"Answer Area\nIf/else condition expression:\nIsBlank(Local.Var01)\nIsEmpty(Local.Var01)\nNot(IsBlank(Local.Var01))\n{Local.Var01}\n{Upper(Local.Var01)}\n{Upper(var01)}\nSend r"
]
},
{
"n": 8,
"dom": "V",
"case": "",
"type": "HOTSPOT",
"page": 12,
"text": [
"You have a Microsoft Foundry project that contains a customer support agent built by using the Foundry Agent Service. The agent uploads user-provided screenshots to Azure Storage through a ticketing tool and receives a blob URL for additional reasoning. You need to use image moderation during agent runs and prevent harmful content from being returned during runs. Azure AI Content Safety must access the images by using the blob URL. The solution must follow the principle of least privilege.",
"What should you configure for Content Safety? To answer, select the appropriate options in the answer area."
],
"imgs": [
"ms_ai103_img/out-12_1.jpg"
],
"ocr": [
"Answer Area\nGuardraits:\nStorage access:\nly\nSelect Too! call and set Action to Block.\nSelect User input and Output and set Action to Annotate.\nSelect User input and Tool response and set Action to Annotate.\nSelect User input, Output, Tool response, and Too! call and set Action to Block.\nStorage account access keys\nA.user-assigned identity that is assigned the Storage Queue Data Contributor role\nA system-assigned managed identity that is assigned the Storage Blob Data Reader role\nA ssystem-assigned managed identity that is assigned the Storage Blob Data Contributor role"
],
"opts": [],
"ans": "",
"multi": false,
"vote": "",
"dist": [],
"aimgs": [
"ms_ai103_img/out-12_2.png"
],
"aocr": [
"Answer Area\nsuardrails\n|v\nSelect Tool call and set Action to Block\nt\nSelex<\nt\nUser input and Output and set Action to Annotate\nSelec\nt\nt\nUser input and Tool response and set Action to Annotate\neclect User input, Output, Tool response, and Tool call and set Action to B\noc\n<\norag\nx\n|v\nStorage account access keys\nes\ncon\nA system-é\nsigned managed identity that is assigned the Storage Blob Data Reader role\nA system-assigned managed identity that ts assigned the Storage Blob Data Contributor role"
]
},
{
"n": 9,
"dom": "G",
"case": "",
"type": "MCQ",
"page": 12,
"text": [
"You have a Microsoft Foundry project that contains three agents as shown in the following table.",
"You need to orchestrate the agents to ensure that the customer requests meet the following requirements:",
"Support a deterministic, step-based process that uses conditional branching and shared state across the agents. Optionally trigger a ticket action based on the triage result.",
"The solution must minimize development effort.",
"What should you include in the solution?"
],
"imgs": [
"ms_ai103_img/out-12_3.jpg"
],
"ocr": [
"Name Description\nTriageAgent | Classifies incoming customer requests\nPolicyAgent | Answers policy questions by searching internal content\nActionAgent\nCreates or updates tickets by calling an HTTP API"
],
"opts": [
{
"l": "A",
"t": "a workflow"
},
{
"l": "B",
"t": "threads and runs without a workflow"
},
{
"l": "C",
"t": "a multi-agent group chat session"
},
{
"l": "D",
"t": "separate agent runs coordinated in the application code"
}
],
"ans": "A",
"multi": false,
"vote": "A",
"dist": [
"A 100%"
],
"aimgs": [],
"aocr": []
},
{
"n": 10,
"dom": "T",
"case": "",
"type": "MCQ",
"page": 13,
"text": [
"You have a Microsoft Foundry project that contains an agent. The agent uses Azure Speech in Foundry Tools.",
"You fine-tune a baseline speech to text model for the en-us locale and publish the model.",
"The agent calls the Speech to text REST API and returns an error message indicating that the project ID is invalid. You need to set the project property to the correct ID.",
"To what should you set the project property?"
],
"imgs": [],
"ocr": [],
"opts": [
{
"l": "A",
"t": "the project URL"
},
{
"l": "B",
"t": "the custom speech project ID"
},
{
"l": "C",
"t": "the project ID"
},
{
"l": "D",
"t": "the custom speech endpoint URL"
}
],
"ans": "B",
"multi": false,
"vote": "B",
"dist": [
"B 100%"
],
"aimgs": [],
"aocr": []
},
{
"n": 11,
"dom": "G",
"case": "",
"type": "HOTSPOT",
"page": 14,
"text": [
"You have a Microsoft Foundry project that contains an agent named PaymentAgent.",
"PaymentAgent includes a function tool that issues customer refunds by using an external API.",
"You are creating a workflow in YAML.",
"You need to ensure that the workflow pauses for human approval and continues with the refund step only after approval is granted. How should you complete the workflow definition? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point."
],
"imgs": [
"ms_ai103_img/out-14_1.jpg"
],
"ocr": [
"Answer Area\nsteps:\n-\nid:\npropose_refund\ntype:\nagent\nagent:\nPaymentAgent\nid:\nepproval\ntype:\nask_question\nbasic_chat\ndata_transformation\nid: execute refund\ntype:\nagent\nagent:\nPaymentAgent\ncondition:\napproval == “approved”\npropose_refund.output != null\ntrue"
],
"opts": [],
"ans": "",
"multi": false,
"vote": "",
"dist": [],
"aimgs": [
"ms_ai103_img/out-14_2.png"
],
"aocr": [
"Answer Area\nsteps:\n=\nid:\npropose_refund\ntype:\nagent\nagent\nPaymentAgent\nid:\napproval\ntype:\nbasic_chat\ndata_transformation\nid:\nexecute refund\ntype:\nagent\nagent\nPaymentAgent\ncondition:\npropose_refund.output != null\ntrue"
]
},
{
"n": 12,
"dom": "T",
"case": "",
"type": "MCQ",
"page": 15,
"text": [
"You have an Azure Speech in Foundry Tools resource that hosts a custom speech to text model deployed to a custom endpoint. An agent uses the endpoint to perform real-time speech recognition.",
"You are approaching the expiration date of the custom speech to text model.",
"What is the expected behavior when the model expires?"
],
"imgs": [],
"ocr": [],
"opts": [
{
"l": "A",
"t": "Speech recognition requests will return a 4xx error until a new custom model is deployed."
},
{
"l": "B",
"t": "Speech recognition requests will continue to use the expired custom model until the model is removed manually."
},
{
"l": "C",
"t": "Speech recognition requests will fall back to the most recent base model for the same locale."
},
{
"l": "D",
"t": "The custom model will be deleted automatically when the model expires."
}
],
"ans": "C",
"multi": false,
"vote": "C",
"dist": [
"A 15%",
"C 85%"
],
"aimgs": [],
"aocr": []
},
{
"n": 13,
"dom": "P",
"case": "",
"type": "MCQ",
"page": 15,
"text": [
"You have a Microsoft Foundry project that contains a model deployment.",
"You have an application that calls the deployment by using the Azure OpenAI v1 API and DefaultAzureCredential. The developers at your company receive HTTP 403 errors when they send inference requests, even after running az login. You need to ensure that the developers can perform model inference. The solution must follow the principle of least privilege. Which role-based access control (RBAC) role should you assign to the developers?"
],
"imgs": [],
"ocr": [],
"opts": [
{
"l": "A",
"t": "Cognitive Services User"
},
{
"l": "B",
"t": "Cognitive Services OpenAI User"
},
{
"l": "C",
"t": "Contributor"
},
{
"l": "D",
"t": "Cognitive Services Data Reader"
}
],
"ans": "B",
"multi": false,
"vote": "B",
"dist": [
"B 100%"
],
"aimgs": [],
"aocr": []
},
{
"n": 14,
"dom": "G",
"case": "",
"type": "MCQ",
"page": 16,
"text": [
"You have a Microsoft Foundry project that contains an agent. The agent has a Model Context Protocol (MCP) tool that queries a knowledge base stored in Azure AI Search.",
"Some agent runs return answers from the base model without invoking the knowledge base, which results in responses without grounded citations.",
"You are provided with the following code snippet that runs the agent.",
"You need to add the correct tool _choice parameter to the code to deterministically force the agent to invoke the MCP tool on each run. What should you add?"
],
"imgs": [
"ms_ai103_img/out-16_1.jpg"
],
"ocr": [
"run = project_client.agents.runs.create_and_process(\nthread_id=thread.id,\nagent_id-agent.id"
],
"opts": [
{
"l": "A",
"t": "tool_choice={“required”}"
},
{
"l": "B",
"t": "tool_choice={“auto”}"
},
{
"l": "C",
"t": "tool_choice={“type”:“knowledge_base”}"
},
{
"l": "D",
"t": "tool_choice ={“type”:“mcp”}"
}
],
"ans": "D",
"multi": false,
"vote": "D",
"dist": [
"A 49%",
"D 51%"
],
"aimgs": [],
"aocr": []
},
{
"n": 15,
"dom": "P",
"case": "",
"type": "DRAG DROP",
"page": 16,
"text": [
"You have a Microsoft Foundry project that contains a customer support agent grounded in internal documentation. After a recent update, users report the following issues:",
"Some answers are unsupported by retrieved documents.",
"A small number of responses are flagged for policy violations.",
"You need to evaluate each issue.",
"Which observability signals should you use for each issue? To answer, drag the appropriate observability signals to the correct issues. Each observability signal may be used once, more than once, or not at all. You may need to drag the spit bar between panes or scroll to view content. NOTE: Each correct selection is worth one point."
],
"imgs": [
"ms_ai103_img/out-16_2.jpg"
],
"ocr": [
"Observability signals Answer Area\nGroundedness evaluation metrics Unsupported responses: Observability signal\nLatency breakdown traces\nPolicy violations: Observability signal\nRisk and safety metrics\nToken usage analytics"
],
"opts": [],
"ans": "",
"multi": false,
"vote": "",
"dist": [],
"aimgs": [
"ms_ai103_img/out-16_3.png"
],
"aocr": [
"Unsupported responses:\n(Groundedness evaluation metrics\nPolicy violations: [1 Risk and safety metrics"
]
},
{
"n": 16,
"dom": "G",
"case": "",
"type": "MCQ",
"page": 17,
"text": [
"You have a Microsoft Foundry project named Project1 that contains an agent. The agent uses an OpenAPI 3.0 specification to call an external weather service.",
"The weather service requires a key to be passed in an HTTP header. The key value is stored as a connection in Project1. You need to ensure that the key value from the connection is included automatically whenever the OpenAPI tool is invoked. What should you configure in the OpenAPI specification?"
],
"imgs": [],
"ocr": [],
"opts": [
{
"l": "A",
"t": "a header parameter defined for each operation"
},
{
"l": "B",
"t": "an Azure Key Vault connection"
},
{
"l": "C",
"t": "an API key security scheme"
},
{
"l": "D",
"t": "a Bearer token security scheme"
}
],
"ans": "C",
"multi": false,
"vote": "C",
"dist": [
"C 100%"
],
"aimgs": [],
"aocr": []
},
{
"n": 17,
"dom": "G",
"case": "",
"type": "MCQ",
"page": 17,
"text": [
"You have a Microsoft Foundry project that serves a high-volume chat app.",
"Most requests are simple FAQs, but some require advanced reasoning.",
"You need to reduce costs and latency for common queries, without degrading the quality of the responses to complex questions. What should you do?"
],
"imgs": [],
"ocr": [],
"opts": [
{
"l": "A",
"t": "Route all the requests to a smaller model."
},
{
"l": "B",
"t": "Use a model cascade that routes the requests to different models."
},
{
"l": "C",
"t": "Increase the value of the max_tokens parameter for all the requests."
},
{
"l": "D",
"t": "Route all the requests to the most capable model."
}
],
"ans": "B",
"multi": false,
"vote": "B",
"dist": [
"B 100%"
],
"aimgs": [],
"aocr": []
},
{
"n": 18,
"dom": "P",
"case": "",
"type": "HOTSPOT",
"page": 18,
"text": [
"You have a Microsoft Foundry project that contains an internal Q&A agent.",
"Users report the following issues when they ask the agent questions:",
"An increase in the following response: “No relevant information found” Periodic HTTP 429 rate limit exceeded errors during peak hours You need to identify whether each issue is caused by model unavailability, resource limits, or inference failures. What should you do? To answer, select the appropriate options in the answer area."
],
"imgs": [
"ms_ai103_img/out-18_1.jpg"
],
"ocr": [
"Answer Area\nMetrics to enable:\nModel Availability Rate and Provisioned Utilization\nOnly Tokens Cache Match Rate\nOnly Total Requests filtered to status code 200\nTime To Response and Total Tokens\nDiagnostic log to collect: =\nAllMetrics\naudit\ntrace"
],
"opts": [],
"ans": "",
"multi": false,
"vote": "",
"dist": [],
"aimgs": [
"ms_ai103_img/out-18_2.png"
],
"aocr": [
"Answer Area\nay 7\nOnly Total Requests filtered to status code 200\nTime To Response and Total Tokens\nDiagnostic log to collect >\nAlle}\naudit\nRequestResponse"
]
},
{
"n": 19,
"dom": "G",
"case": "",
"type": "MCQ",
"page": 18,
"text": [
"You have a Microsoft Foundry project that contains a high-traffic agent.",
"After a recent update, operational costs increase significantly.",
"Monitoring confirms that the volume of user traffic to the agent remains unchanged.",
"You suspect that changes to the request or response characteristics are causing the increase. You need to identify whether the additional costs are driven by the model input size, the model output size, or expanded tool usage.",
"Which observability capability should you use?"
],
"imgs": [],
"ocr": [],
"opts": [
{
"l": "A",
"t": "latency"
},
{
"l": "B",
"t": "evaluation metrics"
},
{
"l": "C",
"t": "run success rate"
},
{
"l": "D",
"t": "token usage"
}
],
"ans": "D",
"multi": false,
"vote": "D",
"dist": [
"D 100%"
],
"aimgs": [],
"aocr": []
},
{
"n": 20,
"dom": "G",
"case": "",
"type": "HOTSPOT",
"page": 19,
"text": [
"You have a Microsoft Foundry project that contains an agent.",
"The agent uses tools to retrieve internal content and call external APIs. The agent is configured to let the model decide when to call the tools. You need to publish the agent for a compliance workflow. The solution must meet the following requirements:",
"Each workflow run must include a retrieval step before generating a response.",
"Tool calls must authenticate by using the published agent’s own identity.",
"Tool access must use an identity isolated from other project resources.",
"Tool access must use support audit tracing.",
"What should you do? To answer, select the appropriate options in the answer area."
],
"imgs": [
"ms_ai103_img/out-19_1.jpg"
],
"ocr": [
"Answer Area\nSet tool choice to: aa\n‘auto\nnone\nrequired\nConfigure the tool to authenticate by:\nStoring API keys in prompts\nUsing the shared project agent identity\nUsing a distinct agent identity bound to the client application"
],
"opts": [],
"ans": "",
"multi": false,
"vote": "",
"dist": [],
"aimgs": [
"ms_ai103_img/out-19_2.png"
],
"aocr": [
"Answer Area\n<\n*\n'\na\n*\nt\nch\nauto\nnone\n“cd\nqu\nr\nIto authents\nte t\nonfigure the tox\nStoring API keys in prompts\nUsinc\nthe shared\nwoject agent identit\n19\nact\nmct\n—\nmt\nGa\nitity bound tot\nve\nca\n*\nF\n>\n)\npl\nton"
]
},
{
"n": 21,
"dom": "G",
"case": "",
"type": "MCQ",
"page": 19,
"text": [
"You have a Microsoft Foundry project named Project1 that contains the following:",
"An OpenAPI tool that calls an external API",
"A project connection named Connection1 that stores the API key of the external API When an agent calls the OpenAPI tool, the API returns a 401 unauthorized error, and traces show that the API key header is NOT being sent. You need to ensure that the OpenAPI tool automatically includes the API key from Connection1 on all requests.",
"What should you do?"
],
"imgs": [],
"ocr": [],
"opts": [
{
"l": "A",
"t": "Enable identity passthrough so that the tool uses the Microsoft Entra token of the caller."
},
{
"l": "B",
"t": "Add the API key header manually to the OpenAPI specification."
},
{
"l": "C",
"t": "Configure the tool to use the default connection of Project1."
},
{
"l": "D",
"t": "Connect the tool to Connection1."
}
],
"ans": "D",
"multi": false,
"vote": "D",
"dist": [
"D 100%"
],
"aimgs": [],
"aocr": []
},
{
"n": 22,
"dom": "G",
"case": "",
"type": "MCQ",
"page": 20,
"text": [
"You have a Microsoft Foundry project that contains a customer support agent. The agent calls an internal knowledge API tool before generating responses.",
"Users report the following issues:",
"Some requests take more than 15 seconds to complete.",
"Some responses are incorrect, even when the knowledge API returns the expected data.",
"You need to inspect individual agent runs to view the ordered sequence of large language model (LLM) calls, tool invocations, and timing information.",
"Which observability capability should you use?"
],
"imgs": [],
"ocr": [],
"opts": [
{
"l": "A",
"t": "token usage"
},
{
"l": "B",
"t": "monitoring"
},
{
"l": "C",
"t": "safety metrics"
},
{
"l": "D",
"t": "tracing"
}
],
"ans": "D",
"multi": false,
"vote": "D",
"dist": [
"D 100%"
],
"aimgs": [],
"aocr": []
},
{
"n": 23,
"dom": "V",
"case": "",
"type": "MCQ",
"page": 20,
"text": [
"Note: This section contains one or more sets of questions with the same scenario and problem. Each question presents a unique solution to the problem. You must determine whether the solution meets the stated goals. More than one solution in the set might solve the problem. It is also possible that none of the solutions in the set solve the problem.",
"After you answer a question in this section, you will NOT be able to return. As a result, these questions do not appear on the Review Screen. You have a multimodal AI generative model that accepts image uploads and uses extracted image text to generate responses. You discover that users can upload unsafe images and embed hidden instructions into images to manipulate the model. You need to implement controls to mitigate the risk.",
"Solution: You configure a prompt shield for user prompts.",
"Does this meet the goal?"
],
"imgs": [],
"ocr": [],
"opts": [
{
"l": "A",
"t": "Yes"
},
{
"l": "B",
"t": "No"
}
],
"ans": "B",
"multi": false,
"vote": "B",
"dist": [
"A 20%",
"B 80%"
],
"aimgs": [],
"aocr": []
},
{
"n": 24,
"dom": "V",
"case": "",
"type": "MCQ",
"page": 21,
"text": [
"Note: This section contains one or more sets of questions with the same scenario and problem. Each question presents a unique solution to the problem. You must determine whether the solution meets the stated goals. More than one solution in the set might solve the problem. It is also possible that none of the solutions in the set solve the problem.",
"After you answer a question in this section, you will NOT be able to return. As a result, these questions do not appear on the Review Screen. You have a multimodal AI generative model that accepts image uploads and uses extracted image text to generate responses. You discover that users can upload unsafe images and embed hidden instructions into images to manipulate the model. You need to implement controls to mitigate the risk.",
"Solution: You configure image moderation to block unsafe content before processing the images.",
"Does this meet the goal?"
],
"imgs": [],
"ocr": [],
"opts": [
{
"l": "A",
"t": "Yes"
},
{
"l": "B",
"t": "No"
}
],
"ans": "B",
"multi": false,
"vote": "B",
"dist": [
"B 100%"
],
"aimgs": [],
"aocr": []
},
{
"n": 25,
"dom": "V",
"case": "",
"type": "MCQ",
"page": 21,
"text": [
"Note: This section contains one or more sets of questions with the same scenario and problem. Each question presents a unique solution to the problem. You must determine whether the solution meets the stated goals. More than one solution in the set might solve the problem. It is also possible that none of the solutions in the set solve the problem.",
"After you answer a question in this section, you will NOT be able to return. As a result, these questions do not appear on the Review Screen. You have a multimodal AI generative model that accepts image uploads and uses extracted image text to generate responses. You discover that users can upload unsafe images and embed hidden instructions into images to manipulate the model. You need to implement controls to mitigate the risk.",
"Solution: You configure a prompt shield for documents.",
"Does this meet the goal?"
],
"imgs": [],
"ocr": [],
"opts": [
{
"l": "A",
"t": "Yes"
},
{
"l": "B",
"t": "No"
}
],
"ans": "A",
"multi": false,
"vote": "A",
"dist": [
"A 55%",
"B 45%"
],
"aimgs": [],
"aocr": []
},
{
"n": 26,
"dom": "V",
"case": "",
"type": "MCQ",
"page": 22,
"text": [
"Note: This section contains one or more sets of questions with the same scenario and problem. Each question presents a unique solution to the problem. You must determine whether the solution meets the stated goals. More than one solution in the set might solve the problem. It is also possible that none of the solutions in the set solve the problem.",
"After you answer a question in this section, you will NOT be able to return. As a result, these questions do not appear on the Review Screen. You have a multimodal AI generative model that accepts image uploads and uses extracted image text to generate responses. You discover that users can upload unsafe images and embed hidden instructions into images to manipulate the model. You need to implement controls to mitigate the risk.",
"Solution: You configure protected material detection.",
"Does this meet the goal?"
],
"imgs": [],
"ocr": [],
"opts": [
{
"l": "A",
"t": "Yes"
},
{
"l": "B",
"t": "No"
}
],
"ans": "B",
"multi": false,
"vote": "B",
"dist": [
"B 100%"
],
"aimgs": [],
"aocr": []
},
{
"n": 27,
"dom": "P",
"case": "C1",
"type": "MCQ",
"page": 23,
"text": [
"You need to recommend a solution to assess the responses generated by Agent1 when the agent uses the product information stored in storage1. The solution must meet the technical requirements.",
"What should you include in the recommendation?"
],
"imgs": [],
"ocr": [],
"opts": [
{
"l": "A",
"t": "a Retrieval Augmented Generation (RAG) evaluator"
},
{
"l": "B",
"t": "a custom guardrail"
},
{
"l": "C",
"t": "model fine-tuning"
},
{
"l": "D",
"t": "a groundedness evaluator"
}
],
"ans": "A",
"multi": false,
"vote": "A",
"dist": [
"A 57%",
"D 43%"
],
"aimgs": [],
"aocr": []
},
{
"n": 28,
"dom": "G",
"case": "C1",
"type": "MCQ",
"page": 25,
"text": [
"You need to configure Agent1 to answer customer questions about only the Contoso products. The solution must meet the business requirements.",
"What should you do?"
],
"imgs": [],
"ocr": [],
"opts": [
{
"l": "A",
"t": "Modify the system message instructions."
},
{
"l": "B",
"t": "Add few-shot examples."
},
{
"l": "C",
"t": "Apply top-p sampling."
},
{
"l": "D",
"t": "Increase the value of the temperature parameter."
}
],
"ans": "A",
"multi": false,
"vote": "A",
"dist": [
"A 100%"
],
"aimgs": [],
"aocr": []
},
{
"n": 29,
"dom": "P",
"case": "",
"type": "MCQ",
"page": 27,
"text": [
"You have a Microsoft Foundry project.",
"You plan to build a customer support solution that contains an agent. The solution must meet the following requirements: Provide accurate, context-aware responses grounded in internal product documentation stored in Azure AI Search. Require deep, multi-step reasoning across long contexts.",
"Generate detailed natural language responses.",
"Which type of model should you use to power the agent?"
],
"imgs": [],
"ocr": [],
"opts": [
{
"l": "A",
"t": "a multimodal model"
},
{
"l": "B",
"t": "a small language model (SLM)"
},
{
"l": "C",
"t": "a key phrase extraction model"
},
{
"l": "D",
"t": "a large language model (LLM)"
}
],
"ans": "D",
"multi": false,
"vote": "D",
"dist": [
"D 100%"
],
"aimgs": [],
"aocr": []
},
{
"n": 30,
"dom": "G",
"case": "",
"type": "DRAG DROP",
"page": 27,
"text": [
"You have a Microsoft Foundry project that contains a deployed ticket-triage agent.",
"You discover that sometimes the agent responds without calling any tools, even when a tool is required.",
"You need to ensure that the agent calls a tool during execution.",
"How should you complete the Python code? To answer, drag the appropriate values to the correct targets. Each value may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content."
],
"imgs": [
"ms_ai103_img/out-27_1.jpg"
],
"ocr": [
"Values\n# “auto™\nrequired”\nAnswer Area\nrun_payload = {\n“assistant_id™: agent_id,\nValue\nValue\n“metadata”: {\n“scenario”: “ticket-triage™"
],
"opts": [],
"ans": "",
"multi": false,
"vote": "",
"dist": [],
"aimgs": [
"ms_ai103_img/out-27_2.png"
],
"aocr": [
"run_payloed = {\nwessistent_id\": agent,\n[#ssooncnotces ] , [#crewstreer™\n«\nwacenario”: “ticket-triage”\ncada’"
]
},
{
"n": 31,
"dom": "G",
"case": "",
"type": "MCQ",
"page": 28,
"text": [
"You are building a web app named App1 that generates responses by using a model deployed to a Microsoft Foundry project named Project1. Before sending the prompts to the model, App1 must retrieve documents by using Azure AI Search.",
"You need to integrate Project1 and App1. The solution must meet the following requirements:",
"Multiple client applications must use the same search configuration.",
"A security policy must prevent key-based authentication.",
"Administrative effort must be minimized.",
"What should you do?"
],
"imgs": [],
"ocr": [],
"opts": [
{
"l": "A",
"t": "Create a custom HTTP connection in Foundry and manually configure Azure AI Search endpoints per application."
},
{
"l": "B",
"t": "Configure an Azure AI Search connection in Project1 and reference the connection in each application."
},
{
"l": "C",
"t": "Call Azure AI Search directly from each application by using Microsoft Entra authentication."
},
{
"l": "D",
"t": "Enable a managed identity for each application and call Azure AI Search directly."
}
],
"ans": "B",
"multi": false,
"vote": "B",
"dist": [
"B 100%"
],
"aimgs": [],
"aocr": []
},
{
"n": 32,
"dom": "G",
"case": "",
"type": "DRAG DROP",
"page": 28,
"text": [
"You have a Microsoft Foundry project that contains an agent used by the financial analysts at your company.",
"You need to optimize the agent workflow by providing additional data access and processing capabilities. The solution must meet the following requirements:",
"Ensure that the agent can perform calculations during conversations.",
"Ensure that the agent can access up-to-date information from public websites.",
"Ensure that the agent can retrieve information from documents uploaded directly to the agent.",
"What should you use for each requirement? To answer, drag the appropriate tools to the correct requirements. Each tool may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content."
],
"imgs": [
"ms_ai103_img/out-28_1.jpg"
],
"ocr": [
"Hi File search\n‘Grounding with Bing Search\nHf Microsoft Fabric\n(Fi\ni\ni\nAnswer Area\nAccess up-to-date information from public websites: Tool\nPerform calculations during conversations: Tool\nRewieve information from documents uploaded\ndirectly to the agent:"
],
"opts": [],
"ans": "",
"multi": false,
"vote": "",
"dist": [],
"aimgs": [
"ms_ai103_img/out-28_2.png"
],
"aocr": [
"Access up-to-date information trom public websites:\nPerform calculations during conversations:\n‘etree intrmation tem documents vetoase"
]
},
{
"n": 33,
"dom": "G",
"case": "",
"type": "MCQ",
"page": 29,
"text": [
"You have a Microsoft Foundry project that contains a prompt agent used by a customer support web app.",
"The agent is invoked from a Python service that does NOT run in the Foundry portal.",
"You need to implement end-to-end tracing to capture latency breakdowns and exceptions across agent runs.",
"Which two components can you use? Each correct answer presents a complete solution.",
"NOTE: Each correct selection is worth one point."
],
"imgs": [],
"ocr": [],
"opts": [
{
"l": "A",
"t": "a Log Analytics workspace"
},
{
"l": "B",
"t": "Application Insights"
},
{
"l": "C",
"t": "OpenTelemetry"
},
{
"l": "D",
"t": "the Azure Monitor Agent"
},
{
"l": "E",
"t": "Microsoft Sentinel"
}
],
"ans": "BC",
"multi": true,
"vote": "BC",
"dist": [
"BC 100%"
],
"aimgs": [],
"aocr": []
},
{
"n": 34,
"dom": "G",
"case": "",
"type": "MCQ",
"page": 29,
"text": [
"You have a customer support agent that uses the Microsoft Foundry Agent Service.",
"Sometimes, customers return to a session days later to continue the same support case, and the agent must resume with the full historical context. The agent must provide the following:",
"Multi-turn continuity within the session",
"Cross-session continuity for the same case",
"Access to the full interaction history, including user messages, agent messages, tool calls, and tool outputs You need to ensure that the agent automatically reloads the complete history on each new turn.",
"What should you do?"
],
"imgs": [],
"ocr": [],
"opts": [
{
"l": "A",
"t": "Create and reuse a conversation by storing the conversation’s ID and supplying the ID on subsequent requests."
},
{
"l": "B",
"t": "Persist only the final model response stored in the client application and prepend the response to future prompts."
},
{
"l": "C",
"t": "Enable memory summarization on the agent definition to persist the context automatically."
}
],
"ans": "A",
"multi": false,
"vote": "A",
"dist": [
"A 100%"
],
"aimgs": [],
"aocr": []
},
{
"n": 35,
"dom": "G",
"case": "",
"type": "HOTSPOT",
"page": 30,
"text": [
"You have a Microsoft Foundry project that contains a deployed chat model.",
"You have a Python service that sends API requests to the model. The service is integrated with an automated validation system that compares generated outputs against approved response patterns.",
"Stakeholders report that small wording differences are causing validation mismatches.",
"You need to update the request parameters to improve output stability. The solution must maximize reasoning quality. How should you complete the Python code? To answer, select the appropriate options in the answer area."
],
"imgs": [
"ms_ai103_img/out-30_1.jpg"
],
"ocr": [
"Answer Area\nmessage = client .messages-create(\nmodel=\"deployment-name™,\nmessoges=[\n(\"role\": “user, “content”\nL\nmax_tokens-800,\ntemperature= +\n°\n1\n2\nthinking=(“type\": “enabled\"},\noutput_config=(\"effort™:\n“high”"
],
"opts": [],
"ans": "",
"multi": false,
"vote": "",
"dist": [],
"aimgs": [
"ms_ai103_img/out-30_2.png"
],
"aocr": [
"Answer Area\nmessage = client.messages.creste(\nmodel=\"deployment-name™,\nmessoges-f\nthe release notes in 3 bullet points.~)\n(\"roles \"user\", “content: “Sumariz\ntemperature =\n1\n2\nthinking=(\"type\": “enabled\"),\noutput_confige(“effort™"
]
},
{
"n": 36,
"dom": "I",
"case": "",
"type": "MCQ",
"page": 31,
"text": [
"You have a chat app in a Microsoft Foundry project and an Azure AI Search vectorized index.",
"You need to connect to the index to meet the following requirements:",
"Complex questions must retrieve information from multiple chunks.",
"Multi-turn conversations must influence retrieval planning.",
"Retrievals must run in parallel to reduce latency.",
"Which retrieval approach should you use?"
],
"imgs": [],
"ocr": [],
"opts": [
{
"l": "A",
"t": "iterative retrieval"
},
{
"l": "B",
"t": "agentic Retrieval Augmented Generation (RAG)"
},
{
"l": "C",
"t": "chain of thought"
},
{
"l": "D",
"t": "classic Retrieval Augmented Generation (RAG)"
}
],
"ans": "B",
"multi": false,
"vote": "B",
"dist": [
"B 100%"
],
"aimgs": [],
"aocr": []
},
{
"n": 37,
"dom": "G",
"case": "",
"type": "HOTSPOT",
"page": 31,
"text": [
"You need to recommend a plan to create a customer support agent by using the Microsoft Foundry Agent Service. The agent must meet the following requirements:",
"Retain user preferences across multiple conversations.",
"Enable users to provide contextual grounding by directly uploading documents during a chat.",
"Which Foundry capability should you recommend for each requirement? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point."
],
"imgs": [
"ms_ai103_img/out-31_1.jpg"
],
"ocr": [
"To retain user preferences across conversations, use:\n‘Agent memory that uses persistent storage\nConversation history\nOrchestration-managed session context\nTo enable users to provide contextual grounding during chats, use the:\n‘Azure Al Search tool\nCode interpreter toot\nFile search tool"
],
"opts": [],
"ans": "",
"multi": false,
"vote": "",
"dist": [],
"aimgs": [
"ms_ai103_img/out-31_2.png"
],
"aocr": [
"‘Azure Al Search too!"
]
},
{
"n": 38,
"dom": "G",
"case": "",
"type": "MCQ",
"page": 32,
"text": [
"You have a Microsoft Foundry project that contains an agent. The agent generates summaries from retrieved policy documents. You need to improve response completeness. The solution must be implemented in the logic of the application code before responses are returned.",
"What should you do?"
],
"imgs": [],
"ocr": [],
"opts": [
{
"l": "A",
"t": "Add a retry evaluation before the responses are returned."
},
{
"l": "B",
"t": "Decrease the value of the max_tokens parameter."
},
{
"l": "C",
"t": "Switch to Retrieval Augmented Generation (RAG)."
},
{
"l": "D",
"t": "Replace the model with a smaller deployment."
}
],
"ans": "A",
"multi": false,
"vote": "A",
"dist": [
"A 100%"
],
"aimgs": [],
"aocr": []
},
{
"n": 39,
"dom": "P",
"case": "",
"type": "MCQ",
"page": 32,
"text": [
"You have a customer support agent built by using the Microsoft Foundry Agent Service. The agent calls an Azure OpenAI model deployment. During load testing, calls intermittently fail and return an HTTP 429 rate limit exceeded error.",
"You need to handle throttling to reduce call failures and improve reliability under load. The solution must remain within the service and model limits.",
"What should you do?"
],
"imgs": [],
"ocr": [],
"opts": [
{
"l": "A",
"t": "Create a new thread and retry the calls immediately."
},
{
"l": "B",
"t": "Reduce the number of registered tools."
},
{
"l": "C",
"t": "Implement a retry policy that uses exponential backoff and jitter."
},
{
"l": "D",
"t": "Spit uploaded content into smaller files."
}
],
"ans": "C",
"multi": false,
"vote": "C",
"dist": [
"C 100%"
],
"aimgs": [],
"aocr": []
},
{
"n": 40,
"dom": "G",
"case": "",
"type": "HOTSPOT",
"page": 33,
"text": [
"You have a Microsoft Foundry project that contains an agent.",
"You use a GitHub Actions workflow for CI/CD.",
"You need to configure the workflow to automatically evaluate the agent when a pull request (PR) is created and prevent branches from merging if the evaluation results do NOT meet the defined thresholds.",
"How should you configure the workflow? To answer, select the appropriate options in the answer area."
],
"imgs": [
"ms_ai103_img/out-33_1.jpg"
],
"ocr": [
"Answer Area\nAuthentication method:\nA personal access token (PAT)\nA.user-assigned managed identity\nAn Azure Login action that uses OpenID Connect (O10)\nIf the evaluation results are NOT met, configure the workflow to:\nLock the target branch\nSend an alert\nFail"
],
"opts": [],
"ans": "",
"multi": false,
"vote": "",
"dist": [],
"aimgs": [
"ms_ai103_img/out-33_2.png"
],
"aocr": [
"Answer Ares\nAuthentication method =\n‘A personal access token (PAT)\nA user-as:\nined managed identity\nIf the evaluation results are NOT met, configure the workflow to: ~\nLock the target branch\nSead an alert"
]
},
{
"n": 41,
"dom": "G",
"case": "",
"type": "MCQ",
"page": 33,
"text": [
"Note: This section contains one or more sets of questions with the same scenario and problem. Each question presents a unique solution to the problem. You must determine whether the solution meets the stated goals. More than one solution in the set might solve the problem. It is also possible that none of the solutions in the set solve the problem.",
"After you answer a question in this section, you will NOT be able to return. As a result, these questions do not appear on the Review Screen. You have a Microsoft Foundry project that contains an agent. The agent generates summaries from retrieved policy documents. Users report that some responses omit required regulatory clauses, even when the clauses are present in the retrieved content. You need to improve response completeness.",
"Solution: You increase the value of the max_tokens parameter.",
"Does this meet the goal?"
],
"imgs": [],
"ocr": [],
"opts": [
{
"l": "A",
"t": "Yes"
},
{
"l": "B",
"t": "No"
}
],
"ans": "B",
"multi": false,
"vote": "B",
"dist": [
"A 25%",
"B 75%"
],
"aimgs": [],
"aocr": []
},
{
"n": 42,
"dom": "G",
"case": "",
"type": "MCQ",
"page": 34,
"text": [
"Note: This section contains one or more sets of questions with the same scenario and problem. Each question presents a unique solution to the problem. You must determine whether the solution meets the stated goals. More than one solution in the set might solve the problem. It is also possible that none of the solutions in the set solve the problem.",
"After you answer a question in this section, you will NOT be able to return. As a result, these questions do not appear on the Review Screen. You have a Microsoft Foundry project that contains an agent. The agent generates summaries from retrieved policy documents. Users report that some responses omit required regulatory clauses, even when the clauses are present in the retrieved content. You need to improve response completeness.",
"Solution: You add a reflection pass that regenerates the response if the required clauses are missing.",
"Does this meet the goal?"
],
"imgs": [],
"ocr": [],
"opts": [
{
"l": "A",
"t": "Yes"
},
{
"l": "B",
"t": "No"
}
],
"ans": "A",
"multi": false,
"vote": "A",
"dist": [
"A 100%"
],
"aimgs": [],
"aocr": []
},
{
"n": 43,
"dom": "G",
"case": "",
"type": "MCQ",
"page": 34,
"text": [
"Note: This section contains one or more sets of questions with the same scenario and problem. Each question presents a unique solution to the problem. You must determine whether the solution meets the stated goals. More than one solution in the set might solve the problem. It is also possible that none of the solutions in the set solve the problem.",
"After you answer a question in this section, you will NOT be able to return. As a result, these questions do not appear on the Review Screen. You have a Microsoft Foundry project that contains an agent. The agent generates summaries from retrieved policy documents. Users report that some responses omit required regulatory clauses, even when the clauses are present in the retrieved content. You need to improve response completeness.",
"Solution: You increase the value of the temperature parameter.",
"Does this meet the goal?"
],
"imgs": [],
"ocr": [],
"opts": [
{
"l": "A",
"t": "Yes"
},
{
"l": "B",
"t": "No"
}
],
"ans": "B",
"multi": false,
"vote": "B",
"dist": [
"B 100%"
],
"aimgs": [],
"aocr": []
},
{
"n": 44,
"dom": "G",
"case": "",
"type": "MCQ",
"page": 35,
"text": [
"Note: This section contains one or more sets of questions with the same scenario and problem. Each question presents a unique solution to the problem. You must determine whether the solution meets the stated goals. More than one solution in the set might solve the problem. It is also possible that none of the solutions in the set solve the problem.",
"After you answer a question in this section, you will NOT be able to return. As a result, these questions do not appear on the Review Screen. You have a Microsoft Foundry project that contains an agent. The agent generates summaries from retrieved policy documents. Users report that some responses omit required regulatory clauses, even when the clauses are present in the retrieved content. You need to improve response completeness.",
"Solution: You run an evaluation flow that scores responses for completeness and blocks responses that fall below a defined threshold. Does this meet the goal?"
],
"imgs": [],
"ocr": [],
"opts": [
{
"l": "A",
"t": "Yes"
},
{
"l": "B",
"t": "No"
}
],
"ans": "B",
"multi": false,
"vote": "B",
"dist": [
"A 20%",
"B 80%"
],
"aimgs": [],
"aocr": []
},
{
"n": 45,
"dom": "V",
"case": "",
"type": "MCQ",
"page": 35,
"text": [
"You are creating an image-editing workflow in a Microsoft Foundry project.",
"The workflow must meet the following requirements:",
"Ensure that background objects can be removed by applying a mask-based inpainting edit.",
"Preserve the original lighting and style of the edited images.",
"Use the built-in image editing controls, NOT a custom model.",
"You need to ensure that image edits apply exclusively inside the masked area.",
"How should you configure the workflow?"
],
"imgs": [],
"ocr": [],
"opts": [
{
"l": "A",
"t": "Set generation mode to image_variation and provide the original image as a reference."
},
{
"l": "B",
"t": "Enable text_to_image mode and a prompt describing the desired background removal."
},
{
"l": "C",
"t": "Enable image_to_image mode and a high-strength value to regenerate the full image based on the prompt."
},
{
"l": "D",
"t": "Enable mask_inpainting and supply both the input image and a mask indicating which part of the image to modify."
}
],
"ans": "D",
"multi": false,
"vote": "D",
"dist": [
"D 100%"
],
"aimgs": [],
"aocr": []
},
{
"n": 46,
"dom": "V",
"case": "",
"type": "MCQ",
"page": 36,
"text": [
"You have a Microsoft Foundry project that generates product marketing images from text prompts.",
"After publishing several images, the legal team at your company identifies a competitor’s logo on a sign in the background of an image. You need to remove only the logo, while preserving the rest of the image.",
"What should you do?"
],
"imgs": [],
"ocr": [],
"opts": [
{
"l": "A",
"t": "Apply a mask-based inpainting edit to the part of the image that contains the logo."
},
{
"l": "B",
"t": "Increase the prompt guidance strength."
},
{
"l": "C",
"t": "Modify the original prompt to exclude brand names."
},
{
"l": "D",
"t": "Rerun the prompt by using a different random seed."
}
],
"ans": "A",
"multi": false,
"vote": "A",
"dist": [
"A 100%"
],
"aimgs": [],
"aocr": []
},
{
"n": 47,
"dom": "I",
"case": "",
"type": "MCQ",
"page": 36,
"text": [
"You have a Microsoft Foundry project that contains an agent.",
"The agent ingests scanned PDF vendor invoices that contain tables and embedded QR codes.",
"The agent must preserve the PDF layout in the extracted output to ensure that downstream processing can reference sections and tables. You plan to call Azure Content Understanding in Foundry Tools.",
"You need to extract content and layout elements and detect QR codes without requiring a language model deployment. Which built-in analyzer should you use?"
],
"imgs": [],
"ocr": [],
"opts": [
{
"l": "A",
"t": "prebuilt-documentFieldSchema"
},
{
"l": "B",
"t": "prebuilt-read"
},
{
"l": "C",
"t": "prebuilt-documentSearch"
},
{
"l": "D",
"t": "prebuilt-layout"
}
],
"ans": "D",
"multi": false,
"vote": "D",
"dist": [
"D 100%"
],
"aimgs": [],
"aocr": []
},
{
"n": 48,
"dom": "V",
"case": "",
"type": "MCQ",
"page": 37,
"text": [
"You have a Microsoft Foundry project that contains an agent and an image generation model deployment.",
"The agent generates original images from user-supplied product photos.",
"You need to ensure that the generated images maintain the product identity and visual characteristics of the provided photo. What should you do?"
],
"imgs": [],
"ocr": [],
"opts": [
{
"l": "A",
"t": "Set the input_fidelity parameter to high."
},
{
"l": "B",
"t": "Apply a groundedness detection filter."
},
{
"l": "C",
"t": "Include a prompt and input image in the request."
},
{
"l": "D",
"t": "Decrease the value of the temperature parameter."
}
],
"ans": "A",
"multi": false,
"vote": "A",
"dist": [
"A 50%",
"C 50%"
],
"aimgs": [],
"aocr": []
},
{
"n": 49,
"dom": "V",
"case": "",
"type": "HOTSPOT",
"page": 37,
"text": [
"You have a Microsoft Foundry project that contains an agent.",
"The agent accepts user-uploaded screenshots and uses a multimodal chat model.",
"Some screenshots contain potentially malicious embedded text.",
"You need to prevent a prompt injection attack and ensure that third-party content is treated as lower trust.",
"How should you configure prompt shields for document attacks? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point."
],
"imgs": [
"ms_ai103_img/out-37_1.jpg"
],
"ocr": [
"Answer Area\nPrompt shields action:\nDisable the shield.\nSet action to block.\nSet action to annotate.\nAdditional mitigation:\nEnable Spotlighting.\nCreate a custom blocklist.\nUse optical character recognition (OCR) to extract the text from the images first."
],
"opts": [],
"ans": "",
"multi": false,
"vote": "",
"dist": [],
"aimgs": [
"ms_ai103_img/out-37_2.png"
],
"aocr": [
"Answer Area\nPrompt shields action v\nDisable the shield\nSet action to block\nSet action to annotate\nAdditional mitigation vv\nnable Spothghting.\nCreate a custom biocklist\nUse optical character recognition (OCR) to extract the text from the images first"
]
},
{
"n": 50,
"dom": "V",
"case": "",
"type": "MCQ",
"page": 38,
"text": [
"You are deploying a support agent that enables users to upload photos.",
"You need to automatically classify uploaded images for harmful content. The solution must block content based on severity levels. What should you do?"
],
"imgs": [],
"ocr": [],
"opts": [
{
"l": "A",
"t": "Apply keyword scanning to optical character recognition (OCR) output by using Azure Vision in Foundry Tools."
},
{
"l": "B",
"t": "Enable prompt shields."
},
{
"l": "C",
"t": "Use blocklists."
},
{
"l": "D",
"t": "Implement image moderation."
}
],
"ans": "D",
"multi": false,
"vote": "D",
"dist": [
"D 100%"
],
"aimgs": [],
"aocr": []
},
{
"n": 51,
"dom": "V",
"case": "",
"type": "MCQ",
"page": 38,
"text": [
"You have an app named App1 that uses a Microsoft Foundry multimodal model deployment.",
"App1 runs optical character recognition (OCR) on uploaded images and appends the OCR output to the prompt as additional context. Some uploaded images contain embedded text.",
"You need to prevent potentially malicious instructions from being processed by the model.",
"What should you use?"
],
"imgs": [],
"ocr": [],
"opts": [
{
"l": "A",
"t": "image moderation"
},
{
"l": "B",
"t": "prompt shields for documents"
},
{
"l": "C",
"t": "protected material text"
},
{
"l": "D",
"t": "prompt shields for user prompts"
}
],
"ans": "B",
"multi": false,
"vote": "B",
"dist": [
"B 100%"
],
"aimgs": [],
"aocr": []
},
{
"n": 52,
"dom": "I",
"case": "",
"type": "MCQ",
"page": 39,
"text": [
"You have a Microsoft Foundry project that contains an agent.",
"You need to process mixed-format documents that contain scanned text, tables, and multicolumn layouts. The extracted content must preserve the document structure and be converted into the Markdown format for downstream reasoning.",
"What should you configure first?"
],
"imgs": [],
"ocr": [],
"opts": [
{
"l": "A",
"t": "an Azure Language in Foundry Tools text analysis model deployment"
},
{
"l": "B",
"t": "a generative chat completion request"
},
{
"l": "C",
"t": "an Azure OpenAI Responses API call that uses a multimodal model"
},
{
"l": "D",
"t": "an Azure Content Understanding in Foundry Tools analyzer"
}
],
"ans": "D",
"multi": false,
"vote": "D",
"dist": [
"D 100%"
],
"aimgs": [],
"aocr": []
},
{
"n": 53,
"dom": "I",
"case": "",
"type": "MCQ",
"page": 39,
"text": [
"You have an application that processes scanned PDF invoices. The invoices have varied layouts and include multipage tables. You have a pipeline that uses optical character recognition (OCR) and extracts totals and invoice numbers. The results are often incorrect because the document structure is ignored.",
"You need to implement a solution that provides OCR, layout analysis, and template-generalizing field extraction. The solution must NOT require training a custom model. The solution must minimize administrative effort.",
"What should you include in the solution?"
],
"imgs": [],
"ocr": [],
"opts": [
{
"l": "A",
"t": "Azure Language in Foundry Tools"
},
{
"l": "B",
"t": "Azure Content Understanding in Foundry Tools"
},
{
"l": "C",
"t": "an Azure Machine Learning model"
}
],
"ans": "B",
"multi": false,
"vote": "B",
"dist": [
"B 100%"
],
"aimgs": [],
"aocr": []
},
{
"n": 54,
"dom": "I",
"case": "",
"type": "MCQ",
"page": 40,
"text": [
"You have a Microsoft Foundry project that contains an agent.",
"The agent uses a knowledge source built from documents stored in Azure Blob Storage. The documents include digitally scanned PDFs that contain multipage tables.",
"You have an ingestion job that extracts only plain text, causing loss of table structure, headings, and page-number metadata. Users frequently ask questions that require the retrieval of specific table rows across the pages.",
"You need to configure an ingestion job for a Retrieval Augmented Generation (RAG) pipeline that performs optical character recognition (OCR) on scanned PDFs, preserves tables and headings as structure-aware chunks, and stores page-number metadata with each chunk. How should you configure the ingestion job?"
],
"imgs": [],
"ocr": [],
"opts": [
{
"l": "A",
"t": "Use advanced data parsing to reingest the documents."
},
{
"l": "B",
"t": "Use OCR and page-level chunking."
},
{
"l": "C",
"t": "Use page-level OCR extraction and store each page as a single chunk."
},
{
"l": "D",
"t": "Use basic parsing and fixed-size chunking."
}
],
"ans": "A",
"multi": false,
"vote": "A",
"dist": [
"A 100%"
],
"aimgs": [],
"aocr": []
},
{
"n": 55,
"dom": "I",
"case": "",
"type": "MCQ",
"page": 40,
"text": [
"You have a Microsoft Foundry project that contains an agent.",
"The agent uses Azure AI Search as the retriever.",
"You plan to ingest PDF into an Azure AI Search index to ensure that the agent can ground responses in texts in both documents and embedded images.",
"Users require citations that link to the source files.",
"You need to ensure that during indexing, the images are extracted into a structure that can be used as input for the built-in optical character recognition (OCR) skill.",
"Which indexing approach should you use?"
],
"imgs": [],
"ocr": [],
"opts": [
{
"l": "A",
"t": "an indexer to extract image data into a normalized_images collection"
},
{
"l": "B",
"t": "a Shaper skill to restructure the OCR input"
},
{
"l": "C",
"t": "a skillset to run the OCR skill directly against the content field of the index"
},
{
"l": "D",
"t": "the outputFieldMappings parameter to write image data to a searchable field"
}
],
"ans": "A",
"multi": false,
"vote": "A",
"dist": [
"A 100%"
],
"aimgs": [],
"aocr": []
},
{
"n": 56,
"dom": "I",
"case": "C1",
"type": "MCQ",
"page": 41,
"text": [
"You need to recommend an invoice review solution that resolves the issue reported by the finance department.",
"What should you include in the recommendation?"
],
"imgs": [],
"ocr": [],
"opts": [
{
"l": "A",
"t": "chat completions"
},
{
"l": "B",
"t": "Azure Document Intelligence in Foundry Tools"
},
{
"l": "C",
"t": "Azure Content Understanding in Foundry Tools"
},
{
"l": "D",
"t": "Image Analysis"
}
],
"ans": "C",
"multi": false,
"vote": "C",
"dist": [
"C 100%"
],
"aimgs": [],
"aocr": []
},
{
"n": 57,
"dom": "I",
"case": "",
"type": "MCQ",
"page": 43,
"text": [
"You have a Microsoft Foundry project that contains an agent.",
"The knowledge source for the agent is a set of scanned PDF troubleshooting guides stored in Azure Blob Storage. The guide pages contain two- column layouts and tables.",
"You use Azure Content Understanding in Foundry Tools to process the PDFs.",
"You plan to ingest the processed content into an index for Retrieval Augmented Generation (RAG) and store extracted fields for downstream automation.",
"Stakeholders must be able to verify where each extracted field value came from in the original PDF and route low-reliability extractions for manual review.",
"You need to ensure that the Content Understanding document analyzer output includes a per-field confidence score and source grounding to locations within the source document.",
"What should you do?"
],
"imgs": [],
"ocr": [],
"opts": [
{
"l": "A",
"t": "Set enableSegment to true."
},
{
"l": "B",
"t": "Provide labeled samples."
},
{
"l": "C",
"t": "Enable estimateFieldSourceAndConfidence."
},
{
"l": "D",
"t": "Configure the analyzer to use generative extraction for all fields."
}
],
"ans": "C",
"multi": false,
"vote": "C",
"dist": [
"C 100%"
],
"aimgs": [],
"aocr": []
},
{
"n": 58,
"dom": "T",
"case": "",
"type": "MCQ",
"page": 43,
"text": [
"You are building a speech processing solution in Microsoft Foundry for a customer support platform.",
"The platform will transcribe live phone calls, so that supervisors at your company can view call transcripts and detect issues while the calls are in progress. The call audio will arrive as a continuous stream from the telephony system.",
"You need to ensure that the call transcripts appear within only a few seconds of the audio stream.",
"What should you do?"
],
"imgs": [],
"ocr": [],
"opts": [
{
"l": "A",
"t": "Use text to speech by using a custom neural voice."
},
{
"l": "B",
"t": "Use speech translation to generate the transcripts into multiple languages."
},
{
"l": "C",
"t": "Run a batch transcription job on recorded audio files."
},
{
"l": "D",
"t": "Use real-time speech to text to process streaming audio input."
}
],
"ans": "D",
"multi": false,
"vote": "D",
"dist": [
"D 100%"
],
"aimgs": [],
"aocr": []
},
{
"n": 59,
"dom": "T",
"case": "",
"type": "MCQ",
"page": 44,
"text": [
"You are creating an agent workflow in a Microsoft Foundry project to support natural voice interactions.",
"The agent must receive continuous audio input, convert the input into text for reasoning, and then return spoken responses to a user. The workflow must meet the following requirements:",
"Support turn-taking dynamics, where the agent begins to generate the speech output before the user finishes speaking. Operate with low latency to maintain conversational experience.",
"You need to enable both speech to text and text to speech in a real-time agent interaction.",
"What should you do?"
],
"imgs": [],
"ocr": [],
"opts": [
{
"l": "A",
"t": "Use batch transcription to convert the audio input and return text responses from the agent."
},
{
"l": "B",
"t": "Use real-time speech to text for incoming audio and text to speech for agent responses."
},
{
"l": "C",
"t": "Use an embeddings model to encode the audio, and then decode the audio into text and speech."
},
{
"l": "D",
"t": "Use speech translation to convert the audio into another language and return the translated text."
}
],
"ans": "B",
"multi": false,
"vote": "B",
"dist": [
"B 100%"
],
"aimgs": [],
"aocr": []
},
{
"n": 60,
"dom": "T",
"case": "",
"type": "MCQ",
"page": 44,
"text": [
"You have an application named App1 that uses Azure Speech in Foundry Tools to transcribe live calls.",
"Transcript segments often contain both English and Spanish. App1 sends each segment to Azure Translator in Foundry Tools to translate to another language.",
"Sometimes, mixed-language segments result in incomplete or incorrect translations.",
"You need to reduce translation errors. The solution must ensure that the entire transcript is translated successfully. What should you do before sending the segments to Translator?"
],
"imgs": [],
"ocr": [],
"opts": [
{
"l": "A",
"t": "Use document translation to translate the entire transcript as a single document."
},
{
"l": "B",
"t": "Split the mixed-language segments into single-language segments and translate each segment separately."
},
{
"l": "C",
"t": "Enable automatic language detection for the translation request."
},
{
"l": "D",
"t": "Specify English as the source language in the translation request for all the segments."
}
],
"ans": "B",
"multi": false,
"vote": "B",
"dist": [
"B 100%"
],
"aimgs": [],
"aocr": []
},
{
"n": 61,
"dom": "I",
"case": "C1",
"type": "MCQ",
"page": 45,
"text": [
"You need to configure an indexing pipeline for Agent1 to retrieve the relevant product information in storage1. The solution must meet the technical requirement.",
"Which two built-in skills should you use? Each correct answer presents part of the solution.",
"NOTE: Each correct selection is worth one point."
],
"imgs": [],
"ocr": [],
"opts": [
{
"l": "A",
"t": "Azure OpenAI Embedding"
},
{
"l": "B",
"t": "Entity Recognition"
},
{
"l": "C",
"t": "Text Split"
},
{
"l": "D",
"t": "Merge"
},
{
"l": "E",
"t": "Language Detection"
},
{
"l": "F",
"t": "key phrase extraction"
}
],
"ans": "AC",
"multi": true,
"vote": "AC",
"dist": [
"AC 100%"
],
"aimgs": [],
"aocr": []
},
{
"n": 62,
"dom": "I",
"case": "C1",
"type": "MCQ",
"page": 47,
"text": [
"You need to recommend a solution to support the planned changes and technical requirements for Agent1 to use the product information stored in storage1.",
"What should you include in the recommendation?"
],
"imgs": [],
"ocr": [],
"opts": [
{
"l": "A",
"t": "Azure Translator in Foundry Tools"
},
{
"l": "B",
"t": "Grounding with Bing Search"
},
{
"l": "C",
"t": "Azure AI Search"
},
{
"l": "D",
"t": "Azure Document intelligence in Foundry Tools"
}
],
"ans": "C",
"multi": false,
"vote": "C",
"dist": [
"C 100%"
],
"aimgs": [],
"aocr": []
},
{
"n": 63,
"dom": "I",
"case": "",
"type": "MCQ",
"page": 49,
"text": [
"You have a Microsoft Foundry project named Project1.",
"Project1 contains an application that processes PDF vendor invoices.",
"You need to configure Azure Document Intelligence in Foundry Tools to generate a Markdown output that preserves the sections and table structure of the PDFs. The solution must minimize development effort.",
"What should you do?"
],
"imgs": [],
"ocr": [],
"opts": [
{
"l": "A",
"t": "Configure output=figures when you analyze the PDF."
},
{
"l": "B",
"t": "Configure content=markdown when you analyze the document."
},
{
"l": "C",
"t": "Increase the confidence threshold."
},
{
"l": "D",
"t": "Set the output_content_format=ContentFormat.MARKDOWN value."
}
],
"ans": "D",
"multi": false,
"vote": "",
"dist": [
"D 100%"
],
"aimgs": [],
"aocr": []
},
{
"n": 64,
"dom": "I",
"case": "",
"type": "MCQ",
"page": 49,
"text": [
"You have a Microsoft Foundry project that ingests scanned PDF invoices stored in Azure Blob Storage. Each invoice contains printed fine items and has a table-based layout.",
"Extracted results are stored as structured JSON and used as grounding data for an agent in a Retrieval Augmented Generation (RAG) solution. You need to create a single analyzer that meets the following requirements:",
"Extracts the invoice number, invoice date, vendor name, and total amount across varying templates Returns confidence scores so that results with confidence below 0.80 can be routed for supervisor review What should you use?"
],
"imgs": [],
"ocr": [],
"opts": [
{
"l": "A",
"t": "a Foundry agent that has groundedness guardrails enabled to extract invoice fields and confidence scores"
},
{
"l": "B",
"t": "a custom Azure Content Understanding in Foundry Tools analyzer that defines the required fields as the extracted fields and the returned confidence scores for routing"
},
{
"l": "C",
"t": "the Azure Content Understanding in Foundry Tools prebuilt-layout analyzer"
},
{
"l": "D",
"t": "the Azure Content Understanding in Foundry Tools prebuilt-documentSearch analyzer and search.score from the Azure AI Search results for routing"
}
],
"ans": "B",
"multi": false,
"vote": "B",
"dist": [
"B 100%"
],
"aimgs": [],
"aocr": []
},
{
"n": 65,
"dom": "P",
"case": "",
"type": "MCQ",
"page": 50,
"text": [
"You have a Microsoft Foundry project that uses Azure AI Search to ground an agent in internal documentation.",
"After a recent content update, users report that the agent’s answers have become less accurate.",
"You need to identify whether the retrieved content is negatively influencing the model’s generated responses.",
"Which observability signal should you review?"
],
"imgs": [],
"ocr": [],
"opts": [
{
"l": "A",
"t": "indexer status and failure history"
},
{
"l": "B",
"t": "latency breakdown traces"
},
{
"l": "C",
"t": "prediction drift metrics"
},
{
"l": "D",
"t": "groundedness evaluation metrics"
}
],
"ans": "D",
"multi": false,
"vote": "",
"dist": [
"D 100%"
],
"aimgs": [],
"aocr": []
},
{
"n": 66,
"dom": "V",
"case": "C1",
"type": "HOTSPOT",
"page": 51,
"text": [
"You need to ensure that the marketing department can generate videos by using the model deployed to Project2.",
"How should you complete the Python code? To answer, select the appropriate options in the answer area."
],
"imgs": [
"ms_ai103_img/out-53_1.png"
],
"ocr": [
"Answer Area\nimport time\nfrom openai import OpenAI\nclient = OpenAr(\nbase_url= “https: //Contoso.openai.azure.com/openai/vi/”,\napi_key=.\n)\nvideo = client.videos. vi\n[create\nldownload_content\nlist\nretrieve\nmodel=deployment_name,\nprompt= “A video of our products”,\n)\nwhile video.status not in [“completed”, “failed”, “cancelled”]:\ntime.sleep (20)\nvideo = client.videos. Wy (video. id)\n[create\nldownload_content\nlist\nretrieve\nprint (video. status)"
],
"opts": [],
"ans": "",
"multi": false,
"vote": "",
"dist": [],
"aimgs": [
"ms_ai103_img/out-54_1.png"
],
"aocr": [
"Answer Area\nimport time\nfrom openai import OpenAI\nclient = openar(\nbase_url= “https: //Contoso.openai.azure.com/openai/vi/\",\napi_key=.\n)\nvideo = client.videos. ‘\n.d_content\nlist\nletrieve\nmodel=deployment_name,\nprompt= “A video of our products”,\n)\nwhile video.status not in [“completed”, “failed”,\ntime. sleep (20)\nvideo = client.videos.\n“cancelled”}:\n(video. id)\nprint (video. status)"
]
},
{
"n": 67,
"dom": "G",
"case": "C1",
"type": "MCQ",
"page": 55,
"text": [
"You need to configure personalized user interactions for Agent1. The solution must meet the business requirements. What should you include in the solution?"
],
"imgs": [],
"ocr": [],
"opts": [
{
"l": "A",
"t": "knowledge"
},
{
"l": "B",
"t": "memory"
},
{
"l": "C",
"t": "guardrails"
},
{
"l": "D",
"t": "tools"
}
],
"ans": "B",
"multi": false,
"vote": "B",
"dist": [
"B 100%"
],
"aimgs": [],
"aocr": []
},
{
"n": 68,
"dom": "P",
"case": "C1",
"type": "HOTSPOT",
"page": 58,
"text": [
"You need to ensure that Agent1Dev Team can access Agent1. The solution must meet the security and compliance requirements. How should you complete the Python code? To answer, select the appropriate options in the answer area."
],
"imgs": [
"ms_ai103_img/out-60_1.png"
],
"ocr": [
"Answer Area\nfrom azure.identity import DefaultAzureCredential\nfrom azure.ai.projects import AIProjectClient\nfrom azure.core.credentials import AzureKeyCredential\nmyEndpoint = “https://contoso.services.ai.azure.com/api/projects/project1”\nproject_client = AIProjectClient (\nendpoint=myEndpoint,\ncredential=\nvv\n‘AzureKeyCredential()\nDefaultAzureCredential()\nNone\n)\nmyAgent = “Agenti”\nagent = project_client.agents. YW (agent_name=myagent)\n[create_version\nlaet\nlget_version\nprint (£ “Retrieved agent: {agent.name}”)"
],
"opts": [],
"ans": "",
"multi": false,
"vote": "",
"dist": [],
"aimgs": [
"ms_ai103_img/out-61_1.png"
],
"aocr": [
"Answer Area\nfrom azure.identity import DefaultazureCredential\nfrom azure.ai.projects import ArProjectClient\nfrom azure.core.credentials import AzureKeyCredential\nmyEndpoint = “https: //contoso.services.ai.azure.com/api/projects/projecti”\nproject_client = AIProjectClient (\nendpoint=myEndpoint,\ncredentia,\nd\nmyagent = “Agenti”\nagent = project_client.agents. (agent_name=myAgent)\nprint (f “Retrieved agent: {agent.name}”)"
]
},
{
"n": 69,
"dom": "P",
"case": "",
"type": "MCQ",
"page": 61,
"text": [
"You have a Microsoft Foundry project that contains a Retrieval Augmented Generation (RAG) chat solution used by customer support agents. You are adding an automated pre-production evaluation step to a CI/CD pipeline named Pipeline1. The evaluation will run against a labeled test dataset that contains support questions and the expected grounding context.",
"You need to ensure that Pipeline1 fails if unsupported content or a retrieval mismatch exceeds a defined threshold: • responses include claims not supported by the retrieved source content • retrieved source content does not align with the labeled expected context Which two built-in evaluators should you use in Pipeline1? Each correct answer presents pat of the solution.",
"NOTE: Each correct selection is worth one point."
],
"imgs": [],
"ocr": [],
"opts": [
{
"l": "A",
"t": "Retrieval"
},
{
"l": "B",
"t": "Fluency"
},
{
"l": "C",
"t": "Coherence"
},
{
"l": "D",
"t": "Groundedness"
},
{
"l": "E",
"t": "Response Completeness"
}
],
"ans": "AD",
"multi": true,
"vote": "A",
"dist": [
"A 50%",
"AD 50%"
],
"aimgs": [],
"aocr": []
},
{
"n": 70,
"dom": "G",
"case": "",
"type": "MCQ",
"page": 62,
"text": [
"You have a Microsoft Foundry project that contains a support-ticket triage agent built by using the Foundry Agent Service. The agent uses tool to classify the ticket type and sot the ticket priority.",
"Sometimes, the same support case continues across multiple sessions over several days.",
"You need to persist state by using a durable ID to ensure that the agent can automatically reuse the full interaction history. The solution must preserve previous user messages, tool calls and tool outputs across turns and sessions.",
"Which runtime component should you use?"
],
"imgs": [],
"ocr": [],
"opts": [
{
"l": "A",
"t": "output item"
},
{
"l": "B",
"t": "agent"
},
{
"l": "C",
"t": "conversation"
},
{
"l": "D",
"t": "response"
}
],
"ans": "C",
"multi": false,
"vote": "C",
"dist": [
"C 100%"
],
"aimgs": [],
"aocr": []
},
{
"n": 71,
"dom": "P",
"case": "",
"type": "HOTSPOT",
"page": 63,
"text": [
"You have a Microsoft Founcy project that contains a Retrieval Augmented Generation (RAG) solution.",
"You need to run a pre-production evaluation by using labeled CSV dataset that contains the query, context, response and ground truth. The evaluation must measure the following:",
"• Whether responses address the user query",
"• Whether responses are supported by the provided context",
"• Whether responses contain sensitive or proprietary information Which AI quality evaluation metrics should you use? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point."
],
"imgs": [
"ms_ai103_img/out-63_1.png"
],
"ocr": [
"Answer Area\nTo measure whether the responses are supported\nby the provided context and address the user query:\nTo measure whether responses contain sensitive\nor proprietary information:\nlv\n[Coherence and Fluency\nGPT similarity and F1 score\nGroundedness and Relevance\nGroundedness and ROUGE score\niv\nHateful and unfair content\nIndirect attack\nProtected material\nViolent content"
],
"opts": [],
"ans": "",
"multi": false,
"vote": "",
"dist": [],
"aimgs": [
"ms_ai103_img/out-63_2.png"
],
"aocr": [
"Answer Area\nTo measure whether the responses are supported\nby the provided context and address the user query:\nTo measure whether responses contain sensitive\nor proprietary information:\nCoherence and Fluency\noundedess and Roane"
]
},
{
"n": 72,
"dom": "P",
"case": "",
"type": "MCQ",
"page": 64,
"text": [
"You plan to configure an evaluation in Microsoft Foundry for a Retrieval Augmented Generation (RAG) chat app.",
"You need to provide scores for groundedness, relevance, and harmful content categories.",
"Which two evaluation categories can you use? Each correct answer presents a complete solution.",
"NOTE: Each correct selection is worth one point."
],
"imgs": [],
"ocr": [],
"opts": [
{
"l": "A",
"t": "risk and safety metrics"
},
{
"l": "B",
"t": "fluency evaluator"
},
{
"l": "C",
"t": "similarity evaluators"
},
{
"l": "D",
"t": "AI quality (NLP) metrics"
},
{
"l": "E",
"t": "AI quality (AI assisted) metrics"
}
],
"ans": "AE",
"multi": true,
"vote": "AE",
"dist": [
"AD 38%",
"AE 63%"
],
"aimgs": [],
"aocr": []
},
{
"n": 73,
"dom": "G",
"case": "",
"type": "MCQ",
"page": 64,
"text": [
"You have a Microsoft Foundry project that contains an agent. The agent uses two tools to perform the following actions: • Use Azure AI Search to retrieve answers from a private product documentation index.",
"• Use the web search tool to retrieve public information on the internet.",
"You need to ensure that for a specific run, the agent deterministically retrieves information only from the internet. To what should you set tool_choice?"
],
"imgs": [],
"ocr": [],
"opts": [
{
"l": "A",
"t": "{“type”: “bing_grouding”}"
},
{
"l": "B",
"t": "{“type”: “azure_ai-search”}"
},
{
"l": "C",
"t": "“auto”"
},
{
"l": "D",
"t": "“required”"
}
],
"ans": "A",
"multi": false,
"vote": "A",
"dist": [
"A 100%"
],
"aimgs": [],
"aocr": []
},
{
"n": 74,
"dom": "G",
"case": "",
"type": "MCQ",
"page": 65,
"text": [
"You have a Microsoft Foundry project that contains a customer support agent built on a deployed chat model.",
"The agent responses are validated by using an automated testing system that compares generated answers to stored expected outputs. Identical prompts must return consistent response to prevent automated test failures.",
"You need to reduce response variability, without modifying the prompt or reducing factual accuracy.",
"What should you do for the model?"
],
"imgs": [],
"ocr": [],
"opts": [
{
"l": "A",
"t": "Increase the max_tokens parameter."
},
{
"l": "B",
"t": "Remove stop sequences from the requests."
},
{
"l": "C",
"t": "Decrease the temperature parameter."
},
{
"l": "D",
"t": "Increase the temperature parameter."
}
],
"ans": "C",
"multi": false,
"vote": "C",
"dist": [
"C 100%"
],
"aimgs": [],
"aocr": []
},
{
"n": 75,
"dom": "G",
"case": "",
"type": "MCQ",
"page": 65,
"text": [
"You are developing prompts for a Micosoft Foundry project that classifies incoming support tickets by category. You need to improve accuracy by showing the model how correct classifications look, without retaining the model or storing knowledge permanently.",
"Which prompt engineering approach should you use?"
],
"imgs": [],
"ocr": [],
"opts": [
{
"l": "A",
"t": "Retrieval Augmented Generation (RAG)"
},
{
"l": "B",
"t": "zero-shot learning"
},
{
"l": "C",
"t": "chain of thought"
},
{
"l": "D",
"t": "few-shot learning"
}
],
"ans": "D",
"multi": false,
"vote": "D",
"dist": [
"D 100%"
],
"aimgs": [],
"aocr": []
},
{
"n": 76,
"dom": "G",
"case": "",
"type": "MCQ",
"page": 66,
"text": [
"You have a Microsoft Foundry project that contains an agent for a customer support chat app. The agent uses a memory store and a memory search tool.",
"You need to ensure that the conversation history does NOT persist across separate sessions.",
"To what should you set the scope of the memory tool?"
],
"imgs": [],
"ocr": [],
"opts": [
{
"l": "A",
"t": "session"
},
{
"l": "B",
"t": "{{$conversationId}}"
},
{
"l": "C",
"t": "{{$userId}}"
},
{
"l": "D",
"t": "global"
}
],
"ans": "A",
"multi": false,
"vote": "A",
"dist": [
"A 67%",
"B 33%"
],
"aimgs": [],
"aocr": []
},
{
"n": 77,
"dom": "G",
"case": "",
"type": "DRAG DROP",
"page": 67,
"text": [
"You have a Microsoft Foundry project that contains an agent.",
"You need to enable long-term memory to ensure that the agent can recall user preferences across separate conversations. Stored memories must be isolated per authenticated user without the client application manually generating user IDs.",
"How should you complete the Python code? To answer, drag the appropriate values to the correct targets. Each value may be used once, more than once, or not at all."
],
"imgs": [
"ms_ai103_img/out-67_1.png"
],
"ocr": [
"Values\n“session”\n“{{SconversationId}}”\n“{{SuserId}}”\n[mem_store_name]\n[memory_tool]\nMemorySearchTool\n(“support_mem_store”)\nAnswer Area\nfrom azure.ai.projects.models import MemorySearchTool,\nPromptAgentDefinition\nmem_store_name = “agent_mem_store”\nmemory tool = MemorySearchTool\nmemory _store_name=mem_store_name,\nscope=\n)\nagent_def = PromptAgentDefinition(\nmodel= “gpt-5.2”,\ninstructions= “You are a customer support\ntools=\nassistant.”,"
],
"opts": [],
"ans": "",
"multi": false,
"vote": "",
"dist": [],
"aimgs": [
"ms_ai103_img/out-67_2.png"
],
"aocr": [
"Answer Area\nfrom azure.ai.projects.models import MemorySearchTool,\nPromptAgentDefinition\nmem_store name = “agent_mem_store”\nmemory _tool = MemorySearchTool.\nmemory_store\n“({Suserray)” .\nPromptAgentDefinition(\n“gpt-5.2\",\ninstructione= “you are a customer support assietant.”,\ntools=\n(memory_tool}"
]
},
{
"n": 78,
"dom": "P",
"case": "",
"type": "MCQ",
"page": 68,
"text": [
"You have a web app named App1 that processes user prompts by integrating with a Microsoft Foundry project named Project1. App1 performs the following actions:",
"• Sends prompts directly to a model by using the Azure OpenAI Responses API • Invokes the Azure AI Content Safety tool by using a Foundry connection within the same request You need to configure end-to-end visibility into each step of the request workflow.",
"What should you do?"
],
"imgs": [],
"ocr": [],
"opts": [
{
"l": "A",
"t": "Enable logging by using the client SDK for Content Safety."
},
{
"l": "B",
"t": "Enable logging by using Foundry Local."
},
{
"l": "C",
"t": "Enable application tracing in Project1."
},
{
"l": "D",
"t": "Route requests through the Azure OpenAI endpoint."
}
],
"ans": "C",
"multi": false,
"vote": "C",
"dist": [
"C 100%"
],
"aimgs": [],
"aocr": []
},
{
"n": 79,
"dom": "G",
"case": "",
"type": "HOTSPOT",
"page": 69,
"text": [
"You have a Microsoft Foundry project that contains two agents named PolicyWriter and RskReviewer.",
"PolicyWriter generates daft updates for customer polices, and RiskReviewer reviews the drafts.",
"In the visual builder, you need to create a workflow that meets the following requirements:",
"• Finalizes low-risk updates without manual intervention",
"• Ensures predictable execution across the agents",
"• Requires user approval for highs updates",
"What should you configure? To answer, select the appropriate options in the answer area.",
"NOTE: Each comet selection is worth one point."
],
"imgs": [
"ms_ai103_img/out-69_1.png"
],
"ocr": [
"Answer Area\nOrchestration pattem: lv\nThe sequential template that passes outputs node by-node\nThe group chat template to dynamically route control between the agents\n‘The human-in-the-loop template that pauses execution of the workflow for input\nApproval checkpoints: lv\n‘Add a Basic chat node.\nAdd a Condition statement.\nAdd an Ask a question node."
],
"opts": [],
"ans": "",
"multi": false,
"vote": "",
"dist": [],
"aimgs": [
"ms_ai103_img/out-69_2.png"
],
"aocr": [
"Answer Area\nOrchestration pattern: v\nThe sequential template that passes outputs node by.node\nApproval checkpoints: Vv"
]
},
{
"n": 80,
"dom": "G",
"case": "",
"type": "MCQ",
"page": 70,
"text": [
"You have a Microsoft Foundry project that contains an agent named Agent1.",
"Agent runs successful, but Foundry Control Plane does NOT display values for error rates, runs, and token usage, and the Traces tab is empty. You need to ensure that Found Control Plane displays the appropriate values for Agent1.",
"What should you do?"
],
"imgs": [],
"ocr": [],
"opts": [
{
"l": "A",
"t": "Update Agent1 to a new version."
},
{
"l": "B",
"t": "Restart Agent from Foundry Control Plan"
},
{
"l": "C",
"t": "Assign to a Log Analytics workspace to Agent1."
},
{
"l": "D",
"t": "Enable Application Insights for Agent1."
}
],
"ans": "D",
"multi": false,
"vote": "D",
"dist": [
"D 100%"
],
"aimgs": [],
"aocr": []
},
{
"n": 81,
"dom": "I",
"case": "",
"type": "MCQ",
"page": 70,
"text": [
"You have a Microsoft Foundry project that contains an agent.",
"The agent uses Azure Content Understanding in Foundry Too to process vendor onboarding packets. The packs include digital PDFs that contain tables and hyperlinks.",
"The extracted content is indexed for search and provided to a downstream agent in the Markdown format.",
"You need to generate a Markdown output that has a layout and a semantic structure optimized for Retrieval Augmented Generation (RAG) workflows.",
"Which built-in analyzer should you use?"
],
"imgs": [],
"ocr": [],
"opts": [
{
"l": "A",
"t": "prebuilt-documentFieldSchema"
},
{
"l": "B",
"t": "prebuilt-documentSearch"
},
{
"l": "C",
"t": "prebuilt-read"
},
{
"l": "D",
"t": "prebuilt-layout"
}
],
"ans": "B",
"multi": false,
"vote": "B",
"dist": [
"B 62%",
"D 38%"
],
"aimgs": [],
"aocr": []
},
{
"n": 82,
"dom": "I",
"case": "",
"type": "MCQ",
"page": 71,
"text": [
"You have a Microsoft Foundry project that contains an agent.",
"The agent uses Azure AI Search for Retrieval Augmented Generation (RAG).",
"You plan to ingest and index PDF product manuals.",
"You need to build a solution that supports semantic similarity matching. The solution must ensure that the agent retrieves relevant data when user questions use different wording than the product manuals.",
"Which indexing approach should you use?"
],
"imgs": [],
"ocr": [],
"opts": [
{
"l": "A",
"t": "vector search"
},
{
"l": "B",
"t": "semantic ranking"
},
{
"l": "C",
"t": "suggesters"
},
{
"l": "D",
"t": "analyzers"
}
],
"ans": "A",
"multi": false,
"vote": "A",
"dist": [
"A 100%"
],
"aimgs": [],
"aocr": []
},
{
"n": 83,
"dom": "I",
"case": "",
"type": "MCQ",
"page": 71,
"text": [
"You have a Microsoft Foundry agent that grounds responses from an Azure Search index that contains the following: • Searchable text fields for product names and product codes • A vector field that stores embeddings for product descriptions You need to ensure that users can query the index by using the following:",
"• Exact product names or codes",
"• Natural language descriptions of the products",
"What should you configure?"
],
"imgs": [],
"ocr": [],
"opts": [
{
"l": "A",
"t": "vector search only"
},
{
"l": "B",
"t": "hybrid search"
},
{
"l": "C",
"t": "keyword search only"
},
{
"l": "D",
"t": "semantic search only"
}
],
"ans": "B",
"multi": false,
"vote": "B",
"dist": [
"B 100%"
],
"aimgs": [],
"aocr": []
},
{
"n": 84,
"dom": "I",
"case": "",
"type": "MCQ",
"page": 72,
"text": [
"You have an Azure AI Search indexer that ingests PDF policy manuals.",
"Client applications must display page-level citations that have bounding polygons for both text and images.",
"You need to add a single built-in multimodal content extraction skill to the Azure AI Search skillset. The solution must meet the following requirements:",
"• Provide text and image location metadata.",
"• Extract tables that span multiple pages.",
"What should you add?"
],
"imgs": [],
"ocr": [],
"opts": [
{
"l": "A",
"t": "Document Extraction"
},
{
"l": "B",
"t": "Azure Content Understanding in Foundry Tools"
},
{
"l": "C",
"t": "GenAI Prompt"
},
{
"l": "D",
"t": "Document Layout"
}
],
"ans": "B",
"multi": false,
"vote": "B",
"dist": [
"B 57%",
"D 43%"
],
"aimgs": [],
"aocr": []
},
{
"n": 85,
"dom": "I",
"case": "",
"type": "MCQ",
"page": 72,
"text": [
"You are building an Azure AI Search indexing pipeline named Pipeline1 that ingests invoices stored in Azure Blob Storage. The invoices are stored as scanned images.",
"You need to enable users to search invoice data across the invoice fields.",
"Which built-in skill should you add to the skillset of Pipeline1?"
],
"imgs": [],
"ocr": [],
"opts": [
{
"l": "A",
"t": "Text Split"
},
{
"l": "B",
"t": "Text Translation"
},
{
"l": "C",
"t": "optical character recognition (OCR)"
},
{
"l": "D",
"t": "Image Analysis"
}
],
"ans": "C",
"multi": false,
"vote": "C",
"dist": [
"C 100%"
],
"aimgs": [],
"aocr": []
},
{
"n": 86,
"dom": "V",
"case": "",
"type": "DRAG DROP",
"page": 73,
"text": [
"You have a Microsoft Foundry project that uses Azure Content Understanding in Foundry Tools to analyze marketing videos. Video segmentation is enabled.",
"You need to configure an analyzer to output a generated JSON field that describes the color scheme of each video segment. How should you configure the analyzer? To answer, drag the appropriate values to the correct targets. Each value may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content."
],
"imgs": [
"ms_ai103_img/out-73_1.png"
],
"ocr": [
"Values\nclassify\ngenerate\ngroup\nstring\ntable\nAnswer Area\nField value type:\nField method:"
],
"opts": [],
"ans": "",
"multi": false,
"vote": "",
"dist": [],
"aimgs": [
"ms_ai103_img/out-73_2.png"
],
"aocr": [
"Answer Area\nField value type:\nField method:\nstring\ngenerate"
]
},
{
"n": 87,
"dom": "V",
"case": "",
"type": "MCQ",
"page": 74,
"text": [
"You have an invoice-processing application named App1 that uses Azure Constant Understanding in Foundry Tools. You are building a new Content Understanding pipeline named Pipeline1 that must meet the following requirements: • Compare an invoice to its related purchase order",
"• Validate the voice against static vendor contact documents • Return a single structured output that includes discrepancy findings You need to configure Pipeline1 and expose the pipeline as a single analyzer endpoint. What should you configure?"
],
"imgs": [],
"ocr": [],
"opts": [
{
"l": "A",
"t": "a single-file task in standard mode that uses the vendor contract provided as an additional document during analysis."
},
{
"l": "B",
"t": "a single-file task in standard mode that uses confidence scores enabled for the extracted fields."
},
{
"l": "C",
"t": "a multiple-file task in pro mode that uses the vendor contract files as reference data"
},
{
"l": "D",
"t": "a multi-file task in standard mode that uses the invoice and purchase order as input to the analyzer"
}
],
"ans": "C",
"multi": false,
"vote": "C",
"dist": [
"C 100%"
],
"aimgs": [],
"aocr": []
},
{
"n": 88,
"dom": "V",
"case": "",
"type": "MCQ",
"page": 74,
"text": [
"You have a Microsoft Foundry project that generates short promotional product videos.",
"After several clips are approved, reviewers notice a small watermark in the top-right corner of some videos.",
"You need to remove the watermark without regenerating the videos.",
"What should you do?"
],
"imgs": [],
"ocr": [],
"opts": [
{
"l": "A",
"t": "Modify the original prompt to exclude watermarks."
},
{
"l": "B",
"t": "Crop the video by using the size parameter."
},
{
"l": "C",
"t": "Increase the guidance scale."
},
{
"l": "D",
"t": "Apply a mask-based inpainting edit to the affected part of the video."
}
],
"ans": "D",
"multi": false,
"vote": "D",
"dist": [
"D 100%"
],
"aimgs": [],
"aocr": []
},
{
"n": 89,
"dom": "V",
"case": "",
"type": "MCQ",
"page": 75,
"text": [
"You have a web app named App1 that sends requests to a multimodal chat model deployment in a Microsoft Foundry project. User messages can contain both text and images.",
"Currently, App1 includes image URL: as plain text inside the message content so the model cannot recognize them as images. Traces show that the requests contain a single text message instead of a multimodal content array.",
"You need to send the message as a structured array that includes both the text portion and the image reference to ensure that the model can process the image correctly.",
"What should you do?"
],
"imgs": [],
"ocr": [],
"opts": [
{
"l": "A",
"t": "Set the user message content array to include items that have type: text and type: image_url."
},
{
"l": "B",
"t": "Encode the image to base64 and include the encoded data inside the content string of the user message."
},
{
"l": "C",
"t": "Add the image URL to the request metadata section, so the model can resolve the processing issue automatically."
},
{
"l": "D",
"t": "Place the image URL inside the System Message and set type to image_url so the model loads the image at initialization."
}
],
"ans": "A",
"multi": false,
"vote": "A",
"dist": [
"A 100%"
],
"aimgs": [],
"aocr": []
},
{
"n": 90,
"dom": "T",
"case": "",
"type": "MCQ",
"page": 75,
"text": [
"You are building a customer support web app named App1 in Microsoft Foundry that uses a GPT realtime model.",
"App1 must support:",
"• Live, low-latency voice conversations that use Azure OpenAI • Streaming audio input from users and playback audio responses You need to configure a connection method that supports real-time audio streaming in client application and targets approximately 100 ms latency.",
"Which connection method should you use?"
],
"imgs": [],
"ocr": [],
"opts": [
{
"l": "A",
"t": "RTMP"
},
{
"l": "B",
"t": "WebRTC"
},
{
"l": "C",
"t": "SIP"
},
{
"l": "D",
"t": "WebSocket"
}
],
"ans": "B",
"multi": false,
"vote": "B",
"dist": [
"B 100%"
],
"aimgs": [],
"aocr": []
},
{
"n": 91,
"dom": "G",
"case": "",
"type": "MCQ",
"page": 76,
"text": [
"You have a Microsoft Foundry project that contains an agent and uses a GitHub repository. The repository contains a YAM file named File1 that defines the evaluation settings of the agent.",
"You need to create a GitHub Actions workflow that runs the evaluation defined in File1 when a pull request (PR) is opened. How should you configure the workflow?"
],
"imgs": [],
"ocr": [],
"opts": [
{
"l": "A",
"t": "Set project-endpoint to the endpoint of the project."
},
{
"l": "B",
"t": "Set evaluation-config to the path of the YAML file."
},
{
"l": "C",
"t": "Set model-deployment-name to the deployed model."
},
{
"l": "D",
"t": "Set tenant-id to the Microsoft Entra tenant ID"
}
],
"ans": "B",
"multi": false,
"vote": "B",
"dist": [
"B 100%"
],
"aimgs": [],
"aocr": []
},
{
"n": 92,
"dom": "P",
"case": "",
"type": "HOTSPOT",
"page": 77,
"text": [
"You have a Microsoft Foundry project that contains an agent.",
"The agent uses a stored access key to retrieve secrets from an Azure key vault, which violates a keyless-credentials requirement. You need to ensure that the agent can retrieve the secrets. The solution must follow the principle of least privilege. What should you configure? To answer, select the appropriate options in the answer area."
],
"imgs": [
"ms_ai103_img/out-77_1.png"
],
"ocr": [
"Answer Area\nManaged identity scope: v\nEnable a system-assigned managed identity at the Foundry level\nEnable a system-assigned managed identity at the project level.\nCreate a service principal and store the principal's client secret.\nKey Vault authorization method: Vv\n‘Add an API key to application settings.\nAdd a Key Vault access policy for the secrets.\nAssign the Key Vault Secrets User role to the managed identity"
],
"opts": [],
"ans": "",
"multi": false,
"vote": "",
"dist": [],
"aimgs": [
"ms_ai103_img/out-77_2.png"
],
"aocr": [
"Answer Area\nManaged identity scope: v.\n[Enable a system-assigned managed identity at the project level\nKey Vault authorization method Vv\n‘Add an API key to application setings.\nAssign the Key Vaut Secrets User role to the managed 1dentty"
]
},
{
"n": 93,
"dom": "P",
"case": "",
"type": "HOTSPOT",
"page": 78,
"text": [
"You have a Microsoft Foundry project that contains a customer support application.",
"You create an evaluation named Run1 that has the following configurations:",
"• Includes risk and safety metrics",
"• Includes the protected material evaluation",
"• Includes harmful content metrics that use a medium severity threshold You create an evaluation named Run2 that has the following configurations:",
"• Includes risk and safety metrics",
"• Includes the protected material evaluation",
"• Includes harmful content metrics that use a high severity threshold You run both evaluations against a dataset named DB1 and receive the following results:",
"• Content harm defect rate of Run1: 12%",
"• Content harm defect rate of Run2: 4%",
"• Protected material evaluation of Run1: 6%",
"• Protected material evaluation of Run1: 6%",
"You start a fine-tuning job by using DB1. The job fails during automatic RAI checks for multiple content harm types. You discover that the content filtering configuration is set to high severity.",
"For each of the following statements, select Yes if the statement is true. Otherwise, select No."
],
"imgs": [
"ms_ai103_img/out-78_1.png"
],
"ocr": [
"Answer Area\nStatements Yes\nChanging the content filtering configuration to low severity will resove °\nthe fine-tuning job issues.\nThe difference between the 12% and 4% content harm defect rate Oo\nis consistent with the different severity thresholds used in Run1 and Run2.\nThe identical 6% protected material evaluation values across Run1 and Run2 6\nindicate that this metric is unaffected by the change in the severity threshold,\nNo"
],
"opts": [],
"ans": "",
"multi": false,
"vote": "",
"dist": [],
"aimgs": [
"ms_ai103_img/out-78_2.png"
],
"aocr": [
"Answer Area\nStatements Yes No\n‘Changing the content filtering configuration to low severity will resolve\nthe fine-tuning job issues.\nThe difference between the 12% and 4% content harm defect rate\nis consistent with the different severity thresholds used in Run1 and Run2.\nThe identical 6% protected material evaluation values across Run1 and Run2\nindicate that this metric is unaffected by the change in the severity threshold."
]
},
{
"n": 94,
"dom": "P",
"case": "",
"type": "DRAG DROP",
"page": 79,
"text": [
"You have a Microsoft Foundry project that contains a multi-agent solution. The agents use tool calling to query internal systems. You need to implement responsible AI auditing to meet the following requirements:",
"• Capture all the nested operations across the entire agent run.",
"• Record tool invocation arguments and retuned results as metadata.",
"What should you use for each requirement? To answer, drag the appropriate options to the correct targets Each option may be used once, more than once, or not at all. You may need o dag the split bar between panes or scroll to view content."
],
"imgs": [
"ms_ai103_img/out-79_1.png"
],
"ocr": [
"Options Answer Area\nHierarchical spans\nAKQL query filter_| Capture all the nested operations\nacross the entire agent run:\nSampling\nRecord tool invocation arguments\nand results:\nTool call attributes\nTrace sampling policy"
],
"opts": [],
"ans": "",
"multi": false,
"vote": "",
"dist": [],
"aimgs": [
"ms_ai103_img/out-79_2.png"
],
"aocr": [
"Answer Area\nCapture all the nested operations\nacross the entire agent run:\nRecord tool invocation arguments\nand results:\nHierarchical spans\nTool call attributes"
]
},
{
"n": 95,
"dom": "P",
"case": "",
"type": "DRAG DROP",
"page": 80,
"text": [
"You have a Microsoft Foundry project that contains an agent. The agent uses threads and file uploads and calls an Azure OpenAI model deployment.",
"During load testing, calls intermittently fall and return an HTTP 429 rate limit exceeded error. Some user uploads fail and generate an HTTP 400 file size exceeded error.",
"You need to mitigate the errors and reduce call failures. The solution must remain within the service and model limits. What should you do to resolve each error? To answer, drag the appropriate actions to the correct errors. Each action may be used once, more than once or not at all. You may need to drag the split bar between panes or scroll to view content.",
"NOTE: Each comet selection is worth one point."
],
"imgs": [
"ms_ai103_img/out-80_1.png"
],
"ocr": [
"Actions\nIncrease tenant-wide quotas.\nMove large content to files\nand use file search.\nUse additional agent tools\nto reduce the message size.\nImplement exponential backoff\nand jitter in the retry logic.\nSplit content into smaller files\nbefore uploading the files.\nAnswer Area\nHTTP 429:\nHTTP 400:"
],
"opts": [],
"ans": "",
"multi": false,
"vote": "",
"dist": [],
"aimgs": [
"ms_ai103_img/out-80_2.png"
],
"aocr": [
"Answer Area\nHTTP 429:\nHTTP 400:\nImplement exponential backoff\nand jitter in the retry logic.\nSplit content into smaller files\nbefore uploading the files."
]
},
{
"n": 96,
"dom": "P",
"case": "",
"type": "MCQ",
"page": 81,
"text": [
"You have a Microsoft Foundry project.",
"You need to deploy a model from the model catalog to support a search solution for internal policy documents. The model must generate vector representations of the text in the documents and of user queries.",
"Which type of model should you use?"
],
"imgs": [],
"ocr": [],
"opts": [
{
"l": "A",
"t": "an embedding model"
},
{
"l": "B",
"t": "an image generation model"
},
{
"l": "C",
"t": "a large language model (LLM)"
},
{
"l": "D",
"t": "a small language model (SLM)"
}
],
"ans": "A",
"multi": false,
"vote": "A",
"dist": [
"A 100%"
],
"aimgs": [],
"aocr": []
},
{
"n": 97,
"dom": "P",
"case": "",
"type": "MCQ",
"page": 81,
"text": [
"You have a Microsoft Foundry project.",
"You need to deploy a model from the model catalog to support real-time inference. The solution must meet the following requirements: • Use key-based authentication.",
"• Support real-time REST API access.",
"• NOT consume the vCPU quota of the virtual machines in the Azure subscription.",
"Which type of deployment should you use?"
],
"imgs": [],
"ocr": [],
"opts": [
{
"l": "A",
"t": "serverless API"
},
{
"l": "B",
"t": "batch"
},
{
"l": "C",
"t": "self-hosted container"
},
{
"l": "D",
"t": "standard"
}
],
"ans": "A",
"multi": false,
"vote": "A",
"dist": [
"A 100%"
],
"aimgs": [],
"aocr": []
},
{
"n": 98,
"dom": "P",
"case": "",
"type": "HOTSPOT",
"page": 82,
"text": [
"You plan to create a Microsoft Foundry project named Project1 that will contain an agent and use an Azure key vault named KV1. You need to configure a connection from Project1 to KV1.",
"How should you complete the Bicep code? To answer, select the appropriate options in the answer area?"
],
"imgs": [
"ms_ai103_img/out-82_1.png"
],
"ocr": [
"Answer Area\nresource existingKeyVault ‘Microsoft. KeyVault/vaults@2024-11-01\"\nexisting = {\nname: ‘KV1\"\nscope: resourceGroup ()\n,\nresource connection\n‘Microsoft . CognitiveSevices/accounts/connections@2025-04-01-\npreview’\nname: *${aiFoundryName}-keyvault’\nparent: aiFoundry\nproperties: {\ncategory: v\n“AzureAlService™\n“AzureKeyVault\n“AzureOpenAl’\ntarget: existingKeyvault.id\nauthType:\nBV\n“AccountKey”\n“AccountManagedidentity’\n“ApiKey’\nisSharedToAll:\nmetadata: {\nApifype: ‘Azure’\nResourceld: existingKeyVault.id\nlocation: existingKeyVault.location"
],
"opts": [],
"ans": "",
"multi": false,
"vote": "",
"dist": [],
"aimgs": [
"ms_ai103_img/out-83_1.png"
],
"aocr": [
"Answer Area\nresource existingKeyvault ‘Microsoft.Keyvault/vaults@2024-11-01\"\nexisting = {\nname: ‘KV1\"\nscope: resourceGroup ()\ny\nresource connection\n‘Microsoft .CognitiveSevices/accounts/connections@2025-04-01-\npreview’ ={\nname: ‘${aiFoundryName}-keyvault’\nparent: aiFoundry\nproperties: {\ncategory:\ntarget: existingkeyvault.id\nauthType:\nVv\n[AccountManagedidentity’\nDS\nisSharedToal.\nmetadata: {\nApifype: ‘Azure’\nResourced: existingKeyVvault.id\nlocation: existingkeyvault.location"
]
},
{
"n": 99,
"dom": "G",
"case": "",
"type": "HOTSPOT",
"page": 84,
"text": [
"You have a Microsoft Foundry project.",
"You need to create a customer support agent that meets the following requirements:",
"• Grounds responses only in company policy documents stored in curated repositories • Retains customer preferences across separate chat sessions How should you configure the agent? To answer, select the appropriate options in the answer area."
],
"imgs": [
"ms_ai103_img/out-84_1.png"
],
"ocr": [
"Answer Area\nKnowledge grounding: Vv\nConfigure revival from approved data sources.\nUpload the policy documents direct to the agent.\nEmbed the policy documents directly into the agent instructions.\nMemory:\nVv\nUse orchestration-managed session context.\nEnable agent memory that uses persistent storage.\nRetain user preferences in the state of the client application"
],
"opts": [],
"ans": "",
"multi": false,
"vote": "",
"dist": [],
"aimgs": [
"ms_ai103_img/out-84_2.png"
],
"aocr": [
"Answer Area\nKnowledge grounding v\nUpload the policy documents direct to the agent.\nEmbed the policy documents directly into the agent instructions.\nMemory: v"
]
},
{
"n": 100,
"dom": "G",
"case": "",
"type": "MCQ",
"page": 85,
"text": [
"You have a Microsoft Foundry project that contains an agent. The agent generates summaries from retrieved policy documents. You need to improve response completeness. The solution must be implemented in the logic of the application code before responses are returned.",
"What should you do?"
],
"imgs": [],
"ocr": [],
"opts": [
{
"l": "A",
"t": "Add a retry evaluation before the responses are returned."
},
{
"l": "B",
"t": "Decrease the value of the temperature parameter."
},
{
"l": "C",
"t": "Increase the value of the presence_penalty parameter"
},
{
"l": "D",
"t": "Replace the model with a smaller deployment."
}
],
"ans": "A",
"multi": false,
"vote": "A",
"dist": [
"A 100%"
],
"aimgs": [],
"aocr": []
},
{
"n": 101,
"dom": "V",
"case": "",
"type": "HOTSPOT",
"page": 86,
"text": [
"You develop a test method to verify the results retrieved from a call to the Azure Vision in Foundry Tools API. The call is used to analyze the existence of company logos in images. The call returns a collection of brands named brands.",
"You have the following code segment:",
"For each of the following statements, select Yes if the statement is true. Otherwise, select No."
],
"imgs": [
"ms_ai103_img/out-86_1.png",
"ms_ai103_img/out-86_2.png"
],
"ocr": [
"for brand in image_analysis.brands:\nif brand.confidence >= 0.75:\nprint (£”\\nLogo of {brand.name} between\n{brand.rectangle.x}, {brand.rectangle.y} and {brand.rectangle.w},\n{brand.rectangle.h}”)",
"Answer Area\nStatements\nThe code will display the name of each detected brand\nwith a confidence equal to or higher than 75 percent.\nThe code will display coordinates for the top-left corer\nof the rectangle that contains the brand logo of the displayed brands.\nThe code will display coordinates for the bottom-right corner\nof the rectangle that contains the brand logo of the displayed brands.\nYes\nNo"
],
"opts": [],
"ans": "",
"multi": false,
"vote": "",
"dist": [],
"aimgs": [
"ms_ai103_img/out-86_3.png"
],
"aocr": [
"Answer Area\nStatements\nThe code will display the name of each detected brand\nwith a confidence equal to or higher than 75 percent.\nThe code will display coordinates for the top-left corer\nof the rectangle that contains the brand logo of the displayed brands.\nThe code will display coordinates for the bottom-right corner\nof the rectangle that contains the brand logo of the displayed brands.\nYes\no Og"
]
},
{
"n": 102,
"dom": "P",
"case": "",
"type": "MCQ",
"page": 87,
"text": [
"You have an Azure subscription.",
"You plan to build an app that will use the Azure AI DALL-E model.",
"You need to deploy the model.",
"What should you use?"
],
"imgs": [],
"ocr": [],
"opts": [
{
"l": "A",
"t": "the Azure SDK for Python and PowerShell cmdlets."
},
{
"l": "B",
"t": "the Azure SDK for JavaScript and Azure Machine Learning Studio."
},
{
"l": "C",
"t": "Microsoft Foundry and the Azure Command Line Interface (CLI)"
},
{
"l": "D",
"t": "the Azure portal and Microsoft Graph API"
}
],
"ans": "C",
"multi": false,
"vote": "C",
"dist": [
"C 100%"
],
"aimgs": [],
"aocr": []
},
{
"n": 103,
"dom": "P",
"case": "",
"type": "HOTSPOT",
"page": 88,
"text": [
"You have an Azure subscription.",
"You need to create a new resource that will generate fictional stores in response to user prompts. The solution must ensure that the resource uses a customer-managed key to protect data.",
"How should you complete the script? To answer, select the appropriate options in the answer area."
],
"imgs": [
"ms_ai103_img/out-88_1.png"
],
"ocr": [
"Answer Area\naz cognitiveservices account create -n myresource -g\nmyResourceGroup --kind\nW --sku § -1 WestEurope\nAlServices\nLanguageAuthoring\nOpenAl\nwl:\n--api-properties\n—-assign-identity\n--encryption\n“keySource”: “Microsoft.KeyVault”,\n“keyVaultProperties”: {\n“keyName”: “KeyName”,\n“keyVersion”: “secretVersion”,\n“keyVaultUri”: “https: //issue23056kv.vault.azure.net/”\n+"
],
"opts": [],
"ans": "",
"multi": false,
"vote": "",
"dist": [],
"aimgs": [
"ms_ai103_img/out-88_2.png"
],
"aocr": [
"Answer Area\naz cognitiveservices account create -n myresource -g\nmyResourceGroup --kind WW) --sku 5 -1 westEurope\nAlServices\nLanguageAuthoring\nwt\n“keySource”: “Microsoft .Keyvault”,\n“keyVaultProperties”: {\n“keyName”: “KeyName”,\n“keyVersion”: “secretVersion”,\n“keyVaultUri”: “https: //issue23056kv.vault.azure.net/”\n+"
]
},
{
"n": 104,
"dom": "P",
"case": "",
"type": "HOTSPOT",
"page": 89,
"text": [
"You have a Python application collects customer comments before posting them to a public forum.",
"You need to send a text comment to Azure AI Content Safety and return the self-harm severity from the response. How should you complete the code? To answer, select the appropriate options in the answer area."
],
"imgs": [
"ms_ai103_img/out-89_1.png"
],
"ocr": [
"Answer Area\ndef get_self_harm_severity (comment: str) -> int:\nkey = 05.environ[“CONTENT_SAFETY_KEY”]\nendpoint = os.environ\n[“CONTENT_SAFETY_ENDPOINT”]\nclient = ContentSafetyClient (endpoint,\nAzureKeyCredential (key) )\nrequest =\n= v\n‘AnalyzeTextOptions(categories=comment)\nAnalyzeTextOptions(text=[comment])\nAnalyzeTextOptions(text=comment)\nTextCategory. SELF_HARM(comment)\nresponse =\nv\nclient. analyze_image(request)\nclient analyze_text(request)\nclient moderate_text(request)\nclient path(‘itext-analyze\") post(request)\nresult = next (\nitem for item in response.categories analysis\nif item.category == TextCategory.SELF_HARM\nd\nreturn result.severity"
],
"opts": [],
"ans": "",
"multi": false,
"vote": "",
"dist": [],
"aimgs": [
"ms_ai103_img/out-89_2.png"
],
"aocr": [
"Answer Area\ndef get_self_harm severity (comment: str) -> int:\nkey = 05.environ[“CONTENT_SAFETY_KEY”]\nendpoint = os.environ\n[“CONTENT_SAFETY_ENDPOINT”]\nclient = ContentSafetyClient (endpoint,\nAzureKeyCredential (key) )\nrequest\nv\nAnalyzeTextOptions(calegories-comment)\nresponse =\nSi)\nclient path('Rextanalyze\") post(request)\nresult = next (\nitem for item in response.categories analysis\nif item.category == TextCategory.SELF_HARM\nd\nreturn result.severity"
]
},
{
"n": 105,
"dom": "T",
"case": "",
"type": "MCQ",
"page": 90,
"text": [
"You have a custom named entity recognition (NER) project in Azure Language in Foundry Tools for support tickets. The schema for the project contains an entity type named ContactInfo.",
"In tagged training files, ContactInfo is used for phone numbers, email addresses, and social media handles.",
"Model evaluation shows low precision for ContactInfo, including false positives in which nearby text is extracted as ContactInfo. You need to improve the precision of the project.",
"What should you do before retraining the model?"
],
"imgs": [],
"ocr": [],
"opts": [
{
"l": "A",
"t": "Lower the confidence threshold for ContactInfo."
},
{
"l": "B",
"t": "Trigger an auto-labeling job."
},
{
"l": "C",
"t": "Add more support tickets as training data and label more ContactInfo entities."
},
{
"l": "D",
"t": "Replace ContactInfo by using Phone, Email, and SocialMedia entities. Relabel every matching span."
}
],
"ans": "D",
"multi": false,
"vote": "D",
"dist": [
"D 100%"
],
"aimgs": [],
"aocr": []
},
{
"n": 106,
"dom": "T",
"case": "",
"type": "MCQ",
"page": 90,
"text": [
"You are building a text-to-speech solution that uses Azure Speech in Foundry Tools to read instructions from the script in a text file. You discover that the solution often pronounces technical terms incorrectly.",
"You need to prevent the incorrect pronunciations. The solution must minimize development effort.",
"What should you do?"
],
"imgs": [],
"ocr": [],
"opts": [
{
"l": "A",
"t": "From Speech Studio, train a custom neural voice"
},
{
"l": "B",
"t": "Use Speech Synthesis Markup Language (SSML) to specify phonemes."
},
{
"l": "C",
"t": "Use Speech Synthesis Markup Language (SSML) to apply say as rules."
},
{
"l": "D",
"t": "Use Speech Synthesis Markup Language (SSML) to adjust the prosody of the voice."
},
{
"l": "E",
"t": "From Azure OpenAI use the Whisper model."
}
],
"ans": "B",
"multi": false,
"vote": "B",
"dist": [
"B 100%"
],
"aimgs": [],
"aocr": []
},
{
"n": 107,
"dom": "T",
"case": "",
"type": "HOTSPOT",
"page": 91,
"text": [
"You have a Python application that redacts sensitive information before sending prompt text to a language model. The application has the following code:",
"For each of the following statements, select Yes if the statement is true. Otherwise, select No."
],
"imgs": [
"ms_ai103_img/out-91_1.png",
"ms_ai103_img/out-91_2.png"
],
"ocr": [
"sample_text = “Contact John Doe at 312-555-1234 or\njohn.doe@contoso.com. His SSN is 859-98-0987.”\ndef redact_for_model (input_text)\npayload = {\n“kind”: “PiiEntityRecognition”,\n“parameters”: {\n“modelversion’\n“piicategories”\n“redactionPolicies”\n‘\n“latest”,\n[“Person”, “PhoneNumber”],\nC\n“policyKind”: “entityMask”\n1\nBe\n“analysisInput”: {\n“documents”: [\n{\nMia”: “1,\n“language”\n“text”: input_text\n}\nreturn {\n“text for model”: doc.get (“redactedText”, “”)\n“audit”: [\n(entity[“text”], entity[“category”], entity\n[*confidencescore”])\nfor entity in doc[“entities”]\n1\n+\nresult = redact_for_model(sample_text)",
"Answer Area\nStatements\nForsample_text, audit willinclude entity records\nfor Contact and SSN.\nFor sample text, text_for_model will include\njohn.doe@contoso.com and 859-98-0987.\nFor sample text, text for _model will contain enti\nmasks for John Doe and 312-555-1234.\nYes\ne}\n°\nivype\nNo"
],
"opts": [],
"ans": "",
"multi": false,
"vote": "",
"dist": [],
"aimgs": [
"ms_ai103_img/out-92_1.png"
],
"aocr": [
"Answer Area\nStatements Yes No\nFor sample_text, audit willinclude entity records ° QO\nfor Contact and SSN.\nForsample_text, text_for_mode1 will include QO °\njohn.doe@contoso.com and 859-98-0987.\nForsample text, text for_nodel willcontainentiyype FEY 6\nmasks for John Doe and 312-555-1234."
]
},
{
"n": 108,
"dom": "V",
"case": "",
"type": "DRAG DROP",
"page": 92,
"text": [
"You are developing an application that will detect faulty components produced on a factory production line. The components are specific to your business.",
"You need to use the Azure Custom Vision API to help detect common faults.",
"Which three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order."
],
"imgs": [
"ms_ai103_img/out-92_2.png"
],
"ocr": [
"Actions\nInitialize the training dataset.\nTrain the classifier model.\nCreate a project.\nUpload and tag images.\nTrain the object detection model.\nAnswer Area"
],
"opts": [],
"ans": "",
"multi": false,
"vote": "",
"dist": [],
"aimgs": [
"ms_ai103_img/out-92_3.png"
],
"aocr": [
"Answer Area\n4 | Create a project\n2 |Upload and tag images.\n3 | Train the object detection model."
]
},
{
"n": 109,
"dom": "P",
"case": "",
"type": "MCQ",
"page": 93,
"text": [
"You are developing a new sales system that will process user-generated video and text from a public-facing website. You plan to notify users that their data has been processed by the sales system.",
"Which responsible AI principle does this help meet?"
],
"imgs": [],
"ocr": [],
"opts": [
{
"l": "A",
"t": "fairness"
},
{
"l": "B",
"t": "transparency"
},
{
"l": "C",
"t": "inclusiveness"
},
{
"l": "D",
"t": "reliability and safety"
}
],
"ans": "B",
"multi": false,
"vote": "B",
"dist": [
"B 100%"
],
"aimgs": [],
"aocr": []
},
{
"n": 110,
"dom": "T",
"case": "",
"type": "MCQ",
"page": 93,
"text": [
"You are designing a content management system.",
"You need to ensure that the reading experience is optimized for users who have reduced comprehension and learning differences, such as dyslexia. The solution must minimize development effort.",
"Which Azure service should you include in the solution?"
],
"imgs": [],
"ocr": [],
"opts": [
{
"l": "A",
"t": "Azure Document Intelligence in Foundry Tools"
},
{
"l": "B",
"t": "Azure Language in Foundry Tools"
},
{
"l": "C",
"t": "Azure AI Immersive Reader"
},
{
"l": "D",
"t": "Azure Translator in Foundry Tools"
}
],
"ans": "C",
"multi": false,
"vote": "C",
"dist": [
"C 100%"
],
"aimgs": [],
"aocr": []
},
{
"n": 111,
"dom": "P",
"case": "",
"type": "MCQ",
"page": 94,
"text": [
"You have an Azure subscription that contains an Azure App Service app named App1.",
"You provision a Microsoft Foundry Service resource named CSAccount1.",
"You need to configure App1 to access CSAccount1. The solution must minimize administrative effort.",
"What should you use to configure App1?"
],
"imgs": [],
"ocr": [],
"opts": [
{
"l": "A",
"t": "the endpoint URI and subscription key"
},
{
"l": "B",
"t": "the endpoint URI and an OAuth token"
},
{
"l": "C",
"t": "the endpoint URI and a shared access signature (SAS) token"
},
{
"l": "D",
"t": "a system assigned managed identity and an X.509 certificate"
}
],
"ans": "A",
"multi": false,
"vote": "A",
"dist": [
"A 100%"
],
"aimgs": [],
"aocr": []
},
{
"n": 112,
"dom": "P",
"case": "",
"type": "DRAG DROP",
"page": 95,
"text": [
"You have a web app that uses Azure AI Search.",
"When reviewing activity you see greater than expected search query volumes. You suspect that the query key is compromised. You need to prevent unauthorized access to the search endpoint and ensure that users only have read only access to the documents collection. The solution must minimize app downtime.",
"Which three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order."
],
"imgs": [
"ms_ai103_img/out-95_1.png"
],
"ocr": [
"Actions\nRegenerate the primary\nadmin key\nRegenerate the secondary\nadmin key\nChange the app to use\nthe secondary admin key\nAdd a new query key\nChange the app to use\nthe new key\nDelete the compromised\nkey\nAnswer Area"
],
"opts": [],
"ans": "",
"multi": false,
"vote": "",
"dist": [],
"aimgs": [
"ms_ai103_img/out-95_2.png"
],
"aocr": [
"Answer Area\nDelete the compromised\nkey\nAdd a new query key\nChange the app to use\n3 the new key"
]
},
{
"n": 113,
"dom": "P",
"case": "",
"type": "HOTSPOT",
"page": 96,
"text": [
"You need to create a new resource that will be used to perform sentiment analysis and optical character recognition (OCR). The solution must meet the following requirements:",
"• Use a single key and endpoint to access multiple services.",
"• Consolidate billing for future services that you might use.",
"• Support the use of Azure Vision in Foundry Tools in the future.",
"How should you complete the HTTP request to create the new resource? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point."
],
"imgs": [
"ms_ai103_img/out-96_1.png"
],
"ocr": [
"Answer Area\nYY https: //management .azure.com/subscriptions/\nPATCH [XXKXAKRARRAA—KAAK KARE\nPost XXKXXXKXAXKX/resourceGroups/RGL\nPUT\n/providers/Microsoft .CognitiveService/accounts/CS1?api-\nversion=2021-04-30\n{\n“location”: “West US”,\n“kind”: “ ~\nvy”\nCognitiveServices\nComputerVision\nTextAnalytics\n“sku: {\n“name”: “SO”\n“properties”\n“identity\n“type”: “SystemAssigned”\nthe\n}"
],
"opts": [],
"ans": "",
"multi": false,
"vote": "",
"dist": [],
"aimgs": [
"ms_ai103_img/out-96_2.png"
],
"aocr": [
"Answer Area\nWy https: //management .azure.com/subscriptions/\nXMXXXXXN-AARR-NRKA- RRA\nXXXXXXXXKAXK/resourceGroups/RG1\n/providers/Microsoft .CognitiveService/accounts/CS1?api-\nversion=2021-04-30\n{\n“location”: “West US”,\n“kinds\n“properties”\n“identity”: {\n“type”: “SystemAssigned”\nthr\n}"
]
},
{
"n": 114,
"dom": "V",
"case": "",
"type": "HOTSPOT",
"page": 97,
"text": [
"You are building a model to detect objects in images.",
"The performance of the model based on training data is shown in the following exhibit.",
"Use the drop-down menus to select the answer choice that completes each statement based on the information presented in the graphic. NOTE: Each correct selection is worth one point."
],
"imgs": [
"ms_ai103_img/out-97_1.png",
"ms_ai103_img/out-97_2.png"
],
"ocr": [
"® Objects Training Images Performance Predictions Ea | v Quick Test\n© | Iterations v Publish Prediction URL ® Delete » Export\nProbability Threshold: 50%) Iteration 1\n—==\nOverlap Threshold:30% Finished training on 18/02/2022, 17:08:38 using General domain\nIteration id: eedf9f1a-1a9f-4d98-bf2c-ffc28bd8cae1\nPrecision © Recall © mAP ©\n25.0%",
"Answer Area\nThe percentage of false positives is:\nThe value for the number of true positives divided\nby the total number of true positives and false negatives is:"
],
"opts": [],
"ans": "",
"multi": false,
"vote": "",
"dist": [],
"aimgs": [
"ms_ai103_img/out-98_1.png"
],
"aocr": [
"Answer Area\nThe percentage of false positives is:\nThe value for the number of true positives divided\nby the total number of true positives and false negatives is:"
]
},
{
"n": 115,
"dom": "I",
"case": "",
"type": "MCQ",
"page": 98,
"text": [
"You are developing an application that will use Azure AI Search for internal documents.",
"You need to implement document-level filtering for Azure AI Search.",
"Which three actions should you include in the solution? Each correct answer presents part of the solution.",
"NOTE: Each correct selection is worth one point."
],
"imgs": [],
"ocr": [],
"opts": [
{
"l": "A",
"t": "Add allowed groups to each index entry"
},
{
"l": "B",
"t": "Create one index per group."
},
{
"l": "C",
"t": "Send access tokens from Microsoft Entra ID, with the search request."
},
{
"l": "D",
"t": "Retrieve all the groups."
},
{
"l": "E",
"t": "Retrieve the group memberships of the user"
},
{
"l": "F",
"t": "Supply the groups as a filter for the search requests"
}
],
"ans": "AEF",
"multi": true,
"vote": "",
"dist": [
"AEF 100%"
],
"aimgs": [],
"aocr": []
},
{
"n": 116,
"dom": "I",
"case": "",
"type": "MCQ",
"page": 99,
"text": [
"You have an Azure AI Search indexer that ingest PDF policy manuals.",
"Client applications must display page-level citations that have bounding polygons for both text and images.",
"You need to add a single built-in multimodal content extraction skill to the Azure AI Search skillset. The solution must meet the following requirements:",
"• Provide text and image location metadata.",
"• Extract tables that span multiple pages.",
"What should you add?"
],
"imgs": [],
"ocr": [],
"opts": [
{
"l": "A",
"t": "Document Layout"
},
{
"l": "B",
"t": "Document Extraction"
},
{
"l": "C",
"t": "Azure Content Understanding"
},
{
"l": "D",
"t": "GenAI Prompt"
}
],
"ans": "C",
"multi": false,
"vote": "C",
"dist": [
"A 44%",
"C 56%"
],
"aimgs": [],
"aocr": []
},
{
"n": 117,
"dom": "I",
"case": "",
"type": "HOTSPOT",
"page": 100,
"text": [
"You are creating an enrichment pipeline that will use Azure AI Search. The knowledge store contains unstructured JSON data and the text from scanned PDF documents.",
"Which projection type should you use for each data type? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point."
],
"imgs": [
"ms_ai103_img/out-100_1.png"
],
"ocr": [
"Answer Area\nJSON data:\nExtracted text data:\nVv\nFile projection\nObject projection\nTable projection\nVv\nFile projection\nObject projection\nTable projection"
],
"opts": [],
"ans": "",
"multi": false,
"vote": "",
"dist": [],
"aimgs": [
"ms_ai103_img/out-100_2.png"
],
"aocr": [
"Answer Area\nJSON data v\n\"able projection\nExtracted text data: Vv\nObject projection\nTable projection"
]
},
{
"n": 118,
"dom": "V",
"case": "",
"type": "HOTSPOT",
"page": 101,
"text": [
"You are building a custom vision model that will be deployed as part of an iOS app.",
"You have images of cats and dogs. Each image contains either a cat or a dog.",
"You need to use the Azure Custom Vision service to detect whether the image is of a cat or a dog.",
"How should you configure the project in the Azure Custom Vision portal? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point."
],
"imgs": [
"ms_ai103_img/out-101_1.png"
],
"ocr": [
"Project Types:\nClassification Types:\nDomains:\nClassification\nObject Detection\nMulticlass (Single tag per image)\nMultilabel (Multiple tags per image)\nAdult\nFood\nGeneral\nGeneral (compact)\nLandmarks\nLandmarks (compact)\nRetail\nRetail (compact)"
],
"opts": [],
"ans": "",
"multi": false,
"vote": "",
"dist": [],
"aimgs": [
"ms_ai103_img/out-102_1.png"
],
"aocr": [
"Project Types:\nClassification Types:\n[classification\nObject Detection\nMult\nlass (Single tag per image)\nMultilabel (Multiple tags per image)\nDomains:\nAdult\nFood\nGeneral\n‘General (compact)\nLandmarks\nLandmarks (compact)\nRetail\n| Retail compact)"
]
},
{
"n": 119,
"dom": "G",
"case": "",
"type": "MCQ",
"page": 102,
"text": [
"You have a Microsoft Foundry project that contains an agent. The agent has a Model Context Protocol (MCP) tool named kbsearch that queries a knowledge base stored in Azure AI Search.",
"Some agent runs return answers from the base model without invoking the knowledge base, which results in responses without grounded citations.",
"You are provided with the following code snippet that runs the agent.",
"You need to deterministically force the agent to invoke kbsearch on each run.",
"What should you do?"
],
"imgs": [
"ms_ai103_img/out-102_2.png"
],
"ocr": [
"run = project_client.agents.runs.create_and_process(\nthread_id=thread.id,\nagent_id=agent.id"
],
"opts": [
{
"l": "A",
"t": "Add the response_format parameter to the create_and_process() method call."
},
{
"l": "B",
"t": "Replace create_and_process() method with the create_thread_and_process_run() method."
},
{
"l": "C",
"t": "Add the toolset parameter to the create_and_process() method call."
},
{
"l": "D",
"t": "Add the tool_choice parameter to the create_and_process() method call."
}
],
"ans": "D",
"multi": false,
"vote": "D",
"dist": [
"D 100%"
],
"aimgs": [],
"aocr": []
},
{
"n": 120,
"dom": "T",
"case": "",
"type": "MCQ",
"page": 103,
"text": [
"You are developing a text processing solution.",
"You have the following function.",
"You call the function and use the following string as the second argument.",
"Our tour of London included a visit to Buckingham Palace",
"What will be the output of the function?"
],
"imgs": [
"ms_ai103_img/out-103_1.png"
],
"ocr": [
"def get_key_words(textAnalyticsclient, text):\nresponse = textAnalyticsClient.recognize entities (documents = [text])[@]\nprint(\"Key Words:\")\nfor entity in response.entities:\nprint(\"\\t\\t\", entity.text)"
],
"opts": [
{
"l": "A",
"t": "London and Buckingham Palace only"
},
{
"l": "B",
"t": "Tour and visit only"
},
{
"l": "C",
"t": "Our tour of London included a visit to Buckingham Palace"
},
{
"l": "D",
"t": "London and Tour only"
}
],
"ans": "A",
"multi": false,
"vote": "A",
"dist": [
"A 100%"
],
"aimgs": [],
"aocr": []
},
{
"n": 121,
"dom": "T",
"case": "",
"type": "HOTSPOT",
"page": 104,
"text": [
"You are building a solution that students will use to find references for essays.",
"You use the following code to start building the solution.",
"For each of the following statements, select Yes is the statement is true. Otherwise, select No."
],
"imgs": [
"ms_ai103_img/out-104_1.png",
"ms_ai103_img/out-104_2.png"
],
"ocr": [
"from azure.core.credentials import AzureKkeyCredential\nfrom azure.ai.textanalytics import TextAnalyticsClient\nendpoint = os.environ[\"AZURE_TEXT_ANALYTICS ENDPOINT\" ]\nkey = os.environ[\"“AZURE_TEXT_ANALYTICS_KEY\"]\ntext_analytics_ client = TextanalyticsClient(endpoint=endpoint, credential=AzurekeyCredential (key))\ndocuments = [\nOur tour guide took us up the Space Needle during our trip to Seattle last week.\nresult = text_analytics_client.recognize_linked_entities(documents)",
"Statements\nThe code will detect the language of documents.\nThe url attribute returned for each linked entity will be a Bing search link.\nThe matches attribute returned for each linked entity will provide the location in a document\nwhere the entity is referenced.\noO"
],
"opts": [],
"ans": "",
"multi": false,
"vote": "",
"dist": [],
"aimgs": [
"ms_ai103_img/out-104_3.png"
],
"aocr": [
"Statements\nThe code wil detect the language of documents\nThe uel attribute returned foreach linked entity willbe a Bing search ink\nThe matches attribute returned foreach inked entity will provide the location in a document\nwhere the entity i referenced,"
]
},
{
"n": 122,
"dom": "P",
"case": "",
"type": "HOTSPOT",
"page": 105,
"text": [
"You have a Microsoft Foundry project for a support ticket triage app that reads ticket text from a database.",
"You need to ensure that the app meets the following requirements:",
"• Compares candidate models by quality, cost, and throughput • Prevents hosting model weights in the Azure subscription",
"What should you configure? To answer, select the appropriate options in the answer area."
],
"imgs": [
"ms_ai103_img/out-105_1.png"
],
"ocr": [
"Model evaluation:\nDeployment option:\nConfigure private endpoint access.\nUse deployment lists and license tabs.\nUse tool catalog connections and run traces.\nUse model catalog leaderboards and model cards.\nBring your own model.\nBuild a vector index.\nUse a serverless deployment.\nUse a managed compute deployment."
],
"opts": [],
"ans": "",
"multi": false,
"vote": "",
"dist": [],
"aimgs": [
"ms_ai103_img/out-105_2.png"
],
"aocr": [
"‘Answer Area\nModel evaluation: [7]\nConfigure private endpoint access.\nUse deployment lists and license tabs.\nUse tool catalog connections and run traces.\nUse model catalog leaderboards and model cards.\nDeployment option: [\nBring your own model.\nBuild a vector index.\nUse a serverless deployment.\nUse a managed compute deployment."
]
},
{
"n": 123,
"dom": "P",
"case": "",
"type": "MCQ",
"page": 106,
"text": [
"You have an Azure subscription.",
"You need to build an app that will compare documents for semantic similarity. The solution must meet the following requirements: • Return numeric vectors that represent the tokens of each document.",
"• Minimize development effort.",
"Which Azure OpenAI model should you use?"
],
"imgs": [],
"ocr": [],
"opts": [
{
"l": "A",
"t": "GPT-3.5"
},
{
"l": "B",
"t": "embeddings"
},
{
"l": "C",
"t": "GPT-4"
},
{
"l": "D",
"t": "DALL-E"
}
],
"ans": "B",
"multi": false,
"vote": "B",
"dist": [
"B 100%"
],
"aimgs": [],
"aocr": []
},
{
"n": 124,
"dom": "G",
"case": "",
"type": "HOTSPOT",
"page": 107,
"text": [
"You are building an app that will provide users with definitions of common AI terms.",
"You create the following Python code.",
"For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
"NOTE: Each correct selection is worth point."
],
"imgs": [
"ms_ai103_img/out-107_1.png",
"ms_ai103_img/out-107_2.png"
],
"ocr": [
"openai.api_key = key\nopenai.api_base = endpoint\nresponse = openai.Chatcompletion.create(\nengine=deployment_name\nmessages=[\n{\"role\": “system\", “content”: “you are a helpful assistant.\"},\n{\"role\": “user”, “content”: “What is an LLM?”}\nprint(response[ ‘choices’ ][0][ ‘message’ ][ ‘content’ ])",
"Statements\nThe response will contain an explanation of large language models (LLMs) that has a high\ndegree of certainty.\nChanging “what is an LLM?\" to “What is an LLM in the context of AI models?” will\nproduce the intended response.\nChanging “You are a helpful assistant.” to “You must answer only within the\ncontext of AI language models.” will give a higher likelihood of producing the intended\nresponse."
],
"opts": [],
"ans": "",
"multi": false,
"vote": "",
"dist": [],
"aimgs": [
"ms_ai103_img/out-107_3.png"
],
"aocr": [
"Statements\n‘The response will contain an explanation of large language models (LLMs) that has 2 high\ndegree of certainty.\nChanging “what is an LUN?” to \"What is an LUN in the context of AZ models?” will\nproduce the intended response,\nCChanging “You are 2 helpful assistant.” to \"vou must answer only within the\ncontext of AI Language sodels.” will ive a higher likehood of producing the intended\nresponse"
]
},
{
"n": 125,
"dom": "G",
"case": "",
"type": "MCQ",
"page": 108,
"text": [
"You have an Azure OpenAI model named AI1.",
"You are building a web app named App1 by using the Azure OpenAI SDK.",
"You need to configure App1 to connect to AI1.",
"What information must you provide?"
],
"imgs": [],
"ocr": [],
"opts": [
{
"l": "A",
"t": "the deployment name, key, and model name"
},
{
"l": "B",
"t": "the endpoint, key, and model type"
},
{
"l": "C",
"t": "the deployment name, endpoint, and key"
},
{
"l": "D",
"t": "the endpoint, key, and model name"
}
],
"ans": "C",
"multi": false,
"vote": "C",
"dist": [
"C 100%"
],
"aimgs": [],
"aocr": []
},
{
"n": 126,
"dom": "P",
"case": "",
"type": "MCQ",
"page": 108,
"text": [
"You are building a solution in Azure that will use Azure Language in Foundry Tools service to process sensitive customer data. You need to ensure that only specific Azure processes can access the Language service. The solution must minimize administrative effort. What should you include in the solution?"
],
"imgs": [],
"ocr": [],
"opts": [
{
"l": "A",
"t": "Azure Application Gateway"
},
{
"l": "B",
"t": "a virtual network gateway"
},
{
"l": "C",
"t": "IPsec rules"
},
{
"l": "D",
"t": "virtual network rules"
}
],
"ans": "D",
"multi": false,
"vote": "D",
"dist": [
"C 11%",
"D 89%"
],
"aimgs": [],
"aocr": []
},
{
"n": 127,
"dom": "P",
"case": "",
"type": "MCQ",
"page": 109,
"text": [
"You have an Azure subscription that contains a Microsoft Foundry Service resource named CSAccount1 and a virtual network named VNet1. CSAaccount1 is connected to VNet1.",
"You need to ensure that only specific resources can access CSAccount1. The solution must meet the following requirements: • Prevent external access to CSAccount1.",
"• Minimize administrative effort.",
"Which two actions should you perform? Each correct answer presents part of the solution.",
"NOTE: Each correct answer is worth one point."
],
"imgs": [],
"ocr": [],
"opts": [
{
"l": "A",
"t": "In CSAccount1, modify the virtual network settings."
},
{
"l": "B",
"t": "In VNet1, create a virtual subnet."
},
{
"l": "C",
"t": "In VNet1, enable a service endpoint for CSAccount1."
},
{
"l": "D",
"t": "In CSAccount1, configure the Access control (IAM) settings."
},
{
"l": "E",
"t": "In VNet1, modify the virtual network settings."
}
],
"ans": "AC",
"multi": true,
"vote": "AC",
"dist": [
"AC 67%",
"AE 33%"
],
"aimgs": [],
"aocr": []
},
{
"n": 128,
"dom": "I",
"case": "",
"type": "HOTSPOT",
"page": 110,
"text": [
"You have a collection of press releases stored as PDF files.",
"You need to extract text from the files and perform sentiment analysis.",
"Which service should you use for each task? To answer, select the appropriate options in the answer area."
],
"imgs": [
"ms_ai103_img/out-110_1.png"
],
"ocr": [
"Extract text:\nPerform sentiment analysis:\nAzure Al Search\nAzure Vision in Foundry Tools\nAzure Document Intelligence in Foundry Tools\nAzure Al Search\nAzure Al Computer Vision\nAzure Document Intelligence in Foundry Tools\nAzure Language in Foundry Tools"
],
"opts": [],
"ans": "",
"multi": false,
"vote": "",
"dist": [],
"aimgs": [
"ms_ai103_img/out-110_2.png"
],
"aocr": [
"Extract text:\nPerform sentiment analysis:\nAzure Al Search\nAzure Vision in Foundry Tools\n“Azure Document Intelligence in Foundry Tools|\nAzure Al Search\nAzure Al Computer Vision\nAzure Document Intelligence in Foundry Tools;\n‘Azure Language in Foundry Tools"
]
},
{
"n": 129,
"dom": "V",
"case": "",
"type": "MCQ",
"page": 111,
"text": [
"You are designing an Azure AI solution to identify defective products on a production line.",
"You have a real-time video feed and an image library of sample products that are approved or rejected manually. You need to recommend a service that meets the following requirements:",
"• Monitors the video feed and identifies the defective products.",
"• Can train a new model by using the image library.",
"• Minimizes development effort.",
"What should you recommend?"
],
"imgs": [],
"ocr": [],
"opts": [
{
"l": "A",
"t": "Azure Vision in Foundry Tools"
},
{
"l": "B",
"t": "Azure AI Video Indexer"
},
{
"l": "C",
"t": "Azure AI Custom Vision"
},
{
"l": "D",
"t": "Azure Machine Learning"
}
],
"ans": "C",
"multi": false,
"vote": "C",
"dist": [
"C 100%"
],
"aimgs": [],
"aocr": []
},
{
"n": 130,
"dom": "T",
"case": "",
"type": "HOTSPOT",
"page": 112,
"text": [
"You run the following command.",
"For each of the following statements, select Yes if the statement is true. Otherwise, select No."
],
"imgs": [
"ms_ai103_img/out-112_1.png",
"ms_ai103_img/out-112_2.png"
],
"ocr": [
"docker run --rm -it -p 5000:5000 --memory 10g --cpus 2 \\\nmer.microsoft.com/azure-cognitive-services/textanalytics/sentiment \\\nEula=accept \\\nBilling={ENDPOINT_URT} \\\nApikey={API_KEY}",
"Statements\nGoing to http://localhost:5000/status will query the Azure endpoint to verify whether the API\nkey used to start the container is valid.\nThe container logging provider will write log data.\nGoing to http://localhost:5000/swagger will provide the details to access the documentation\nfor the available endpoints."
],
"opts": [],
"ans": "",
"multi": false,
"vote": "",
"dist": [],
"aimgs": [
"ms_ai103_img/out-112_3.png"
],
"aocr": [
"Statements Yes\nGn tw pfctl  Anre epi owyeonteriea (S)\npbs oeneecmiee tase\nThe container logging provider wil writ log data OG\nGong whep/tocensttiagprv pode tas ete dccmenn (SY\nSteeaibiectpone\n°"
]
},
{
"n": 131,
"dom": "P",
"case": "",
"type": "MCQ",
"page": 112,
"text": [
"You are developing an app that will use the Speech and Language APIs.",
"You need to provision resources for the app. The solution must ensure that each service is accessed by using a single endpoint and credential. Which type of resource should you create?"
],
"imgs": [],
"ocr": [],
"opts": [
{
"l": "A",
"t": "Azure Language in Foundry Tools"
},
{
"l": "B",
"t": "Microsoft Foundry service"
},
{
"l": "C",
"t": "Azure Speech in Foundry Tools"
},
{
"l": "D",
"t": "Content Safety in Foundry Control Plane"
}
],
"ans": "B",
"multi": false,
"vote": "B",
"dist": [
"B 100%"
],
"aimgs": [],
"aocr": []
},
{
"n": 132,
"dom": "I",
"case": "",
"type": "MCQ",
"page": 113,
"text": [
"You are building an app that will include one million scanned magazine articles. Each article will be stored as an image file. You need to configure the app to extract text from the images. The solution must minimize development effort.",
"What should you include in the solution?"
],
"imgs": [],
"ocr": [],
"opts": [
{
"l": "A",
"t": "Azure Document Intelligence in Foundry Tools"
},
{
"l": "B",
"t": "the Read API in Azure Vision in Foundry Tools"
},
{
"l": "C",
"t": "Azure Vision in Foundry Tools Image Analysis"
},
{
"l": "D",
"t": "Azure Language in Foundry Tools"
}
],
"ans": "B",
"multi": false,
"vote": "B",
"dist": [
"A 30%",
"B 70%"
],
"aimgs": [],
"aocr": []
},
{
"n": 133,
"dom": "T",
"case": "",
"type": "DRAG DROP",
"page": 114,
"text": [
"You are building an app that will scan confidential documents and use the Azure Language in Foundry Tools service to analyze the contents. You provision a Microsoft Foundry Service resource.",
"You need to ensure that the app can make requests to the Azure Language in Foundry Tools service endpoint. The solution must ensure that confidential documents remain on-premises.",
"Which three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order."
],
"imgs": [
"ms_ai103_img/out-114_1.png"
],
"ocr": [
"Pull an image from Docker Hub.\nRun the container and specify an API key and the Endpoint URL of\nthe Azure Al resource.\nProvision an on-premises Kubernetes cluster that is isolated from\nthe internet.\ni\nProvision an on-premises Kubernetes cluster that has internet\nconnectivity.\nProvision an Azure Kubernetes Service (AKS) resource.\nRun the container and specify an App ID and Client Secret.\nPull an image from the Microsoft Container Registry (MCR)."
],
"opts": [],
"ans": "",
"multi": false,
"vote": "",
"dist": [],
"aimgs": [
"ms_ai103_img/out-114_2.png"
],
"aocr": [
"‘Anawer brea\n1. | Putanimage tom Docker Hub.\n‘rovson anon premiesKobenetes cst thats aaated home\n‘he intent\nTun ie conan and pealy a AP hey ad the Epo URL oT\nthe Azure Alresoute"
]
},
{
"n": 134,
"dom": "V",
"case": "",
"type": "HOTSPOT",
"page": 115,
"text": [
"You are developing an app that will use the Azure Vision in Foundry Tools API to analyze an image.",
"You need configure the request that will be used by the app to identify whether an image is clipart or a line drawing. How should you complete the request? To answer, select the appropriate options in the answer area."
],
"imgs": [
"ms_ai103_img/out-115_1.png"
],
"ocr": [
"Answer Area\nly\nGET\nPATCH\nPOST\n“https: //*.cognitiveservices.azure.com/vision/v3.2/analyze?visualFeatures= Y_ &details={string}&language-e\ndescription\nimageType"
],
"opts": [],
"ans": "",
"multi": false,
"vote": "",
"dist": [],
"aimgs": [
"ms_ai103_img/out-115_2.png"
],
"aocr": [
"Anam hee\n(oer\nparc\noo"
]
},
{
"n": 135,
"dom": "V",
"case": "",
"type": "MCQ",
"page": 115,
"text": [
"You use the Azure Custom Vision service to build a classifier.",
"After training is complete, you need to evaluate the classifier.",
"Which two metrics are available for review? Each correct answer presents a complete solution.",
"NOTE: Each correct selection is worth one point."
],
"imgs": [],
"ocr": [],
"opts": [
{
"l": "A",
"t": "F-score"
},
{
"l": "B",
"t": "area under the curve (AUC)"
},
{
"l": "C",
"t": "precision"
},
{
"l": "D",
"t": "weighted accuracy"
},
{
"l": "E",
"t": "recall"
}
],
"ans": "CE",
"multi": true,
"vote": "",
"dist": [
"CE 100%"
],
"aimgs": [],
"aocr": []
},
{
"n": 136,
"dom": "P",
"case": "",
"type": "MCQ",
"page": 116,
"text": [
"You have an Azure subscription that contains an Azure Language in Foundry Tools service resource named ta1 and a virtual network named vnet1. You need to ensure that only resources in vnet1 can access ta1.",
"What should you configure?"
],
"imgs": [],
"ocr": [],
"opts": [
{
"l": "A",
"t": "a network security group (NSG) for vnet1"
},
{
"l": "B",
"t": "an Azure Language in Foundry Tools service container for ta1"
},
{
"l": "C",
"t": "Azure Firewall for vnet1"
},
{
"l": "D",
"t": "the virtual network settings for ta1"
}
],
"ans": "D",
"multi": false,
"vote": "D",
"dist": [
"D 100%"
],
"aimgs": [],
"aocr": []
},
{
"n": 137,
"dom": "P",
"case": "",
"type": "MCQ",
"page": 116,
"text": [
"Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You have an Azure subscription that contains a Microsoft Foundry resource named AI1 and a Content Safety in Foundry Control Plane resource named CS1.",
"You build an agent that uses AI1 to provide generative answers to specific questions and CS1 to check input and output for objectionable content. You need to optimize the content filter configurations by running tests on sample questions.",
"Solution: From Content Safety Studio, you use the Moderate text content feature to run the tests.",
"Does this meet the requirement?"
],
"imgs": [],
"ocr": [],
"opts": [
{
"l": "A",
"t": "Yes"
},
{
"l": "B",
"t": "No"
}
],
"ans": "A",
"multi": false,
"vote": "A",
"dist": [
"A 100%"
],
"aimgs": [],
"aocr": []
},
{
"n": 138,
"dom": "P",
"case": "",
"type": "MCQ",
"page": 117,
"text": [
"Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You have an Azure subscription that contains a Microsoft Foundry resource named AI1 and a Content Safety in Foundry Control Plane resource named CS1.",
"You build an agent that uses AI1 to provide generative answers to specific questions and CS1 to check input and output for objectionable content. You need to optimize the content filter configurations by running tests on sample questions.",
"Solution: From Content Safety Studio, you use the Safety metaprompt feature to run the tests.",
"Does this meet the requirement?"
],
"imgs": [],
"ocr": [],
"opts": [
{
"l": "A",
"t": "Yes"
},
{
"l": "B",
"t": "No"
}
],
"ans": "B",
"multi": false,
"vote": "B",
"dist": [
"B 100%"
],
"aimgs": [],
"aocr": []
},
{
"n": 139,
"dom": "P",
"case": "",
"type": "MCQ",
"page": 117,
"text": [
"Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You have an Azure subscription that contains a Microsoft Foundry resource named AI1 and a Content Safety in Foundry Control Plane resource named CS1.",
"You build an agent that uses AI1 to provide generative answers to specific questions and CS1 to check input and output for objectionable content. You need to optimize the content filter configurations by running tests on sample questions.",
"Solution: From Content Safety Studio, you use the Protected material detection feature to run the tests.",
"Does this meet the requirement?"
],
"imgs": [],
"ocr": [],
"opts": [
{
"l": "A",
"t": "Yes"
},
{
"l": "B",
"t": "No"
}
],
"ans": "B",
"multi": false,
"vote": "B",
"dist": [
"B 100%"
],
"aimgs": [],
"aocr": []
},
{
"n": 140,
"dom": "P",
"case": "",
"type": "MCQ",
"page": 118,
"text": [
"Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution. After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You have an Azure subscription that contains a Microsoft Foundry resource named AI1 and a Content Safety in Foundry Control Plane resource named CS1.",
"You build an agent that uses AI1 to provide generative answers to specific questions and CS1 to check input and output for objectionable content. You need to optimize the content filter configurations by running tests on sample questions.",
"Solution: From Content Safety Studio, you use the Monitor online activity feature to run the tests.",
"Does this meet the requirement?"
],
"imgs": [],
"ocr": [],
"opts": [
{
"l": "A",
"t": "Yes"
},
{
"l": "B",
"t": "No"
}
],
"ans": "B",
"multi": false,
"vote": "B",
"dist": [
"B 100%"
],
"aimgs": [],
"aocr": []
},
{
"n": 141,
"dom": "P",
"case": "",
"type": "MCQ",
"page": 118,
"text": [
"You are building an AI solution that will use Sentiment Analysis results from surveys to calculate bonuses for customer service staff. You need to ensure that the solution meets the Microsoft responsible AI principles.",
"What should you do?"
],
"imgs": [],
"ocr": [],
"opts": [
{
"l": "A",
"t": "Add a human review and approval step before making decisions that affect the staff’s financial situation."
},
{
"l": "B",
"t": "Include the Sentiment Analysis results when surveys return a low confidence score."
},
{
"l": "C",
"t": "Use all the surveys, including surveys by customers who requested that their account be deleted and their data be removed."
},
{
"l": "D",
"t": "Publish the raw survey data to a central location and provide the staff with access to the location."
}
],
"ans": "A",
"multi": false,
"vote": "A",
"dist": [
"A 100%"
],
"aimgs": [],
"aocr": []
},
{
"n": 142,
"dom": "P",
"case": "",
"type": "MCQ",
"page": 119,
"text": [
"You have an Azure DevOps pipeline named Pipeline1 that is used to deploy an app. Pipeline1 includes a step that will create an Azure AI services account.",
"You need to add a step to Pipeline1 that will identify the created Azure AI services account. The solution must minimize development effort. Which Azure Command-Line Interface (CLI) command should you run?"
],
"imgs": [],
"ocr": [],
"opts": [
{
"l": "A",
"t": "az cognitiveservices account network-rule"
},
{
"l": "B",
"t": "az cognitiveservices account show"
},
{
"l": "C",
"t": "az account list"
},
{
"l": "D",
"t": "az resource link"
}
],
"ans": "B",
"multi": false,
"vote": "B",
"dist": [
"B 100%"
],
"aimgs": [],
"aocr": []
},
{
"n": 143,
"dom": "V",
"case": "",
"type": "MCQ",
"page": 119,
"text": [
"You are building an internet-based training solution. The solution requires that a user’s camera and microphone remain enabled. You need to monitor a video stream of the user and verify that the user is alone and is not collaborating with another user. The solution must minimize development effort.",
"What should you include in the solution?"
],
"imgs": [],
"ocr": [],
"opts": [
{
"l": "A",
"t": "content moderation in Azure AI Azure Video Indexer"
},
{
"l": "B",
"t": "speech-to-text in the Azure Speech in Foundry Tools"
},
{
"l": "C",
"t": "object detection in Azure AI Custom Vision"
},
{
"l": "D",
"t": "Spatial Analysis in Azure Vision in Foundry Tools"
}
],
"ans": "D",
"multi": false,
"vote": "D",
"dist": [
"D 100%"
],
"aimgs": [],
"aocr": []
},
{
"n": 144,
"dom": "I",
"case": "",
"type": "MCQ",
"page": 120,
"text": [
"You are developing a method that uses the Azure Vision in Foundry Tools client library. The method will perform optical character recognition (OCR) in images. The method has the following code.",
"During testing, you discover that the call to the get_read_result method occurs before the read operation is complete. You need to prevent the get_read_result method from proceeding until the read operation is complete.",
"Which two actions should you perform? Each correct answer presents part of the solution.",
"NOTE: Each correct selection is worth one point."
],
"imgs": [
"ms_ai103_img/out-120_1.jpg"
],
"ocr": [
"def read_file_url(computervision_client, url_file):\nread_response = computervision_client.read(url_file, raw=True)\nread_operation_location = read_response.headers[\"Operation-Location\" ]\noperation_id = read_operation_location.split(\"/\")[-1]\nread_result = computervision_client.get_read_result(operation_id)\nfor page in read_result.analyze_result.read_results:\nfor line in page.lines:\nprint(line.text)"
],
"opts": [
{
"l": "A",
"t": "Add code to verify the read_result.status value."
},
{
"l": "B",
"t": "Add code to verify the status of the read_operation_location value."
},
{
"l": "C",
"t": "Remove the operation_id parameter."
},
{
"l": "D",
"t": "Wrap the call to get_read_result within a loop that contains a delay."
}
],
"ans": "AD",
"multi": true,
"vote": "AD",
"dist": [
"AD 100%"
],
"aimgs": [],
"aocr": []
},
{
"n": 145,
"dom": "P",
"case": "C1",
"type": "MCQ",
"page": 121,
"text": [
"You need to configure Agent1 to meet the security and compliance requirements.",
"What should you include in the solution?"
],
"imgs": [],
"ocr": [],
"opts": [
{
"l": "A",
"t": "prompt shields"
},
{
"l": "B",
"t": "protected material detection"
},
{
"l": "C",
"t": "violence content filtering"
},
{
"l": "D",
"t": "self-harm content filtering"
}
],
"ans": "A",
"multi": false,
"vote": "A",
"dist": [
"A 100%"
],
"aimgs": [],
"aocr": []
},
{
"n": 146,
"dom": "G",
"case": "C1",
"type": "MCQ",
"page": 124,
"text": [
"You need to configure personalized user interactions for Agent1 based on the business requirements.",
"What should you include in the solution?"
],
"imgs": [],
"ocr": [],
"opts": [
{
"l": "A",
"t": "instructions"
},
{
"l": "B",
"t": "memory"
},
{
"l": "C",
"t": "tools"
},
{
"l": "D",
"t": "guardrails"
}
],
"ans": "B",
"multi": false,
"vote": "",
"dist": [],
"aimgs": [],
"aocr": []
},
{
"n": 147,
"dom": "P",
"case": "",
"type": "MCQ",
"page": 126,
"text": [
"You have an agent named Agent1 that uses Model Context Protocol (MCP) calls to retrieve external data.",
"You need to implement guardrails to ensure that Agent1 cannot send any content tagged as Violence to the MCP server. Which intervention point should you use?"
],
"imgs": [],
"ocr": [],
"opts": [
{
"l": "A",
"t": "tool call"
},
{
"l": "B",
"t": "user input"
},
{
"l": "C",
"t": "tool response"
},
{
"l": "D",
"t": "output"
}
],
"ans": "A",
"multi": false,
"vote": "",
"dist": [],
"aimgs": [],
"aocr": []
},
{
"n": 148,
"dom": "P",
"case": "",
"type": "HOTSPOT",
"page": 127,
"text": [
"You have a configurable guardrail in a Microsoft Foundry project.",
"You have a Python application. A text blocklist named ConfidentialTerms already contains terms that must be detected in user messages. The application stores each incoming user message in a variable named input_text.",
"You plan to moderate input_text before the text is sent to a language model.",
"You need to analyze input_text by using the existing blocklist.",
"How should you complete the code? To answer, select the appropriate options in the answer area."
],
"imgs": [
"ms_ai103_img/out-127_1.jpg"
],
"ocr": [
"Answer Area\nblocklist_name = “ConfidentialTerms”\nclient = ContentSafetyClient (endpoint, credential)\nrequest = [=] «\nAddOrUpdateTextBlocklistitemsOptions\nAnalyzelmageOptions\nAnalyzeTextOptions\nTextBlocklist\ntext=input_text,\nblocklist_names=[blocklist_name],\nhalt_on_blocklist_hit=False\n)\nanalysis_result = Ly\nclient.add_or_update_blockli\nclient.analyze_image\nclient.analyze_text\nclient.\n-_text_blocklists\n(request)"
],
"opts": [],
"ans": "",
"multi": false,
"vote": "",
"dist": [],
"aimgs": [
"ms_ai103_img/out-128_1.png"
],
"aocr": [
"Answer Area\nblocklist_name = “ConfidentialTerms”\nclient = ContentSafetyClient (endpoint, credential)\nrequest\nAddOrUpdateTextBlocklistitemsOptions\nAnalyzelmageOptions\nAnalyzeTextOptions\nTextBlocklist\ntex\nnput_text,\nblocklist_names=(blocklist_name],\nhalt_on_blocklist_hit=False\n)\nanalysis_result =\nclient.add_or_update_blocklist_items\nclient.analyze_image\nclient.analyze_text\nclient.list_text_blocklists\n(request)"
]
},
{
"n": 149,
"dom": "P",
"case": "",
"type": "MCQ",
"page": 128,
"text": [
"You have an Azure subscription that contains Microsoft Foundry resource.",
"You need to build an app that will suggest product names from a given product description.",
"Which Foundry model should you use?"
],
"imgs": [],
"ocr": [],
"opts": [
{
"l": "A",
"t": "Whisper"
},
{
"l": "B",
"t": "DALL-E"
},
{
"l": "C",
"t": "embeddings"
},
{
"l": "D",
"t": "GPT-4"
}
],
"ans": "D",
"multi": false,
"vote": "",
"dist": [],
"aimgs": [],
"aocr": []
},
{
"n": 150,
"dom": "V",
"case": "",
"type": "DRAG DROP",
"page": 129,
"text": [
"You have a factory that produces cardboard packaging for food products. The factory has intermittent internet connectivity. The packages are required to include four samples of each product.",
"You need to build an Azure Custom Vision model that will identify defects in packaging and provide the location of the defects to an operator. The model must ensure that each package contains the four products.",
"Which project type and domain should you use? To answer, move the appropriate options to the correct targets. You may use each option once, more than once, or not at all. You may need to move the split bar between panes or scroll to view content."
],
"imgs": [
"ms_ai103_img/out-129_1.jpg"
],
"ocr": [
"Options Answer Area\nFood Project type:\ncorer Domain:\ni? General (compact)\n# Image classification\n3 Logo\nE Object detection"
],
"opts": [],
"ans": "",
"multi": false,
"vote": "",
"dist": [],
"aimgs": [
"ms_ai103_img/out-129_2.png"
],
"aocr": [
"Answer Area\nProject type: |# Object detection\nDomain:\nGeneral (compact)"
]
},
{
"n": 151,
"dom": "G",
"case": "",
"type": "MCQ",
"page": 130,
"text": [
"In Microsoft Foundry, you use the Chat playground with the GPT-35 Turbo model.",
"You have a prompt that contains the following code.",
"function F(n)",
"{",
"var f = [0, 1];",
"for (var i = 2; i < n; i++) f[i] = f[i-1] + f[i-2];",
"return f;",
"}",
"You need the model to create an explanation of the code. The solution must minimize costs.",
"What should you do?"
],
"imgs": [],
"ocr": [],
"opts": [
{
"l": "A",
"t": "Add // what does function F do? to the prompt."
},
{
"l": "B",
"t": "Set the temperature parameter to 1."
},
{
"l": "C",
"t": "Change the model to GPT-4-32k."
},
{
"l": "D",
"t": "Add function F(explanation) to the prompt."
}
],
"ans": "A",
"multi": false,
"vote": "A",
"dist": [
"A 100%"
],
"aimgs": [],
"aocr": []
},
{
"n": 152,
"dom": "V",
"case": "",
"type": "DRAG DROP",
"page": 131,
"text": [
"You have an app that uses Azure AI Custom Vision and a custom trained classifier to identify products in images. You need to add new products to the classifier. The solution must meet the following requirements:",
"• Minimize how long it takes to add the products.",
"• Minimize development effort.",
"Which five actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order."
],
"imgs": [
"ms_ai103_img/out-131_1.jpg"
],
"ocr": [
"Actions Answer Area\nFrom the Custom Vision portal, open the projec 1\nre Machine Learning studio, open the 2\n= From Vision Studio, open the project. 3\nUpload sample images of the new prod 4\nbel the sample images. 5\nRetrain the model\nPublish the model."
],
"opts": [],
"ans": "",
"multi": false,
"vote": "",
"dist": [],
"aimgs": [
"ms_ai103_img/out-131_2.png"
],
"aocr": [
"1 | From vision Studie, open the project.\n2. | # Upload sample images of the new products\n13 | Label the sample images.\n4 | retrain the model\n5"
]
},
{
"n": 153,
"dom": "G",
"case": "",
"type": "MCQ",
"page": 132,
"text": [
"You have a Microsoft Foundry project that contains an agent. The agent generates summaries from retrieved policy documents. You need to improve response completeness. The solution must be implemented in the logic of the application code before responses are returned.",
"What should you do?"
],
"imgs": [],
"ocr": [],
"opts": [
{
"l": "A",
"t": "Add a reflection pass before the responses are returned."
},
{
"l": "B",
"t": "Enable response streaming."
},
{
"l": "C",
"t": "Increase the value of the presence_penalty parameter."
},
{
"l": "D",
"t": "Decrease the value of the max_tokens parameter."
}
],
"ans": "A",
"multi": false,
"vote": "A",
"dist": [
"A 100%"
],
"aimgs": [],
"aocr": []
},
{
"n": 154,
"dom": "P",
"case": "",
"type": "HOTSPOT",
"page": 133,
"text": [
"You have a Microsoft Foundry resource named AI1 that hosts three deployments of the GPT 3.5 model. Each deployment is optimized for a unique workload.",
"You plan to deploy three apps. Each app will access AI1 by using the REST API and will use the deployment that was optimized for the app’s intended workload.",
"You need to provide each app with access to AI1 and the appropriate deployment. The solution must ensure that only the apps can access AI1. What should you use to provide access to AI1, and what should each app use to connect to its appropriate deployment? To answer, select the appropriate options in the answer area."
],
"imgs": [
"ms_ai103_img/out-133_1.jpg"
],
"ocr": [
"Answer Area\nProvide access to Al1 by using:\n‘An API key\nAbearer token\nA shared access signature (SAS) token\nConnect to the deployment by using: =\nAn API key\nA deployment endpoint\nA deployment name\nA deployment type"
],
"opts": [],
"ans": "",
"multi": false,
"vote": "",
"dist": [],
"aimgs": [
"ms_ai103_img/out-133_2.png"
],
"aocr": [
"Answer Area\nProvide access to All by using:\n‘An API key\nA shared access signature (SAS) token\nConnect to the deployment by using:\n‘An APL key\n‘A deployment name\nA deployment type"
]
},
{
"n": 155,
"dom": "P",
"case": "",
"type": "MCQ",
"page": 134,
"text": [
"You have an Azure subscription that contains an Azure Language in Foundry Tools service resource.",
"You need to identify the URL of the REST interface for the Language service.",
"Which blade should you use in the Azure portal?"
],
"imgs": [],
"ocr": [],
"opts": [
{
"l": "A",
"t": "Networking"
},
{
"l": "B",
"t": "Identity"
},
{
"l": "C",
"t": "Properties"
},
{
"l": "D",
"t": "Keys and Endpoint"
}
],
"ans": "D",
"multi": false,
"vote": "",
"dist": [],
"aimgs": [],
"aocr": []
},
{
"n": 156,
"dom": "P",
"case": "",
"type": "HOTSPOT",
"page": 135,
"text": [
"You have an Azure AI Search resource named Search1 that is used by multiple apps hosted in Azure.",
"You need to secure Search1. The solution must meet the following requirements:",
"• Prevent access to Search1 from the internet.",
"• Limit the access of each app to query specific indexes.",
"What should you do? To answer, select the appropriate options in the answer area.",
"NOTE: Each correct answer is worth one point."
],
"imgs": [
"ms_ai103_img/out-135_1.jpg"
],
"ocr": [
"Answer Area\nTo prevent access from the internet:\nConfigure an IP firewall.\nCreate a private endpoint.\nUse Azure roles.\nTo limit access to query specific indexes:\nCreate a private endpoint.\nUse Azure roles.\nUse key authentication."
],
"opts": [],
"ans": "",
"multi": false,
"vote": "",
"dist": [],
"aimgs": [
"ms_ai103_img/out-135_2.png"
],
"aocr": [
"Answer Area\nTo prevent access from the internet: 7\nConfigure an IP firewall.\nCreate a private endpoint.\nUse Azure roles,\nTo limit access to query specific indexes:\nCreate a private endpoint.\nUse Azure roles.\nUse key authenticatior"
]
},
{
"n": 157,
"dom": "V",
"case": "",
"type": "MCQ",
"page": 136,
"text": [
"You plan to build an app that will generate a list of tags for uploaded images. The app must meet the following requirements: • Generate tags in a user’s preferred language.",
"• Support English, French, and Spanish.",
"• Minimize development effort.",
"You need to build a function that will generate the tags for the app.",
"Which Azure service endpoint should you use?"
],
"imgs": [],
"ocr": [],
"opts": [
{
"l": "A",
"t": "Azure Vision in Foundry Tools Image Analysis"
},
{
"l": "B",
"t": "Azure Custom Vision image classification"
},
{
"l": "C",
"t": "Content Safety in Foundry Control Plane"
},
{
"l": "D",
"t": "Custom Translator"
}
],
"ans": "A",
"multi": false,
"vote": "A",
"dist": [
"A 100%"
],
"aimgs": [],
"aocr": []
},
{
"n": 158,
"dom": "T",
"case": "",
"type": "DRAG DROP",
"page": 137,
"text": [
"You have a Docker host named Host1 that contains a container base image.",
"You have an Azure subscription that contains a custom speech-to-text model named model1.",
"You need to run model1 on Host1.",
"Which three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order."
],
"imgs": [
"ms_ai103_img/out-137_1.jpg"
],
"ocr": [
"Actions Answer Area\nRequest approval to run the container. 1\n# Export model! to Host1. 2\n# Configure disk logging. 3\nRun the container\nRetrain the model,"
],
"opts": [],
"ans": "",
"multi": false,
"vote": "",
"dist": [],
"aimgs": [
"ms_ai103_img/out-137_2.png"
],
"aocr": [
"Answer Area\nRequest approval to run the container,\nRetrain the model.\n#2 Run the container."
]
},
{
"n": 159,
"dom": "T",
"case": "",
"type": "MCQ",
"page": 138,
"text": [
"You are designing a solution that will answer questions about human resources (HR) policies stored in the PDF format. You need to ensure that the identical answer to a specific question is returned every time. The solution must minimize development effort. Which service should you include in the solution?"
],
"imgs": [],
"ocr": [],
"opts": [
{
"l": "A",
"t": "Azure OpenAI"
},
{
"l": "B",
"t": "Azure Language in Foundry Tools"
},
{
"l": "C",
"t": "Azure Machine Learning"
},
{
"l": "D",
"t": "Azure Document Intelligence in Foundry Tools"
}
],
"ans": "B",
"multi": false,
"vote": "B",
"dist": [
"B 83%",
"D 17%"
],
"aimgs": [],
"aocr": []
},
{
"n": 160,
"dom": "V",
"case": "",
"type": "HOTSPOT",
"page": 139,
"text": [
"You have 100,000 images.",
"You need to build an app that will perform the following actions:",
"• Identify road signs in the images and extract the text on the signs.",
"• Analyze the text to identify well-known locations.",
"The solution must minimize development effort.",
"What should you use for each action? To answer, select the appropriate options in the answer area."
],
"imgs": [
"ms_ai103_img/out-139_1.jpg"
],
"ocr": [
"Answer Area\nExtract the text:\nIdentify well-known locations:\nAzure Document Intelligence in Foundry Tools\nAzure Language in Foundry Tools\nAuure Al Search\nAzure Vision in Foundry Tools\nAzure Document Intelligence in Foundry Tools\nAzure Language in Foundry Tools\nAzure Al Search\nAzure Vi\nin Foundry Tools"
],
"opts": [],
"ans": "",
"multi": false,
"vote": "",
"dist": [],
"aimgs": [
"ms_ai103_img/out-139_2.png"
],
"aocr": [
"Answer Area\nExtract the text: I)\n‘Azure Document Intelligence in Foundry Tools\n‘Azure Language in Foundry Tools\nAzure AlSearch\n‘Azure Vision in Foundry Tools,\n!\nIdentify well-known locations:\nAzure Document Intelligence in Foundry Tools\nAzure Language in Foundry Tools\nAzure AlSearch\n‘Azure Vision in Foundry Tools"
]
},
{
"n": 161,
"dom": "T",
"case": "",
"type": "HOTSPOT",
"page": 140,
"text": [
"You plan to deploy a containerized version of an Azure AI Language service that will be used for sentiment analysis. You configure https://contoso.cognitiveservices.azure.com as the endpoint URI for the service.",
"You need to run the container on an Azure virtual machine by using Docker.",
"How should you complete the command? To answer, select the appropriate options in the answer area."
],
"imgs": [
"ms_ai103_img/out-140_1.jpg"
],
"ocr": [
"Answer Area\ndocker run --rm -it -p 5000:5000 --memory 8g --cpus\ny| \\\nhttp://contoso. blob.core.windows.net\nhttp://contoso.cognitiveservices.azure.com\nmer.microsoft.com/azure-cognitive-services/textanalytics/keyphrase\nmer.microsoft.com/azure-cogi\nEula=accept \\\nBilling= ¥\nhttp://contoso. blob.core.windows.net\nhttp://contoso.cognitiveservices.azure.com\nmer.microsoft.com/azure-cognitive-services/textanalytics/keyphrase\nmer.microsoft.com/azure-cognitive-services/textanalytics/sentiment\nApi Key=xxXXxXXxXXXXXKAXKARKAREAK\n1"
],
"opts": [],
"ans": "",
"multi": false,
"vote": "",
"dist": [],
"aimgs": [
"ms_ai103_img/out-140_2.png"
],
"aocr": [
"Answer Area\ndocker run --rm -it ~p 5000:5000 --memory 8g --cpus 1 \\\nhttp://contoso.blob.core.windows.net\nhttp://contoso.cognitiveservices.azure.com\nmet.microsoft.com/azure-cognitive-services/textanalytics/keyphrase\nEula=accept \\\nBillin\nhttp://contoso.blob.core.windows.net\nTerovoftcomyarure-cognive services cextanalytics/keyphrase\nmetmicrosoft.com/azure-cognitive-services/textanalytics/sentiment\neR MKAKKKAMARKAAAKARAKKRE,"
]
},
{
"n": 162,
"dom": "T",
"case": "",
"type": "MCQ",
"page": 141,
"text": [
"You need to measure the public perception of your brand on social media by using natural language processing.",
"Which Azure service should you use?"
],
"imgs": [],
"ocr": [],
"opts": [
{
"l": "A",
"t": "Azure Language in Foundry Tools"
},
{
"l": "B",
"t": "Azure Vision in Foundry Tools"
},
{
"l": "C",
"t": "Content Safety in Foundry Control Plane"
},
{
"l": "D",
"t": "Azure Document Intelligence in Foundry Tools"
}
],
"ans": "A",
"multi": false,
"vote": "A",
"dist": [
"A 100%"
],
"aimgs": [],
"aocr": []
},
{
"n": 163,
"dom": "T",
"case": "",
"type": "HOTSPOT",
"page": 142,
"text": [
"You have a Python application that uses Azure OpenAI structured outputs to extract fields from unstructured receipt text and support ticket text. The application uses the following schema.",
"For each of the following statements, select Yes if the statement is true. Otherwise, select No."
],
"imgs": [
"ms_ai103_img/out-142_1.png",
"ms_ai103_img/out-143_1.png"
],
"ocr": [
"receipt_response_format = (\n\"type\": \"Json_schema”,\n“json_schema”: {\n“name”: “ReceiptExtraction™,\n“strict”: True,\n“schema’\n\"type\": “object™,\n\"properties\": ¢\n\"merchant\": {\"type\": \"string\"},\n“order_number\": {\"type\": \"integer\"},\n“discount_code\": {\n“Line_items”: (\n“type\": “array”,\n“items”: {\n“type”: “object”,\n\"properties\": (\n“quantity\n“required”: (\"product\", “quantity”, “unit_price”],\n“additionalProperties”: False\nb\n“total”: (\"type\": “number\")>\n»\n“required”: [“merchant\", “order_number”, “discount_code”, “line_items\", “total\"],\n“additionalProperties”: False",
"Answer Area\nStatements\nThe schema requires that a receipt has a discount_code value.\nThe schema can be used as is for Azure Opend! structured outputs.\nThe generated JSON object will preserve the schema property order of merchant, order_number,\ndiscount_code, line_items, and total."
],
"opts": [],
"ans": "",
"multi": false,
"vote": "",
"dist": [],
"aimgs": [
"ms_ai103_img/out-143_2.png"
],
"aocr": [
"Statements\nThe schema requires that a receipt has a discount_code value.\nThe schema can be used as is for Azure OpenAl structured outputs.\nThe generated JSON object will preserve the schema property order of merchant, order_number,\ndiscount_code, line_items, and total.\no\n3\nOo"
]
},
{
"n": 164,
"dom": "V",
"case": "",
"type": "DRAG DROP",
"page": 144,
"text": [
"You have an Azure Custom Vision service project that performs object detection. The project uses the General domain for classification and contains a trained model.",
"You need to export the model for use on a network that is disconnected from the internet.",
"Which three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order."
],
"imgs": [
"ms_ai103_img/out-144_1.png"
],
"ocr": [
"Export the model.\nChange the classification type.\nCreate a new classification model.\nChange Domains to General (compact).\nRetrain the model.\ni\nAnswer Area\n|"
],
"opts": [],
"ans": "",
"multi": false,
"vote": "",
"dist": [],
"aimgs": [
"ms_ai103_img/out-144_2.png"
],
"aocr": [
"Change Domains to (compact) —|\nRetrain the model."
]
},
{
"n": 165,
"dom": "G",
"case": "",
"type": "MCQ",
"page": 145,
"text": [
"You are building a web app named App1 that generates responses by using a model deployed to a Microsoft Foundry project named Project1. App1 is one of several client applications that will use the same Azure AI Search data source configuration before sending prompts to the model. You need to integrate Project1 and App1. The solution must meet the following requirements:",
"• All client applications must use the same search configuration.",
"• The solution must use keyless authentication.",
"• Administrative effort must be minimized.",
"What should you do?"
],
"imgs": [],
"ocr": [],
"opts": [
{
"l": "A",
"t": "Configure an Azure AI Search connection in Project1 and reference the connection in each application."
},
{
"l": "B",
"t": "Create a custom HTTP connection in Foundry and manually configure Azure AI Search endpoints per application."
},
{
"l": "C",
"t": "Enable a managed identity for each application and call Azure AI Search directly."
},
{
"l": "D",
"t": "Call Azure AI Search directly from each application by using Microsoft Entra authentication."
}
],
"ans": "A",
"multi": false,
"vote": "",
"dist": [],
"aimgs": [],
"aocr": []
},
{
"n": 166,
"dom": "G",
"case": "",
"type": "MCQ",
"page": 145,
"text": [
"You have a Microsoft Foundry project that contains an agent. The agent generates summaries from retrieved policy documents. You need to improve response completeness. The solution must be implemented in the logic of the application code before responses are returned.",
"What should you do?"
],
"imgs": [],
"ocr": [],
"opts": [
{
"l": "A",
"t": "Increase the value of the presence_penalty parameter."
},
{
"l": "B",
"t": "Decrease the value of the max_tokens parameter."
},
{
"l": "C",
"t": "Add a reflection pass before the responses are returned."
},
{
"l": "D",
"t": "Replace the model with a smaller deployment."
}
],
"ans": "C",
"multi": false,
"vote": "",
"dist": [],
"aimgs": [],
"aocr": []
},
{
"n": 167,
"dom": "G",
"case": "",
"type": "MCQ",
"page": 146,
"text": [
"You have a Microsoft Foundry project that contains an agent. The agent generates summaries from retrieved policy documents. You need to improve response completeness. The solution must be implemented in the logic of the application code before responses are returned.",
"What should you do?"
],
"imgs": [],
"ocr": [],
"opts": [
{
"l": "A",
"t": "Enable response streaming."
},
{
"l": "B",
"t": "Add a retry evaluation before the responses are returned."
},
{
"l": "C",
"t": "Replace the model with a smaller deployment."
},
{
"l": "D",
"t": "Decrease the value of the max_tokens parameter."
}
],
"ans": "B",
"multi": false,
"vote": "",
"dist": [],
"aimgs": [],
"aocr": []
},
{
"n": 168,
"dom": "V",
"case": "",
"type": "MCQ",
"page": 146,
"text": [
"You are building an app that will share user images.",
"You need to configure the app to perform the following actions when a user uploads an image:",
"• Categorize the image as either a photograph or a drawing.",
"• Generate a caption for the image.",
"The solution must minimize development effort.",
"Which two services should you include in the solution? Each correct answer presents part of the solution.",
"NOTE: Each correct selection is worth one point"
],
"imgs": [],
"ocr": [],
"opts": [
{
"l": "A",
"t": "image classification in Azure Custom Vision"
},
{
"l": "B",
"t": "object detection in Azure Vision in Foundry Tools"
},
{
"l": "C",
"t": "content tags in Azure Vision in Foundry Tools"
},
{
"l": "D",
"t": "image descriptions in Azure Vision in Foundry Tools"
},
{
"l": "E",
"t": "image type detection in Azure Vision in Foundry Tools"
}
],
"ans": "DE",
"multi": true,
"vote": "",
"dist": [],
"aimgs": [],
"aocr": []
},
{
"n": 169,
"dom": "V",
"case": "",
"type": "HOTSPOT",
"page": 147,
"text": [
"You are developing an application that will use the Azure Vision in Foundry Tools client library. The application has the following code. For each of the following statements, select Yes if the statement is true. Otherwise, select No."
],
"imgs": [
"ms_ai103_img/out-147_1.png",
"ms_ai103_img/out-147_2.png"
],
"ocr": [
"def analyze_image(local_image):\nwith open(local_image, “rb\") as image stream:\nimage_analysis\n=\n=\nclient.analyze image in_stream(\nimage=image stream,\nvisual _features=[\nVisualFeatureTypes.tags,\nVisualFeatureTypes.description\n]\n)\nfor caption in image analysis.description.captions:\nprint(f\"\\n{caption.text} with confidence {caption.confidence}\")\nfor tag in image analysis.tags:\nprint(f\"\\n{tag.name} with confidence {tag.confidence}\")",
"Statements\nThe code will perform face recognition.\nThe code will list tags and their associated confidence.\nThe code will read an image file from the local file system."
],
"opts": [],
"ans": "",
"multi": false,
"vote": "",
"dist": [],
"aimgs": [
"ms_ai103_img/out-147_3.png"
],
"aocr": [
"Statements Yes\nThe code will perform face recognition. °\nThe code will list tags and their associated confidence. OC °\nThe code will read an image file from the local file system. O °"
]
},
{
"n": 170,
"dom": "T",
"case": "",
"type": "HOTSPOT",
"page": 148,
"text": [
"You have a Python application that sends customer support transcripts to Azure Language in Foundry Tools by using the REST API. The transcripts are in English and can contain customer names, email addresses, and phone numbers.",
"You need to store a redacted transcript of each conversation. The support workflow must redact only customer names and leave other entity types unchanged.",
"How should you complete the analyze-text request body? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point."
],
"imgs": [
"ms_ai103_img/out-148_1.png"
],
"ocr": [
"Answer Area\n{\n¥ 2\n\"kind\"; “EntityRecognition”\n\"kind\"; “LanguageDetection\"\n\"kind\"; “PiiEntityRecognition”\n“parameters”: {\n“modelVersion\": “latest”,\n¥\n“piiCategories”: [\"Organization\"]\n“piiCategories”: [’Person\"]\n“piiCategories”: [\"PhoneNumber*]\nhs\n\"“analysisInput\": {\n“documents\"™: [\n{\n\"id\": \"2\",\n“language”: \"en\",\n“text\": “John Doe called from 112-555-@176 and used order@contoso.com.\"\nt\n]\n}\n}"
],
"opts": [],
"ans": "",
"multi": false,
"vote": "",
"dist": [],
"aimgs": [
"ms_ai103_img/out-149_1.png"
],
"aocr": [
"\"kind\": \"EntityRecognition\"\n\"kind\"; \"LanguageDetection\"\n“kind\": “PiiEntityRecognition”\n“parameters”: {\n“modelVersion\": “latest”,\n“piiCategories\": [\"Organization\"]\n“piiCategories”: [\"PhoneNumber\"]"
]
},
{
"n": 171,
"dom": "T",
"case": "",
"type": "MCQ",
"page": 149,
"text": [
"You have a Python application that processes customer support emails by using Azure Language in Foundry Tools. The application sends each email body as text in a document collection by using a TextAnalyticsClient client.",
"You need to extract prebuilt entity categories, including Person, Organization, Location, and DateTime, from each email without training a model. What should you do?"
],
"imgs": [],
"ocr": [],
"opts": [
{
"l": "A",
"t": "Call recognize_entities."
},
{
"l": "B",
"t": "Configure NamedEntityRecognitionSkill in a skillset."
},
{
"l": "C",
"t": "Call recognize_pii_entities."
},
{
"l": "D",
"t": "Submit an analyze job that uses CustomEntityRecognition."
}
],
"ans": "A",
"multi": false,
"vote": "",
"dist": [],
"aimgs": [],
"aocr": []
},
{
"n": 172,
"dom": "G",
"case": "",
"type": "HOTSPOT",
"page": 150,
"text": [
"You have an application that processes support case notes by using Azure OpenAI in Microsoft Foundry Models. The application has the following request definitions.",
"For each of the following statements, select Yes if the statement is true. Otherwise, select No."
],
"imgs": [
"ms_ai103_img/out-150_1.png",
"ms_ai103_img/out-151_1.png"
],
"ocr": [
"source_text = \"Case 4817: Customer reports intermittent checkout failures.”\nrequest_a = {\n\"method\": “POST\",\n\"url\": \"https: //contoso-openai.openai.azure.com/openai/v1/embeddings?api-version=preview\",\n“headers”: {\n“api-key\": \"“<key>\",\n\"Content-Type\": \"application/json\"\nts\n\"body\": {\n\"model\": \"text-embedding-ada-202\",\n\"input\": [source_text]\n3\nrequest_b = {\n\"method\": \"POST\",\n\"url\": \"https: //contoso-openai.openai.azure.com/openai/v1/chat/completions?api-version=preview\",\n“headers\": {\n“api-key\": \"<key>\",\n\"Content-Type\": \"“application/json\"\nhb\n\"body\": {\n\"messages\": [\n{\"role\": “system”, “content”; “Summarize support cases as structured output.\"},\n{\"role\": \"user\", \"content\": source_text}\nLL\n“response_format\": {\n\"type\": \"json_schema”,\n“json_schema\": {\n\"name\": \"“case_summary\",\n\"strict\": true,\n\"schema\": {\n“type”: “object”,\n\"properties\": {\n\"summary\": {\"type\": \"string\"},,\n“keyRisks\": {\"type\": \"array\", “items”: {\"type\": “string\"}},\n\"nextActions\": {\"type\": “array”, “items”: {\"type\": “string\"}}\nte\n“required”: [\"summary\", \"keyRisks\", \"nextActions\"]\n}\n}\nt\nB",
"Answer Area\nStatements\nrequest_a returns a vectorized response.\nrequest_b returns a JSON-formatted response.\nrequest_b always retums a case summary that includes risks."
],
"opts": [],
"ans": "",
"multi": false,
"vote": "",
"dist": [],
"aimgs": [
"ms_ai103_img/out-151_2.png"
],
"aocr": [
"Statements Yes No\nrequest_a retums a vectorized response. ao °\nrequest_b returns a JSON-formatted response. Ol °\nrequest_b always retums a case summary that includes risks. °"
]
},
{
"n": 173,
"dom": "T",
"case": "",
"type": "HOTSPOT",
"page": 152,
"text": [
"You have an Azure subscription that contains an Azure Language in Foundry Tools resource named Resource1.",
"You run the following cURL command, and then play the Output.mp3 file.",
"For each of the following statements, select Yes if the statement is true. Otherwise select No.",
"NOTE: Each correct selection is worth point."
],
"imgs": [
"ms_ai103_img/out-152_1.png",
"ms_ai103_img/out-152_2.png"
],
"ocr": [
"curl --location --request POST “https://eastus.tts.speech.microsoft.com/cognitiveservices/v1\" *\n--header \"Ocp-Apim-Subscription-Key: 3795c4011#714F5aa66469e573109e4\" *\n-header \"Content-Type: application/ssml+xml\" *\n--header \"X-Microsoft-OutputFormat: audio-16khz-128kbitrate-mono-mp3\" *\n--header \"User-Agent: curl\" *\n*1.0° xml: lang=\"en-US*>\n<voice xml:gender='Female’ name=\"en-US-JennyNeural>\nWelcome to the Azure Text-to-Speech demonstration.\n</voice>\n--data-raw \"<speak versio\n<voice xml:gender=\"Male’ name='en-GB-RyanNeural'>\nThis service allows you to convert text into natural-sounding speech.\n</voice>\n<voice xml:gender='Male’ name='en-US-ChristopherNeural>\n<mstts:express-as style=\"advertisement_upbeat\" styledegree=\"2\">\nIt's easy to integrate, customizable, and supports multiple languages and voices.\n</msttsiexpress-as>\n</voice>\n</speak>\" --output output.mp3",
"Answer Area\nStatements\nYou hear three sentences in different voices.\nYou hear three sentences in different accents.\nYou hear three sentences expressed in a neutral tone.\nOo\nOo"
],
"opts": [],
"ans": "",
"multi": false,
"vote": "",
"dist": [],
"aimgs": [
"ms_ai103_img/out-152_3.png"
],
"aocr": [
"Statements Yes No\nYou hear three sentences in different voices. o o\nYou hear three sentences in different accents. oO\nYou hear three sentences expressed in a neutral tone. oO Oo"
]
},
{
"n": 174,
"dom": "G",
"case": "",
"type": "HOTSPOT",
"page": 153,
"text": [
"You are building an agent that will retrieve the current time at a given location by using a custom API.",
"You need to test the functionality of the custom API.",
"How should you complete the command? To answer, select the appropriate options in the answer area."
],
"imgs": [
"ms_ai103_img/out-153_1.png"
],
"ocr": [
"Answer Area\ncur\nrl https: //cul.services.ai.azure.com/\n| api-version=2024-12-01-preview \\\nassistants\ncompletions\nembeddings\nthreads\n-H \"Authorization: Bearer $AZURE_AT TOKEN\" \\\n-H \"Content-Type: application/json™ \\\n-d'{\n\"instructions\": \"You are a weather bot. Use the provided functions to answer questions.\",\n\"model\": “gpt-4o-mini*,\ncontent=[{\nfunctions=I[f{\ntool_resources=[{\ntools=[{\n\"type\": \"function\",\n\"function\": {\n\"name\": \"get_current_time\",\n“description”\n“parameters”: {\n“type\": “object”,\n“properties\": {\n“Get the current time in location\",\n“location”: {“type\": \"string\", “description”: “The city name, for example Seattle\"}\nts\n“required”: [\"location\"]"
],
"opts": [],
"ans": "",
"multi": false,
"vote": "",
"dist": [],
"aimgs": [
"ms_ai103_img/out-154_1.png"
],
"aocr": [
"curl https://cul.services.ai.azure.com/ | 2api-version=2024-12-01-preview \\\ncompletions\nembeddings\nthreads\n-H \"Authorization: Bearer $AZURE_AT TOKEN\" \\\n-H \"Content-Type: application/json” \\\n-a'{\n\"instructions\": \"You are a weather bot. Use the provided functions to answer questions.\",\n\"model\": “gpt-40-mini\",\ncontent=[{\nfunctions=I{\ntool_resources=[{"
]
},
{
"n": 175,
"dom": "P",
"case": "",
"type": "MCQ",
"page": 154,
"text": [
"You have an Azure subscription and 10,000 ASCII files.",
"You need to identify files that contain specific phrases. The solution must use cosine similarity.",
"Which Azure OpenAI model should you use?"
],
"imgs": [],
"ocr": [],
"opts": [
{
"l": "A",
"t": "text-embedding-ada-002"
},
{
"l": "B",
"t": "GPT-4"
},
{
"l": "C",
"t": "GPT-35 Turbo"
},
{
"l": "D",
"t": "GPT-4-32k"
}
],
"ans": "A",
"multi": false,
"vote": "",
"dist": [],
"aimgs": [],
"aocr": []
},
{
"n": 176,
"dom": "G",
"case": "",
"type": "MCQ",
"page": 155,
"text": [
"You have an Azure subscription. The subscription contains a Microsoft Foundry resource that hosts a GPT-3.5 Turbo model named Model1. You configure Model1 to use the following system message: “You are an AI assistant that helps people solve mathematical puzzles. Explain your answers as if the request is by a 4-year-old.”",
"Which type of prompt engineering technique is this an example of?"
],
"imgs": [],
"ocr": [],
"opts": [
{
"l": "A",
"t": "affordance"
},
{
"l": "B",
"t": "chain of thought"
},
{
"l": "C",
"t": "few-shot learning"
},
{
"l": "D",
"t": "priming"
}
],
"ans": "D",
"multi": false,
"vote": "",
"dist": [],
"aimgs": [],
"aocr": []
},
{
"n": 177,
"dom": "P",
"case": "",
"type": "MCQ",
"page": 155,
"text": [
"You successfully run the following HTTP request.",
"What is the result of the request?"
],
"imgs": [
"ms_ai103_img/out-155_1.png"
],
"ocr": [
"POST https: //management .azure.com/subscriptions/18c51a87-3a69-47a8-aedc-a54745708a1/resourceGroups/RG1/\nproviders /Microsoft .CognitiveServices/accounts/contosol/regenerateKey ?api-version=2021-04-30\nBody{\"keyName\" : \"Key2\"}"
],
"opts": [
{
"l": "A",
"t": "A new query key was generated."
},
{
"l": "B",
"t": "A new secondary subscription key was created."
},
{
"l": "C",
"t": "A key for Azure AI Services was generated in Azure Key Vault."
},
{
"l": "D",
"t": "The primary subscription key and the secondary subscription key were rotated."
}
],
"ans": "B",
"multi": false,
"vote": "B",
"dist": [
"B 100%"
],
"aimgs": [],
"aocr": []
},
{
"n": 178,
"dom": "P",
"case": "",
"type": "MCQ",
"page": 156,
"text": [
"You are building an app that will use the Azure Speech in Foundry Tools.",
"You need to ensure that the app can authenticate to the service by using a Microsoft Entra ID token.",
"Which two actions should you perform? Each correct answer presents part of the solution.",
"NOTE: Each correct selection is worth one point."
],
"imgs": [],
"ocr": [],
"opts": [
{
"l": "A",
"t": "Enable a virtual network service endpoint."
},
{
"l": "B",
"t": "Create a private endpoint"
},
{
"l": "C",
"t": "Configure a custom subdomain."
},
{
"l": "D",
"t": "Create a Conditional Access policy."
},
{
"l": "E",
"t": "Request an X.509 certificate."
}
],
"ans": "BC",
"multi": true,
"vote": "CD",
"dist": [
"BC 50%",
"CD 50%"
],
"aimgs": [],
"aocr": []
},
{
"n": 179,
"dom": "V",
"case": "",
"type": "MCQ",
"page": 156,
"text": [
"You are building an image sharing app that will use Azure AI to prevent users from sharing sexually explicit images. You need to ensure that inappropriate images are identified correctly. The solution must minimize development effort. What should you use?"
],
"imgs": [],
"ocr": [],
"opts": [
{
"l": "A",
"t": "Vision Studio in Azure Vision in Foundry Tools"
},
{
"l": "B",
"t": "Microsoft Foundry"
},
{
"l": "C",
"t": "Visual Studio"
},
{
"l": "D",
"t": "Content Safety in Foundry Control Plane Studio"
}
],
"ans": "D",
"multi": false,
"vote": "",
"dist": [],
"aimgs": [],
"aocr": []
},
{
"n": 180,
"dom": "P",
"case": "",
"type": "HOTSPOT",
"page": 157,
"text": [
"You have an Azure subscription that has the following configurations:",
"• Subscription ID: 8d3591aa-96b8-4737-ad09-00f9b1ed35ad",
"• Tenant ID: 3edfe572-cb54-3ced-ae12-c5c177f39a12",
"You plan to create a resource that will perform sentiment analysis and optical character recognition (OCR).",
"You need to use an HTTP request to create the resource in the subscription. The solution must use a single key and endpoint. How should you complete the request? To answer, select the appropriate options in the answer area."
],
"imgs": [
"ms_ai103_img/out-157_1.png"
],
"ocr": [
"Answer Area\nhttps: //management.azure.com/ | /resourceGroups/OCRProject/providers/\nsubscriptions/3edfe572-cb54-3ced-ae12-c5c177f39a12\nsubscriptions/8d3591aa-96b8-4737-ad09-00f9b1ed35ad\ntenant/3edfe572-cb54-3ced-ae12-c5c177f39a12\ntenant/8d3591aa-96b8-4737-ad09-00f9b1ed35ad\n| ¥_ /accounts/CS1?api-version=2021-18-01\nMicrosoftApiManagement\nMicrosoft.CognitiveServices\nMicrosoft.ContainerService\nMicrosoft.KeyVault"
],
"opts": [],
"ans": "",
"multi": false,
"vote": "",
"dist": [],
"aimgs": [
"ms_ai103_img/out-157_2.png"
],
"aocr": [
"https://management.azure.com/ ¥ /resourceGroups/OCRProject/providers/\nsubscriptions/3edfe572-cb54-3ced-ae12-c5c177f39a12\nsubscriptions/8d3591aa-96b8-47: 00f9b1ed35ad\ntenant/3edfe572-cb54-3ced-ae12-c5c177f39a12\ntenant/8d3591aa-96b8-4737-ad09-00f9b1ed35ad\n| ¥_ /accounts/CS1?api-version=2021-10-01\nMicrosoftApiManagement\nMicrosoft.CognitiveServices\nMicrosoft.ContainerService\nMicrosoft.KeyVault"
]
},
{
"n": 181,
"dom": "I",
"case": "",
"type": "MCQ",
"page": 158,
"text": [
"You have a file share that contains 5,000 images of scanned invoices.",
"You need to analyze the images. The solution must extract the following data:",
"• Invoice items",
"• Sales amounts",
"• Customer details",
"What should you use?"
],
"imgs": [],
"ocr": [],
"opts": [
{
"l": "A",
"t": "Azure Document Intelligence in Foundry Tools"
},
{
"l": "B",
"t": "Azure Vision in Foundry Tools"
},
{
"l": "C",
"t": "Azure Custom Vision"
},
{
"l": "D",
"t": "Azure AI Immersive Reader"
}
],
"ans": "A",
"multi": false,
"vote": "",
"dist": [],
"aimgs": [],
"aocr": []
},
{
"n": 182,
"dom": "I",
"case": "",
"type": "MCQ",
"page": 158,
"text": [
"You have a Microsoft Foundry project that contains an agent.",
"The agent uses a knowledge source built from documents stored in Azure Blob Storage. The documents include digitally scanned PDFs that contain multipage tables.",
"You have an ingestion job that extracts only plain text, causing loss of table structure, headings, and page-number metadata. Users frequently ask questions that require the retrieval of specific table rows across the pages.",
"You need to configure an ingestion job for a Retrieval Augmented Generation (RAG) pipeline that extracts the contents from the scanned PDFs, preserves tables and headings as structure-aware chunks, and stores page-number metadata with each chunk.",
"How should you configure the ingestion job?"
],
"imgs": [],
"ocr": [],
"opts": [
{
"l": "A",
"t": "Use page-level OCR extraction and store each page as a single chunk."
},
{
"l": "B",
"t": "Use advanced data parsing to reingest the documents."
},
{
"l": "C",
"t": "Use basic parsing and fixed-size chunking."
},
{
"l": "D",
"t": "Use OCR and page-level chunking."
}
],
"ans": "B",
"multi": false,
"vote": "",
"dist": [],
"aimgs": [],
"aocr": []
},
{
"n": 183,
"dom": "V",
"case": "",
"type": "MCQ",
"page": 159,
"text": [
"You are building an app that will use Azure AI to monitor workspaces for safety regulation compliance.",
"You need to recommend a service that meets the following requirements:",
"• Generates alerts when employees enter high-risk areas",
"• Monitors video feeds in real time",
"• Minimizes development effort",
"What should you recommend?"
],
"imgs": [],
"ocr": [],
"opts": [
{
"l": "A",
"t": "Azure AI Video Indexer"
},
{
"l": "B",
"t": "Object detection in Azure Custom Vision"
},
{
"l": "C",
"t": "Azure Vision in Foundry Tools Spatial Analysis"
},
{
"l": "D",
"t": "Azure Vision in Foundry Tools Image Analysis"
}
],
"ans": "C",
"multi": false,
"vote": "",
"dist": [],
"aimgs": [],
"aocr": []
},
{
"n": 184,
"dom": "V",
"case": "",
"type": "MCQ",
"page": 159,
"text": [
"You have a Microsoft Foundry project that contains an agent and an image generation model deployment.",
"The agent generates original images from user-supplied product photos. Currently, when you ask the agent to place a picture of product in different environments, the agent returns images where the product itself is altered and violates your company usage guidelines. You need to minimize the likelihood of changes to the product identity and visual characteristics in the generated image. What should you do?"
],
"imgs": [],
"ocr": [],
"opts": [
{
"l": "A",
"t": "Apply a groundedness detection filter."
},
{
"l": "B",
"t": "Set the input_fidelity parameter to high."
},
{
"l": "C",
"t": "Include a prompt and input image in the request."
},
{
"l": "D",
"t": "Decrease the value of the top_p parameter."
}
],
"ans": "B",
"multi": false,
"vote": "",
"dist": [],
"aimgs": [],
"aocr": []
},
{
"n": 185,
"dom": "G",
"case": "",
"type": "MCQ",
"page": 160,
"text": [
"Note: This section contains one or more sets of questions with the same scenario and problem. Each question presents a unique solution to the problem. You must determine whether the solution meets the stated goals. More than one solution in the set might solve the problem. It is also possible that none of the solutions in the set solve the problem.",
"After you answer a question in this section, you will NOT be able to return. As a result, these questions do not appear on the Review Screen. You have a Microsoft Foundry project that contains an agent. The agent generates summaries from retrieved policy documents. Users report that some responses omit required regulatory clauses, even when the clauses are present in the retrieved content. You need to improve response completeness.",
"Solution: You increase the value of the top_p parameter.",
"Does this meet the goal?"
],
"imgs": [],
"ocr": [],
"opts": [
{
"l": "A",
"t": "Yes"
},
{
"l": "B",
"t": "No"
}
],
"ans": "B",
"multi": false,
"vote": "",
"dist": [],
"aimgs": [],
"aocr": []
},
{
"n": 186,
"dom": "V",
"case": "",
"type": "MCQ",
"page": 160,
"text": [
"You have a factory that produces food products.",
"You need to build a monitoring solution for staff compliance with personal protective equipment (PPE) requirements. The solution must meet the following requirements:",
"• Identify staff who have removed masks or safety glasses.",
"• Perform a compliance check every 15 minutes.",
"• Minimize development effort.",
"• Minimize costs.",
"Which service should you use?"
],
"imgs": [],
"ocr": [],
"opts": [
{
"l": "A",
"t": "Azure AI Face"
},
{
"l": "B",
"t": "Azure Vision in Foundry Tools"
},
{
"l": "C",
"t": "Azure Video Analyzer for Media (formerly Video Indexer)"
}
],
"ans": "A",
"multi": false,
"vote": "B",
"dist": [
"B 100%"
],
"aimgs": [],
"aocr": []
},
{
"n": 187,
"dom": "P",
"case": "C1",
"type": "MCQ",
"page": 161,
"text": [
"You need to recommend a solution to assess the responses generated by Agent1 when the agent uses the product information stored in storage1. The solution must meet the technical requirements.",
"What should you include in the recommendation?"
],
"imgs": [],
"ocr": [],
"opts": [
{
"l": "A",
"t": "a Retrieval Augmented Generation (RAG) evaluator"
},
{
"l": "B",
"t": "a custom guardrail"
},
{
"l": "C",
"t": "a coherence evaluator"
},
{
"l": "D",
"t": "model fine-tuning"
}
],
"ans": "A",
"multi": false,
"vote": "A",
"dist": [
"A 100%"
],
"aimgs": [],
"aocr": []
}
]
};
