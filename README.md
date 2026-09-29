# 🎓 RALE Docentes - Semillero de Docentes Fundadores 2026

Plataforma oficial de convocatoria de docentes fundadores y pasantías pre-profesionales (PPP) para la **Academia Pre-Militar RALE** (Sistema Zenit Group).

🌐 **Sitio Web Oficial:** [https://raledocentes.sistemazenit.com](https://raledocentes.sistemazenit.com)

---

## 📌 Descripción del Proyecto

Plataforma EdTech interactiva de captación y onboarding docente diseñada para universitarios de últimos ciclos (VII al X) y recién egresados de Educación, Ciencias y Humanidades en el Perú. Permite acreditar **120 horas de Prácticas Pre-Profesionales (PPP)** según la Ley Universitaria N° 30220 mediante un compromiso flexible de **2 a 4 horas pedagógicas semanales** ad honorem en fase de validación, con línea de carrera directa a remuneración a partir de **S/. 20 / hora** y bonos por matriculados de **S/. 40**.

---

## 🚀 Tecnologías

- **Framework:** [Next.js 14](https://nextjs.org/) (Static Export / SSG)
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS + Vanilla CSS Tokens
- **Animaciones:** Framer Motion + Lucide React
- **Hosting & CI/CD:** GitHub Pages + GitHub Actions Workflow
- **Dominio Personalizado:** `raledocentes.sistemazenit.com` (CNAME configurado)

---

## ⚙️ Desarrollo Local

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Compilar export estático para producción
npm run build
```

---

## 📦 Despliegue en GitHub Pages

El proyecto compila como sitio estático hacia la carpeta `out/` con soporte para:
1. **GitHub Actions:** Workflow automático en `.github/workflows/deploy.yml`.
2. **Rama `gh-pages`:** Despliegue directo de la versión compilada con `.nojekyll` y `CNAME`.

---

## 👨‍💻 Créditos

- **Organización:** Academia Pre-Militar RALE · Sistema Zenit Group
- **Desarrollado por:** [Xavier Cabello](https://xavier.cabellosalirrosas.com)
