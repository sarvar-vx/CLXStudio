# CLX Studio 🎨

Personal portfolio and personal brand platform showcasing completed projects, technical skills, and media ecosystem information.

## Features

* 🗂️ Project portfolio catalog with visual presentation
* 🔐 Content management via Django admin panel (custom, non-default URL)
* 📬 Contact form for quick communication
* 🔗 Integration with external media channels (Telegram, GitHub)
* ⚡ Optimized, secure backend architecture

## Tech Stack

![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![Django](https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Nginx](https://img.shields.io/badge/Nginx-009639?style=for-the-badge&logo=nginx&logoColor=white)
![Gunicorn](https://img.shields.io/badge/Gunicorn-499848?style=for-the-badge&logo=gunicorn&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)

## Requirements

* Docker & Docker Compose
* PostgreSQL

## Setup

```bash
git clone https://github.com/sarvar-vx/CLXStudio
cd CLXStudio
cp .env.example .env  # fill in your credentials
docker compose up -d --build
docker compose exec web python manage.py migrate
docker compose exec web python manage.py createsuperuser
```

## Environment Variables

```
SECRET_KEY=your_secret_key
DEBUG=False
POSTGRES_DB=your_db
POSTGRES_USER=your_user
POSTGRES_PASSWORD=your_password
ALLOWED_HOSTS=your_domain_or_ip
```

## Deployment

Deployed on Vultr VPS with Docker Compose, served via Nginx and Gunicorn.

## Author

**Sarvar Qudratov**
Telegram: [@sarvar_vx](https://t.me/sarvar_vx)
GitHub: [sarvar-vx](https://github.com/sarvar-vx)
