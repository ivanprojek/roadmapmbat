export const certificationsByRoadmap = {
  'financial-data-analyst': {
    certifications: [
      {
        id: 'fcc-data-analysis',
        title: 'freeCodeCamp Data Analysis with Python Certification',
        provider: 'freeCodeCamp',
        cost: 'free',
        url: 'https://www.freecodecamp.org/learn/data-analysis-with-python/',
        recommendedFor: 'Financial analysts who need Python skills for data workflows',
      },
      {
        id: 'kaggle-pandas',
        title: 'Kaggle Learn: Pandas',
        provider: 'Kaggle',
        cost: 'free',
        url: 'https://www.kaggle.com/learn/pandas',
        recommendedFor: 'Analysts working with real datasets and data cleaning',
      },
      {
        id: 'google-ga',
        title: 'Google Analytics Individual Qualification',
        provider: 'Google Skillshop',
        cost: 'free',
        url: 'https://skillshop.withgoogle.com/',
        recommendedFor: 'Data professionals tracking digital and product metrics',
      },
    ],
    simulations: [
      {
        id: 'fda-sim-forecast-python',
        title: 'Simulasi Forecasting dengan Python (Jupyter)',
        description: 'Notebook Jupyter: load sample financial dataset, buat pipeline preprocessing, bangun model time-series sederhana (ARIMA/Prophet) dan bandingkan kinerja. Sertakan backtest dan visualisasi error.',
        starterNotebook: 'https://github.com/ageron/handson-ml/tree/main/',
        tech: ['python', 'pandas', 'prophet', 'statsmodels', 'jupyter'],
      },
    ],
  },

  'fintech-risk-product-analyst': {
    certifications: [
      {
        id: 'kaggle-sql',
        title: 'Kaggle Learn: SQL for Data Science',
        provider: 'Kaggle',
        cost: 'free',
        url: 'https://www.kaggle.com/learn/intro-to-sql',
        recommendedFor: 'Analysts who build queries for risk and product data',
      },
      {
        id: 'fcc-data-analysis',
        title: 'freeCodeCamp Data Analysis with Python Certification',
        provider: 'freeCodeCamp',
        cost: 'free',
        url: 'https://www.freecodecamp.org/learn/data-analysis-with-python/',
        recommendedFor: 'Fintech analysts who model and visualize transaction data',
      },
      {
        id: 'google-ga',
        title: 'Google Analytics Individual Qualification',
        provider: 'Google Skillshop',
        cost: 'free',
        url: 'https://skillshop.withgoogle.com/',
        recommendedFor: 'Product analysts tracking customer behavior and funnels',
      },
    ],
    simulations: [
      {
        id: 'fin-sim-fraud-python',
        title: 'Simulasi Deteksi Fraud dengan Python',
        description: 'Notebook Jupyter: dataset transaksi sintetis, feature engineering, build classifier (RandomForest/XGBoost), evaluasi precision/recall, dan thresholding untuk monitoring.',
        starterNotebook: 'https://www.kaggle.com/competitions/ieee-fraud-detection',
        tech: ['python', 'pandas', 'scikit-learn', 'xgboost', 'jupyter'],
      },
    ],
  },

  'business-intel-analyst': {
    certifications: [
      {
        id: 'google-ga',
        title: 'Google Analytics Individual Qualification',
        provider: 'Google Skillshop',
        cost: 'free',
        url: 'https://skillshop.withgoogle.com/',
        recommendedFor: 'Business intelligence analysts using web and product analytics',
      },
      {
        id: 'kaggle-data-viz',
        title: 'Kaggle Learn: Data Visualization',
        provider: 'Kaggle',
        cost: 'free',
        url: 'https://www.kaggle.com/learn/data-visualization',
        recommendedFor: 'Analysts who need dashboarding and storytelling skills',
      },
      {
        id: 'fcc-data-analysis',
        title: 'freeCodeCamp Data Analysis with Python Certification',
        provider: 'freeCodeCamp',
        cost: 'free',
        url: 'https://www.freecodecamp.org/learn/data-analysis-with-python/',
        recommendedFor: 'BI analysts who work with Python for analysis',
      },
    ],
    simulations: [
      {
        id: 'bi-sim-dashboard-python',
        title: 'Simulasi Dashboarding dengan Python & Streamlit',
        description: 'Notebook + Streamlit starter: bersihkan dataset, buat KPI, dan bangun dashboard interaktif sederhana yang menampilkan insight bisnis.',
        starterNotebook: 'https://github.com/streamlit/demo-self-driving',
        tech: ['python', 'pandas', 'streamlit', 'plotly'],
      },
    ],
  },

  'erp-sap-finance-consultant': {
    certifications: [
      {
        id: 'kaggle-sql',
        title: 'Kaggle Learn: SQL for Data Science',
        provider: 'Kaggle',
        cost: 'free',
        url: 'https://www.kaggle.com/learn/intro-to-sql',
        recommendedFor: 'ERP consultants working with operational finance data',
      },
      {
        id: 'fcc-data-analysis',
        title: 'freeCodeCamp Data Analysis with Python Certification',
        provider: 'freeCodeCamp',
        cost: 'free',
        url: 'https://www.freecodecamp.org/learn/data-analysis-with-python/',
        recommendedFor: 'Finance consultants who automate reports and reconciliations',
      },
      {
        id: 'ibm-skillsbuild',
        title: 'IBM SkillsBuild Data Analytics Badge',
        provider: 'IBM SkillsBuild',
        cost: 'free',
        url: 'https://skillsbuild.org/',
        recommendedFor: 'Professionals who want free analytics and business process credentials',
      },
    ],
    simulations: [
      {
        id: 'erp-sim-migration-python',
        title: 'Simulasi Migrasi Data dengan Python',
        description: 'Starter scripts: ekstrak CSV/JSON, transformasikan, jalankan validasi dan reconciliations; simulasikan load ke target schema dan verifikasi integritas.',
        starterNotebook: 'https://github.com/transferwise/pipelinewise',
        tech: ['python', 'pandas', 'sqlalchemy', 'pytest'],
      },
    ],
  },

  'prompt-engineer': {
    certifications: [
      {
        id: 'learnprompting',
        title: 'Prompt Engineering Guide',
        provider: 'LearnPrompting',
        cost: 'free',
        url: 'https://learnprompting.org/docs/introduction',
        recommendedFor: 'Engineers who design prompts for large language models',
      },
      {
        id: 'openai-prompting',
        title: 'OpenAI Prompting Guides',
        provider: 'OpenAI',
        cost: 'free',
        url: 'https://platform.openai.com/docs/guides/prompting',
        recommendedFor: 'Practitioners building prompt workflows and tools',
      },
      {
        id: 'kaggle-nlp',
        title: 'Kaggle Learn: Natural Language Processing',
        provider: 'Kaggle',
        cost: 'free',
        url: 'https://www.kaggle.com/learn/natural-language-processing',
        recommendedFor: 'Engineers who work with text and language datasets',
      },
    ],
  },

  'python-developer': {
    certifications: [
      {
        id: 'fcc-python',
        title: 'freeCodeCamp Scientific Computing with Python Certification',
        provider: 'freeCodeCamp',
        cost: 'free',
        url: 'https://www.freecodecamp.org/learn/scientific-computing-with-python/',
        recommendedFor: 'Developers building Python scripts, APIs, and automation',
      },
      {
        id: 'kaggle-python',
        title: 'Kaggle Learn: Python',
        provider: 'Kaggle',
        cost: 'free',
        url: 'https://www.kaggle.com/learn/python',
        recommendedFor: 'Developers who want interactive Python practice',
      },
      {
        id: 'realpython',
        title: 'Real Python Free Tutorials',
        provider: 'Real Python',
        cost: 'free',
        url: 'https://realpython.com/',
        recommendedFor: 'Programmers seeking free Python tutorials and references',
      },
    ],
  },

  'software-engineering-foundations': {
    certifications: [
      {
        id: 'fcc-js',
        title: 'freeCodeCamp JavaScript Algorithms and Data Structures Certification',
        provider: 'freeCodeCamp',
        cost: 'free',
        url: 'https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/',
        recommendedFor: 'Engineers learning frontend foundations and algorithms',
      },
      {
        id: 'kaggle-python',
        title: 'Kaggle Learn: Python',
        provider: 'Kaggle',
        cost: 'free',
        url: 'https://www.kaggle.com/learn/python',
        recommendedFor: 'Engineers practicing backend and scripting skills',
      },
      {
        id: 'mdn-web',
        title: 'MDN Web Docs Learning Area',
        provider: 'Mozilla',
        cost: 'free',
        url: 'https://developer.mozilla.org/en-US/docs/Learn',
        recommendedFor: 'Developers mastering web fundamentals and standards',
      },
    ],
  },

  'data-analyst': {
    certifications: [
      {
        id: 'fcc-data-analysis',
        title: 'freeCodeCamp Data Analysis with Python Certification',
        provider: 'freeCodeCamp',
        cost: 'free',
        url: 'https://www.freecodecamp.org/learn/data-analysis-with-python/',
        recommendedFor: 'Data analysts working with Python and statistics',
      },
      {
        id: 'kaggle-data-viz',
        title: 'Kaggle Learn: Data Visualization',
        provider: 'Kaggle',
        cost: 'free',
        url: 'https://www.kaggle.com/learn/data-visualization',
        recommendedFor: 'Analysts translating insights into visuals',
      },
      {
        id: 'google-ga',
        title: 'Google Analytics Individual Qualification',
        provider: 'Google Skillshop',
        cost: 'free',
        url: 'https://skillshop.withgoogle.com/',
        recommendedFor: 'Analysts focused on web and product analytics',
      },
    ],
  },

  'ai-engineer': {
    certifications: [
      {
        id: 'kaggle-ml',
        title: 'Kaggle Learn: Intro to Machine Learning',
        provider: 'Kaggle',
        cost: 'free',
        url: 'https://www.kaggle.com/learn/intro-to-machine-learning',
        recommendedFor: 'Engineers building ML models and evaluation pipelines',
      },
      {
        id: 'kaggle-nlp',
        title: 'Kaggle Learn: Natural Language Processing',
        provider: 'Kaggle',
        cost: 'free',
        url: 'https://www.kaggle.com/learn/natural-language-processing',
        recommendedFor: 'Engineers working with language and text data',
      },
      {
        id: 'tensorflow-learning',
        title: 'TensorFlow Free Tutorials',
        provider: 'TensorFlow',
        cost: 'free',
        url: 'https://www.tensorflow.org/learn',
        recommendedFor: 'Engineers practicing model development with TensorFlow',
      },
    ],
  },

  'ml-engineer': {
    certifications: [
      {
        id: 'kaggle-ml',
        title: 'Kaggle Learn: Intro to Machine Learning',
        provider: 'Kaggle',
        cost: 'free',
        url: 'https://www.kaggle.com/learn/intro-to-machine-learning',
        recommendedFor: 'Machine learning engineers iterating models',
      },
      {
        id: 'kaggle-deep-learning',
        title: 'Kaggle Learn: Deep Learning',
        provider: 'Kaggle',
        cost: 'free',
        url: 'https://www.kaggle.com/learn/deep-learning',
        recommendedFor: 'Engineers focused on deep learning applications',
      },
      {
        id: 'tensorflow-learning',
        title: 'TensorFlow Free Tutorials',
        provider: 'TensorFlow',
        cost: 'free',
        url: 'https://www.tensorflow.org/learn',
        recommendedFor: 'Engineers using TensorFlow for production models',
      },
    ],
  },
};
