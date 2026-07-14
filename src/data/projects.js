import strokePredictionImg from '../assets/images/stroke_prediction.png';
import customerSegmentationImg from '../assets/images/customer_segmentation.png';
import shopperSpectrumImg from '../assets/images/shopper_spectrum.png';
import vaccinationDataImg from '../assets/images/vaccination_data.png';

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
    image: strokePredictionImg,
    github: "https://github.com/Yad4o/MAP",
    demo: "https://github.com/Yad4o/MAP"
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
    image: customerSegmentationImg,
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
    image: shopperSpectrumImg,
    github: "https://github.com/sanskruti-aids/shopper-spectrum",
    demo: "https://github.com/sanskruti-aids/shopper-spectrum"
  },
  {
    id: 5,
    name: "Vaccination Data Analysis",
    problem: "Public health organizations need to analyze vaccination trends and demographics to optimize vaccine distribution and policy.",
    approach: "Built an end-to-end data pipeline using Python for cleaning and normalizing 5 public datasets, loading into a MySQL database, and visualizing in Power BI.",
    result: "Developed an interactive Power BI dashboard highlighting vaccination coverage, regional trends, and demographic correlations.",
    metrics: {
      label: "Data Analysis",
      value: "Power BI",
      dataset: "Public Health Datasets"
    },
    tech: ["Power BI", "MySQL", "Python", "Pandas", "DAX"],
    image: vaccinationDataImg,
    github: "https://github.com/sanskruti-aids/vaccination-data-analysis",
    demo: "https://github.com/sanskruti-aids/vaccination-data-analysis"
  }
];
