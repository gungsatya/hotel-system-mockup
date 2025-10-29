# Rama Shinta App Mock up

## Overview

Rama Shinta App adalah mockup Sistem Informasi Manajemen Hotel dan Restoran dari Hotel Rama Shinta. Modul-modul yang digambarkan pada mockup adalah sebagai berikut.

1. Reception

   - Reservation
   - Check-in
   - In-house
   - Checkout
   
2. Restorant

   - Restorant Transaction
   
3. Staffing

   - Kasbon
   - Monthly Payroll
   - Employee Management
   
4. Operational

   - Daily Expend
   - Tip
   
5. Master Data

   1. Room
   2. Room Type
   3. Room Rate
   4. Employee Position
   5. Booking Agent
   6. System Configuration
   
6. Reporting

   1. Daily Report
   2. Month to Date
   3. Year to Date
   
7. User Management

## Pengguna Aplikasi

Role user dari aplikasi ini adalah sebagai berikut.

No | Nama | Code
-----------------
1. | Super Administrator | S-ADM
2. | Administrator | ADM
3. | Staff | S
4. | Accountant | ACC
5. | Manager | M

## Framework dan Konvensi

- Frontend: AstroJs
- Styling: TailwindCSS
- UI Kit: shadcn/ui for Astro
- Bahasa UI : English
- Target Layout: Desktop dan tablet karena aplikasi dioperasikan oleh front office, akuntan, dan manajer hotel melalui browser, bukan mobile-first.
- Data: Menggunakan data static dari astro yang di generate sesuai kebutuhan

## Struktur Global 

### Layout Utama

- Sidebar kiri → navigasi modul
- Topbar → nama hotel, tanggal, user login (nama dan role), tombol logout
- Konten utama <main> → dibungkus card/table
- user login bisa diganti-ganti dengan modal tergantung simulasi role yang sedang aktif sesuai dengan role user sebelumnya

###Topbar menampilkan:

- Nama Hotel (misal: "Rama Shinta Hotel")
- Tanggal hari ini
- User saat ini: nama + role (contoh: "Made / Front Office")
- Tombol Logout

## Navigasi Sidebar

Navigasi sidebar dibuat bisa di collapse sesuai dengan treenya. Isi dari navigasi side bar tergantung role yang sedang aktif

- Dashboard (All role)
- Reception
	- Reservation (Role : S-ADM, S)
	- Check-in (Role : S-ADM, S)
	- In-house (Role : S-ADM, S)
	- Check-out (Role : S-ADM, S)
- Restorant
	- Transaction (Role : S-ADM, S)
- Operational
	- Daily Expand (Role : S-ADM, ACC)
	- Approval Daily Expand (Role : S-ADM, M)
	- Tip (Role : S-ADM, S)
- Staffing
	- Kasbon (Role : S-ADM, ACC)
	- Approval Kasbon (Role : S-ADM, M)
	- Payroll (Role : S-ADM, ACC)
	- Payroll slip (Role : S-ADM, M, ACC)
	- Employee Payroll slip (Role: S)
	- Maintain Employee (Role : S-ADM, ADM)
	- Approval Employee (Role : S-ADM, M)
	- Employee (Role : S-ADM, M)
- Master Data
	- Maintain Room Rate (Role : S-ADM, ADM)
	- Approval Room Rate (Role : S-ADM, M)
	- Room Rate (Role : S-ADM, M)
	- Maintain Room Type (Role : S-ADM, ADM)
	- Approval Room Type (Role : S-ADM, M)
	- Room Type (Role : S-ADM, M)
	- Maintain Position (Role : S-ADM, ADM)
	- Approval Position (Role : S-ADM, M)
	- Position (Role : S-ADM, M)
	- Maintain Booking Agent (Role : S-ADM, ADM)
	- Approval Booking Agent (Role : S-ADM, M)
	- Booking Agent (Role : S-ADM, M)
	- Maintain System Configuration (Role : S-ADM, ADM)
	- Approval System Configuration (Role : S-ADM, M)
	- System Configuration (Role : S-ADM, M)
- User Management (Role : S-ADM)

## Struktur Folder Rekomendasi


		src/
		├── components/     # Reusable UI Components (Card, Table, Modal, etc.)
		├── layouts/        # Global Layout (Sidebar, Topbar)
		├── pages/
		│   ├── dashboard/
		│   ├── reception/
		│   ├── restaurant/
		│   ├── operational/
		│   ├── staffing/
		│   ├── master-data/
		│   ├── reporting/
		│   └── user-management/
		├── data/           # Static JSON data
		├── styles/         # Tailwind setup & custom utilities
		└── utils/          # Helper & config functions

