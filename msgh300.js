// GH-300 題庫（ExamTopics 擷取，共 124 題）。flag: red=社群投票<70%、yellow=70-89%非全票
const QUESTIONS = [
 {
  "id": 1,
  "topic": "Responsible AI",
  "type": "mcq",
  "options": {
   "A": "Privacy and Security",
   "B": "Fairness",
   "C": "Reliability and Safety",
   "D": "Inclusiveness"
  },
  "answer": [
   "B"
  ],
  "stem": "Which Microsoft ethical AI principle is aimed at ensuring AI systems treat all people equally?",
  "votes": "B 100%"
 },
 {
  "id": 2,
  "topic": "Responsible AI",
  "type": "mcq",
  "options": {
   "A": "Collect massive amounts of data for training.",
   "B": "Focus on accuracy of the data.",
   "C": "Use diverse data, fairness metrics, and human oversight.",
   "D": "Improve on the computational efficiency and speed."
  },
  "answer": [
   "C"
  ],
  "stem": "What can be done during AI development to minimize bias?",
  "votes": "C 100%"
 },
 {
  "id": 3,
  "topic": "Responsible AI",
  "flag": "yellow",
  "flagVotes": "A 73%、C 27%",
  "type": "mcq",
  "options": {
   "A": "Ensuring code security prevents unauthorized access and potential data breaches.",
   "B": "Ensuring code security enables the AI system to handle larger datasets effectively.",
   "C": "Ensuring code security maintains the integrity of the AI system.",
   "D": "Ensuring code security supports the development of more advanced AI features."
  },
  "answer": [
   "A"
  ],
  "stem": "Why is it important to ensure the security of the code used in Generative AI (Gen AI) tools?",
  "votes": "A 73%、C 27%"
 },
 {
  "id": 4,
  "topic": "Responsible AI",
  "type": "mcq",
  "options": {
   "A": "By providing clear explanations about the types of content the AI is designed to filter and how it arrives at its conclusion.",
   "B": "By relying on a well-regarded AI development company.",
   "C": "By regularly updating the AI filtering algorithm.",
   "D": "By focusing on user satisfaction with the content filtering"
  },
  "answer": [
   "A"
  ],
  "stem": "A social media manager wants to use AI to filter content. How can they promote transparency in the platform’s AI operations?",
  "votes": "A 100%"
 },
 {
  "id": 5,
  "topic": "Responsible AI",
  "type": "mcq",
  "options": {
   "A": "It primarily relies on the model’s training data to generate responses.",
   "B": "It combines its training data set, code in user repositories, and external sources like Bing to generate responses.",
   "C": "It uses user-provided documentation and exclusively to generate responses.",
   "D": "It primarily uses search results from Bing to generate responses."
  },
  "answer": [
   "B"
  ],
  "stem": "How does GitHub Copilot Chat utilize its training data and external sources to generate responses when answering coding questions?",
  "votes": "B 100%"
 },
 {
  "id": 6,
  "topic": "Responsible AI",
  "type": "mcq",
  "options": {
   "A": "Fairness",
   "B": "Accountability",
   "C": "Transparency",
   "D": "Inclusiveness"
  },
  "answer": [
   "C"
  ],
  "stem": "Which principle emphasizes that AI systems should be understandable and provide clear information on how they work?",
  "votes": "C 100%"
 },
 {
  "id": 7,
  "topic": "Responsible AI",
  "type": "mcq",
  "options": {
   "A": "AI replaces the need for developer opportunities in most fields.",
   "B": "AI eliminated the need for data privacy regulations.",
   "C": "AI algorithms are incapable of perpetuating existing biases.",
   "D": "AI systems can sometimes make decisions that are difficult to interpret."
  },
  "answer": [
   "D"
  ],
  "stem": "Which of the following is a risk associated with using AI?",
  "votes": "D 100%"
 },
 {
  "id": 8,
  "topic": "Responsible AI",
  "type": "mcq",
  "options": {
   "A": "Hate speech or discriminatory language (e.g., racial slurs, offensive stereotypes)",
   "B": "Sexually suggestive or explicit content",
   "C": "Code that contains logical errors or produces unexpected results",
   "D": "Code comments containing strong opinions or criticisms"
  },
  "answer": [
   "A",
   "B"
  ],
  "stem": "What types of prompts or code snippets might be flagged by the GitHub Copilot toxicity filter? Each correct answer presents part of the solution. (Choose two.)",
  "votes": "AB 100%"
 },
 {
  "id": 9,
  "topic": "Responsible AI",
  "flag": "red",
  "flagVotes": "B 55%、C 45%",
  "verified": "未能查證（B/C 官方文件無法區分）",
  "type": "mcq",
  "options": {
   "A": "Focusing on accessibility will ensure fairness.",
   "B": "Training AI data and algorithms to be free from biases will ensure fairness.",
   "C": "Regularly monitoring the AI tool’s performance will ensure fairness in its outputs.",
   "D": "Focusing on collecting large datasets for training will ensure fairness."
  },
  "answer": [
   "B"
  ],
  "stem": "How can the concept of fairness be integrated into the process of operating an AI tool?",
  "votes": "B 55%、C 45%"
 },
 {
  "id": 10,
  "topic": "Responsible AI",
  "type": "mcq",
  "options": {
   "A": "GitHub Copilot may introduce security vulnerabilities by suggesting code with known exploits.",
   "B": "GitHub Copilot’s suggestions may not always reflect best practices or the latest coding standards.",
   "C": "GitHub Copilot may increase development lead time by providing irrelevant suggestions.",
   "D": "GitHub Copilot may decrease developer velocity by requiring too much time in prompt engineering."
  },
  "answer": [
   "A",
   "B"
  ],
  "stem": "What are the potential risks associated with relying heavily on code generated from GitHub Copilot? Each correct answer presents part of the solution. (Choose two.)",
  "votes": "AB 100%"
 },
 {
  "id": 11,
  "topic": "Responsible AI",
  "type": "mcq",
  "options": {
   "A": "The Gen AI tool is programmed with a focus on creativity over factual accuracy.",
   "B": "The Gen AI tool is experiencing downtime and is not fully recovered.",
   "C": "The training data might contain biases or inconsistencies.",
   "D": "The Gen AI tool is being overloaded with too many requests at once."
  },
  "answer": [
   "C"
  ],
  "stem": "Why might a Generative AI (Gen AI) tool create inaccurate outputs?",
  "votes": "C 100%"
 },
 {
  "id": 12,
  "topic": "Responsible AI",
  "type": "mcq",
  "options": {
   "A": "GitHub Copilot will automatically correct any statistical errors found in the user’s initial code.",
   "B": "GitHub Copilot can independently verify the statistical significance of results.",
   "C": "GitHub Copilot can design new statistical methods that have not been previously documented.",
   "D": "GitHub Copilot’s suggestions are based on statistical trends and may not always apply accurately to specific datasets."
  },
  "answer": [
   "D"
  ],
  "stem": "What should developers consider when relying on GitHub Copilot for generating code that involves statistical analysis?",
  "votes": "D 100%"
 },
 {
  "id": 13,
  "topic": "GitHub Copilot plans and features",
  "type": "mcq",
  "options": {
   "A": "Translates code into a more performant language.",
   "B": "Automatically formats the code according to the selected style guide.",
   "C": "Summarizes your documentation into more maintainable and readable formats.",
   "D": "Enhances the performance of the selected code by analyzing its runtime complexity."
  },
  "answer": [
   "D"
  ],
  "stem": "What is the primary role of the ‘/optimize’ slash command in Visual Studio?",
  "votes": "D 100%"
 },
 {
  "id": 14,
  "topic": "GitHub Copilot plans and features",
  "flag": "red",
  "flagVotes": "A 12%、B 64%、D 24%",
  "verified": "標準答案無法證實：文件無「Copilot for Azure DevOps」方案，實為 Copilot Business 獨立授權",
  "type": "mcq",
  "options": {
   "A": "GitHub Copilot Enterprise",
   "B": "GitHub Copilot for Azure DevOps",
   "C": "Copilot Teams",
   "D": "GitHub Copilot Individual"
  },
  "answer": [
   "B"
  ],
  "stem": "Which GitHub Copilot plan could an Azure DevOps organization use without requiring a GitHub Enterprise license?",
  "votes": "A 12%、B 64%、D 24%"
 },
 {
  "id": 15,
  "topic": "GitHub Copilot plans and features",
  "flag": "yellow",
  "flagVotes": "B 11%、C 89%",
  "type": "mcq",
  "options": {
   "A": "Create a copilot.policy file in each repository",
   "B": "Create a copilot.policy in the .github repository",
   "C": "Configure the policies in the organization settings",
   "D": "Apply policies through the GitHub Actions configuration"
  },
  "answer": [
   "C"
  ],
  "stem": "Which of the following steps correctly demonstrates how to establish an organization-wide policy for GitHub Copilot Business to restrict its use to certain repositories?",
  "votes": "B 11%、C 89%"
 },
 {
  "id": 16,
  "topic": "GitHub Copilot plans and features",
  "type": "mcq",
  "options": {
   "A": "View code suggestions for a specific user",
   "B": "List all GitHub Copilot seat assignments for an organization",
   "C": "Get a summary of GitHub Copilot usage for organization members",
   "D": "List of all unsubscribed GitHub Copilot members within an organization"
  },
  "answer": [
   "B",
   "C"
  ],
  "stem": "What type of information can you retrieve through GitHub Copilot Business Subscriptions via REST API? Each correct answer presents part of the solution. (Choose two.)",
  "votes": "BC 100%"
 },
 {
  "id": 17,
  "topic": "GitHub Copilot plans and features",
  "type": "mcq",
  "options": {
   "A": "The feedback section on the GitHub website.",
   "B": "By tweeting at GitHub’s official X (previously known as Twitter) account.",
   "C": "Use the emojis in the Copilot Chat interface.",
   "D": "The Settings menu in the GitHub Mobile app."
  },
  "answer": [
   "C"
  ],
  "stem": "What is the best way to share feedback about GitHub Copilot Chat when using it on GitHub Mobile?",
  "votes": "C 100%"
 },
 {
  "id": 18,
  "topic": "GitHub Copilot plans and features",
  "type": "mcq",
  "options": {
   "A": "Proposes changes for detected issues, suggesting corrections for syntax errors and programming mistakes.",
   "B": "Converts pseudocode into executable code, optimizing for readability and maintainability.",
   "C": "Generates new code snippets based on language syntax and best practices.",
   "D": "Initiates a code review with static analysis tools for security and logic errors."
  },
  "answer": [
   "A"
  ],
  "stem": "What specific function does the ‘/fix’ slash command perform?",
  "votes": "A 100%"
 },
 {
  "id": 19,
  "topic": "GitHub Copilot plans and features",
  "type": "mcq",
  "options": {
   "A": "GitHub Copilot Codespace",
   "B": "GitHub Copilot Business",
   "C": "GitHub Copilot Individual",
   "D": "GitHub Copilot Enterprise"
  },
  "answer": [
   "B",
   "D"
  ],
  "stem": "Which GitHub Copilot pricing plans include features that exclude your GitHub Copilot data like usage, prompts, and suggestions from default training GitHub Copilot? (Choose two.)",
  "votes": "BD 100%"
 },
 {
  "id": 20,
  "topic": "GitHub Copilot plans and features",
  "flag": "yellow",
  "flagVotes": "AC 70%、ACD 10%、AD 10%、D 10%",
  "type": "mcq",
  "options": {
   "A": "Explain code and suggest improvements",
   "B": "Find out about releases and commits",
   "C": "Generate unit tests",
   "D": "Plan coding tasks"
  },
  "answer": [
   "A",
   "C"
  ],
  "stem": "When using an IDE with a supported GitHub Copilot plug-in, which Chat features can be accessed from within the IDE? Each correct answer presents part of the solution. (Choose two.)",
  "votes": "AC 70%、ACD 10%、AD 10%、D 10%"
 },
 {
  "id": 21,
  "topic": "GitHub Copilot plans and features",
  "flag": "red",
  "flagVotes": "BC 33%、C 67%",
  "verified": "已查證：C 成立",
  "type": "mcq",
  "options": {
   "A": "Knowledge bases",
   "B": "Chat",
   "C": "Inline suggestions",
   "D": "Pull request summaries"
  },
  "answer": [
   "C"
  ],
  "stem": "Which Copilot Enterprise features are available in all commercially supported IDEs?",
  "votes": "BC 33%、C 67%"
 },
 {
  "id": 22,
  "topic": "GitHub Copilot plans and features",
  "flag": "red",
  "flagVotes": "AB 56%、AD 38%、BC 6%",
  "verified": "部分確認：Business/Enterprise 情境 AB；個人訂閱情境為 AD",
  "type": "mcq",
  "options": {
   "A": "Organization settings",
   "B": "Enterprise settings → Copilot → Policies",
   "C": "Repository settings → Copilot → Policies",
   "D": "User settings → Copilot → Policies"
  },
  "answer": [
   "A",
   "B"
  ],
  "stem": "What two options navigate to configure duplicate detection? Each correct answer presents part of the solution. (Choose two.) → Copilot → Policies",
  "votes": "AB 56%、AD 38%、BC 6%"
 },
 {
  "id": 23,
  "topic": "GitHub Copilot plans and features",
  "type": "mcq",
  "options": {
   "A": "The API can generate detailed reports on code quality improvements made by GitHub Copilot.",
   "B": "The API can track the number of code suggestions accepted and used in the organization.",
   "C": "The API can provide feedback on coding style and standards compliance.",
   "D": "The API can provide Copilot Chat specific suggestions acceptance metrics.",
   "E": "The API can refactor your code to improve productivity."
  },
  "answer": [
   "B",
   "D"
  ],
  "stem": "What kind of insights can the GitHub Copilot usage metrics API provide to help evaluate the effectiveness of GitHub Copilot? Each correct answer presents part of the solution. (Choose two.)",
  "votes": "BD 100%"
 },
 {
  "id": 24,
  "topic": "GitHub Copilot plans and features",
  "type": "mcq",
  "options": {
   "A": "Describe the project’s architecture→ Use the copilot generate command → Accept the generated suggestion.",
   "B": "Type out the code snippet → Use the copilot refine command to enhance it → Review the suggested command.",
   "C": "Write code comments → Press the suggestion shortcut → Select the best suggestion from the list.",
   "D": "Use ‘gh copilot suggest’ → Write the command you want → Select the best suggestion from the list."
  },
  "answer": [
   "D"
  ],
  "stem": "How do you generate code suggestions with GitHub Copilot in the CLI?",
  "votes": "D 100%"
 },
 {
  "id": 25,
  "topic": "GitHub Copilot plans and features",
  "type": "mcq",
  "options": {
   "A": "Code suggestions are limited to single-line suggestions",
   "B": "Code suggestions are guaranteed to not expose known security vulnerabilities",
   "C": "Code suggestions will always compile or run without modifications",
   "D": "You can use keyboard shortcuts to accept the next word in a suggestion",
   "E": "Alternative code suggestions can be shown in a new tab"
  },
  "answer": [
   "D",
   "E"
  ],
  "stem": "Which of the following are true about code suggestions? Each correct answer presents part of the solution. (Choose two.)",
  "votes": "DE 100%"
 },
 {
  "id": 26,
  "topic": "GitHub Copilot plans and features",
  "flag": "red",
  "flagVotes": "ABD 22%、ABE 17%、ADE 61%",
  "verified": "已查證偏向 ADE：E 成立、C(.gitignore) 無依據",
  "type": "mcq",
  "options": {
   "A": "You do not have an active internet connection",
   "B": "Your programming language is not supported",
   "C": "You are working in files included in your .gitignore",
   "D": "You do not have a valid GitHub Copilot license",
   "E": "Your content exclusion is active and blocks the use of GitHub Copilot"
  },
  "answer": [
   "A",
   "D",
   "E"
  ],
  "stem": "What reasons could apply if code suggestions are not working in your editor? (Choose three.)",
  "votes": "ABD 22%、ABE 17%、ADE 61%"
 },
 {
  "id": 27,
  "topic": "GitHub Copilot plans and features",
  "flag": "red",
  "flagVotes": "C 17%、CD 17%、D 67%",
  "verified": "部分確認：D 直接；C 也說得通，可信度低",
  "type": "mcq",
  "options": {
   "A": "Real-time debugging and error resolution statistics.",
   "B": "Automated generation of complete project documentation.",
   "C": "Detailed analysis of GitHub Copilot’s suggestions vs. manual coding.",
   "D": "Insights on the types of coding languages where GitHub Copilot is most helpful."
  },
  "answer": [
   "D"
  ],
  "stem": "How can the insights gained from the metrics API be used to improve the development process in conjunction with GitHub Copilot?",
  "votes": "C 17%、CD 17%、D 67%"
 },
 {
  "id": 28,
  "topic": "GitHub Copilot plans and features",
  "type": "mcq",
  "options": {
   "A": "By emailing the support team directly.",
   "B": "Through the “Share Feedback” button in the Copilot Chat panel.",
   "C": "By filling out a feedback form on the GitHub website.",
   "D": "By posting on the GitHub forums."
  },
  "answer": [
   "B"
  ],
  "stem": "How can users provide feedback about GitHub Copilot Chat using their IDE?",
  "votes": "B 100%"
 },
 {
  "id": 29,
  "topic": "GitHub Copilot plans and features",
  "flag": "red",
  "flagVotes": "AC 57%、BC 43%",
  "verified": "已查證：AC 成立（gh copilot config）",
  "type": "mcq",
  "options": {
   "A": "Usage analytics",
   "B": "The default editor",
   "C": "The default execution confirmation",
   "D": "GitHub CLI subcommands"
  },
  "answer": [
   "A",
   "C"
  ],
  "stem": "GitHub Copilot in the Command Line Interface (CLI) can be used to configure the following settings: Each correct answer presents part of the solution. (Choose two.)",
  "votes": "AC 57%、BC 43%"
 },
 {
  "id": 30,
  "topic": "GitHub Copilot plans and features",
  "type": "mcq",
  "options": {
   "A": "compiled binaries",
   "B": "code snippets",
   "C": "design patterns",
   "D": "screenshots",
   "E": "documentation"
  },
  "answer": [
   "B",
   "C",
   "E"
  ],
  "stem": "What types of content can GitHub Copilot Knowledge Base answer questions about? Each correct answer presents part of the solution. (Choose three.)",
  "votes": "BCE 100%"
 },
 {
  "id": 31,
  "topic": "GitHub Copilot plans and features",
  "flag": "red",
  "flagVotes": "A 8%、C 67%、D 25%",
  "verified": "D 確定錯誤；C 未見文件確認",
  "type": "mcq",
  "options": {
   "A": "Through an invoice or a credit card",
   "B": "Through an Azure Subscription",
   "C": "Based on the payment method in your user profile",
   "D": "N/A - Copilot Individual is a free service for all open source projects"
  },
  "answer": [
   "C"
  ],
  "stem": "If you are working on open source projects, GitHub Copilot Individual can be paid:",
  "votes": "A 8%、C 67%、D 25%"
 },
 {
  "id": 32,
  "topic": "GitHub Copilot plans and features",
  "type": "mcq",
  "options": {
   "A": "To track the number of lines of code suggested by Copilot",
   "B": "To assign software licenses within the organization",
   "C": "To monitor code conflicts across repositories",
   "D": "To monitor administrator activities and actions within the organization"
  },
  "answer": [
   "D"
  ],
  "stem": "What is the primary purpose of organization audit logs in GitHub Copilot Business?",
  "votes": "D 100%"
 },
 {
  "id": 33,
  "topic": "GitHub Copilot plans and features",
  "type": "mcq",
  "options": {
   "A": "Prompts and Suggestion: Retained for 28 days",
   "B": "Prompts and Suggestions: Not retained",
   "C": "User Engagement Data: Kept for Two Years",
   "D": "User Engagement Data: Kept for 1 Year"
  },
  "answer": [
   "B",
   "C"
  ],
  "stem": "How long does GitHub retain Copilot data for Business and Enterprise? Each correct answer presents part of the solution. (Choose two.)",
  "votes": "BC 100%"
 },
 {
  "id": 34,
  "topic": "GitHub Copilot plans and features",
  "type": "mcq",
  "options": {
   "A": "It generates a prose summary and bulleted list of key changes for pull requests.",
   "B": "It can answer questions about the changeset of the pull request.",
   "C": "It automatically merges pull requests after an automated review.",
   "D": "It can validate the accuracy of the changes in the pull request."
  },
  "answer": [
   "A",
   "B"
  ],
  "stem": "How does GitHub Copilot Enterprise assist in code reviews during the pull request process? (Choose two.)",
  "votes": "AB 100%"
 },
 {
  "id": 35,
  "topic": "GitHub Copilot plans and features",
  "type": "mcq",
  "options": {
   "A": "By using the inline chat functionality with the command/multiple",
   "B": "By using @workspace in the chat window",
   "C": "By opening the completions panel in your editor",
   "D": "By asking for multiple suggestions using comments in your code"
  },
  "answer": [
   "C"
  ],
  "stem": "How can you get multiple suggestions from GitHub Copilot?"
 },
 {
  "id": 36,
  "topic": "GitHub Copilot plans and features",
  "type": "mcq",
  "options": {
   "A": "GitHub Copilot Enterprise",
   "B": "GitHub Copilot Individual",
   "C": "GitHub Copilot Business",
   "D": "GitHub Copilot Professional"
  },
  "answer": [
   "A"
  ],
  "stem": "What GitHub Copilot pricing plan gives you access to your company’s knowledge bases?"
 },
 {
  "id": 37,
  "topic": "GitHub Copilot plans and features",
  "type": "mcq",
  "options": {
   "A": "Chat",
   "B": "Pull Request Diff Analysis",
   "C": "Code suggestions",
   "D": "Knowledge Base"
  },
  "answer": [
   "A",
   "C"
  ],
  "stem": "Which Copilot Individual features are available when using a supported extension for Visual Studio, VS Code, or JetBrains IDEs? Each correct answer presents part of the solution. (Choose two.)",
  "votes": "AC 100%"
 },
 {
  "id": 38,
  "topic": "GitHub Copilot plans and features",
  "type": "mcq",
  "options": {
   "A": "GitHub Copilot Individual",
   "B": "GitHub Copilot Enterprise",
   "C": "GitHub Copilot Business",
   "D": "GitHub Copilot Teams",
   "E": "GitHub Copilot Business for non-GHE Customers"
  },
  "answer": [
   "A"
  ],
  "stem": "An independent contractor develops applications for a variety of different customers. Assuming no concerns from their customers, which GitHub Copilot plan is best suited?",
  "votes": "A 100%"
 },
 {
  "id": 39,
  "topic": "GitHub Copilot plans and features",
  "type": "mcq",
  "options": {
   "A": "Enforce blocking of MIT or GPL licensed code",
   "B": "Enable GitHub Copilot license checking",
   "C": "Suggestions matching public code to ‘blocked’. You need to check code suggestions yourself before accepting"
  },
  "answer": [
   "C"
  ],
  "stem": "What configuration needs to be set to get help from Microsoft and GitHub protecting against IP infringement while using GitHub Copilot?"
 },
 {
  "id": 40,
  "topic": "GitHub Copilot plans and features",
  "type": "mcq",
  "options": {
   "A": "GitHub Copilot Individuals",
   "B": "GitHub Copilot Codespace",
   "C": "GitHub Copilot Business",
   "D": "GitHub Copilot Enterprise"
  },
  "answer": [
   "A"
  ],
  "stem": "Which GitHub Copilot plan allows for prompt and suggestion collection?",
  "votes": "A 100%"
 },
 {
  "id": 41,
  "topic": "GitHub Copilot plans and features",
  "type": "mcq",
  "options": {
   "A": "By automatically refactoring code to improve readability.",
   "B": "By providing visual diagrams of the code structure.",
   "C": "By running code linters and formatters.",
   "D": "By answering questions about the code and generating explanations."
  },
  "answer": [
   "D"
  ],
  "stem": "How does GitHub Copilot Chat help in understanding the existing codebase?",
  "votes": "D 100%"
 },
 {
  "id": 42,
  "topic": "GitHub Copilot plans and features",
  "type": "mcq",
  "options": {
   "A": "Free (not billed) for all open source projects",
   "B": "Monthly, as metered service based on actual consumption",
   "C": "Annually as a subscription",
   "D": "Monthly as a subscription"
  },
  "answer": [
   "C",
   "D"
  ],
  "stem": "How is GitHub Copilot Individual billed? Each correct answer presents part of the solution. (Choose two.)"
 },
 {
  "id": 43,
  "topic": "GitHub Copilot plans and features",
  "type": "mcq",
  "options": {
   "A": "Add teams to the Copilot subscription for an organization.",
   "B": "Remove teams from the Copilot subscription for an organization.",
   "C": "Upgrade or downgrade the subscription tier",
   "D": "Migrate Copilot seat assignments between GitHub organizations",
   "E": "Reassign Copilot seats based on GitHub repository size"
  },
  "answer": [
   "A",
   "B"
  ],
  "stem": "Which REST API endpoint is used to modify details about a GitHub Copilot Business subscription? Each correct answer part of the solution. (Choose two.)",
  "votes": "AB 100%"
 },
 {
  "id": 44,
  "topic": "GitHub Copilot plans and features",
  "type": "mcq",
  "options": {
   "A": "Use the Audit log section in the organization’s GitHub settings",
   "B": "Navigate to the Insights tab in the repository settings",
   "C": "Use the Code tab in the GitHub repository",
   "D": "Navigate to the Security tab in the organization’s GitHub settings"
  },
  "answer": [
   "A"
  ],
  "stem": "Which of the following is the correct way to access the audit log events for GitHub Copilot Business?"
 },
 {
  "id": 45,
  "topic": "GitHub Copilot plans and features",
  "type": "mcq",
  "options": {
   "A": "All file types are indexed",
   "B": "Indexing is static",
   "C": "All repos are indexed",
   "D": "It is an Enterprise feature"
  },
  "answer": [
   "D"
  ],
  "stem": "Which of the following is correct about GitHub Copilot Knowledge Bases?",
  "votes": "D 100%"
 },
 {
  "id": 46,
  "topic": "GitHub Copilot plans and features",
  "type": "mcq",
  "options": {
   "A": "From a watch window in an IDE debug session",
   "B": "By using a properly configured GitHub CLI",
   "C": "From a web browser at https://github.copilot.com",
   "D": "By using chat capabilities in NeoVim"
  },
  "answer": [
   "B"
  ],
  "stem": "What method can be used to interact with GitHub Copilot?",
  "votes": "B 100%"
 },
 {
  "id": 47,
  "topic": "GitHub Copilot plans and features",
  "type": "mcq",
  "options": {
   "A": "GitHub Copilot Individual",
   "B": "GitHub Copilot Enterprise",
   "C": "GitHub Copilot Teams",
   "D": "GitHub Copilot Business for non-GHE customers"
  },
  "answer": [
   "D"
  ],
  "stem": "A company is currently storing code in BitBucket and would like to use GitHub Copilot. Which GitHub Copilot plan will be most cost effective to allow them to manage users with their Identity Provider (e.g. Okta)?",
  "votes": "D 100%"
 },
 {
  "id": 48,
  "topic": "GitHub Copilot plans and features",
  "explain": "`/add-dir <路徑>` 是在互動式 Copilot CLI 工作階段內新增信任目錄的斜線指令，不需重啟；`@` 是檔案參照語法，不是路徑參數。",
  "type": "image",
  "kind": "HOTSPOT",
  "stem": "You start GitHub Copilot CLI from a directory named /repo/app. You store test files in a directory named /repo/tests. You need to add /repo/tests as a trusted directory without restarting GitHub Copilot CLI. The solution must ensure that GitHub Copilot can access and modify the files. How should you complete the command? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point.",
  "imgContent": "下拉選單一（指令）：`Ls`／`Cwd`／`/add-dir`；下拉選單二（路徑）：`/repo/tests`／`@/repo/tests`／`!/repo/tests`",
  "images": [
   "GH-300_images/Q48_a.png",
   "GH-300_images/Q48_b.png"
  ],
  "answerLines": [
   "指令：`/add-dir`",
   "路徑：`/repo/tests`"
  ]
 },
 {
  "id": 49,
  "topic": "GitHub Copilot plans and features",
  "explain": "干擾項：`copilot --resume`（續接工作階段）、`gh auth login`（gh CLI 登入，非 Copilot CLI 流程）。",
  "type": "image",
  "kind": "DRAG DROP",
  "stem": "You have a GitHub Copilot subscription. You need to start an interactive GitHub Copilot CLI session from the root folder of a project. If you are NOT authenticated, GitHub Copilot must prompt you to sign in. Which four actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.",
  "imgContent": "動作清單：Run `/login`.｜Run `copilot --resume`.｜Run `gh auth login`.｜Open a browser-based GitHub sign-in flow.｜Confirm folder trust.｜Run `copilot`.",
  "images": [
   "GH-300_images/Q49_a.png",
   "GH-300_images/Q49_b.png"
  ],
  "answerLines": [
   "1. Run `copilot`.",
   "2. Confirm folder trust.",
   "3. Run `/login`.",
   "4. Open a browser-based GitHub sign-in flow."
  ]
 },
 {
  "id": 50,
  "topic": "GitHub Copilot plans and features",
  "explain": "`/new`、`/session` 是工作階段內的斜線指令，不能用來啟動 CLI。",
  "type": "image",
  "kind": "HOTSPOT",
  "stem": "You are deploying a new development environment to a Windows 11 device. You need to install GitHub Copilot CLI, and then start an interactive GitHub Copilot CLI session. Which command should you run for each requirement? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point.",
  "imgContent": "安裝選項：`apt install copilot-cli`／`npm install -g @github/copilot`／`gh extension install github/copilot`；啟動互動工作階段：`copilot`／`/new`／`/session`",
  "images": [
   "GH-300_images/Q50_a.png",
   "GH-300_images/Q50_b.png"
  ],
  "answerLines": [
   "安裝 GitHub Copilot CLI：`npm install -g @github/copilot`",
   "啟動互動工作階段：`copilot`"
  ]
 },
 {
  "id": 51,
  "topic": "GitHub Copilot plans and features",
  "type": "image",
  "kind": "HOTSPOT",
  "stem": "You use GitHub Copilot Chat to debug a function. You discover that GitHub Copilot is using irrelevant chat threads to generate output. You need to ensure that GitHub Copilot only uses new input to generate output. What should you do, and how will this affect the prompt process flow? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point.",
  "imgContent": "Action：Start a new chat in GitHub Copilot Chat.／Switch to a different file in the editor.／Continue the existing chat and rephrase the question.；Effect：Removes the previous chat history from the model input／Expands the model's context window to include more history／Includes previous chat threads but gives priority to the current chat",
  "images": [
   "GH-300_images/Q51_a.png",
   "GH-300_images/Q51_b.png"
  ],
  "answerLines": [
   "Action：Start a new chat in GitHub Copilot Chat.",
   "Effect：Removes the previous chat history from the model input"
  ]
 },
 {
  "id": 52,
  "topic": "GitHub Copilot plans and features",
  "explain": "`--resume` 會列出可續接的工作階段供選擇；`--continue` 直接接續最近一次。",
  "type": "image",
  "kind": "DRAG DROP",
  "stem": "You recently ended an interactive GitHub Copilot CLI session. You need to start a new session that meets the following requirements: • Provides a list of previously saved interactive sessions • Resumes the most recently ended session Which command should you run for each requirement? To answer, drag the appropriate commands to the correct requirements. Each command may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content. NOTE: Each correct selection is worth one point.",
  "imgContent": "指令清單：`copilot --add-dir`｜`copilot --continue`｜`copilot --model`｜`copilot --prompt`｜`copilot --resume`",
  "images": [
   "GH-300_images/Q52_a.png",
   "GH-300_images/Q52_b.png"
  ],
  "answerLines": [
   "Provides a list of previously saved interactive sessions → `copilot --resume`",
   "Resumes the most recently ended session → `copilot --continue`"
  ]
 },
 {
  "id": 53,
  "topic": "How GitHub Copilot works and handles data",
  "type": "mcq",
  "options": {
   "A": "Suggest completely novel projects, while reducing time on a project.",
   "B": "Suggest innovative coding solutions that are not yet popular.",
   "C": "Suggest homogeneous solutions if provided a diverse data set.",
   "D": "Suggest code snippets that reflect the most common practices in the training data."
  },
  "answer": [
   "D"
  ],
  "stem": "What is a likely effect of GitHub Copilot being trained on commonly used code patterns?",
  "votes": "D 100%"
 },
 {
  "id": 54,
  "topic": "How GitHub Copilot works and handles data",
  "type": "mcq",
  "options": {
   "A": "GitHub Copilot always filters out deprecated elements to promote the use of current standards.",
   "B": "GitHub Copilot may suggest deprecated syntax or features if they are present in its training data.",
   "C": "GitHub Copilot rejects all prompts involving deprecated features to avoid compilation errors.",
   "D": "GitHub Copilot automatically updates deprecated features in its suggestions to the latest version."
  },
  "answer": [
   "B"
  ],
  "stem": "How does GitHub Copilot typically handle code suggestions that involve deprecated features or syntax of programming languages?",
  "votes": "B 100%"
 },
 {
  "id": 55,
  "topic": "How GitHub Copilot works and handles data",
  "type": "mcq",
  "options": {
   "A": "Processing telemetry data",
   "B": "Generate suggestions",
   "C": "Retraining the model",
   "D": "Storing user data",
   "E": "Capturing the user’s context"
  },
  "answer": [
   "B",
   "E"
  ],
  "stem": "Identify the steps involved in the life cycle of a GitHub Copilot code suggestion? Each correct answer presents part of the solution. (Choose two.)",
  "votes": "BE 100%"
 },
 {
  "id": 56,
  "topic": "How GitHub Copilot works and handles data",
  "type": "mcq",
  "options": {
   "A": "It formats the output response before presenting it to the user.",
   "B": "It filters out irrelevant information from the user’s input prompt.",
   "C": "It enriches the input prompt with additional context before passing it to the language model.",
   "D": "It directly generates a response based on the user’s input prompt."
  },
  "answer": [
   "C"
  ],
  "stem": "What role does the pre-processing of user input play in the data flow of GitHub Copilot Chat?",
  "votes": "C 100%"
 },
 {
  "id": 57,
  "topic": "How GitHub Copilot works and handles data",
  "flag": "red",
  "flagVotes": "AB 4%、AD 52%、BD 43%",
  "verified": "已查證：AD 成立",
  "type": "mcq",
  "options": {
   "A": "Code quality",
   "B": "Compatibility with user-specific settings",
   "C": "Performance benchmarking",
   "D": "Suggestions matching public code (optional based on settings)"
  },
  "answer": [
   "A",
   "D"
  ],
  "stem": "What are the additional checks that need to pass before the GitHub Copilot responses are submitted to the user? Each correct answer presents part of the solution. (Choose two.)",
  "votes": "AB 4%、AD 52%、BD 43%"
 },
 {
  "id": 58,
  "topic": "How GitHub Copilot works and handles data",
  "flag": "red",
  "flagVotes": "AB 67%、BC 17%、BD 17%",
  "verified": "已查證：AB 成立",
  "type": "mcq",
  "options": {
   "A": "Ability to handle complex code structures",
   "B": "Limited training data",
   "C": "Extensive support for all programming languages",
   "D": "No biases in code suggestions"
  },
  "answer": [
   "A",
   "B"
  ],
  "stem": "What are the potential limitations of GitHub Copilot Chat? Each correct answer presents part of the solution. (Choose two.)",
  "votes": "AB 67%、BC 17%、BD 17%"
 },
 {
  "id": 59,
  "topic": "How GitHub Copilot works and handles data",
  "type": "mcq",
  "options": {
   "A": "Improves suggestions by considering both the prefix and suffix of the code, filling in the middle part more accurately.",
   "B": "Restricts Copilot to use only external databases for generating code suggestions.",
   "C": "Allows Copilot to generate suggestions based only on the prefix of the code.",
   "D": "Ignores both the prefix and suffix of the code, focusing only on user comments for context."
  },
  "answer": [
   "A"
  ],
  "stem": "What is the impact of the “Fill-In-the-Middle” (FIM) technique on GitHub Copilot’s code suggestions?",
  "votes": "A 100%"
 },
 {
  "id": 60,
  "topic": "How GitHub Copilot works and handles data",
  "type": "mcq",
  "options": {
   "A": "Real-time user input helps generate context-aware code suggestions.",
   "B": "Prompt data is used internally by GitHub for improving the search engine.",
   "C": "Prompt data is used to train machine learning models for better code suggestions.",
   "D": "Prompt data is stored unencrypted for faster processing."
  },
  "answer": [
   "A",
   "C"
  ],
  "stem": "Which of the following statements correctly describes how GitHub Copilot Individual uses prompt data? Each correct answer presents part of the solution. (Choose two.)",
  "votes": "AC 100%"
 },
 {
  "id": 61,
  "topic": "How GitHub Copilot works and handles data",
  "type": "mcq",
  "options": {
   "A": "Information from the IDE like open tabs, cursor location, selected code.",
   "B": "All the code visible in the current IDE.",
   "C": "All the code in the current repository and any git submodules.",
   "D": "The open tabs in the IDE and the current folder of the terminal."
  },
  "answer": [
   "A"
  ],
  "stem": "What is used by GitHub Copilot in the IDE to determine the prompt context?",
  "votes": "A 100%"
 },
 {
  "id": 62,
  "topic": "How GitHub Copilot works and handles data",
  "type": "mcq",
  "options": {
   "A": "Version control system integrated with the IDE",
   "B": "Syntax highlighting scheme of the code in the IDE",
   "C": "Frequency of commits to the repository",
   "D": "Neighboring or related files within a project"
  },
  "answer": [
   "D"
  ],
  "stem": "Which of the following does GitHub Copilot’s LLM derive context from when producing a response?",
  "votes": "D 100%"
 },
 {
  "id": 63,
  "topic": "How GitHub Copilot works and handles data",
  "flag": "red",
  "flagVotes": "A 33%、D 67%",
  "verified": "已查證：D 成立（自訂模型＝以組織程式碼微調）",
  "type": "mcq",
  "options": {
   "A": "Responses use the organization’s LLM engine",
   "B": "Responses are faster to produce and appear sooner",
   "C": "Responses are guaranteed to be correct",
   "D": "Responses use practices and patterns in your repositories"
  },
  "answer": [
   "D"
  ],
  "stem": "What is a benefit of using custom models in GitHub Copilot?",
  "votes": "A 33%、D 67%"
 },
 {
  "id": 64,
  "topic": "How GitHub Copilot works and handles data",
  "type": "mcq",
  "options": {
   "A": "Implementing safeguards to detect and avoid suggesting verbatim snippets from public code",
   "B": "Filtering out suggestions that match code from public repositories",
   "C": "Using machine learning models trained only on private repositories",
   "D": "Reviewing and storing user-specific private repository data for future suggestions"
  },
  "answer": [
   "A",
   "B"
  ],
  "stem": "How does GitHub Copilot identify matching code and ensure that public code is appropriately handled or blocked? Each correct answer presents part of the solution. (Choose two.)",
  "votes": "AB 100%"
 },
 {
  "id": 65,
  "topic": "How GitHub Copilot works and handles data",
  "type": "mcq",
  "options": {
   "A": "By sharing chat history with third-party services to improve integration and functionality.",
   "B": "By analyzing past chat interactions to identify common programming patterns and errors.",
   "C": "By logging chat history to monitor user activity and ensure compliance with coding standards.",
   "D": "By using chat history to offer personalized code snippets based on previous prompts."
  },
  "answer": [
   "D"
  ],
  "stem": "How does GitHub Copilot utilize chat history to enhance its code completion capabilities?",
  "votes": "D 100%"
 },
 {
  "id": 66,
  "topic": "How GitHub Copilot works and handles data",
  "type": "mcq",
  "options": {
   "A": "To compare user-generated code against a private repository for potential matches.",
   "B": "To encourage the user to follow coding best practices preventing code duplication.",
   "C": "To allow administrators to control which suggestions are visible to developers based on custom criteria.",
   "D": "To detect and block suggestions that match public code snippets on GitHub if they contain about 150 characters."
  },
  "answer": [
   "D"
  ],
  "stem": "What is the main purpose of the duplication detection filter in GitHub Copilot?",
  "votes": "D 100%"
 },
 {
  "id": 67,
  "topic": "How GitHub Copilot works and handles data",
  "type": "mcq",
  "options": {
   "A": "Amazon Web Service",
   "B": "Self hosted",
   "C": "Microsoft Azure",
   "D": "Google Cloud Platform"
  },
  "answer": [
   "C"
  ],
  "stem": "Where is the proxy service hosted?",
  "votes": "C 100%"
 },
 {
  "id": 68,
  "topic": "How GitHub Copilot works and handles data",
  "type": "mcq",
  "options": {
   "A": "By managing stakeholder communication and meetings.",
   "B": "By automatically generating detailed requirements documents.",
   "C": "By providing templates and code snippets that help in documenting requirements.",
   "D": "By identifying and fixing potential requirement conflicts when using /help."
  },
  "answer": [
   "C"
  ],
  "stem": "How can GitHub Copilot assist developers during the requirements analysis phase of the Software Development Life Cycle (SDLC)?",
  "votes": "C 100%"
 },
 {
  "id": 69,
  "topic": "How GitHub Copilot works and handles data",
  "type": "mcq",
  "options": {
   "A": "By adding variables (#selection) to your prompt",
   "B": "By adding the full file paths to your prompt of important files",
   "C": "By adding the important files to your .gitconfig",
   "D": "By opening the relevant tabs in your IDE"
  },
  "answer": [
   "A",
   "D"
  ],
  "stem": "How can you improve the context used by GitHub Copilot? Each correct answer presents part of the solution. (Choose two.)",
  "votes": "AD 100%"
 },
 {
  "id": 70,
  "topic": "Prompt Crafting and Prompt Engineering",
  "type": "mcq",
  "options": {
   "A": "Keep the prompt as short as possible, using single words or brief phrases.",
   "B": "Provide examples of expected input and output within the prompt.",
   "C": "Avoid mentioning the programming language to allow for more flexible suggestions.",
   "D": "Write the prompt in natural language without any programming language."
  },
  "answer": [
   "B"
  ],
  "stem": "When crafting prompts for GitHub Copilot, what is a recommended strategy to enhance the relevance of the generated code?",
  "votes": "B 100%"
 },
 {
  "id": 71,
  "topic": "Prompt Crafting and Prompt Engineering",
  "type": "mcq",
  "options": {
   "A": "Giving GitHub Copilot examples of the algorithm and outcome you want to use",
   "B": "Only giving GitHub Copilot a question as a prompt and no examples",
   "C": "Giving GitHub Copilot examples of the problem you want to solve",
   "D": "Giving as little context to GitHub Copilot as possible",
   "E": "Telling GitHub Copilot it needs to show only the correct answer"
  },
  "answer": [
   "B"
  ],
  "stem": "What is zero-shot prompting?",
  "votes": "B 100%"
 },
 {
  "id": 72,
  "topic": "Prompt Crafting and Prompt Engineering",
  "type": "mcq",
  "options": {
   "A": "Engage with chat participants such as @workspace to incorporate collaborative context into the responses.",
   "B": "Access developer’s previous projects and code repositories to understand their coding style without explicit permission.",
   "C": "Utilize to interpret developer’s thoughts and intentions without any code or comments.",
   "D": "Utilize chat variables like #file and #editors to anchor the conversation within the specific context of the files or editors in use."
  },
  "answer": [
   "A",
   "D"
  ],
  "stem": "What are the different ways to give context to GitHub Copilot to get more precise responses? Each correct answer presents part of the solution. (Choose two.)",
  "votes": "AD 100%"
 },
 {
  "id": 73,
  "topic": "Prompt Crafting and Prompt Engineering",
  "type": "mcq",
  "options": {
   "A": "Use a single GitHub Copilot Chat query to find resolutions for the collection of technical requirements",
   "B": "Optimize the usage of memory-intensive operations within generated code",
   "C": "Apply prompt engineering techniques to be more specific",
   "D": "Limit the number of concurrent users accessing GitHub Copilot Chat"
  },
  "answer": [
   "C"
  ],
  "stem": "Select a strategy to increase the performance of GitHub Copilot Chat.",
  "votes": "C 100%"
 },
 {
  "id": 74,
  "topic": "Prompt Crafting and Prompt Engineering",
  "type": "mcq",
  "options": {
   "A": "Telling GitHub Copilot to try multiple times to answer the prompt",
   "B": "Telling GitHub Copilot to iterate several times on the answer before returning it to you",
   "C": "Telling GitHub Copilot from which sources it should base the response on",
   "D": "Telling GitHub Copilot about the mechanism you want it to use and how to incorporate that into the response"
  },
  "answer": [
   "D"
  ],
  "stem": "What is few-shot prompting?",
  "votes": "D 100%"
 },
 {
  "id": 75,
  "topic": "Prompt Crafting and Prompt Engineering",
  "type": "mcq",
  "options": {
   "A": "Chat history is irrelevant to GitHub Copilot and does not affect its functionality.",
   "B": "Chat history provides context to GitHub Copilot, improving the relevance and accuracy of its code suggestions.",
   "C": "Chat history is stored and shared with other users to enhance collaboration.",
   "D": "Chat history is used to train the GitHub Copilot model in real-time."
  },
  "answer": [
   "B"
  ],
  "stem": "What role does chat history play in GitHub Copilot’s code suggestions?",
  "votes": "B 100%"
 },
 {
  "id": 76,
  "topic": "Prompt Crafting and Prompt Engineering",
  "flag": "red",
  "flagVotes": "AB 46%、AD 54%",
  "verified": "未能查證（AD/AB 無法區分）",
  "type": "mcq",
  "options": {
   "A": "Provide specific success criteria",
   "B": "Provide links to supporting documentation",
   "C": "Provide all information about the utilized files",
   "D": "Provide insight on where to get the content from to get a response."
  },
  "answer": [
   "A",
   "D"
  ],
  "stem": "What are two techniques that can be used to improve prompts to GitHub Copilot? (Choose two.)",
  "votes": "AB 46%、AD 54%"
 },
 {
  "id": 77,
  "topic": "Prompt Crafting and Prompt Engineering",
  "flag": "red",
  "flagVotes": "A 67%、B 33%",
  "verified": "部分確認：文件定義為「指示 Copilot 扮演角色」，A、B 皆不完全吻合",
  "type": "mcq",
  "options": {
   "A": "Describing in your prompt what your role is to get a better suggestion",
   "B": "Tell GitHub Copilot in what tone of voice it should respond",
   "C": "Prompt GitHub Copilot to explain what was the role of a suggestion",
   "D": "Giving GitHub Copilot multiple examples of the form of the data you want to use"
  },
  "answer": [
   "A"
  ],
  "stem": "Which of the following describes role prompting?",
  "votes": "A 67%、B 33%"
 },
 {
  "id": 78,
  "topic": "Prompt Crafting and Prompt Engineering",
  "type": "image",
  "kind": "HOTSPOT",
  "stem": "You use GitHub Copilot Chat to generate code and documentation for a project. You need to improve the clarity and quality of the GitHub Copilot Chat-generated output. Which type of prompt and prompt engineering technique should you use? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point.",
  "imgContent": "Prompt type：Ambiguous／Conversational／Task-oriented；Prompt technique：Specify formatting, length, or style constraints.／Rely on GitHub Copilot to infer missing details.／Avoid providing examples to prevent influencing the model.",
  "images": [
   "GH-300_images/Q78_a.png",
   "GH-300_images/Q78_b.png"
  ],
  "answerLines": [
   "Prompt type：Task-oriented",
   "Prompt technique：Specify formatting, length, or style constraints."
  ]
 },
 {
  "id": 79,
  "topic": "Developer use cases for AI",
  "type": "mcq",
  "options": {
   "A": "By providing suggestions for improving code readability and maintainability based on best practices.",
   "B": "By offering code transformation examples that enhance performance and reduce complexity.",
   "C": "By independently ensuring compliance with regulatory standards across industries.",
   "D": "By autonomously refactoring entire codebases to the latest programming language."
  },
  "answer": [
   "A",
   "B"
  ],
  "stem": "In what ways can GitHub Copilot support a developer during the code refactoring process? Each correct answer presents part of the solution. (Choose two.)",
  "votes": "AB 100%"
 },
 {
  "id": 80,
  "topic": "Developer use cases for AI",
  "type": "mcq",
  "options": {
   "A": "Rely solely on Copilot’s suggestions without reviewing them.",
   "B": "Regularly review and refactor the code suggested by Copilot.",
   "C": "Disable Copilot’s inline suggestions.",
   "D": "Avoid using Copilot for complex tasks."
  },
  "answer": [
   "B"
  ],
  "stem": "What is one of the recommended practices when using GitHub Copilot Chat to enhance code quality?",
  "votes": "B 100%"
 },
 {
  "id": 81,
  "topic": "Developer use cases for AI",
  "type": "mcq",
  "options": {
   "A": "GitHub Copilot can generate user interface (UI) prototypes without prompting.",
   "B": "GitHub Copilot can suggest design patterns and best practices relevant to the project.",
   "C": "GitHub Copilot can independently create a complete software design.",
   "D": "GitHub Copilot can manage design team collaboration and version control."
  },
  "answer": [
   "B"
  ],
  "stem": "In what ways can GitHub Copilot contribute to the design phase of the Software Development Life Cycle (SDLC)?",
  "votes": "B 100%"
 },
 {
  "id": 82,
  "topic": "Developer use cases for AI",
  "type": "mcq",
  "options": {
   "A": "GitHub Copilot may not always produce optimized or best-practice code for refactoring.",
   "B": "GitHub Copilot always produces bug-free code during refactoring.",
   "C": "GitHub Copilot understands the context of your entire project and refactors code accordingly.",
   "D": "GitHub Copilot can only be used with a limited set of programming languages."
  },
  "answer": [
   "A"
  ],
  "stem": "Are there any limitations to consider when using GitHub Copilot for code refactoring?",
  "votes": "A 100%"
 },
 {
  "id": 83,
  "topic": "Developer use cases for AI",
  "type": "mcq",
  "options": {
   "A": "GitHub Copilot can predict and prevent bugs before they occur.",
   "B": "GitHub Copilot allows developers to stay in their IDE.",
   "C": "GitHub Copilot can completely replace the need for human collaboration.",
   "D": "GitHub Copilot can automatically handle project management tasks."
  },
  "answer": [
   "B"
  ],
  "stem": "How does GitHub Copilot assist developers in minimizing context switching?",
  "votes": "B 100%"
 },
 {
  "id": 84,
  "topic": "Developer use cases for AI",
  "type": "mcq",
  "options": {
   "A": "GitHub Copilot’s suggestions are always aware of the entire codebase.",
   "B": "GitHub Copilot can refactor and optimize the entire codebase up to 10,000 lines of code.",
   "C": "GitHub Copilot can independently manage and resolve all merge conflicts in version control.",
   "D": "GitHub Copilot might not fully understand the context and dependencies within a large codebase."
  },
  "answer": [
   "D"
  ],
  "stem": "What are the potential limitations of GitHub Copilot in maintaining existing codebases?",
  "votes": "D 100%"
 },
 {
  "id": 85,
  "topic": "Developer use cases for AI",
  "type": "mcq",
  "options": {
   "A": "GitHub Copilot can suggest summaries or descriptions based on the code’s functionality.",
   "B": "GitHub Copilot can only generate content in markdown format.",
   "C": "GitHub Copilot can automatically generate complete and detailed documentation.",
   "D": "GitHub Copilot cannot assist in writing documentation or comments."
  },
  "answer": [
   "A"
  ],
  "stem": "How can GitHub Copilot aid developers in writing documentation for their code?",
  "votes": "A 100%"
 },
 {
  "id": 86,
  "topic": "Developer use cases for AI",
  "type": "mcq",
  "options": {
   "A": "By refactoring the entire codebase to eliminate boilerplate code without developer input.",
   "B": "By suggesting code snippets that can be reused across different parts of the project.",
   "C": "By engaging in real-time collaboration with multiple developers to write boilerplate code.",
   "D": "By predicting future coding requirements and pre-emptively generating boilerplate code"
  },
  "answer": [
   "B"
  ],
  "stem": "How does GitHub Copilot assist developers in reducing the amount of manual boilerplate code they write?",
  "votes": "B 100%"
 },
 {
  "id": 87,
  "topic": "Developer use cases for AI",
  "type": "mcq",
  "options": {
   "A": "Create a documentation file for the newly created code base.",
   "B": "Fast tracking of release management activities to move code to production main branch.",
   "C": "A project plan for the team needs to be generated using a project management software.",
   "D": "A developer is added to a new project and would like to understand the current software code."
  },
  "answer": [
   "A",
   "D"
  ],
  "stem": "Which scenarios can GitHub Copilot Chat be used to increase productivity? Each correct answer presents part of the solution. (Choose two.)",
  "votes": "AD 100%"
 },
 {
  "id": 88,
  "topic": "Developer use cases for AI",
  "type": "mcq",
  "options": {
   "A": "By automatically refactoring the entire codebase to remove vulnerabilities.",
   "B": "By annotating the given suggestions with known vulnerability patterns.",
   "C": "By enforcing strict coding standards that prevent the introduction of vulnerabilities.",
   "D": "By providing detailed reports on the security vulnerabilities present in the codebase."
  },
  "answer": [
   "B"
  ],
  "stem": "How does GitHub Copilot Chat help to fix security issues in your codebase?",
  "votes": "B 100%"
 },
 {
  "id": 89,
  "topic": "Developer use cases for AI",
  "type": "mcq",
  "options": {
   "A": "A solution for software development, requiring no additional input or oversight.",
   "B": "A productivity tool that provides suggestions, but relying on human judgement.",
   "C": "A tool solely designed for debugging and error correction.",
   "D": "A complete replacement for developers generating code."
  },
  "answer": [
   "B"
  ],
  "stem": "Which of the following scenarios best describes the intended use of GitHub Copilot Chat as a tool?",
  "votes": "B 100%"
 },
 {
  "id": 90,
  "topic": "Developer use cases for AI",
  "type": "mcq",
  "options": {
   "A": "“Suggest ways to enhance the maintainability of this code segment.”",
   "B": "“Show me how to improve the readability of this function.”",
   "C": "“Refactor my application to meet the latest coding standards.”",
   "D": "“Predict future coding trends and update my codebase accordingly.”"
  },
  "answer": [
   "A",
   "B"
  ],
  "stem": "Which of the following prompts can be used to guide GitHub Copilot Chat in refactoring code for quality improvements? Each correct answer presents part of the solution. (Choose two.)",
  "votes": "AB 100%"
 },
 {
  "id": 91,
  "topic": "Developer use cases for AI",
  "type": "mcq",
  "options": {
   "A": "GitHub Copilot can suggest modern programming patterns based on your code.",
   "B": "GitHub Copilot can create and deploy full-stack applications based on a single query.",
   "C": "GitHub Copilot can automatically refactor applications to align with upcoming standards.",
   "D": "GitHub Copilot can directly convert legacy applications into cloud-native architectures."
  },
  "answer": [
   "A"
  ],
  "stem": "In what way can GitHub Copilot and GitHub Copilot Chat aid developers in modernizing applications?",
  "votes": "A 100%"
 },
 {
  "id": 92,
  "topic": "Developer use cases for AI",
  "type": "mcq",
  "options": {
   "A": "GitHub Copilot can remove unnecessary files from the project directory.",
   "B": "GitHub Copilot can suggest refactoring improvements for better code quality.",
   "C": "GitHub Copilot can fix syntax errors without user input.",
   "D": "GitHub Copilot can automatically rewrite code to follow best practices."
  },
  "answer": [
   "B"
  ],
  "stem": "How can GitHub Copilot assist with code refactoring tasks?",
  "votes": "B 100%"
 },
 {
  "id": 93,
  "topic": "Developer use cases for AI",
  "type": "mcq",
  "options": {
   "A": "GitHub Copilot’s /understand command will help GitHub Copilot understand code written in a targeted programming language.",
   "B": "GitHub Copilot Chat can provide guidance and support for common coding tasks and challenges in the targeted programming language.",
   "C": "GitHub Copilot can convert comments into code to grasp the syntax and nuances of a new programming language.",
   "D": "GitHub Copilot can provide contextualized code suggestions and answer sources from an organization’s documentation."
  },
  "answer": [
   "B"
  ],
  "stem": "How can GitHub Copilot facilitate a smoother learning experience when diving into a new programming language?",
  "votes": "B 100%"
 },
 {
  "id": 94,
  "topic": "Developer use cases for AI",
  "type": "mcq",
  "options": {
   "A": "Utilize GitHub Copilot’s capability to directly access and used databases to create sample data.",
   "B": "Leveraging GitHub Copilot’s ability to independently initiate and manage data storage services.",
   "C": "Leveraging GitHub Copilot’s suggestions to create a data based on API documentation in the repository.",
   "D": "Utilizing GitHub Copilot’s ability to create fictions information from patterns in training data."
  },
  "answer": [
   "C",
   "D"
  ],
  "stem": "What method can a developer use to generate sample data with GitHub Copilot? Each correct answer presents part of the solution. (Choose two.)",
  "votes": "CD 100%"
 },
 {
  "id": 95,
  "topic": "Developer use cases for AI",
  "flag": "red",
  "flagVotes": "AB 63%、BC 38%",
  "verified": "部分確認：A 成立；B 無文件證據；C 選單疑似不存在",
  "type": "mcq",
  "options": {
   "A": "By using the “/fix” command in GitHub Copilot in-line chat.",
   "B": "By adding comments to your code and triggering a suggestion.",
   "C": "By highlighting the code, you want to fix, right-clicking, and selecting “Refactor using GitHub Copilot.”",
   "D": "By highlighting the code you want to fix, right-clicking, and selecting “Fix using GitHub Copilot.”",
   "E": "By running the gh copilot fix command."
  },
  "answer": [
   "A",
   "B"
  ],
  "stem": "How can you use GitHub Copilot to get inline suggestions for refactoring your code? (Choose two.)",
  "votes": "AB 63%、BC 38%"
 },
 {
  "id": 96,
  "topic": "Developer use cases for AI",
  "type": "image",
  "kind": "DRAG DROP",
  "stem": "You need to develop a project by using GitHub Copilot. The project must meet the following requirements: • GitHub Copilot must suggest code directly as you type in the editor. • GitHub Copilot must help you reason through an approach before you write any code. What should you use for each requirement? To answer, drag the appropriate features to the correct requirements. Each feature may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content. NOTE: Each correct selection is worth one point.",
  "imgContent": "功能清單：Agent mode｜GitHub Copilot CLI｜Inline suggestions｜Plan mode",
  "images": [
   "GH-300_images/Q96_a.png",
   "GH-300_images/Q96_b.png"
  ],
  "answerLines": [
   "Suggest code directly as you type in the editor → Inline suggestions",
   "Reason through an approach before coding → Plan mode"
  ]
 },
 {
  "id": 97,
  "topic": "Testing with GitHub Copilot",
  "type": "mcq",
  "options": {
   "A": "GitHub Copilot’s capability to optimize complex mathematical algorithms beyond manual coding.",
   "B": "GitHub Copilot’s ability to execute and verify mathematical results in real-time.",
   "C": "GitHub Copilot’s automatic update of outdated mathematical formulas to modern standards.",
   "D": "GitHub Copilot’s reliance on pattern-based responses without verifying computation accuracy."
  },
  "answer": [
   "D"
  ],
  "stem": "What caution should developers exercise when using GitHub Copilot for assistance with mathematical computations?",
  "votes": "D 100%"
 },
 {
  "id": 98,
  "topic": "Testing with GitHub Copilot",
  "flag": "yellow",
  "flagVotes": "C 25%、D 75%",
  "type": "mcq",
  "options": {
   "A": "By using a specific slash command in the prompt.",
   "B": "By using a specific command in the terminal.",
   "C": "By using a specific setting in GitHub Copilot’s configuration.",
   "D": "By using specific prompt examples in your chat request."
  },
  "answer": [
   "D"
  ],
  "stem": "When using GitHub Copilot Chat to generate boilerplate code for various test types, how can you guide the AI to follow the testing standards of your company?",
  "votes": "C 25%、D 75%"
 },
 {
  "id": 99,
  "topic": "Testing with GitHub Copilot",
  "type": "mcq",
  "options": {
   "A": "Having a high test coverage percentage in the codebase.",
   "B": "Using well-known coding practices in your repository.",
   "C": "Ensuring that the correct context is available to GitHub Copilot.",
   "D": "Close all the tabs in your IDE that do not have tests in them."
  },
  "answer": [
   "C"
  ],
  "stem": "When using GitHub Copilot to identify missing tests in your codebase, which of the following is the most important factor to consider?",
  "votes": "C 100%"
 },
 {
  "id": 100,
  "topic": "Testing with GitHub Copilot",
  "type": "mcq",
  "options": {
   "A": "By providing documentation references based on industry best practices.",
   "B": "By automatically fixing all tests in the code based on the context.",
   "C": "By identifying a pattern in the way you write tests and suggesting similar patterns for future tests.",
   "D": "By writing the implementation code for the function based on context"
  },
  "answer": [
   "C"
  ],
  "stem": "How can GitHub Copilot assist in maintaining consistency across your tests?",
  "votes": "C 100%"
 },
 {
  "id": 101,
  "topic": "Testing with GitHub Copilot",
  "type": "mcq",
  "options": {
   "A": "/create-tests",
   "B": "/generate-tests",
   "C": "/tests",
   "D": "/init-tests"
  },
  "answer": [
   "C"
  ],
  "stem": "When using GitHub Copilot Chat to generate unit tests, which slash command would you use?",
  "votes": "C 100%"
 },
 {
  "id": 102,
  "topic": "Testing with GitHub Copilot",
  "type": "mcq",
  "options": {
   "A": "It decreases software vulnerabilities from third party dependencies.",
   "B": "It increases productivity by automating repetitive coding tasks.",
   "C": "It reduces developer overhead by automating testing workflows.",
   "D": "It replaces the need for developers in the software development process."
  },
  "answer": [
   "B"
  ],
  "stem": "Which of the following statements best describes the impact of GitHub Copilot on the software development process?",
  "votes": "B 100%"
 },
 {
  "id": 103,
  "topic": "Testing with GitHub Copilot",
  "type": "mcq",
  "options": {
   "A": "Creation of end-to-end performance testing scenarios for a web application",
   "B": "Creation of a unit test scenario for newly developed Python code",
   "C": "Create a technical requirement specification from the business requirement documentation",
   "D": "Explain a legacy COBOL code and translate the code to another language like C#"
  },
  "answer": [
   "B",
   "D"
  ],
  "stem": "Identify the right use cases where GitHub Copilot Chat is most effective. Each correct answer presents part of the solution. (Choose two.)",
  "votes": "BD 100%"
 },
 {
  "id": 104,
  "topic": "Testing with GitHub Copilot",
  "type": "mcq",
  "options": {
   "A": "Because GitHub Copilot generates the best code possible for the test scenario.",
   "B": "Because GitHub Copilot can cover all possible scenarios in your test cases.",
   "C": "Because GitHub Copilot replaces the need for manual testing.",
   "D": "Because GitHub Copilot’s generated test cases may not cover all possible scenarios."
  },
  "answer": [
   "D"
  ],
  "stem": "Why code reviewing still necessary when using GitHub Copilot to write tests?",
  "votes": "D 100%"
 },
 {
  "id": 105,
  "topic": "Testing with GitHub Copilot",
  "type": "mcq",
  "options": {
   "A": "Constructs detailed test documentation.",
   "B": "Creates unit tests for the selected code.",
   "C": "Executes test cases to find issues with the code.",
   "D": "Integrates with external testing frameworks."
  },
  "answer": [
   "B"
  ],
  "stem": "How does the ‘/tests’ slash command assist developers?"
 },
 {
  "id": 106,
  "topic": "Testing with GitHub Copilot",
  "type": "mcq",
  "options": {
   "A": "GitHub Copilot’s limitations in generating unit tests can vary based on the IDE version you are using.",
   "B": "GitHub Copilot primarily suggest basic unit tests that focus on core functionalities, often requiring additional input from developers for comprehensive coverage.",
   "C": "GitHub Copilot can handle any complexity in code and automatically generate appropriate unit tests.",
   "D": "GitHub Copilot can generate all types of unit tests, including those for edge cases and complex integration scenarios."
  },
  "answer": [
   "B"
  ],
  "stem": "How can GitHub Copilot be limited when it comes to suggesting unit tests?"
 },
 {
  "id": 107,
  "topic": "Privacy fundamentals and context exclusions",
  "type": "mcq",
  "options": {
   "A": "The GitHub Copilot errors panel in your IDE",
   "B": "The GitHub Copilot logs on GitHub.com under your user settings",
   "C": "The code suggestions window will display a warning message",
   "D": "The GitHub Copilot icon in the status bar of the editor will display a message"
  },
  "answer": [
   "D"
  ],
  "stem": "Where can you validate if GitHub Copilot is not returning suggestions because of content exclusions?",
  "votes": "D 100%"
 },
 {
  "id": 108,
  "topic": "Privacy fundamentals and context exclusions",
  "type": "mcq",
  "options": {
   "A": "When the user prompts with @workspace.",
   "B": "When the repository level settings allow overrides by the user.",
   "C": "If the content exclusion was configured at the enterprise level, and is overwritten at the organization level.",
   "D": "If the contents of an excluded file are referenced in code that is not excluded, for example function calls."
  },
  "answer": [
   "D"
  ],
  "stem": "When can GitHub Copilot still use content that was excluded using content exclusion?",
  "votes": "D 100%"
 },
 {
  "id": 109,
  "topic": "Privacy fundamentals and context exclusions",
  "type": "mcq",
  "options": {
   "A": "Blocking license check configuration",
   "B": "Blocking public code matches",
   "C": "Allowing license check configuration",
   "D": "Allowing public code matches"
  },
  "answer": [
   "B"
  ],
  "stem": "What GitHub Copilot configuration needs to be enabled to protect against IP infringements?",
  "votes": "B 100%"
 },
 {
  "id": 110,
  "topic": "Privacy fundamentals and context exclusions",
  "flag": "red",
  "flagVotes": "A 67%、D 33%",
  "verified": "D 被文件反駁；A 以排除法最接近",
  "type": "mcq",
  "options": {
   "A": "Content exclusions can be worked around as it is only available for Git repositories.",
   "B": "Repository administrators and organization owners cannot manage content exclusion settings.",
   "C": "Content exclusions are only available in the GitHub Copilot Individual plan.",
   "D": "Content exclusions can only be configured by an enterprise administrator."
  },
  "answer": [
   "A"
  ],
  "stem": "What is a limitation of content exclusions?",
  "votes": "A 67%、D 33%"
 },
 {
  "id": 111,
  "topic": "Privacy fundamentals and context exclusions",
  "type": "mcq",
  "options": {
   "A": "Gists",
   "B": "Repositories",
   "C": "Files",
   "D": "Lines in files",
   "E": "Folders"
  },
  "answer": [
   "B",
   "C",
   "E"
  ],
  "stem": "What content can be configured to be excluded with content exclusions? Each correct answer presents part of the solution. (Choose three.)",
  "votes": "BCE 100%"
 },
 {
  "id": 112,
  "topic": "Privacy fundamentals and context exclusions",
  "type": "mcq",
  "options": {
   "A": "Upgrade to Copilot Business",
   "B": "Add a .gitignore file to the repo",
   "C": "Have an organization owner configure content exclusions",
   "D": "Have a repo administrator configure content exclusions",
   "E": "Use the #file Chat variable to exclude the files"
  },
  "answer": [
   "A"
  ],
  "stem": "A team is using GitHub Copilot Individual in their daily development activities. They need to exclude specific files from being used to inform code completion suggestions. How can they achieve this?",
  "votes": "A 100%"
 },
 {
  "id": 113,
  "topic": "Privacy fundamentals and context exclusions",
  "type": "mcq",
  "options": {
   "A": "If GitHub Copilot can connect to the server selected in your user settings.",
   "B": "If the user is in an organization that has content exclusions configured.",
   "C": "If the content exclusion settings changed in the last 30 minutes or before that.",
   "D": "If the user is part of the content exclusion team that limits the use of content exclusions."
  },
  "answer": [
   "B",
   "C"
  ],
  "stem": "What do you check when GitHub Copilot content exclusions are not working? Each correct answer presents part of the solution. (Choose two.)",
  "votes": "BC 100%"
 },
 {
  "id": 114,
  "topic": "Privacy fundamentals and context exclusions",
  "type": "mcq",
  "options": {
   "A": "Using meaningful variable names",
   "B": "Clearly defining the problem or task",
   "C": "Including personal information in the code comments",
   "D": "Providing examples of desired output",
   "E": "Use a gitignore file to exclude irrelevant files"
  },
  "answer": [
   "A",
   "B",
   "D"
  ],
  "stem": "What practices enhance the quality of suggestions provided GitHub Copilot? (Choose three.)",
  "votes": "ABD 100%"
 },
 {
  "id": 115,
  "topic": "Privacy fundamentals and context exclusions",
  "type": "mcq",
  "options": {
   "A": "The explanations are primarily derived from user-provided documentation.",
   "B": "The explanations are dynamically updated based on user feedback.",
   "C": "GitHub Copilot Chat uses a static database for generating explanations.",
   "D": "Reviewing and validating the generated output for accuracy and completeness."
  },
  "answer": [
   "D"
  ],
  "stem": "What is a key consideration when relying on GitHub Copilot Chat’s explanations of code functionality and proposed improvements?",
  "votes": "D 100%"
 },
 {
  "id": 116,
  "topic": "Privacy fundamentals and context exclusions",
  "type": "mcq",
  "options": {
   "A": "By automatically writing all the tests for the function.",
   "B": "By suggesting assertions based on the code’s context and semantics.",
   "C": "By executing the test cases to validate the correctness of the code.",
   "D": "By writing the implementation code for the function."
  },
  "answer": [
   "B"
  ],
  "stem": "How does GitHub Copilot Chat ensure that a function works correctly?",
  "votes": "B 100%"
 },
 {
  "id": 117,
  "topic": "Privacy fundamentals and context exclusions",
  "type": "mcq",
  "options": {
   "A": "Running code suggestions through filters designed to detect public code",
   "B": "Comparing suggestions against public code using machine learning",
   "C": "Reviewing the user’s browsing history to identify public repositories",
   "D": "Analyzing the context and structure of the code being written"
  },
  "answer": [
   "A"
  ],
  "stem": "What is the process behind identifying public code matches when using a public code filter enabled in GitHub Copilot?"
 },
 {
  "id": 118,
  "topic": "Privacy fundamentals and context exclusions",
  "type": "mcq",
  "options": {
   "A": "GitHub Copilot Chat in the IDE",
   "B": "GitHub Copilot access to Bing",
   "C": "GitHub Copilot duplication detection filter",
   "D": "GitHub Copilot Chat in GitHub Mobile"
  },
  "answer": [
   "C"
  ],
  "stem": "What GitHub Copilot feature can be configured at the organization level to prevent GitHub Copilot suggesting publicly available code snippets?",
  "votes": "C 100%"
 },
 {
  "id": 119,
  "topic": "Privacy fundamentals and context exclusions",
  "type": "mcq",
  "options": {
   "A": "Accepted chat suggestions",
   "B": "Changes to content exclusion settings",
   "C": "Code suggestions made by GitHub Copilot",
   "D": "Suggestions blocked by duplication detection filtering"
  },
  "answer": [
   "B"
  ],
  "stem": "Which of the following GitHub Copilot Business related activities can be tracked using the organization audit logs?"
 },
 {
  "id": 120,
  "topic": "Privacy fundamentals and context exclusions",
  "type": "mcq",
  "options": {
   "A": "Up to 30 minutes",
   "B": "60-90 minutes",
   "C": "45-60 minutes",
   "D": "24 hours"
  },
  "answer": [
   "A"
  ],
  "stem": "How long does it take content exclusion to add or be updated?"
 },
 {
  "id": 121,
  "topic": "Privacy fundamentals and context exclusions",
  "type": "mcq",
  "options": {
   "A": "By enforcing strict coding standards that ensure optimal performance.",
   "B": "By providing detailed reports on the performance of the codebase.",
   "C": "By analyzing the codebase and suggesting more efficient algorithms or data structures.",
   "D": "By automatically rewriting the codebase to use more efficient code."
  },
  "answer": [
   "C"
  ],
  "stem": "How does GitHub Copilot suggest code optimizations for improved performance?"
 },
 {
  "id": 122,
  "topic": "Privacy fundamentals and context exclusions",
  "type": "mcq",
  "options": {
   "A": "Rename the files to include the suffix_no_copilot",
   "B": "Modify the .gitignore file to include the specific files",
   "C": "Use the GitHub Copilot settings in the user interface to exclude files",
   "D": "Add the specific files to a copilot .ignore file"
  },
  "answer": [
   "C"
  ],
  "stem": "What is the correct way to exclude specific files from being used by GitHub Copilot Business during code suggestions?"
 },
 {
  "id": 123,
  "topic": "Privacy fundamentals and context exclusions",
  "type": "mcq",
  "options": {
   "A": "The IDE will not count coding suggestions in the excluded content.",
   "B": "The excluded content is no longer used while debugging the code.",
   "C": "The excluded content is not directly available to GitHub Copilot to use a context.",
   "D": "GitHub Copilot suggestions are no longer available in the excluded files."
  },
  "answer": [
   "C",
   "D"
  ],
  "stem": "What are the effects of content exclusions? Each correct answer presents part of the solution. (Choose two.)"
 },
 {
  "id": 124,
  "topic": "Privacy fundamentals and context exclusions",
  "type": "image",
  "kind": "HOTSPOT",
  "stem": "You use GitHub Copilot to develop a web app named App1 in a repository named Repo1. Repo1 contains generated files and supporting artifacts. You discover that GitHub Copilot suggestions in the IDE are being generated based on files that are NOT part of the App1 source code. You need to ensure that GitHub Copilot ignores these files. What should you do? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point.",
  "imgContent": "Configure：Copilot content exclusion rules／File paths for the .gitignore file／Private visibility for Repo1；By modifying：Your IDE profile／The GitHub Copilot settings of Repo1／The Security settings of the GitHub account",
  "images": [
   "GH-300_images/Q124_a.png",
   "GH-300_images/Q124_b.png"
  ],
  "answerLines": [
   "Configure：Copilot content exclusion rules",
   "By modifying：The GitHub Copilot settings of Repo1"
  ]
 }
];
