// Mock data for Bilal Rukundi's portfolio
export const personalInfo = {
  name: "Bilal Rukundi",
  title: "Machine Learning Developer",
  subtitle: "Building intelligent solutions with precision and purpose",
  email: "bilalrukundi1658@gmail.co",
  github: "https://github.com/bilalrukundi",
  linkedin: "https://linkedin.com/in/bilalrukundi",
  cvUrl: "/assets/bilal_rukundi_cv.pdf"
};

export const projects = [
  {
    id: 1,
    title: "Cat Vs Dog Classifier",
    description: "A deep learning model that classifies images of cats and dogs with 94% accuracy using convolutional neural networks.",
    longDescription: "Built a comprehensive image classification system using TensorFlow and Keras. The model employs transfer learning with MobileNetV2 as the base architecture, fine-tuned on a dataset of 25,000 images. Implemented data augmentation techniques to improve model robustness and deployed the model using Gradio for real-time predictions.",
    techStack: ["Python", "TensorFlow", "Keras", "OpenCV", "Gradio"],
    category: "Deep Learning",
    status: "Completed",
    githubUrl: "https://github.com/bilalrukundi/cat-vs-dog-classifier",
    demoUrl: "https://demo.bilalrukundi.com/cat-dog",
    results: {
      accuracy: "94%",
      dataset_size: "25,000 images",
      training_time: "4 hours"
    },
    image: "https://images.unsplash.com/photo-1548681528-6a5c45b66b42?w=600&h=400&fit=crop&crop=center"
  },
  {
    id: 2,
    title: "Heart Failure Prediction",
    description: "A machine learning model that predicts heart failure risk using clinical data with 89% accuracy.",
    longDescription: "Developed a comprehensive healthcare prediction system using ensemble methods including Random Forest, XGBoost, and Gradient Boosting. The model analyzes 13 clinical features to predict heart failure risk. Implemented extensive feature engineering, handled missing data, and created an interactive dashboard for medical professionals using Streamlit.",
    techStack: ["Python", "Scikit-learn", "XGBoost", "Pandas", "Streamlit"],
    category: "Healthcare ML",
    status: "Completed",
    githubUrl: "https://github.com/bilalrukundi/heart-failure-prediction",
    demoUrl: "https://demo.bilalrukundi.com/heart-failure",
    results: {
      accuracy: "89%",
      precision: "91%",
      recall: "87%"
    },
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop&crop=center"
  },
  {
    id: 3,
    title: "Machine Learning from Scratch",
    description: "Implementation of core ML algorithms without external libraries to understand the mathematical foundations.",
    longDescription: "A comprehensive educational project implementing fundamental machine learning algorithms from scratch using only NumPy and basic Python libraries. Includes implementations of linear regression, logistic regression, neural networks, k-means clustering, and decision trees. Each algorithm is thoroughly documented with mathematical explanations and visualizations.",
    techStack: ["Python", "NumPy", "Matplotlib", "Seaborn"],
    category: "Educational",
    status: "In Progress",
    githubUrl: "https://github.com/bilalrukundi/ml-from-scratch",
    demoUrl: null,
    results: {
      algorithms_implemented: "15+",
      documentation_pages: "50+",
      test_coverage: "85%"
    },
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop&crop=center"
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
    { name: "AWS", level: 65 },
    { name: "Pandas Profiling", level: 80 }
  ]
};

export const experience = [
  {
    id: 1,
    title: "Machine Learning Developer",
    company: "Freelance",
    period: "2023 - Present",
    description: "Developing ML solutions for various clients, focusing on predictive modeling and data analysis.",
    achievements: [
      "Built 10+ machine learning models with average accuracy of 87%",
      "Reduced client data processing time by 60% through automated pipelines",
      "Delivered end-to-end ML solutions from data collection to deployment"
    ]
  },
  {
    id: 2,
    title: "Data Science Student",
    company: "Self-Directed Learning",
    period: "2022 - Present",
    description: "Intensive self-study in machine learning, statistics, and data science methodologies.",
    achievements: [
      "Completed 50+ ML projects across various domains",
      "Mastered statistical analysis and hypothesis testing",
      "Built expertise in deep learning and neural networks"
    ]
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Data Science Manager",
    company: "Tech Solutions Inc.",
    content: "Bilal delivered an exceptional heart failure prediction model that exceeded our accuracy requirements. His attention to detail and thorough documentation made the project a success.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    role: "Healthcare Data Analyst",
    company: "Medical Research Institute",
    content: "The predictive model Bilal developed has been instrumental in our clinical decision-making process. His deep understanding of both machine learning and healthcare applications is impressive.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
  }
];

export const aboutText = `
I'm a passionate Machine Learning Developer dedicated to creating intelligent solutions that solve real-world problems. With a strong foundation in mathematics and programming, I specialize in building predictive models and data-driven applications.

My journey in machine learning began with a curiosity about how machines can learn from data. This led me to dive deep into the mathematical foundations of ML algorithms, implementing them from scratch to truly understand their inner workings.

I believe in the power of clean code, thorough documentation, and continuous learning. Every project is an opportunity to push the boundaries of what's possible with data and algorithms.
`;

export const stats = [
  { label: "ML Models Built", value: "15+" },
  { label: "Lines of Code", value: "50K+" },
  { label: "Accuracy Average", value: "89%" },
  { label: "Projects Completed", value: "25+" }
];