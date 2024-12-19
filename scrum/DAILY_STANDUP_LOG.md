---

## Daily Standup Notes  
### **Sprint 01:** Mon 16, Dec, 2024 - 09:00 to Thu 19, Dec, 2024 - 17:30
### **Sprint Goal:** Create Auction Search API with Minimum Data using MongDB, and CLI Tool for Seeding Auction Data

---

### Standup Notes  
#### **Date:** Mon 16, Dec, 2024

#### **Start Time** 08:33PM
#### **End Time** 08:40PM

- **Yesterday/Weekend:**  [What I completed?]
  - [SC] Watched YouTube tutorials to enhance understanding of MongoDB integration and API testing workflows.
  - [SC] Installed MongoDB
  - [SC]  Updated Jira tasks to reflect weekend progress, ensuring all completed steps are documented.
  - [CM] Setup JIRA, and a [Team GitHub repository](https://github.com/Astrotope/mr-level-05-fsd-mission-05-phase-01-group-01/tree/main).
  - [CM] Setup log for Daily Standups, and thes Journals [Design Thinking Journal](../journals/DESIGN_THINKING_JOURNAL.md), [Agile Minsets & Practices Journal](../journals/AGILE_MINDSETS_PRACTICES_JOURNAL.md), and [Ethics LensesJournal](../journals/ETHICS_LENSES_JOURNAL.md).
  - [CM] Generated a mock [auction items dataset](../datasets/auction-data.json), for seeding the database using Chat GPT 4o.
  - [CM] Used TDD to test and evolve a CLI tool for seeding the MongoDB auction database. [Auction Seeder CLI Tool - Separate Repo.](https://github.com/Astrotope/mr-level-05-fsd-mission-05-phase-01-auction-search/tree/main/cli-tool)
  - [CR] Looking through the Agile - Values, Practices, and Design Thinking.
  - [CR] 
  - [CR] 

- **Today:**  [What I'm working on today?]
  - [SC] Used Test-Driven Development (TDD) to iteratively test and refine the APIs, ensuring reliability and scalability.
  - [SC] Completed Task 5: Integrated the MongoDB database with the backend server to handle dynamic data storage and retrieval.
  - [SC] Completed Task 6: Wrote and executed unit and integration tests for all implemented API endpoints to validate functionality.
  - [CM] Enhance dataset for testing search functionality. Add multiples items in categories that are semantically similar. Will probably use ChatGPT for this.
  - [CM] Journaling in [Design Thinking Journal](../journals/DESIGN_THINKING_JOURNAL.md), [Agile Minsets & Practices Journal](../journals/AGILE_MINDSETS_PRACTICES_JOURNAL.md), and [Ethics LensesJournal](../journals/ETHICS_LENSES_JOURNAL.md).
  - [CM] Research search ranking algorithms, with care to search relevance to end-user, and issues around search bias. [ChatGPT Conversation](https://chatgpt.com/share/675f43d1-0df0-800d-99f3-3b099833ea8e). This conversation covered search ranking algorithms including TF-IDF, BM25, and Semantic Serach using Vector Embeddings (GenAI) and Cosine Similarity. To start with I'm going to build an MVP with basic 'in' string search, and build out from there.
  - [CM] Use TDD development to begin work on Auction Search API/s.
  - [CR] Building CLI tool to interact with Mongo DB.
  - [CR] 
  - [CR] 

- **Blockers:**  [What is blocking me?] 
  - [SC] None
  - [CM] None. Other than I need someone to clone my CLI tool repository, and test it on their system. [Auction Seeder CLI Tool - Separate Repo.](https://github.com/Astrotope/mr-level-05-fsd-mission-05-phase-01-auction-search/tree/main/cli-tool)
  - [CR] None.

- **Updates/Notes**: 
  - [SC] 
  - [CM] 
  - [CR] 

- **Action Items**: 
  - [SC] 
  - [CM] 
  - [CR] 

---

### Standup Notes  
#### **Date:** Tue 17, Dec, 2024

#### **Start Time** 08:13PM
#### **End Time** 08:23PM

- **Yesterday:**  [What I completed?]
  - [SC] Successfully tested APIs; all endpoints are now functional and meet the defined requirements.
  - [SC] Created a comprehensive README document to provide clear project details, setup instructions, and usage guidelines.
  - [SC] Began documenting the project, aligning with the rubric requirements to ensure clarity and completeness.
  - [CM] 
  - [CM] Look at docker-compose.yml for Milvus Vector Database
  - [CM] Decluttering docker-desktop - images volumes containers.
  - [CR] Reading through the marking rubric. 
  - [CR] Went through online MongoDB tutorial.
  - [CR] 

- **Today:**  [What I'm working on today?]
  - [SC] Conducted additional research on various types of databases to evaluate and select the most suitable option for the project's requirements.
  - [SC] 
  - [SC] 
  - [CM] Have a look at Semantic Search with Milvus or another vector DB.
  - [CM] 
  - [CM] 
  - [CR] Finish MongoDB and seed auction files - CLI Tool
  - [CR] 
  - [CR] 

- **Blockers:**  [What is blocking me?] 
  - [SC] None
  - [CM] None.
  - [CR] None.

- **Updates/Notes**: 
  - [SC] 
  - [CM] 
  - [CR] Cannot attend standup on Wed, as meeting with L4.

- **Action Items**: 
  - [SC] 
  - [CM] 
  - [CR] 

---

### Standup Notes  
#### **Date:** Wed 18, Dec, 2024

#### **Start Time** 8:30PM
#### **End Time** 8:40PM

- **Yesterday:**  [What I completed?]
  - [SC] Progress was limited today due to feeling unwell, but I managed to review tasks and plan for upcoming work.
  - [SC] 
  - [SC] 
  - [CM] Looked at Milvus vector DB, and vector embedding with Google text-embedding-001 model
  - [CM] Tried to get Milvus DB to start in Docker. Some issue with current build. Product didn't feel stable/reliable
  - [CM] Also had to have a closer look at how the text-embedding-001 model returns it's vectors
  - [CR] Completed CLI tool, had to reinstall mongoDB but working now :)
  - [CR] 
  - [CR] 

- **Today:**  [What I'm working on today?]
  - [SC] Exploring potential enhancements for the current project, including optimizations and additional features to improve functionality and user experience.
  - [SC] 
  - [SC] 
  - [CM] Change to QDrant for my vector DB. Excellent choice, very easy to work. Also moved to text-embedding-004 model.
  - [CM] Created docker-compose for QDrant, and scripts to setup a collection in qdrant.
  - [CM] Created a script to create vector embeddings for each auction item's text, and load it into QDrant along with MongoDB id
  - [CM] Created dataset for testing semantic search, with semantic variations of bike, and wood/wooden auction items.
  - [CM] Semantic search up and runnnig. YEAH! Created some extra query parameters for no. of items returned, and search mode.
  - [CM] Updated tests, and made sure they were passing. Updated documentation. Pushed code to GitHub.
  - [CR] Working on documentation/readme for CLI
  - [CR] Uploading to shared git repo
  - [CR] 

- **Blockers:**  [What is blocking me?] 
  - [SC] None
  - [CM] None.
  - [CR] None

- **Updates/Notes**: 
  - [SC] 
  - [CM] My updated dataset is available if you want to use it.
  - [CR] All done in terms of coding

- **Action Items**: 
  - [SC] 
  - [CM] 
  - [CR] 

---

### Standup Notes  
#### **Date:** Thu 19, Dec, 2024

#### **Start Time** 
#### **End Time** 

- **Yesterday:**  [What I completed?]
  - [SC] 
  - [SC] 
  - [SC] 
  - [CM] 
  - [CM] 
  - [CM] 
  - [CR] 
  - [CR] 
  - [CR] 

- **Today:**  [What I'm working on today?]
  - [SC] 
  - [SC] 
  - [SC] 
  - [CM] 
  - [CM] 
  - [CM] 
  - [CR] 
  - [CR] 
  - [CR] 

- **Blockers:**  [What is blocking me?] 
  - [SC] 
  - [CM] 
  - [CR] 

- **Updates/Notes**: 
  - [SC] 
  - [CM] 
  - [CR] 

- **Action Items**: 
  - [SC] 
  - [CM] 
  - [CR] 

---
