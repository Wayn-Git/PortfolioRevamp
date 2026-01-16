import {
  Github,
  ExternalLink,
  Cpu,
  Lock,
  AudioWaveform,
  TrendingUp,
  Database,
  MessageSquare
} from "lucide-react";

/* =======================
   PERSONAL INFO
======================= */

export const personalInfo = {
  name: "Bilal Rukundi",
  title: "AI & Machine Learning Engineer",
  subtitle:
    "Building practical AI systems across NLP, audio processing, and data-driven prediction.",
  email: "bilalrukundi1658@gmail.com",
  github: "https://github.com/Wayn-Git",
  linkedin: "https://www.linkedin.com/in/bilal-rukundi/",
  cvUrl: "/ResumeUpdated.pdf"
};

/* =======================
   PROJECTS
======================= */

export const projects = [
  {
    id: 1,
    title: "Sound Script",
    category: "Audio ML & NLP",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=1600&q=80",
    description:
      "An audio-to-text pipeline that converts urban sound recordings into short descriptive summaries.",
    longDescription:
      "Sound Script explores how environmental audio can be interpreted and translated into natural language. Audio clips are processed to extract features and classify sound categories such as sirens, rain, or footsteps. These predictions are then mapped to simple textual descriptions, focusing on the end-to-end audio understanding pipeline.",
    techStack: ["Python", "Librosa", "PyTorch", "Transformers"],
    githubUrl: "https://github.com/Wayn-Git/Urban-Sound-Narrative-Generator",
    demoUrl: "https://soundscript-pi.vercel.app/",
    results: {
      classification: "Urban sound categories",
      accuracy: "70–80% (classification)",
      output: "Text summaries"
    }
  },
  {
    id: 2,
    title: "Ingress ChatBot",
    category: "RAG & LLM Applications",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1600&q=80",
    description:
      "A document-aware chatbot using Retrieval-Augmented Generation for grounded responses.",
    longDescription:
      "This project was built to experiment with Retrieval-Augmented Generation (RAG). Mission-related documents are chunked, embedded, and stored in a vector database. When a user asks a question, relevant context is retrieved and passed to the language model, helping reduce unsupported or hallucinated answers.",
    techStack: ["Python", "LangChain", "OpenAI API", "ChromaDB", "React"],
    githubUrl: "https://github.com/Wayn-Git/IngressChatBot",
    demoUrl: null,
    results: {
      retrieval: "Vector-based search",
      latency: "~1–2 seconds",
      focus: "Context-grounded answers"
    }
  },
  {
    id: 3,
    title: "Financial MCP Estimator",
    category: "Time Series & Predictive ML",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1600&q=80",
    description:
      "A time-series forecasting project using LSTM models to study stock price trends.",
    longDescription:
      "This project focuses on understanding time-series modeling using LSTM networks. Historical market data is used to predict short-term price movements. It also experiments with exposing predictions as callable tools within a Model Context Protocol (MCP) setup.",
    techStack: ["Python", "TensorFlow", "LSTM", "Pandas"],
    githubUrl: "https://github.com/Wayn-Git/financial-mcp",
    demoUrl: "https://financial-mcp-vert.vercel.app/",
    results: {
      model: "LSTM",
      data: "Historical stock data",
      status: "Experimental"
    }
  },
  {
    id: 4,
    title: "PrivacyEnc",
    category: "Applied Cryptography",
    status: "In Progress",
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=1600&q=80",
    description:
      "A desktop utility for encrypting files and text using standard cryptographic algorithms.",
    longDescription:
      "PrivacyEnc is a learning-focused security project that implements AES-based encryption for local file and text protection. The emphasis is on correct cryptographic usage, local-only processing, and understanding key handling.",
    techStack: ["Python", "Cryptography", "PyQt"],
    githubUrl: "https://github.com/Wayn-Git/PrivacyEnc",
    demoUrl: null,
    results: {
      encryption: "AES-based",
      processing: "Local only",
      focus: "Applied security fundamentals"
    }
  },
  {
    id: 5,
    title: "Voice Emotion Detector",
    category: "Speech & Deep Learning",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1590650153855-d9e808231d41?w=1600&q=80",
    description:
      "A speech emotion recognition system trained on labeled voice datasets.",
    longDescription:
      "This project classifies emotional states from speech audio using extracted MFCC features and deep learning models. It was built to understand speech preprocessing, dataset handling, and evaluation of audio-based classifiers.",
    techStack: ["Python", "TensorFlow", "Librosa", "NumPy"],
    githubUrl: "https://github.com/Wayn-Git/VoiceEmotionDetector",
    demoUrl: null,
    results: {
      dataset: "RAVDESS",
      output: "Emotion labels",
      focus: "Speech classification"
    }
  },
  {
    id: 6,
    title: "DataForge",
    category: "Data Engineering",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=80",
    description:
      "A utility that automates common data cleaning and preprocessing tasks.",
    longDescription:
      "DataForge simplifies early-stage data preparation by handling missing values, text normalization, and basic consistency checks. The cleaned output can be directly used for analysis or machine learning pipelines.",
    techStack: ["Python", "Flask", "Pandas", "Regex"],
    githubUrl: "https://github.com/Wayn-Git/DataForge",
    demoUrl: null,
    results: {
      input: "Raw CSV data",
      output: "Cleaned datasets",
      focus: "EDA automation"
    }
  }
];

/* =======================
   SKILLS
======================= */

export const skills = {
  languages: [
    { name: "Python", level: 90 },
    { name: "C/C++", level: 75 },
    { name: "SQL", level: 85 },
    { name: "JavaScript", level: 70 },
    { name: "Java", level: 20 }
  ],
  frameworks: [
    { name: "PyTorch", level: 88 },
    { name: "TensorFlow", level: 82 },
    { name: "LangChain", level: 85 },
    { name: "Scikit-learn", level: 92 },
    { name: "React", level: 75 },
    { name: "FastAPI", level: 85 }
  ],
  libraries: [
    { name: "NumPy", level: 92 },
    { name: "Pandas", level: 90 },
    { name: "Matplotlib", level: 85 },
    { name: "Seaborn", level: 82 },
    { name: "SciPy", level: 75 },
    { name: "NLTK", level: 80 },
    { name: "spaCy", level: 78 },
    { name: "TextBlob", level: 85 },
    { name: "OpenCV", level: 75 },
    { name: "MediaPipe", level: 72 }
  ],
  tools: [
    { name: "Git", level: 90 },
    { name: "Docker", level: 72 },
    { name: "AWS", level: 68 },
    { name: "Hugging Face", level: 85 },
    { name: "Linux", level: 88 }
  ]
};

/* =======================
   EXPERIENCE
======================= */

export const experience = [
  {
    id: 1,
    title: "AI Research Intern",
    company: "DeepSurg",
    period: "2025 – Present",
    description:
      "Working on multimodal AI systems for surgical assistance and decision support.",
    achievements: [
      "Developing computer vision models for surgical instrument tracking",
      "Improving inference efficiency for real-time usage",
      "Collaborating with clinicians to validate annotated datasets"
    ]
  },
  {
    id: 2,
    title: "AI & Machine Learning Student",
    company: "Academic & Independent Projects",
    period: "2023 – Present",
    description:
      "Hands-on learning and experimentation across machine learning, NLP, audio processing, and data engineering.",
    achievements: [
      "Built multiple end-to-end ML projects across audio, NLP, and time-series",
      "Explored RAG pipelines and vector database usage",
      "Actively contributing to open-source and personal research projects"
    ]
  }
];

/* =======================
   ABOUT
======================= */

export const aboutText = `
I’m a Machine Learning Engineer with a strong interest in Generative AI, audio-based systems, and applied security. I enjoy building systems that are technically sound, practical to use, and grounded in real-world data.

Currently, I’m exploring Retrieval-Augmented Generation (RAG) and Model Context Protocols (MCP), focusing on how AI systems can interact more reliably with external data sources such as documents, financial data, and APIs.

My approach emphasizes strong fundamentals, careful experimentation, and learning through building end-to-end systems.
`;

/* =======================
   STATS
======================= */

export const stats = [
  { label: "Projects Built", value: "6+" },
  { label: "Domains Covered", value: "Audio, NLP, Data" },
  { label: "Open Source Repos", value: "10+" },
  { label: "Core Stack", value: "Python / ML / NLP" }
];
