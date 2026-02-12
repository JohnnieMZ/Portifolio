
import { Experience, Project, SkillCategory } from './types';

export const IMPACT_STATS = [
  { label: "Dashboards Entregues", value: 120, suffix: "+", color: "#35B6FF" },
  { label: "Lojas Monitoradas", value: 450, suffix: "+", color: "#FEC601" },
  { label: "Dados Processados / Mês", value: 500, suffix: "M+", color: "#22C55E" },
  { label: "Economia Gerada (Anual)", value: 2, suffix: "MM+", color: "#35B6FF" }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 1,
    company: "Grupo Varejo Moda S.A.",
    role: "Analista de Dados Sênior (Tech Lead de BI)",
    period: "Jan 2022 - Presente",
    description: [
      "Liderei a migração para Modern Data Stack, reduzindo o custo de infraestrutura em 30% via Azure Databricks.",
      "Automatizei relatórios comerciais que economizaram 15h/semana de trabalho manual para +80 gerentes de loja.",
      "Desenvi modelo de Forecasting de Demanda com 92% de acurácia, otimizando o estoque em R$ 15MM anuais.",
      "Implementei governança de dados e RLS (Row-Level Security) para garantir acesso seguro a dados sensíveis."
    ],
    tags: ["Azure Databricks", "Power BI", "SQL Tuning", "Python", "Data Governance"]
  },
  {
    id: 2,
    company: "Tech Logistics Corp",
    role: "Analista de BI Pleno",
    period: "Mar 2019 - Dez 2021",
    description: [
      "Desenvolvi dashboard de OTIF que identificou gargalos logísticos, reduzindo o tempo de entrega em 18%.",
      "Estruturei processos ETL complexos integrando SAP, Oracle e APIs externas para visão 360 do supply chain.",
      "Capacitei equipe de 12 analistas em DAX avançado e técnicas de Storytelling com dados.",
      "Reduzi em 40% a latência de consultas SQL através de reindexação e otimização de planos de execução."
    ],
    tags: ["ETL Tuning", "DAX Advanced", "Supply Chain", "SQL Server"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Intelligence Hub: Sell-through & Markdown",
    description: "Sistema analítico completo para gestão de estoque e precificação dinâmica em tempo real.",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    category: "Power BI",
    stack: ["DAX Avançado", "SQL Server", "Tabular Editor"],
    links: { github: "#", demo: "#" }
  },
  {
    id: 2,
    title: "Pipeline de Dados: Azure Fashion Analytics",
    description: "Arquitetura escalável para processar milhões de registros de PDV diariamente.",
    thumbnail: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800",
    category: "Azure",
    stack: ["Data Factory", "Python", "Pyspark"],
    links: { github: "#", demo: "#" }
  },
  {
    id: 3,
    title: "Preditor de Churn: Retention Machine",
    description: "Modelo preditivo que antecipa em 3 meses a probabilidade de cancelamento de clientes VIP.",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    category: "Python",
    stack: ["Scikit-learn", "FastAPI", "Pandas"],
    links: { github: "#", demo: "#" }
  }
];

export const SKILLS_DETAILED = [
  {
    title: "Power BI & BI",
    description: "Modelagem dimensional (Star Schema), DAX avançado, Row-Level Security, Performance Tuning e Storytelling de impacto.",
    icon: "BarChart3"
  },
  {
    title: "SQL Engineering",
    description: "T-SQL avançado, Procedures, CTEs, Window Functions e otimização de queries para datasets de terabytes.",
    icon: "Database"
  },
  {
    title: "Data Automation",
    description: "Scripts Python para Web Scraping, Integração de APIs, Logic Apps e schedulers para automação total de rotinas.",
    icon: "Zap"
  },
  {
    title: "Cloud Architecture",
    description: "Azure Data Factory, Data Lake Storage (ADLS Gen2) e Databricks para orquestração de pipelines modernos.",
    icon: "Cloud"
  }
];
