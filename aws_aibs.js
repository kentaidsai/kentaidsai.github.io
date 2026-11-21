// AIB-C01 題庫（320 題）：id、考試 Domain(dm/domain)、子主題(sub)、來源(code)、題幹(stem)、選項(opts)、正確答案(fin)、解析(expl)
const DATA=[
{
"id": "CC-001",
"dm": 1,
"domain": "Domain 1：AI 基礎與素養（AI Fundamentals and Literacy）24%",
"sub": "AI／ML／GenAI 基礎概念與資料類型",
"code": "CC",
"stem": "A grocery chain's merchandising director asks why the demand forecasting model needs two years of past sales before it can be used. Which explanation is MOST accurate?",
"opts": {
"A": "Regulations require two full years of records before any automated forecast can be used for purchasing decisions.",
"B": "The model copies last year's sales figures for each week, so it needs a full year of data to fill every week.",
"C": "The model learns patterns such as seasonality from historical examples, so it needs enough history to generalise.",
"D": "The model stores every past transaction so it can look up an exact match for each future week it forecasts."
},
"fin": [
"C"
],
"expl": "Training means learning patterns from historical examples; seasonal patterns need several cycles of history to learn and generalise. A model doesn't copy last year's figures (B) or look up exact matches (D), and no general regulation requires two years of records (A).",
"multi": false
},
{
"id": "CC-002",
"dm": 1,
"domain": "Domain 1：AI 基礎與素養（AI Fundamentals and Literacy）24%",
"sub": "AI／ML／GenAI 基礎概念與資料類型",
"code": "CC",
"stem": "A fashion retailer's executive team is comparing three proposals: one predicts which customers will return items, one writes product descriptions, and one routes refund requests over 500 dollars to a supervisor. Which statement correctly classifies the proposals?",
"opts": {
"A": "Return prediction is generative AI, descriptions are machine learning, and routing needs a trained model.",
"B": "All three are traditional machine learning, because each one is trained on the retailer's own past records.",
"C": "All three are generative AI, because each one produces an output that a store employee will act upon.",
"D": "Return prediction is machine learning, descriptions are generative AI, and the routing is a business rule."
},
"fin": [
"D"
],
"expl": "Predicting returns from history is classic ML, writing new descriptions is generative AI, and a fixed 500 dollar threshold is a rule that needs no AI. Producing an output doesn't make something generative AI (C); A swaps ML and Gen AI; a fixed threshold isn't trained on records (B).",
"multi": false
},
{
"id": "CC-003",
"dm": 1,
"domain": "Domain 1：AI 基礎與素養（AI Fundamentals and Literacy）24%",
"sub": "AI／ML／GenAI 基礎概念與資料類型",
"code": "CC",
"stem": "An online marketplace wants to use AI on two data sets: a table of 5 years of order transactions and a collection of 2 million free-text customer reviews. Which statement BEST describes the difference for planning purposes?",
"opts": {
"A": "The order table is structured and suits predictive models; the reviews are unstructured and suit generative AI.",
"B": "The reviews are structured because each one has a date, so they suit forecasting better than the order table.",
"C": "The order table is unstructured because it is very large, so it suits generative AI better than the reviews.",
"D": "Both data sets are unstructured, so they need exactly the same preparation effort before any AI project can use them."
},
"fin": [
"A"
],
"expl": "Rows and columns with a fixed schema are structured and suit predictive ML; free text is unstructured and suits Gen AI or NLP. The two need different preparation (D). A date field doesn't make free text structured (B), and size doesn't make a table unstructured (C).",
"multi": false
},
{
"id": "CC-004",
"dm": 1,
"domain": "Domain 1：AI 基礎與素養（AI Fundamentals and Literacy）24%",
"sub": "AI／ML／GenAI 基礎概念與資料類型",
"code": "CC",
"stem": "A home goods retailer trained a product recommendation model on purchase data from its urban stores. After launching it in rural stores, the recommendations perform poorly. What is the MOST likely cause?",
"opts": {
"A": "Rural stores have fewer products, so the model needs to be retrained as a generative AI model instead.",
"B": "The training data did not represent rural customers, so the model learned patterns that do not apply there.",
"C": "The model was trained for too long, so it forgot the general patterns it had learned from the urban stores.",
"D": "Recommendation models only work with unstructured data, and rural purchase records are stored as tables."
},
"fin": [
"B"
],
"expl": "Data that doesn't represent the population the model serves is a data quality (representativeness) problem. Training longer doesn't cause this kind of forgetting (C); recommendation models commonly use structured purchase data (D); fewer products doesn't call for generative AI (A).",
"multi": false
},
{
"id": "CC-005",
"dm": 1,
"domain": "Domain 1：AI 基礎與素養（AI Fundamentals and Literacy）24%",
"sub": "AI／ML／GenAI 基礎概念與資料類型",
"code": "CC",
"stem": "A retailer's legal and data teams keep using terms such as 'model', 'training data' and 'AI system' differently in contracts and policies. The chief data officer wants a recognised framework that describes the components of ML-based AI systems with a common vocabulary. Which standard BEST fits this need?",
"opts": {
"A": "ISO/IEC 42001, because it certifies the organisation's AI management system and its policies.",
"B": "ISO 9001, because it defines the quality management processes for products and their services.",
"C": "ISO/IEC 23053, because it gives a framework describing the components of ML-based AI systems.",
"D": "ISO/IEC 27001, because it defines the controls for an information security management system."
},
"fin": [
"C"
],
"expl": "ISO/IEC 23053 provides a framework and shared vocabulary for AI systems that use machine learning. ISO/IEC 42001 is the certifiable AI management system standard (governing AI, not describing components); 27001 covers information security; 9001 covers quality management.",
"multi": false
},
{
"id": "CC-006",
"dm": 1,
"domain": "Domain 1：AI 基礎與素養（AI Fundamentals and Literacy）24%",
"sub": "AI／ML／GenAI 基礎概念與資料類型",
"code": "CC",
"stem": "A retail CEO says, \"Our pricing AI is software, so it will give exactly the same answer every time and never be wrong.\" Which response from the AI strategy lead is MOST accurate?",
"opts": {
"A": "Correct, because once a model is deployed its predictions are fixed and checked like any other software.",
"B": "Correct, provided the model was trained on at least five years of clean and complete pricing history.",
"C": "Not quite: AI models are always wrong for new products, so prices for those should be set manually.",
"D": "Not quite: AI predictions are probabilistic, so they can be wrong and need monitoring and tolerance."
},
"fin": [
"D"
],
"expl": "AI models produce the most likely answer from learned patterns, so they can be wrong; decisions need error tolerance, review and monitoring. Deployed models aren't guaranteed correct like deterministic code (A), more history doesn't make them infallible (B), and they aren't always wrong for new products (C).",
"multi": false
},
{
"id": "CC-007",
"dm": 1,
"domain": "Domain 1：AI 基礎與素養（AI Fundamentals and Literacy）24%",
"sub": "AI／ML／GenAI 基礎概念與資料類型",
"code": "CC",
"stem": "A grocery chain wants to flag any refund over 200 dollars that lacks a receipt for manager approval. The rule is fixed by policy and auditors need every decision to be exactly reproducible. Which approach is MOST appropriate?",
"opts": {
"A": "Use rule-based automation that applies the 200 dollars and receipt conditions to every refund request.",
"B": "Deploy a generative AI assistant that reads each refund and decides whether it needs approval.",
"C": "Train a machine learning model on past refunds to predict which ones a manager would have approved.",
"D": "Build an AI agent that checks refunds and escalates the ones it judges to carry the highest risk."
},
"fin": [
"A"
],
"expl": "When the logic is fully known and decisions must be exactly reproducible, rule-based automation is cheaper, predictable and auditable. ML, Gen AI or an agent adds cost and probabilistic behaviour to a problem a simple rule solves.",
"multi": false
},
{
"id": "CC-008",
"dm": 1,
"domain": "Domain 1：AI 基礎與素養（AI Fundamentals and Literacy）24%",
"sub": "營運監控、可靠性與 Agentic AI",
"code": "CC",
"stem": "An e-commerce company is considering an AI agent to handle late-delivery complaints. Which capability MOST distinguishes an AI agent from the company's existing FAQ chatbot?",
"opts": {
"A": "It can be trained on the company's FAQ documents so that its answers match published store policies.",
"B": "It can plan steps and use tools such as order lookup and refund systems to take actions toward a goal.",
"C": "It can be shown to customers inside the mobile app as well as on the company's website and in email.",
"D": "It can answer customer questions in natural language around the clock without any human staff involved."
},
"fin": [
"B"
],
"expl": "Agents plan multi-step work and use tools to act on systems, with some autonomy, which a question-answering chatbot doesn't do. Round-the-clock answers (D) and FAQ grounding (A) are things the chatbot can already do; channels (C) are a deployment choice.",
"multi": false
},
{
"id": "CC-009",
"dm": 1,
"domain": "Domain 1：AI 基礎與素養（AI Fundamentals and Literacy）24%",
"sub": "營運監控、可靠性與 Agentic AI",
"code": "CC",
"stem": "An online retailer launched a fraud detection model a year ago. No code has changed, but the fraud catch rate has fallen steadily since a new payment method became popular. Which explanation and response is BEST?",
"opts": {
"A": "Fraud models are only accurate in their first year; replace it with a generative AI model this time.",
"B": "The model's software has a defect that appeared over time; reinstall the original version of the model file.",
"C": "The catch rate is expected to fall; lower the alert threshold so the model flags every new payment.",
"D": "The model has drifted as transaction patterns changed; monitor performance and retrain it on recent data."
},
"fin": [
"D"
],
"expl": "When behaviour changes after training, models drift; the response is monitoring against a baseline and retraining on recent data. Reinstalling the same model (B) keeps outdated patterns; there's no one-year rule and Gen AI isn't a fraud-scoring replacement (A); flagging every new payment (C) floods reviewers.",
"multi": false
},
{
"id": "CC-010",
"dm": 1,
"domain": "Domain 1：AI 基礎與素養（AI Fundamentals and Literacy）24%",
"sub": "營運監控、可靠性與 Agentic AI",
"code": "CC",
"stem": "A fashion retailer discovers that store managers paste customer complaints, including names and phone numbers, into several free public chatbots. The CIO wants to reduce risk without stopping productive use of AI. Which action should come FIRST?",
"opts": {
"A": "Wait for a regulator to issue guidance on chatbots before deciding which tools staff may use at work.",
"B": "Block every AI website on the corporate network and tell staff that AI tools are no longer allowed.",
"C": "Publish which AI tools are approved, under evaluation or blocked, with data rules and an approved option.",
"D": "Let each store manager choose their own AI tools, as long as each one signs a personal liability waiver."
},
"fin": [
"C"
],
"expl": "Transparent classification of tools, with data-use rules and a useful approved alternative, reduces shadow AI risk while keeping productive use. Blanket bans (B) push use underground; waivers (D) don't protect customer data; waiting (A) leaves the exposure in place.",
"multi": false
},
{
"id": "CC-011",
"dm": 1,
"domain": "Domain 1：AI 基礎與素養（AI Fundamentals and Literacy）24%",
"sub": "營運監控、可靠性與 Agentic AI",
"code": "CC",
"stem": "A marketplace's operations team wants AI help with three tasks. Which task is the BEST fit for an AI agent rather than a simple assistant or fixed workflow?",
"opts": {
"A": "Answering a shopper's question about the store's standard return window using the published policy page.",
"B": "Resolving a seller dispute by checking orders, carrier status and policy, then issuing a credit within limits.",
"C": "Sending the same order confirmation email to every buyer immediately after each successful card payment.",
"D": "Calculating the monthly commission for each seller as a fixed percentage of that seller's total sales."
},
"fin": [
"B"
],
"expl": "A multi-step task across several systems, where the steps vary by case and the action can be bounded, suits an agent. A single policy answer suits an assistant (A); a fixed email (C) is workflow automation; a fixed percentage (D) is a calculation rule.",
"multi": false
},
{
"id": "CC-012",
"dm": 1,
"domain": "Domain 1：AI 基礎與素養（AI Fundamentals and Literacy）24%",
"sub": "提示工程、RAG 與模型調整",
"code": "CC",
"stem": "A retailer's marketing team gets vague, inconsistent product descriptions from a generative AI tool when they type 'write a description'. Which change is MOST likely to improve the results quickly and cheaply?",
"opts": {
"A": "Give clear instructions: audience, tone, length, required features and an example in the house style.",
"B": "Raise the model's temperature setting so it produces more varied and imaginative descriptions.",
"C": "Switch to the largest model available, because larger models never need detailed written instructions.",
"D": "Fine-tune a custom model on ten thousand product descriptions before the team writes any new copy."
},
"fin": [
"A"
],
"expl": "Prompt engineering (clear task, audience, format, constraints and a few-shot example) is the fastest, cheapest improvement. Fine-tuning (D) costs more; higher temperature (B) makes output more random; larger models still benefit from clear instructions (C).",
"multi": false
},
{
"id": "CC-013",
"dm": 1,
"domain": "Domain 1：AI 基礎與素養（AI Fundamentals and Literacy）24%",
"sub": "提示工程、RAG 與模型調整",
"code": "CC",
"stem": "A grocery chain's customer assistant answers questions about weekly promotions. Promotions change every Monday, and the assistant keeps quoting last week's offers. Which approach BEST fixes this?",
"opts": {
"A": "Add the full year's promotion history to every single prompt so that the model can see all offers at once.",
"B": "Use retrieval augmented generation so answers draw on the current promotions document at question time.",
"C": "Lower the temperature so that the assistant gives the same answer to each question every time it runs.",
"D": "Fine-tune the model every Monday on the new promotions so that it memorises each week's offers."
},
"fin": [
"B"
],
"expl": "RAG retrieves current documents at question time, so updating the promotions document updates the answers with no retraining. Weekly fine-tuning (D) is costly and lags; stuffing a year of history (A) wastes tokens; lower temperature (C) gives consistency, not currency.",
"multi": false
},
{
"id": "CC-014",
"dm": 1,
"domain": "Domain 1：AI 基礎與素養（AI Fundamentals and Literacy）24%",
"sub": "提示工程、RAG 與模型調整",
"code": "CC",
"stem": "A retailer's legal team uses a generative AI assistant to review supplier contracts. For contracts over 300 pages, the assistant misses clauses near the end and costs are much higher than expected. What is the MOST likely cause?",
"opts": {
"A": "The model was not fine-tuned on legal language, so it cannot read contract clauses written by lawyers.",
"B": "The assistant's temperature is too low, so it stops reading once it has found a few relevant clauses.",
"C": "Generative AI models can only process documents that are shorter than about ten pages of plain text.",
"D": "The contracts exceed the model's context window, and long inputs use many tokens that drive up cost."
},
"fin": [
"D"
],
"expl": "Very long inputs can exceed the context window so later content is cut or poorly attended to, and token-based pricing makes long inputs expensive; chunking, summarisation or RAG help. Temperature controls randomness, not how much is read (B); models handle far more than ten pages (C).",
"multi": false
},
{
"id": "CC-015",
"dm": 1,
"domain": "Domain 1：AI 基礎與素養（AI Fundamentals and Literacy）24%",
"sub": "提示工程、RAG 與模型調整",
"code": "CC",
"stem": "A fashion brand wants its assistant to write social posts in a distinctive brand voice across thousands of posts. Careful prompting with examples still gives inconsistent tone. Which technique is MOST appropriate next?",
"opts": {
"A": "Fine-tuning a model on approved past posts, so it learns the brand voice and applies it consistently.",
"B": "Raising the maximum output tokens, so the model has more room to express the brand's personality.",
"C": "Retrieval augmented generation over the brand's style guide, so each post retrieves a few style rules.",
"D": "Training a new foundation model from scratch on the brand's posts and its full product catalogue."
},
"fin": [
"A"
],
"expl": "When prompting can't achieve a consistent style at scale, fine-tuning on good examples is the next step. RAG adds knowledge but rarely changes tone as reliably (C); training from scratch (D) is far too costly; more output tokens (B) allow longer text, not a consistent voice.",
"multi": false
},
{
"id": "CC-016",
"dm": 1,
"domain": "Domain 1：AI 基礎與素養（AI Fundamentals and Literacy）24%",
"sub": "提示工程、RAG 與模型調整",
"code": "CC",
"stem": "A retailer's assistant answers HR policy questions for employees. Which TWO practices BEST reduce the chance that it gives confident but wrong answers? (Select TWO)",
"opts": {
"A": "Remove the policy documents from the prompt so that the model relies on its broad general knowledge.",
"B": "Increase the maximum output length so that the assistant can explain each answer in far more detail.",
"C": "Instruct the assistant to say it does not know when the answer is not found in the provided sources.",
"D": "Raise the temperature so the assistant considers more possible answers before it chooses one.",
"E": "Ground answers in the current HR policy documents and show citations that employees can check."
},
"fin": [
"C",
"E"
],
"expl": "Grounding on current documents with citations (E) and instructing the model to admit when the answer isn't in the sources (C) both reduce hallucinations. Higher temperature (D) adds randomness; removing sources (A) makes the model guess; longer answers (B) aren't more accurate.",
"multi": true
},
{
"id": "CN-002",
"dm": 1,
"domain": "Domain 1：AI 基礎與素養（AI Fundamentals and Literacy）24%",
"sub": "提示工程、RAG 與模型調整",
"code": "CN",
"stem": "A sales enablement manager uses a generative AI assistant to draft follow-up emails, but the outputs are generic, too long, and inconsistent in format. The manager cannot change the model. Which prompt changes are MOST likely to improve the results? (Choose two.)",
"opts": {
"A": "Provide clear context and constraints, such as the customer's industry, the meeting outcome, the desired tone, and a 120-word limit.",
"B": "Include one or two examples of well-written follow-up emails that show the expected structure (few-shot prompting).",
"C": "Keep the prompt as short as possible, such as 'Write a follow-up email', so that the model has more creative freedom over content and format.",
"D": "Repeat the same vague prompt several times until a good output appears by chance.",
"E": "Ask the model to ignore any formatting guidance so that it chooses the best format itself."
},
"fin": [
"A",
"B"
],
"expl": "Core prompt engineering principles are to be specific about the task, give relevant context, set constraints (length, tone, audience), and show examples of the desired output. Few-shot examples are especially effective for getting a consistent structure. A minimal prompt causes exactly the generic, variable output the manager wants to fix. Re-running a vague prompt relies on chance, wastes time and tokens, and does not produce consistency. Removing formatting guidance makes inconsistent formatting more likely, not less.",
"multi": true
},
{
"id": "CN-003",
"dm": 1,
"domain": "Domain 1：AI 基礎與素養（AI Fundamentals and Literacy）24%",
"sub": "AWS 服務、定價與成本管理",
"code": "CN",
"stem": "A mid-sized marketing agency wants its account managers to ask questions about campaign performance data and internal documents in natural language, get AI-generated summaries, and automate routine reporting tasks. The agency has no data science team and wants a ready-to-use solution with per-user pricing instead of building an application. Which AWS offering best fits this business requirement?",
"opts": {
"A": "Amazon SageMaker AI, to train and host custom models for each reporting task that the agency performs",
"B": "Amazon Bedrock, to have developers build a custom generative AI application from foundation models and agents",
"C": "Amazon Quick, an AI assistant for business users that combines BI, research, and automation",
"D": "AWS Pricing Calculator, to generate performance summaries from campaign data"
},
"fin": [
"C"
],
"expl": "Amazon Quick provides AI-powered assistance for business users, including natural-language questions over data and documents, AI-generated insights and dashboards, research, and workflow automation. It is priced mainly through per-user (seat-based) subscriptions, with some usage-based charges, and requires no ML expertise, which matches a buy decision for a team without data scientists. Amazon SageMaker AI is for building, training, and deploying custom ML models, so it requires ML skills and is not a ready-to-use business assistant. Amazon Bedrock is a platform for developers to build GenAI applications with foundation models; it fits a build decision, not a ready-to-use tool. AWS Pricing Calculator estimates AWS costs and does not analyze business data.",
"multi": false
},
{
"id": "CN-006",
"dm": 1,
"domain": "Domain 1：AI 基礎與素養（AI Fundamentals and Literacy）24%",
"sub": "營運監控、可靠性與 Agentic AI",
"code": "CN",
"stem": "An e-commerce company launched a product recommendation model 18 months ago. Click-through rates on recommendations have gradually declined since then, although the model and its code have not changed. During that period, the company added new product categories and its customer base shifted toward younger shoppers. What is the MOST likely explanation, and what should the product manager advocate?",
"opts": {
"A": "The decline is caused by seasonality alone; the team should take no action and wait for click-through rates to recover on their own.",
"B": "The model has reached its maximum possible accuracy; the team should replace AI recommendations with a list curated manually by merchandisers.",
"C": "The model's software has degraded over time; the team should reinstall the same model version from its original package.",
"D": "Model drift: customer behavior and the catalog changed after training; monitor performance and retrain on recent data."
},
"fin": [
"D"
],
"expl": "Models reflect the data they were trained on. When the real world changes (new product categories, a different customer mix, new preferences), the inputs and the relationships the model learned no longer match, and performance declines. This is called model drift (data drift and concept drift). It is why AI solutions need ongoing monitoring against business KPIs and periodic retraining or updates. Model files do not wear out like hardware, so reinstalling the same model will not help. Abandoning AI for manual curation ignores a well-understood, fixable cause. Seasonality would cause cyclical patterns, not an 18-month gradual decline that coincides with business changes, and taking no action lets value keep eroding.",
"multi": false
},
{
"id": "CN-014",
"dm": 1,
"domain": "Domain 1：AI 基礎與素養（AI Fundamentals and Literacy）24%",
"sub": "AI／ML／GenAI 基礎概念與資料類型",
"code": "CN",
"stem": "A regional insurance company has finished building a model that estimates the likelihood that a new claim is fraudulent. The project sponsor asks what happens next, when adjusters submit new claims each day and the model returns a fraud-risk score for each one. Which term describes this stage of the AI lifecycle?",
"opts": {
"A": "Inference",
"B": "Labeling",
"C": "Training",
"D": "Fine-tuning"
},
"fin": [
"A"
],
"expl": "Inference is the stage where a trained model is applied to new, unseen inputs (today's claims) to produce predictions (fraud-risk scores). It is the stage that delivers ongoing business value, and for many AI services it is where most recurring cost sits. Training is the earlier stage where the model learns patterns from historical data; it has already been completed here. Labeling is the preparation of training data by tagging examples with known outcomes (for example, 'fraud' or 'not fraud'), not the scoring of live claims. Fine-tuning further trains an existing model on additional data to specialize it; nothing is being retrained when adjusters submit claims.",
"multi": false
},
{
"id": "CN-017",
"dm": 1,
"domain": "Domain 1：AI 基礎與素養（AI Fundamentals and Literacy）24%",
"sub": "提示工程、RAG 與模型調整",
"code": "CN",
"stem": "A software company wants a GenAI support assistant that answers customer questions by using its product documentation. The documentation changes every week with each release, and answers must cite the source article so that customers can verify them. Which model adaptation approach best meets these business requirements at the lowest ongoing effort?",
"opts": {
"A": "Rely on the foundation model's general knowledge of the product without connecting any company data or documentation.",
"B": "Fine-tune a foundation model on the documentation every week after each release, and ask it to name the articles it learned from.",
"C": "Train a new foundation model from scratch on the company's documentation and retrain it after every weekly release.",
"D": "Use RAG, such as Amazon Bedrock Knowledge Bases, to retrieve current documentation and cite its sources."
},
"fin": [
"D"
],
"expl": "RAG retrieves relevant passages from a company's own, current content and supplies them to the model with each question. When the documentation changes, updating the content source is enough, with no retraining, and responses can reference the retrieved source documents. Amazon Bedrock Knowledge Bases provides managed RAG on AWS. Weekly fine-tuning is expensive and slow, it cannot easily cite sources, and it would always lag the latest release. Training a foundation model from scratch costs far more and takes far longer than the use case justifies. The model's general knowledge does not include the company's private, weekly-changing documentation, which leads to outdated or fabricated (hallucinated) answers.",
"multi": false
},
{
"id": "CN-030",
"dm": 1,
"domain": "Domain 1：AI 基礎與素養（AI Fundamentals and Literacy）24%",
"sub": "營運監控、可靠性與 Agentic AI",
"code": "CN",
"stem": "A bank is evaluating an AI agent solution for loan-origination support. The design uses separate agents for document intake, credit checks, and compliance review instead of one general-purpose agent. The program manager wants to understand how such a multi-agent system works before presenting it to the steering committee. Which statements are accurate? (Choose two.)",
"opts": {
"A": "An orchestrator (supervisor) agent can break a request into subtasks, delegate them to specialized agents, and combine their results into one response.",
"B": "Multi-agent systems are fully deterministic, so the same loan application always produces exactly the same sequence of agent actions and outputs.",
"C": "Agents can communicate with one another to pass context and intermediate results, which lets each agent specialize in a narrower task.",
"D": "Each agent must be a custom machine learning model that the bank trains from scratch on its own loan data.",
"E": "Because the agents act autonomously, the system no longer needs access permissions, guardrails, or human approval steps."
},
"fin": [
"A",
"C"
],
"expl": "Multi-agent designs split a complex workflow among specialized agents. An orchestration strategy, such as a supervisor agent, decomposes the request, routes each subtask to the right specialist, and assembles the final result. Agent-to-agent communication passes context and results between agents so each can focus on a narrow, well-defined job. On AWS, for example, Amazon Bedrock supports multi-agent collaboration in which a supervisor agent coordinates collaborator agents. Autonomy increases the need for oversight: agents take actions in business systems, so they still need scoped permissions, guardrails, and human approval for high-impact decisions such as loan approvals. Agents are typically built on existing foundation models plus tools and instructions, not custom models trained from scratch. Because they rely on foundation models that reason and plan, agents are not guaranteed to take identical steps for identical inputs, which is one reason monitoring and auditing matter.",
"multi": true
},
{
"id": "CN-034",
"dm": 1,
"domain": "Domain 1：AI 基礎與素養（AI Fundamentals and Literacy）24%",
"sub": "提示工程、RAG 與模型調整",
"code": "CN",
"stem": "A pharmaceutical company already uses RAG so that its writing assistant can reference approved product information. Reviewers report that the facts are correct, but drafts consistently miss the company's highly specialized regulatory writing style, terminology, and structure, even with detailed prompts and examples. The company has thousands of approved, high-quality documents written in that style. Which approach should the strategist recommend evaluating next?",
"opts": {
"A": "Replace the GenAI assistant with rule-based templates for every regulatory document type, completed manually by the writing team.",
"B": "Fine-tune a foundation model on the approved documents to learn the style, and keep using RAG for current facts.",
"C": "Increase the model's context window so that it can process longer prompts with more style examples in each request.",
"D": "Add more product documents and approved regulatory submissions to the RAG knowledge base so retrieval returns more examples."
},
"fin": [
"B"
],
"expl": "RAG and fine-tuning solve different problems. RAG supplies up-to-date knowledge at question time, while fine-tuning adapts a model's behavior, such as its style, tone, domain terminology, and output structure, by training it further on curated examples. Because the facts are already correct and prompt engineering has not fixed the style, fine-tuning on thousands of approved documents is the logical next step to evaluate. Combining it with RAG keeps facts current. Adding more documents to RAG improves factual coverage, which is not the problem. Rule-based templates cannot produce the varied, nuanced writing the assistant was intended to deliver and would give up the GenAI investment. A larger context window allows longer inputs but does not teach the model a consistent specialized style.",
"multi": false
},
{
"id": "CN-035",
"dm": 1,
"domain": "Domain 1：AI 基礎與素養（AI Fundamentals and Literacy）24%",
"sub": "AI／ML／GenAI 基礎概念與資料類型",
"code": "CN",
"stem": "A legal team uses a generative AI assistant to review contracts. For short agreements, the summaries are accurate. When users paste a 400-page master services agreement plus all its amendments into one request, the assistant ignores clauses near the end or returns an error saying the input is too long. Which concept explains this behavior?",
"opts": {
"A": "The model's context window, which limits how many tokens it can process in a single request",
"B": "Model drift, because the model has become less accurate on long documents since it was trained",
"C": "Overfitting, because the model memorized short contracts during training",
"D": "The temperature setting, which controls how long the model's responses can be and how much input it reads"
},
"fin": [
"A"
],
"expl": "Foundation models process text as tokens, and each model has a maximum context window that covers the prompt plus the response. Very long inputs can exceed the limit (causing an error or truncation), and even within the limit, quality can drop on very long inputs. Business mitigations include splitting documents into sections, summarizing in stages, choosing a model with a larger context window, or using RAG to retrieve only the relevant clauses. Token volume also drives cost on consumption-based pricing. Model drift is gradual performance decline as real-world data changes over time; it does not depend on input length. Temperature controls randomness or creativity, not input capacity. Overfitting is a training issue and does not explain errors that appear only with long inputs.",
"multi": false
},
{
"id": "CN-041",
"dm": 1,
"domain": "Domain 1：AI 基礎與素養（AI Fundamentals and Literacy）24%",
"sub": "營運監控、可靠性與 Agentic AI",
"code": "CN",
"stem": "A travel company is comparing a standard GenAI chatbot that answers questions with an AI agent proposed for its customer service team. Which capabilities distinguish the AI agent from the chatbot? (Choose two.)",
"opts": {
"A": "It is trained only on structured data from company systems, which makes it more accurate and reliable than a chatbot.",
"B": "It never makes mistakes when it acts on behalf of customers, so it does not need any human oversight, approval steps, or guardrails.",
"C": "It can use tools, such as the booking system, payment service, or other agents, to take actions instead of only returning text.",
"D": "It generates natural language responses to customer questions.",
"E": "It can plan and carry out multi-step tasks toward a goal with limited human direction, such as rebooking a cancelled trip end to end."
},
"fin": [
"C",
"E"
],
"expl": "AI agents are defined by autonomy (reasoning about a goal, planning steps, and executing them with limited human direction) and tool use (invoking APIs, systems, data sources, or other agents to take real actions). Multiple agents can also communicate and be coordinated through orchestration. Generating natural language responses is something a standard chatbot already does, so it does not distinguish an agent. Agents can make mistakes and, because they take actions, they need more oversight, permissions, and guardrails, not less. Agents are typically built on foundation models trained on large amounts of unstructured data; 'trained only on structured data' is not a distinguishing capability and is incorrect.",
"multi": true
},
{
"id": "CN-050",
"dm": 1,
"domain": "Domain 1：AI 基礎與素養（AI Fundamentals and Literacy）24%",
"sub": "AI 治理、風險分級、合規法規與存取控制",
"code": "CN",
"stem": "A survey at a professional services firm reveals that employees are pasting client documents into dozens of unapproved public AI tools. Leadership does not want to ban AI, because productivity gains are real. Which action should the AI program lead take FIRST to reduce shadow AI risk while still enabling adoption?",
"opts": {
"A": "Let each department choose its own AI tools without central review or approval, so that adoption moves at maximum speed.",
"B": "Publish a catalog of approved, blocked, and under-evaluation AI tools, with a process to request review of new ones.",
"C": "Block all external websites that offer AI features until a full enterprise AI platform has been built, tested, and approved.",
"D": "Ask employees to stop using client documents in prompts and rely on self-reporting."
},
"fin": [
"B"
],
"expl": "Shadow AI happens when employees adopt unsanctioned tools because sanctioned options are unclear or missing. A transparent classification (approved, blocked, under evaluation), combined with an intake process for new requests, tells employees what they can safely use, channels demand toward vetted tools that protect client data, and gives governance teams visibility. A blanket block conflicts with leadership's goal of enabling adoption and usually pushes usage to personal devices, which increases shadow AI. Uncoordinated department choices recreate the problem with no data-protection review. A request without clear guidance or approved alternatives relies on goodwill and does not give employees a safe path.",
"multi": false
},
{
"id": "CN-053",
"dm": 1,
"domain": "Domain 1：AI 基礎與素養（AI Fundamentals and Literacy）24%",
"sub": "營運監控、可靠性與 Agentic AI",
"code": "CN",
"stem": "An HR knowledge assistant answered policy questions accurately at launch. Six months later, employees report that it often cites outdated leave and travel policies. Investigation shows that HR updated several policies in a new document repository that the assistant does not draw from, while the old documents were never retired. What is the MOST effective way to mitigate this reliability risk?",
"opts": {
"A": "Increase the model's context window so that it can read more documents, including older policy versions, in each request.",
"B": "Assign source owners, add new authoritative content, retire superseded documents, and monitor answer accuracy.",
"C": "Add a disclaimer telling employees to verify every answer with HR, and make no other changes to the assistant or to its document sources.",
"D": "Switch to a different foundation model, because the current model has drifted since launch and no longer reflects HR's latest leave and travel policies."
},
"fin": [
"B"
],
"expl": "The root cause is data quality degradation. The knowledge sources the assistant relies on became stale and incomplete, so it confidently returns outdated answers. The fix is a data governance fix: clear ownership of the sources, a process to add new authoritative content and retire superseded documents, and ongoing accuracy monitoring (option B). Changing the model (option D) does not fix stale source content, and the problem is not model drift. A disclaimer by itself (option C) moves the burden to employees and leaves the root cause in place. A larger context window (option A) does not help when the correct documents are not in the sources and outdated ones still are.",
"multi": false
},
{
"id": "CN-059",
"dm": 1,
"domain": "Domain 1：AI 基礎與素養（AI Fundamentals and Literacy）24%",
"sub": "AI／ML／GenAI 基礎概念與資料類型",
"code": "CN",
"stem": "A retail executive team is reviewing three proposals: (1) a model that forecasts weekly demand for each store from past sales, (2) an assistant that drafts new product descriptions in the brand's voice, and (3) a chatbot that follows a fixed decision tree to answer return-policy questions. The CFO asks which proposal is an example of generative AI. Which proposal should the strategist identify?",
"opts": {
"A": "Proposal 3, because any chatbot that holds a conversation is generative AI.",
"B": "Proposal 2, because it creates new content, such as text, based on patterns learned from data.",
"C": "Proposal 1, because any model that learns patterns from historical sales data is generative AI.",
"D": "All three proposals, because generative AI is another name for any artificial intelligence that uses data."
},
"fin": [
"B"
],
"expl": "AI is the broad field of systems that perform tasks associated with human intelligence. Machine learning (ML) is a subset of AI in which systems learn patterns from data rather than following explicitly programmed rules. Generative AI is a subset of ML that creates new content (text, images, code, audio). Drafting new product descriptions is content generation, so Proposal 2 is GenAI. Proposal 1 is predictive (traditional) ML: it learns from historical data, but it outputs a forecast number, not new content, so learning from data alone does not make something generative. Proposal 3 follows a fixed decision tree, which is rule-based automation; having a conversational interface does not make it GenAI. The terms are nested, not interchangeable, so 'all three' is wrong.",
"multi": false
},
{
"id": "CN-061",
"dm": 1,
"domain": "Domain 1：AI 基礎與素養（AI Fundamentals and Literacy）24%",
"sub": "AI／ML／GenAI 基礎概念與資料類型",
"code": "CN",
"stem": "A hospital network wants to use AI to improve patient experience. Its data includes appointment records in a scheduling database, free-text physician notes, recorded call-center conversations, and scanned intake forms. The program manager asks which of these sources would be classified as structured data. Which answer is correct?",
"opts": {
"A": "The free-text physician notes, because they are stored in fields of an electronic health record system",
"B": "The recorded call-center conversations, because each call has a timestamp and an agent ID",
"C": "The scanned intake forms, because the paper forms always follow a standard printed template",
"D": "The appointment records, because they use predefined fields such as date and clinic"
},
"fin": [
"D"
],
"expl": "Structured data is organized into a predefined schema of rows and columns with consistent fields, like appointment records in a scheduling database. It is the natural input for traditional ML tasks such as forecasting no-shows. Free-text notes are unstructured data even when they sit inside a system; the content itself has no fixed fields. Call recordings are unstructured audio; a timestamp is metadata and does not make the conversation structured. Scanned forms are images, so they are unstructured (sometimes called semi-structured once their fields are extracted) until document-extraction AI turns them into fields. Recognizing which data is unstructured matters because text, audio, and images usually call for NLP, speech, computer vision, document extraction, or GenAI capabilities.",
"multi": false
},
{
"id": "CN-062",
"dm": 1,
"domain": "Domain 1：AI 基礎與素養（AI Fundamentals and Literacy）24%",
"sub": "營運監控、可靠性與 Agentic AI",
"code": "CN",
"stem": "A telecom company's generative AI customer service assistant passed a successful three-month pilot. Leadership wants to scale it to all customers. Which action should the AI business strategist insist on as part of the production rollout?",
"opts": {
"A": "Rely on the foundation model provider's published model evaluations and service commitments to detect and correct any quality problems in this deployment.",
"B": "Treat the pilot's success metrics as approval for go-live, and review the assistant's performance again at the next annual planning cycle.",
"C": "Monitor answer quality, complaints, escalations, guardrail interventions, and cost against agreed thresholds, with named owners and a rollback plan.",
"D": "Track the assistant's monthly cost against budget in AWS Cost Explorer, and review answer quality only if spending exceeds the forecast for two months."
},
"fin": [
"C"
],
"expl": "AI systems in production need ongoing risk controls and monitoring. Customer behavior, content, and models change over time, and problems that never showed up in a pilot can appear at scale. Monitoring quality, complaints, escalations, guardrail interventions, and cost against agreed thresholds, with clear owners and a rollback plan (option C), lets the company catch and contain issues quickly. Treating the pilot as permanent approval and waiting a year to review (option B) assumes performance does not change, which is false for AI systems. Cost tracking in AWS Cost Explorer is useful, but watching only cost (option D) misses quality and harm problems. A model provider's general evaluations (option A) say nothing about how the model performs in this company's deployment or for its customers, so the company must monitor its own deployment.",
"multi": false
},
{
"id": "GD-012",
"dm": 1,
"domain": "Domain 1：AI 基礎與素養（AI Fundamentals and Literacy）24%",
"sub": "營運監控、可靠性與 Agentic AI",
"code": "GD",
"stem": "A mining company is preparing to move an AI maintenance-planning capability into production. The pilot met its technical targets, but leaders are concerned that operating conditions, data, and user behavior will change after launch. Which monitoring design best supports responsible production use?",
"opts": {
"A": "Define risk-linked indicators and thresholds, collect decision-relevant telemetry, and assign owners for escalation, remediation, and periodic review.",
"B": "Rely on pre-launch validation for model and responsible-AI risks, while monitoring primarily service availability unless users report a material business problem.",
"C": "Monitor availability, latency, and infrastructure cost continuously, then assess quality or stakeholder-impact risks during scheduled annual model reviews.",
"D": "Retain available logs and model interactions indefinitely, leaving it to future reviewers to decide later which signals and thresholds should govern intervention."
},
"fin": [
"A"
],
"expl": "A 正確：上線監控要有風險連結的指標與門檻、決策相關遙測，以及升級／修復／定期檢討的負責人。只看可用性或事後才定義訊號都不夠。",
"multi": false
},
{
"id": "GD-013",
"dm": 1,
"domain": "Domain 1：AI 基礎與素養（AI Fundamentals and Literacy）24%",
"sub": "AI／ML／GenAI 基礎概念與資料類型",
"code": "GD",
"stem": "A logistics operator is evaluating two AI use cases: predicting which shipments are likely to arrive late and drafting individualized customer updates about disruptions. Executives are using the terms AI, machine learning, and generative AI interchangeably. Which explanation best supports the solution decision?",
"opts": {
"A": "Generative AI should replace predictive machine learning in both workflows, on the reasoning that a foundation model can perform classification as well as text generation.",
"B": "The delay prediction is AI but not machine learning, while the drafted customer update is treated as machine learning on the basis of using historical language patterns.",
"C": "Both use cases are treated as requiring generative AI, on the reasoning that each produces an output that employees or customers can read and act on.",
"D": "AI is the broad field; predictive ML can estimate delay risk from learned patterns, while generative AI creates new content such as customer updates."
},
"fin": [
"D"
],
"expl": "D 正確：AI 是廣義領域；預測型 ML 從資料估計延遲風險，生成式 AI 產生新內容（如客戶通知）。兩者用途不同，不可互換。",
"multi": false
},
{
"id": "GD-017",
"dm": 1,
"domain": "Domain 1：AI 基礎與素養（AI Fundamentals and Literacy）24%",
"sub": "AI／ML／GenAI 基礎概念與資料類型",
"code": "GD",
"stem": "A regional bank is briefing executives on a fraud model that was developed from prior transactions and then deployed to score new transactions. Several leaders assume the model simply searches the historical records each time a new case arrives. Which explanation should the business strategist give?",
"opts": {
"A": "Training learns model parameters from historical examples; inference applies the learned model to new inputs, so training data must be relevant and representative.",
"B": "Once a model has learned from historical data, governance of that history is treated as no longer material, on the view that production decisions depend primarily on the new transaction being scored.",
"C": "Training is primarily the process of storing historical records so inference can retrieve the closest prior case and reuse its outcome for each new transaction.",
"D": "Training and inference perform the same computation on the same data, but training occurs before deployment while inference is the name used for the process after deployment."
},
"fin": [
"A"
],
"expl": "A 正確：訓練從歷史樣本學出參數；推論把學到的模型套用到新輸入；因此訓練資料需相關且具代表性。模型不是逐筆檢索歷史紀錄。",
"multi": false
},
{
"id": "GD-020",
"dm": 1,
"domain": "Domain 1：AI 基礎與素養（AI Fundamentals and Literacy）24%",
"sub": "提示工程、RAG 與模型調整",
"code": "GD",
"stem": "A consumer-goods company is building an Amazon Bedrock assistant for policy questions. The source manuals change often, but leaders also want answers to follow a stable approved tone and response format. Which TWO approaches best address these distinct requirements? (Choose TWO.) Episode 3 (Q21–30)",
"opts": {
"A": "Use retrieval grounding such as Amazon Bedrock Knowledge Bases so governed enterprise sources can be updated independently of the model.",
"B": "Use carefully designed examples or appropriate model adaptation for the stable behavior and response pattern when prompt-level controls alone are insufficient.",
"C": "Fine-tune or otherwise adapt the model with each revised policy manual so current factual knowledge becomes part of the model rather than an external knowledge source.",
"D": "Use retrieval grounding primarily to teach the assistant the approved tone and format, while relying on the model's pretrained knowledge for current policy facts.",
"E": "Increase the prompt and context size enough to hold the current manuals in full, treating context length as the long-term mechanism for synchronizing policy changes."
},
"fin": [
"A",
"B"
],
"expl": "A、B 正確：知識常變→用檢索增強（Knowledge Bases）使來源可獨立更新；穩定語氣／格式→用範例或模型調整。把事實微調進模型或靠長上下文同步都不理想。",
"multi": true
},
{
"id": "GD-023",
"dm": 1,
"domain": "Domain 1：AI 基礎與素養（AI Fundamentals and Literacy）24%",
"sub": "AI 治理、風險分級、合規法規與存取控制",
"code": "GD",
"stem": "Employees at a travel marketplace are experimenting with public AI tools for customer-care and partner tasks because they are unsure which services are permitted. Security has discovered sensitive data in several personal accounts. What governance measure best reduces this form of shadow AI?",
"opts": {
"A": "Maintain a visible catalog of approved, blocked, and under-evaluation tools, with permitted data and use cases plus a path for exceptions and new-tool review.",
"B": "Block access to unapproved AI websites at the network layer and avoid discussing alternatives, reducing the chance that employees will seek out unfamiliar tools.",
"C": "Allow personal AI accounts for low-risk experiments when employees remove obvious identifiers, while requiring enterprise accounts for production workflows.",
"D": "Publish primarily the names of currently approved tools and leave data restrictions to existing security policies so the catalog remains short and easy to maintain."
},
"fin": [
"A"
],
"expl": "A 正確：公開「核准／封鎖／評估中」工具目錄，註明可用資料與用途，並有例外與新工具審查流程，才能有效降低影子 AI。",
"multi": false
},
{
"id": "GD-025",
"dm": 1,
"domain": "Domain 1：AI 基礎與素養（AI Fundamentals and Literacy）24%",
"sub": "營運監控、可靠性與 Agentic AI",
"code": "GD",
"stem": "A travel company wants to move beyond a chat assistant that only drafts replies. The proposed system would interpret a traveler's goal, choose steps, call approved booking and policy tools, and request human approval before high-impact actions. Which description best characterizes the proposed capability?",
"opts": {
"A": "It is agentic: it can pursue a goal, select or sequence actions, and use tools within defined autonomy and approval boundaries.",
"B": "It is agentic primarily when it communicates with another AI agent; tool use and multi-step planning by a single system are insufficient on their own.",
"C": "It is not agentic, on the view that a true AI agent must complete each action without human approval or intervention once a goal has been assigned.",
"D": "It becomes an AI agent primarily when it can access the full range of travel and enterprise tools available, treating broad tool access as what distinguishes agents from assistants."
},
"fin": [
"A"
],
"expl": "A 正確：能追求目標、選擇／排序動作並在自主與核准邊界內使用工具，就是 agentic；需要人工核准不代表不是 agent。",
"multi": false
},
{
"id": "GD-036",
"dm": 1,
"domain": "Domain 1：AI 基礎與素養（AI Fundamentals and Literacy）24%",
"sub": "營運監控、可靠性與 Agentic AI",
"code": "GD",
"stem": "A construction firm's AI safety-reporting system showed a sudden drop in classification accuracy three months after launch. An investigation shows the drop coincided with a new incident-reporting template that changed how field crews describe incidents, not with any change to the model's code. Which response is most appropriate?",
"opts": {
"A": "Retrain the model on a larger volume of pre-template historical reports, on the assumption that additional older data will compensate for the recent decline.",
"B": "Roll back the new reporting template to its previous version so the existing model's input format is restored without further investigation.",
"C": "Increase the confidence threshold required before the model issues a classification, treating the accuracy drop as ordinary model uncertainty.",
"D": "Retrain or adapt the model using examples that reflect the new incident-reporting template, its field structure, and updated language."
},
"fin": [
"D"
],
"expl": "D 正確：準確率下降與新回報範本（輸入分佈改變）同時發生，屬資料漂移；應以反映新範本的樣本重訓／調整模型。",
"multi": false
},
{
"id": "GD-037",
"dm": 1,
"domain": "Domain 1：AI 基礎與素養（AI Fundamentals and Literacy）24%",
"sub": "營運監控、可靠性與 Agentic AI",
"code": "GD",
"stem": "A food producer is preparing to rely on an AI system for quality-assurance summaries. Pilot outputs are usually fluent, but reviewers have found occasional unsupported claims and performance differences when source data changes. What should the business owner require before broader use?",
"opts": {
"A": "Define reliability expectations, evaluate on representative cases, ground outputs, monitor hallucinations and data degradation, and establish fallback or escalation paths.",
"B": "Approve fluent quality-assurance summaries by default each week and require reviewers to demonstrate a specific factual error before challenging any answer.",
"C": "Remove the manual quality-assurance fallback after launch so reviewers must rely on the AI summary even when source data changes.",
"D": "Use the pilot's aggregate accuracy score as the primary release criterion and revisit reliability during the next scheduled model review next year."
},
"fin": [
"A"
],
"expl": "A 正確：定義可靠度期望、用代表性案例評估、落地（grounding）、監控幻覺與資料退化，並設定降級／升級路徑。",
"multi": false
},
{
"id": "GD-042",
"dm": 1,
"domain": "Domain 1：AI 基礎與素養（AI Fundamentals and Literacy）24%",
"sub": "AI／ML／GenAI 基礎概念與資料類型",
"code": "GD",
"stem": "A logistics company's AI dispatch-support assistant sometimes cuts off mid-response or drops earlier route constraints without warning when a dispatcher pastes a long list of stops and constraints into a single request. The team wants a recommendation before relying on the assistant for live routing decisions.",
"opts": {
"A": "Require workflows to be tested near the context limit and to surface an explicit signal whenever content is truncated or dropped.",
"B": "Increase the assistant's maximum response length and output token budget, addressing truncation dispatchers notice on the output side rather than the input side.",
"C": "Add a second AI assistant to review the first assistant's output for completeness, without changing how much content is submitted in a single request.",
"D": "Instruct dispatchers to paste shorter excerpts when a response seems incomplete, leaving the decision about how much to trim to each dispatcher's judgment."
},
"fin": [
"A"
],
"expl": "A 正確：輸入接近上下文限制時會截斷或遺漏約束，應在接近上限處測試並在內容被截斷／丟棄時明確提示。增大輸出長度或再加一個 AI 都處理不了輸入端問題。",
"multi": false
},
{
"id": "GD-045",
"dm": 1,
"domain": "Domain 1：AI 基礎與素養（AI Fundamentals and Literacy）24%",
"sub": "提示工程、RAG 與模型調整",
"code": "GD",
"stem": "An automotive supplier has moved an AI use case in claims and service from exploration into a controlled pilot. Before the next stage, the program owner wants a credible business-level plan for how to apply basic prompt engineering principles. Which option best aligns the initiative with sound AI business strategy?",
"opts": {
"A": "Ask the model to infer the claims-and-service objective from an open-ended request without specifying constraints or output criteria.",
"B": "State the task, relevant context, constraints, desired output format, and evaluation criteria clearly, then iterate with representative examples.",
"C": "Scatter prompt instructions across the request and allow the model to resolve any conflict between business rules, examples, and output requirements.",
"D": "Assume better prompting can compensate for weak source data, missing governance, and absent evaluation controls."
},
"fin": [
"B"
],
"expl": "B 正確：基本提示工程：清楚說明任務、脈絡、限制、輸出格式與評估準則，並用代表性範例迭代。",
"multi": false
},
{
"id": "GD-046",
"dm": 1,
"domain": "Domain 1：AI 基礎與素養（AI Fundamentals and Literacy）24%",
"sub": "AI／ML／GenAI 基礎概念與資料類型",
"code": "GD",
"stem": "A logistics operator's data catalog project classifies data sources as either structured (database tables) or unstructured (documents, images) so each can be assigned a single handling plan. The data lead notices that GPS telemetry logs and customer emails with embedded order-detail fields do not fit cleanly into either category. What should the data lead recommend?",
"opts": {
"A": "Classify telemetry logs and emails as structured data, treating their identifiable fields as decisive even though most of their content does not follow a fixed schema.",
"B": "Skip the classification question for sources that do not fit cleanly into either category and treat their eventual data type as an implementation detail for later.",
"C": "Classify telemetry logs and emails as unstructured data, treating their free-form system or human origin as decisive even though each also carries some field-level structure.",
"D": "Recognize semi-structured sources such as telemetry logs and emails with embedded fields as a distinct category with its own extraction and governance approach."
},
"fin": [
"D"
],
"expl": "D 正確：GPS 遙測與含欄位的郵件屬「半結構化」資料，應視為獨立類別，採專屬萃取與治理做法。",
"multi": false
},
{
"id": "GD-055",
"dm": 1,
"domain": "Domain 1：AI 基礎與素養（AI Fundamentals and Literacy）24%",
"sub": "AI／ML／GenAI 基礎概念與資料類型",
"code": "GD",
"stem": "A retail chain's demand-forecasting model was trained once on two years of historical sales data and deployed. An analyst suggests the model 'keeps learning' automatically from each week's new sales results as it generates forecasts, so no further governance is needed. What should the business strategist clarify?",
"opts": {
"A": "Recommend disabling the forecasting model until it can be proven that inference and training use identical data, treating any difference between the two as an error.",
"B": "Assume the model requires no further governance either way, on the view that the original training review already covered any future data the model might encounter.",
"C": "Inference does not update the model's parameters; incorporating new sales data requires a separate retraining process with its own data-quality review and governance.",
"D": "Confirm the analyst's description is accurate and treat the model as continuously self-updating, treating forecast generation and learning from a result as the same operation."
},
"fin": [
"C"
],
"expl": "C 正確：推論（inference）不會更新模型參數；納入新資料需獨立的再訓練流程，並有資料品質審查與治理。",
"multi": false
},
{
"id": "GD-065",
"dm": 1,
"domain": "Domain 1：AI 基礎與素養（AI Fundamentals and Literacy）24%",
"sub": "AI／ML／GenAI 基礎概念與資料類型",
"code": "GD",
"stem": "A pharmaceutical company has kept a single AI conversation running for weeks to support medical-information and commercial reviews, adding new questions, attachments, and copied reports to the same thread each day. Important formatting and compliance instructions given near the start of the conversation are now followed inconsistently. What should the team change about how the assistant is used?",
"opts": {
"A": "Keep the single conversation and increase the maximum context length setting so the growing thread can accommodate future weeks of messages.",
"B": "Continue the single conversation indefinitely, but ask the assistant once to memorize the original instructions so it can recall them without needing them restated.",
"C": "Assign a team member to manually re-type the original compliance instructions once, then trust the assistant to apply them consistently across future messages in the same thread.",
"D": "Start a new, appropriately scoped conversation for each distinct topic or review, carrying forward the instructions and records still relevant to that task."
},
"fin": [
"D"
],
"expl": "D 正確：長對話會佔滿上下文視窗，早期指令被稀釋；應依主題開新對話，只帶入仍相關的指令與紀錄。",
"multi": false
},
{
"id": "GD-066",
"dm": 1,
"domain": "Domain 1：AI 基礎與素養（AI Fundamentals and Literacy）24%",
"sub": "營運監控、可靠性與 Agentic AI",
"code": "GD",
"stem": "A telecom carrier's AI-based network-fault triage tool performs well in its first quarter. Leadership wants to set an ongoing monitoring cadence but is debating whether every AI initiative should follow the same review schedule. What should the operating model establish?",
"opts": {
"A": "Apply the enterprise's standard quarterly review cycle to this initiative even though conditions here shift unusually fast.",
"B": "Set drift-monitoring frequency and alert thresholds to match how quickly customer behavior and network conditions actually change.",
"C": "Increase monitoring frequency after a customer complaint flags a triage error, treating that complaint as the review trigger.",
"D": "Review model performance each time the vendor releases a software update to the triage platform, on that fixed schedule."
},
"fin": [
"B"
],
"expl": "B 正確：監控頻率與警示門檻應配合客戶行為與網路條件的變化速度，並非一體適用的固定排程。",
"multi": false
},
{
"id": "GD-068",
"dm": 1,
"domain": "Domain 1：AI 基礎與素養（AI Fundamentals and Literacy）24%",
"sub": "AI／ML／GenAI 基礎概念與資料類型",
"code": "GD",
"stem": "A regional bank explains to business leaders that an AI fraud model trained on past cases can recognize useful patterns but can also inherit the limitations of those cases. Which statement best describes the role of historical data in training?",
"opts": {
"A": "Treat model training and inference as the same activity, just carried out at different points in time.",
"B": "Recognize that training learns patterns from historical examples, then confirm those examples stay relevant and representative.",
"C": "Assume training data needs no additional governance, treating production inputs as the true source of risk.",
"D": "Use historical data without checking whether past decisions carry bias or no longer fit current conditions."
},
"fin": [
"B"
],
"expl": "B 正確：訓練從歷史樣本學習模式，同時須確認這些樣本仍具相關性與代表性，並檢查偏見。",
"multi": false
},
{
"id": "GD-070",
"dm": 1,
"domain": "Domain 1：AI 基礎與素養（AI Fundamentals and Literacy）24%",
"sub": "營運監控、可靠性與 Agentic AI",
"code": "GD",
"stem": "A wholesale marketplace's conversational assistant for seller support can answer questions but cannot invoke systems or pursue a goal. A proposed replacement can plan a task, call approved tools, and continue until a defined outcome is reached. Which statement best reflects the relevant agent concept? Episode 8 (Q71–80)",
"opts": {
"A": "Classify the replacement as agentic: it pursues a goal, plans steps, and invokes approved tools within bounded autonomy.",
"B": "Require communication with a second agent before classifying the replacement as agentic, even though it already plans and acts alone.",
"C": "Give the replacement broad access to enterprise tools so it can discover workflows on its own, beyond the seller-support task.",
"D": "Treat agent status as absent whenever a business control requires human confirmation before an action proceeds."
},
"fin": [
"A"
],
"expl": "A 正確：能規劃、呼叫核准工具並持續到達成結果，屬 agentic；不需與第二個 agent 溝通，也不因需人工確認而失格。",
"multi": false
},
{
"id": "GD-073",
"dm": 1,
"domain": "Domain 1：AI 基礎與素養（AI Fundamentals and Literacy）24%",
"sub": "營運監控、可靠性與 Agentic AI",
"code": "GD",
"stem": "An airline's AI system for irregular operations support and customer communications is nearing a production decision. Finance and the business owner agree the concept is sound, but disagree on what production risk controls are needed. What should the business strategist recommend?",
"opts": {
"A": "Track availability, latency, and message delivery success as the production scorecard, adding measures if incidents appear.",
"B": "Retain interaction and system logs for the longest feasible period, then decide later which signals matter.",
"C": "Route questionable AI-generated messages to frontline supervisors case by case with no named incident owner.",
"D": "Monitor technical, business, and risk indicators against thresholds with named owners and documented escalation steps."
},
"fin": [
"D"
],
"expl": "D 正確：上線風險控制：監控技術、業務與風險指標並設定門檻、指定負責人與升級流程。",
"multi": false
},
{
"id": "GD-081",
"dm": 1,
"domain": "Domain 1：AI 基礎與素養（AI Fundamentals and Literacy）24%",
"sub": "提示工程、RAG 與模型調整",
"code": "GD",
"stem": "A legal services organization's generative AI model has an acceptable writing style, but it often lacks the latest approved facts from internal document review and client operations documents that change weekly. Which adaptation strategy best fits this need?",
"opts": {
"A": "Use retrieval-augmented generation to change the model's permanent writing style for future requests.",
"B": "Choose the more expensive adaptation method on the assumption that cost tracks with accuracy.",
"C": "Treat retrieval and fine-tuning as mutually exclusive options and pick one without weighing them together.",
"D": "Use retrieval for the frequently changing knowledge and reserve fine-tuning for stable style needs."
},
"fin": [
"D"
],
"expl": "D 正確：頻繁變動的事實用檢索（RAG）；穩定的寫作風格才用微調。兩者互補而非互斥。",
"multi": false
},
{
"id": "GD-083",
"dm": 1,
"domain": "Domain 1：AI 基礎與素養（AI Fundamentals and Literacy）24%",
"sub": "營運監控、可靠性與 Agentic AI",
"code": "GD",
"stem": "A municipal utility uses AI to recommend maintenance priorities across its water and electric infrastructure. Pilot accuracy is acceptable, but leaders want a formal trigger for suspending a recommendation type rather than relying on field crews to notice something is wrong. What should the utility establish?",
"opts": {
"A": "Increase the length and level of detail in each recommendation whenever accuracy appears to drop off.",
"B": "Rely on field crew reports of obviously wrong recommendations as the trigger for a closer review afterward.",
"C": "Set a reliability threshold tied to the consequence of wrong calls and suspend that recommendation type.",
"D": "Wait for the next scheduled annual review to check whether recommendation accuracy has changed."
},
"fin": [
"C"
],
"expl": "C 正確：依錯誤後果設定可靠度門檻，一旦跨越即暫停該類建議，而非等現場發現。",
"multi": false
},
{
"id": "GD-085",
"dm": 1,
"domain": "Domain 1：AI 基礎與素養（AI Fundamentals and Literacy）24%",
"sub": "提示工程、RAG 與模型調整",
"code": "GD",
"stem": "A food producer's generative AI assistant in quality assurance and procurement drafts executive summaries. Users mix instructions, copied source text, and examples into one long paragraph, and the assistant often confuses source material with requested actions. What is the best improvement?",
"opts": {
"A": "Separate instructions from source material and make ambiguous requirements explicit before judging model quality.",
"B": "Ask for a good executive summary and let the model infer which facts and format matter.",
"C": "Keep instructions, source text, and examples interleaved in one paragraph and let the model infer which statements are commands.",
"D": "Treat prompt refinement as sufficient even when the underlying sources or review controls are not authoritative."
},
"fin": [
"A"
],
"expl": "A 正確：把指令與來源素材分開，並明確化模糊需求，再評估模型品質。",
"multi": false
},
{
"id": "GD-086",
"dm": 1,
"domain": "Domain 1：AI 基礎與素養（AI Fundamentals and Literacy）24%",
"sub": "營運監控、可靠性與 Agentic AI",
"code": "GD",
"stem": "A regional airline's generative AI assistant drafts responses to customer disruption inquiries, occasionally citing flight rebooking policies that do not exist. Leaders want controls that catch this before a response reaches a customer without slowing down routine accurate responses. Which TWO controls are most appropriate? (Choose TWO.)",
"opts": {
"A": "Check each drafted response against the airline's current authoritative policy source before it is sent.",
"B": "Log and route any response containing an unverifiable policy claim to a human reviewer before release.",
"C": "Publish a general accuracy disclaimer with each AI-drafted response and let responses proceed unreviewed.",
"D": "Increase the model's response length whenever it references a policy, on the assumption that more detail reduces fabrication.",
"E": "End verification checks once the assistant's average citation accuracy score passes an internal target."
},
"fin": [
"A",
"B"
],
"expl": "A、B 正確：以權威政策來源核對草稿，並將無法驗證的政策主張記錄並轉人工審核；免責聲明與增加長度無法防止幻覺。",
"multi": true
},
{
"id": "GD-095",
"dm": 1,
"domain": "Domain 1：AI 基礎與素養（AI Fundamentals and Literacy）24%",
"sub": "提示工程、RAG 與模型調整",
"code": "GD",
"stem": "A law firm's document drafting AI needs to maintain a consistent firm-specific drafting style learned from hundreds of past examples while also reflecting the firm's current fee schedule, which changes each quarter. How should the firm approach model adaptation?",
"opts": {
"A": "Choose either fine-tuning or retrieval-augmented generation as the firm's single standard technique for future adaptation needs.",
"B": "Use retrieval-augmented generation for both the drafting style and the fee schedule, treating both as equally in need of current grounding.",
"C": "Combine example-based adaptation for the stable drafting style with retrieval-augmented generation for the current fee schedule.",
"D": "Fine-tune the model each quarter so it memorizes the latest fee schedule directly."
},
"fin": [
"C"
],
"expl": "C 正確：穩定風格→範例式調整（或微調）；每季變動的收費表→RAG。",
"multi": false
},
{
"id": "GD-097",
"dm": 1,
"domain": "Domain 1：AI 基礎與素養（AI Fundamentals and Literacy）24%",
"sub": "營運監控、可靠性與 Agentic AI",
"code": "GD",
"stem": "A freight rail operator's AI system for predicting rail car maintenance needs has been in production for a year. Accuracy has declined and the team must decide between two different remediation paths before requesting budget. What should the team do first?",
"opts": {
"A": "Attribute the decline to normal seasonal variation and continue operating without further investigation right now.",
"B": "Increase the frequency of maintenance recommendations across the whole fleet until accuracy eventually recovers.",
"C": "Diagnose whether the decline is a data shift or a changed sensor-failure relationship, then pick the right fix.",
"D": "Retrain the model on the most recent 12 months of data, no matter what is driving the decline."
},
"fin": [
"C"
],
"expl": "C 正確：先診斷是資料偏移還是感測器與故障關係改變，再選擇正確補救；盲目重訓不一定有用。",
"multi": false
},
{
"id": "GD-103",
"dm": 1,
"domain": "Domain 1：AI 基礎與素養（AI Fundamentals and Literacy）24%",
"sub": "提示工程、RAG 與模型調整",
"code": "GD",
"stem": "An apparel retailer's merchandising team has rewritten its product description prompt five times, adding more formatting instructions each round, but outputs are still inconsistent. Investigation shows the team has never agreed internally on what information a compliant product description must include. What should the team do next?",
"opts": {
"A": "Resolve internally what a compliant description must include, then update the prompt accordingly.",
"B": "Let each merchandiser adjust the prompt individually to match their own preferred description style.",
"C": "Write a sixth version of the prompt with even more detailed formatting instructions.",
"D": "Accept the current inconsistency as an inherent limitation of generative AI for this task."
},
"fin": [
"A"
],
"expl": "A 正確：根本問題是團隊對合規描述應含哪些資訊沒有共識，先釐清需求再更新提示，而不是越改越長。",
"multi": false
},
{
"id": "GD-105",
"dm": 1,
"domain": "Domain 1：AI 基礎與素養（AI Fundamentals and Literacy）24%",
"sub": "營運監控、可靠性與 Agentic AI",
"code": "GD",
"stem": "A ski resort operator uses AI to recommend lift and terrain closures based on weather and avalanche risk data. During a storm, the on-duty safety officer notices the model's closure recommendations have become erratic across multiple lifts at once, not just one questionable case. What authority does the officer need in this moment?",
"opts": {
"A": "Authority to suspend AI recommendations across the affected system and revert to manual closure decisions for now.",
"B": "Authority to lower the model's confidence threshold so fewer recommendations are generated for the remainder of the storm.",
"C": "Authority to request a written incident report before adjusting any single closure recommendation on file.",
"D": "Authority to override the recommendation for the one lift under discussion, then continue evaluating other lifts individually."
},
"fin": [
"A"
],
"expl": "A 正確：多個燈號同時異常顯示系統性問題，值班安全官需有權暫停 AI 建議並改為人工決策。",
"multi": false
},
{
"id": "GD-109",
"dm": 1,
"domain": "Domain 1：AI 基礎與素養（AI Fundamentals and Literacy）24%",
"sub": "營運監控、可靠性與 Agentic AI",
"code": "GD",
"stem": "A theme park operator's AI system manages two functions: dynamic ride wait-time predictions shown to guests, and a queue safety capacity check for a subset of high-throughput rides. Leaders must decide how each function should be monitored in production. What should they do?",
"opts": {
"A": "Rely on guest complaints as the shared monitoring signal for both the wait-time and safety capacity check functions.",
"B": "Apply the same periodic manual review schedule to both functions, treating them as one undifferentiated operational AI system.",
"C": "Monitor the wait-time predictions in real time and review the queue safety capacity check on the same recurring periodic cadence.",
"D": "Monitor the queue safety check in real time with automated alerts and review wait-time predictions on a periodic manual cadence."
},
"fin": [
"D"
],
"expl": "D 正確：安全容量檢查需即時監控與自動警示；訪客用等待時間預測可定期人工檢討（依後果決定監控強度）。",
"multi": false
},
{
"id": "GD-115",
"dm": 1,
"domain": "Domain 1：AI 基礎與素養（AI Fundamentals and Literacy）24%",
"sub": "營運監控、可靠性與 Agentic AI",
"code": "GD",
"stem": "A retailer has launched an AI merchandising capability and wants to keep improving it after release. Business conditions, user behavior, data, and risk signals will change over time. What mechanism should the program establish to decide when adjustments are needed?",
"opts": {
"A": "Collect feedback during the pilot phase, on the assumption that a mature AI system remains stable on its own afterward.",
"B": "Change the AI system after each individual complaint arrives, without looking for a broader pattern or impact.",
"C": "Create recurring feedback from users, operations, risk owners, and business KPIs, then use it to adjust product and scale decisions.",
"D": "Measure success mainly by the number of users provisioned each month rather than by what they actually accomplish."
},
"fin": [
"C"
],
"expl": "C 正確：建立使用者、營運、風險負責人與業務 KPI 的循環回饋，作為調整與擴大的依據。",
"multi": false
},
{
"id": "GD-117",
"dm": 1,
"domain": "Domain 1：AI 基礎與素養（AI Fundamentals and Literacy）24%",
"sub": "AI／ML／GenAI 基礎概念與資料類型",
"code": "GD",
"stem": "A waste management company's AI system predicts which commercial routes are at high risk of missed pickups tomorrow and assigns each route a confidence score. A dispatcher wants to treat any route flagged above 50% confidence as a certainty requiring immediate rerouting. What should the company clarify about the model's output?",
"opts": {
"A": "The confidence score is a probabilistic estimate, not a certainty, so the business must set its rerouting threshold.",
"B": "Confidence scores should be ignored here, and each flagged route should instead be rerouted using one fixed default rule.",
"C": "A confidence score above 50% means the model has already verified that the route will actually miss its pickup.",
"D": "Confidence scores start to matter mainly once a missed pickup has already occurred on that route, not before."
},
"fin": [
"A"
],
"expl": "A 正確：信心分數是機率估計而非確定性，業務需自訂改道門檻。",
"multi": false
},
{
"id": "GD-118",
"dm": 1,
"domain": "Domain 1：AI 基礎與素養（AI Fundamentals and Literacy）24%",
"sub": "營運監控、可靠性與 Agentic AI",
"code": "GD",
"stem": "A port authority is designing an AI system to coordinate berth scheduling, customs document routing, and yard equipment dispatch. One design uses a single agent with access to all three systems. An alternative uses three narrower agents, each scoped to one system, that hand off tasks to each other. Which design consideration should decide between them?",
"opts": {
"A": "Whether using three narrower agents instead of one broad agent by itself qualifies the system as more advanced AI.",
"B": "Whether the single-agent design can generate more visually impressive demonstrations for the port authority's board members.",
"C": "Whether segregating each system's access into narrower agents reduces the impact of an error compared with one broad-access agent.",
"D": "Whether the authority's IT team simply prefers to configure one system rather than managing three separately."
},
"fin": [
"C"
],
"expl": "C 正確：決定因素是把各系統存取權隔離成較窄的 agent，是否降低單一錯誤的影響範圍（最小權限）。",
"multi": false
},
{
"id": "GD-128",
"dm": 1,
"domain": "Domain 1：AI 基礎與素養（AI Fundamentals and Literacy）24%",
"sub": "營運監控、可靠性與 Agentic AI",
"code": "GD",
"stem": "A farm equipment manufacturer trained a parts demand model on five years of dealer order history. The manufacturer has just changed its dealer incentive structure in a way expected to shift which parts dealers order. What should the manufacturer do before relying on the model's forecasts?",
"opts": {
"A": "Assume the model's patterns reflect a structurally fixed relationship between parts and demand that no incentive change alone can affect.",
"B": "Continue using the model's forecasts unchanged, treating the full five years of order history as still fully valid.",
"C": "Retrain the model on the same five years of historical order data without incorporating the recent incentive change.",
"D": "Recognize the model learned patterns tied to the old incentive structure and validate or retrain it before trusting new forecasts."
},
"fin": [
"D"
],
"expl": "D 正確：模型學到的是舊誘因結構下的模式，需驗證或重訓後再信任新預測。",
"multi": false
},
{
"id": "GD-129",
"dm": 1,
"domain": "Domain 1：AI 基礎與素養（AI Fundamentals and Literacy）24%",
"sub": "營運監控、可靠性與 Agentic AI",
"code": "GD",
"stem": "A mining company is preparing to rely on AI for maintenance recommendations across several sites. Pilot accuracy is acceptable, but leaders are concerned about unsupported outputs, changing operating conditions, and the possibility that performance will degrade after rollout. Which TWO practices should the company require? (Choose TWO.)",
"opts": {
"A": "Accept fluent maintenance recommendations as reliable across sites unless an engineer can prove a recommendation is incorrect.",
"B": "Use the initial cross-site accuracy benchmark as the standing production standard unless a site reports a material failure.",
"C": "Retire the site-level manual maintenance fallback after rollout so engineers cannot bypass AI recommendations during degraded conditions.",
"D": "Define reliability expectations, evaluate on representative cases, ground outputs where appropriate, monitor for hallucination and data degradation, and establish fallback or escalation paths.",
"E": "Match mitigation to the specific failure mode detected, such as hallucination, data quality degradation, or drift, instead of applying the same fix no matter the cause."
},
"fin": [
"D",
"E"
],
"expl": "D、E 正確：定義可靠度期望並評估、落地、監控幻覺與資料退化並設降級路徑；針對失效模式（幻覺／資料退化／漂移）採取對應緩解。",
"multi": true
},
{
"id": "GD-134",
"dm": 1,
"domain": "Domain 1：AI 基礎與素養（AI Fundamentals and Literacy）24%",
"sub": "AI／ML／GenAI 基礎概念與資料類型",
"code": "GD",
"stem": "A regional airline's crew scheduling assistant works well in testing but has never been exercised with the length and volume of real disruption-day conversations. Before go-live, the team wants to confirm it will behave predictably as conversations approach the model's context limit. Which TWO actions should the team take? (Choose TWO.)",
"opts": {
"A": "Test the assistant with realistic long conversations and large attachments to see how it behaves as it nears the context limit.",
"B": "Define a fallback, such as starting a new session or handing off to a scheduler, for when a conversation exceeds the context limit.",
"C": "Assume the vendor's published context window size guarantees stable answers at any conversation length up to that size.",
"D": "Wait until crews report a problem in production before deciding whether a fallback is needed.",
"E": "Ask crews to keep the full shift note history in one continuously growing conversation thread."
},
"fin": [
"A",
"B"
],
"expl": "A、B 正確：以真實的長對話與大型附件測試接近上下文上限的行為，並預先定義降級作法（開新會話或轉人工）。",
"multi": true
},
{
"id": "GD-136",
"dm": 1,
"domain": "Domain 1：AI 基礎與素養（AI Fundamentals and Literacy）24%",
"sub": "AI／ML／GenAI 基礎概念與資料類型",
"code": "GD",
"stem": "A board member uses the terms AI, machine learning, and generative AI interchangeably while reviewing an investment proposal. The strategy team needs to correct the terminology without turning the discussion into a technical lecture. Which distinction should it make?",
"opts": {
"A": "Treat generative AI as a full replacement for predictive ML across the proposal's use cases.",
"B": "Classify any rules engine as generative AI if it produces a text response.",
"C": "Use AI, machine learning, and generative AI as exact synonyms in board materials and decisions.",
"D": "AI is the broad field; ML learns from data; generative AI generates content from learned models."
},
"fin": [
"D"
],
"expl": "D 正確：AI 是廣義領域，ML 從資料學習，生成式 AI 以學到的模型產生內容；三者不是同義詞。",
"multi": false
},
{
"id": "GD-149",
"dm": 1,
"domain": "Domain 1：AI 基礎與素養（AI Fundamentals and Literacy）24%",
"sub": "AI／ML／GenAI 基礎概念與資料類型",
"code": "GD",
"stem": "A line of business leader asks why an AI model can produce predictions without following a manually written rule for every case. Which explanation best describes the relationship among algorithms, models, training, inference, and predictions in business terms?",
"opts": {
"A": "Inference is the process of retraining the model each time a user submits a request.",
"B": "The model learns patterns from historical data during training and applies those patterns at inference to produce outputs.",
"C": "An algorithm, a trained model, and the business workflow that uses it are treated as interchangeable terms here.",
"D": "The model keeps a complete copy of each training record and answers by retrieving the closest one verbatim."
},
"fin": [
"B"
],
"expl": "B 正確：模型於訓練期從歷史資料學出模式，推論時套用這些模式產生輸出；不是逐筆檢索也不是每次重訓。",
"multi": false
},
{
"id": "GD-150",
"dm": 1,
"domain": "Domain 1：AI 基礎與素養（AI Fundamentals and Literacy）24%",
"sub": "營運監控、可靠性與 Agentic AI",
"code": "GD",
"stem": "An AI steering committee at a life sciences company is reviewing evidence from marketing operations. One issue could materially change the rollout decision: how the organization will handle ongoing monitoring for drift and performance changes. Which action creates the most defensible path forward?",
"opts": {
"A": "Freeze the model and evaluation data after launch so results stay comparable indefinitely.",
"B": "Define ownership, metrics, review cadence, and response actions for drift before scaling the AI system.",
"C": "Monitor infrastructure uptime as the primary signal, treating model behavior as fixed unless the code itself changes.",
"D": "Retrain on a fixed calendar without checking whether monitoring shows drift or degradation."
},
"fin": [
"B"
],
"expl": "B 正確：擴大前定義漂移的負責人、指標、檢討頻率與回應行動。",
"multi": false
},
{
"id": "SP-001",
"dm": 1,
"domain": "Domain 1：AI 基礎與素養（AI Fundamentals and Literacy）24%",
"sub": "營運監控、可靠性與 Agentic AI",
"code": "SP",
"stem": "A retail board asks whether being an early adopter of agentic AI confers a competitive advantage or merely the cost of being first. What does the AWS Prescriptive Guidance on operationalising agentic AI say early adopters gain?",
"opts": {
"A": "Strategic advantage through faster insights, better service and adaptive operations",
"B": "Automatic payback on the first pilot, because quick wins arrive regardless of the problem chosen",
"C": "Reduced need for human oversight, because agents replace people rather than augmenting them",
"D": "Exemption from emerging AI regulation for the first movers in a market"
},
"fin": [
"A"
],
"expl": "A 正確：AWS 規範性指引指出早期採用者可獲得更快洞察、更好服務與更具適應性的營運等策略優勢；B/C/D 均為過度承諾。",
"multi": false
},
{
"id": "SP-005",
"dm": 1,
"domain": "Domain 1：AI 基礎與素養（AI Fundamentals and Literacy）24%",
"sub": "營運監控、可靠性與 Agentic AI",
"code": "SP",
"stem": "A grocery retailer's monitoring raises drift alerts on its demand model, but nothing happens when one fires. Which anti-pattern does the AWS Well-Architected Machine Learning Lens name for that situation?",
"opts": {
"A": "Monitoring both technical metrics and business impact metrics at the same time",
"B": "Lacking a clear action plan for when drift is detected",
"C": "Establishing thresholds for the level of drift that is considered acceptable",
"D": "Publishing monitoring results to stakeholders outside the data science team"
},
"fin": [
"B"
],
"expl": "「漂移告警觸發後無人處理」＝缺乏偵測到漂移時的明確行動計畫（B）；A/D 是良好實務，C 設定門檻亦是良好實務。",
"multi": false
},
{
"id": "SP-006",
"dm": 1,
"domain": "Domain 1：AI 基礎與素養（AI Fundamentals and Literacy）24%",
"sub": "AI／ML／GenAI 基礎概念與資料類型",
"code": "SP",
"stem": "A team lead notices that a long working session with an AI assistant gradually produces less relevant answers, and asks what is consuming the space available for context. According to Amazon Q Developer documentation on context window limits, which statement is correct?",
"opts": {
"A": "Clearing the chat history is the only available remedy, because summarising the earlier conversation is not supported by the assistant.",
"B": "Only the current question counts, because earlier messages are stored outside the context window.",
"C": "The current request, previous messages, shared code and files, and system information all count against the same context window.",
"D": "The context window grows automatically as a conversation lengthens, so nothing is ever displaced."
},
"fin": [
"C"
],
"expl": "上下文視窗同時容納當前請求、歷史訊息、共享程式碼／檔案與系統資訊（C）；B 說只有當前問題算入為錯。",
"multi": false
},
{
"id": "SP-014",
"dm": 1,
"domain": "Domain 1：AI 基礎與素養（AI Fundamentals and Literacy）24%",
"sub": "AI／ML／GenAI 基礎概念與資料類型",
"code": "SP",
"stem": "An insurance group is writing an internal AI glossary and wants the wording aligned with the AWS Well-Architected Generative AI Lens rather than invented in-house. Which statements match the definitions the lens publishes?",
"opts": {
"A": "Model distillation creates a smaller, more efficient model that mimics the behaviour of a larger, more advanced one.",
"B": "Model orchestration means reducing the precision of model parameters to cut the memory footprint.",
"C": "A model card is a document giving key information about a model, including intended use, training data, performance characteristics and potential limitations or biases.",
"D": "A model hub is the interaction layer that offers secure access through standardised interfaces.",
"E": "Model interpretability is the ability to understand and explain the reasoning behind a model's outputs.",
"F": "Model evaluation is the process of modifying a foundation model using various techniques to control its behaviour."
},
"fin": [
"A",
"C",
"E"
],
"expl": "生成式 AI 鏡頭的定義：模型蒸餾、模型卡、模型可解釋性（A、C、E）；B 把「模型編排」寫成量化、D 把「model hub」寫成互動層、F 把「模型評估」寫成模型調整，定義均錯。",
"multi": true
},
{
"id": "SP-018",
"dm": 1,
"domain": "Domain 1：AI 基礎與素養（AI Fundamentals and Literacy）24%",
"sub": "提示工程、RAG 與模型調整",
"code": "SP",
"stem": "A knowledge-management lead is told that the company handbook will be chunked and then embedded before the assistant can use it, and asks what each of those two steps does. Using the definitions in the AWS Well-Architected Generative AI Lens, which statement is correct?",
"opts": {
"A": "Chunking compresses the file so it takes less storage, and embedding attaches the whole file to the prompt unchanged.",
"B": "Chunking removes duplicate paragraphs, and embedding translates the text into a second language.",
"C": "Chunking reduces the precision of the model's parameters, and embedding increases their number.",
"D": "Chunking splits large files so they fit a context window; embedding turns chunks into meaning-carrying vectors."
},
"fin": [
"D"
],
"expl": "切塊（chunking）把大型檔案拆分以符合上下文視窗；嵌入（embedding）把片段轉為帶語意的向量（D）。",
"multi": false
},
{
"id": "SP-021",
"dm": 1,
"domain": "Domain 1：AI 基礎與素養（AI Fundamentals and Literacy）24%",
"sub": "AI／ML／GenAI 基礎概念與資料類型",
"code": "SP",
"stem": "A bank's complaint handling pipeline has four components. The first assigns each complaint to one of eleven categories. The second produces a score for the likelihood that the complaint will escalate. The third drafts the response letter sent to the customer. The fourth applies compensation limits from a published policy table. Which statement about this pipeline is accurate?",
"opts": {
"A": "All three model components are generative AI, because each one produces an output the bank did not previously hold.",
"B": "The routing and escalation components are generative AI, and the letter drafting component is conventional machine learning.",
"C": "Only the letter drafting component produces output that cannot be checked against a fixed set of expected values.",
"D": "None of the components is generative AI, because each one operates on data the bank has already collected."
},
"fin": [
"C"
],
"expl": "C 正確：分類與評分的輸出可與固定值核對、補償上限來自規則表；只有信件草稿是生成式輸出，無法對照固定預期值。",
"multi": false
},
{
"id": "SP-022",
"dm": 1,
"domain": "Domain 1：AI 基礎與素養（AI Fundamentals and Literacy）24%",
"sub": "AI／ML／GenAI 基礎概念與資料類型",
"code": "SP",
"stem": "A logistics firm wants to analyze three years of event records from its tracking platform. Every record carries the same top-level fields and a consistent timestamp. Each record also contains a free-text notes field completed by drivers and a nested carrier payload whose shape differs between carriers. The data team describes the records as structured; the AI lead disagrees. Which characterization is most accurate?",
"opts": {
"A": "The records are partly structured and partly unstructured, so the free text and variable payload need separate handling.",
"B": "The records are structured data, because every event carries the same top-level fields and a consistent timestamp.",
"C": "The records are unstructured data, because they are held as files rather than inside a relational database table.",
"D": "The records are reference data, so they sit outside the scope of any analytical or AI initiative the firm runs."
},
"fin": [
"A"
],
"expl": "A 正確：同時含固定欄位、自由文字與結構不一的巢狀 payload，屬部分結構化、部分非結構化，需分別處理。",
"multi": false
},
{
"id": "CC-017",
"dm": 2,
"domain": "Domain 2：AI 策略與商業價值創造（AI Strategy and Business Value Creation）28%",
"sub": "AI 策略、用例選擇、優先序與競爭優勢",
"code": "CC",
"stem": "A supermarket chain's leadership asks the AI strategy lead to propose its first AI initiatives. Which approach to identifying use cases is MOST likely to deliver business value?",
"opts": {
"A": "Ask the IT team to pick the use cases that use the most advanced models, as they are most impressive.",
"B": "Copy the AI use cases a competitor announced last quarter so the chain does not fall behind in the market.",
"C": "List the newest AI capabilities on the market and find a department willing to try each one of them.",
"D": "Start from business objectives and pain points, map AI capabilities to outcomes, and define KPIs for each."
},
"fin": [
"D"
],
"expl": "High-impact use cases start from business objectives and pain points, mapping a capability to a process change, outcome and KPI. Technology-first lists (C) and impressive models (A) produce solutions looking for problems; copying a competitor (B) ignores the chain's own objectives.",
"multi": false
},
{
"id": "CC-018",
"dm": 2,
"domain": "Domain 2：AI 策略與商業價值創造（AI Strategy and Business Value Creation）28%",
"sub": "AI 策略、用例選擇、優先序與競爭優勢",
"code": "CC",
"stem": "An apparel retailer wants a meeting-summary and email-drafting assistant for 2,000 office staff. It is a common need, the company has no AI engineers, and it wants results within a month. Which option BEST fits?",
"opts": {
"A": "Build a custom assistant on a foundation model platform with a new in-house AI engineering team.",
"B": "Train a proprietary language model on the company's internal emails and meeting transcripts.",
"C": "Buy an existing AI assistant product that meets the security and data handling requirements.",
"D": "Hire a partner to build a fully custom assistant and then hand it over to an internal team."
},
"fin": [
"C"
],
"expl": "For a common, non-differentiating need with no in-house skills and a short timeline, buying a ready product that meets security and data requirements is fastest and cheapest. Building (A, D) takes longer for no differentiation; training a model (B) is far too costly.",
"multi": false
},
{
"id": "CC-019",
"dm": 2,
"domain": "Domain 2：AI 策略與商業價值創造（AI Strategy and Business Value Creation）28%",
"sub": "AI 策略、用例選擇、優先序與競爭優勢",
"code": "CC",
"stem": "A home improvement retailer has scored six AI pilot ideas. Which idea should it prioritise FIRST?",
"opts": {
"A": "Low value, low feasibility: an AI artwork generator for store walls that needs custom training.",
"B": "High value, high feasibility: product Q and A from existing manuals with a clear owner and metrics.",
"C": "High value, low feasibility: data needed for it does not exist yet and would take two years to collect.",
"D": "Low value, high feasibility: a novelty chatbot that tells jokes to shoppers who visit the website."
},
"fin": [
"B"
],
"expl": "A high-value, high-feasibility idea with a clear owner and metrics is a quick win to do first. High value with low feasibility (C) is a strategic bet to plan and de-risk later; low-value ideas (D, A) shouldn't come first.",
"multi": false
},
{
"id": "CC-020",
"dm": 2,
"domain": "Domain 2：AI 策略與商業價值創造（AI Strategy and Business Value Creation）28%",
"sub": "AI 策略、用例選擇、優先序與競爭優勢",
"code": "CC",
"stem": "An online retailer ran a 10-week pilot of an AI returns assistant with an agreed kill criterion: at least 20% of return requests resolved without an agent. It reached 6%, and the team sees no fix. Leaders have spent 400,000 dollars. What should leadership do?",
"opts": {
"A": "Terminate the pilot as agreed and redirect the budget, documenting what the team learned from it.",
"B": "Scale the assistant to all customers, because more users will generate the data needed to improve.",
"C": "Pause the pilot indefinitely without a review date so that the budget stays allocated to the team.",
"D": "Continue for another year, because stopping now would waste the 400,000 dollars already spent on it."
},
"fin": [
"A"
],
"expl": "The pilot missed its predefined kill criterion with no credible path, so terminating and redirecting budget is good governance. Money already spent is a sunk cost (D); scaling a failing solution (B) multiplies the problem; an indefinite pause (C) ties up budget without a decision.",
"multi": false
},
{
"id": "CC-021",
"dm": 2,
"domain": "Domain 2：AI 策略與商業價值創造（AI Strategy and Business Value Creation）28%",
"sub": "AI 策略、用例選擇、優先序與競爭優勢",
"code": "CC",
"stem": "A retailer calculates shipping charges from a published table based on order weight and destination zone. A vendor proposes a generative AI system to calculate charges. What should the strategy lead recommend?",
"opts": {
"A": "Replace the table with a machine learning model that predicts shipping charges from past orders.",
"B": "Adopt the generative AI system, because AI will improve accuracy over the published shipping table.",
"C": "Keep the table-driven calculation, because the logic is fully defined and must be exact every time.",
"D": "Use the AI system for half of all orders and compare the two methods for a full year before deciding."
},
"fin": [
"C"
],
"expl": "When logic is fully defined and must be exact, AI adds cost and unpredictability. The table is already exact, so AI can't improve accuracy (B); a year-long split test (D) and an ML model (A) introduce probabilistic errors.",
"multi": false
},
{
"id": "CC-022",
"dm": 2,
"domain": "Domain 2：AI 策略與商業價值創造（AI Strategy and Business Value Creation）28%",
"sub": "成熟度、準備度評估與 PoC→量產轉型",
"code": "CC",
"stem": "A grocery chain plans to move its customer service assistant from one AI vendor to another. Which plan BEST protects business continuity during the transition?",
"opts": {
"A": "Run both in parallel on a share of traffic, test against agreed criteria, and keep a rollback option.",
"B": "Switch all traffic to the new vendor on a single weekend and cancel the old contract immediately after.",
"C": "Let the new vendor test the assistant on live customers first and agree on success criteria afterward.",
"D": "Turn the assistant off during the migration and send all customers to the phone queue until it is done."
},
"fin": [
"A"
],
"expl": "Parallel running, acceptance criteria agreed in advance and a rollback option protect continuity. A big-bang cutover (B) leaves no fallback; agreeing criteria afterwards (C) means nothing to test against; switching off (D) disrupts customers.",
"multi": false
},
{
"id": "CC-023",
"dm": 2,
"domain": "Domain 2：AI 策略與商業價值創造（AI Strategy and Business Value Creation）28%",
"sub": "AI 策略、用例選擇、優先序與競爭優勢",
"code": "CC",
"stem": "A specialty retailer is evaluating vendor proposals for an AI demand planning product. Which TWO questions are MOST important to ask before choosing? (Select TWO)",
"opts": {
"A": "How many AI research papers has the vendor's engineering team published in the past five years?",
"B": "How accurate is the product on our own historical data, measured against our current forecasts?",
"C": "Does the vendor's sales demonstration use a larger foundation model than its competitors do?",
"D": "Will our sales data be used to train models for other customers, and where will it be stored?",
"E": "How many other retailers in our region have heard of the vendor's brand and its marketing campaigns?"
},
"fin": [
"B",
"D"
],
"expl": "Accuracy on your own data against a baseline (B) and data use and residency terms (D) decide value and compliance. Research papers (A), model size in a demo (C) and brand awareness (E) don't show whether the product works for you or protects your data.",
"multi": true
},
{
"id": "CC-024",
"dm": 2,
"domain": "Domain 2：AI 策略與商業價值創造（AI Strategy and Business Value Creation）28%",
"sub": "業務價值、ROI 與 KPI 衡量",
"code": "CC",
"stem": "A department store plans to deploy an AI assistant to help store associates answer product questions. The COO wants to prove its value after six months. What should the team do BEFORE deployment?",
"opts": {
"A": "Agree that success will be judged by how many associates log into the assistant each week.",
"B": "Measure current answer times, sales conversion and associate satisfaction to set a baseline.",
"C": "Wait until the assistant is live and then decide which metrics will best show its benefits.",
"D": "Ask the vendor to provide industry-average ROI figures to present to the COO after six months."
},
"fin": [
"B"
],
"expl": "A baseline measured before deployment is what makes later improvement provable. Logins alone (A) measure usage, not business value; choosing metrics after launch (C) leaves no comparable starting point; industry averages (D) don't show this store's results.",
"multi": false
},
{
"id": "CC-025",
"dm": 2,
"domain": "Domain 2：AI 策略與商業價值創造（AI Strategy and Business Value Creation）28%",
"sub": "業務價值、ROI 與 KPI 衡量",
"code": "CC",
"stem": "An online retailer's AI agent-assist tool saves service agents 2 minutes on each of 900,000 contacts a year. Agents cost 36 dollars an hour fully loaded, and the saved time is used to take more contacts instead of hiring. Annual running costs are 260,000 dollars and the one-time build was 140,000 dollars. What is the approximate first-year ROI?",
"opts": {
"A": "About 315%: 1.08 million dollars of benefit minus 260 thousand dollars of running cost, divided by the 260 thousand dollars.",
"B": "About 270%: the 1.08 million dollars of benefit divided by the 400 thousand dollars of total first-year cost.",
"C": "About 63%: the 680 thousand dollars of net benefit divided by the 1.08 million dollars of total yearly benefit.",
"D": "About 170%: 1.08 million dollars of benefit minus 400 thousand dollars of first-year cost, divided by the 400 thousand dollars."
},
"fin": [
"D"
],
"expl": "Time saved = 900,000 × 2 min = 30,000 hours × 36 dollars = 1.08 million dollars. First-year costs = 260k + 140k = 400k, so ROI = (1.08M − 400k) ÷ 400k ≈ 170%. Leaving out the build cost (A) overstates ROI; benefit ÷ cost (B) is a ratio, not ROI; net benefit ÷ benefit (C) is a margin.",
"multi": false
},
{
"id": "CC-026",
"dm": 2,
"domain": "Domain 2：AI 策略與商業價值創造（AI Strategy and Business Value Creation）28%",
"sub": "業務價值、ROI 與 KPI 衡量",
"code": "CC",
"stem": "A grocery chain is three weeks into a pilot of an AI tool that suggests replies to customer emails. Projected annual savings won't be measurable for months. Which metric gives the EARLIEST reliable signal that the savings will materialise?",
"opts": {
"A": "The share of suggested replies that agents accept with little editing, tracked week by week.",
"B": "The number of features listed in the vendor's product roadmap for the next twelve months.",
"C": "The total annual return on investment calculated from the first three weeks of pilot results.",
"D": "The size of the foundation model the vendor uses compared with the models of competitors."
},
"fin": [
"A"
],
"expl": "Adoption measures such as the acceptance rate of suggestions are leading indicators that predict whether time savings will arrive. Annual ROI (C) is a lagging measure; roadmap features (B) and model size (D) don't show value in this pilot.",
"multi": false
},
{
"id": "CC-027",
"dm": 2,
"domain": "Domain 2：AI 策略與商業價值創造（AI Strategy and Business Value Creation）28%",
"sub": "AWS 服務、定價與成本管理",
"code": "CC",
"stem": "An online retailer's monthly generative AI bill has tripled while the number of customer conversations has grown only 20%. Which TWO actions are MOST likely to bring costs back in line? (Select TWO)",
"opts": {
"A": "Add the full conversation history from all previous visits to each new customer prompt.",
"B": "Switch all requests to a priority service tier so that responses come back faster.",
"C": "Retrieve only the relevant passages instead of adding whole documents to every prompt.",
"D": "Move every request to the largest available model so answers are right the first time.",
"E": "Route simple questions to a smaller, cheaper model that still meets the quality target."
},
"fin": [
"C",
"E"
],
"expl": "Costs growing faster than usage usually means more tokens per request or an oversized model; routing simple questions to a smaller model (E) and retrieving only relevant passages (C) cut both. The largest model (D), longer history (A) and a priority tier (B) all raise cost.",
"multi": true
},
{
"id": "CC-028",
"dm": 2,
"domain": "Domain 2：AI 策略與商業價值創造（AI Strategy and Business Value Creation）28%",
"sub": "AWS 服務、定價與成本管理",
"code": "CC",
"stem": "A retailer is building a business case for an AI-powered product search feature and needs to estimate the AWS service costs before any development starts. Which AWS tool is MOST appropriate?",
"opts": {
"A": "AWS Pricing Calculator, to model expected usage and estimate the monthly costs in advance.",
"B": "AWS Marketplace, to read reviews that other customers have written about AI search products.",
"C": "The AWS shared responsibility model, to see which costs AWS covers and which the retailer pays.",
"D": "AWS Cost Explorer, to analyse the spending history of the search feature over the last year."
},
"fin": [
"A"
],
"expl": "AWS Pricing Calculator estimates the cost of planned services from expected usage, before anything is built. Cost Explorer (D) analyses actual spend, which doesn't exist yet; Marketplace reviews (B) aren't a cost estimate; the shared responsibility model (C) divides security duties, not costs.",
"multi": false
},
{
"id": "CC-029",
"dm": 2,
"domain": "Domain 2：AI 策略與商業價值創造（AI Strategy and Business Value Creation）28%",
"sub": "AWS 服務、定價與成本管理",
"code": "CC",
"stem": "A grocery chain processes 50,000 supplier invoices every night with a generative AI model. Results are needed by 8 AM, and the finance team wants to lower cost. Which option BEST fits?",
"opts": {
"A": "Process each invoice as an individual real-time request as soon as it arrives in the system.",
"B": "Reserve dedicated capacity for 24 hours a day so that the nightly run always has capacity available.",
"C": "Use batch inference for the overnight run, which costs less than on-demand for supported models.",
"D": "Use a priority service tier so that every invoice is processed in the shortest possible time."
},
"fin": [
"C"
],
"expl": "Work that isn't urgent suits batch inference, priced about 50% below on-demand for supported models. A priority tier (D) costs more for unneeded speed; real-time requests (A) pay on-demand prices; reserving capacity all day (B) pays for 24 hours to use a few.",
"multi": false
},
{
"id": "CC-030",
"dm": 2,
"domain": "Domain 2：AI 策略與商業價值創造（AI Strategy and Business Value Creation）28%",
"sub": "AI 策略、用例選擇、優先序與競爭優勢",
"code": "CC",
"stem": "A regional grocery chain notices that an AI-native online grocer is winning its customers with personalised offers and same-day delivery predictions. What should the chain's strategy team do FIRST?",
"opts": {
"A": "Ignore the competitor, because AI-native start-ups usually fail before they reach a large market share.",
"B": "Assess the competitive landscape: where AI changes customer expectations and where the chain is exposed.",
"C": "Buy the same AI software the competitor uses so that the chain can launch identical features within a month.",
"D": "Lower prices on every product until the competitor runs out of funding and leaves the regional market."
},
"fin": [
"B"
],
"expl": "Assessing the competitive landscape (changing expectations, exposure and the chain's own assets) comes before choosing a response. Copying the competitor (C) skips analysis; ignoring the threat (A) and a price war (D) aren't AI strategies and carry large risk.",
"multi": false
},
{
"id": "CC-031",
"dm": 2,
"domain": "Domain 2：AI 策略與商業價值創造（AI Strategy and Business Value Creation）28%",
"sub": "AI 策略、用例選擇、優先序與競爭優勢",
"code": "CC",
"stem": "A home appliance retailer sells products once and rarely hears from customers again. It collects usage data from connected appliances with customer consent. Which AI-enabled opportunity BEST represents business model transformation?",
"opts": {
"A": "Use AI to translate the existing customer manuals into five additional languages automatically.",
"B": "Use AI to schedule warehouse staff shifts more efficiently based on forecast order volumes.",
"C": "Use AI to write product descriptions for the website faster than the current copywriting team.",
"D": "Offer a subscription that uses AI on appliance data to predict failures and schedule repairs."
},
"fin": [
"D"
],
"expl": "Moving from one-off sales to an ongoing AI-powered service creates a new way to capture value, which is business model transformation. Faster descriptions (C), better scheduling (B) and translation (A) optimise the current model.",
"multi": false
},
{
"id": "CC-032",
"dm": 2,
"domain": "Domain 2：AI 策略與商業價值創造（AI Strategy and Business Value Creation）28%",
"sub": "AI 策略、用例選擇、優先序與競爭優勢",
"code": "CC",
"stem": "An online fashion marketplace wants an AI advantage that competitors can't easily copy. All its competitors can access the same foundation models. Which approach is MOST likely to create a sustainable advantage?",
"opts": {
"A": "Run a single high-profile AI pilot each year and present the results at industry events.",
"B": "Switch to whichever foundation model scores highest on public benchmarks each quarter.",
"C": "Combine proprietary fit and returns data with AI embedded in sizing and returns processes.",
"D": "Announce an AI strategy publicly before competitors do, to be seen as the market's leader."
},
"fin": [
"C"
],
"expl": "Proprietary data plus AI integrated into core processes creates a data flywheel that competitors can't easily replicate. Benchmark-chasing (B) uses models every competitor can access; announcements (D) and showcase pilots (A) don't create lasting capability.",
"multi": false
},
{
"id": "CC-033",
"dm": 2,
"domain": "Domain 2：AI 策略與商業價值創造（AI Strategy and Business Value Creation）28%",
"sub": "AI 策略、用例選擇、優先序與競爭優勢",
"code": "CC",
"stem": "In a retailer's market, AI-powered product search and recommendations have become standard across nearly all competitors. The retailer has neither. Which investment posture is MOST appropriate?",
"opts": {
"A": "Fund a long-term research lab to invent a new kind of recommendation algorithm before acting on it.",
"B": "Wait several years until the technology matures before making any investment in AI search at all.",
"C": "Build a proprietary search model from scratch to leapfrog competitors that bought their solutions.",
"D": "Reach parity quickly, often by buying proven solutions, and focus differentiation efforts elsewhere."
},
"fin": [
"D"
],
"expl": "When a capability has become table stakes, the priority is reaching parity quickly, often by buying, while differentiating elsewhere. Waiting (B) widens the gap; building from scratch (C) or funding a research lab (A) is slow and costly.",
"multi": false
},
{
"id": "CC-034",
"dm": 2,
"domain": "Domain 2：AI 策略與商業價值創造（AI Strategy and Business Value Creation）28%",
"sub": "AI 策略、用例選擇、優先序與競爭優勢",
"code": "CC",
"stem": "A retailer's board asks how AI will improve operations in a way that adds up to a competitive advantage. Which TWO examples BEST describe operational improvements from AI? (Select TWO)",
"opts": {
"A": "Lower unit costs from automated document processing in finance and supplier management.",
"B": "Faster replenishment cycles from more accurate demand forecasts that reduce stockouts.",
"C": "More press coverage of the company's AI announcements than its main competitors received.",
"D": "A higher monthly cloud bill, which shows that the company is investing seriously in AI.",
"E": "A larger number of AI pilots launched each quarter, regardless of whether they reach production."
},
"fin": [
"A",
"B"
],
"expl": "Lower unit costs (A) and faster cycle times with fewer stockouts (B) are operational improvements that compound into advantage. Pilot counts (E), cloud spend (D) and press coverage (C) are activity or perception, not operational results.",
"multi": true
},
{
"id": "CN-001",
"dm": 2,
"domain": "Domain 2：AI 策略與商業價值創造（AI Strategy and Business Value Creation）28%",
"sub": "業務價值、ROI 與 KPI 衡量",
"code": "CN",
"stem": "A contact center deployed an AI assistant that summarizes calls and suggests next steps to agents. Leadership asks for KPIs that capture both tangible and intangible benefits. Which set of KPIs BEST meets this request?",
"opts": {
"A": "The percentage of agents who completed AI training, reported each month as the single success metric for the whole contact center program.",
"B": "Model accuracy on a held-out test dataset and the number of model versions the vendor releases each quarter for review.",
"C": "Handle time and cost per contact (tangible), plus customer and agent satisfaction or attrition (intangible).",
"D": "Number of prompts sent to the model per day and the average number of tokens used per conversation, tracked on a dashboard."
},
"fin": [
"C"
],
"expl": "Good AI KPIs connect to business outcomes. Average handle time and cost per contact are tangible, financial measures of efficiency. Customer satisfaction and employee satisfaction or attrition capture intangible benefits that matter to the business but are harder to put a direct dollar value on. Prompt and token counts measure activity and cost drivers, not value. Test-set accuracy and release counts are technical delivery metrics; they do not show any effect on the business. Training completion is a useful leading indicator of adoption, but on its own it does not show any business benefit.",
"multi": false
},
{
"id": "CN-012",
"dm": 2,
"domain": "Domain 2：AI 策略與商業價值創造（AI Strategy and Business Value Creation）28%",
"sub": "AI 策略、用例選擇、優先序與競爭優勢",
"code": "CN",
"stem": "An online retailer's complaints about late deliveries have doubled this year. A vendor proposes a generative AI chatbot to handle the complaint volume. An operations review shows that 80% of the late deliveries come from one regional carrier whose contract has no delivery-time commitments, and that the other carriers perform well. What should the AI business strategist recommend FIRST?",
"opts": {
"A": "Fix the root cause first, such as renegotiating the carrier contract with delivery-time commitments or shifting volume to better carriers.",
"B": "Deploy the generative AI chatbot so that complaints are handled faster and at a lower cost per contact.",
"C": "Fine-tune a foundation model on past complaint transcripts so that responses to customers whose deliveries are late sound more empathetic.",
"D": "Build a custom model in Amazon SageMaker AI that predicts which orders the underperforming carrier is likely to deliver late each week."
},
"fin": [
"A"
],
"expl": "AI is not the right solution when the problem has a known, non-AI root cause. Here, late deliveries are concentrated in one carrier with a weak contract, so the effective fix is a business action: renegotiate the contract with delivery-time commitments or shift volume to carriers that perform well. A chatbot only handles the symptom (complaints) faster; the deliveries stay late and customer dissatisfaction remains. Fine-tuning a model to sound more empathetic adds cost and also leaves the cause untouched. A late-delivery prediction model could support proactive notifications later, but it still accepts the carrier's poor performance instead of correcting it, and it costs far more than fixing the contract.",
"multi": false
},
{
"id": "CN-013",
"dm": 2,
"domain": "Domain 2：AI 策略與商業價值創造（AI Strategy and Business Value Creation）28%",
"sub": "AWS 服務、定價與成本管理",
"code": "CN",
"stem": "A company is comparing three ways to give employees a generative AI assistant: a per-user monthly subscription to a managed assistant, a consumption-based model where the company pays per token processed, and a self-hosted model on reserved instance capacity. Usage is expected to be light and highly uneven across 5,000 employees for the first year. Which pricing consideration is MOST relevant to the decision?",
"opts": {
"A": "Consumption pricing ties cost to actual use, while seats are paid per licensed user and reserved instances are paid even when idle.",
"B": "Self-hosted instance-based capacity offers the lowest unit price per request, so it is the cheapest choice once 5,000 employees are counted.",
"C": "Seat-based pricing makes the budget predictable, so it is the best fit regardless of how many licensed employees actually use the tool.",
"D": "Consumption-based pricing should be avoided because token-based costs cannot be estimated in advance with AWS Pricing Calculator."
},
"fin": [
"A"
],
"expl": "AI services commonly use consumption-based (pay per token or request), seat-based (pay per user), or instance-based (pay for provisioned capacity over time) pricing. The best choice depends on the usage pattern. Light, uneven usage favors consumption-based pricing because idle users and idle capacity cost nothing. Seat-based pricing becomes attractive when most licensed users are heavy, predictable users. Instance-based capacity suits steady, high-volume workloads where the capacity is well used. A low unit price per request only materializes when reserved capacity is busy; with light usage, most of the paid hours sit idle. Budget predictability from seats does not make them cost-effective when many licensed employees rarely use the tool. Consumption-based costs can be estimated from expected request and token volumes, and AWS Pricing Calculator supports usage-based estimates, so estimation is not a reason to rule it out.",
"multi": false
},
{
"id": "CN-015",
"dm": 2,
"domain": "Domain 2：AI 策略與商業價值創造（AI Strategy and Business Value Creation）28%",
"sub": "AWS 服務、定價與成本管理",
"code": "CN",
"stem": "A product manager must present a 3-year cost estimate for a new AI-powered document review service to the investment committee before any resources are deployed. The estimate must break down expected costs based on projected usage. Which AWS tool is MOST appropriate for this task?",
"opts": {
"A": "AWS Cloud Adoption Framework (AWS CAF)",
"B": "AWS Cost Explorer",
"C": "AWS Marketplace",
"D": "AWS Pricing Calculator"
},
"fin": [
"D"
],
"expl": "AWS Pricing Calculator creates cost estimates for planned workloads based on expected usage, before anything is deployed, which is what an investment committee needs for a forward-looking business case. AWS Cost Explorer analyzes and forecasts spending based on actual historical usage, so it is useful after launch rather than for a new service with no history. AWS Marketplace is a catalog for finding and buying third-party software, data, and services. AWS CAF is a framework for planning cloud and AI adoption across the organization; it does not produce cost estimates.",
"multi": false
},
{
"id": "CN-018",
"dm": 2,
"domain": "Domain 2：AI 策略與商業價值創造（AI Strategy and Business Value Creation）28%",
"sub": "AI 策略、用例選擇、優先序與競爭優勢",
"code": "CN",
"stem": "A global consumer goods company has 12 AI initiatives competing for a limited budget. The AI steering committee scores each initiative for business value, feasibility, and strategic alignment. Initiative X has high business value and strong strategic alignment but depends on customer data that is spread across six disconnected systems with inconsistent quality. Initiative Y has moderate value, good alignment, and clean, ready-to-use data. The company needs a visible win within two quarters to secure continued executive sponsorship. Which decision BEST balances the portfolio?",
"opts": {
"A": "Cancel both initiatives and wait until all company data is fully consolidated.",
"B": "Fund Initiative Y as the near-term win, and fund the data foundation work for Initiative X in parallel so X can follow in a later phase.",
"C": "Fund only Initiative X now, because the initiative with the highest business value should always come first regardless of its feasibility.",
"D": "Fund all 12 initiatives at reduced levels so none of the sponsors are disappointed."
},
"fin": [
"B"
],
"expl": "Prioritization weighs business value, feasibility, sustainability, and strategic alignment together. Initiative Y is feasible now and can deliver the visible short-term win needed to keep executive sponsorship. Initiative X has greater long-term value but is not feasible until its data problems are solved, so investing in that data foundation now prepares it for a later phase. Funding X alone ignores a major feasibility risk and the two-quarter deadline. Cancelling both and waiting for perfect data delays all value and risks losing sponsorship. Spreading the budget thinly across 12 initiatives typically produces many stalled pilots and no meaningful result.",
"multi": false
},
{
"id": "CN-022",
"dm": 2,
"domain": "Domain 2：AI 策略與商業價值創造（AI Strategy and Business Value Creation）28%",
"sub": "業務價值、ROI 與 KPI 衡量",
"code": "CN",
"stem": "A professional services firm rolled out a generative AI tool that drafts first versions of proposals. After 12 months, the firm wants to calculate the ROI. Which approach gives the MOST complete and credible ROI calculation?",
"opts": {
"A": "Divide the number of proposals drafted by the tool over 12 months by the annual subscription cost of the tool.",
"B": "Compare all benefits, such as time saved and win-rate gains, with all costs, including licenses, integration, and training, against the pre-launch baseline.",
"C": "Compare the subscription cost with the license savings from retiring the firm's previous proposal-template software, and treat the difference as the ROI.",
"D": "Apply the vendor's published ROI percentage for similar professional services firms to the firm's annual revenue and headcount."
},
"fin": [
"B"
],
"expl": "A comprehensive ROI framework counts all benefit streams (time savings, cost reduction, revenue growth, productivity gains) and all costs, including the often-missed costs of integration, training, change management, and ongoing governance. It also measures change against a baseline taken before launch. Proposals per dollar is an activity ratio, not a return. A vendor's generic ROI figure is not evidence of this firm's results. Counting only the savings from retired software licenses ignores the main value drivers and most of the costs.",
"multi": false
},
{
"id": "CN-031",
"dm": 2,
"domain": "Domain 2：AI 策略與商業價值創造（AI Strategy and Business Value Creation）28%",
"sub": "AI 策略、用例選擇、優先序與競爭優勢",
"code": "CN",
"stem": "A specialty pharmacy chain operates in a market where most competitors already use AI chatbots for basic customer questions. The chain holds 15 years of proprietary data about patient adherence and refill behavior that no competitor has. The board asks where AI investment will create the most durable competitive advantage. What should the AI business strategist recommend?",
"opts": {
"A": "Buy commodity AI to reach parity on basic questions cheaply, and focus differentiated investment on AI that uses the proprietary adherence data.",
"B": "Invest mainly in a more advanced general-purpose chatbot than competitors have, because customer-facing chatbots are the most visible AI use case.",
"C": "Delay AI investment until competitors' results show which use cases deliver returns, then follow the proven approach at lower risk.",
"D": "Replicate the AI features that competitors have already launched, so the chain closes the gap in the use cases customers already see."
},
"fin": [
"A"
],
"expl": "Sustainable AI advantage usually comes from assets competitors cannot easily copy, such as proprietary data, deeply embedded workflows, and feedback loops that improve over time. Generic capabilities like a basic chatbot are table stakes; the smart move is to reach parity cheaply (for example, by buying a managed solution) and focus differentiated investment where unique data creates value. A better general-purpose chatbot is easy for competitors to match. Waiting for competitors gives up the head start that the unique data provides. Replicating competitors' features at best produces parity, not advantage.",
"multi": false
},
{
"id": "CN-038",
"dm": 2,
"domain": "Domain 2：AI 策略與商業價值創造（AI Strategy and Business Value Creation）28%",
"sub": "AI 策略、用例選擇、優先序與競爭優勢",
"code": "CN",
"stem": "A commercial equipment manufacturer sells machines through one-time sales. Its machines already send sensor data, and the company has built an AI model that predicts failures weeks in advance. Leadership wants to use AI to transform the business model, not only to improve internal efficiency. Which opportunities represent business model transformation? (Choose two.)",
"opts": {
"A": "Use generative AI to write internal meeting summaries for the engineering team, so engineers spend less time on documentation and more time on product design.",
"B": "Use AI to reduce the number of steps in the internal expense approval process.",
"C": "Launch a paid AI-powered predictive maintenance service that creates a new recurring revenue stream from machines already installed at customers.",
"D": "Offer an uptime-as-a-service subscription in which customers pay per hour of guaranteed machine availability, supported by predictive maintenance.",
"E": "Replace the company website's search box with a newer search engine."
},
"fin": [
"C",
"D"
],
"expl": "Business model transformation changes how a company creates, delivers, or captures value, for example by moving from one-time product sales to outcome-based or recurring service revenue. An uptime-as-a-service subscription and a paid predictive maintenance service both use AI to create new revenue models from data the company already has. Streamlining expense approvals, writing internal meeting summaries, and upgrading website search are operational improvements: they can be valuable, but they do not change the business model.",
"multi": true
},
{
"id": "CN-043",
"dm": 2,
"domain": "Domain 2：AI 策略與商業價值創造（AI Strategy and Business Value Creation）28%",
"sub": "AI 策略、用例選擇、優先序與競爭優勢",
"code": "CN",
"stem": "An online travel agency is assessing the competitive landscape before launching an AI trip-planning assistant. Several competitors have released similar assistants built on widely available foundation models. Which factor is MOST likely to give the agency a sustainable competitive advantage over these competitors?",
"opts": {
"A": "Choosing the foundation model with the highest public benchmark scores, because better benchmark results translate directly into a better assistant for travelers.",
"B": "Launching the assistant before the next competitor does, because being first to market secures long-term customer loyalty.",
"C": "Featuring the assistant prominently in every marketing campaign so that customers associate the brand with AI innovation.",
"D": "Grounding the assistant in proprietary inventory, negotiated rates, and customer history, and integrating it into booking so each interaction improves recommendations."
},
"fin": [
"D"
],
"expl": "When competitors can access the same foundation models, the model itself is not a durable differentiator. Advantage comes from what competitors cannot easily copy: proprietary data (inventory, negotiated rates, customer history), deep integration into the core workflow, and a data feedback loop that makes the product better with each use. Grounding a model in company data (for example, by using Retrieval Augmented Generation through Amazon Bedrock Knowledge Bases) is a common way to apply this proprietary context. Any competitor can adopt the same top-scoring model, and benchmark scores do not reflect the agency's own inventory or customers. A first-mover head start disappears quickly when competitors use the same models. Marketing claims alone do not create a capability advantage.",
"multi": false
},
{
"id": "CN-048",
"dm": 2,
"domain": "Domain 2：AI 策略與商業價值創造（AI Strategy and Business Value Creation）28%",
"sub": "AWS 服務、定價與成本管理",
"code": "CN",
"stem": "A company's monthly spend on a generative AI customer service application, built on Amazon Bedrock, has tripled in two quarters and the CFO wants better cost control. The AI business strategist does not configure services but must recommend cost planning and optimization actions. Which actions should the strategist recommend? (Choose two.)",
"opts": {
"A": "Stop all generative AI usage until the next annual budget cycle.",
"B": "Ask the team to evaluate whether smaller or lower-cost models meet the quality bar for routine requests, and to use batch processing for work that does not need real-time responses.",
"C": "Use AWS Cost Explorer to analyze spending by service and cost allocation tag, to see which applications and teams drive the growth.",
"D": "Always choose the largest, most capable model for every request, because fewer retries and better answers always reduce the total cost.",
"E": "Remove the cost line from the business case so the initiative is not judged on spend."
},
"fin": [
"B",
"C"
],
"expl": "Basic AI cost control starts with visibility and then matches the cost of each workload to the value it delivers. AWS Cost Explorer shows spending trends and, with cost allocation tags, which applications or teams are driving the growth. Matching model size to task complexity and using batch inference for work that is not time-sensitive (Amazon Bedrock offers batch inference at a lower price than on-demand) are common optimization levers. Stopping all usage destroys the business value the application creates. Using the largest model for every request usually increases cost per request. Hiding costs from the business case makes ROI impossible to measure honestly.",
"multi": true
},
{
"id": "CN-051",
"dm": 2,
"domain": "Domain 2：AI 策略與商業價值創造（AI Strategy and Business Value Creation）28%",
"sub": "AI 策略、用例選擇、優先序與競爭優勢",
"code": "CN",
"stem": "A regional insurance company wants to start its AI program. The leadership team has collected 30 ideas from different departments, ranging from a chatbot for the company website to AI-assisted claims triage. The CEO's top priority for the year is to reduce the claims cycle time, which customer surveys identify as the main driver of churn. Which approach should the AI business strategist take to select the first initiatives?",
"opts": {
"A": "Select the ideas that the IT department considers technically easiest, regardless of business impact.",
"B": "Start with the ideas that use the newest generative AI models so that the company is seen by customers and investors as an innovator.",
"C": "Fund a small pilot for every one of the 30 ideas so that each department gets a fair chance to prove the value of its proposal.",
"D": "Map ideas to business outcomes, then prioritize those that cut claims cycle time and are feasible with the available data."
},
"fin": [
"D"
],
"expl": "An AI strategy should start from business objectives. Mapping each candidate use case to the outcome it influences (here, claims cycle time and churn) and then filtering by feasibility (data availability, complexity) focuses scarce investment on high-impact work that leadership already cares about. Choosing ideas because they use the newest technology optimizes for image instead of business value. Funding a pilot for all 30 ideas spreads budget and attention too thin and rarely produces a scalable win. Picking only the technically easiest ideas ignores business impact, so the program may succeed technically while failing to move the metrics the CEO cares about.",
"multi": false
},
{
"id": "CN-054",
"dm": 2,
"domain": "Domain 2：AI 策略與商業價值創造（AI Strategy and Business Value Creation）28%",
"sub": "AWS 服務、定價與成本管理",
"code": "CN",
"stem": "A company runs a stable, steady machine learning workload on Amazon SageMaker AI 24 hours a day, and expects the same usage level for at least the next three years. The finance team asks how to reduce the cost of this predictable usage without changing the solution. What should the AI business strategist recommend?",
"opts": {
"A": "Move the workload to a different cloud provider every year to get new-customer discounts.",
"B": "Evaluate a Savings Plan that commits to a consistent amount of usage for a 1-year or 3-year term at lower prices.",
"C": "Buy additional capacity in advance to prepare for possible future growth.",
"D": "Turn the workload off on weekends, even though the business needs it 24 hours a day."
},
"fin": [
"B"
],
"expl": "Savings Plans offer lower prices in exchange for a commitment to a consistent amount of usage (measured in USD per hour) for a 1-year or 3-year term. SageMaker AI instance usage is covered by SageMaker AI Savings Plans, which offer up to 64% off On-Demand rates regardless of instance family, size, Region, or component. A steady, predictable, long-running workload is the ideal case for this kind of commitment. Moving between cloud providers every year creates migration cost, business continuity risk, and disruption that outweigh any discount. Turning the workload off on weekends breaks a stated business requirement. Buying extra capacity for growth that may never happen adds cost instead of reducing it.",
"multi": false
},
{
"id": "CN-056",
"dm": 2,
"domain": "Domain 2：AI 策略與商業價值創造（AI Strategy and Business Value Creation）28%",
"sub": "AI 策略、用例選擇、優先序與競爭優勢",
"code": "CN",
"stem": "A mid-sized insurer wants AI to extract data from commercial property inspection reports. It must be in production within four months, the company has no ML team, and its regulator requires that policyholder data is processed only inside the insurer's own AWS environment. Which build-buy-partner option is the BEST fit?",
"opts": {
"A": "Partner with a consulting firm on an 18-month custom development program, because a partner removes the need for in-house ML skills.",
"B": "Build a custom document extraction model in-house by hiring a data science team, because only an in-house build keeps the data under company control.",
"C": "Evaluate pre-built document processing solutions in AWS Marketplace that deploy into the insurer's account, with a partner for integration.",
"D": "Buy a SaaS document extraction product that processes the reports in the vendor's own multi-tenant cloud, because it is the fastest to deploy."
},
"fin": [
"C"
],
"expl": "Build-buy-partner decisions weigh budget, timelines, in-house capabilities, vendor proposals, and regulatory requirements together. Document extraction is a well-served use case, so buying a proven solution beats building one, but the regulatory requirement rules out any product that processes data outside the insurer's environment. AWS Marketplace lists third-party software that can be procured and deployed into the customer's own AWS account, and an implementation partner closes the skills gap, which meets the timeline, capability, and compliance constraints together. A multi-tenant SaaS product is fast but violates the data-processing requirement. Hiring a data science team and building a custom model cannot realistically reach production in four months. An 18-month custom program misses the timeline even though a partner supplies the skills.",
"multi": false
},
{
"id": "CN-057",
"dm": 2,
"domain": "Domain 2：AI 策略與商業價值創造（AI Strategy and Business Value Creation）28%",
"sub": "AI 策略、用例選擇、優先序與競爭優勢",
"code": "CN",
"stem": "A regional bank is deciding how much to invest in AI next year. In its market, large competitors already use AI at scale for fraud detection and personalized offers, and customers increasingly expect real-time, personalized service. The bank currently has only a few small experiments. Which investment approach is MOST appropriate given these competitive dynamics?",
"opts": {
"A": "Keep investment at the current experimental level until the bank's own experiments prove a return, because scaling AI before there is internal proof adds unnecessary risk.",
"B": "Concentrate the entire technology budget on one transformative AI project that is designed to leapfrog the larger competitors at once.",
"C": "Increase investment with a focused roadmap: reach parity on capabilities customers now expect, and differentiate in one or two areas using local relationships and data.",
"D": "Match the largest competitor's AI budget dollar for dollar, so the bank cannot fall behind in any AI capability."
},
"fin": [
"C"
],
"expl": "The right AI investment level depends on industry maturity and competitive dynamics. When AI is already mature in an industry and shapes customer expectations, under-investing creates a growing competitive gap, so the bank should invest more while staying focused: close parity gaps first, then differentiate where it has unique strengths. Staying at the experimental level ignores evidence that AI is already proven at scale in this market, and the gap widens while the bank waits for internal proof. A single all-in moonshot concentrates risk and leaves basic parity gaps open. Matching a much larger competitor's budget ignores the bank's own size, strategy, and ability to absorb the change.",
"multi": false
},
{
"id": "CN-058",
"dm": 2,
"domain": "Domain 2：AI 策略與商業價值創造（AI Strategy and Business Value Creation）28%",
"sub": "業務價值、ROI 與 KPI 衡量",
"code": "CN",
"stem": "A vendor proposes a 2 million USD AI deployment to automate invoice processing for a manufacturing company. The proposal includes impressive accuracy figures from other customers, but it does not mention the company's current invoice volume, processing cost, or error rate, and it includes no success criteria. What should the AI business strategist do FIRST?",
"opts": {
"A": "Baseline invoice volume, cost per invoice, cycle time, and error rate, and set success criteria first.",
"B": "Ask the vendor to reduce the price by 30% to lower the investment risk, and then approve the deployment.",
"C": "Reject the proposal, because AI is not suitable for invoice processing at this company's current scale.",
"D": "Approve the proposal, because the accuracy figures reported by other manufacturing customers show that the solution will work here too."
},
"fin": [
"A"
],
"expl": "An investment cannot be judged as sound, premature, or incomplete without knowing the starting point. Baseline metrics (volume, cost per invoice, cycle time, error rate) are needed to estimate the possible return and, later, to prove the AI effect. Clear success criteria tell everyone what good looks like. Accuracy reported by other customers may not transfer to this company's documents and processes. Document extraction is a well-established AI use case, so rejecting it outright is not justified. Negotiating price without a value case still leaves the company unable to say whether the investment pays off.",
"multi": false
},
{
"id": "CN-063",
"dm": 2,
"domain": "Domain 2：AI 策略與商業價值創造（AI Strategy and Business Value Creation）28%",
"sub": "業務價值、ROI 與 KPI 衡量",
"code": "CN",
"stem": "Three months into a generative AI rollout for a sales team, the program sponsor wants early signals that predict whether the initiative will meet its 12-month revenue target. Which metric is the BEST leading indicator?",
"opts": {
"A": "Year-to-date revenue for the sales team compared with the 12-month target, reported at the end of each quarter.",
"B": "The total contract value and the number of licenses in the AI vendor agreement.",
"C": "The weekly share of sales representatives who actively use the tool in real deal workflows, and their repeat usage.",
"D": "The number of executives and sales leaders who attended the launch event and the kickoff training."
},
"fin": [
"C"
],
"expl": "Leading indicators predict future outcomes and can be measured early enough to act on. Sustained active and repeat usage in real workflows is a strong predictor of whether the tool will eventually affect revenue. Without adoption there is no value. Revenue against target is a lagging indicator: it reports the outcome after it has happened and is influenced by many factors besides the tool. Launch attendance and the size of the vendor contract do not say whether the people who must change their behavior are actually doing so.",
"multi": false
},
{
"id": "CN-064",
"dm": 2,
"domain": "Domain 2：AI 策略與商業價值創造（AI Strategy and Business Value Creation）28%",
"sub": "AI 策略、用例選擇、優先序與競爭優勢",
"code": "CN",
"stem": "An HR operations team wants to automate the approval of employee expense reports. Company policy is precise: meals up to $75 per day are auto-approved, any receipt over $500 requires manager approval, and alcohol is never reimbursed. The policy rarely changes, and every decision must be fully explainable to auditors. Which approach should a business analyst recommend?",
"opts": {
"A": "Build an AI agent that autonomously negotiates exceptions with employees.",
"B": "Use rule-based automation that encodes the explicit policy thresholds.",
"C": "Use a generative AI assistant to read each report and decide whether it complies with policy.",
"D": "Train a custom machine learning model on past expense approvals to predict which reports to approve."
},
"fin": [
"B"
],
"expl": "When the logic is known, stable, and can be written as explicit if-then rules, and decisions must be deterministic and fully explainable, rule-based automation is cheaper, more predictable, and easier to audit than AI. AI becomes valuable when patterns are too complex or variable to write as rules, or when inputs are unstructured. A custom ML model would only approximate rules that are already known exactly, and it would introduce probabilistic errors and a need for monitoring. A GenAI assistant can produce inconsistent results for identical inputs and adds per-request cost without a business benefit here. An autonomous agent negotiating exceptions goes beyond the requirement and adds governance risk to a simple policy check.",
"multi": false
},
{
"id": "GD-001",
"dm": 2,
"domain": "Domain 2：AI 策略與商業價值創造（AI Strategy and Business Value Creation）28%",
"sub": "業務價值、ROI 與 KPI 衡量",
"code": "GD",
"stem": "A regional bank is deciding whether to expand an AI forecasting pilot. The vendor highlights analyst time savings and projects a 3x return, but Finance notes that the estimate excludes integration, governance, change-management, and ongoing operating costs, and it is unclear how much saved time will become usable capacity. Which ROI approach should leadership use?",
"opts": {
"A": "Value reported time savings at fully loaded salary rates and compare that amount with the annual model and software subscription fees.",
"B": "Use the vendor projection after applying a standard risk discount, treating the completed pilot as sufficient proof the return will hold.",
"C": "Compare incremental realized benefits with full lifecycle costs, monetize time savings tied to capacity, cost, or revenue, and test key assumptions with sensitivity analysis.",
"D": "Report financial benefits and intangible benefits separately in the annual business case, and exclude adoption, training, and change-management costs from the total submitted for approval."
},
"fin": [
"C"
],
"expl": "C 正確：ROI 應比較「已實現的增量效益」與「全生命週期成本」（含整合、治理、變革管理、營運），並把節省的時間轉成容量／成本／營收，再用敏感度分析檢驗假設。A 只比訂閱費；B 把試辦視為足夠證明；D 排除變革成本，皆低估成本。",
"multi": false
},
{
"id": "GD-002",
"dm": 2,
"domain": "Domain 2：AI 策略與商業價值創造（AI Strategy and Business Value Creation）28%",
"sub": "AI 策略、用例選擇、優先序與競爭優勢",
"code": "GD",
"stem": "A healthcare network is redesigning employee support. Benefit-eligibility routing follows stable published rules, while many employee questions arrive as free text and require interpretation of varied policy language. How should the steering committee decide where to use rules and where to use AI?",
"opts": {
"A": "Use AI for both routing and free-text questions so the organization can standardize on one architecture and simplify support ownership.",
"B": "Use deterministic rules for both eligibility routing and free-text workflows, prioritizing explainability and auditability over flexibility in employee-support processes.",
"C": "Choose the approach that reaches a working demonstration fastest, then standardize on it after the pilot to minimize transition effort.",
"D": "Keep deterministic logic for stable, explicit decisions and use AI where ambiguity or unstructured inputs create material value."
},
"fin": [
"D"
],
"expl": "D 正確：穩定、明確的決策用確定性規則；有歧義或非結構化輸入才用 AI。全用 AI 或全用規則都不符合「各取所長」。",
"multi": false
},
{
"id": "GD-003",
"dm": 2,
"domain": "Domain 2：AI 策略與商業價值創造（AI Strategy and Business Value Creation）28%",
"sub": "AI 策略、用例選擇、優先序與競爭優勢",
"code": "GD",
"stem": "A research institute already uses a deterministic rules engine for grant eligibility. The rules are stable, explicit, auditable, and the current system meets its service target. A proposed AI replacement would add review and operating cost without improving the required outcome. What should leadership do?",
"opts": {
"A": "Replace the rules engine with a learned model, using the available historical eligibility decisions as training examples.",
"B": "Continue the AI pilot until it matches the current system, then switch to AI expecting easier future adaptation to policy changes.",
"C": "Fund a parallel AI implementation to preserve future strategic options even though the current rules engine already meets its target.",
"D": "Keep the deterministic solution unless AI demonstrates a separate material benefit that justifies the added cost, uncertainty, and governance burden."
},
"fin": [
"D"
],
"expl": "D 正確：規則引擎已達標且可稽核，除非 AI 能證明額外且實質的效益足以抵銷成本、不確定性與治理負擔，否則維持現狀。",
"multi": false
},
{
"id": "GD-006",
"dm": 2,
"domain": "Domain 2：AI 策略與商業價值創造（AI Strategy and Business Value Creation）28%",
"sub": "AI 策略、用例選擇、優先序與競爭優勢",
"code": "GD",
"stem": "A media company is deciding how aggressively to fund AI in content operations. Competitors are launching new capabilities, regulation remains uncertain, and the company has strong data assets but uneven operating readiness across business units. Which investment posture should the steering committee take?",
"opts": {
"A": "Limit AI funding to the current IT innovation budget until each business unit reaches the same maturity level, avoiding uneven adoption across the company.",
"B": "Match the AI spending rate of the leading competitor, then adjust individual projects to fit that portfolio envelope and preserve competitive parity.",
"C": "Set staged investment levels using strategic urgency, industry adoption, regulatory exposure, internal readiness, and the cost of moving too early or too late.",
"D": "Defer major investment until regulation and platform choices stabilize, while restricting current work to low-cost experiments that require no operating changes."
},
"fin": [
"C"
],
"expl": "C 正確：依策略急迫性、產業採用度、法規暴露、內部準備度與「過早／過晚」成本分階段投資；盲目比照對手或全面觀望都不妥。",
"multi": false
},
{
"id": "GD-008",
"dm": 2,
"domain": "Domain 2：AI 策略與商業價值創造（AI Strategy and Business Value Creation）28%",
"sub": "AI 策略、用例選擇、優先序與競爭優勢",
"code": "GD",
"stem": "A property insurer has twelve AI proposals competing for the same transformation budget. Some have strong executive sponsors, some are technically easy, and several pilots already consumed meaningful funding. How should the portfolio committee decide what advances?",
"opts": {
"A": "Advance the technically easiest initiatives first, then use the resulting delivery experience to determine whether their business value justifies broader adoption.",
"B": "Score initiatives on business value, feasibility, sustainability, risk, and strategic alignment, then use evidence-based gates to scale, reshape, pause, or stop them.",
"C": "Rank initiatives primarily by sponsor commitment, using executive willingness to fund change as the strongest indicator that adoption barriers can be overcome.",
"D": "Continue initiatives that have already reached pilot stage until production, treating the sunk pilot investment as a reason not to stop."
},
"fin": [
"B"
],
"expl": "B 正確：以價值、可行性、永續性、風險、策略一致性評分，並用證據關卡決定擴大／調整／暫停／停止；不被沉沒成本或贊助者熱度左右。",
"multi": false
},
{
"id": "GD-009",
"dm": 2,
"domain": "Domain 2：AI 策略與商業價值創造（AI Strategy and Business Value Creation）28%",
"sub": "業務價值、ROI 與 KPI 衡量",
"code": "GD",
"stem": "A telecommunications provider has launched an AI assistant for service agents. Executives want evidence within the next quarter that the program is moving toward measurable value, even though a reliable annual ROI result will take longer. Which measurement plan is most useful?",
"opts": {
"A": "Track active users, prompt volume, and token consumption each week, and treat sustained growth in those activity measures as the primary evidence of business value.",
"B": "Track training completion and employee satisfaction with the assistant, treating positive sentiment as the signal that should precede productivity and financial improvements.",
"C": "Update the annual ROI forecast using pilot assumptions each month, but defer operational measures until enough financial data exists for a statistically stable result.",
"D": "Track representative-user adoption, task completion, quality acceptance, workflow integration, and other leading indicators that have a defined link to later business outcomes."
},
"fin": [
"D"
],
"expl": "D 正確：在年度 ROI 出來之前，看有明確連結業務成果的領先指標（採用、任務完成、品質接受度、流程整合）。單看使用量或滿意度不代表價值。",
"multi": false
},
{
"id": "GD-018",
"dm": 2,
"domain": "Domain 2：AI 策略與商業價值創造（AI Strategy and Business Value Creation）28%",
"sub": "業務價值、ROI 與 KPI 衡量",
"code": "GD",
"stem": "A consulting firm is moving an AI product-management assistant from experiment to operational use. Leaders want a KPI set that captures economic value without ignoring quality, customer, or employee effects, and they do not want model activity to be mistaken for business success. Which TWO approaches should they use? (Choose TWO.)",
"opts": {
"A": "Define outcome KPIs that connect the initiative to tangible value and to material intangible outcomes such as quality, satisfaction, or employee experience.",
"B": "Use realized financial benefits as the KPI set and track quality, customer, and workforce effects primarily as diagnostic notes outside the investment review.",
"C": "Choose the final KPI set after several months of production use, emphasizing the measures that show the clearest improvement once enough operating data is available.",
"D": "Use model accuracy or another technical performance metric as the common primary KPI so different AI initiatives can be compared on a consistent basis.",
"E": "Pair operational and AI measures with business-outcome measures, explicitly documenting how adoption, quality, or workflow performance is expected to lead to value."
},
"fin": [
"A",
"E"
],
"expl": "A、E 正確：KPI 要連結有形價值與重要的無形成果（品質、滿意度、員工體驗），並把營運／AI 指標與業務成果配對說明因果；技術準確度不等於商業成功。",
"multi": true
},
{
"id": "GD-026",
"dm": 2,
"domain": "Domain 2：AI 策略與商業價值創造（AI Strategy and Business Value Creation）28%",
"sub": "AI 策略、用例選擇、優先序與競爭優勢",
"code": "GD",
"stem": "A property insurer has already automated parts of claims handling and now wants to know whether AI could change how the company creates and captures value rather than simply reduce processing effort. Which proposal is the strongest example of business-model transformation?",
"opts": {
"A": "Introduce a customer chatbot for claim-status questions and count the new interface as a business-model change even if the underlying service and economics remain unchanged.",
"B": "Use AI-enabled risk insights and personalized prevention services to create a new ongoing customer offering with validated demand and a supporting revenue model.",
"C": "Add an AI-generated summary to the existing claims screen and keep the same customer promise, pricing model, distribution channels, and operating responsibilities.",
"D": "Automate additional internal claim-review steps and define transformation primarily as reducing clicks and handling time within the existing operating model."
},
"fin": [
"B"
],
"expl": "B 正確：商業模式轉型是改變價值創造／捕獲方式，如 AI 風險洞察與預防服務成為新的持續性收費產品；其餘只是流程效率或介面改變。",
"multi": false
},
{
"id": "GD-027",
"dm": 2,
"domain": "Domain 2：AI 策略與商業價值創造（AI Strategy and Business Value Creation）28%",
"sub": "AI 策略、用例選擇、優先序與競爭優勢",
"code": "GD",
"stem": "A professional-services firm and its competitors can license the same leading foundation models. Leadership wants AI investment to create an advantage that persists after competitors copy obvious productivity features. Which strategy is most likely to produce a sustainable advantage?",
"opts": {
"A": "License more AI tools than competitors and use the number of deployed products as evidence that the firm is building a broader innovation moat.",
"B": "Treat the first measurable productivity improvement as the durable advantage, even if competitors can reproduce the workflow using the same model and public data.",
"C": "Adopt the newest foundation model first and expect the early access itself to remain differentiating after the same model becomes generally available.",
"D": "Combine AI with proprietary knowledge, distinctive workflows, domain expertise, distribution, and learning loops that improve the firm's capability over time."
},
"fin": [
"D"
],
"expl": "D 正確：持久優勢來自結合專有知識、獨特流程、領域專長、通路與學習迴圈；同樣的模型與功能很容易被複製。",
"multi": false
},
{
"id": "GD-029",
"dm": 2,
"domain": "Domain 2：AI 策略與商業價值創造（AI Strategy and Business Value Creation）28%",
"sub": "AI 策略、用例選擇、優先序與競爭優勢",
"code": "GD",
"stem": "A professional-services firm needs a standard generative-AI capability for proposal research this quarter. The capability is not strategically differentiating, specialist capacity is limited, and leadership requires acceptable data handling, contractual controls, and an exit path. Which sourcing approach is most appropriate?",
"opts": {
"A": "Choose the lowest-cost qualified vendor after confirming basic functionality, then negotiate data handling, portability, and termination terms once the pilot demonstrates demand.",
"B": "Build and operate a custom foundation model so the firm controls each technical component directly.",
"C": "Evaluate suitable managed services, AWS Marketplace offerings, and partner options against time to value, lifecycle cost, required control, compliance, and exit requirements.",
"D": "Postpone the initiative until the firm hires a full internal AI platform team, ensuring that future sourcing decisions are made without dependence on external providers."
},
"fin": [
"C"
],
"expl": "C 正確：非差異化、時程緊、人力有限→評估託管服務／Marketplace／夥伴，比較價值時間、生命週期成本、控制、合規與退出條件。",
"multi": false
},
{
"id": "GD-035",
"dm": 2,
"domain": "Domain 2：AI 策略與商業價值創造（AI Strategy and Business Value Creation）28%",
"sub": "AI 策略、用例選擇、優先序與競爭優勢",
"code": "GD",
"stem": "The energy utility's AI pilot in field operations and customer programs has generated enough interest to reach a decision gate. Before approving further investment, leaders still need a defensible position on how to assess the competitive landscape and identify advantages to adopting AI, not simply confidence in the demonstration. What is the strongest next step?",
"opts": {
"A": "Treat an earlier launch than neighboring utilities as sufficient evidence of lasting advantage without testing whether the capability is easy for rivals to copy.",
"B": "Match the largest competitor's AI spending level and use budget scale as the main signal that the same investments fit this utility.",
"C": "Add each competitor-announced capability to the roadmap this year before showing that it improves the utility's economics, customer experience, or operating model.",
"D": "Map how AI could alter field-service cost, response speed, customer expectations, or switching barriers, then invest where those changes support a sustainable position."
},
"fin": [
"D"
],
"expl": "D 正確：先分析 AI 如何改變成本、速度、客戶期待與轉換障礙，再投資於能形成可持續定位之處；先上市或比預算都不等於優勢。",
"multi": false
},
{
"id": "GD-039",
"dm": 2,
"domain": "Domain 2：AI 策略與商業價值創造（AI Strategy and Business Value Creation）28%",
"sub": "業務價值、ROI 與 KPI 衡量",
"code": "GD",
"stem": "A construction company is at a funding gate for an AI initiative in claims and service. The pilot is encouraging, but leadership will not expand it until the team has a defensible position on how to establish baseline metrics before implementing AI solutions. Which action creates the most defensible path forward?",
"opts": {
"A": "Reconstruct the pre-pilot claims baseline after rollout from sponsor recollection instead of measuring it before the workflow changes.",
"B": "Use the AI provider's benchmark as the construction company's current-process baseline even though it describes a different environment.",
"C": "Measure the current process before implementation using the same outcome definitions that will be used after launch.",
"D": "Judge the construction pilot primarily against a peer contractor's published productivity results rather than the company's own pre-AI claims process."
},
"fin": [
"C"
],
"expl": "C 正確：實施前以與導入後相同的定義量測現況基線，才能證明改善。",
"multi": false
},
{
"id": "GD-043",
"dm": 2,
"domain": "Domain 2：AI 策略與商業價值創造（AI Strategy and Business Value Creation）28%",
"sub": "業務價值、ROI 與 KPI 衡量",
"code": "GD",
"stem": "A wholesale distributor's operations, sales, and finance leaders all agree that late shipment notifications are a real problem, but each defines success differently: operations wants fewer manual status calls, sales wants fewer customer complaints, and finance wants lower expedited-shipping costs. The team is ready to select an AI approach. What should the team do first?",
"opts": {
"A": "Fund parallel AI pilots, one designed toward each stakeholder's preferred metric, so no department has to compromise on its own definition of success.",
"B": "Select the AI capability that operations prefers, on the basis that operations owns the shipment-notification workflow day to day, and let sales and finance track their own metrics separately afterward.",
"C": "Proceed with an AI approach now and defer the definition of success until after deployment, when actual usage data will show which metric improved most.",
"D": "Align stakeholders on a single primary measurable outcome definition for the shipment-notification problem before selecting or funding an AI approach."
},
"fin": [
"D"
],
"expl": "D 正確：先對齊單一、可衡量的主要成果定義，再選擇與資助 AI 方案；各自定義成功會造成分散。",
"multi": false
},
{
"id": "GD-044",
"dm": 2,
"domain": "Domain 2：AI 策略與商業價值創造（AI Strategy and Business Value Creation）28%",
"sub": "AWS 服務、定價與成本管理",
"code": "GD",
"stem": "A retail company is building a business case for a generative AI service. Usage could vary by a factor of ten between the pilot and holiday season. Finance wants a credible pre-launch estimate rather than a single vendor list price. Which action is MOST appropriate?",
"opts": {
"A": "Assume pilot spend will scale linearly through the entire holiday peak and use that single number as the final annual budget.",
"B": "Wait until after the holiday season ends and use the actual spend total as the original business-case estimate.",
"C": "Model usage and pricing with tools such as AWS Pricing Calculator, include major cost drivers, and test multiple demand scenarios.",
"D": "Select the service with the lowest advertised unit price and ignore seasonal usage patterns and volume discounts."
},
"fin": [
"C"
],
"expl": "C 正確：用 AWS Pricing Calculator 建模用量與價格、納入主要成本驅動因子，並測試多種需求情境（旺季可能 10 倍）。",
"multi": false
},
{
"id": "GD-056",
"dm": 2,
"domain": "Domain 2：AI 策略與商業價值創造（AI Strategy and Business Value Creation）28%",
"sub": "業務價值、ROI 與 KPI 衡量",
"code": "GD",
"stem": "A research institute selected 'grant-application draft acceptance rate by reviewers' as its leading indicator for an AI drafting-assistant program, based on a plausible link to the program's ultimate goal of faster grant turnaround. After a year, acceptance rates remain high, but grant turnaround time has not improved, and time-to-award data suggests a different bottleneck has emerged downstream. What should the committee do?",
"opts": {
"A": "Raise the acceptance-rate target higher, on the reasoning that a more ambitious target will restore the indicator's link to turnaround time.",
"B": "Investigate why the leading indicator stopped predicting the intended outcome, and replace it with a measure that reflects the actual bottleneck.",
"C": "Continue reporting the acceptance-rate indicator unchanged, on the strength of its having been validated as causally linked to turnaround when the program was designed.",
"D": "Drop leading indicators altogether and wait for the next annual turnaround-time result, treating this one indicator's failure as reason to abandon the approach."
},
"fin": [
"B"
],
"expl": "B 正確：領先指標與目標失去關聯時，應調查原因並換成反映實際瓶頸的指標；不應只拉高目標或放棄領先指標。",
"multi": false
},
{
"id": "GD-058",
"dm": 2,
"domain": "Domain 2：AI 策略與商業價值創造（AI Strategy and Business Value Creation）28%",
"sub": "業務價值、ROI 與 KPI 衡量",
"code": "GD",
"stem": "A telecommunications provider is rolling out an AI contact-center assistant across three regional call centers. Each center historically tracked 'resolved case' and 'handling time' using its own local definitions and reporting tools, and no attempt has been made to reconcile the definitions before rollout begins next month. What should the measurement team do first?",
"opts": {
"A": "Adopt whichever single center's existing definitions are already the most detailed, and apply that center's historical data as the baseline across the three centers.",
"B": "Reconcile the three centers on common definitions for resolved case and handling time, and capture a shared baseline before the rollout begins.",
"C": "Let each center keep its own existing definitions and compare each center's post-rollout results against its own prior local baseline alone, without reconciling definitions across centers.",
"D": "Begin the rollout now and reconcile the three centers' definitions after several months of results are available, once real differences in reported outcomes appear."
},
"fin": [
"B"
],
"expl": "B 正確：展開前先統一「結案」與「處理時間」定義並建立共同基線，否則成果無法跨中心比較。",
"multi": false
},
{
"id": "GD-060",
"dm": 2,
"domain": "Domain 2：AI 策略與商業價值創造（AI Strategy and Business Value Creation）28%",
"sub": "業務價值、ROI 與 KPI 衡量",
"code": "GD",
"stem": "A nonprofit network's dashboard for an AI program-delivery assistant now shows a clear result: cost per case has fallen 18 percent, but caseworker-reported strain and case-reopen rates have both risen since rollout. The program director wants to report the cost improvement to the board as the program's headline success. What should the measurement lead recommend instead? Episode 7 (Q61–70)",
"opts": {
"A": "Adjust the case-reopen rate definition to exclude cases reopened for minor reasons, bringing the reported reopen rate closer to its pre-rollout level.",
"B": "Report the cost improvement to the board as the program's success metric, and route the strain and reopen-rate data to a separate operational report outside the investment review.",
"C": "Delay reporting until caseworker strain returns to its pre-rollout level, treating the negative intangible signal as proof the tangible result cannot yet be considered valid.",
"D": "Report the cost improvement alongside the rising strain and reopen-rate signals as one combined result, and address the negative trend before further scaling."
},
"fin": [
"D"
],
"expl": "D 正確：成本下降要與壓力與重開率上升合併呈報，並在進一步擴大前處理負面趨勢；不可只報喜。",
"multi": false
},
{
"id": "GD-063",
"dm": 2,
"domain": "Domain 2：AI 策略與商業價值創造（AI Strategy and Business Value Creation）28%",
"sub": "業務價值、ROI 與 KPI 衡量",
"code": "GD",
"stem": "A financial-services company's board approved an AI-assistant business case for member service, based on a lifecycle-cost-adjusted ROI model that projected reduced average handling time convertible into three fewer full-time roles per quarter. Eight months in, handling time did fall as predicted, but no roles have been reduced or reallocated, and no one was ever assigned responsibility for making that conversion happen. What should Finance require going forward?",
"opts": {
"A": "Treat the eight months of reduced handling time as proof the business case is delivering value, whether or not the associated capacity has been redeployed.",
"B": "Discontinue ROI modeling for future AI business cases, treating this case as proof that even an accurate handling-time projection does not guarantee realized savings.",
"C": "Require that any AI business case projecting benefit through converted capacity name an accountable owner for that conversion, with progress tracked against the case.",
"D": "Recalculate the original ROI model using the same assumptions and handling-time inputs, treating the confirmed reduction as sufficient validation of the approved business case."
},
"fin": [
"C"
],
"expl": "C 正確：效益若依賴「容量轉換」，必須指定當責者負責轉換並追蹤進度，否則節省的時間不會變成財務效益。",
"multi": false
},
{
"id": "GD-069",
"dm": 2,
"domain": "Domain 2：AI 策略與商業價值創造（AI Strategy and Business Value Creation）28%",
"sub": "AI 策略、用例選擇、優先序與競爭優勢",
"code": "GD",
"stem": "A wholesale distributor's order-exception workflow produces inconsistent outcomes across regional teams. Investigation shows each team resolves exceptions using its own undocumented judgment calls rather than a shared set of rules, and the underlying decision logic is not actually ambiguous once written down. What should the operations team do first?",
"opts": {
"A": "Let each region keep using local judgment for now while data is gathered for a future model.",
"B": "Commission a machine learning model trained on each region's historical exception outcomes and edge cases.",
"C": "Document and codify the decision logic into a shared rule set before considering any AI solution.",
"D": "Deploy a generative AI assistant to standardize how exceptions get resolved across the regional teams."
},
"fin": [
"C"
],
"expl": "C 正確：決策邏輯不含歧義，只是未文件化→先把邏輯文件化、規則化，再考慮是否需要 AI。",
"multi": false
},
{
"id": "GD-072",
"dm": 2,
"domain": "Domain 2：AI 策略與商業價值創造（AI Strategy and Business Value Creation）28%",
"sub": "AWS 服務、定價與成本管理",
"code": "GD",
"stem": "A hospitality group is comparing AI pricing structures for a new guest support assistant. Finance and the business owner agree the concept is sound but disagree on how to select a cost model for scaling it. Which recommendation is most appropriate?",
"opts": {
"A": "Give staff unlimited access during the pilot so early adoption is not constrained by budget limits.",
"B": "Delay any cost analysis of the assistant until after the first annual invoice has arrived.",
"C": "Compare pricing structures against modeled usage so the cost model fits the actual workload.",
"D": "Choose the lowest per-token or per-seat price without modeling expected usage volume or patterns."
},
"fin": [
"C"
],
"expl": "C 正確：把各定價結構與建模後的用量對照，選擇符合實際工作負載的成本模式。",
"multi": false
},
{
"id": "GD-075",
"dm": 2,
"domain": "Domain 2：AI 策略與商業價值創造（AI Strategy and Business Value Creation）28%",
"sub": "AI 策略、用例選擇、優先序與競爭優勢",
"code": "GD",
"stem": "A sports league's ticketing fraud AI pilot has three months of results. Before the next funding cycle, the steering committee wants a decision mechanism that will not be swayed by how much has already been spent on the pilot. What should the committee establish?",
"opts": {
"A": "Extend the pilot for another quarter so more results accumulate before any decision gets made.",
"B": "Define evidence thresholds for scaling, pausing, or stopping the initiative before the next results review.",
"C": "Ask the pilot team to recommend whether to continue given their direct knowledge of the work.",
"D": "Score the pilot against value, feasibility, and alignment once the next results review is complete."
},
"fin": [
"B"
],
"expl": "B 正確：在下次成果檢討前先定義擴大／暫停／停止的證據門檻，避免被沉沒成本影響。",
"multi": false
},
{
"id": "GD-079",
"dm": 2,
"domain": "Domain 2：AI 策略與商業價值創造（AI Strategy and Business Value Creation）28%",
"sub": "AI 策略、用例選擇、優先序與競爭優勢",
"code": "GD",
"stem": "A semiconductor manufacturer has used a machine learning model for 18 months to decide whether wafer batches pass inspection. Engineering has since codified the model's effective logic into five explicit threshold rules that regulators now require the manufacturer to be able to fully explain. What should the manufacturer do?",
"opts": {
"A": "Run the machine learning model and the rule set in parallel indefinitely so both stay available.",
"B": "Retrain the machine learning model on more recent wafer data to improve its match with the rules.",
"C": "Continue operating the machine learning model, relying on its original rollout validation as still sufficient.",
"D": "Replace the model with the five threshold rules now that the logic is fully codified and explainable."
},
"fin": [
"D"
],
"expl": "D 正確：邏輯已完全規則化且須能向監管機構完整解釋→以五條門檻規則取代 ML 模型。",
"multi": false
},
{
"id": "GD-084",
"dm": 2,
"domain": "Domain 2：AI 策略與商業價值創造（AI Strategy and Business Value Creation）28%",
"sub": "AI 策略、用例選擇、優先序與競爭優勢",
"code": "GD",
"stem": "A construction group sees competitors announcing AI capabilities, but market evidence is mixed and the company has different data assets, customer relationships and operating constraints. How should leadership evaluate whether faster AI adoption could create a competitive advantage?",
"opts": {
"A": "Treat each announced competitor feature as a roadmap requirement before testing whether customers value it or the company can operate it well.",
"B": "Mirror the AI program of the highest-spending competitor, assuming its scale validates comparable economics.",
"C": "Separate capabilities needed for competitive parity from uses that exploit the group's distinctive project data, customer relationships, or operating know-how.",
"D": "Compare competitor activity without factoring in the group's own data, switching costs, delivery model, or regulatory constraints."
},
"fin": [
"C"
],
"expl": "C 正確：區分「競爭持平所需能力」與「善用自身獨特專案資料／客戶關係／營運知識」的差異化用途。",
"multi": false
},
{
"id": "GD-088",
"dm": 2,
"domain": "Domain 2：AI 策略與商業價值創造（AI Strategy and Business Value Creation）28%",
"sub": "AI 策略、用例選擇、優先序與競爭優勢",
"code": "GD",
"stem": "A travel marketplace has used AI to reduce support effort, but executives are now asking whether AI could change how the company creates or captures value rather than simply automating existing work. Which strategic direction should they explore?",
"opts": {
"A": "Define business model transformation as automating the same workflow with fewer clicks for the end user.",
"B": "Focus mainly on reducing headcount, treating cost reduction as the primary strategic use of AI companywide.",
"C": "Test whether AI can change the value proposition or delivery economics, not just reduce labor in the process.",
"D": "Launch a new AI-enabled product before validating customer willingness to pay or confirming the operating model it requires."
},
"fin": [
"C"
],
"expl": "C 正確：測試 AI 能否改變價值主張或交付經濟，而不僅是減少人力或點擊數。",
"multi": false
},
{
"id": "GD-091",
"dm": 2,
"domain": "Domain 2：AI 策略與商業價值創造（AI Strategy and Business Value Creation）28%",
"sub": "AI 策略、用例選擇、優先序與競爭優勢",
"code": "GD",
"stem": "A construction firm is negotiating with a vendor to supply a generative AI assistant for bid preparation. Two finalist vendors offer comparable features and pricing. Which factor should most influence the final selection?",
"opts": {
"A": "The vendor whose sales team was the most responsive and attentive across each stage of the evaluation process.",
"B": "The vendor with the largest number of published case studies across the entire construction industry sector.",
"C": "The vendor's terms on data ownership, model IP, and the firm's ability to export data and switch providers.",
"D": "The vendor offering the shortest implementation timeline independent of the specific terms in its contract structure."
},
"fin": [
"C"
],
"expl": "C 正確：選擇供應商時最重要的是資料所有權、模型 IP 條款，及匯出資料與更換供應商的能力（避免鎖定）。",
"multi": false
},
{
"id": "GD-093",
"dm": 2,
"domain": "Domain 2：AI 策略與商業價值創造（AI Strategy and Business Value Creation）28%",
"sub": "AI 策略、用例選擇、優先序與競爭優勢",
"code": "GD",
"stem": "A software company receives proposals for AI features in customer success, pricing, internal support, and product operations. The executive team wants to fund use cases that connect a specific AI capability to a measurable business outcome and a feasible operating model. Which selection approach is strongest?",
"opts": {
"A": "Prioritize use cases by the number of model features they can demonstrate.",
"B": "Define the user, workflow, baseline, outcome, and adoption path before funding an AI use case.",
"C": "Select the use case with the largest data set even when the business outcome is still unclear.",
"D": "Treat departments as equally suitable for the same AI use case without considering workflow differences."
},
"fin": [
"B"
],
"expl": "B 正確：資助前先定義使用者、流程、基準、成果與採用路徑，使 AI 能力連結可衡量的業務成果。",
"multi": false
},
{
"id": "GD-094",
"dm": 2,
"domain": "Domain 2：AI 策略與商業價值創造（AI Strategy and Business Value Creation）28%",
"sub": "業務價值、ROI 與 KPI 衡量",
"code": "GD",
"stem": "A nonprofit network has introduced an AI assistant for program staff. Leadership wants to know within the first few months whether the initiative is likely to deliver its intended outcomes even though the final benefits will take longer to measure. Which indicators should receive the most attention?",
"opts": {
"A": "Use growth in assistant sessions per program employee as the main evidence that the new workflow is improving effectiveness.",
"B": "Track early indicators such as user adoption, task completion, quality acceptance, workflow integration, and stakeholder engagement ahead of lagging results.",
"C": "Use quarterly donation revenue as the primary early indicator, compared with the same quarter before launch began.",
"D": "Hold the expansion decision until year-end program impact and donor attention results become fully available to leadership."
},
"fin": [
"B"
],
"expl": "B 正確：早期看採用、任務完成、品質接受度、流程整合與利害關係人參與等領先指標。",
"multi": false
},
{
"id": "GD-096",
"dm": 2,
"domain": "Domain 2：AI 策略與商業價值創造（AI Strategy and Business Value Creation）28%",
"sub": "AI 策略、用例選擇、優先序與競爭優勢",
"code": "GD",
"stem": "A public sector agency plans to broaden an AI capability used in citizen services. Technical targets were met, but the team has not yet decided how to evaluate build, buy, and partner options for the expanded capability. What should the business strategist recommend?",
"opts": {
"A": "Choose a partner based mainly on the lowest initial price, deferring exit costs and data portability considerations.",
"B": "Buy the market-leading product on the assumption that its vendor scale removes integration and compliance risk.",
"C": "Decide on an approach before clarifying whether the capability is strategically differentiating for this agency specifically.",
"D": "Compare build, buy, and partner options across differentiation, time to value, cost, data control, and risk."
},
"fin": [
"D"
],
"expl": "D 正確：以差異化、價值時間、成本、資料控制與風險比較自建／購買／夥伴三種選項。",
"multi": false
},
{
"id": "GD-100",
"dm": 2,
"domain": "Domain 2：AI 策略與商業價值創造（AI Strategy and Business Value Creation）28%",
"sub": "業務價值、ROI 與 KPI 衡量",
"code": "GD",
"stem": "An energy utility's AI program in field operations and customer programs shows excellent technical metrics, yet the business owner reports employees spend the same amount of time completing the process. Which measurement approach is most appropriate? Episode 11 (Q101–110)",
"opts": {
"A": "Track labor cost savings as the primary outcome and keep customer quality and employee experience measures well outside the investment dashboard.",
"B": "Define outcome KPIs linking AI adoption to tangible value such as cost or revenue and to intangible value such as satisfaction or quality.",
"C": "Finalize the KPI set after the next rollout wave, once the team can see which available measures respond most strongly to the new workflow.",
"D": "Use weekly prompt volume and active user growth as the main evidence that employees are already gaining real value from the AI."
},
"fin": [
"B"
],
"expl": "B 正確：定義把 AI 採用連到有形（成本／營收）與無形（滿意度／品質）價值的成果 KPI；技術指標優異但流程時間未變，代表未產生價值。",
"multi": false
},
{
"id": "GD-101",
"dm": 2,
"domain": "Domain 2：AI 策略與商業價值創造（AI Strategy and Business Value Creation）28%",
"sub": "AI 策略、用例選擇、優先序與競爭優勢",
"code": "GD",
"stem": "An auto parts retailer's warranty claim approval process must remain fully explainable to auditors and to customers who dispute a denial. The retailer has years of historical claim data that could train a machine learning model. What should the retailer do?",
"opts": {
"A": "Use a machine learning model for approvals and fall back to deterministic rules when a customer disputes the outcome.",
"B": "Deploy a machine learning model and provide a general accuracy statistic to auditors in place of a case-by-case explanation.",
"C": "Train a machine learning model on the historical claim data given the years of history available.",
"D": "Keep the process on deterministic rules that can be explained step by step to any auditor or customer."
},
"fin": [
"D"
],
"expl": "D 正確：理賠流程須逐步向稽核人員與客戶解釋→維持可解釋的確定性規則；ML 無法提供個案級解釋。",
"multi": false
},
{
"id": "GD-104",
"dm": 2,
"domain": "Domain 2：AI 策略與商業價值創造（AI Strategy and Business Value Creation）28%",
"sub": "業務價值、ROI 與 KPI 衡量",
"code": "GD",
"stem": "An electric cooperative is comparing two AI initiatives for its next budget cycle. One projects a large benefit but depends on a data integration step that has failed twice before, and one projects a smaller benefit with dependencies the cooperative has already completed successfully. How should finance compare them?",
"opts": {
"A": "Rank the initiatives by their raw projected benefit independent of how likely each is to be realized.",
"B": "Weight each initiative's projected benefit by its likelihood of realization, then compare the resulting expected values.",
"C": "Fund the initiative with a smaller projected benefit, treating its clean dependency history as the deciding factor.",
"D": "Fund the initiative with the larger projected benefit and address dependency risk later if it resurfaces."
},
"fin": [
"B"
],
"expl": "B 正確：以實現機率加權預期效益，再比較期望值（風險調整）。",
"multi": false
},
{
"id": "GD-110",
"dm": 2,
"domain": "Domain 2：AI 策略與商業價值創造（AI Strategy and Business Value Creation）28%",
"sub": "AI 策略、用例選擇、優先序與競爭優勢",
"code": "GD",
"stem": "A software company operates in a market where competitors are rapidly embedding AI into core offerings, but its own data and governance capabilities are still developing. How should leadership determine the appropriate level and pace of AI investment? Episode 12 (Q111–120)",
"opts": {
"A": "Match the largest competitor's AI spending percentage without accounting for this organization's own current maturity level.",
"B": "Set investment mainly from available IT budget rather than from strategic opportunity or organizational readiness levels.",
"C": "Commit the largest feasible investment right away in this still-developing market so no opportunity can be missed.",
"D": "Calibrate investment to strategic urgency, industry adoption, internal readiness, and the cost of being early or late."
},
"fin": [
"D"
],
"expl": "D 正確：依策略急迫性、產業採用度、內部準備度與過早／過晚成本校準投資規模與節奏。",
"multi": false
},
{
"id": "GD-111",
"dm": 2,
"domain": "Domain 2：AI 策略與商業價值創造（AI Strategy and Business Value Creation）28%",
"sub": "AI 策略、用例選擇、優先序與競爭優勢",
"code": "GD",
"stem": "A staffing agency has three AI use cases, each tied to a valid, measurable business outcome: faster candidate screening, better shift fill prediction, and improved client invoice accuracy. The candidate screening use case already has clean, accessible data and a clear process owner in place. The other two do not yet. How should the agency sequence funding?",
"opts": {
"A": "Fund the candidate screening use case first, given its data and process ownership are in place.",
"B": "Fund the use case with the largest projected outcome first, independent of data or process readiness.",
"C": "Fund the three use cases simultaneously so no outcome is delayed relative to the others.",
"D": "Fund the use cases in the order they were originally proposed, independent of readiness differences."
},
"fin": [
"A"
],
"expl": "A 正確：三者都有價值時，先資助資料與流程負責人已就緒的用例，快速取得成果。",
"multi": false
},
{
"id": "GD-116",
"dm": 2,
"domain": "Domain 2：AI 策略與商業價值創造（AI Strategy and Business Value Creation）28%",
"sub": "AWS 服務、定價與成本管理",
"code": "GD",
"stem": "A commercial real estate firm chose a consumption-based pricing tier for its AI leasing document assistant based on projected usage. Six months in, actual usage is running far above the original projection for one business line and far below it for another. Which TWO actions should finance take? (Choose TWO.)",
"opts": {
"A": "Compare actual usage against the assumptions behind the chosen pricing tier for each business line.",
"B": "Continue on the original pricing tier for the full contract term as originally approved at launch.",
"C": "Reassess and switch pricing tiers or negotiate terms for the business lines whose usage has materially diverged from plan.",
"D": "Restrict usage in the high-consumption business line so it stays within the original projection.",
"E": "Extend the same pricing tier to additional business lines without checking their expected usage first."
},
"fin": [
"A",
"C"
],
"expl": "A、C 正確：以每個業務線的實際用量對照定價假設，並重新評估／切換定價層級或談判條款。",
"multi": true
},
{
"id": "GD-119",
"dm": 2,
"domain": "Domain 2：AI 策略與商業價值創造（AI Strategy and Business Value Creation）28%",
"sub": "業務價值、ROI 與 KPI 衡量",
"code": "GD",
"stem": "A museum network wants to measure the impact of a new AI visitor engagement assistant. The readily available before-data comes from a month when a blockbuster touring exhibit drove unusually high attendance. What should the measurement team do?",
"opts": {
"A": "Average the blockbuster month with the following month and use that figure as the baseline.",
"B": "Skip baselining altogether and compare post-launch attendance directly against the network's annual attendance target.",
"C": "Use the blockbuster exhibit month as the baseline, treating it as the most recent complete month available.",
"D": "Select or construct a baseline period reflecting typical attendance rather than the atypical blockbuster exhibit month."
},
"fin": [
"D"
],
"expl": "D 正確：基準期應反映典型出席人數，避免被異常的大型展覽月份扭曲。",
"multi": false
},
{
"id": "GD-125",
"dm": 2,
"domain": "Domain 2：AI 策略與商業價值創造（AI Strategy and Business Value Creation）28%",
"sub": "AI 策略、用例選擇、優先序與競爭優勢",
"code": "GD",
"stem": "An internal audit of an AI pilot at an airline finds no single technical defect, but it flags an important decision about how AI can create sustainable competitive advantage. The initiative supports procurement and is nearing its next approval gate. What should the business strategist recommend?",
"opts": {
"A": "Build advantage by combining AI with proprietary data, workflows, domain expertise, and organizational capabilities that compound over time.",
"B": "Assume access to the same widely available foundation model alone creates a lasting, durable competitive moat on its own.",
"C": "Treat a one-time productivity gain as sustainable advantage even though rival firms can copy it quickly.",
"D": "Rely mainly on clever prompting techniques instead of integrating AI into durable business capabilities directly."
},
"fin": [
"A"
],
"expl": "A 正確：AI 結合專有資料、流程、領域專長與組織能力，才能形成會複利成長的優勢。",
"multi": false
},
{
"id": "GD-126",
"dm": 2,
"domain": "Domain 2：AI 策略與商業價值創造（AI Strategy and Business Value Creation）28%",
"sub": "AI 策略、用例選擇、優先序與競爭優勢",
"code": "GD",
"stem": "A packaging manufacturer's shipment approval workflow is deterministic for the large majority of orders, which follow five explicit rules, but a smaller share of orders involve ambiguous packaging specifications that require judgment. How should the manufacturer design the workflow?",
"opts": {
"A": "Apply the five explicit rules to each order, including the ambiguous ones, just to keep the workflow simpler overall.",
"B": "Apply deterministic rules to most orders that fit the explicit criteria and route the ambiguous subset to a review step.",
"C": "Route each order, including the straightforward ones, through AI-assisted review to standardize handling fully across the whole organization consistently over time.",
"D": "Replace the entire workflow with one generative AI system, letting a single approach handle both order types."
},
"fin": [
"B"
],
"expl": "B 正確：多數符合明確規則的訂單用規則；少數模糊規格交由審查步驟（可用 AI 輔助）。",
"multi": false
},
{
"id": "GD-130",
"dm": 2,
"domain": "Domain 2：AI 策略與商業價值創造（AI Strategy and Business Value Creation）28%",
"sub": "AI 策略、用例選擇、優先序與競爭優勢",
"code": "GD",
"stem": "A home appliance retailer has budget to advance two of three AI initiatives this quarter. All three score similarly on value, feasibility, and strategic alignment, but two of them require the same specialized data engineering team to build a shared customer data pipeline before either can proceed. How should the retailer sequence them? Episode 14 (Q131–140)",
"opts": {
"A": "Fund the three initiatives strictly in the order they were first proposed to the steering committee.",
"B": "Fund the independent initiative alongside one of the two dependent initiatives rather than funding both dependent initiatives at once.",
"C": "Fund the three initiatives simultaneously and let the data engineering team informally prioritize between the two dependent ones itself.",
"D": "Fund the two initiatives that share the scarce data engineering dependency simultaneously, based on their closely similar scores to the third."
},
"fin": [
"B"
],
"expl": "B 正確：獨立方案搭配一個相依方案，避免兩個相依方案同時搶占稀缺的資料工程團隊。",
"multi": false
},
{
"id": "GD-138",
"dm": 2,
"domain": "Domain 2：AI 策略與商業價值創造（AI Strategy and Business Value Creation）28%",
"sub": "AI 策略、用例選擇、優先序與競爭優勢",
"code": "GD",
"stem": "A wholesale distributor's leadership wants to benchmark its new AI-enabled order matching capability. The team's first draft compares it against the AI platforms built by large global retailers and technology companies, none of which sell to the distributor's actual customer base of regional hardware stores. What should the team correct before presenting the analysis?",
"opts": {
"A": "Compare the capability against the distributors and brokers competing for the same regional hardware store customers.",
"B": "Add a second global technology company to the comparison set to broaden the benchmark.",
"C": "Drop the competitive comparison and present the capability's cost and adoption metrics on their own.",
"D": "Keep the comparison against global retail and technology leaders, treating their capability level as the standard to match."
},
"fin": [
"A"
],
"expl": "A 正確：基準應與真正爭奪同一客群的區域經銷商／仲介比較，而非與全球科技巨頭比較。",
"multi": false
},
{
"id": "GD-139",
"dm": 2,
"domain": "Domain 2：AI 策略與商業價值創造（AI Strategy and Business Value Creation）28%",
"sub": "AI 策略、用例選擇、優先序與競爭優勢",
"code": "GD",
"stem": "An internal risk review finds that the AI pilot itself is not the main problem for an industrial manufacturer. Before the program proceeds, it must show how it will decide whether AI can change the value proposition, revenue model, channel, or operating model rather than merely automate an existing task. What should the steering committee recommend?",
"opts": {
"A": "Define business model transformation as simply automating the same workflow with fewer clicks or steps.",
"B": "Look beyond automation toward new offerings and validate them against customer and economic evidence.",
"C": "Focus on reducing headcount as the primary strategic use of AI in this rollout.",
"D": "Treat any chatbot added to an existing product as evidence of a new business model."
},
"fin": [
"B"
],
"expl": "B 正確：超越自動化，探索新產品／價值主張並以客戶與經濟證據驗證。",
"multi": false
},
{
"id": "GD-141",
"dm": 2,
"domain": "Domain 2：AI 策略與商業價值創造（AI Strategy and Business Value Creation）28%",
"sub": "AI 策略、用例選擇、優先序與競爭優勢",
"code": "GD",
"stem": "A hospitality group's revenue team wants to move guest services pricing from a flat nightly rate to an AI-driven, outcome-based model that charges more when guests use premium concierge features. The proposal would roll the new pricing out across every property in the next quarter. What should the group do first?",
"opts": {
"A": "Pilot the outcome-based pricing in a few properties and confirm guest willingness to pay before expanding.",
"B": "Roll the new pricing model out across the full portfolio of properties next quarter as proposed.",
"C": "Set the new pricing based on what competing hotel groups charge for similar concierge features.",
"D": "Keep the flat nightly rate unchanged, treating outcome-based pricing as relevant to software products, not hospitality."
},
"fin": [
"A"
],
"expl": "A 正確：先在少數據點試辦並確認顧客付費意願，再擴大；不應一次性全面推出新定價。",
"multi": false
},
{
"id": "GD-143",
"dm": 2,
"domain": "Domain 2：AI 策略與商業價值創造（AI Strategy and Business Value Creation）28%",
"sub": "業務價值、ROI 與 KPI 衡量",
"code": "GD",
"stem": "A municipal water utility is running three overlapping AI pilots in billing, leak detection, and customer service, and each business case claims the same projected reduction in call center hours as a benefit. Finance notices the total claimed savings across the three cases exceeds the call center's entire staffing budget. Which TWO actions should finance take? (Choose TWO.)",
"opts": {
"A": "Attribute the call center hour savings to a single initiative or split the benefit proportionally across the pilots that jointly produce it.",
"B": "Reconcile each pilot's claimed savings against the call center's own capacity and cost accounting before approving any of the three cases.",
"C": "Approve the three business cases as submitted, treating each project team's independent estimate as final.",
"D": "Assume the true combined savings equal the sum of the three individual estimates.",
"E": "Ask each project team to increase its own estimates slightly to account for the other two pilots."
},
"fin": [
"A",
"B"
],
"expl": "A、B 正確：把節省分配給單一倡議或按比例分攤，並對照呼叫中心實際容量與成本核算，避免重複計算效益。",
"multi": true
},
{
"id": "GD-145",
"dm": 2,
"domain": "Domain 2：AI 策略與商業價值創造（AI Strategy and Business Value Creation）28%",
"sub": "業務價值、ROI 與 KPI 衡量",
"code": "GD",
"stem": "A software company has already selected an AI vendor for customer success in product operations, but rollout has not started. Finance asks how the organization will prove that any observed improvement is attributable to the new workflow rather than normal seasonal variation. What should the team do before rollout?",
"opts": {
"A": "Use another company's published customer success metrics as the comparison for post-launch performance.",
"B": "Capture baseline performance, cost, cycle time, and quality before changing the customer success workflow.",
"C": "Reconstruct the pre-AI baseline from manager recollection after the new workflow has already launched.",
"D": "Rely on the vendor's accuracy results as proof of improvement and skip a pre-rollout baseline."
},
"fin": [
"B"
],
"expl": "B 正確：導入前先建立績效、成本、週期與品質基準，才能歸因於新流程而非季節波動。",
"multi": false
},
{
"id": "GD-148",
"dm": 2,
"domain": "Domain 2：AI 策略與商業價值創造（AI Strategy and Business Value Creation）28%",
"sub": "AI 策略、用例選擇、優先序與競爭優勢",
"code": "GD",
"stem": "A public sector agency is prioritizing several AI initiatives for citizen services. Leaders want a portfolio approach that can be revisited as evidence changes rather than a one-time ranking. What should the agency use?",
"opts": {
"A": "Prioritize the technically easiest use cases even when they produce little citizen-facing value.",
"B": "Continue each pilot through to production so early investment is not wasted.",
"C": "Select the use cases with the highest projected benefit without weighing feasibility or risk.",
"D": "Build a balanced portfolio weighing value, feasibility, and alignment, with criteria for pausing initiatives."
},
"fin": [
"D"
],
"expl": "D 正確：建立平衡價值、可行性與一致性的組合，並設有暫停準則，可隨證據重新檢視。",
"multi": false
},
{
"id": "SP-002",
"dm": 2,
"domain": "Domain 2：AI 策略與商業價值創造（AI Strategy and Business Value Creation）28%",
"sub": "AWS 服務、定價與成本管理",
"code": "SP",
"stem": "A finance controller sees two vendor quotes for the same assistant workload that differ in estimated token counts, even though the prompts they were given are identical. According to the Amazon Bedrock documentation on counting tokens, what explains the difference, and why do input tokens matter to the business?",
"opts": {
"A": "Input tokens are free and never limited by any quota; only the output tokens that a model generates count towards the cost of a request or its usage limits",
"B": "Token counting is model-specific because models tokenize differently, and input tokens count towards the cost of the request and the token usage limits",
"C": "Token counts depend only on the AWS Region where the request is processed and never on the model that is chosen",
"D": "One vendor counted words instead of tokens, which is an error because a token is always exactly one word in every model"
},
"fin": [
"B"
],
"expl": "B 正確：不同模型的分詞方式不同，故 token 計數因模型而異；輸入 token 計入請求成本與用量配額。",
"multi": false
},
{
"id": "SP-009",
"dm": 2,
"domain": "Domain 2：AI 策略與商業價值創造（AI Strategy and Business Value Creation）28%",
"sub": "AWS 服務、定價與成本管理",
"code": "SP",
"stem": "A telecommunications operator cannot say how much of its machine learning spend belongs to training and how much to hosting. Which practices does the AWS Well-Architected Machine Learning Lens prescribe?",
"opts": {
"A": "Activate cost allocation tags so that resource costs are organised on the cost allocation report",
"B": "Tag resources with dimensions such as project, environment, machine learning phase, owner and cost centre",
"C": "Document the tagging strategy so that teams apply it when they create resources",
"D": "Leave development notebooks running so that experiments can be resumed instantly",
"E": "Keep the default account structure and infer the split from the monthly invoice",
"F": "Keep development, training and production costs in a single undifferentiated pool"
},
"fin": [
"A",
"B",
"C"
],
"expl": "成本標籤相關良好實務：啟用成本分配標籤、以專案／環境／ML 階段／負責人／成本中心標記、文件化標記策略（A、B、C）；D、E、F 為不良做法。",
"multi": true
},
{
"id": "SP-013",
"dm": 2,
"domain": "Domain 2：AI 策略與商業價值創造（AI Strategy and Business Value Creation）28%",
"sub": "AWS 服務、定價與成本管理",
"code": "SP",
"stem": "A media company is choosing a foundation model for an article summarisation feature and wants to keep inference cost under control. Which selection approach does the AWS Well-Architected Generative AI Lens recommend?",
"opts": {
"A": "Start with the largest available model and reduce its size only if the budget is exceeded after launch.",
"B": "Fix the model choice at launch so that comparisons across releases stay stable.",
"C": "Choose the newest model available, because newer models carry lower token costs than older ones.",
"D": "Test with a smaller model first and increase its size only until an acceptable model is reached."
},
"fin": [
"D"
],
"expl": "D 正確：生成式 AI 鏡頭建議先用較小模型測試，只增加到可接受為止，以控制推論成本。",
"multi": false
},
{
"id": "SP-023",
"dm": 2,
"domain": "Domain 2：AI 策略與商業價值創造（AI Strategy and Business Value Creation）28%",
"sub": "AI 策略、用例選擇、優先序與競爭優勢",
"code": "SP",
"stem": "A telecommunications company applies about four hundred discount eligibility rules. The rules are fully documented, they are revised several times each month across regions, and agents currently apply them by hand with a six percent error rate. A vendor has proposed training a model on two years of past agent decisions. What should the business strategist recommend?",
"opts": {
"A": "Implement the documented rules in a rules engine, since the logic is known and follows each published change.",
"B": "Train a model on the past agent decisions so that it learns the eligibility rules and applies them consistently.",
"C": "Use a generative assistant that reads the rule documents and decides eligibility for each individual customer case.",
"D": "Keep the manual process and retrain the agents, since a six percent error rate is already within normal tolerance."
},
"fin": [
"A"
],
"expl": "A 正確：約 400 條已文件化的規則且常更新、邏輯已知→用規則引擎，才能隨公告同步且可解釋；ML 或生成式 AI 反而不穩。",
"multi": false
},
{
"id": "SP-026",
"dm": 2,
"domain": "Domain 2：AI 策略與商業價值創造（AI Strategy and Business Value Creation）28%",
"sub": "業務價值、ROI 與 KPI 衡量",
"code": "SP",
"stem": "A business case claims 2.4 million dollars of annual benefit from an AI capability. One benefit line is staff time released in a department whose headcount and budget are unchanged. Another is revenue growth recorded in a quarter during which a major competitor withdrew from the region. Which two adjustments should the business strategist require?",
"opts": {
"A": "Count released staff time as benefit only where a decision has converted it into cost or capacity.",
"B": "Restate the whole of the benefit figure in present value terms, using the organization's standard discount rate.",
"C": "Remove all intangible benefit lines from the case, since only cash effects can be defended by finance.",
"D": "Recalculate the benefit using the vendor's published industry average figures rather than the organization's own numbers.",
"E": "Isolate the revenue growth from the effect of the competitor withdrawal before attributing it to the capability."
},
"fin": [
"A",
"E"
],
"expl": "A、E 正確：釋出的員工時間須經決策轉為成本或容量才算效益；營收成長要先排除競爭對手撤出的外部影響（歸因）。",
"multi": true
},
{
"id": "SP-027",
"dm": 2,
"domain": "Domain 2：AI 策略與商業價值創造（AI Strategy and Business Value Creation）28%",
"sub": "業務價值、ROI 與 KPI 衡量",
"code": "SP",
"stem": "Three months into a generative AI rollout, usage is high and climbing. A closer look shows that a third of sessions end with the user rephrasing the same question three or more times, and that a quarter of generated drafts are discarded rather than edited and used. How should the business strategist interpret these signals?",
"opts": {
"A": "Usage growth is the leading indicator that matters, and the rephrasing reflects users still learning the tool.",
"B": "The signals are inconclusive at three months, so the review should wait until the twelve-month benefit assessment.",
"C": "Rephrasing and discard rates indicate the outputs are not yet usable, so volume is overstating real adoption.",
"D": "The discard rate should be removed from reporting, since drafts are intermediate artifacts rather than outcomes."
},
"fin": [
"C"
],
"expl": "C 正確：反覆改寫問題與草稿被捨棄比例高，顯示輸出尚不可用，使用量高估了實際採用。",
"multi": false
},
{
"id": "SP-028",
"dm": 2,
"domain": "Domain 2：AI 策略與商業價值創造（AI Strategy and Business Value Creation）28%",
"sub": "AWS 服務、定價與成本管理",
"code": "SP",
"stem": "A pilot ran at two cents per request across five thousand daily requests. At four hundred thousand daily requests the figure is five cents. Analysis attributes the rise to automatic retries after timeouts, longer prompts carrying richer customer history, and a policy that escalates low-confidence responses to a larger model. What should the business strategist recommend?",
"opts": {
"A": "Accept the higher figure, since the total value delivered at this volume still exceeds the total cost incurred.",
"B": "Cap daily request volume at the level where the unit cost observed during the original pilot can be sustained.",
"C": "Open a commercial negotiation on rates, since unit cost at this volume is determined by the pricing agreement.",
"D": "Manage unit cost as a tracked metric and address each named driver, since all three are design choices."
},
"fin": [
"D"
],
"expl": "D 正確：把單位成本當作追蹤指標，並處理重試、提示變長與升級到大模型這三個設計驅動因素。",
"multi": false
},
{
"id": "SP-029",
"dm": 2,
"domain": "Domain 2：AI 策略與商業價值創造（AI Strategy and Business Value Creation）28%",
"sub": "AI 策略、用例選擇、優先序與競爭優勢",
"code": "SP",
"stem": "A hospital group's board objective is to reduce thirty-day readmissions. Discharge planners review each case by hand and reach only about forty percent of discharges before the patient leaves. A telephone follow-up program exists but is applied to whichever patients a planner has time for, rather than to those at greatest risk. Which two AI applications map most directly to the stated objective?",
"opts": {
"A": "A risk model that ranks discharges so the follow-up program reaches the patients most likely to return.",
"B": "A generative assistant that drafts patient-facing marketing material describing each of the group's outpatient services.",
"C": "A summarization capability that compiles each patient's discharge record so that planners can review cases faster.",
"D": "A forecasting model that predicts total bed occupancy across the whole group for the coming financial year.",
"E": "A transcription capability that converts the consultants' dictated ward round notes into text for the record."
},
"fin": [
"A",
"C"
],
"expl": "A、C 正確：風險排序模型讓追蹤計畫觸及高風險病患，摘要出院紀錄加速案件審查，皆直接對應降低 30 天再入院。",
"multi": true
},
{
"id": "SP-039",
"dm": 2,
"domain": "Domain 2：AI 策略與商業價值創造（AI Strategy and Business Value Creation）28%",
"sub": "AI 策略、用例選擇、優先序與競爭優勢",
"code": "SP",
"stem": "A retailer wants a model that predicts which customers will churn. Marketing counts a customer as churned after ninety days of inactivity, finance uses twelve months, and the loyalty team uses a lapsed card. The retailer also has no retention offer, budget, or process for contacting a customer identified as at risk. What should the business strategist conclude?",
"opts": {
"A": "Proceed using the marketing definition, since ninety days is the most widely used churn threshold in retail.",
"B": "Proceed with the model now and settle the definition and the retention response later, during the delivery phase.",
"C": "The initiative is premature, because there is no agreed prediction target and no action available on a prediction.",
"D": "Use a generative assistant instead, since it can interpret each of the three team definitions of churn as required."
},
"fin": [
"C"
],
"expl": "C 正確：沒有統一的預測目標，也沒有可對預測採取的行動，專案為時過早。",
"multi": false
},
{
"id": "CC-035",
"dm": 3,
"domain": "Domain 3：AI 治理與負責任 AI 領導力（AI Governance and Responsible AI Leadership）24%",
"sub": "負責任 AI 原則（公平、可解釋、透明、人工監督、內容安全）",
"code": "CC",
"stem": "An online retailer's AI system sets credit limits for its store card. Customers who are declined ask why, and a regulator requires a clear reason. Which responsible AI dimension is MOST directly involved?",
"opts": {
"A": "Veracity: factually correct outputs, such as accurate product details and prices.",
"B": "Explainability: mechanisms to understand and communicate why the system produced a decision.",
"C": "Controllability: mechanisms to monitor the system and steer its behaviour when needed.",
"D": "Robustness: correct outputs for both the expected inputs and any unexpected or unusual inputs."
},
"fin": [
"B"
],
"expl": "Telling a declined customer why a decision was made is explainability. Robustness concerns unusual inputs, controllability concerns steering behaviour, and veracity concerns factual correctness.",
"multi": false
},
{
"id": "CC-036",
"dm": 3,
"domain": "Domain 3：AI 治理與負責任 AI 領導力（AI Governance and Responsible AI Leadership）24%",
"sub": "負責任 AI 原則（公平、可解釋、透明、人工監督、內容安全）",
"code": "CC",
"stem": "A fashion retailer's AI chatbot answers customers on its website, but the page doesn't say that customers are talking to an AI. Which responsible AI dimension does this MOST directly affect?",
"opts": {
"A": "Robustness, because the chatbot may give poor answers to questions with spelling errors.",
"B": "Privacy, because the chatbot may store customer questions longer than is truly needed.",
"C": "Transparency, because customers can't make an informed choice about engaging with AI.",
"D": "Fairness, because customers in different groups may receive different answers from it."
},
"fin": [
"C"
],
"expl": "Disclosing that customers are interacting with AI lets them make informed choices, which is transparency. The other concerns are real but the missing disclosure is a transparency issue.",
"multi": false
},
{
"id": "CC-037",
"dm": 3,
"domain": "Domain 3：AI 治理與負責任 AI 領導力（AI Governance and Responsible AI Leadership）24%",
"sub": "負責任 AI 原則（公平、可解釋、透明、人工監督、內容安全）",
"code": "CC",
"stem": "A retailer plans to launch an AI hiring screen for store staff next week to beat a seasonal rush. Fairness testing shows it rejects older applicants at a much higher rate. What should the business leader do?",
"opts": {
"A": "Delay the screen, fix the disparity or use human review, and document the decision formally.",
"B": "Launch on schedule but tell recruiters to ignore the screen whenever they feel it may be wrong.",
"C": "Cancel all use of AI in the company because the hiring screen has shown a fairness problem.",
"D": "Launch on schedule and plan to add fairness fixes after the seasonal hiring rush is over."
},
"fin": [
"A"
],
"expl": "A high-impact decision with a known fairness problem shouldn't launch as is; mitigate (fix the cause or add human review), narrow or delay, and document the trade-off. Launching and fixing later (D) knowingly harms applicants; informal overrides (B) aren't a control; cancelling all AI (C) is disproportionate.",
"multi": false
},
{
"id": "CC-038",
"dm": 3,
"domain": "Domain 3：AI 治理與負責任 AI 領導力（AI Governance and Responsible AI Leadership）24%",
"sub": "負責任 AI 原則（公平、可解釋、透明、人工監督、內容安全）",
"code": "CC",
"stem": "A grocery chain is starting a project to personalise offers using loyalty card data. When should responsible AI practices first be integrated into the project?",
"opts": {
"A": "Only if a customer complaint or regulator inquiry shows that something has gone wrong in use.",
"B": "After the model is built, during a final review just before customers see the first offers.",
"C": "Once a year during the annual audit, together with the external review of the financial statements.",
"D": "At the start, when the use case, stakeholders and risks are defined, and again at major changes."
},
"fin": [
"D"
],
"expl": "Governance by design means integrating responsible AI from the start (use case, stakeholders, risks, data rights) and revisiting it at material changes. A final review (B) is too late; waiting for complaints (A) or an annual audit (C) leaves harm undetected.",
"multi": false
},
{
"id": "CC-039",
"dm": 3,
"domain": "Domain 3：AI 治理與負責任 AI 領導力（AI Governance and Responsible AI Leadership）24%",
"sub": "負責任 AI 原則（公平、可解釋、透明、人工監督、內容安全）",
"code": "CC",
"stem": "A retailer's AI assistant will decide whether to approve refunds of up to 2,000 dollars for high-value electronics without a human. Which safeguard is MOST appropriate?",
"opts": {
"A": "Require human approval above a set amount, with clear escalation criteria for unusual cases.",
"B": "Raise the assistant's temperature so it considers a wider range of possible refund outcomes.",
"C": "Let the assistant approve all refunds automatically and review a sample of decisions once a year.",
"D": "Turn off logging of the assistant's decisions so customer data is not kept longer than needed."
},
"fin": [
"A"
],
"expl": "Costly, consequential actions call for human-in-the-loop approval above a threshold plus clear escalation criteria. A yearly sample (C) is too little oversight; turning off logging (D) removes the audit trail; temperature (B) adds randomness.",
"multi": false
},
{
"id": "CC-040",
"dm": 3,
"domain": "Domain 3：AI 治理與負責任 AI 領導力（AI Governance and Responsible AI Leadership）24%",
"sub": "負責任 AI 原則（公平、可解釋、透明、人工監督、內容安全）",
"code": "CC",
"stem": "A retailer's personalisation team wants more customer data, including location history, to improve recommendations. Privacy counsel is concerned. Which approach BEST balances the two objectives?",
"opts": {
"A": "Collect the data without telling customers so the recommendations feel more natural to them.",
"B": "Abandon personalisation entirely, because any use of customer data creates some privacy risk.",
"C": "Collect all available data now, since storage is cheap and the data might be useful later.",
"D": "Collect only the data needed, with clear consent and value for customers, and minimise retention."
},
"fin": [
"D"
],
"expl": "Data minimisation with clear consent, a value exchange customers understand and limited retention balances personalisation and privacy. Collecting everything (C) or covertly (A) violates privacy principles; abandoning personalisation (B) gives up achievable value.",
"multi": false
},
{
"id": "CC-041",
"dm": 3,
"domain": "Domain 3：AI 治理與負責任 AI 領導力（AI Governance and Responsible AI Leadership）24%",
"sub": "AI 治理、風險分級、合規法規與存取控制",
"code": "CC",
"stem": "A large retailer has AI projects in marketing, supply chain and HR, each approved only by its own department head. The board wants consistent oversight. Which governance structure BEST addresses this?",
"opts": {
"A": "A single external consultant who reviews all the AI projects once a year and writes a report on them.",
"B": "An arrangement where each department continues approving its own AI projects independently.",
"C": "A cross-functional AI governance council with business, legal, compliance, privacy, security and HR.",
"D": "A rule that the data science team alone approves every AI project before it starts development."
},
"fin": [
"C"
],
"expl": "A cross-functional council provides consistent oversight with clear accountability. Data science alone (D) lacks legal, risk and business perspectives; department-by-department approval (B) is the problem; a yearly external review (A) is too infrequent.",
"multi": false
},
{
"id": "CC-042",
"dm": 3,
"domain": "Domain 3：AI 治理與負責任 AI 領導力（AI Governance and Responsible AI Leadership）24%",
"sub": "AI 治理、風險分級、合規法規與存取控制",
"code": "CC",
"stem": "A retailer selling in the EU plans an AI chatbot for customer service. Under the EU AI Act, which obligation MOST clearly applies to this type of system?",
"opts": {
"A": "No obligations, because customer service chatbots are excluded from the EU AI Act entirely.",
"B": "Telling customers that they are interacting with an AI system, under transparency obligations.",
"C": "Conformity assessment and registration as a high-risk system before the chatbot can launch.",
"D": "A complete ban, because the EU AI Act prohibits all chatbots that talk to consumers in the EU."
},
"fin": [
"B"
],
"expl": "Chatbots fall under the Act's transparency obligations: people must be told they are interacting with AI. They aren't prohibited (D) or high-risk by default (C, which applies to uses such as hiring and credit), nor fully excluded (A).",
"multi": false
},
{
"id": "CC-043",
"dm": 3,
"domain": "Domain 3：AI 治理與負責任 AI 領導力（AI Governance and Responsible AI Leadership）24%",
"sub": "AI 治理、風險分級、合規法規與存取控制",
"code": "CC",
"stem": "A retailer builds an AI assistant on a managed AWS AI service. The project sponsor says, \"Because the AWS service is compliant, our assistant is automatically compliant.\" Which response is MOST accurate?",
"opts": {
"A": "Not quite: AWS is responsible for the retailer's data, but the retailer is responsible for AWS servers.",
"B": "Correct, because AWS takes full responsibility for the compliance of all applications built on its services.",
"C": "Correct, provided the retailer chooses an AWS Region that is located inside its home country.",
"D": "Not quite: AWS secures the service, but the retailer stays responsible for its data, access and use case."
},
"fin": [
"D"
],
"expl": "Under the shared responsibility model, AWS secures the cloud and the services it runs, while the customer remains responsible for its data, access management, configuration and the compliance of its use case. Choosing a Region (C) helps residency but doesn't make a use case compliant; option A reverses the model.",
"multi": false
},
{
"id": "CC-044",
"dm": 3,
"domain": "Domain 3：AI 治理與負責任 AI 領導力（AI Governance and Responsible AI Leadership）24%",
"sub": "AI 治理、風險分級、合規法規與存取控制",
"code": "CC",
"stem": "A retailer's new AI assistant answers employee questions from internal documents. Some documents are restricted to HR and finance. Which control is MOST important to require?",
"opts": {
"A": "Let employees decide for themselves which restricted documents the assistant may search through.",
"B": "Store all internal documents in one public folder so that the assistant can find them quickly.",
"C": "Ensure the assistant respects document permissions, so users only get answers they may see.",
"D": "Give the assistant read access to all documents so it can answer every question completely."
},
"fin": [
"C"
],
"expl": "Least privilege means the assistant must respect existing document permissions so users only receive answers drawn from documents they're allowed to open. Full access (D) and a public folder (B) leak restricted information; letting employees decide (A) bypasses data owners.",
"multi": false
},
{
"id": "CC-045",
"dm": 3,
"domain": "Domain 3：AI 治理與負責任 AI 領導力（AI Governance and Responsible AI Leadership）24%",
"sub": "AI 治理、風險分級、合規法規與存取控制",
"code": "CC",
"stem": "A retailer wants to prioritise governance effort across 40 AI use cases. Which TWO factors should MOST increase a use case's risk classification? (Select TWO)",
"opts": {
"A": "The system acts autonomously in ways that are hard to reverse, such as issuing payments.",
"B": "The system makes decisions that significantly affect people, such as hiring or credit offers.",
"C": "The system was built by an external vendor rather than by the retailer's internal team.",
"D": "The system is used by the marketing department rather than by the finance department team.",
"E": "The system uses a foundation model that was released within the last twelve calendar months."
},
"fin": [
"A",
"B"
],
"expl": "Impact on people (B) and autonomous, hard-to-reverse actions (A) are core risk factors. Who built it (C), the model's release date (E) and which department uses it (D) don't by themselves change the potential for harm.",
"multi": true
},
{
"id": "CC-046",
"dm": 3,
"domain": "Domain 3：AI 治理與負責任 AI 領導力（AI Governance and Responsible AI Leadership）24%",
"sub": "負責任 AI 原則（公平、可解釋、透明、人工監督、內容安全）",
"code": "CC",
"stem": "A retailer's product recommendation model passed fairness testing at launch two years ago. Since then the customer base has changed a lot. What should the governance team require?",
"opts": {
"A": "A one-time retest only if a customer files a formal discrimination complaint about the model.",
"B": "Ongoing monitoring of fairness metrics across customer groups to detect any bias drift over time.",
"C": "No further action, because a model that passed fairness testing at launch remains fair afterwards.",
"D": "Removal of all customer group data from monitoring so that no bias can be detected or reported."
},
"fin": [
"B"
],
"expl": "Bias can drift as populations and data change, so fairness needs ongoing monitoring across groups. Passing at launch (C) doesn't guarantee later fairness; waiting for complaints (A) means harm happens first; removing group data (D) hides bias.",
"multi": false
},
{
"id": "CC-047",
"dm": 3,
"domain": "Domain 3：AI 治理與負責任 AI 領導力（AI Governance and Responsible AI Leadership）24%",
"sub": "負責任 AI 原則（公平、可解釋、透明、人工監督、內容安全）",
"code": "CC",
"stem": "A fashion retailer uses generative AI to create marketing images. Leadership is worried about copyright claims over generated content. Which TWO actions BEST reduce this risk? (Select TWO)",
"opts": {
"A": "Remove the watermarks and content credentials from images so they look like original work.",
"B": "Assume that AI-generated images can never infringe copyright because they are newly created.",
"C": "Prompt the model to copy the style of a named living artist so the images look professional.",
"D": "Have creative and legal staff review generated images before they are published in campaigns.",
"E": "Use providers that offer IP indemnity for generated output, and check the terms that apply."
},
"fin": [
"D",
"E"
],
"expl": "Provider IP indemnity (E) and human review before publication (D) reduce exposure. Imitating a named living artist (C) increases risk; AI output can reproduce protected material (B); removing watermarks and credentials (A) undermines transparency.",
"multi": true
},
{
"id": "CC-048",
"dm": 3,
"domain": "Domain 3：AI 治理與負責任 AI 領導力（AI Governance and Responsible AI Leadership）24%",
"sub": "負責任 AI 原則（公平、可解釋、透明、人工監督、內容安全）",
"code": "CC",
"stem": "A retailer's AI assistant for store managers sometimes cites company policies that don't exist. Which approach BEST reduces this risk?",
"opts": {
"A": "Switch to a larger model, because bigger models do not invent facts or policy documents.",
"B": "Raise the temperature so the assistant explores more options before choosing its answer.",
"C": "Ground answers in the current policy library with citations and check answers against sources.",
"D": "Remove the policy library so that the assistant answers from its own general training data."
},
"fin": [
"C"
],
"expl": "Grounding in the current policy library with citations and grounding checks directly targets hallucinated policies. Larger models still hallucinate (A); higher temperature (B) increases randomness; removing sources (D) makes invention more likely.",
"multi": false
},
{
"id": "CC-049",
"dm": 3,
"domain": "Domain 3：AI 治理與負責任 AI 領導力（AI Governance and Responsible AI Leadership）24%",
"sub": "營運監控、可靠性與 Agentic AI",
"code": "CC",
"stem": "A grocery chain's AI demand forecasts have been in production for a year. Which set of production controls is MOST appropriate?",
"opts": {
"A": "Accuracy monitoring against a baseline, alert thresholds, a named owner and an incident process.",
"B": "Monitoring of the cloud bill only, since accuracy cannot change unless the code itself changes.",
"C": "A one-time accuracy test at launch, after which the forecasts are trusted without further checks.",
"D": "A quarterly review of user satisfaction surveys, with no technical monitoring of forecasts."
},
"fin": [
"A"
],
"expl": "Production AI needs ongoing performance monitoring against a baseline, alert thresholds, a named owner and an incident process. A one-time test (C) misses drift; accuracy can change without code changes (B); surveys alone (D) miss measurable accuracy problems.",
"multi": false
},
{
"id": "CC-050",
"dm": 3,
"domain": "Domain 3：AI 治理與負責任 AI 領導力（AI Governance and Responsible AI Leadership）24%",
"sub": "營運監控、可靠性與 Agentic AI",
"code": "CC",
"stem": "A retailer's customer assistant built on a foundation model will be updated when the provider releases a new model version. What should the retailer require BEFORE adopting the new version?",
"opts": {
"A": "Wait until the old version is retired and then switch over without any additional testing.",
"B": "Ask customers to report any changes they notice after the new version goes into production.",
"C": "Adopt it immediately in production, because new model versions always perform better.",
"D": "Re-evaluate it against the retailer's test set and safety criteria before switching over."
},
"fin": [
"D"
],
"expl": "Provider model changes can alter behaviour, so re-evaluating against your own test set and safety criteria before switching manages reliability risk. New versions aren't always better (C); switching untested (A) or relying on customers to find problems (B) exposes customers to regressions.",
"multi": false
},
{
"id": "CN-004",
"dm": 3,
"domain": "Domain 3：AI 治理與負責任 AI 領導力（AI Governance and Responsible AI Leadership）24%",
"sub": "負責任 AI 原則（公平、可解釋、透明、人工監督、內容安全）",
"code": "CN",
"stem": "An insurance company uses a generative AI assistant to draft claim decisions. The assistant handles both routine approvals of small claims and denials of large or complex claims. Leadership wants to cut processing time without increasing the risk of harming customers. Which oversight model is MOST appropriate?",
"opts": {
"A": "Let the assistant approve and deny all claims automatically, and audit a random 1% sample each quarter.",
"B": "Let the assistant finalize all decisions, and give every customer a disclaimer stating that the decision was generated by AI and may be appealed.",
"C": "Require a human adjuster to write every claim decision from scratch, and use the assistant only to correct spelling and grammar in the final letter.",
"D": "Let the assistant finalize routine low-value approvals within set limits, require an adjuster to approve every denial, and escalate complex claims."
},
"fin": [
"D"
],
"expl": "How much human oversight a decision needs should depend on its impact. A denial can cause significant financial harm to a customer, so a qualified person should review it. Low-value routine approvals carry little risk and can be automated within clear limits. Escalation criteria send complex or ambiguous cases to people. Option D captures the efficiency gain where the risk is low and keeps humans in the loop where the stakes are high. Full automation with a 1% quarterly audit (option A) finds harmful denials months after customers are affected. Making adjusters write everything from scratch (option C) gives up nearly all of the business value. A disclaimer (option B) is a transparency measure, and it does not replace oversight of high-impact decisions.",
"multi": false
},
{
"id": "CN-010",
"dm": 3,
"domain": "Domain 3：AI 治理與負責任 AI 領導力（AI Governance and Responsible AI Leadership）24%",
"sub": "AI 治理、風險分級、合規法規與存取控制",
"code": "CN",
"stem": "A company is building a customer-facing application on Amazon Bedrock. A board member asks which responsibilities the company keeps under the AWS shared responsibility model. Which responsibility belongs to the company?",
"opts": {
"A": "Patching and maintaining the hardware and infrastructure that run the Amazon Bedrock service",
"B": "Physically securing the data centers that host the foundation models",
"C": "Deciding who can access the application, what data goes into prompts, and how AI outputs are used in decisions",
"D": "Securing the global network that connects AWS Regions"
},
"fin": [
"C"
],
"expl": "Under the AWS shared responsibility model, AWS is responsible for security of the cloud, and the customer is responsible for security in the cloud. For AI workloads, the customer keeps responsibility for identity and access management, the data it sends to and stores with the service, how it governs and uses model outputs, and its compliance obligations (option C). Physical data center security (option B), the managed infrastructure that runs Amazon Bedrock (option A), and the AWS global network (option D) are all AWS responsibilities.",
"multi": false
},
{
"id": "CN-016",
"dm": 3,
"domain": "Domain 3：AI 治理與負責任 AI 領導力（AI Governance and Responsible AI Leadership）24%",
"sub": "AI 治理、風險分級、合規法規與存取控制",
"code": "CN",
"stem": "A global consumer goods company has more than 30 AI initiatives running across its business units. Each unit approves its own projects. As a result, risk reviews are inconsistent, two units signed conflicting contracts with the same AI vendor, and nobody can say who approved a customer-facing chatbot. What should the company establish FIRST?",
"opts": {
"A": "A cross-functional AI governance council with an executive sponsor, defined decision rights, and a named business owner for each AI use case.",
"B": "A rule that the CIO's IT organization approves all AI projects, because it already manages vendor contracts, technology risk, and the company's cloud environment.",
"C": "A requirement that each business unit hire its own AI ethics officer and keep its own approval process.",
"D": "A pause on all new AI projects until regulators publish final AI guidance for the industry."
},
"fin": [
"A"
],
"expl": "The problems in this scenario come from fragmented decision-making and unclear accountability. A cross-functional governance body with an executive sponsor brings together the perspectives AI decisions need (business, technical, legal, compliance, security, and people impacts). Defined decision rights and a named owner for each use case make it clear who approved what (option A). Giving approval only to IT (option B) leaves out the legal, compliance, and business perspectives and treats AI as a purely technical decision, even if IT already manages vendor contracts. Separate approval processes in each unit (option C) keep the fragmentation that caused the problem. A blanket pause (option D) halts value creation and does not build the governance capability the company needs, whatever regulators decide.",
"multi": false
},
{
"id": "CN-024",
"dm": 3,
"domain": "Domain 3：AI 治理與負責任 AI 領導力（AI Governance and Responsible AI Leadership）24%",
"sub": "AI 治理、風險分級、合規法規與存取控制",
"code": "CN",
"stem": "A retailer's marketing team wants to launch an AI personalization engine in six weeks to hit a holiday revenue target. The fastest path is to train it on customer browsing and purchase history. That data was collected under a privacy notice that describes its use only for order fulfillment and customer support. What should the AI business strategist recommend?",
"opts": {
"A": "Cancel the initiative, because personalization always conflicts with privacy principles.",
"B": "Proceed with the full dataset and update the privacy notice after launch, once the revenue impact of personalization can be shown to customers.",
"C": "Confirm permitted uses with legal and privacy teams first, launch with data that has an appropriate legal basis, and expand once consent and notices are updated.",
"D": "Proceed with the full dataset, because the data is already in the company's possession and using it internally does not create any new privacy obligations for the company."
},
"fin": [
"C"
],
"expl": "When a business objective conflicts with a responsible AI principle, the strategist should find a path that protects the principle and still delivers value. Option C does that: legal and privacy confirm what the data may be used for, the launch uses only data with a valid legal basis, and the scope grows as consent catches up. Owning the data does not mean it can be used for any purpose (option D). Purpose limitation means data collected for fulfillment cannot simply be reused to train a marketing model. Updating the notice after launch (option B) means the data has already been misused, and it creates regulatory and reputational risk. Cancelling the initiative (option A) overcorrects. Personalization can be done responsibly, and responsible AI is about managing tradeoffs, not rejecting AI.",
"multi": false
},
{
"id": "CN-032",
"dm": 3,
"domain": "Domain 3：AI 治理與負責任 AI 領導力（AI Governance and Responsible AI Leadership）24%",
"sub": "AI 治理、風險分級、合規法規與存取控制",
"code": "CN",
"stem": "A company headquartered in the United States plans to use an AI tool to screen and rank job applicants for roles in its offices in Germany and France. The HR leader considers it a low-risk productivity tool and wants to roll it out next month. What should the AI business strategist do FIRST?",
"opts": {
"A": "Remove applicant names and photos from the input data, which removes all regulatory obligations for the tool under EU law.",
"B": "Engage legal and compliance to assess obligations under the EU AI Act, which classifies recruitment AI as high-risk.",
"C": "Ask the vendor to confirm in writing that the tool is unbiased and compliant with EU rules, and treat that statement as full compliance.",
"D": "Roll it out as planned, because the company is headquartered outside the EU and EU rules do not apply to tools it deploys from the United States."
},
"fin": [
"B"
],
"expl": "AI systems used to recruit or select people are listed as high-risk under the EU AI Act. The Act applies based on where a system is placed on the market or where its outputs are used, not only where a company is headquartered. Using the tool for roles in Germany and France brings it into scope. The right first step is a legal and compliance assessment to identify obligations, such as risk management, data quality, human oversight, transparency, and documentation, before deployment (option B). Assuming EU rules do not apply because of headquarters location (option D) is incorrect. A vendor's claim of fairness (option C) does not transfer the deployer's own obligations to the vendor, and the company still needs its own evaluation. Removing names (option A) does not remove bias, because other features can act as proxies, and it does not change how the use case is classified.",
"multi": false
},
{
"id": "CN-033",
"dm": 3,
"domain": "Domain 3：AI 治理與負責任 AI 領導力（AI Governance and Responsible AI Leadership）24%",
"sub": "AI 治理、風險分級、合規法規與存取控制",
"code": "CN",
"stem": "A manufacturer is starting an AI program to predict which suppliers are likely to miss delivery deadlines. The program sponsor asks when the responsible AI review should happen. Which answer reflects governance by design?",
"opts": {
"A": "At use-case intake, before data sources, vendors, and success metrics are finalized, with checkpoints through operation.",
"B": "After the model is built and has passed accuracy testing, so that the review team has a working system with real results to evaluate.",
"C": "Only if a customer or regulator raises a complaint after the system goes live.",
"D": "Once a year during the company's standard internal audit cycle, regardless of which lifecycle stage each AI project has reached."
},
"fin": [
"A"
],
"expl": "Governance by design means responsible AI considerations are built into planning from the start and revisited at each stage of the lifecycle. Early decisions about data sources, vendors, and how success is measured are where fairness, privacy, and transparency risks are cheapest to address. Reviewing only after the model is built (option B) can lead to expensive rework or a failed launch, because problems in the data or problem framing are already baked in. Waiting for complaints (option C) is reactive and exposes the company to harm it could have prevented. A fixed annual audit (option D) is not tied to project milestones, so a project can be designed, built, and launched before anyone reviews it.",
"multi": false
},
{
"id": "CN-036",
"dm": 3,
"domain": "Domain 3：AI 治理與負責任 AI 領導力（AI Governance and Responsible AI Leadership）24%",
"sub": "AI 治理、風險分級、合規法規與存取控制",
"code": "CN",
"stem": "A multinational manufacturer is creating an enterprise AI program. Its legal, procurement, and engineering teams use AI terms inconsistently, and the board wants a certifiable management system for governing AI across the organization. Which pair of international standards best addresses these two needs?",
"opts": {
"A": "ISO/IEC 23053 for a common ML framework and terms, and ISO/IEC 42001 for a certifiable AI management system",
"B": "ISO/IEC 42001 for a common AI vocabulary across teams, and ISO/IEC 23053 for a certifiable AI management system",
"C": "ISO/IEC 27001 for a common AI vocabulary, and ISO 9001 for a certifiable AI management system",
"D": "ISO/IEC 23053 for both needs, because a single standard covers AI terminology as well as certification of an organization's AI management system"
},
"fin": [
"A"
],
"expl": "ISO/IEC 23053 describes a framework for AI systems that use machine learning, giving teams a shared description of ML system components and terms (together with ISO/IEC 22989 for AI concepts and terminology). ISO/IEC 42001 specifies requirements for an AI management system (AIMS) that an organization can establish, maintain, and be certified against, which matches the board's request. Option B reverses the two standards. ISO/IEC 27001 is an information security management standard and ISO 9001 is a quality management standard; neither is the AI-specific vocabulary or AI management system standard. ISO/IEC 23053 is a descriptive framework, not a certifiable management system, so it cannot meet both needs alone.",
"multi": false
},
{
"id": "CN-039",
"dm": 3,
"domain": "Domain 3：AI 治理與負責任 AI 領導力（AI Governance and Responsible AI Leadership）24%",
"sub": "AI 治理、風險分級、合規法規與存取控制",
"code": "CN",
"stem": "A logistics company deploys an AI model that recommends which customer accounts should receive credit-limit reductions. The model was built by the internal data science team on Amazon SageMaker AI by using a foundation model from a third-party provider. Who should be accountable for the business decisions the system makes and for accepting its residual risk?",
"opts": {
"A": "The third-party foundation model provider, because its model is part of the solution",
"B": "AWS, because the model runs on AWS infrastructure",
"C": "The individual data scientists who trained the model",
"D": "The business owner of the credit process, such as the head of credit, supported by the governance council"
},
"fin": [
"D"
],
"expl": "Accountability for an AI system's business decisions belongs to the business owner of the process it supports. That owner decides whether the system is fit for purpose and accepts its residual risk, with input from the governance body and from technical, legal, and risk teams. Under the AWS shared responsibility model (option B), AWS is responsible for the security of the cloud infrastructure. AWS is not responsible for how customers use AI outputs in their decisions. A model provider (option A) is responsible for its model as delivered, not for how the company applies it to credit decisions. Data scientists (option C) are responsible for building the model well, but they do not own the business decision or the decision to accept risk.",
"multi": false
},
{
"id": "CN-042",
"dm": 3,
"domain": "Domain 3：AI 治理與負責任 AI 領導力（AI Governance and Responsible AI Leadership）24%",
"sub": "AI 治理、風險分級、合規法規與存取控制",
"code": "CN",
"stem": "A governance council is defining the criteria for its AI risk tiers. Which characteristic should, on its own, place a proposed use case in the tier that receives the MOST rigorous review and controls?",
"opts": {
"A": "The system makes or materially influences decisions about individuals' access to employment, credit, insurance, or essential services.",
"B": "The system was built and is maintained by an external partner instead of an internal team, so the company depends on that partner's processes.",
"C": "The system processes a very large volume of operational data, such as machine sensor readings, which increases its cost and technical complexity.",
"D": "The system runs on a fully managed service such as Amazon Bedrock instead of a self-hosted model, so the company has less control over the underlying infrastructure."
},
"fin": [
"A"
],
"expl": "AI risk classification frameworks tier use cases mainly by their potential impact on people. Systems that make or materially influence decisions about employment, credit, insurance, or access to essential services can significantly affect individuals' rights and livelihoods, so they need the most rigorous review and controls (option A). The EU AI Act follows the same logic: it classifies AI used for recruitment, creditworthiness assessment, and life and health insurance pricing as high-risk, and reserves its prohibited tier for practices such as social scoring. Using a managed service (option D) changes who operates the infrastructure under the shared responsibility model, but it does not change how much harm a decision can cause. Building with an external partner (option B) is a vendor risk management concern, not a reason to raise the impact tier. Data volume and technical complexity (option C) are cost and operational considerations, and machine sensor data does not directly affect individuals.",
"multi": false
},
{
"id": "CN-044",
"dm": 3,
"domain": "Domain 3：AI 治理與負責任 AI 領導力（AI Governance and Responsible AI Leadership）24%",
"sub": "負責任 AI 原則（公平、可解釋、透明、人工監督、內容安全）",
"code": "CN",
"stem": "A consumer brand's marketing team wants to use generative AI to produce ad copy and campaign images at scale. The general counsel is worried about intellectual property disputes and about publishing offensive or off-brand content. Which TWO actions should the AI business strategist recommend? (Choose two.)",
"opts": {
"A": "Review the provider's terms on training data, output rights, and IP indemnification, and restrict prompts that imitate named artists, trademarks, or copyrighted characters.",
"B": "Tell the model in every prompt to \"not copy anything,\" which eliminates IP risk.",
"C": "Assume that all AI-generated content is automatically owned by the company and free of any third-party rights, so that legal and brand review of generated assets is not needed.",
"D": "Apply content filters, such as Amazon Bedrock Guardrails content filters and denied topics, and require human brand and legal review of generated assets before publication.",
"E": "Encourage employees to upload competitors' campaign materials so the model can closely reproduce successful styles."
},
"fin": [
"A",
"D"
],
"expl": "IP risk is managed through vendor due diligence and usage policy. That means understanding what the model was trained on, what rights the company has to its outputs, and whether the provider offers IP indemnification, while restricting prompts that invite infringement (option A). Harmful and off-brand content risk is managed with automated content filtering and human review before anything is published (option D). Legal ownership of AI-generated content is unsettled and varies by jurisdiction, so assuming it is automatically owned and free of third-party rights (option C) is unsafe. A prompt instruction (option B) cannot guarantee that output will not resemble protected work. Feeding competitors' materials to the model to reproduce them (option E) increases the risk of infringement.",
"multi": true
},
{
"id": "CN-045",
"dm": 3,
"domain": "Domain 3：AI 治理與負責任 AI 領導力（AI Governance and Responsible AI Leadership）24%",
"sub": "負責任 AI 原則（公平、可解釋、透明、人工監督、內容安全）",
"code": "CN",
"stem": "A regional bank plans to use an AI model to approve or decline small-business loan applications. The bank's regulator requires that every declined applicant receive the specific reasons that led to the decision. Which responsible AI dimension does this requirement address MOST directly?",
"opts": {
"A": "Safety",
"B": "Explainability",
"C": "Controllability",
"D": "Robustness"
},
"fin": [
"B"
],
"expl": "Explainability is the ability to describe why an AI system produced a particular output in terms that people can understand. A requirement to give each declined applicant the reasons for the decision is an explainability requirement, and it affects which model types and vendors the bank can accept. Robustness means the system performs reliably under unexpected or adversarial inputs, which does not produce reasons for a decision. Safety is about preventing harmful outputs or outcomes. Controllability is about the ability to monitor and steer system behavior. Neither safety nor controllability gives applicants an account of why they were declined.",
"multi": false
},
{
"id": "CN-046",
"dm": 3,
"domain": "Domain 3：AI 治理與負責任 AI 領導力（AI Governance and Responsible AI Leadership）24%",
"sub": "AI 治理、風險分級、合規法規與存取控制",
"code": "CN",
"stem": "A bank's AI governance office has a small team and a backlog of 40 proposed AI use cases. These range from an internal meeting-notes summarizer to a model that sets credit limits. Every use case currently goes through the same 12-week review, and business units are starting to bypass the process. What should the governance office do?",
"opts": {
"A": "Keep the same full 12-week review for every use case, because any AI system, however small, could cause harm to someone.",
"B": "Review use cases strictly in the order they were submitted, so that every business unit is treated equally regardless of the risk of each use case.",
"C": "Approve all internal-facing use cases automatically and apply the full 12-week review only to the customer-facing ones.",
"D": "Tier use cases by impact on individuals, autonomy, data sensitivity, and regulatory exposure; scale review by tier."
},
"fin": [
"D"
],
"expl": "Risk classification frameworks let governance teams focus their limited capacity where potential harm is greatest. Tiering use cases by impact, autonomy, data sensitivity, and regulatory exposure gives a lightweight path to low-risk tools like a meeting summarizer and a rigorous review for high-risk systems like credit decisions (option D). This also discourages people from bypassing governance. A single heavyweight process for everything (option A) is what is creating the backlog and the workarounds. Treating every internal use case as safe (option C) is too blunt, because an internal tool that handles HR or employee performance data can still be high-risk. Reviewing in submission order (option B) ignores risk entirely.",
"multi": false
},
{
"id": "CN-047",
"dm": 3,
"domain": "Domain 3：AI 治理與負責任 AI 領導力（AI Governance and Responsible AI Leadership）24%",
"sub": "負責任 AI 原則（公平、可解釋、透明、人工監督、內容安全）",
"code": "CN",
"stem": "A health insurer is launching a member-facing generative AI chatbot on Amazon Bedrock to answer questions about plan benefits. The compliance team is concerned that the chatbot could give confidently wrong answers about coverage, or drift into giving medical advice. Which TWO safeguards should the business strategist require before launch? (Choose two.)",
"opts": {
"A": "Use the largest available foundation model, because larger models do not hallucinate.",
"B": "Define escalation criteria that hand off to a human agent for medical-advice requests, coverage disputes, or out-of-scope questions, and block medical advice with a denied-topics guardrail.",
"C": "Turn off conversation logging so that member data is never retained for review, which removes the privacy risk of storing sensitive health conversations.",
"D": "Allow the chatbot to answer medical questions as long as each answer ends with a clear disclaimer telling the member to consult a doctor or nurse before acting on it.",
"E": "Ground answers in approved plan documents, such as with Amazon Bedrock Knowledge Bases, and use Guardrails contextual grounding checks to block unsupported responses."
},
"fin": [
"B",
"E"
],
"expl": "Grounding responses in approved content and checking that each answer is supported by that content reduces the risk of hallucinated coverage answers. Retrieval from Amazon Bedrock Knowledge Bases provides the grounding, and Amazon Bedrock Guardrails contextual grounding checks filter responses the sources do not support (option E). Clear escalation criteria, combined with a denied-topics policy for medical advice, ensure that a person handles high-stakes or out-of-scope requests (option B). No model size eliminates hallucinations (option A). Turning off logging (option C) removes the record needed to monitor quality and investigate incidents. Data retention should be managed with access controls and retention policies instead. A disclaimer (option D) does not make medical advice safe or compliant.",
"multi": true
},
{
"id": "CN-055",
"dm": 3,
"domain": "Domain 3：AI 治理與負責任 AI 領導力（AI Governance and Responsible AI Leadership）24%",
"sub": "AI 治理、風險分級、合規法規與存取控制",
"code": "CN",
"stem": "A professional services firm is rolling out a generative AI assistant that answers employee questions by searching internal content. That content includes HR files, client contracts, and finance reports. Which TWO measures should the governance team require to protect sensitive data? (Choose two.)",
"opts": {
"A": "Rely on AWS to decide which employees can see which documents, because controlling data access is AWS's responsibility under the shared responsibility model.",
"B": "Let employees paste any document into the assistant without restrictions, so that useful content is not filtered out.",
"C": "Give every employee access to all indexed content, because broader access produces more complete answers and higher adoption.",
"D": "Classify content by sensitivity before indexing it, and exclude or restrict highly sensitive sources based on least privilege and a data owner's approval.",
"E": "Require the assistant to respect existing source-system permissions, so each employee can retrieve answers only from content they are already authorized to see."
},
"fin": [
"D",
"E"
],
"expl": "A GenAI assistant can expose data that people should not see if it ignores existing permissions. Answers should be limited to content each user is already authorized to access (option E). Classifying content by sensitivity before indexing, and applying least privilege with data-owner approval for sensitive sources (option D), keeps highly sensitive material out unless there is a justified need. Giving everyone access to all content (option C) creates serious confidentiality and regulatory exposure. Under the shared responsibility model (option A), the customer remains responsible for managing identities, permissions, and its own data. AWS secures the underlying infrastructure. Letting employees paste in any content without restriction (option B) works against data-handling controls and increases the risk of leakage.",
"multi": true
},
{
"id": "CN-060",
"dm": 3,
"domain": "Domain 3：AI 治理與負責任 AI 領導力（AI Governance and Responsible AI Leadership）24%",
"sub": "負責任 AI 原則（公平、可解釋、透明、人工監督、內容安全）",
"code": "CN",
"stem": "A staffing company's AI model that ranks candidates passed an independent bias audit before launch 18 months ago. Since then, the company has expanded into new regions and the applicant pool has changed significantly. An executive argues that because the model passed its audit, no further bias review is needed. How should the AI business strategist respond?",
"opts": {
"A": "Agree. The independent audit validated the model, and repeating the review without a specific complaint would add cost without reducing risk.",
"B": "Disagree. Bias can emerge when the applicant pool changes, so monitor outcomes across groups continuously and re-review the model.",
"C": "Disagree, and replace the model with a rule-based scoring system, because fixed rules are transparent and therefore cannot produce biased or discriminatory outcomes.",
"D": "Agree, but retrain the model on a larger dataset that includes applicants from the new regions, because adding more representative data is always enough to correct any bias."
},
"fin": [
"B"
],
"expl": "Bias can be introduced during problem framing, data collection, labeling, training, and deployment. It can also emerge over time as the population a model serves drifts away from its training data. Expanding into new regions changed the applicant pool, so results from the original audit may no longer hold. Ongoing monitoring of outcomes across groups, for example with regular subgroup analysis of the model's decisions, and a fresh review after a material change are the appropriate response (option B). A one-time audit (option A) does not cover the system's whole lifetime, and waiting for a complaint means harm has already occurred. More data (option D) does not remove bias on its own and can amplify it if the data reflects historical inequities. Rule-based systems (option C) can be transparent and still encode bias in their rules, and replacing the model does not address the governance gap. (Amazon SageMaker Clarify, which older study material names for bias monitoring, is no longer open to new customers.)",
"multi": false
},
{
"id": "GD-004",
"dm": 3,
"domain": "Domain 3：AI 治理與負責任 AI 領導力（AI Governance and Responsible AI Leadership）24%",
"sub": "AI 治理、風險分級、合規法規與存取控制",
"code": "GD",
"stem": "A wholesale marketplace is preparing an AI assistant that can summarize seller cases, read order information, and initiate selected catalog actions. The pilot worked with a small test group, but production will expose more sensitive data and tools. Which access-control approach is most appropriate?",
"opts": {
"A": "Give support employees broad read access to seller data while restricting write actions to a smaller approved group.",
"B": "Grant access by business role and task, enforce least privilege and approved data boundaries, and separately authorize the assistant's actions.",
"C": "Rely on successful user authentication and allow the assistant to inherit access to any connected source already available within the enterprise environment.",
"D": "Create a shared service identity for the assistant and review its activity after launch, reducing the need to maintain role-specific permissions during rollout."
},
"fin": [
"B"
],
"expl": "B 正確：依角色與任務授權，落實最小權限與資料邊界，並對 AI 助理的動作另行授權。繼承所有權限或共用身分會擴大風險。",
"multi": false
},
{
"id": "GD-007",
"dm": 3,
"domain": "Domain 3：AI 治理與負責任 AI 領導力（AI Governance and Responsible AI Leadership）24%",
"sub": "AI 治理、風險分級、合規法規與存取控制",
"code": "GD",
"stem": "A national retailer has validated the technical feasibility of an AI promotion-content pilot. Before expanding it, Legal, Risk, and business owners want assurance that responsible-AI requirements will not be added at the end of development. Which planning approach best demonstrates governance by design?",
"opts": {
"A": "Define use-case risks, accountable owners, data constraints, evaluation criteria, human oversight, and release gates during planning, and revisit them as evidence changes.",
"B": "Assign the technical lead responsibility for responsible-AI decisions so control design stays close to implementation and does not slow cross-functional delivery.",
"C": "Finish optimizing model quality first, then perform the governance review once the team has a stable version whose performance can be measured consistently.",
"D": "Apply the enterprise AI policy to the project and let the delivery team decide at launch whether additional use-case controls are necessary."
},
"fin": [
"A"
],
"expl": "A 正確：治理要「設計即內建」：規劃階段就定義風險、負責人、資料限制、評估準則、人工監督與發布關卡，並隨證據更新。",
"multi": false
},
{
"id": "GD-016",
"dm": 3,
"domain": "Domain 3：AI 治理與負責任 AI 領導力（AI Governance and Responsible AI Leadership）24%",
"sub": "AI 治理、風險分級、合規法規與存取控制",
"code": "GD",
"stem": "An agricultural cooperative's AI governance committee is chaired by the same regional operations director who sponsors and funds the AI initiatives the committee reviews, and that director holds final sign-off on every use case the committee evaluates. Several higher-risk use cases have been approved quickly with little documented pushback. What is the strongest explanation for this pattern, and what should the cooperative change?",
"opts": {
"A": "The cooperative should remove the director from AI reviews and let each region approve its own initiatives independently, reducing dependency on one executive.",
"B": "The committee lacks enough technical members with deep AI risk experience; adding more engineers to the review roster would supply the perspective needed to slow down approvals.",
"C": "Approving one's own initiative is a conflict of interest; sign-off for material use cases should sit with a reviewer independent of the initiative's funding and delivery.",
"D": "The committee currently meets once a quarter, too infrequently to catch most issues; adding monthly review sessions and written minutes would resolve the pattern of fast approvals."
},
"fin": [
"C"
],
"expl": "C 正確：自己贊助又自己核准是利益衝突；重大用例的簽核應由與資金與交付獨立的審查者負責。",
"multi": false
},
{
"id": "GD-021",
"dm": 3,
"domain": "Domain 3：AI 治理與負責任 AI 領導力（AI Governance and Responsible AI Leadership）24%",
"sub": "AI 治理、風險分級、合規法規與存取控制",
"code": "GD",
"stem": "A wholesale marketplace is preparing to expand an AI seller-support assistant into several countries. It will process customer and seller data, recommend operational actions, and may support decisions subject to different sector and jurisdictional requirements. What should the business team do before production approval?",
"opts": {
"A": "Apply the legal requirements used at headquarters and add local controls primarily when a regulator or customer identifies a country-specific conflict after launch.",
"B": "Identify applicable jurisdictions, sector rules, data obligations, and decision impacts, then map them to controls with qualified legal and compliance input.",
"C": "Use the foundation-model provider's compliance documentation as the principal evidence that the complete seller-support process satisfies applicable obligations.",
"D": "Complete the technical pilot first and perform the formal regulatory analysis during production onboarding, when the final data flows and user groups are known."
},
"fin": [
"B"
],
"expl": "B 正確：上線前先識別適用司法管轄區、產業規範、資料義務與決策影響，並與法務／合規一起對應到控制措施。",
"multi": false
},
{
"id": "GD-022",
"dm": 3,
"domain": "Domain 3：AI 治理與負責任 AI 領導力（AI Governance and Responsible AI Leadership）24%",
"sub": "負責任 AI 原則（公平、可解釋、透明、人工監督、內容安全）",
"code": "GD",
"stem": "A university system plans to use an AI assistant for student-service recommendations. The pilot is accurate overall, but reviewers are concerned about different student groups, sensitive data, the ability to explain recommendations, and the consequences of bad advice. Which review approach is most appropriate before release?",
"opts": {
"A": "Apply the university's standard AI control checklist without changing it for the student-service context, so governance remains consistent across low- and high-impact use cases.",
"B": "Assess the responsible-AI dimensions material to the use case, including fairness, privacy, explainability, safety, robustness, transparency, and governance, then define proportionate controls.",
"C": "Use the pilot's aggregate accuracy as the release criterion, treating strong measured performance as evidence that fairness, explainability, and safety risk are substantially reduced.",
"D": "Treat privacy as the primary responsible-AI requirement on the basis that the system processes student records, while documenting the other concerns for possible post-launch review."
},
"fin": [
"B"
],
"expl": "B 正確：依用例評估相關負責任 AI 面向（公平、隱私、可解釋、安全、穩健、透明、治理）並定義相稱控制；整體準確度不代表公平與安全。",
"multi": false
},
{
"id": "GD-031",
"dm": 3,
"domain": "Domain 3：AI 治理與負責任 AI 領導力（AI Governance and Responsible AI Leadership）24%",
"sub": "AI 治理、風險分級、合規法規與存取控制",
"code": "GD",
"stem": "A semiconductor manufacturer's engineering, legal, and quality teams each use different definitions for terms like 'AI system,' 'model risk,' and 'high-impact use case' in internal documents, causing confusion during a cross-functional AI review. Adopting a recognized international AI vocabulary standard resolves most of the disagreement, but the review board notices the standard's generic definition of 'high-impact' does not address what counts as high-impact within semiconductor fabrication specifically. What should the board do?",
"opts": {
"A": "Instruct each team to keep using its own existing definitions internally and reserve the recognized standard's vocabulary for external communications with regulators.",
"B": "Adopt the recognized standard's vocabulary exactly as written and treat any use case the standard does not explicitly name as outside the scope of AI governance.",
"C": "Adopt the recognized standard's vocabulary as the common baseline, then define the fabrication-specific criteria that determine which company use cases meet the standard's high-impact threshold.",
"D": "Discard the recognized standard, on the reasoning that its generic definitions do not already address the specific terms the fabrication business needs."
},
"fin": [
"C"
],
"expl": "C 正確：採用標準詞彙作共同基線，再自訂製造業（晶圓廠）專屬的「高影響」判準。",
"multi": false
},
{
"id": "GD-032",
"dm": 3,
"domain": "Domain 3：AI 治理與負責任 AI 領導力（AI Governance and Responsible AI Leadership）24%",
"sub": "負責任 AI 原則（公平、可解釋、透明、人工監督、內容安全）",
"code": "GD",
"stem": "A nonprofit foundation already has an editorial review process for content created by staff writers, covering plagiarism checks and source citation. The foundation now wants to use a generative AI tool to draft grant-recipient spotlights and social posts. The communications director proposes routing AI drafts through the same editorial process unchanged. What should the review board decide?",
"opts": {
"A": "Extend the editorial process with AI-specific checks for training-data provenance, potential style mimicry, and licensing of any reference material the tool draws on.",
"B": "Require the communications director alone to approve AI drafts before publication each week, without additional content-safety or IP-specific review beyond personal judgment and a quick read-through.",
"C": "Route AI drafts through the unchanged editorial process, relying on the same plagiarism and citation checks already used to review staff-written content each month.",
"D": "Exempt AI-drafted spotlights and social posts from editorial review, treating output from tools trained on licensed data as clear for publication."
},
"fin": [
"A"
],
"expl": "A 正確：既有編輯流程要加上 AI 專屬檢查：訓練資料來源、風格模仿、授權與參考素材。原流程不涵蓋這些風險。",
"multi": false
},
{
"id": "GD-038",
"dm": 3,
"domain": "Domain 3：AI 治理與負責任 AI 領導力（AI Governance and Responsible AI Leadership）24%",
"sub": "AI 治理、風險分級、合規法規與存取控制",
"code": "GD",
"stem": "The medical-device company's AI pilot in quality systems and post-market surveillance has generated enough interest to reach a decision gate. Before approving further investment, leaders still need a defensible position on how to apply AI risk classification frameworks across the lifecycle, not simply confidence in the demonstration. Which TWO actions are most appropriate? (Choose TWO.)",
"opts": {
"A": "Tier governance primarily by program spend, with higher-cost initiatives receiving more intensive oversight.",
"B": "Give medical-device AI use cases a common maximum-control package so reviewers can apply one approval path across the portfolio.",
"C": "Set the risk tier during idea intake and retain that classification through deployment unless the intended use is redesigned.",
"D": "Rate each use case using potential harm, likelihood, autonomy, data sensitivity, affected stakeholders, and regulatory exposure, then scale controls to that tier.",
"E": "Reassess the tier and safeguards when surveillance data, users, autonomy, intended use, or deployment context changes materially."
},
"fin": [
"D",
"E"
],
"expl": "D、E 正確：風險分級應依傷害、可能性、自主性、資料敏感度、利害關係人與法規暴露，並在情境改變時重評；不是依花費或一次定案。",
"multi": true
},
{
"id": "GD-040",
"dm": 3,
"domain": "Domain 3：AI 治理與負責任 AI 領導力（AI Governance and Responsible AI Leadership）24%",
"sub": "負責任 AI 原則（公平、可解釋、透明、人工監督、內容安全）",
"code": "GD",
"stem": "A consumer-products company wants an AI system to recommend actions in a process that can materially affect employees and customers. Average model accuracy is high, but some decisions have significant consequences when wrong. Which governance approach is most appropriate? Episode 5 (Q41–50)",
"opts": {
"A": "Require qualified human review or approval for recommendations that can materially affect employees or customers, with authority to intervene before high-impact consequences occur.",
"B": "Use a disclosure to affected users as the principal safeguard and leave consequential employee or customer errors without a defined escalation path.",
"C": "Route technical outages to people while allowing uncertain recommendations with employment or customer consequences to proceed without a dedicated approval step.",
"D": "Retire employee and customer review once portfolio-level accuracy clears the internal target, including cases where an individual error could materially affect a person."
},
"fin": [
"A"
],
"expl": "A 正確：可能重大影響人的建議須有合格人工審查／核准，並有權在後果發生前介入；平均準確度高不足以豁免。",
"multi": false
},
{
"id": "GD-047",
"dm": 3,
"domain": "Domain 3：AI 治理與負責任 AI 領導力（AI Governance and Responsible AI Leadership）24%",
"sub": "AI 治理、風險分級、合規法規與存取控制",
"code": "GD",
"stem": "An online retailer's AI-personalization initiative has been led for a year by a single accountable product owner who also chairs the cross-functional review group. That owner is transferring to a different business unit next month, and no successor has been named. Open items include two unresolved fairness-review findings and a pending vendor renewal decision. What should the retailer do before the transition?",
"opts": {
"A": "Let the cross-functional review group as a whole absorb the outgoing owner's responsibilities informally, without designating a single successor, on the reasoning that the group already has full context.",
"B": "Name a successor accountable owner before the transition and formally hand off open decisions, unresolved review findings, and outstanding approvals to that person.",
"C": "Pause the fairness-review findings and vendor-renewal decision until a successor is named at a later date, given that the current owner's departure date has already been set.",
"D": "Ask the departing owner to continue making these decisions remotely after the transfer, on the reasoning that they have the most context on the initiative's history."
},
"fin": [
"B"
],
"expl": "B 正確：移交前指定繼任的當責負責人，並正式交接未結決策、公平性審查發現與待批項目。",
"multi": false
},
{
"id": "GD-049",
"dm": 3,
"domain": "Domain 3：AI 治理與負責任 AI 領導力（AI Governance and Responsible AI Leadership）24%",
"sub": "負責任 AI 原則（公平、可解釋、透明、人工監督、內容安全）",
"code": "GD",
"stem": "An automotive supplier has validated an AI model on historical warranty data, but the composition of claims and repair patterns changes over time. Leaders are concerned that fairness or performance differences could emerge after launch even if the initial review was acceptable. What should the governance plan include?",
"opts": {
"A": "Evaluate bias across source data, labeling, model behavior, product design, deployment, and feedback, and monitor warranty outcomes by group as claims evolve.",
"B": "Limit the bias review to model behavior and training data quality, excluding repair processes, labeling choices, deployment conditions, and user feedback from the assessment.",
"C": "Remove demographic or protected-group attributes from post-launch analysis so the supplier cannot compare whether warranty outcomes differ materially across groups.",
"D": "Judge fairness from aggregate warranty accuracy across claim types and regions, and skip subgroup analysis for smaller demographic or geographic cohorts."
},
"fin": [
"A"
],
"expl": "A 正確：偏見評估要涵蓋資料來源、標註、模型行為、產品設計、部署與回饋，並隨資料演變持續依群組監控。",
"multi": false
},
{
"id": "GD-050",
"dm": 3,
"domain": "Domain 3：AI 治理與負責任 AI 領導力（AI Governance and Responsible AI Leadership）24%",
"sub": "負責任 AI 原則（公平、可解釋、透明、人工監督、內容安全）",
"code": "GD",
"stem": "Finance has challenged the business case for an AI program at a credit union. The technology works in a limited test, but the unresolved business question is how to navigate tradeoffs when business objectives conflict with responsible AI principles. Which action creates the most defensible path forward? Episode 6 (Q51–60)",
"opts": {
"A": "Assume responsible AI principles are absolute and require cancelling any project that carries nonzero risk, even when mitigations are already in place.",
"B": "Avoid documenting tradeoffs in the approved business case or governance file, leaving no written record for future reviewers to consult.",
"C": "Approve exceptions to governance whenever projected financial return exceeds the program's hurdle rate, without a separate review of the responsible-AI concern.",
"D": "Make the tradeoff explicit, assess affected stakeholders and risk appetite, and choose a safeguard-preserving solution even if it slows delivery."
},
"fin": [
"D"
],
"expl": "D 正確：把取捨透明化，評估利害關係人與風險胃納，選擇保留安全措施的方案，即使交付較慢。",
"multi": false
},
{
"id": "GD-054",
"dm": 3,
"domain": "Domain 3：AI 治理與負責任 AI 領導力（AI Governance and Responsible AI Leadership）24%",
"sub": "AI 治理、風險分級、合規法規與存取控制",
"code": "GD",
"stem": "A logistics company completed a full responsible-AI review, covering fairness, privacy, explainability, and safety, for an AI model used to route delivery vehicles. A different team now wants to reuse the same underlying model, unchanged, to prioritize which customer complaints get expedited follow-up. The team argues the prior review already covers this new use case since it is the same model. What should governance require?",
"opts": {
"A": "Accept the prior routing review as sufficient for the complaint-prioritization use case, treating responsible-AI risk as a fixed property of the model itself.",
"B": "Allow the new team to self-certify that the prior review still applies, based on their own judgment that the cases are similar.",
"C": "Conduct a separate responsible-AI review for the complaint-prioritization use case, addressing how stakeholders, harms, and consequences differ from the original routing use case.",
"D": "Require a technical performance check alone on the new use case, treating the responsible-AI dimensions as already validated when the model was first reviewed."
},
"fin": [
"C"
],
"expl": "C 正確：負責任 AI 風險取決於「用例」而非只看模型；新用途（投訴優先排序）的受影響對象與後果不同，須另行審查。",
"multi": false
},
{
"id": "GD-057",
"dm": 3,
"domain": "Domain 3：AI 治理與負責任 AI 領導力（AI Governance and Responsible AI Leadership）24%",
"sub": "AI 治理、風險分級、合規法規與存取控制",
"code": "GD",
"stem": "A healthcare network's AI intake-triage pilot has been running for eight months without formal responsible-AI requirements, release gates, or a designated risk owner ever having been defined; the project simply grew from a small experiment. Legal now wants governance in place before the next expansion. What is the most defensible way to proceed?",
"opts": {
"A": "Restart the initiative from scratch as a new project, applying governance-by-design from its official beginning and discarding eight months of pilot evidence.",
"B": "Apply governance requirements to the next expansion phase going forward, treating the first eight months as already complete and therefore outside the scope of review.",
"C": "Assign a risk owner going forward but skip a review of the pilot's existing eight months, on the reasoning that the pilot has not yet had a reported incident.",
"D": "Conduct a retrospective governance review now, define the requirements, owners, and release gates that should have existed from the start, and gate further expansion on closing material gaps."
},
"fin": [
"D"
],
"expl": "D 正確：做回溯式治理審查，補齊應有的要求、負責人與發布關卡，並以關閉重大缺口作為擴張條件。",
"multi": false
},
{
"id": "GD-061",
"dm": 3,
"domain": "Domain 3：AI 治理與負責任 AI 領導力（AI Governance and Responsible AI Leadership）24%",
"sub": "AI 治理、風險分級、合規法規與存取控制",
"code": "GD",
"stem": "A financial-services company built a least-privilege access model for its AI research assistant, correctly scoping each employee's access to their business unit's restricted reports. Six months later, an audit finds that dozens of employees who have since changed teams or left the company still retain their original AI access permissions, because the access model was never linked to the company's employee lifecycle process. What should the company do?",
"opts": {
"A": "Re-run the original least-privilege design exercise to confirm that each employee's current access still matches their original business unit's restricted reports.",
"B": "Expand the audit to check for any additional restricted reports the AI assistant can access, on the concern that the least-privilege boundaries may not have covered each report initially.",
"C": "Integrate the AI assistant's access permissions with the employee lifecycle process, triggering a review or revocation of access whenever a role change or departure occurs.",
"D": "Require managers to remember to email IT when a direct report changes teams or leaves, on the reasoning that the original access model was already correctly scoped to each business unit."
},
"fin": [
"C"
],
"expl": "C 正確：把 AI 存取權限與人員生命週期流程（調動／離職）整合，觸發審查或撤銷；單靠人工通知不可靠。",
"multi": false
},
{
"id": "GD-064",
"dm": 3,
"domain": "Domain 3：AI 治理與負責任 AI 領導力（AI Governance and Responsible AI Leadership）24%",
"sub": "AI 治理、風險分級、合規法規與存取控制",
"code": "GD",
"stem": "A global manufacturer's AI system generates a single quality-assessment score for incoming parts. Originally built for an internal dashboard where a low score merely triggers a re-inspection note, the same score has since started being used by procurement to automatically reject supplier shipments without human review. The initiative is still classified at its original low-risk tier from when it was built. What should the risk-classification review do?",
"opts": {
"A": "Keep the original low-risk tier assigned when the system was built, treating the unchanged score-generation model as the deciding factor.",
"B": "Create two separate risk classifications for the same score, one for the dashboard and one for procurement, decided independently by each team.",
"C": "Re-tier the initiative to the highest-consequence downstream use of the score, the automatic shipment rejection, and apply proportionate safeguards for that use.",
"D": "Raise the risk tier after a shipment rejection is later shown to have been incorrect, using confirmed error cases as the trigger for reclassification."
},
"fin": [
"C"
],
"expl": "C 正確：風險分級以分數「最高後果的下游用途」為準：自動拒收供應商貨件，並套用相稱的安全措施。",
"multi": false
},
{
"id": "GD-071",
"dm": 3,
"domain": "Domain 3：AI 治理與負責任 AI 領導力（AI Governance and Responsible AI Leadership）24%",
"sub": "負責任 AI 原則（公平、可解釋、透明、人工監督、內容安全）",
"code": "GD",
"stem": "An agricultural cooperative's loan approval AI shows a measurable approval rate gap between two grower groups. Before choosing a remediation, the risk team must determine what is driving the gap. What should the team do first?",
"opts": {
"A": "Retrain the model on more recent loan data and assume the approval gap will close on its own.",
"B": "Suspend the model for both grower groups until the cooperative's board finishes its annual policy review.",
"C": "Trace whether the gap comes from the input data and labels or from how officers apply the output.",
"D": "Adjust the model's decision threshold uniformly until approval rates across both grower groups match."
},
"fin": [
"C"
],
"expl": "C 正確：先追查差距來自輸入資料與標註，還是承辦人員如何使用輸出，再決定補救；不要先重訓或統一調門檻。",
"multi": false
},
{
"id": "GD-077",
"dm": 3,
"domain": "Domain 3：AI 治理與負責任 AI 領導力（AI Governance and Responsible AI Leadership）24%",
"sub": "AI 治理、風險分級、合規法規與存取控制",
"code": "GD",
"stem": "A mining company is formalizing oversight for AI initiatives that cross operations, safety, legal, data, and technology functions. Previous pilots suffered because many people participated but no one had clear decision authority. What governance structure should leadership establish?",
"opts": {
"A": "Create a committee with broad membership but no defined decision rights or accountable owner.",
"B": "Delegate governance authority for the initiative to the AI vendor that supplies the models.",
"C": "Require board-level approval for each AI experiment independent of its actual risk level.",
"D": "Establish cross-functional governance with clear decision rights and owners, using tiered review by risk."
},
"fin": [
"D"
],
"expl": "D 正確：建立有明確決策權與負責人的跨職能治理，並依風險分級審查。",
"multi": false
},
{
"id": "GD-089",
"dm": 3,
"domain": "Domain 3：AI 治理與負責任 AI 領導力（AI Governance and Responsible AI Leadership）24%",
"sub": "負責任 AI 原則（公平、可解釋、透明、人工監督、內容安全）",
"code": "GD",
"stem": "A hospitality group can increase automation in guest service decisions, but the faster option would reduce transparency and increase the chance of unfair outcomes for some customers. The revenue opportunity is real and legal and policy safeguards remain mandatory. What should leaders do?",
"opts": {
"A": "Treat responsible AI principles as absolute and cancel any project carrying a nonzero risk profile.",
"B": "Avoid documenting the trade-off so future reviewers are not anchored by the earlier decision made here.",
"C": "Deploy the higher-automation design first and add fairness and transparency controls if customer complaints reveal a problem.",
"D": "Escalate the conflict through governance with a documented rationale and named residual risk, not a single metric."
},
"fin": [
"D"
],
"expl": "D 正確：透過治理升級衝突，記錄理由並明示殘餘風險；不是單一指標，也不是一概取消或事後補救。",
"multi": false
},
{
"id": "GD-102",
"dm": 3,
"domain": "Domain 3：AI 治理與負責任 AI 領導力（AI Governance and Responsible AI Leadership）24%",
"sub": "負責任 AI 原則（公平、可解釋、透明、人工監督、內容安全）",
"code": "GD",
"stem": "A nonprofit foundation's AI grant scoring tool could be made more explainable by exposing the specific applicant data points driving each score, but doing so would reveal sensitive personal information about vulnerable grant applicants. Which approach should the foundation take?",
"opts": {
"A": "Limit disclosure to protect applicant privacy and provide an explanation detailed enough without exposing sensitive personal data.",
"B": "Maximize explainability by publishing the full data points behind each score, treating transparency as the higher-priority responsible AI dimension.",
"C": "Publish neither the score nor any explanation, treating the whole conflict as unresolvable within this grant program.",
"D": "Let each program officer decide independently how much detail to disclose to their own set of applicants."
},
"fin": [
"A"
],
"expl": "A 正確：在不揭露敏感個資下提供足夠的解釋，平衡可解釋性與隱私。",
"multi": false
},
{
"id": "GD-106",
"dm": 3,
"domain": "Domain 3：AI 治理與負責任 AI 領導力（AI Governance and Responsible AI Leadership）24%",
"sub": "AI 治理、風險分級、合規法規與存取控制",
"code": "GD",
"stem": "A municipal authority is designing an AI service that will handle citizen information. The project team proposes dealing with fairness, privacy, accountability, and review procedures after the prototype proves accurate rather than during design. What should the business strategist recommend instead?",
"opts": {
"A": "Let the technical team define the responsible AI requirements on its own without business or risk input.",
"B": "Rely on a broad enterprise AI policy without defining release criteria specific to this use case.",
"C": "Define responsible AI requirements, ownership, data constraints, and release gates during project planning, not after the build.",
"D": "Schedule the governance review for well after the pilot has already reached its target accuracy."
},
"fin": [
"C"
],
"expl": "C 正確：公平、隱私、當責與審查程序應在專案規劃階段就定義，而非原型之後。",
"multi": false
},
{
"id": "GD-108",
"dm": 3,
"domain": "Domain 3：AI 治理與負責任 AI 領導力（AI Governance and Responsible AI Leadership）24%",
"sub": "AI 治理、風險分級、合規法規與存取控制",
"code": "GD",
"stem": "A telecommunications provider plans to broaden an AI capability used in contact center operations. The team has not yet resolved how to classify AI risk across the life cycle as the capability scales. Which action provides the most defensible path forward?",
"opts": {
"A": "Derive the risk tier mainly from the model family and reuse that same tier across other workflows built on it too.",
"B": "Classify each use case by customer impact, harm likelihood, autonomy, data sensitivity, and regulatory exposure, and revisit safeguards as conditions change.",
"C": "Use the initiative's budget and expected operating cost as the main signal for how much governance the expanded contact center rollout receives.",
"D": "Apply a common enterprise control package sized for the highest-risk use case, keeping governance uniform as the rollout continues to expand."
},
"fin": [
"B"
],
"expl": "B 正確：以客戶影響、傷害可能性、自主性、資料敏感度、法規暴露分級，並隨條件變化重新審視。",
"multi": false
},
{
"id": "GD-113",
"dm": 3,
"domain": "Domain 3：AI 治理與負責任 AI 領導力（AI Governance and Responsible AI Leadership）24%",
"sub": "AI 治理、風險分級、合規法規與存取控制",
"code": "GD",
"stem": "A procurement and business team have shortlisted two paths for an AI-enabled claims handling capability. Both are feasible, so the decision now turns on how to give leaders a shared AI vocabulary and use recognized frameworks so risk and governance discussions stay consistent across functions. Which option provides the strongest business rationale?",
"opts": {
"A": "Let each department define its own AI terminology so teams can optimize independently of one another.",
"B": "Assume alignment with one framework satisfies the jurisdiction and industry requirements the claims process is subject to.",
"C": "Wait until after deployment to define governance terms, on the assumption that terminology has little effect on project decisions.",
"D": "Adopt a shared AI vocabulary and map governance practices to recognized frameworks such as ISO/IEC 42001 and ISO/IEC 23053."
},
"fin": [
"D"
],
"expl": "D 正確：採用共同 AI 詞彙，並將治理實務對應到 ISO/IEC 42001、23053 等認可框架。",
"multi": false
},
{
"id": "GD-120",
"dm": 3,
"domain": "Domain 3：AI 治理與負責任 AI 領導力（AI Governance and Responsible AI Leadership）24%",
"sub": "負責任 AI 原則（公平、可解釋、透明、人工監督、內容安全）",
"code": "GD",
"stem": "A dairy cooperative's AI system scores member farms for a premium pricing program. The compliance team proposes running the same generic protected-class fairness checklist used by the cooperative's HR systems against this farm scoring model. What should the risk team recommend instead? Episode 13 (Q121–130)",
"opts": {
"A": "Apply the HR fairness checklist unchanged as the cooperative's single enterprise standard for each program.",
"B": "Identify the comparison groups and outcome measures relevant to farm premium pricing rather than applying the HR checklist unchanged.",
"C": "Wait for a member complaint about premium pricing before defining which groups or measures are relevant.",
"D": "Skip a fairness review for the farm scoring model, treating it as a pricing tool rather than a people-facing decision."
},
"fin": [
"B"
],
"expl": "B 正確：針對農場定價的相關比較群體與成果指標做公平性評估，不直接套用 HR 檢核表。",
"multi": false
},
{
"id": "GD-123",
"dm": 3,
"domain": "Domain 3：AI 治理與負責任 AI 領導力（AI Governance and Responsible AI Leadership）24%",
"sub": "負責任 AI 原則（公平、可解釋、透明、人工監督、內容安全）",
"code": "GD",
"stem": "A public sector organization is defining release criteria for an AI system that will summarize complex citizen cases. Leaders want a responsible AI perspective that goes beyond accuracy alone. Which approach is best?",
"opts": {
"A": "Evaluate responsible AI dimensions relevant to this use case, such as privacy, fairness, and explainability.",
"B": "Treat responsible AI mainly as a communications exercise handled after the citizen case system has already launched.",
"C": "Apply the full control catalog at maximum intensity everywhere without accounting for actual stakeholder impact.",
"D": "Use primarily average accuracy as the single governing quality metric across the entire citizen case system."
},
"fin": [
"A"
],
"expl": "A 正確：發布準則要涵蓋與用例相關的負責任 AI 面向（隱私、公平、可解釋），而非僅看平均準確度。",
"multi": false
},
{
"id": "GD-132",
"dm": 3,
"domain": "Domain 3：AI 治理與負責任 AI 領導力（AI Governance and Responsible AI Leadership）24%",
"sub": "AI 治理、風險分級、合規法規與存取控制",
"code": "GD",
"stem": "A healthcare organization is expanding an AI assistant that can access internal documents containing different levels of sensitivity. Business leaders want convenient access without allowing the assistant to expose information or take actions beyond a user's authority. What control principle is most important?",
"opts": {
"A": "Treat successful identity verification as sufficient authorization for any connected data source or action.",
"B": "Give employees identical AI and data permissions across roles to simplify administration.",
"C": "Let employees copy sensitive records into personal AI accounts when enterprise access is inconvenient.",
"D": "Apply least-privilege access, approved data boundaries, and data handling rules matched to use case sensitivity."
},
"fin": [
"D"
],
"expl": "D 正確：套用最小權限、核准的資料邊界，以及與用例敏感度相稱的資料處理規則；通過身分驗證不等於被授權。",
"multi": false
},
{
"id": "GD-133",
"dm": 3,
"domain": "Domain 3：AI 治理與負責任 AI 領導力（AI Governance and Responsible AI Leadership）24%",
"sub": "AI 治理、風險分級、合規法規與存取控制",
"code": "GD",
"stem": "A semiconductor manufacturer's AI steering group includes representatives from fabrication, engineering, quality, IT, and finance for each proposal that comes before it, no matter the scope. A small proposal to automate a routine defect log summary is now waiting weeks for the full group's calendar to align. What should the group change?",
"opts": {
"A": "Let it approve small proposals on its own without any input from quality or fabrication engineering leads.",
"B": "Route each proposal through finance first and bring in other functions after finance raises a specific concern.",
"C": "Scope membership to the functions a use case touches, reserving the full group for higher-risk proposals.",
"D": "Require the same full cross-functional membership for proposals of any size, from routine updates to major system changes."
},
"fin": [
"C"
],
"expl": "C 正確：依用例涉及的職能決定成員，並把完整小組保留給高風險提案，避免小案被拖延。",
"multi": false
},
{
"id": "GD-140",
"dm": 3,
"domain": "Domain 3：AI 治理與負責任 AI 領導力（AI Governance and Responsible AI Leadership）24%",
"sub": "負責任 AI 原則（公平、可解釋、透明、人工監督、內容安全）",
"code": "GD",
"stem": "A media business is considering a generative AI tool that can draft customer-facing content using internal and licensed materials. Leaders are concerned about unsafe outputs and the possibility of reproducing protected material. What should the governance plan address? Episode 15 (Q141–150)",
"opts": {
"A": "Assume generated material is safe to publish and owned by the company when it pays for the AI service.",
"B": "Rely on a posted user disclaimer to address harmful content and IP risk concerns.",
"C": "Block generative AI use rather than evaluating controls that could reduce the exposure responsibly.",
"D": "Define content safety and IP policies, permitted sources, review requirements, and escalation paths appropriate to the use case."
},
"fin": [
"D"
],
"expl": "D 正確：治理計畫須涵蓋內容安全與 IP 政策、允許來源、審查要求與升級路徑；免責聲明或一概禁止都不妥。",
"multi": false
},
{
"id": "GD-142",
"dm": 3,
"domain": "Domain 3：AI 治理與負責任 AI 領導力（AI Governance and Responsible AI Leadership）24%",
"sub": "AI 治理、風險分級、合規法規與存取控制",
"code": "GD",
"stem": "A law firm's AI governance committee is being expanded to include the vendor that supplies its document review model, since the vendor understands the model's limitations best. Some partners now expect the vendor's representative to have a vote when the committee decides whether a new use case can proceed. What should the firm decide?",
"opts": {
"A": "Exclude the vendor from governance discussions as a matter of policy, given its commercial stake in expanded use.",
"B": "Keep the vendor in an advisory role informing the committee's review without a seat that carries a vote.",
"C": "Let the vendor decide independently whether a new use case is technically appropriate before the committee reviews it.",
"D": "Give the vendor's representative a vote so technical limitations are weighed equally with business and risk input."
},
"fin": [
"B"
],
"expl": "B 正確：廠商可提供諮詢意見，但不應握有表決權，以避免利益衝突。",
"multi": false
},
{
"id": "GD-147",
"dm": 3,
"domain": "Domain 3：AI 治理與負責任 AI 領導力（AI Governance and Responsible AI Leadership）24%",
"sub": "AI 治理、風險分級、合規法規與存取控制",
"code": "GD",
"stem": "An enterprise is planning a new generative AI customer support capability on a managed foundation model platform, and business leaders are concerned about harmful outputs and policy violations. What is the best governance-by-design recommendation at the strategist level?",
"opts": {
"A": "Treat a system prompt as the sole mechanism for enforcing content policy.",
"B": "Define content and safety requirements early and evaluate layered controls such as a guardrail service.",
"C": "Assume that using a managed foundation model platform shifts responsibility for customer-facing output away from the organization.",
"D": "Deploy the capability first and decide content policies after observing real customer incidents."
},
"fin": [
"B"
],
"expl": "B 正確：及早定義內容與安全要求，並評估分層控制（如 Guardrails）；僅靠系統提示或事後處理不夠，使用託管平台也不轉移責任。",
"multi": false
},
{
"id": "SP-003",
"dm": 3,
"domain": "Domain 3：AI 治理與負責任 AI 領導力（AI Governance and Responsible AI Leadership）24%",
"sub": "AI 治理、風險分級、合規法規與存取控制",
"code": "SP",
"stem": "An insurer's claims agent runs under the same cloud credentials as the operations analyst who built it. The chief information security officer asks what this means for accountability. According to the AWS Well-Architected Agentic AI Lens, what is the governance problem?",
"opts": {
"A": "Agent actions cannot be distinguished from the analyst's actions in audit logs, and the agent can reach resources meant only for humans",
"B": "There is no problem, because the analyst remains accountable for the agent and sharing permissions keeps the audit trail simpler and avoids maintaining a second set of credentials",
"C": "The agent will run more slowly, because credentials issued to humans are rate-limited when used by automated workloads",
"D": "The agent must be retrained, because models absorb the permissions of the account that was used to train them"
},
"fin": [
"A"
],
"expl": "A 正確：Agentic AI 鏡頭指出共用憑證會讓稽核紀錄無法區分 agent 與人員，且 agent 可觸及僅供人類的資源；應為 agent 設獨立身分。",
"multi": false
},
{
"id": "SP-007",
"dm": 3,
"domain": "Domain 3：AI 治理與負責任 AI 領導力（AI Governance and Responsible AI Leadership）24%",
"sub": "負責任 AI 原則（公平、可解釋、透明、人工監督、內容安全）",
"code": "SP",
"stem": "A staffing firm's product lead is reviewing the fairness risks of a candidate screening tool before it is built. At which levels does the AWS Well-Architected Responsible AI Lens say the potential impacts should be assessed?",
"opts": {
"A": "At the level of the operating team, whose own review decides whether harm has occurred.",
"B": "At the level of the individual applicant only, since group effects are statistical artefacts.",
"C": "At the level of individuals, at the level of groups, and at the level of society.",
"D": "At the level of the model's overall accuracy metric only."
},
"fin": [
"C"
],
"expl": "負責任 AI 鏡頭要求在個人、群體與社會三個層級評估影響（C）。",
"multi": false
},
{
"id": "SP-011",
"dm": 3,
"domain": "Domain 3：AI 治理與負責任 AI 領導力（AI Governance and Responsible AI Leadership）24%",
"sub": "負責任 AI 原則（公平、可解釋、透明、人工監督、內容安全）",
"code": "SP",
"stem": "A credit-card issuer's approval model shows higher error rates for one customer group. The chief data officer asks which mitigations the AWS Well-Architected Responsible AI Lens describes for reducing unwanted bias directly in the core AI system design. Which apply?",
"opts": {
"A": "Include fairness metrics in the model loss function so that training penalises unfair outputs",
"B": "Analyse feature attributions to check whether demographic or proxy features drive the predictions",
"C": "Use sampling methods during training, such as weighted or stratified sampling, to improve performance on underrepresented groups",
"D": "Increase the size of the model until the error rates for all groups converge on their own",
"E": "Remove every demographic field from the data, which guarantees that the model cannot be biased",
"F": "Lower the approval threshold for every group equally so that more customers are approved overall"
},
"fin": [
"A",
"B",
"C"
],
"expl": "核心設計中降低偏見：公平性指標納入損失函數、特徵歸因分析、加權／分層抽樣（A、B、C）；D、E、F 不是已認可的緩解手段（移除人口欄位不保證無偏見）。",
"multi": true
},
{
"id": "SP-015",
"dm": 3,
"domain": "Domain 3：AI 治理與負責任 AI 領導力（AI Governance and Responsible AI Leadership）24%",
"sub": "負責任 AI 原則（公平、可解釋、透明、人工監督、內容安全）",
"code": "SP",
"stem": "A university admissions office is labelling past application files to train a screening model and worries that the annotators themselves could introduce unfair bias. Which quality controls does the AWS Well-Architected Responsible AI Lens describe for human and generated labels?",
"opts": {
"A": "Track annotator performance over time with feedback mechanisms to keep labelling standards consistent",
"B": "Validate synthetic or model-generated labels against human judgment and document their limitations",
"C": "Measure inter-rater agreement and check annotators' work for unwanted bias",
"D": "Replace human labels with model-generated labels wherever possible to remove human bias",
"E": "Accept labels without further review once the annotation guidelines have been approved",
"F": "Use a single expert annotator so that the labels are perfectly consistent"
},
"fin": [
"A",
"B",
"C"
],
"expl": "標註品質控管：追蹤標註者表現與回饋、驗證合成標籤並記錄限制、衡量評分者一致性並檢查偏見（A、B、C）；D、E、F 為不良做法。",
"multi": true
},
{
"id": "SP-019",
"dm": 3,
"domain": "Domain 3：AI 治理與負責任 AI 領導力（AI Governance and Responsible AI Leadership）24%",
"sub": "負責任 AI 原則（公平、可解釋、透明、人工監督、內容安全）",
"code": "SP",
"stem": "A telecoms operator lets an AI agent resolve billing queries end to end. How does the AWS Well-Architected Generative AI Lens characterise the risk of excessive agency?",
"opts": {
"A": "The agent refuses tasks it is authorised to perform because its prompt is too narrow",
"B": "The agent is deliberately misused by an attacker who has stolen valid credentials",
"C": "The agent decides that taking broader action beyond its scope is the best solution",
"D": "The agent consumes more capacity than the workload was provisioned to serve"
},
"fin": [
"C"
],
"expl": "C 正確：過度代理（excessive agency）是 agent 自行認定採取超出範圍的更廣泛行動才是最佳解。",
"multi": false
},
{
"id": "SP-024",
"dm": 3,
"domain": "Domain 3：AI 治理與負責任 AI 領導力（AI Governance and Responsible AI Leadership）24%",
"sub": "AI 治理、風險分級、合規法規與存取控制",
"code": "SP",
"stem": "A financial services firm maintains a published register of approved AI tools, and its customer relationship management platform appears on that register. In its latest release the platform vendor enabled a generative summarization feature by default, and client meeting notes are now being processed by it. No one requested the feature. What should the business strategist recommend?",
"opts": {
"A": "Take no action, because the platform vendor already appears on the firm's published register of approved tools.",
"B": "Treat the new capability as a separate item for assessment, since the approval predates the feature being added.",
"C": "Remove the platform from the approved register entirely until the vendor agrees to disable the new feature.",
"D": "Add a note to the register recording that the platform now includes a generative summarization capability."
},
"fin": [
"B"
],
"expl": "B 正確：核准早於新功能，必須把新生成式摘要功能當作獨立項目重新評估。",
"multi": false
},
{
"id": "SP-025",
"dm": 3,
"domain": "Domain 3：AI 治理與負責任 AI 領導力（AI Governance and Responsible AI Leadership）24%",
"sub": "負責任 AI 原則（公平、可解釋、透明、人工監督、內容安全）",
"code": "SP",
"stem": "A marketplace uses a model to decide which sellers appear on the first page of search results. After two years the team plans to retrain it on accumulated click data. Sellers who were rarely placed on the first page have almost no click history, and those placements were themselves decided by the previous version of the model. Which two risks should the business strategist raise?",
"opts": {
"A": "The click data is too recent, so the retrained model will overweight seasonal patterns from the last quarter.",
"B": "The retraining data records what the previous model chose to surface rather than what customers would have chosen.",
"C": "The retraining will fail outright, because click data is unstructured and cannot be used to train a model.",
"D": "Sellers the model rarely surfaced cannot accumulate the evidence that would cause them to be surfaced later.",
"E": "The model will correct the imbalance by itself once the volume of accumulated click data becomes large."
},
"fin": [
"B",
"D"
],
"expl": "B、D 正確：重訓資料反映的是舊模型的曝光選擇（選擇偏誤），且少被曝光的賣家無法累積證據，形成回饋迴圈。",
"multi": true
},
{
"id": "SP-030",
"dm": 3,
"domain": "Domain 3：AI 治理與負責任 AI 領導力（AI Governance and Responsible AI Leadership）24%",
"sub": "負責任 AI 原則（公平、可解釋、透明、人工監督、內容安全）",
"code": "SP",
"stem": "A public employment service uses a model to order candidates for caseworker attention. Candidates are not told that their position in the queue was set by a model, and when a caseworker is asked why one candidate ranked above another, no factor-level reason can be produced from the system. Which two responsible AI dimensions are engaged?",
"opts": {
"A": "Transparency, because candidates are not informed that an automated system determines their queue position.",
"B": "Privacy, because candidate records are processed by a model rather than being read by a caseworker.",
"C": "Explainability, because the system cannot surface the factors that produced one candidate's particular ranking.",
"D": "Robustness, because the queue order may change when candidate volume rises above normal levels.",
"E": "Safety, because a caseworker might act on the ranking without checking the underlying candidate record."
},
"fin": [
"A",
"C"
],
"expl": "A、C 正確：未告知候選人由模型排序涉及透明度；無法說明排名因素涉及可解釋性。",
"multi": true
},
{
"id": "SP-031",
"dm": 3,
"domain": "Domain 3：AI 治理與負責任 AI 領導力（AI Governance and Responsible AI Leadership）24%",
"sub": "負責任 AI 原則（公平、可解釋、透明、人工監督、內容安全）",
"code": "SP",
"stem": "A retailer wants an AI pricing capability live before peak trading in six weeks. The fairness assessment is complete for the two customer segments that make up most of its volume, but not for three smaller segments. Commercial leadership does not want to miss the peak season. Which two actions best resolve the conflict?",
"opts": {
"A": "Launch across all five segments now, and complete the outstanding fairness assessment after the peak period has ended.",
"B": "Launch for the two assessed segments only, and keep the three unassessed segments on the current pricing approach.",
"C": "Cancel the initiative entirely, because a partial fairness assessment cannot support any kind of production launch at all.",
"D": "Commit to a dated completion of the assessment, with a named owner and a decision point before extension.",
"E": "Ask the pricing vendor to confirm in writing that its model behaves fairly across every customer segment involved."
},
"fin": [
"B",
"D"
],
"expl": "B、D 正確：只對已評估的區隔上線並維持其他區隔原做法，同時承諾有日期、負責人與決策點的完成計畫。",
"multi": true
},
{
"id": "SP-032",
"dm": 3,
"domain": "Domain 3：AI 治理與負責任 AI 領導力（AI Governance and Responsible AI Leadership）24%",
"sub": "負責任 AI 原則（公平、可解釋、透明、人工監督、內容安全）",
"code": "SP",
"stem": "A benefits agency requires human review of every AI-generated eligibility recommendation. An audit finds reviewers approve ninety-eight percent of recommendations, spend a median of four seconds on each, and are measured on the number of cases cleared per hour. Reviewers say they are not told which factors drove a recommendation. What does this audit finding indicate?",
"opts": {
"A": "Oversight is working as intended, because complete coverage on every case is the strongest available control.",
"B": "Oversight exists in name but cannot be exercised, because reviewers lack time, information and any incentive.",
"C": "Oversight should be reduced to a random sample, since reviewing every case has proven to add little value.",
"D": "Oversight should be automated, because a second model could check recommendations faster than the reviewers do."
},
"fin": [
"B"
],
"expl": "B 正確：審查者缺乏時間、資訊與誘因，人工監督徒具形式、無法真正發揮作用。",
"multi": false
},
{
"id": "SP-033",
"dm": 3,
"domain": "Domain 3：AI 治理與負責任 AI 領導力（AI Governance and Responsible AI Leadership）24%",
"sub": "AI 治理、風險分級、合規法規與存取控制",
"code": "SP",
"stem": "A lender operates in a market where an applicant is entitled to meaningful information about the logic involved in an automated decision. The compliance team proposes satisfying this by publishing a page on the website that sets out, in general terms, what machine learning models do and how they are built. What should the business strategist tell the compliance team?",
"opts": {
"A": "It is insufficient, because the entitlement attaches to the applicant's own decision, which a general page cannot address.",
"B": "It is sufficient, because the obligation concerns the general method used rather than any one individual lending decision.",
"C": "It is sufficient for approved applicants, and specific reasons are needed only where an application has been declined.",
"D": "It is insufficient, and the obligation transfers to the model vendor once the lender licenses the vendor's model."
},
"fin": [
"A"
],
"expl": "A 正確：知情權針對申請人自己的決策，通用說明頁無法滿足。",
"multi": false
},
{
"id": "CC-051",
"dm": 4,
"domain": "Domain 4：業務就緒、領導力與 AI 轉型（Business Readiness, Leadership, and AI Transformation）24%",
"sub": "成熟度、準備度評估與 PoC→量產轉型",
"code": "CC",
"stem": "A national retailer wants to deploy generative AI in every department within three months. Leaders disagree on priorities, data sits in separate regional systems, and there is no AI policy. What should the strategy lead recommend FIRST?",
"opts": {
"A": "Hire a large AI engineering team and let them decide which departments should adopt AI first.",
"B": "Delay all AI work for two years until every regional data system has been fully replaced.",
"C": "Assess readiness across leadership, data and governance, then close gaps with a focused pilot.",
"D": "Deploy the AI tools everywhere at once, because quick adoption will resolve the disagreements."
},
"fin": [
"C"
],
"expl": "With misaligned leaders, siloed data and no policy, assess readiness and close the most critical gaps while proving value with a focused pilot. Deploying everywhere (D) amplifies the gaps; letting engineers set business priorities (A) skips business ownership; a two-year freeze (B) is disproportionate.",
"multi": false
},
{
"id": "CC-052",
"dm": 4,
"domain": "Domain 4：業務就緒、領導力與 AI 轉型（Business Readiness, Leadership, and AI Transformation）24%",
"sub": "成熟度、準備度評估與 PoC→量產轉型",
"code": "CC",
"stem": "A retailer has run 25 AI proofs of concept across departments over two years. None is in production, and there are no shared standards. At which maturity stage is the retailer MOST likely?",
"opts": {
"A": "Experimentation, because work consists of isolated proofs of concept with nothing in production.",
"B": "Transformational, because AI is clearly part of every department's activities and plans.",
"C": "Enterprise-scale deployment, because 25 projects show AI is used across the business.",
"D": "Operational, because two years of AI work means that its delivery processes are fully established."
},
"fin": [
"A"
],
"expl": "Isolated proofs of concept with nothing in production and no standards is the experimentation stage, however many there are. Transformational (B) and enterprise-scale (C) need AI in production at scale; Operational (D) needs use cases in production with measured value.",
"multi": false
},
{
"id": "CC-053",
"dm": 4,
"domain": "Domain 4：業務就緒、領導力與 AI 轉型（Business Readiness, Leadership, and AI Transformation）24%",
"sub": "組織變革、人才與溝通",
"code": "CC",
"stem": "A retailer's AI pilots work technically but employees rarely use them, because the tools sit outside their daily systems and nobody explained the changes. Which capability gaps does this MOST likely show?",
"opts": {
"A": "Data gaps only: the training data was too small, which explains why employees avoid the tools.",
"B": "Process and people gaps: AI was not built into workflows and change management was missing.",
"C": "Governance gaps only: the company needs more approval steps before any new tool is released.",
"D": "Technology gaps only: the models need more parameters before employees will start using them."
},
"fin": [
"B"
],
"expl": "Tools outside daily workflows and no explanation of the change point to process and people gaps. The pilots work technically, so model size (D) and training data (A) aren't the issue; more approval steps (C) wouldn't raise adoption.",
"multi": false
},
{
"id": "CC-054",
"dm": 4,
"domain": "Domain 4：業務就緒、領導力與 AI 轉型（Business Readiness, Leadership, and AI Transformation）24%",
"sub": "成熟度、準備度評估與 PoC→量產轉型",
"code": "CC",
"stem": "A mid-sized retailer at the experimentation stage wants to reach enterprise-scale AI. Its biggest blockers are inconsistent data access and no AI policy. How should it prioritise investment?",
"opts": {
"A": "Spread the budget equally across every possible AI capability so that no area is left behind.",
"B": "Invest first in the most advanced models available, then address data and policy once they are live.",
"C": "Wait until competitors have reached enterprise scale and then copy their investment sequence.",
"D": "Address the blockers first, building data access and policy through a few high-priority use cases."
},
"fin": [
"D"
],
"expl": "Fix the blockers first, and build foundations through real high-priority use cases so each project leaves reusable assets. Advanced models first (B) ignore the blockers; spreading budget evenly (A) dilutes effort; waiting for competitors (C) cedes ground.",
"multi": false
},
{
"id": "CC-055",
"dm": 4,
"domain": "Domain 4：業務就緒、領導力與 AI 轉型（Business Readiness, Leadership, and AI Transformation）24%",
"sub": "資料策略與資料準備度",
"code": "CC",
"stem": "A retailer's churn model performs poorly. Customer purchases, support tickets and loyalty data sit in separate systems owned by different departments that don't share data. What is the MOST effective response?",
"opts": {
"A": "Address the silos with clear data ownership, sharing agreements and integration on a governed platform.",
"B": "Let each department build its own separate churn model, using only the data that it already owns.",
"C": "Ask the data science team to tune the model further using only the purchase data it already has.",
"D": "Replace the churn model with a generative AI chatbot that asks customers whether they plan to leave."
},
"fin": [
"A"
],
"expl": "The model lacks signals locked in silos; data ownership, sharing agreements and integration on a governed platform fix the root cause. Tuning on incomplete data (C) can't add missing signals; a chatbot (D) doesn't predict churn; separate models (B) entrench the silos.",
"multi": false
},
{
"id": "CC-056",
"dm": 4,
"domain": "Domain 4：業務就緒、領導力與 AI 轉型（Business Readiness, Leadership, and AI Transformation）24%",
"sub": "資料策略與資料準備度",
"code": "CC",
"stem": "A retailer finds that nobody fixes data quality problems in its product catalogue, and requests to use the data for AI wait months for approval. Which foundation is MOST clearly missing?",
"opts": {
"A": "A newer foundation model that can automatically repair the errors in any product catalogue data.",
"B": "Clear data ownership and stewardship, with an agreed process for approving data sharing and use.",
"C": "A faster network connection between the catalogue system and the AI development environment.",
"D": "A larger data storage capacity in the cloud so that more copies of the catalogue can be kept."
},
"fin": [
"B"
],
"expl": "When nobody fixes quality and approvals stall, the missing foundation is data ownership and stewardship with a sharing process. Storage (D) and network speed (C) don't assign responsibility; a model can't replace data ownership (A).",
"multi": false
},
{
"id": "CC-057",
"dm": 4,
"domain": "Domain 4：業務就緒、領導力與 AI 轉型（Business Readiness, Leadership, and AI Transformation）24%",
"sub": "成熟度、準備度評估與 PoC→量產轉型",
"code": "CC",
"stem": "A retailer's AI pilots run on individual employees' laptops with copies of customer data, and none can move into production. What should leadership invest in?",
"opts": {
"A": "A policy that bans all AI pilots until the company has replaced its core retail systems.",
"B": "More powerful laptops for each data scientist so pilots can process larger data sets locally.",
"C": "A shared, governed platform with secure data access, repeatable deployment and monitoring.",
"D": "An external agency that runs every pilot on its own servers using copies of customer data."
},
"fin": [
"C"
],
"expl": "Moving from laptop pilots to production needs a shared, governed platform with secure data access, repeatable deployment (MLOps) and monitoring. Bigger laptops (B) keep the problems; a ban (A) stops progress; copying data to an agency (D) adds data risk.",
"multi": false
},
{
"id": "CC-058",
"dm": 4,
"domain": "Domain 4：業務就緒、領導力與 AI 轉型（Business Readiness, Leadership, and AI Transformation）24%",
"sub": "組織變革、人才與溝通",
"code": "CC",
"stem": "A retailer's AI programme has stalled. Each executive funds different AI tools, and employees receive mixed messages about priorities. What is the MOST important leadership action?",
"opts": {
"A": "Hand the programme to the IT department and remove business executives from AI decisions.",
"B": "Announce that AI is a top priority and leave each team to interpret what that should mean for it.",
"C": "Let each executive continue funding their preferred tools to keep the programme moving forward.",
"D": "Appoint an executive sponsor and align the leadership team on a shared AI vision and priorities."
},
"fin": [
"D"
],
"expl": "A visible executive sponsor and an aligned leadership team with a shared vision and priorities fix fragmented funding and mixed messages. Continuing as is (C) keeps the problem; removing business leaders (A) loses business ownership; slogans without alignment (B) don't help.",
"multi": false
},
{
"id": "CC-059",
"dm": 4,
"domain": "Domain 4：業務就緒、領導力與 AI 轉型（Business Readiness, Leadership, and AI Transformation）24%",
"sub": "組織變革、人才與溝通",
"code": "CC",
"stem": "A retailer is forming a team to deploy an AI tool that screens supplier contracts for risk. Which team composition BEST fits?",
"opts": {
"A": "Procurement lead as owner, with technical experts, legal, compliance and some end users.",
"B": "An external vendor only, since vendors have the most experience deploying similar tools.",
"C": "Data scientists and software engineers only, since the tool is a technical project at heart.",
"D": "The procurement team only, since procurement staff will be the main users of the AI tool."
},
"fin": [
"A"
],
"expl": "Cross-functional teams with a business owner, technical experts, legal, compliance and end users, under clear accountability, give AI initiatives the best chance. Technologists alone (C), users alone (D) or a vendor alone (B) miss perspectives.",
"multi": false
},
{
"id": "CC-060",
"dm": 4,
"domain": "Domain 4：業務就緒、領導力與 AI 轉型（Business Readiness, Leadership, and AI Transformation）24%",
"sub": "組織變革、人才與溝通",
"code": "CC",
"stem": "Rumours spread that a retailer's new AI assistant will replace its customer service team, and morale is falling. What should leadership do?",
"opts": {
"A": "Say nothing until the rollout is complete, so that unclear information does not cause worry.",
"B": "Communicate openly on timelines, how roles will change and reskilling plans, with two-way Q and A.",
"C": "Tell employees that questions about AI will be handled by the vendor's support team only.",
"D": "Promise that no one's job or daily work will change, even though some roles will be redesigned."
},
"fin": [
"B"
],
"expl": "Early, honest, two-way communication about timelines, role changes and reskilling builds trust. Silence (A) feeds rumours; false promises (D) destroy credibility; sending questions to a vendor (C) avoids leadership accountability.",
"multi": false
},
{
"id": "CC-061",
"dm": 4,
"domain": "Domain 4：業務就緒、領導力與 AI 轉型（Business Readiness, Leadership, and AI Transformation）24%",
"sub": "組織變革、人才與溝通",
"code": "CC",
"stem": "A retailer's employees avoid trying AI tools because a failed pilot last year led to blame and a cancelled bonus. Which leadership intervention BEST addresses this barrier?",
"opts": {
"A": "Remove all AI tools until employees request them, so that nobody feels any pressure to try.",
"B": "Run pilots in secret so that failures are not visible to managers or to other employees.",
"C": "Create psychological safety: frame pilots as learning with agreed criteria and recognise lessons.",
"D": "Require employees to use AI tools daily, and penalise those who do not reach their usage targets."
},
"fin": [
"C"
],
"expl": "Fear of failure is addressed with psychological safety: learning goals with agreed criteria, recognising lessons and leaders modelling experimentation. Penalties (D) deepen fear; removing tools (A) stalls progress; secret pilots (B) undermine trust.",
"multi": false
},
{
"id": "CC-062",
"dm": 4,
"domain": "Domain 4：業務就緒、領導力與 AI 轉型（Business Readiness, Leadership, and AI Transformation）24%",
"sub": "組織變革、人才與溝通",
"code": "CC",
"stem": "A retailer wants all 15,000 employees to understand AI basics and use approved tools safely within a year. Which TWO approaches BEST support this goal? (Select TWO)",
"opts": {
"A": "A role-based training programme that gives every employee a baseline in AI literacy.",
"B": "Responsible AI training covering acceptable use, data handling and the approved tools.",
"C": "A reading list of AI research papers that employees can study in their own spare time.",
"D": "A deep technical certification course in model training for every store employee.",
"E": "A single hackathon for 50 volunteers from the technology team at the company headquarters."
},
"fin": [
"A",
"B"
],
"expl": "Enterprise-wide literacy needs a role-based training programme (A) and responsible AI training on safe use (B). A hackathon for 50 (E) doesn't reach 15,000; deep technical certification for everyone (D) is the wrong level; optional papers (C) won't build broad literacy.",
"multi": true
},
{
"id": "CC-063",
"dm": 4,
"domain": "Domain 4：業務就緒、領導力與 AI 轉型（Business Readiness, Leadership, and AI Transformation）24%",
"sub": "成熟度、準備度評估與 PoC→量產轉型",
"code": "CC",
"stem": "A retailer's AI returns-processing pilot met its targets in one region. What should happen BEFORE rolling it out to all 600 stores?",
"opts": {
"A": "Copy the pilot set-up exactly to all stores at once, because it already worked in one region.",
"B": "Run the pilot in the same region for another three years to be certain of the long-term results.",
"C": "Rebuild the solution from scratch with a different vendor to confirm the results were not luck.",
"D": "Production readiness: governance approval, security review, monitoring, cost at scale, training."
},
"fin": [
"D"
],
"expl": "Moving from pilot to production-grade needs governance approval, security and privacy review, monitoring and support, unit costs at scale, and training. Copying everywhere (A) skips that work; three more years (B) delays value; rebuilding (C) wastes the success.",
"multi": false
},
{
"id": "CC-064",
"dm": 4,
"domain": "Domain 4：業務就緒、領導力與 AI 轉型（Business Readiness, Leadership, and AI Transformation）24%",
"sub": "組織變革、人才與溝通",
"code": "CC",
"stem": "Several departments at a retailer are building separate AI chatbots with different vendors and no common standards, which duplicates cost and creates inconsistent quality. Which approach BEST addresses this?",
"opts": {
"A": "Ban all chatbots across the company until a single department volunteers to build one for all.",
"B": "Ask the most senior department head to choose one vendor for everything without any consultation.",
"C": "Establish an AI centre of excellence with shared standards and platforms in a hub-and-spoke model.",
"D": "Let each department keep its own chatbot and vendor, since departments know their needs best."
},
"fin": [
"C"
],
"expl": "An AI centre of excellence, often hub-and-spoke, sets shared standards, platforms and reusable components while departments still build for their needs. Keeping things as they are (D) continues duplication; a ban (A) halts value; a unilateral vendor choice (B) skips cross-functional input.",
"multi": false
},
{
"id": "CC-065",
"dm": 4,
"domain": "Domain 4：業務就緒、領導力與 AI 轉型（Business Readiness, Leadership, and AI Transformation）24%",
"sub": "成熟度、準備度評估與 PoC→量產轉型",
"code": "CC",
"stem": "A retailer is expanding its AI assistant from internal use to customers in three new countries. Which TWO factors are MOST important to evaluate during this scaling? (Select TWO)",
"opts": {
"A": "Whether the assistant's name and logo are the same as those used for internal employees.",
"B": "Whether the original pilot team members would like to move to the new countries in person.",
"C": "Fallback processes and phased rollout plans that protect service if the assistant fails.",
"D": "Whether competitors in the new countries have already announced their customer AI assistants.",
"E": "Whether new countries' laws and languages change the risk class and quality of the assistant."
},
"fin": [
"C",
"E"
],
"expl": "Scaling to new countries changes regulatory risk and performance across languages (E) and needs continuity plans with fallbacks and phased rollout (C). Branding (A), relocation preferences (B) and competitor announcements (D) don't decide whether scaling is safe and effective.",
"multi": true
},
{
"id": "CN-005",
"dm": 4,
"domain": "Domain 4：業務就緒、領導力與 AI 轉型（Business Readiness, Leadership, and AI Transformation）24%",
"sub": "組織變革、人才與溝通",
"code": "CN",
"stem": "A global retailer has several successful AI deployments, but each business unit duplicates vendor contracts, builds its own governance processes, and does not share lessons learned. Costs are rising, and results vary widely between units. The executive team wants to scale AI enterprise-wide while preserving business unit agility. Which action BEST meets these goals?",
"opts": {
"A": "Set up an AI center of excellence (COE) for shared standards, guardrails, reusable assets, and metrics, while business units own their use cases.",
"B": "Let each business unit continue independently, and review results annually.",
"C": "Choose the most successful business unit's vendor and AI solution, and require all other units to replicate that solution exactly as built.",
"D": "Centralize all AI development in one corporate team, and require business units to submit requests to that team and wait for its delivery capacity."
},
"fin": [
"A"
],
"expl": "An AI COE provides shared standards, governance guardrails, reusable assets, vendor coordination, and consistent success metrics, which reduces duplication and variable results. A federated (hub-and-spoke) model leaves delivery and ownership with business units, so agility is preserved. Full centralization creates a bottleneck and distances AI from business needs. Continuing independently keeps the duplication and inconsistent governance in place. Replicating one unit's solution everywhere ignores the different needs of each unit and does not create collaboration mechanisms.",
"multi": false
},
{
"id": "CN-007",
"dm": 4,
"domain": "Domain 4：業務就緒、領導力與 AI 轉型（Business Readiness, Leadership, and AI Transformation）24%",
"sub": "組織變革、人才與溝通",
"code": "CN",
"stem": "A manufacturing company's employees are hesitant to use a newly approved generative AI assistant. Interviews show that employees fear being blamed for mistakes the AI makes, and managers have historically penalized failed experiments. Which TWO leadership interventions would BEST address these cultural barriers? (Choose two.)",
"opts": {
"A": "Make use of the AI assistant mandatory and track each employee's individual usage as part of their annual performance review.",
"B": "Restrict the AI assistant to senior staff until the culture changes.",
"C": "Have leaders model the use of AI and openly share their own experiments, including ones that did not work.",
"D": "Replace the assistant with a more accurate model so that mistakes no longer occur.",
"E": "Establish clear guidelines on human review responsibilities and create a safe environment where well-intentioned experiments that fail are treated as learning."
},
"fin": [
"C",
"E"
],
"expl": "The barriers are fear of failure and risk aversion, both reinforced by past management behavior. Leaders who model AI use and share failures signal that experimentation is safe. Clear human review guidelines combined with a learning-oriented approach to failure address the fear of being blamed. Mandatory usage tracking increases fear and encourages superficial compliance. Restricting access to senior staff signals distrust and slows the growth of AI literacy. No model is error free, so chasing accuracy alone does not remove the cultural barrier, and human oversight remains necessary.",
"multi": true
},
{
"id": "CN-008",
"dm": 4,
"domain": "Domain 4：業務就緒、領導力與 AI 轉型（Business Readiness, Leadership, and AI Transformation）24%",
"sub": "組織變革、人才與溝通",
"code": "CN",
"stem": "A global consumer goods company has an AI strategy that the CEO approved, but adoption has stalled. Business unit leaders see AI as an IT project, and promising pilots lose momentum after their initial demonstrations. Which leadership action would MOST effectively sustain momentum across the enterprise?",
"opts": {
"A": "Move ownership of all AI initiatives to the CIO so that a single technical leader is accountable.",
"B": "Mandate that every business unit deploy at least one AI solution within six months.",
"C": "Secure an active executive sponsor who aligns business unit leaders on shared AI objectives, and empower AI champions in each unit.",
"D": "Increase the AI budget so that each pilot has more engineering resources."
},
"fin": [
"C"
],
"expl": "Momentum stalls when business leaders do not own AI outcomes. An active executive sponsor aligns leadership on shared objectives, and champions embedded in each business unit translate the strategy into local action and peer influence. Placing all ownership with the CIO reinforces the view that AI is an IT project. More engineering resources do not fix a lack of business ownership. A deployment mandate without alignment encourages low-value checkbox projects and more resistance.",
"multi": false
},
{
"id": "CN-009",
"dm": 4,
"domain": "Domain 4：業務就緒、領導力與 AI 轉型（Business Readiness, Leadership, and AI Transformation）24%",
"sub": "成熟度、準備度評估與 PoC→量產轉型",
"code": "CN",
"stem": "A logistics company completed an AI readiness assessment. It found strong executive sponsorship and a modern cloud data platform. It also found that no policy defines who approves AI use cases, that business managers cannot tell which problems are good AI candidates, and that no process exists to move a model from pilot to production. Which THREE capability gaps does the assessment reveal? (Choose three.)",
"opts": {
"A": "Technology: the cloud data platform must be replaced with a newer platform that is optimized for AI.",
"B": "People: business managers lack the AI literacy to identify and frame suitable AI use cases.",
"C": "Governance: no defined decision rights, approval criteria, or accountability for AI use cases.",
"D": "Process: there is no repeatable path, with clear criteria and owners, for moving AI solutions from pilot to production.",
"E": "Leadership: the company needs a second executive sponsor to strengthen executive commitment."
},
"fin": [
"B",
"C",
"D"
],
"expl": "Capability gaps are assessed across people, process, technology, and governance. This assessment shows a governance gap (no one owns approval of AI use cases), a people gap (managers cannot recognize good AI candidates), and a process gap (no repeatable path from pilot to production). Closing these gaps lets the company build on the strengths it already has. The technology option targets an area the assessment rated as strong, because the data platform is already modern. Leadership is also a strength, so a second sponsor does not address a gap.",
"multi": true
},
{
"id": "CN-011",
"dm": 4,
"domain": "Domain 4：業務就緒、領導力與 AI 轉型（Business Readiness, Leadership, and AI Transformation）24%",
"sub": "資料策略與資料準備度",
"code": "CN",
"stem": "A bank wants to train a model on ten years of past loan decisions so that it can recommend approvals for new applicants. A line-of-business leader is concerned about relying on historical data. Which risk is MOST important for the leader to raise before training begins?",
"opts": {
"A": "Training on historical data guarantees the model will be accurate for future applicants, so separate validation is unnecessary.",
"B": "Historical data cannot be used for training because models can only learn from data that is collected after the project formally starts.",
"C": "The model will repeat patterns in past decisions, including outdated policies or human biases, unless the data is reviewed.",
"D": "Ten years of data is too much, because models trained on large datasets always overfit."
},
"fin": [
"C"
],
"expl": "Supervised models learn from labeled historical examples, here past loan decisions and their outcomes. The model treats those past decisions as the 'correct' answers, so it reproduces whatever is embedded in them: lending rules that have since changed, economic conditions that no longer apply, or biased human judgments. The data must be reviewed for relevance and representativeness, and results must be validated on data the model has not seen. Historical data is the normal basis for training, so option B is wrong. Large datasets do not automatically cause overfitting; overfitting means memorizing training examples instead of generalizing and is checked with held-out test data. Historical training never guarantees future accuracy, which is why validation and ongoing monitoring are required.",
"multi": false
},
{
"id": "CN-019",
"dm": 4,
"domain": "Domain 4：業務就緒、領導力與 AI 轉型（Business Readiness, Leadership, and AI Transformation）24%",
"sub": "成熟度、準備度評估與 PoC→量產轉型",
"code": "CN",
"stem": "A media company's AI pilot for automated content tagging met its accuracy and time-savings targets in one editorial team. Leadership now wants to roll it out to all 40 editorial teams. The pilot ran without formal monitoring, without a support model, and without a review of content licensing obligations. What should the company do FIRST to move the pilot to production?",
"opts": {
"A": "Run the pilot in the same team for another year to collect more data before any expansion.",
"B": "Define production requirements, including governance approval, licensing review, performance monitoring, ownership, and support, then expand in phases.",
"C": "Roll the pilot out to all 40 teams immediately, because it already met its success targets.",
"D": "Rebuild the solution from scratch with a different AI service before expanding, because pilot code and configurations should never be reused in production."
},
"fin": [
"B"
],
"expl": "Moving from an experiment to production requires governance and operational readiness: compliance and licensing review, monitoring for performance and drift, clear ownership, and support. A phased expansion then manages risk while building on the short-term win. An immediate full rollout carries the pilot's gaps to 40 teams and multiplies the risk. Rebuilding with a different service discards proven value without a reason. Extending the pilot for a year loses momentum and does not address the production requirements that are missing.",
"multi": false
},
{
"id": "CN-020",
"dm": 4,
"domain": "Domain 4：業務就緒、領導力與 AI 轉型（Business Readiness, Leadership, and AI Transformation）24%",
"sub": "成熟度、準備度評估與 PoC→量產轉型",
"code": "CN",
"stem": "A mid-sized bank sits at an early stage of AI maturity. It has a few successful pilots, but its data is fragmented and it has no AI governance policy. The board wants to reach enterprise-wide AI adoption within three years and has approved a limited budget for the first year. How should the bank prioritize its first-year investments?",
"opts": {
"A": "Spend most of the budget on a large, customer-facing generative AI platform that shows the board visible progress quickly in the first year.",
"B": "Defer all AI investment until the data is fully consolidated across every system, and then restart the AI program with a larger budget.",
"C": "Split the budget equally across every business unit so that each unit can pursue its own AI roadmap.",
"D": "Invest in data governance, a lightweight AI policy, and AI literacy, while scaling one or two proven pilots with measurable value."
},
"fin": [
"D"
],
"expl": "Progression pathways should match the current maturity level. An early-stage organization gets the most value by building foundations (data governance, a governance policy, and AI literacy) and by showing value through a small number of proven pilots, which also sustains momentum. A large customer-facing platform skips the foundations and carries high risk with fragmented data and no governance. Equal funding for every unit repeats the fragmentation that kept the bank at an early maturity stage. Waiting for complete data consolidation delays all value, loses momentum, and is rarely needed, because data work can be prioritized around specific high-value use cases.",
"multi": false
},
{
"id": "CN-021",
"dm": 4,
"domain": "Domain 4：業務就緒、領導力與 AI 轉型（Business Readiness, Leadership, and AI Transformation）24%",
"sub": "組織變革、人才與溝通",
"code": "CN",
"stem": "A bank's AI solution now drafts first-pass reviews of routine commercial loan documents, a task that used to take analysts most of their week. Leadership must decide how to redeploy the analysts. Which decision BEST balances human strengths with AI capabilities?",
"opts": {
"A": "Eliminate the analyst roles, because the AI solution now performs the review work.",
"B": "Have the analysts retrain as data scientists so that they can maintain, tune, and retrain the AI model themselves.",
"C": "Move the analysts to validating AI output, handling exceptions, and client work that needs judgment.",
"D": "Keep the analysts reviewing every document manually alongside the AI solution, and ignore the AI output until it has been proven perfect."
},
"fin": [
"C"
],
"expl": "The best transition moves people from manual processing to human oversight and collaboration with AI. Analysts validate AI drafts, handle exceptions that need critical thinking, and invest in client relationships where empathy and judgment matter. Eliminating the roles removes the human oversight that lending decisions need and discards institutional knowledge. Duplicating all the work manually wastes the efficiency gain, and waiting for perfection is unrealistic. Retraining every analyst as a data scientist ignores their business strengths and is not what operating the solution requires.",
"multi": false
},
{
"id": "CN-023",
"dm": 4,
"domain": "Domain 4：業務就緒、領導力與 AI 轉型（Business Readiness, Leadership, and AI Transformation）24%",
"sub": "組織變革、人才與溝通",
"code": "CN",
"stem": "A telecommunications company announced an AI program to automate parts of customer support. Rumors spread that agents will be laid off, morale dropped, and some top performers resigned. The program director must respond. Which action is MOST appropriate?",
"opts": {
"A": "Pause all communication until the AI solution is fully deployed, so that no inaccurate or premature information about job changes is shared with staff.",
"B": "Communicate openly about the timeline, expected outcomes, how roles will change, and available reskilling support, with channels for questions.",
"C": "Delegate all AI communication to each team's frontline supervisors without central guidance.",
"D": "Tell employees that AI will not affect any jobs, so that morale recovers quickly."
},
"fin": [
"B"
],
"expl": "Transparent communication about timelines, expected outcomes, and effects on roles, combined with concrete reskilling support and two-way feedback channels, addresses workforce concerns and rebuilds trust. Silence lets rumors grow and accelerates attrition. Promising that no jobs will be affected might be untrue, and it destroys credibility if roles do change. Leaving communication to supervisors without central guidance produces inconsistent and possibly contradictory messages.",
"multi": false
},
{
"id": "CN-025",
"dm": 4,
"domain": "Domain 4：業務就緒、領導力與 AI 轉型（Business Readiness, Leadership, and AI Transformation）24%",
"sub": "資料策略與資料準備度",
"code": "CN",
"stem": "A healthcare network wants to use patient records from its hospitals to build AI-driven care recommendations. Each hospital treats its data as its own and is reluctant to share it, and legal teams worry about privacy. Which action provides the BEST foundation for this initiative?",
"opts": {
"A": "Establish an enterprise data strategy with clear ownership, stewardship roles, and a data-sharing framework covering permitted uses, privacy, and access.",
"B": "Let each hospital build its own AI model independently, with its own data definitions and standards, and no network-wide coordination or data sharing.",
"C": "Ask each hospital to send its data to a central team immediately so that the AI project can begin.",
"D": "Purchase a third-party patient dataset instead of using internal data."
},
"fin": [
"A"
],
"expl": "A data strategy that defines ownership, stewardship, and a data-sharing framework addresses both the organizational reluctance and the privacy concerns. Each hospital stays accountable for its data, while sharing for approved purposes becomes possible under agreed controls. Collecting data without agreements ignores privacy obligations and erodes trust. Fully independent models with no coordination entrench the silos, duplicate effort, and limit network-wide insights; even privacy-preserving techniques that keep data in place still need agreed ownership, standards, and governance. Third-party data might not represent the network's patients and does not solve the underlying problem of internal data governance.",
"multi": false
},
{
"id": "CN-026",
"dm": 4,
"domain": "Domain 4：業務就緒、領導力與 AI 轉型（Business Readiness, Leadership, and AI Transformation）24%",
"sub": "資料策略與資料準備度",
"code": "CN",
"stem": "A professional services firm plans to roll out a generative AI assistant that answers employee questions by using internal policy documents and project archives. The business sponsor asks which foundational requirements to confirm before launch. Which TWO considerations are MOST important at a strategic level? (Choose two.)",
"opts": {
"A": "Which programming language and front-end framework the development team will use to build the assistant's user interface.",
"B": "Whether the source documents are current, accurate, and have clear owners who keep them up to date.",
"C": "Whether every employee has completed an advanced machine learning certification.",
"D": "Whether access controls ensure that employees receive answers only from documents they are authorized to see.",
"E": "Whether the firm can train its own foundation model from scratch."
},
"fin": [
"B",
"D"
],
"expl": "An assistant grounded in internal documents, such as one that uses Retrieval Augmented Generation (RAG) through Amazon Bedrock Knowledge Bases, is only as good as its sources. Outdated or unowned documents produce wrong answers. Respecting existing document permissions prevents the assistant from exposing confidential project or HR information. The programming language is an implementation detail and not a strategic foundation. Training a foundation model from scratch is unnecessary and costly when managed foundation models with RAG meet the need. Users need basic AI literacy, not advanced ML certifications.",
"multi": true
},
{
"id": "CN-027",
"dm": 4,
"domain": "Domain 4：業務就緒、領導力與 AI 轉型（Business Readiness, Leadership, and AI Transformation）24%",
"sub": "組織變革、人才與溝通",
"code": "CN",
"stem": "A financial services company is forming a team to launch an AI-powered loan pre-qualification tool. Which team structure BEST supports responsible and successful delivery?",
"opts": {
"A": "A cross-functional team of business, technical, legal, compliance, and risk members with clear accountability.",
"B": "A team of data scientists and engineers who build the model first and consult the business only after it is finished.",
"C": "A team of business stakeholders who choose a vendor and leave technical, legal, and compliance review to the vendor.",
"D": "A large steering committee that includes every department head, with shared accountability for outcomes so that no single person carries the risk."
},
"fin": [
"A"
],
"expl": "Lending decisions carry regulatory, fairness, and reputational risk. A cross-functional team with a business owner, technical experts, and legal, compliance, and risk representatives, plus clear accountability, brings the right expertise in from the start. A technical-only team consults the business too late and misses compliance requirements. A vendor cannot take on the company's accountability for regulatory compliance. Shared accountability across a large committee often means no one is accountable, which slows decisions.",
"multi": false
},
{
"id": "CN-028",
"dm": 4,
"domain": "Domain 4：業務就緒、領導力與 AI 轉型（Business Readiness, Leadership, and AI Transformation）24%",
"sub": "資料策略與資料準備度",
"code": "CN",
"stem": "A logistics company trained a model to predict late deliveries. During the pilot, the predictions were poor. An investigation found that 30% of the historical delivery records had missing timestamps, two regional systems recorded 'delivered' with different definitions, and many records were duplicated. The vendor proposes switching to a larger, more advanced algorithm. What should the business strategist recommend first?",
"opts": {
"A": "Collect three more years of records in the current format to increase the volume of training data before retraining.",
"B": "Deploy the current model to production and let users correct its predictions manually as they find errors.",
"C": "Improve data quality (completeness, consistent definitions, de-duplication) before further model work.",
"D": "Accept the vendor proposal, because more advanced algorithms can compensate for missing, inconsistent, and duplicated records."
},
"fin": [
"C"
],
"expl": "A model can only learn the patterns present in its training data ('garbage in, garbage out'). Missing values, inconsistent definitions, and duplicates directly distort what the model learns, so fixing completeness, consistency, and uniqueness is the highest-leverage first step. A more advanced algorithm cannot reliably correct for flawed or contradictory data and adds cost and complexity. Collecting more records in the same flawed format scales up the quality problems instead of solving them. Deploying a model already known to perform poorly shifts the cost to users, erodes trust in AI, and leaves the root cause unaddressed.",
"multi": false
},
{
"id": "CN-029",
"dm": 4,
"domain": "Domain 4：業務就緒、領導力與 AI 轉型（Business Readiness, Leadership, and AI Transformation）24%",
"sub": "成熟度、準備度評估與 PoC→量產轉型",
"code": "CN",
"stem": "A regional insurance company wants to launch its first generative AI initiative. The CEO is enthusiastic, but no one has evaluated whether the organization is prepared. Before the company commits budget to a specific use case, the Chief Strategy Officer asks for a readiness assessment. Which approach gives the MOST complete view of the company's readiness to adopt AI?",
"opts": {
"A": "Assess leadership alignment, data quality, cultural preparedness, technical infrastructure, and governance frameworks.",
"B": "Ask the IT department to confirm that the current cloud environment can host large language models.",
"C": "Benchmark the company's AI spending against that of its three largest competitors.",
"D": "Survey employees about which AI tools they already use and rank the tools by popularity."
},
"fin": [
"A"
],
"expl": "AI readiness is multidimensional. A useful assessment covers leadership alignment, data quality, cultural preparedness, technical infrastructure, and governance, because a gap in any one of these can stall an AI initiative. Benchmarking competitor spending says nothing about the company's own ability to execute. Checking infrastructure covers only one dimension and ignores people, data, and governance. An employee tool survey can reveal shadow AI, but tool popularity is not a readiness assessment.",
"multi": false
},
{
"id": "CN-037",
"dm": 4,
"domain": "Domain 4：業務就緒、領導力與 AI 轉型（Business Readiness, Leadership, and AI Transformation）24%",
"sub": "成熟度、準備度評估與 PoC→量產轉型",
"code": "CN",
"stem": "A healthcare provider plans to move its patient appointment chatbot from a legacy AI vendor platform to a generative AI solution built on Amazon Bedrock. The chatbot handles 40,000 conversations per week. Which considerations should the AI business strategist prioritize when planning the transition? (Choose two.)",
"opts": {
"A": "Business continuity, such as running both platforms in parallel and having a rollback plan if the new solution underperforms.",
"B": "Choosing the transition date based only on when the marketing team can announce the change.",
"C": "Data readiness and cost implications, such as whether conversation history and knowledge content can be migrated and how consumption-based pricing compares with the current contract.",
"D": "Which programming language the engineering team will use to call the new platform.",
"E": "Moving all traffic to the new platform in a single weekend cut-over, to avoid paying for two platforms at the same time during the transition."
},
"fin": [
"A",
"C"
],
"expl": "Key considerations when moving business processes to AI or between AI platforms include business continuity, cost implications, data readiness, and performance impact. A parallel run with a rollback plan protects a high-volume patient-facing service, and checking data migration and the change from a fixed contract to consumption-based pricing protects both quality and budget. The programming language is an implementation detail that is outside the business strategist's scope. Letting a marketing announcement set the date ignores readiness. A single big-bang cut-over saves a little money but creates a large continuity risk for a service with 40,000 weekly conversations.",
"multi": true
},
{
"id": "CN-040",
"dm": 4,
"domain": "Domain 4：業務就緒、領導力與 AI 轉型（Business Readiness, Leadership, and AI Transformation）24%",
"sub": "成熟度、準備度評估與 PoC→量產轉型",
"code": "CN",
"stem": "A retail company has run more than 20 AI proofs of concept (POCs) over two years. Each business unit chose its own tools and vendors, few POCs reached production, and no one tracks business outcomes consistently. Leadership asks where the company sits on an AI maturity model. Which description BEST fits the company's current stage?",
"opts": {
"A": "Enterprise-scale deployment: AI is embedded across business units, because many different teams are actively using it in their work.",
"B": "Unaware: the company has not yet started any AI activity, because POCs do not count as AI adoption.",
"C": "Experimentation: many isolated pilots, but no repeatable path to production and no enterprise-wide coordination or value measurement.",
"D": "Transformational: AI has changed the company's business model, as shown by the large number of initiatives."
},
"fin": [
"C"
],
"expl": "Many disconnected pilots, inconsistent tools, few production deployments, and no consistent value tracking are classic signs of the experimentation stage. Activity alone does not mean maturity. Enterprise-scale deployment requires repeatable delivery to production, shared standards, and measured outcomes, which this company lacks. A transformational stage means AI has reshaped how the business creates value, not that many POCs exist. The company is clearly beyond an unaware stage, because it has invested in and learned from two years of experiments.",
"multi": false
},
{
"id": "CN-049",
"dm": 4,
"domain": "Domain 4：業務就緒、領導力與 AI 轉型（Business Readiness, Leadership, and AI Transformation）24%",
"sub": "成熟度、準備度評估與 PoC→量產轉型",
"code": "CN",
"stem": "A hospitality group's COO proposes an 18-month program to deploy generative AI across reservations, guest services, marketing, and finance all at once, with a single go-live date. The Chief Transformation Officer recommends an iterative approach that progresses through the phases of envision, experiment, launch, and scale. Which plan BEST reflects that iterative approach?",
"opts": {
"A": "Keep the single go-live date, but add a longer user acceptance testing period before launch.",
"B": "Skip the envisioning work and immediately scale a vendor's AI tool across all departments, because a commercial product is already proven elsewhere.",
"C": "Run experiments in every department continuously, and postpone all production launches until the full portfolio of experiments is complete and reviewed.",
"D": "Prioritize a few use cases tied to measurable outcomes, validate them with small experiments, launch the successful ones, then scale and repeat the cycle."
},
"fin": [
"D"
],
"expl": "An iterative transformation approach moves through phases and repeats them: envision (identify and prioritize opportunities tied to business outcomes), experiment (validate value on a small scale), launch (put successful pilots into production and deliver incremental value), and scale (expand proven solutions and make sure benefits are sustained). Each cycle builds evidence and momentum for the next one. The AWS Cloud Adoption Framework (AWS CAF) describes a similar iterative journey of Envision, Align, Launch, and Scale. A single go-live date is a big-bang approach, and more testing does not reduce its concentration of risk. Endless experimentation without launch decisions never delivers production value. Scaling a vendor tool without envisioning skips the prioritization of business outcomes and the validation of value in the company's own context.",
"multi": false
},
{
"id": "CN-052",
"dm": 4,
"domain": "Domain 4：業務就緒、領導力與 AI 轉型（Business Readiness, Leadership, and AI Transformation）24%",
"sub": "組織變革、人才與溝通",
"code": "CN",
"stem": "An insurance company wants to raise AI literacy across 8,000 employees in claims, underwriting, sales, and HR. Most employees have no technical background. The Chief People Officer wants an approach that builds practical skills quickly and also encourages responsible use. Which approach is MOST effective?",
"opts": {
"A": "Train only the IT department in depth and rely on IT staff to answer every employee's questions about using AI.",
"B": "Send all employees to an advanced course on building, training, and tuning machine learning models, regardless of their role.",
"C": "Publish a single AI policy document on the intranet and require every employee to confirm each year that they have read and understood all of it.",
"D": "Combine role-based and responsible AI training with hackathons and small POCs on teams' own work."
},
"fin": [
"D"
],
"expl": "Role-based training makes AI relevant to each function, responsible AI training builds safe habits, and hackathons and small POC programs turn learning into hands-on practice on real problems. This mix accelerates literacy across the enterprise. Technical model-building courses are inappropriate for non-technical staff and do not match their roles. A policy acknowledgment covers awareness but builds no practical skills. Training only IT creates a bottleneck and leaves the business unable to identify or adopt AI opportunities.",
"multi": false
},
{
"id": "CN-065",
"dm": 4,
"domain": "Domain 4：業務就緒、領導力與 AI 轉型（Business Readiness, Leadership, and AI Transformation）24%",
"sub": "成熟度、準備度評估與 PoC→量產轉型",
"code": "CN",
"stem": "A bank ran a six-month generative AI pilot that drafts responses for its loan servicing team. The pilot met its quality targets, but agents use the tool for only 15% of eligible cases. Interviews show the drafts are accurate, but the tool sits in a separate application that agents must switch to. The underlying business case remains strong. What is the MOST appropriate decision for the AI portfolio review?",
"opts": {
"A": "Scale the initiative to all business units immediately to increase total usage.",
"B": "Terminate the initiative, because low adoption after six months proves that the use case has no real business value.",
"C": "Replace the foundation model with a larger model to improve draft quality.",
"D": "Pause scaling, integrate the drafts into the agents' existing tools, and re-measure adoption before deciding to scale."
},
"fin": [
"D"
],
"expl": "Portfolio decisions (scale, pause, or terminate) should follow the evidence. Here the value hypothesis and output quality are confirmed, and the blocker is a fixable workflow problem. Pausing expansion, fixing the integration, and re-measuring adoption protects the investment without scaling a known problem. Terminating would discard a validated use case because of a solvable usability issue. Scaling now would copy the same low adoption across more teams and waste money. A larger model does not help, because quality is not the problem and a larger model would also raise per-request cost.",
"multi": false
},
{
"id": "GD-005",
"dm": 4,
"domain": "Domain 4：業務就緒、領導力與 AI 轉型（Business Readiness, Leadership, and AI Transformation）24%",
"sub": "成熟度、準備度評估與 PoC→量產轉型",
"code": "GD",
"stem": "An industrial manufacturer has a promising AI case-management prototype. The sponsor wants an enterprise launch next quarter, but operations teams have not yet validated workflow changes, ownership, controls, or support requirements across sites. Which transformation approach best manages the uncertainty?",
"opts": {
"A": "Standardize the enterprise architecture and toolset first, then use the completed technical design to determine which business workflows should adopt the capability.",
"B": "Start from the intended business outcome, run bounded experiments, launch under controlled conditions, and scale primarily as evidence clears defined learning and governance gates.",
"C": "Keep the capability in experimentation until most enterprise edge cases are known, then move directly to a company-wide launch with a finalized operating model.",
"D": "Launch across the enterprise with conservative usage limits and rely on weekly reviews and rollback procedures to identify operating-model issues after broad adoption."
},
"fin": [
"B"
],
"expl": "B 正確：從業務成果出發，做有界實驗、受控上線，依學習與治理關卡逐步擴大（envision→experiment→launch→scale）。",
"multi": false
},
{
"id": "GD-010",
"dm": 4,
"domain": "Domain 4：業務就緒、領導力與 AI 轉型（Business Readiness, Leadership, and AI Transformation）24%",
"sub": "組織變革、人才與溝通",
"code": "GD",
"stem": "A university system is preparing to expand AI across administrative services. Frontline users, managers, risk staff, and technical teams will interact with AI differently, and leaders want workforce development that supports safe adoption rather than simple course completion. Which approach is most appropriate? Episode 2 (Q11–20)",
"opts": {
"A": "Concentrate advanced AI training on technical teams and allow managers and business users to learn operational practices through vendor documentation as needs arise.",
"B": "Build role-based literacy and upskilling around real workflows, responsible use, limitations, escalation, and hands-on practice, supported by communities that reinforce learning.",
"C": "Train employees mainly on the current AI products and interfaces so they can become efficient users without spending time on broader AI concepts or governance responsibilities.",
"D": "Require the same annual AI-awareness course for the entire workforce and use a high completion rate as the main evidence that the workforce is ready for broader adoption."
},
"fin": [
"B"
],
"expl": "B 正確：依角色設計識能培訓，結合真實流程、負責任使用、限制、升級機制與實作練習。只看完成率或只訓練技術人員都不足。",
"multi": false
},
{
"id": "GD-011",
"dm": 4,
"domain": "Domain 4：業務就緒、領導力與 AI 轉型（Business Readiness, Leadership, and AI Transformation）24%",
"sub": "資料策略與資料準備度",
"code": "GD",
"stem": "A credit union wants to expand an AI assistant from a controlled pilot into member service and back-office workflows. The records it needs exist, but some sources have inconsistent definitions, restricted ownership, stale fields, and limited access across business silos. Which TWO actions should leaders take before declaring the data ready? (Choose TWO.)",
"opts": {
"A": "Evaluate the required data for quality, representativeness, timeliness, lineage, and authorized accessibility in the context of the intended use case.",
"B": "Prioritize model selection and postpone a broader data assessment until production monitoring shows which quality, ownership, or access constraints materially affect results.",
"C": "Use the number of available source systems and total record volume as the principal readiness score, treating broader coverage as proof that data risk is reduced.",
"D": "Treat cloud-hosted records as operationally ready once they can be queried, while resolving ownership and quality issues during the scaling phase.",
"E": "Resolve material ownership, permission, and silo barriers so the teams and systems responsible for the use case can lawfully use the needed records."
},
"fin": [
"A",
"E"
],
"expl": "A、E 正確：資料就緒需依用例評估品質、代表性、時效、譜系與可授權存取，並排除所有權／權限／孤島障礙。能查詢≠就緒；來源數量與筆數不是就緒指標。",
"multi": true
},
{
"id": "GD-014",
"dm": 4,
"domain": "Domain 4：業務就緒、領導力與 AI 轉型（Business Readiness, Leadership, and AI Transformation）24%",
"sub": "成熟度、準備度評估與 PoC→量產轉型",
"code": "GD",
"stem": "An electric utility plans to extend an AI supply-planning capability to more teams. One region has strong data and leadership support, another lacks clear ownership, and managers report uneven skills and trust in the new workflow. How should the risk committee assess readiness for broader adoption?",
"opts": {
"A": "Assess leadership alignment, data, governance, skills, culture, technology, and operating processes together, then use observed gaps to set the expansion's pace and scope.",
"B": "Focus the readiness decision on platform capacity, integration, and model performance, deferring organizational and workforce gaps until after technical scale is proven.",
"C": "Benchmark the utility against a high-performing competitor and use the competitor's maturity rating as the baseline for deciding whether enterprise rollout is justified.",
"D": "Proceed with rollout across the remaining regions and conduct the readiness assessment afterward, when adoption data will provide a more representative view of organizational capability."
},
"fin": [
"A"
],
"expl": "A 正確：領導力、資料、治理、技能、文化、技術、流程需一併評估，用差距決定擴張節奏與範圍；不應先擴張再評估。",
"multi": false
},
{
"id": "GD-015",
"dm": 4,
"domain": "Domain 4：業務就緒、領導力與 AI 轉型（Business Readiness, Leadership, and AI Transformation）24%",
"sub": "成熟度、準備度評估與 PoC→量產轉型",
"code": "GD",
"stem": "A pharmaceutical company is considering moving an AI-assisted document-review process from its current platform to another provider. The alternative scores better on a benchmark, but the existing workflow has regulated records, trained users, integrations, and service-continuity requirements. What should the portfolio committee evaluate before approving the transition?",
"opts": {
"A": "Move the entire user base in a single cutover to minimize dual-running expense, provided the new platform passes a final technical acceptance test before the cutover date.",
"B": "Use the benchmark improvement as the primary migration criterion and rebuild operating processes afterward, treating model quality as the main driver of long-term value.",
"C": "Compare license and inference costs first, then address data portability, governance, and user adoption primarily when the new platform remains financially attractive.",
"D": "Evaluate continuity, data portability, performance, lifecycle cost, governance, adoption, vendor dependencies, and a tested rollback or fallback path."
},
"fin": [
"D"
],
"expl": "D 正確：轉換平台前應評估連續性、資料可攜、效能、生命週期成本、治理、採用、供應商依賴，並有經測試的回退路徑；benchmark 勝出不夠。",
"multi": false
},
{
"id": "GD-019",
"dm": 4,
"domain": "Domain 4：業務就緒、領導力與 AI 轉型（Business Readiness, Leadership, and AI Transformation）24%",
"sub": "組織變革、人才與溝通",
"code": "GD",
"stem": "A media company is preparing to expand an AI case-management assistant. Employees are asking whether responsibilities will change, what decisions remain human, and how concerns will be handled, while leadership still has uncertainty about the rollout timetable. Which communication approach best supports the change?",
"opts": {
"A": "Explain what is changing, expected role impacts, available support, knowns and uncertainties, and maintain visible channels for questions and feedback.",
"B": "Publish the implementation schedule and training instructions once the rollout date is final, then let managers answer role questions locally as employees raise them.",
"C": "Lead communications with the expected productivity gains and avoid discussing unresolved role questions until leadership can provide definitive answers.",
"D": "Share detailed technical information about the assistant and its evaluation results, allowing employees to infer how the new capability is likely to affect their work."
},
"fin": [
"A"
],
"expl": "A 正確：說明什麼在變、角色影響、支援資源、已知與未知，並提供提問與回饋管道；不確定時更要透明溝通。",
"multi": false
},
{
"id": "GD-024",
"dm": 4,
"domain": "Domain 4：業務就緒、領導力與 AI 轉型（Business Readiness, Leadership, and AI Transformation）24%",
"sub": "組織變革、人才與溝通",
"code": "GD",
"stem": "A hospitality group sees sharply different adoption of the same AI guest-support capability across hotels. Interviews show that some employees fear job loss, some managers still reward the old workflow, and other teams distrust the tool after early quality problems. What should leadership do next?",
"opts": {
"A": "Replace the most skeptical pilot participants with enthusiastic early adopters, then use the stronger adoption results to build momentum before reintroducing resistant teams.",
"B": "Diagnose the specific barriers, such as incentives, trust, fear, or workflow fit, and address each with targeted leadership action, participation, evidence, or safe experimentation.",
"C": "Set mandatory usage targets across the hotel portfolio and make managers accountable for compliance, using adoption data to identify teams that need additional intervention.",
"D": "Increase the enterprise training budget and repeat the same AI curriculum across locations, on the assumption that inconsistent adoption usually indicates insufficient employee knowledge."
},
"fin": [
"B"
],
"expl": "B 正確：先診斷具體阻力（誘因、信任、恐懼、流程適配），再用針對性行動處理；強制或換人只會治標。",
"multi": false
},
{
"id": "GD-028",
"dm": 4,
"domain": "Domain 4：業務就緒、領導力與 AI 轉型（Business Readiness, Leadership, and AI Transformation）24%",
"sub": "資料策略與資料準備度",
"code": "GD",
"stem": "A wholesale distributor is evaluating an AI service assistant. Historical customer and product records contain duplicate accounts, stale classifications, missing fields, and uneven representation of smaller customers. What should the program make a release criterion before broader deployment?",
"opts": {
"A": "Increase model size and context capacity so the system can infer missing or contradictory information from a larger portion of the available source records.",
"B": "Deploy to a larger user population and use complaints and manual corrections as the primary mechanism for discovering which data-quality problems affect outcomes.",
"C": "Measure whether data is sufficiently accurate, complete, relevant, timely, and representative for the intended workflow, and remediate material gaps before scale.",
"D": "Prioritize total data volume and source coverage, on the expectation that a sufficiently large training or retrieval corpus will dilute inaccurate, stale, or biased records."
},
"fin": [
"C"
],
"expl": "C 正確：把資料的準確、完整、相關、時效、代表性列為發布準則並先補缺口；更大模型或更多資料量無法抵消品質問題。",
"multi": false
},
{
"id": "GD-030",
"dm": 4,
"domain": "Domain 4：業務就緒、領導力與 AI 轉型（Business Readiness, Leadership, and AI Transformation）24%",
"sub": "成熟度、準備度評估與 PoC→量產轉型",
"code": "GD",
"stem": "A global manufacturer wants to promote an AI quality-operations pilot into a business-critical production service. The pilot used a small user group and informal support, while the production workflow will span plants and operating hours. What should the steering committee establish before launch? Episode 4 (Q31–40)",
"opts": {
"A": "Preserve the experiment's rapid iteration model by limiting formal governance and release gates until the production team has several months of real operating evidence.",
"B": "Define production ownership, service expectations, governance and security, evaluation and monitoring, support and incident response, cost controls, and change responsibilities.",
"C": "Promote the current pilot configuration after users confirm output quality, while documenting reliability, support, continuity, and escalation processes during the first production phase.",
"D": "Use the pilot's cost and support model as the production baseline, then increase staffing or controls primarily when usage growth creates measurable service problems."
},
"fin": [
"B"
],
"expl": "B 正確：量產前要定義擁有者、服務水準、治理與安全、評估監控、支援與事故處理、成本控制與變更責任。",
"multi": false
},
{
"id": "GD-033",
"dm": 4,
"domain": "Domain 4：業務就緒、領導力與 AI 轉型（Business Readiness, Leadership, and AI Transformation）24%",
"sub": "成熟度、準備度評估與 PoC→量產轉型",
"code": "GD",
"stem": "The legal-services organization's AI pilot in document review and client operations has generated enough interest to reach a decision gate. Before approving further investment, leaders still need a defensible position on factors throughout AI scaling that affect continuity and performance, not simply confidence in the demonstration. What should the business strategist recommend?",
"opts": {
"A": "Assume performance at pilot volume will remain constant as users, data, and workflows diversify across new regions and business units.",
"B": "Measure primarily model latency and uptime during scale, treating governance, cost, and support-load concerns as organizational rather than technical.",
"C": "Scale in controlled stages while monitoring continuity, performance, cost, data capacity, governance, support load, and adoption across business units.",
"D": "Remove the previous process early in the rollout at each business unit to force adoption and avoid duplicate operating cost."
},
"fin": [
"C"
],
"expl": "C 正確：分階段受控擴張，同時監控連續性、效能、成本、資料容量、治理、支援負荷與採用率。",
"multi": false
},
{
"id": "GD-034",
"dm": 4,
"domain": "Domain 4：業務就緒、領導力與 AI 轉型（Business Readiness, Leadership, and AI Transformation）24%",
"sub": "成熟度、準備度評估與 PoC→量產轉型",
"code": "GD",
"stem": "The healthcare network's AI pilot in patient access and clinical administration has generated enough interest to reach a decision gate. Before approving further investment, leaders still need a defensible position on foundational technology and infrastructure requirements for AI initiatives, not simply confidence in the demonstration. Which approach BEST addresses the decision?",
"opts": {
"A": "Have the business strategist select specific cloud services, network topology, and deployment settings before the business-level readiness requirements are agreed.",
"B": "Assess whether the organization has security, integration, data access, identity, scalability, reliability, and cost-management foundations the AI initiative needs.",
"C": "Run the patient-access pilot as a standalone AI workflow and postpone systems-of-record integration until adoption across clinics is proven.",
"D": "Use model benchmark and response-time results as the primary infrastructure readiness gate, assuming existing enterprise controls can be reused unchanged."
},
"fin": [
"B"
],
"expl": "B 正確：評估安全、整合、資料存取、身分、擴展性、可靠性與成本管理等基礎；不應由業務策略師先選技術細節。",
"multi": false
},
{
"id": "GD-041",
"dm": 4,
"domain": "Domain 4：業務就緒、領導力與 AI 轉型（Business Readiness, Leadership, and AI Transformation）24%",
"sub": "資料策略與資料準備度",
"code": "GD",
"stem": "A hospitality group wants several business units to use shared customer and operational data for AI initiatives. The units disagree about ownership, permitted sharing, and who is accountable for data quality. What foundation should leadership establish before scaling the program?",
"opts": {
"A": "Open cross-unit access broadly before classifying customer sensitivity or defining which teams are authorized to reuse each dataset.",
"B": "Make the platform provider the default owner of customer and operational data processed through its hosted systems.",
"C": "Assign accountable data owners and stewards, define quality and access rules, and establish approved mechanisms for cross-unit data sharing.",
"D": "Standardize the storage platform and reporting tools first, and defer decisions about business ownership, stewardship, quality accountability, and reuse rights until later phases."
},
"fin": [
"C"
],
"expl": "C 正確：指派資料所有者與管理者，定義品質與存取規則，並建立核准的跨單位共享機制，再擴大規模。",
"multi": false
},
{
"id": "GD-048",
"dm": 4,
"domain": "Domain 4：業務就緒、領導力與 AI 轉型（Business Readiness, Leadership, and AI Transformation）24%",
"sub": "成熟度、準備度評估與 PoC→量產轉型",
"code": "GD",
"stem": "A public-sector agency's AI readiness assessment for a citizen-services expansion flagged 'no data-quality monitoring capability' as a gap blocking three planned use cases. Before funding a new monitoring capability, the program office asks whether this is a genuine gap or something already available elsewhere in the agency. What should the program office do?",
"opts": {
"A": "Assign the three blocked use cases to different technical teams so each team can decide independently whether to build its own data-quality monitoring capability.",
"B": "Verify whether an existing team or system already performs comparable data-quality monitoring elsewhere in the agency before funding a new capability.",
"C": "Fund the new data-quality monitoring capability without further verification, on the strength of the readiness assessment already identifying it as blocking three use cases.",
"D": "Remove data-quality monitoring from the list of gaps, on the view that a readiness assessment cannot reliably determine whether a true capability gap exists."
},
"fin": [
"B"
],
"expl": "B 正確：投資前先驗證機構內是否已有類似的資料品質監控能力，避免重複建置。",
"multi": false
},
{
"id": "GD-051",
"dm": 4,
"domain": "Domain 4：業務就緒、領導力與 AI 轉型（Business Readiness, Leadership, and AI Transformation）24%",
"sub": "成熟度、準備度評估與 PoC→量產轉型",
"code": "GD",
"stem": "A healthcare network is migrating patient-access AI workflows to a new platform. The new platform can process current cases well, but the team has not yet decided what happens to two years of case history and audit logs that regulators may request. The project manager wants to schedule cutover next month regardless. What should the steering committee require first?",
"opts": {
"A": "Resolve, with compliance input, whether historical case history and audit logs will be migrated, kept accessible in the legacy system, or archived separately, before scheduling cutover.",
"B": "Migrate the current cases needed for near-term operations, and delete the two-year history and audit logs to reduce migration cost and infrastructure duplication.",
"C": "Keep the legacy platform running for the project manager to reference informally, without a documented plan for how the required audit history will be produced if requested.",
"D": "Proceed with the cutover next month as planned, and decide how to handle the two years of case history and audit logs once a regulator specifically requests them."
},
"fin": [
"A"
],
"expl": "A 正確：切換前須在合規參與下決定歷史案件與稽核紀錄要遷移、保留在舊系統或另行封存，因為監管可能調閱。",
"multi": false
},
{
"id": "GD-052",
"dm": 4,
"domain": "Domain 4：業務就緒、領導力與 AI 轉型（Business Readiness, Leadership, and AI Transformation）24%",
"sub": "組織變革、人才與溝通",
"code": "GD",
"stem": "An energy utility's field-operations teams have largely stopped using a new AI-based inspection assistant despite an initial rollout with training and leadership endorsement. Leadership's first instinct is to run additional change-management sessions to rebuild trust. Before investing in more change-management activity, what should leadership confirm?",
"opts": {
"A": "Replace the field teams most vocal about not using the assistant with new hires who have not yet formed an opinion about the tool.",
"B": "Require each field team to log a minimum number of weekly uses of the assistant, treating higher logged usage as evidence that the underlying adoption concern has been resolved.",
"C": "Schedule a second round of change-management workshops right away, treating declining usage after a rollout as a sign that trust-building efforts need to be repeated.",
"D": "Verify whether the assistant's actual output quality and fit for field-inspection tasks are adequate, a check that additional change-management activity cannot substitute for."
},
"fin": [
"D"
],
"expl": "D 正確：先確認工具輸出品質與任務適配度是否足夠；若工具本身不好，再多變革管理也無效。",
"multi": false
},
{
"id": "GD-053",
"dm": 4,
"domain": "Domain 4：業務就緒、領導力與 AI 轉型（Business Readiness, Leadership, and AI Transformation）24%",
"sub": "成熟度、準備度評估與 PoC→量產轉型",
"code": "GD",
"stem": "A regional bank is preparing for a portfolio funding gate on an AI initiative in fraud operations and customer service. Finance and the business owner agree the idea is feasible but disagree on how to address capability gaps across people, process, technology, and governance; the next investment depends on resolving that issue with evidence. Which recommendation is MOST appropriate?",
"opts": {
"A": "Prioritize gaps that are prerequisites for several strategic use cases over isolated, project-by-project fixes across business units.",
"B": "Treat each capability gap as a technical skills problem and route each ticket to the engineering team for a quick fix.",
"C": "Fix primarily the easiest gaps first, tracking the maturity score as the measure of progress each quarter.",
"D": "Buy additional AI licenses and vendor seats before identifying why the current pilots are failing."
},
"fin": [
"A"
],
"expl": "A 正確：優先處理能解鎖多個策略用例的共同前置缺口，而非零散逐案修補或只做最容易的。",
"multi": false
},
{
"id": "GD-059",
"dm": 4,
"domain": "Domain 4：業務就緒、領導力與 AI 轉型（Business Readiness, Leadership, and AI Transformation）24%",
"sub": "成熟度、準備度評估與 PoC→量產轉型",
"code": "GD",
"stem": "A media company's AI audience-recommendation pilot has reached its launch-stage gate. Adoption is strong, but the evidence on incremental revenue impact is mixed: three of five test markets show a lift, and two show no measurable change, with no clear explanation yet for the difference. The steering committee must decide how to proceed.",
"opts": {
"A": "Advance to enterprise scale now, treating strong adoption in most test markets as a sufficient signal that the revenue lift will eventually appear everywhere.",
"B": "Extend the current launch-stage pilot for another year across the five markets without changing the test design, expecting the inconsistency to resolve on its own with more time.",
"C": "Stop the initiative, treating the two of five test markets with no measurable revenue change as proof of a failed gate.",
"D": "Run a targeted follow-up test designed specifically to explain the market-level difference in revenue impact before deciding whether to advance to scale."
},
"fin": [
"D"
],
"expl": "D 正確：成效不一致原因不明時，設計針對性後續測試來解釋差異，再決定是否擴大；不應盲目擴大或無限延長。",
"multi": false
},
{
"id": "GD-062",
"dm": 4,
"domain": "Domain 4：業務就緒、領導力與 AI 轉型（Business Readiness, Leadership, and AI Transformation）24%",
"sub": "成熟度、準備度評估與 PoC→量產轉型",
"code": "GD",
"stem": "A public-sector agency's infrastructure review confirms that current identity management, data access, and reliability foundations are adequate for a citizen-services pilot's current 5,000 monthly users. The planned enterprise rollout would serve 500,000 monthly users across many more integrated systems within a year. The review recommends approving the enterprise rollout based on the pilot-scale findings. What should the steering committee require instead?",
"opts": {
"A": "Re-assess the same foundation dimensions at the rollout's much larger projected scale and integration footprint, not just at pilot volume.",
"B": "Approve the enterprise rollout but require the technical team to select specific cloud services and scaling configurations before the steering committee signs off.",
"C": "Approve the enterprise rollout as recommended, treating the foundational dimensions already assessed, identity, data access, and reliability, as adequate at any user volume.",
"D": "Delay any infrastructure assessment until the enterprise rollout is already underway, relying on real usage data at scale to show which foundations need reinforcement."
},
"fin": [
"A"
],
"expl": "A 正確：基礎能力需在企業規模（50 萬使用者、更多整合）下重新評估，不能沿用試辦規模的結論。",
"multi": false
},
{
"id": "GD-067",
"dm": 4,
"domain": "Domain 4：業務就緒、領導力與 AI 轉型（Business Readiness, Leadership, and AI Transformation）24%",
"sub": "成熟度、準備度評估與 PoC→量產轉型",
"code": "GD",
"stem": "A municipal government's AI pilot in permit processing has generated interest, but leaders must decide how to sequence the next round of investment across business units with very different starting points. Which approach best supports that decision?",
"opts": {
"A": "Sequence investments by strategic priority, current maturity, and dependency order so foundational work precedes specialized capabilities.",
"B": "Apply one uniform investment roadmap across business units even though their starting points differ substantially.",
"C": "Fund the most visible AI feature first, before the foundational data and governance gaps behind it are resolved.",
"D": "Split the investment evenly across maturity dimensions, without regard to strategic priority or dependency order."
},
"fin": [
"A"
],
"expl": "A 正確：依策略優先序、現況成熟度與相依順序排定，基礎工作先於專門能力。",
"multi": false
},
{
"id": "GD-074",
"dm": 4,
"domain": "Domain 4：業務就緒、領導力與 AI 轉型（Business Readiness, Leadership, and AI Transformation）24%",
"sub": "組織變革、人才與溝通",
"code": "GD",
"stem": "A property insurer is redesigning claims work with AI. Employees know some tasks will change, but management has not finalized all role impacts or timelines, and rumors are spreading faster than official information. What communication approach should the transformation team use?",
"opts": {
"A": "Promise that no jobs or responsibilities will change even with the future operating model still undecided.",
"B": "Send a single launch email and treat communication as finished once training sessions begin.",
"C": "Announce mainly productivity targets so employees focus on the business case behind the change.",
"D": "Communicate role impacts, timelines, and open questions transparently and update the message as evidence changes."
},
"fin": [
"D"
],
"expl": "D 正確：透明溝通角色影響、時程與未決問題，並隨證據更新；不要承諾不變或只發一次通知。",
"multi": false
},
{
"id": "GD-076",
"dm": 4,
"domain": "Domain 4：業務就緒、領導力與 AI 轉型（Business Readiness, Leadership, and AI Transformation）24%",
"sub": "資料策略與資料準備度",
"code": "GD",
"stem": "A credit union is preparing for a funding decision on an AI initiative in member service and back office operations. Finance and the business owner disagree on how important data ownership and sharing frameworks are to the initiative's success. Which statement best reflects the principle the team should apply?",
"opts": {
"A": "Let each member-service AI project negotiate data access separately even where ownership rules differ across initiatives.",
"B": "Treat member and operational data as an enterprise capability with named owners, stewardship, and access rules.",
"C": "Broaden data sharing across the credit union before classifying sensitivity or which uses are permitted.",
"D": "Transfer ownership of member data to the AI provider for the duration of processing work."
},
"fin": [
"B"
],
"expl": "B 正確：把會員與營運資料視為企業能力，指定所有者、管理者與存取規則。",
"multi": false
},
{
"id": "GD-078",
"dm": 4,
"domain": "Domain 4：業務就緒、領導力與 AI 轉型（Business Readiness, Leadership, and AI Transformation）24%",
"sub": "資料策略與資料準備度",
"code": "GD",
"stem": "A manufacturer is assessing data for an AI quality program. Some inputs come from fixed database fields such as part numbers and defect codes, while others are technician notes, photographs, and free-form inspection reports. What should the data readiness assessment do?",
"opts": {
"A": "Treat unstructured content as unsuitable for the AI program's data inventory.",
"B": "Inventory both structured systems of record and unstructured content as potential AI inputs.",
"C": "Treat data stored in a database as structured, including free-form documents or images kept there.",
"D": "Exclude structured records from the review when a project uses generative AI."
},
"fin": [
"B"
],
"expl": "B 正確：資料盤點應同時涵蓋結構化系統與非結構化內容（筆記、照片、報告）。",
"multi": false
},
{
"id": "GD-080",
"dm": 4,
"domain": "Domain 4：業務就緒、領導力與 AI 轉型（Business Readiness, Leadership, and AI Transformation）24%",
"sub": "成熟度、準備度評估與 PoC→量產轉型",
"code": "GD",
"stem": "A consumer goods company is scaling an AI capability in brand operations and demand planning. Finance and the business owner agree the idea is sound but disagree on what matters most for continuity and performance during scaling. Which recommendation is most appropriate? Episode 9 (Q81–90)",
"opts": {
"A": "Maintain rollback and contingency plans for critical workflows while confirming performance holds as volume grows.",
"B": "Scale to the remaining business units simultaneously once the pilot meets its own local KPI target.",
"C": "Remove the previous process early in the rollout to force adoption and avoid duplicate systems.",
"D": "Track model latency as the main scaling metric, treating other concerns as organizational, not technical."
},
"fin": [
"A"
],
"expl": "A 正確：擴張時維持關鍵流程的回退與應變計畫，並確認量增後效能仍維持。",
"multi": false
},
{
"id": "GD-082",
"dm": 4,
"domain": "Domain 4：業務就緒、領導力與 AI 轉型（Business Readiness, Leadership, and AI Transformation）24%",
"sub": "組織變革、人才與溝通",
"code": "GD",
"stem": "An AI steering committee at a software provider is reviewing evidence from risk operations. One open question could materially change the rollout decision: how will the organization build cross-functional teams with diverse expertise while keeping accountability clear? Which recommendation is most appropriate?",
"opts": {
"A": "Define decision rights and responsibilities explicitly so cross-functional participation does not dilute accountability.",
"B": "Staff the initiative mainly with technical specialists to reduce coordination overhead.",
"C": "Treat legal and compliance as final-stage reviewers after the business design is already fixed.",
"D": "Assign multiple co-owners for the same outcome so responsibility is distributed evenly across the team."
},
"fin": [
"A"
],
"expl": "A 正確：跨職能團隊需明確定義決策權與責任，以免多人參與稀釋當責。",
"multi": false
},
{
"id": "GD-087",
"dm": 4,
"domain": "Domain 4：業務就緒、領導力與 AI 轉型（Business Readiness, Leadership, and AI Transformation）24%",
"sub": "組織變革、人才與溝通",
"code": "GD",
"stem": "A university system wants AI literacy across executives, managers, analysts and frontline staff. The roles use AI differently and carry different decision responsibilities. Which workforce development approach is most appropriate?",
"opts": {
"A": "Differentiate foundational literacy for the broad population from deeper skills for champions and technical practitioners.",
"B": "Measure training success mainly by course completion rate rather than by changes in behavior or outcomes.",
"C": "Limit formal training to developers and expect business users to pick up AI through unstructured experimentation.",
"D": "Give staff across departments the same advanced technical curriculum, no matter what their day-to-day role requires."
},
"fin": [
"A"
],
"expl": "A 正確：廣泛的基礎識能＋給倡議者與技術人員更深的技能；不應只看完成率或一律上進階課程。",
"multi": false
},
{
"id": "GD-090",
"dm": 4,
"domain": "Domain 4：業務就緒、領導力與 AI 轉型（Business Readiness, Leadership, and AI Transformation）24%",
"sub": "成熟度、準備度評估與 PoC→量產轉型",
"code": "GD",
"stem": "A diversified enterprise has dozens of AI pilots, but inconsistent leadership sponsorship, uneven data ownership, no common governance model, and strong technical capability concentrated in two business units. Which TWO actions best support a readiness assessment before enterprise scaling? (Choose TWO.) Episode 10 (Q91–100)",
"opts": {
"A": "Score maturity mainly by the number of pilots and models already in use.",
"B": "Assume cloud adoption means the enterprise is already AI-ready.",
"C": "Assess leadership, data, culture, technology, skills, process, and governance as separate readiness dimensions.",
"D": "Use a structured framework such as the AWS Cloud Adoption Framework to organize the readiness discussion and surface capability gaps.",
"E": "Move directly to enterprise deployment so readiness gaps become visible under real load."
},
"fin": [
"C",
"D"
],
"expl": "C、D 正確：以個別維度評估準備度，並使用 AWS CAF 等結構化框架找出能力缺口；試辦數量或雲端採用不等於 AI 就緒。",
"multi": true
},
{
"id": "GD-092",
"dm": 4,
"domain": "Domain 4：業務就緒、領導力與 AI 轉型（Business Readiness, Leadership, and AI Transformation）24%",
"sub": "資料策略與資料準備度",
"code": "GD",
"stem": "A grocery chain's demand forecasting AI shows acceptable overall data quality scores, but investigation shows the defects are concentrated in the highest-volume, most profitable product categories. Which TWO actions should the program take? (Choose TWO.)",
"opts": {
"A": "Audit data quality separately for the high-volume, high-profit categories rather than relying on the aggregate score.",
"B": "Continue using the aggregate quality score, treating the overall threshold as sufficient on its own.",
"C": "Prioritize remediation of defects in the categories where errors would have the largest business impact.",
"D": "Wait for a scheduled annual audit to review whether the aggregate score has changed.",
"E": "Add more product categories to the data set so the aggregate score is less influenced by any one category."
},
"fin": [
"A",
"C"
],
"expl": "A、C 正確：對高影響品類單獨稽核資料品質，並優先修復對業務影響最大的缺陷；總體分數會掩蓋集中缺陷。",
"multi": true
},
{
"id": "GD-098",
"dm": 4,
"domain": "Domain 4：業務就緒、領導力與 AI 轉型（Business Readiness, Leadership, and AI Transformation）24%",
"sub": "成熟度、準備度評估與 PoC→量產轉型",
"code": "GD",
"stem": "A hospitality group's AI concierge assistant succeeded in its home market pilot. The rollout team plans to deploy the same configuration to properties in three new countries next quarter using the pilot's rollout plan unchanged. What should the team do instead?",
"opts": {
"A": "Deploy to the country most similar to the home market first, then apply that market's results to justify the other two.",
"B": "Delay deployment in the three new countries until the enterprise-wide governance framework is fully finalized.",
"C": "Assess each new country's data, language, regulatory, and process differences before adapting the rollout plan for deployment.",
"D": "Deploy the pilot's configuration unchanged to the three new countries simultaneously to preserve full consistency."
},
"fin": [
"C"
],
"expl": "C 正確：新國家需先評估資料、語言、法規與流程差異，再調整部署計畫，不能原封不動複製。",
"multi": false
},
{
"id": "GD-099",
"dm": 4,
"domain": "Domain 4：業務就緒、領導力與 AI 轉型（Business Readiness, Leadership, and AI Transformation）24%",
"sub": "成熟度、準備度評估與 PoC→量產轉型",
"code": "GD",
"stem": "A CFO and transformation lead are reviewing a decision memo after a three-month pilot in student services. The technology works, but the next funding release depends on using this limited win to build confidence and learning without treating one pilot as proof the enterprise is ready. Which option provides the strongest business rationale?",
"opts": {
"A": "Choose early use cases that are meaningful, achievable, measurable, and reusable enough to support scaling.",
"B": "Optimize early projects mainly for internal publicity rather than measurable user outcomes or adoption.",
"C": "Select trivial pilots that cannot fail, even if they teach the organization little about enterprise adoption.",
"D": "Duplicate each successful pilot independently across the various business units without building reusable patterns."
},
"fin": [
"A"
],
"expl": "A 正確：早期用例應有意義、可達成、可衡量且可重用以支持擴大；不選無聊必成功或只重複複製。",
"multi": false
},
{
"id": "GD-107",
"dm": 4,
"domain": "Domain 4：業務就緒、領導力與 AI 轉型（Business Readiness, Leadership, and AI Transformation）24%",
"sub": "成熟度、準備度評估與 PoC→量產轉型",
"code": "GD",
"stem": "A healthcare network wants to move several AI pilots into routine operations. A readiness review shows strong executive sponsorship but uneven data stewardship, limited change management capacity, inconsistent governance, and insufficient support skills. What should the transformation team do next?",
"opts": {
"A": "Purchase more AI licenses first and investigate the capability gaps if the next pilot wave also stalls again.",
"B": "Translate readiness findings into gaps across people, process, technology, data, and governance, then link each to the outcome it blocks.",
"C": "Treat each identified capability gap as a technical skills problem and route each one straight to the engineering team for resolution.",
"D": "Fix the easiest gaps first across each business unit so the maturity score improves as quickly as possible."
},
"fin": [
"B"
],
"expl": "B 正確：把準備度發現轉成人／流程／技術／資料／治理缺口，並連結各缺口所阻礙的成果。",
"multi": false
},
{
"id": "GD-112",
"dm": 4,
"domain": "Domain 4：業務就緒、領導力與 AI 轉型（Business Readiness, Leadership, and AI Transformation）24%",
"sub": "資料策略與資料準備度",
"code": "GD",
"stem": "An online retailer has a large data set for customer support and merchandising, but duplicate records, missing outcomes, and inconsistent labels are concentrated in the cases most important to the business. What should the program address first?",
"opts": {
"A": "Make data quality a release criterion by measuring accuracy, completeness, relevance, timeliness, and representativeness for the intended use case.",
"B": "Proceed to enterprise rollout and use user complaints as the primary mechanism for discovering bad data.",
"C": "Exclude domain owners from data quality review, treating quality as mainly a technical infrastructure concern.",
"D": "Focus mainly on the volume of data, on the assumption that a larger data set will offset the inaccurate or biased records."
},
"fin": [
"A"
],
"expl": "A 正確：把資料品質（準確、完整、相關、時效、代表性）列為發布準則；資料量不能彌補品質問題。",
"multi": false
},
{
"id": "GD-114",
"dm": 4,
"domain": "Domain 4：業務就緒、領導力與 AI 轉型（Business Readiness, Leadership, and AI Transformation）24%",
"sub": "組織變革、人才與溝通",
"code": "GD",
"stem": "A public sector agency is automating portions of case review with AI. Employees will no longer perform every manual step, but judgment, exception handling, escalation, and accountability still require people. How should roles be redesigned?",
"opts": {
"A": "Transfer accountability for case decisions away from employees to the AI system directly instead.",
"B": "Keep each existing manual review step even when evidence already shows it adds no value.",
"C": "Use AI mainly as an optional side tool without redesigning the workflow or responsibilities.",
"D": "Redesign work so AI handles repetitive tasks while people retain judgment, empathy, accountability, and oversight."
},
"fin": [
"D"
],
"expl": "D 正確：重新設計工作：AI 處理重複性任務，人保留判斷、同理、當責與監督。",
"multi": false
},
{
"id": "GD-121",
"dm": 4,
"domain": "Domain 4：業務就緒、領導力與 AI 轉型（Business Readiness, Leadership, and AI Transformation）24%",
"sub": "成熟度、準備度評估與 PoC→量產轉型",
"code": "GD",
"stem": "A business leader at a mining company wants to accelerate AI adoption in forecasting, but the transformation office identifies one unresolved prerequisite. The organization must determine how to assess foundational technology and infrastructure requirements for AI initiatives. What should the business strategist recommend?",
"opts": {
"A": "Use forecast model benchmark results as the main evidence that the mining company's entire infrastructure is ready for production scale.",
"B": "Assess whether the organization has security, integration, data access, identity, and cost management foundations needed for the AI operating model.",
"C": "Treat the company's existing cloud landing zone approval as sufficient evidence that this whole forecasting workload is fully ready for production.",
"D": "Have the business strategist choose compute, networking, storage, and monitoring configurations well before the operating requirements are defined."
},
"fin": [
"B"
],
"expl": "B 正確：評估安全、整合、資料存取、身分與成本管理等基礎；基準分數或既有 landing zone 不足以證明量產就緒。",
"multi": false
},
{
"id": "GD-122",
"dm": 4,
"domain": "Domain 4：業務就緒、領導力與 AI 轉型（Business Readiness, Leadership, and AI Transformation）24%",
"sub": "資料策略與資料準備度",
"code": "GD",
"stem": "A nonprofit organization is converting a promising AI experiment in knowledge work into an operational capability. Before launch, leaders ask for the best business-level approach to evaluate data readiness, including quality, accessibility, and silos. What should the steering committee do first?",
"opts": {
"A": "Copy silo data into an ad hoc project repository without first addressing access permissions or clear data stewardship.",
"B": "Count the total number of available data sources as the primary measure of readiness for launch across the organization.",
"C": "Assess whether required data is accurate, representative, accessible, timely, and connected across silos for this use case.",
"D": "Assume data is ready whenever it is stored in the cloud, without accounting for quality or ownership status."
},
"fin": [
"C"
],
"expl": "C 正確：評估所需資料是否準確、具代表性、可存取、時效，並能跨孤島串接；上雲不等於就緒。",
"multi": false
},
{
"id": "GD-124",
"dm": 4,
"domain": "Domain 4：業務就緒、領導力與 AI 轉型（Business Readiness, Leadership, and AI Transformation）24%",
"sub": "成熟度、準備度評估與 PoC→量產轉型",
"code": "GD",
"stem": "A furniture manufacturer finds that a data labeling gap affects just its returns prediction use case, while a separate identity and access gap blocks three planned AI use cases at once. The transformation budget cannot fund both fixes this year. How should leaders decide?",
"opts": {
"A": "Fund the labeling gap first, based on its earlier identification in the readiness review ahead of the identity and access gap.",
"B": "Delay both fixes until the next annual planning cycle produces a single combined foundational investment plan for both current gaps.",
"C": "Split the budget evenly between the two fixes, independent of how many downstream use cases each one actually unblocks.",
"D": "Fund the identity and access fix first as a shared investment unblocking multiple use cases, then fund the labeling gap when budget allows."
},
"fin": [
"D"
],
"expl": "D 正確：先資助能同時解鎖多個用例的共享基礎（身分與存取），再處理只影響單一用例的標註缺口。",
"multi": false
},
{
"id": "GD-127",
"dm": 4,
"domain": "Domain 4：業務就緒、領導力與 AI 轉型（Business Readiness, Leadership, and AI Transformation）24%",
"sub": "成熟度、準備度評估與 PoC→量產轉型",
"code": "GD",
"stem": "A parcel delivery network is replacing its legacy route optimization AI with a new platform. The vendor's published benchmarks show the new platform outperforming the old one. Before committing to full cutover, what should the network do?",
"opts": {
"A": "Cut over to the new platform network-wide using the vendor's published benchmark results as the deciding evidence.",
"B": "Cut over first in the region with the network's newest facilities, treating it as best positioned to adapt to platform issues.",
"C": "Run the new platform in parallel against the legacy platform on live routes and use that comparison as the cutover gate.",
"D": "Delay any final decision until the vendor publishes an additional round of updated benchmark results for this route network."
},
"fin": [
"C"
],
"expl": "C 正確：在實際路線上與舊平台並行比較，以此作為切換關卡，而非只看廠商 benchmark。",
"multi": false
},
{
"id": "GD-131",
"dm": 4,
"domain": "Domain 4：業務就緒、領導力與 AI 轉型（Business Readiness, Leadership, and AI Transformation）24%",
"sub": "組織變革、人才與溝通",
"code": "GD",
"stem": "An agricultural cooperative rolled out an AI literacy program for grain marketing and field agronomy staff. 90% of employees completed the required e-learning modules, but managers report almost no one is using the approved AI tools in daily decisions. How should the program define success going forward?",
"opts": {
"A": "Lower the completion target so the remaining teams can finish the required e-learning modules by the year-end deadline.",
"B": "Survey employees on how confident they feel about AI and treat rising confidence scores as proof the program is working.",
"C": "Track whether staff apply AI in real grain marketing and agronomy decisions using adoption data and manager feedback.",
"D": "Continue treating module completion rate as the primary success measure and add more modules for teams below target."
},
"fin": [
"C"
],
"expl": "C 正確：成功指標應看員工是否在真實決策中應用 AI（採用資料與主管回饋），而非完成率或信心問卷。",
"multi": false
},
{
"id": "GD-135",
"dm": 4,
"domain": "Domain 4：業務就緒、領導力與 AI 轉型（Business Readiness, Leadership, and AI Transformation）24%",
"sub": "組織變革、人才與溝通",
"code": "GD",
"stem": "A company is preparing employees for an AI-enabled redesign of customer operations. Leadership knows some roles will change, but timing and final staffing impacts are not yet fully known. Which communication approach is most likely to build trust?",
"opts": {
"A": "Announce productivity targets so employees focus on the business case as the company evaluates adoption.",
"B": "Avoid discussing role impacts or timelines until deployment is fully complete, to prevent employee resistance early.",
"C": "Send a single announcement at launch and consider workforce communication complete once training starts.",
"D": "Communicate what is changing, expected timelines, role impacts, and support available, and name what remains uncertain."
},
"fin": [
"D"
],
"expl": "D 正確：說明改變內容、時程、角色影響與支援，並坦承尚未確定之處，才能建立信任。",
"multi": false
},
{
"id": "GD-137",
"dm": 4,
"domain": "Domain 4：業務就緒、領導力與 AI 轉型（Business Readiness, Leadership, and AI Transformation）24%",
"sub": "組織變革、人才與溝通",
"code": "GD",
"stem": "A food producer's AI pilot in quality assurance and procurement has generated enough interest to reach a decision gate. Before approving further investment, leaders want a defensible position on how to establish an AI center of excellence and cross-functional collaboration. Which TWO actions are most appropriate? (Choose TWO.)",
"opts": {
"A": "Let each business unit define its own governance independently so innovation stays fully decentralized.",
"B": "Centralize AI delivery in the center of excellence so business units do not own outcomes.",
"C": "Use the center of excellence to provide reusable standards, expertise, governance patterns, and shared learning while business ownership stays with the use case.",
"D": "Design the center of excellence as an enabling hub with federated collaboration rather than a bottleneck that owns most AI decisions directly.",
"E": "Have the center of excellence focus mainly on selecting preferred models and tools."
},
"fin": [
"C",
"D"
],
"expl": "C、D 正確：CoE 應是提供可重用標準、專長與治理模式的賦能中心，採聯邦式協作，業務單位仍負責用例成果；不是瓶頸或集中擁有決策。",
"multi": true
},
{
"id": "GD-144",
"dm": 4,
"domain": "Domain 4：業務就緒、領導力與 AI 轉型（Business Readiness, Leadership, and AI Transformation）24%",
"sub": "成熟度、準備度評估與 PoC→量產轉型",
"code": "GD",
"stem": "A regional bank has several promising AI pilots but limited organizational confidence in enterprise adoption. Leadership wants to demonstrate value quickly without treating an early win as proof that every use case is ready to scale. How should the program use short-term wins?",
"opts": {
"A": "Duplicate each successful pilot independently across business units without building reusable patterns from it.",
"B": "Select pilots that cannot fail, even if they teach the organization nothing about enterprise adoption.",
"C": "Use early wins to validate patterns and inform the next wave, not as isolated demos.",
"D": "Choose the largest enterprise process as the first pilot so its success proves scalability."
},
"fin": [
"C"
],
"expl": "C 正確：把早期成功作為驗證模式並指引下一波，而非孤立展示。",
"multi": false
},
{
"id": "GD-146",
"dm": 4,
"domain": "Domain 4：業務就緒、領導力與 AI 轉型（Business Readiness, Leadership, and AI Transformation）24%",
"sub": "組織變革、人才與溝通",
"code": "GD",
"stem": "A nonprofit network is rolling out AI-assisted case management. In the first two weeks, staff have received a program announcement from the executive director, a separate FAQ from IT with different timeline details, and a team memo from their direct manager that contradicts both on which cases are affected. What should the network fix before continuing the rollout?",
"opts": {
"A": "Assign one accountable owner, such as the program sponsor, as the single source for rollout messages.",
"B": "Pause further communication until the rollout is complete, to avoid adding more contradictions for staff to sort through.",
"C": "Have IT take over future rollout messaging as the function that manages the underlying system.",
"D": "Let each department continue issuing its own updates so staff can ask their own manager for details."
},
"fin": [
"A"
],
"expl": "A 正確：指定單一當責者（如專案贊助人）作為統一的訊息來源，避免互相矛盾。",
"multi": false
},
{
"id": "SP-004",
"dm": 4,
"domain": "Domain 4：業務就緒、領導力與 AI 轉型（Business Readiness, Leadership, and AI Transformation）24%",
"sub": "資料策略與資料準備度",
"code": "SP",
"stem": "A retail bank's chief data officer is drafting the data strategy behind a generative AI programme. Customer records sit in a warehouse, contracts and call transcripts sit in separate document stores, and each is governed by a different team. What does the AWS Well-Architected Generative AI Lens set out as the strategic imperative here?",
"opts": {
"A": "Copy everything into one relational warehouse and retire the unstructured sources, which generative AI cannot make use of.",
"B": "Keep structured and unstructured data in separate systems, so that each can stay under the governance of its current owning team.",
"C": "Defer real-time ingestion and regulatory compliance until after the unified system has been delivered.",
"D": "Break down data silos with a unified system that integrates structured and unstructured data across the organisation."
},
"fin": [
"D"
],
"expl": "AWS Well-Architected 生成式 AI 鏡頭的策略要務是打破資料孤島、整合結構化與非結構化資料；A 要求淘汰非結構化資料、B 維持孤島、C 延後合規，皆與要務相反。",
"multi": false
},
{
"id": "SP-008",
"dm": 4,
"domain": "Domain 4：業務就緒、領導力與 AI 轉型（Business Readiness, Leadership, and AI Transformation）24%",
"sub": "組織變革、人才與溝通",
"code": "SP",
"stem": "A bank's chief data officer is designing how the organisation will grow its machine learning workforce. Which of the following does the AWS Well-Architected Machine Learning Lens list as common anti-patterns in developing the right skills with accountability and empowerment?",
"opts": {
"A": "Running immersion days and hackathons so teams can expand their ML knowledge",
"B": "Focusing only on technical skills while ignoring ethical considerations",
"C": "Creating siloed ML teams without cross-functional collaboration",
"D": "Hiring ML specialists without a continuous learning plan",
"E": "Providing sandboxed environments for experimentation without risk to production",
"F": "Establishing an AI ethics board with legal, IT and business representatives"
},
"fin": [
"B",
"C",
"D"
],
"expl": "題目問的是「反模式」：只重技術忽略倫理、孤立的 ML 團隊、聘專家卻無持續學習計畫（B、C、D）；A、E、F 都是良好實務。",
"multi": true
},
{
"id": "SP-010",
"dm": 4,
"domain": "Domain 4：業務就緒、領導力與 AI 轉型（Business Readiness, Leadership, and AI Transformation）24%",
"sub": "資料策略與資料準備度",
"code": "SP",
"stem": "A bank's data council built its data strategy around curated, labelled tables for credit-scoring models, and now asks what has to change before generative AI work starts. According to AWS prescriptive guidance on data strategy for generative AI, what is the fundamental shift?",
"opts": {
"A": "Generative AI works only on numeric tabular records, so text and images have to be converted to columns first.",
"B": "Generative AI removes the need for a data strategy, because the model already carries general knowledge.",
"C": "Generative AI leans on large volumes of unstructured, multimodal data that is often unlabelled.",
"D": "Generative AI needs the same structured, labelled tables as before, only a larger number of them."
},
"fin": [
"C"
],
"expl": "基本轉變是生成式 AI 依賴大量非結構化、多模態且常未標註的資料（C）；與 AWS 資料策略指南原文一致。",
"multi": false
},
{
"id": "SP-012",
"dm": 4,
"domain": "Domain 4：業務就緒、領導力與 AI 轉型（Business Readiness, Leadership, and AI Transformation）24%",
"sub": "資料策略與資料準備度",
"code": "SP",
"stem": "The chief data officer of a supermarket chain is completing the data strategy section of the AWS generative AI workload assessment. Which statements about that section are correct?",
"opts": {
"A": "It expects one overall data score, so there is no separate question about how much data meets quality standards.",
"B": "It asks how the organisation ensures and measures data quality, and names completeness, accuracy, consistency and timeliness as example metrics.",
"C": "Documentation is deferred until after deployment, so the section does not ask about data catalogues or lineage.",
"D": "It asks how comprehensive the organisation's documentation of data sources and lineage is.",
"E": "Because stakeholder trust is a communications matter, the section asks nothing about how trust in data usage will be built.",
"F": "It asks what percentage of the organisation's data meets its quality standards for generative AI use."
},
"fin": [
"B",
"D",
"F"
],
"expl": "工作負載評估的資料策略章節確實詢問：如何確保與衡量資料品質（含完整性、準確性、一致性、時效性）、文件化與譜系完整度、符合品質標準的資料百分比（B、D、F）；A、C、E 皆聲稱章節「沒問」某主題，與事實相反。",
"multi": true
},
{
"id": "SP-016",
"dm": 4,
"domain": "Domain 4：業務就緒、領導力與 AI 轉型（Business Readiness, Leadership, and AI Transformation）24%",
"sub": "資料策略與資料準備度",
"code": "SP",
"stem": "An airline's chief data officer interviews business units about data availability, following the AWS data strategy guide. One unit says it runs its own cleansing process before using any data and cannot share the data products it builds with other units. What do these answers reveal?",
"opts": {
"A": "Unassured upstream quality and siloed data products, exactly the gaps the interview is meant to surface",
"B": "The gaps are purely technical and will disappear once a new warehouse is purchased",
"C": "The unit is fully data-ready, since cleansing data itself proves it controls quality",
"D": "The unit holds more storage than it needs and should simply be charged back for the surplus capacity"
},
"fin": [
"A"
],
"expl": "「自行清理資料、資料產品無法與他單位共享」揭露上游品質未受保證與資料產品孤島（A）。",
"multi": false
},
{
"id": "SP-017",
"dm": 4,
"domain": "Domain 4：業務就緒、領導力與 AI 轉型（Business Readiness, Leadership, and AI Transformation）24%",
"sub": "成熟度、準備度評估與 PoC→量產轉型",
"code": "SP",
"stem": "A bank is preparing a generative AI proof of concept that would draw on real customer correspondence. Which practices belong to the data-readiness checklist that AWS gives for a proof of concept?",
"opts": {
"A": "Assess the integration landscape and non-functional requirements such as privacy, scalability and maintainability.",
"B": "Catalogue all relevant data sources and assess their accessibility, reliability and integration complexity.",
"C": "Choose between commercial, self-hosted and open source interfaces on the basis of privacy, compliance, cost and customisation.",
"D": "Obtain explicit approval from information security and legal teams before ingesting real data that contains sensitive or personally identifiable information.",
"E": "Default to synthetic or fully anonymised data.",
"F": "Confirm that the team has the technical skills for model evaluation, optimisation and adversarial input handling."
},
"fin": [
"B",
"D",
"E"
],
"expl": "依 AWS PoC 指引「Validating data readiness」檢查表：資料清冊與存取（B）、隱私優先且預設用合成／匿名資料（E）、使用含 PII 真實資料前須取得資安與法務明確核准（D）。A、C、F 屬同文件「技術可行性」段落，不在資料就緒檢查表。影片原答 B,E,F 與先前人工檢查 A,B,D 皆不完全正確。",
"multi": true
},
{
"id": "SP-020",
"dm": 4,
"domain": "Domain 4：業務就緒、領導力與 AI 轉型（Business Readiness, Leadership, and AI Transformation）24%",
"sub": "成熟度、準備度評估與 PoC→量產轉型",
"code": "SP",
"stem": "The machine learning platform lead at a financial services firm is planning how the organisation will progress along the MLOps maturity journey described in AWS guidance. Which statement about the first two stages is correct?",
"opts": {
"A": "The Initial stage standardises code repositories and adopts a multi-account approach, and the Repeatable stage then sets up the first experimentation account.",
"B": "The journey begins with the Repeatable stage, and the Initial stage follows once code repositories have been standardised.",
"C": "The Initial stage establishes an experimentation account, and the Repeatable stage standardises code repositories and solution development and adopts a multi-account approach.",
"D": "Both stages are concerned only with production deployment, so no experimentation account is created at any stage."
},
"fin": [
"C"
],
"expl": "MLOps 成熟度：Initial 階段建立實驗帳號；Repeatable 階段標準化程式碼庫與解決方案開發並採多帳號（C）。",
"multi": false
},
{
"id": "SP-034",
"dm": 4,
"domain": "Domain 4：業務就緒、領導力與 AI 轉型（Business Readiness, Leadership, and AI Transformation）24%",
"sub": "成熟度、準備度評估與 PoC→量產轉型",
"code": "SP",
"stem": "A readiness assessment scores a firm four out of five on leadership alignment, data quality, cultural preparedness and technical infrastructure, and two out of five on governance. An executive proposes averaging the five scores, reporting the firm as ready, and proceeding to a customer-facing deployment. What is wrong with this approach?",
"opts": {
"A": "Readiness scores should be weighted, by the cost of improving each dimension, before any average is taken.",
"B": "Readiness dimensions are not interchangeable, so a weak governance score is not offset by strong scores elsewhere.",
"C": "Readiness should be judged against competitor scores, rather than against an internally defined five-point scale.",
"D": "Readiness assessments should be repeated quarterly, so a single assessment cannot support a deployment decision."
},
"fin": [
"B"
],
"expl": "B 正確：準備度各維度不可互相抵銷，治理偏弱不能被其他高分平均掉。",
"multi": false
},
{
"id": "SP-035",
"dm": 4,
"domain": "Domain 4：業務就緒、領導力與 AI 轉型（Business Readiness, Leadership, and AI Transformation）24%",
"sub": "成熟度、準備度評估與 PoC→量產轉型",
"code": "SP",
"stem": "A group reports that it has reached scaling maturity, citing twelve AI capabilities running in production. Each was built by a different external partner, no internal team can modify any of them, and every change request requires a new statement of work and a procurement cycle averaging eleven weeks. Which two assessments are best supported?",
"opts": {
"A": "The group has reached scaling maturity, because twelve production capabilities is the defining evidence of that stage.",
"B": "The group should engage additional partners so that change requests can be spread across a wider supplier base.",
"C": "The capability sits with partners rather than the group, so maturity is lower than the count suggests.",
"D": "The group should return to running pilots until it can demonstrate a repeatable internal delivery pattern once again.",
"E": "The next investment should be internal capability to operate and change the systems the group already runs."
},
"fin": [
"C",
"E"
],
"expl": "C、E 正確：能力握在外部夥伴手中，成熟度比數量顯示的低；下一步應投資內部營運與變更能力。",
"multi": true
},
{
"id": "SP-036",
"dm": 4,
"domain": "Domain 4：業務就緒、領導力與 AI 轉型（Business Readiness, Leadership, and AI Transformation）24%",
"sub": "資料策略與資料準備度",
"code": "SP",
"stem": "A retailer's data sits in one governed warehouse, is well documented, and passes quality checks. The proposed AI use case needs to react within minutes of a customer action. The warehouse refreshes overnight, and it holds daily aggregates rather than the individual events the model would need. Which two data readiness problems does this describe?",
"opts": {
"A": "Timeliness, because an overnight refresh cannot support a decision that must be made within minutes.",
"B": "Quality, because the documented checks in the warehouse are not sufficient for an AI workload.",
"C": "Accessibility, because the governed warehouse restricts which teams are permitted to query its contents.",
"D": "Granularity, because daily aggregates cannot reconstruct the individual events the use case depends on.",
"E": "Fragmentation, because the data the use case needs is spread across several unconnected systems."
},
"fin": [
"A",
"D"
],
"expl": "A、D 正確：隔夜更新無法支援分鐘級決策（時效），且僅有日彙總無法還原個別事件（粒度）。",
"multi": true
},
{
"id": "SP-037",
"dm": 4,
"domain": "Domain 4：業務就緒、領導力與 AI 轉型（Business Readiness, Leadership, and AI Transformation）24%",
"sub": "成熟度、準備度評估與 PoC→量產轉型",
"code": "SP",
"stem": "A company has completed three controlled experiments, each of which met its success criteria. Leadership proposes moving straight to deployment across all twenty-two operating countries, on the basis that the approach has already been proven three times and further intermediate steps would only delay the benefit. What should the business strategist advise?",
"opts": {
"A": "Run a further set of experiments in other countries before considering any live deployment at all.",
"B": "Launch in a limited live setting first, because an experiment proves feasibility and not operability at scale.",
"C": "Proceed to all twenty-two countries, since three successful experiments have already established sufficient evidence of this.",
"D": "Proceed to all twenty-two countries with a larger budget so that problems can be resolved as they emerge."
},
"fin": [
"B"
],
"expl": "B 正確：實驗證明可行性，不證明可大規模營運；應先限量實際上線。",
"multi": false
},
{
"id": "SP-038",
"dm": 4,
"domain": "Domain 4：業務就緒、領導力與 AI 轉型（Business Readiness, Leadership, and AI Transformation）24%",
"sub": "組織變革、人才與溝通",
"code": "SP",
"stem": "A group established an AI center of excellence two years ago and required all AI work to be built by it. The center now has a nine-month delivery queue, three business units have quietly commissioned external suppliers, and unit leaders describe the center as the main obstacle to getting anything delivered. What should the business strategist recommend?",
"opts": {
"A": "Expand the center's headcount, until its delivery queue reaches a length that business units find acceptable.",
"B": "Prioritize the center's queue by the size of each requesting unit's budget so that funding determines sequence.",
"C": "Reposition the center to set standards and supply reusable patterns, with business units delivering their own work.",
"D": "Disband the center and allow each business unit to select its own tools, patterns and delivery suppliers."
},
"fin": [
"C"
],
"expl": "C 正確：把 CoE 重新定位為制定標準與提供可重用模式，由業務單位自行交付，解決瓶頸。",
"multi": false
},
{
"id": "SP-040",
"dm": 4,
"domain": "Domain 4：業務就緒、領導力與 AI 轉型（Business Readiness, Leadership, and AI Transformation）24%",
"sub": "成熟度、準備度評估與 PoC→量產轉型",
"code": "SP",
"stem": "An insurer plans to move a live claims triage assistant to a different AI platform on price grounds. The incumbent assistant has been tuned over eighteen months using adjuster feedback, and that accumulated tuning is not portable. The vendor's benchmark shows the new platform outperforming a general baseline. Which two issues must the transition plan resolve before cutover?",
"opts": {
"A": "The breadth of client libraries the new platform publishes for the languages the insurer's engineers already use.",
"B": "The accumulated tuning is an asset, so the plan must budget time to re-establish equivalent quality.",
"C": "The proportion of the new platform's other customers, in the insurance sector rather than elsewhere, currently live.",
"D": "The comparison must be against the tuned incumbent in production, not the general baseline the vendor published.",
"E": "The marketing plan for announcing the new platform, to adjusters and to the insurer's broker network."
},
"fin": [
"B",
"D"
],
"expl": "B、D 正確：累積的調校是資產，需預留時間重建品質；且須與已調校的在線舊系統比較，而非通用基準。",
"multi": true
}
];
