export const projects = [
  {
    id: 1,
    name: "MAP – Multi-Agent AI Automation Platform",
    problem: "Coordinating complex computational workflows across distributed specialized AI units without state or contextual memory loss.",
    approach: "Architected a stateful agent system (Planner, Executor ReAct loop, Analyzer, Memory) using LangGraph, FAISS vector index, and BentoML (Mistral7B) with Gemini API fallback.",
    result: "Developed Celery-backed worker pools with Prometheus monitoring and WebSocket task streaming, achieving asynchronous processing pipelines.",
    metrics: {
      label: "Task Throughput",
      value: "3.5x Speedup",
      dataset: "LangGraph Stateful Agents"
    },
    tech: ["Python", "LangGraph", "Gemini API", "Celery", "Redis", "Docker", "Prometheus"],
    image: "/src/assets/images/stroke_prediction.png",
    github: "https://github.com/sanskruti-aids",
    demo: "https://github.com/sanskruti-aids"
  },
  {
    id: 2,
    name: "Student Performance Prediction",
    problem: "Academic failure and dropping out are hard to detect early enough to implement educational interventions.",
    approach: "Developed a predictive pipeline in Python, handling encoding and missing data imputation, comparing Logistic Regression and Decision Tree architectures.",
    result: "Built a classification model to categorize student grades and identify key failure risk markers with high statistical confidence.",
    metrics: {
      label: "Prediction Accuracy",
      value: "89.4%",
      dataset: "Student Grades Dataset"
    },
    tech: ["Python", "Scikit-Learn", "Pandas", "Matplotlib", "Jupyter"],
    image: "/src/assets/images/sentiment_analytics.png",
    github: "https://github.com/sanskruti-aids",
    demo: "https://github.com/sanskruti-aids"
  },
  {
    id: 3,
    name: "BookEase – Full-Stack Booking Platform",
    problem: "Small appointment-based providers fail to manage bookings and secure online customer payments easily.",
    approach: "Designed a lightweight full-stack booking system during Odoo Hackathon using FastAPI, SQLite, and Stripe payment gateways.",
    result: "Deployed secure role-based provider dashboards, automated email confirmations, and transactions with 2s average latency.",
    metrics: {
      label: "Transaction Speed",
      value: "2.0s Latency",
      dataset: "FastAPI + Stripe Webhook"
    },
    tech: ["FastAPI", "SQLite", "Stripe API", "Jinja2", "Tailwind CSS"],
    image: "/src/assets/images/customer_segmentation.png",
    github: "https://github.com/sanskruti-aids",
    demo: "https://github.com/sanskruti-aids"
  },
  {
    id: 4,
    name: "Smart Internship Matcher",
    problem: "Students struggle to find relevant internships that align with their specific skill levels and technology stacks.",
    approach: "Participated in a technical hackathon team, developing candidates-to-requirements matching algorithm evaluating keyword embeddings.",
    result: "Delivered a collaborative recommendation system prototype with optimized ranking matching student skills to descriptions.",
    metrics: {
      label: "Match Accuracy",
      value: "85.2%",
      dataset: "Skill Requirements Logs"
    },
    tech: ["Python", "Pandas", "Model Evaluation", "Hackathon Project"],
    image: "/src/assets/images/pneumonia_detection.png",
    github: "https://github.com/sanskruti-aids",
    demo: "https://github.com/sanskruti-aids"
  }
];
