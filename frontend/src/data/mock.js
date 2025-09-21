// Mock data for Bilal Rukundi's portfolio
export const personalInfo = {
  name: "Bilal Rukundi",
  title: "Machine Learning Developer",
  subtitle: "Building intelligent solutions with precision and purpose",
  email: "bilalrukundi1658@gmail.com",
  github: "https://github.com/Wayn-Git",
  linkedin: "https://www.linkedin.com/in/bilal-rukundi/", 
  cvUrl: "/ResumeUpdated.pdf" 
};

export const projects = [
  {
    id: 1,
    title: "Voice Emotion Detector",
    description: "A deep learning system that analyzes speech patterns to detect and classify emotions in real-time voice input.",
    longDescription: "An innovative machine learning project focused on emotion recognition from speech signals. Currently in development, the system will: <br><br>• Process real-time audio input for emotion detection<br>• Extract key acoustic features from voice samples<br>• Classify multiple emotional states (happy, sad, angry, neutral, etc.)<br>• Provide confidence scores for detected emotions<br><br>Using the RAVDESS dataset for training and implementing state-of-the-art deep learning architectures for audio processing.",
    techStack: ["Python", "TensorFlow", "Librosa", "NumPy", "Jupyter"],
    category: "Deep Learning",
    status: "In Progress",
    githubUrl: "https://github.com/Wayn-Git/VoiceEmotionDetector",
    demoUrl: null,
    results: {
      emotions_detected: "7+",
      dataset_size: "RAVDESS",
      development_phase: "Research"
    },
    image: "/ProjectImage/voiceEmotion.png"
  },
  {
    id: 2,
    title: "DataForge",
    description: "An automated data cleaning pipeline that detects and fixes typos, normalizes labels, and handles missing values in CSV datasets.",
    longDescription: "Built during a hackathon, DataForge is a web application that streamlines the data cleaning process through an intuitive UI. The system automatically: <br><br>• Detects and fixes typos in data entries<br>• Normalizes inconsistent labels across columns<br>• Handles missing values with configurable strategies<br>• Generates detailed cleaning reports<br><br>Features a Flask backend for robust data processing and a lightweight frontend for easy interaction.",
    techStack: ["Python", "Flask", "Pandas", "HTML/CSS", "JavaScript"],
    category: "Data Processing",
    status: "Completed",
    githubUrl: "https://github.com/Wayn-Git/DataForge",
    demoUrl: null,
    results: {
      processing_speed: "~2 min/MB",
      supported_format: "CSV",
      team_size: "4 members"
    },
    image: "/ProjectImage/dataforge.jpg"
  },
  {
    id: 3,
    title: "Machine Learning from Scratch",
    description: "Implementation of core ML algorithms without external libraries to understand the mathematical foundations.",
    longDescription: "A comprehensive educational project implementing fundamental machine learning algorithms from scratch using only NumPy and basic Python libraries. Includes implementations of linear regression, logistic regression, neural networks, k-means clustering, and decision trees. Each algorithm is thoroughly documented with mathematical explanations and visualizations.",
    techStack: ["Python", "NumPy", "Matplotlib", "Seaborn"],
    category: "Educational",
    status: "In Progress",
    githubUrl: "https://github.com/Wayn-Git/MLFromScratch",
    demoUrl: null,
    results: {
      algorithms_implemented: "5",
      documentation_pages: "2",
      test_coverage: "85%"
    },
    image: "/ProjectImage/MLScratch.png"
  },
  {
    id: 4,
    title: "Fraud Detection System",
    description: "A machine learning solution for detecting fraudulent financial transactions using advanced feature engineering and Random Forest classification.",
    longDescription: "Developed a comprehensive fraud detection system that tackles the challenges of imbalanced financial data. Key features include: <br><br>• Advanced feature engineering with temporal and behavioral patterns<br>• Robust handling of extreme class imbalance (fraud <1%)<br>• Transaction type analysis and risk scoring<br>• Prevention of feature leakage in financial data<br><br>Implemented using Random Forest with SMOTE balancing, achieving high precision in fraud detection while maintaining reasonable recall.",
    techStack: ["Python", "Scikit-learn", "Pandas", "Imbalanced-learn", "Seaborn"],
    category: "Financial ML",
    status: "Completed",
    githubUrl: "https://github.com/Wayn-Git/FraudDetection",
    demoUrl: null,
    results: {
      feature_count: "15+",
      fraud_detection: "High Precision",
      data_coverage: "30 days"
    },
    image: "/ProjectImage/fraudDetect.png"
  },
  {
    id: 5,
    title: "Cat Vs Dog Classifier",
    description: "A deep learning model that classifies images of cats and dogs with ~95%+ accuracy using convolutional neural networks.",
    longDescription: "Built a comprehensive image classification system using TensorFlow and Keras. The model employs transfer learning with MobileNetV2 as the base architecture, fine-tuned on a dataset of 10,000 images. <br><br> Implemented Early Stopping: Prevents overfitting with patience=5 <br> Learning Rate Reduction: Adaptive LR with factor=0.2, patience=3 <br> Data Augmentation: Improves generalization significantly <br> Batch Processing: Efficient training with batch_size=64",
    techStack: ["Python", "TensorFlow", "Keras", "OpenCV", "Streamlit"],
    category: "Deep Learning",
    status: "Completed",
    githubUrl: "https://github.com/Wayn-Git/CatvsDog",
    demoUrl: "https://catvsdogclass.streamlit.app/",
    results: {
      accuracy: "95%+",
      dataset_size: "10,000 images",
      training_time: "~15-20 epochs"
    },
    image: "/ProjectImage/catDog.gif"
  },
  {
    id: 6,
    title: "Heart Failure Prediction",
    description: "A machine learning model that predicts heart failure risk using clinical data with 85% accuracy.",
    longDescription: "Developed a comprehensive healthcare prediction system using ensemble methods including Random Forest, XGBoost, and Gradient Boosting. The model analyzes 13 clinical features to predict heart failure risk. Implemented extensive feature engineering, handled missing data, and created an interactive dashboard for medical professionals using Streamlit.",
    techStack: ["Python", "Scikit-learn", "XGBoost", "Pandas", "Streamlit"],
    category: "Healthcare ML",
    status: "Completed",
    githubUrl: "https://github.com/Wayn-Git/Heart-Failure-Prediction",
    demoUrl: "https://demo.bilalrukundi.com/heart-failure",
    results: {
      accuracy: "85%",
      precision: "72%",
      recall: "80%"
    },
    image: "/ProjectImage/heartFailure.jpg"
  }
];

export const skills = {
  languages: [
    { name: "Python", level: 95 },
    { name: "Java", level: 80 },
    { name: "C", level: 75 },
    { name: "SQL", level: 85 },
    { name: "React", level: 70 }
  ],
  frameworks: [
    { name: "TensorFlow", level: 90 },
    { name: "Scikit-learn", level: 95 },
    { name: "Pandas", level: 95 },
    { name: "NumPy", level: 90 },
    { name: "Matplotlib", level: 85 },
    { name: "Seaborn", level: 85 },
    { name: "Gradio", level: 80 },
    { name: "Streamlit", level: 85 },
    { name: "Tailwind CSS", level: 75 }
  ],
  tools: [
    { name: "Git", level: 90 },
    { name: "Jupyter Notebooks", level: 95 },
    { name: "Docker", level: 70 },
    { name: "Pandas Profiling", level: 80 },
    { name: "Google Colab", level: 80 },
    { name: "Canva", level: 80 },
    { name: "Blender", level: 80 }
  ]
};

export const experience = [
  {
    id: 1,
    title: "AI Research Intern",
    company: "DeepSurg",
    period: "2025 - Present",
    description: "Contributing to the development of AI-powered surgical assistance technology, focusing on real-time decision support systems for minimally invasive surgery.",
    achievements: [
      "Working on multimodal AI systems for surgical applications",
      "Developing deep learning models for real-time surgical assistance",
      "Contributing to state-of-the-art surgical copilot technology"
    ]
  },
  {
    id: 2,
    title: "AI & Machine Learning Student",
    company: "Self-Directed Learning",
    period: "2024 - 2027",
    description: "Intensive self-study in machine learning, statistics, and data science methodologies.",
    achievements: [
      "Completed 8+ ML projects across various domains",
      "Mastered statistical analysis and hypothesis testing",
      "Built expertise in deep learning and neural networks"
    ]
  }
];

// export const testimonials = [
//   {
//     id: 1,
//     name: "Sarah Johnson",
//     role: "Data Science Manager",
//     company: "Tech Solutions Inc.",
//     content: "Bilal delivered an exceptional heart failure prediction model that exceeded our accuracy requirements. His attention to detail and thorough documentation made the project a success.",
//     avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
//   },
//   {
//     id: 2,
//     name: "Dr. Michael Chen",
//     role: "Healthcare Data Analyst",
//     company: "Medical Research Institute",
//     content: "The predictive model Bilal developed has been instrumental in our clinical decision-making process. His deep understanding of both machine learning and healthcare applications is impressive.",
//     avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
//   }
// ];

export const aboutText = `
I'm a passionate Machine Learning Developer dedicated to creating intelligent solutions that solve real-world problems. With a strong foundation in mathematics and programming, I specialize in building predictive models and data-driven applications.

My journey in machine learning began with a curiosity about how machines can learn from data. This led me to dive deep into the mathematical foundations of ML algorithms, implementing them from scratch to truly understand their inner workings.

I believe in the power of clean code, thorough documentation, and continuous learning. Every project is an opportunity to push the boundaries of what's possible with data and algorithms.
`;

export const stats = [
  { label: "ML Models Built From Scratch", value: "2" },
  { label: "Lines of Code", value: "50K+" },
  { label: "Accuracy Average", value: "89%" },
  { label: "Projects Completed", value: "8+" }
];