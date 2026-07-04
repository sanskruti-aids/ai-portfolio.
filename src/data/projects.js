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
    github: "https://github.com/Yad4o/MAP",
    demo: "https://github.com/Yad4o/MAP"
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
    github: "https://github.com/sanskruti-aids/Student-Performance-Prediction",
    demo: "https://github.com/sanskruti-aids/Student-Performance-Prediction"
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
    github: "https://github.com/Yad4o/odoo-appointment-app",
    demo: "https://github.com/Yad4o/odoo-appointment-app"
  },
  {
    id: 4,
    name: "Shopper Spectrum",
    problem: "E-commerce businesses lack actionable insights into customer behavior, making it hard to personalize offers or predict churn.",
    approach: "Built an end-to-end ML pipeline using RFM analysis and KMeans clustering to segment customers into 4 groups, paired with an item-based collaborative filtering recommendation engine using cosine similarity.",
    result: "Delivered an interactive Streamlit dashboard enabling real-time customer segmentation prediction and top-5 product recommendations from e-commerce transaction data.",
    metrics: {
      label: "Segmentation Accuracy",
      value: "4 Segments",
      dataset: "Online Retail Dataset"
    },
    tech: ["Python", "Scikit-Learn", "Pandas", "Streamlit", "Matplotlib", "Seaborn", "Joblib"],
    image: "/src/assets/images/shopper_spectrum.png",
    github: "https://github.com/sanskruti-aids/shopper-spectrum",
    demo: "https://github.com/sanskruti-aids/shopper-spectrum"
  }
];
