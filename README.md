# Kepandean Laravel

Sistem Informasi Desa Kepandean — Laravel 13 + Inertia.js React + Filament 5 (panel admin).

Frontend publik memakai React + Vite + Tailwind CSS, panel admin memakai Filament di `/admin`.

## Tech Stack

- PHP `^8.3`, Laravel `^13.17`
- Filament `^5.0`, Spatie Media Library + Backup
- Inertia.js `^3.0` + React 19 + Vite + Tailwind CSS 4
- Database default: SQLite (bisa MySQL)
- Queue / Cache / Session default: `database`

## Prasyarat

- PHP >= 8.3 + ekstensi Laravel standar (`mbstring`, `pdo_sqlite`/`pdo_mysql`, `sqlite3`, `openssl`, `fileinfo`, `tokenizer`, `xml`, `ctype`, `json`, `bcmath`)
- Composer 2
- Node.js 20+ (repo ini memakai npm, ada `package-lock.json`) + npm
- Git

Cek versi:

```bash
php -v
composer --version
node -v
npm -v
```

## Instalasi Cepat (fresh clone)

```bash
git clone https://github.com/rifqieali/kepandean-laravel.git
cd kepandean-laravel

cp .env.example .env
composer install
php artisan key:generate
touch database/database.sqlite
php artisan migrate --seed
php artisan storage:link
npm install
npm run build

composer dev
```

Buka:

- Publik: http://localhost:8000
- Admin (Filament): http://localhost:8000/admin

> `composer dev` menjalankan server + queue + log + vite sekaligus (`php artisan dev`).
> Alternatif manual: jalankan `php artisan serve` dan `npm run dev` di dua terminal berbeda.

Atau pakai shortcut bawaan `composer.json`:

```bash
composer setup
```

Isinya sama dengan langkah di atas (install + key + migrate + storage:link + filament:assets + npm build).

## Instalasi Manual (langkah per langkah)

1. **Clone & masuk folder**

   ```bash
   git clone https://github.com/rifqieali/kepandean-laravel.git
   cd kepandean-laravel
   ```

2. **Env**

   ```bash
   cp .env.example .env
   ```

   Windows (PowerShell):

   ```powershell
   copy .env.example .env
   ```

3. **Dependensi PHP**

   ```bash
   composer install
   ```

4. **App key**

   ```bash
   php artisan key:generate
   ```

5. **Database (SQLite, default)**

   `.env.example` sudah memakai:

   ```env
   DB_CONNECTION=sqlite
   ```

   Buat filenya lalu migrate + seed:

   ```bash
   touch database/database.sqlite
   php artisan migrate --seed
   ```

   Windows (PowerShell): `New-Item database/database.sqlite -ItemType File -Force`

   Tanpa seed (DB kosong):

   ```bash
   php artisan migrate
   ```

6. **Storage link (wajib untuk upload / media library)**

   ```bash
   php artisan storage:link
   ```

7. **Dependensi JS + build**

   ```bash
   npm install
   npm run dev   # development (HMR)
   npm run build # production
   ```

8. **Jalankan aplikasi**

   ```bash
   composer dev
   ```

## Konfigurasi MySQL (opsional)

Ubah `.env`:

```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=kepandean
DB_USERNAME=root
DB_PASSWORD=
```

Lalu:

```bash
php artisan migrate --seed
```

## Akun Default (dari `database/seeders/DatabaseSeeder.php`)

| Role | Email | Password |
|---|---|---|
| Admin Desa | `admin@kepandean.id` | `password` |
| Editor | `editor@kepandean.id` | `password` |
| Techade (superadmin) | `admin@techade.dev` | `Sukses2026!` |

> Ganti password setelah install pertama. Jangan commit kredensial asli.

## Perintah Penting

```bash
composer dev        # jalanin dev (serve + queue + vite)
npm run dev         # vite dev saja
npm run build       # build frontend production
php artisan migrate --seed
php artisan storage:link
php artisan filament:assets

composer lint       # pint
composer types:check # phpstan
composer test       # config:clear + lint + phpstan + phpunit
```

## Troubleshooting

- **`SQLSTATE[HY000] [14] unable to open database file`** — file `database/database.sqlite` belum ada. Buat dengan `touch database/database.sqlite` lalu `php artisan migrate`.
- **`No application encryption key`** — jalankan `php artisan key:generate`.
- **Gambar/upload 404** — jalankan `php artisan storage:link`.
- **Halaman putih / asset tidak load setelah pull** — jalankan `npm run build` (atau `npm run dev` saat development).
- **Port 8000 dipakai** — jalankan `php artisan serve --port=8001` dan sesuaikan `APP_URL` di `.env`.
