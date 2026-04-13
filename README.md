# ⚡️ SUBBURN LEDGER

> **Intentional Subscription Auditing Engine** > _Built for developers who value sovereignty over convenience._

---

## 🛠 THE STACK

- **Engine:** [Laravel 11.x](https://laravel.com) (PHP 8.3+)
- **Reactive Layer:** [Svelte 5](https://svelte.dev) (Runes Architecture)
- **Persistence:** [PostgreSQL 16](https://postgresql.org)
- **Utility:** [Tailwind CSS v4](https://tailwindcss.com)
- **Icons:** [Lucide Svelte](https://lucide.dev)

---

## 📖 THE MANIFESTO

Most subscription trackers focus on **convenience**. They link to your bank, scan your data, and present a passive dashboard.

**SubBurn is different.** It is built on the philosophy that **automation breeds apathy**. When a machine handles your money, you lose touch with its value. SubBurn utilizes "Mindful Manual Entry" to create a psychological friction that drives awareness.

15 seconds of manual logging forces a conscious choice: **Is this worth the burn?**

---

## 🏗 KEY PROTOCOLS

### 01. Zero-Knowledge Handshakes

We don't want your bank passwords. SubBurn operates entirely without Plaid or third-party financial aggregators. Your data remains isolated in your personal vault.

### 02. Lifetime Burn Rate (LBR)

Calculates the 5-year opportunity cost for every entry. Visualizes the exponential drain of "cheap" recurring costs.

### 03. Logical Multi-Tenant Isolation

Architected at the database query level to ensure data integrity and sovereignty.

### 04. Vibe-Driven UX

- **Noise Texture Overlay:** Tactical grain for high-contrast visual depth.
- **Crosshair Navigation:** Precision-focused custom cursor.
- **Skeletal UI:** Minimalist, blueprint-inspired aesthetic.

---

## 🚀 INSTALLATION PROTOCOL

### 1. System Requirements

Ensure your environment meets the following specifications:

- **PHP** >= 8.3
- **Node.js** >= 20.x
- **PostgreSQL** >= 16

### 2. Initialization

```bash
# Clone the repository
git clone [https://github.com/your-username/subburn-ledger.git](https://github.com/your-username/subburn-ledger.git)

# Install dependencies
composer install
npm install

# Setup Environment
cp .env.example .env
php artisan key:generate
```
