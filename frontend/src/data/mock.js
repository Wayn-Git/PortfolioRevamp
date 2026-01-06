import { Github, ExternalLink, Code, Cpu, Lock, AudioWaveform, TrendingUp, Database, MessageSquare } from 'lucide-react';

export const personalInfo = {
  name: "Bilal Rukundi",
  title: "AI & Machine Learning Engineer",
  subtitle: "Architecting intelligent systems at the intersection of NLP, Audio Processing, and Predictive Finance.",
  email: "bilalrukundi1658@gmail.com",
  github: "https://github.com/Wayn-Git",
  linkedin: "https://www.linkedin.com/in/bilal-rukundi/", 
  cvUrl: "/ResumeUpdated.pdf" 
};

export const projects = [
  {
    id: 1,
    title: "Urban Sound Narrative",
    category: "Generative AI & Audio",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=2070&auto=format&fit=crop",
    description: "An AI pipeline that transforms raw urban audio soundscapes into compelling textual narratives using deep learning.",
    longDescription: "A sophisticated multi-modal AI system that bridges the gap between machine hearing and creative writing. The system ingests raw urban audio data, classifies environmental sounds (sirens, footsteps, rain) using deep learning classifiers, and utilizes Large Language Models (LLMs) to weave these acoustic cues into descriptive, atmospheric narratives.<br><br>• <strong>Audio Classification:</strong> Custom CNNs trained on UrbanSound8K.<br>• <strong>Generative Narrative:</strong> Context-aware text generation via Transformers.<br>• <strong>Pipeline:</strong> End-to-end processing from .wav to story.",
    techStack: ["Python", "Librosa", "PyTorch", "Transformers", "NLP"],
    githubUrl: "https://github.com/Wayn-Git/Urban-Sound-Narrative-Generator",
    demoUrl: null,
    results: {
      audio_accuracy: "94%",
      inference_time: "<2s",
      model_arch: "Hybrid CNN-LLM"
    }
  },
  {
    id: 2,
    title: "Ingress ChatBot",
    category: "RAG & LLMs",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=2006&auto=format&fit=crop",
    description: "A context-aware AI assistant built for the Ingress IIT Hyderabad mission, utilizing Retrieval-Augmented Generation.",
    longDescription: "Designed to navigate complex mission-specific data, this chatbot leverages Retrieval-Augmented Generation (RAG) to provide accurate, hallucination-free responses. It indexes vast amounts of mission documentation into a vector database, allowing the LLM to query specific contexts before generating an answer.<br><br>• <strong>Vector Database:</strong> Optimized embedding storage for fast retrieval.<br>• <strong>Accuracy:</strong> Fine-tuned prompts to strictly adhere to source material.<br>• <strong>Interface:</strong> Clean React-based frontend for seamless user interaction.",
    techStack: ["Python", "LangChain", "OpenAI API", "ChromaDB", "React"],
    githubUrl: "https://github.com/Wayn-Git/IngressChatBot",
    demoUrl: null,
    results: {
      retrieval_speed: "1.2s",
      context_window: "16k Tokens",
      satisfaction: "98%"
    }
  },
  {
    id: 3,
    title: "Financial MCP Estimator",
    category: "FinTech & Predictive ML",
    status: "In Progress",
    image: "https://images.unsplash.com/photo-1611974765270-ca1258634369?q=80&w=2064&auto=format&fit=crop",
    description: "A Model Context Protocol (MCP) tool utilizing LSTM networks to estimate and predict stock market trends.",
    longDescription: "An advanced financial modeling tool currently in development. It is designed to function within the Model Context Protocol (MCP) ecosystem, allowing AI agents to query real-time stock estimations. The core engine uses Long Short-Term Memory (LSTM) networks to analyze historical time-series data and predict future price movements with confidence intervals.<br><br>• <strong>Architecture:</strong> Stacked LSTM layers for time-series forecasting.<br>• <strong>Integration:</strong> Built as a modular MCP tool for AI agent interoperability.<br>• <strong>Data Pipeline:</strong> Real-time fetching and normalization of market data.",
    techStack: ["Python", "TensorFlow", "LSTM", "Pandas", "MCP Protocol"],
    githubUrl: null, // In progress
    demoUrl: null,
    results: {
      architecture: "LSTM",
      data_source: "Real-time API",
      stage: "Alpha Dev"
    }
  },
  {
    id: 4,
    title: "PrivacyEnc",
    category: "Cybersecurity",
    status: "In Progress",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop",
    description: "A military-grade privacy encryption tool designed to secure sensitive user data with zero-knowledge architecture.",
    longDescription: "PrivacyEnc is a robust security utility focused on accessible cryptography. It implements AES-256 encryption algorithms to secure files and text, ensuring that sensitive data remains mathematically inaccessible to unauthorized entities. The project focuses on a 'Zero-Knowledge' approach where keys are never stored by the application.<br><br>• <strong>Algorithm:</strong> AES-256 (Advanced Encryption Standard).<br>• <strong>Focus:</strong> User-friendly interface for complex cryptographic operations.<br>• <strong>Security:</strong> Local-only processing to prevent data leaks.",
    techStack: ["Python", "Cryptography", "PyQt", "AES-256"],
    githubUrl: "https://github.com/Wayn-Git/PrivacyEnc",
    demoUrl: null,
    results: {
      encryption_std: "AES-256",
      key_handling: "Zero-Knowledge",
      platform: "Cross-platform"
    }
  },
  {
    id: 5,
    title: "Voice Emotion Detector",
    category: "Deep Learning",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1478737270239-2f02b77ac6d5?q=80&w=2066&auto=format&fit=crop",
    description: "Real-time speech emotion recognition system using deep neural networks trained on the RAVDESS dataset.",
    longDescription: "A deep learning application that extracts MFCCs (Mel-frequency cepstral coefficients) from voice audio to classify emotional states. The model achieves high accuracy in distinguishing between happy, sad, angry, and neutral tones, creating potential applications in customer service and mental health monitoring.",
    techStack: ["Python", "TensorFlow", "Librosa", "NumPy", "Jupyter"],
    githubUrl: "https://github.com/Wayn-Git/VoiceEmotionDetector",
    demoUrl: null,
    results: {
      emotions: "7 Classes",
      dataset: "RAVDESS",
      latency: "Real-time"
    }
  },
  {
    id: 6,
    title: "DataForge",
    category: "Data Engineering",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    description: "Automated data cleaning pipeline that detects anomalies, fixes typos, and normalizes datasets instantly.",
    longDescription: "Built to streamline the EDA process, DataForge automatically detects common data quality issues such as missing values, inconsistent casing, and typos. It provides a clean, normalized CSV output ready for machine learning pipelines.",
    techStack: ["Python", "Flask", "Pandas", "Regex", "React"],
    githubUrl: "https://github.com/Wayn-Git/DataForge",
    demoUrl: null,
    results: {
      speed: "2min/MB",
      automation: "100%",
      format: "CSV/JSON"
    }
  }
];

export const skills = {
  languages: [
    { name: "Python", level: 95 },
    { name: "C/C++", level: 80 },
    { name: "SQL", level: 85 },
    { name: "JavaScript", level: 75 }
  ],
  frameworks: [
    { name: "PyTorch", level: 90 },
    { name: "TensorFlow", level: 85 },
    { name: "LangChain", level: 90 },
    { name: "Scikit-learn", level: 95 },
    { name: "React", level: 80 },
    { name: "Flask", level: 85 }
  ],
  tools: [
    { name: "Git", level: 90 },
    { name: "Docker", level: 75 },
    { name: "AWS", level: 70 },
    { name: "HuggingFace", level: 85 },
    { name: "Linux", level: 90 }
  ]
};

export const experience = [
  {
    id: 1,
    title: "AI Research Intern",
    company: "DeepSurg",
    period: "2025 - Present",
    description: "Spearheading the development of multimodal AI systems for real-time surgical assistance and decision support.",
    achievements: [
      "Developing computer vision models for surgical instrument tracking",
      "Optimizing inference time for real-time clinical deployment",
      "Collaborating with surgeons to annotate and validate datasets"
    ]
  },
  {
    id: 2,
    title: "AI & Machine Learning Student",
    company: "Academic & Independent Research",
    period: "2023 - Present",
    description: "Conducting intensive research in Natural Language Processing (NLP), Exploratory Data Analysis (EDA), and scalable model development.",
    achievements: [
      "Built 10+ end-to-end ML projects across Audio, Vision, and NLP domains",
      "Specialized in RAG architectures and Vector Database optimization",
      "Consistently contributing to open-source AI repositories"
    ]
  }
];

export const aboutText = `
I am a Machine Learning Engineer passionate about the convergence of **Generative AI**, **Audio Processing**, and **Secure Computing**. My work focuses on building systems that are not just intelligent, but also practical, secure, and human-centric.

Currently, I am exploring the frontiers of **Model Context Protocols (MCP)** and **Retrieval-Augmented Generation (RAG)**, aiming to create AI agents that can interact with the real world—from financial markets to urban environments—with high precision and reliability.

Whether it's training custom Transformers for narrative generation or designing military-grade encryption tools, I approach every challenge with mathematical rigor and a product-first mindset.
`;

export const stats = [
  { label: "Models Deployed", value: "5+" },
  { label: "Accuracy Peak", value: "98%" },
  { label: "Contributions", value: "450+" },
  { label: "Tech Stack", value: "15+" }
];