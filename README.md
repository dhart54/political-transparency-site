# Government Transparency App

This full-stack project aggregates data on U.S. federal government officials, including campaign donations, voting records, issue sentiment, and net worth over time.

## Tech Stack

* **Frontend:** React + TypeScript
* **Backend:** FastAPI
* **Database/Auth:** Supabase
* **Testing:** pytest (API), Playwright (UI)
* **CI/CD:** GitHub Actions
* **Deployment:** Render (API), Vercel (frontend)
* **Containerization:** Docker

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/gov-transparency-app.git
cd gov-transparency-app
```

### 2. Environment Setup

Create `.env` files in both the `frontend` and `backend` directories. Example variables:

#### `.env` for Backend

```
SUPABASE_URL=your_supabase_url
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
```

#### `.env` for Frontend

```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 3. Run with Docker

```bash
docker-compose up --build
```

### 4. Run Locally without Docker

#### Backend

```bash
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload
```

#### Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## Testing

### Backend: pytest

```bash
cd backend
pytest
```

### Frontend: Playwright

```bash
cd frontend
npx playwright install
npx playwright test
```

---

## Supabase Auth Integration

* Uses Supabase for user authentication (email/password)
* Session tokens are stored client-side and passed to backend routes as needed

### Backend Auth Setup

* Use `supabase-py` to validate JWTs in FastAPI routes

### Frontend Auth Setup

* Uses `@supabase/auth-helpers-react` to manage auth state

---

## CI/CD with GitHub Actions

* On push to `main`, GitHub Actions:

  * Runs test suites (pytest, Playwright)
  * Builds Docker containers
  * Deploys frontend to Vercel
  * Deploys backend to Render using `render.yaml`

---

## Deployment

### Backend (Render)

* Connected via GitHub
* Automatically builds and deploys on `main` updates

### Frontend (Vercel)

* Auto-deploys from `main` with Vercel GitHub integration

---

## Dev Notes

* This project is WIP and actively evolving
* Key TODOs:

  * Finalize Supabase RLS policies
  * Improve error handling across stack
  * Optimize Docker images for production

