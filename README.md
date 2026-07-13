# CLXbot 🤖

Telegram content distribution bot for CLXlive channel.

## Features

* 📢 Content distribution via message forwarding
* 🔐 Admin panel with secure login (bcrypt)
* ✅ Force subscription middleware
* 💾 Automated daily PostgreSQL backups
* 🐳 Fully containerized with Docker

## Tech Stack

![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![Aiogram](https://img.shields.io/badge/Aiogram-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)
![SQLAlchemy](https://img.shields.io/badge/SQLAlchemy-D71F00?style=for-the-badge&logo=python&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)

## Requirements

* Docker & Docker Compose
* Telegram Bot Token
* PostgreSQL

## Setup

```bash
git clone https://github.com/sarvar-vx/CLXbot
cd CLXbot
cp .env.example .env  # fill in your credentials
docker compose up -d
```

## Environment Variables

```
BOT_TOKEN=your_token
DB_HOST=db
DB_NAME=your_db
DB_USER=your_user
DB_PASSWORD=your_password
```

## Deployment

Deployed on Vultr VPS with Docker Compose.

## Author

**Sarvar Qudratov**
Telegram: [@sarvar_vx](https://t.me/sarvar_vx)
GitHub: [sarvar-vx](https://github.com/sarvar-vx)
