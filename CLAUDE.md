# CLAUDE.md — EnISA sayti

## Loyiha nima
Bir sahifali vizitka-sayt: EnISA brendi (MEP Engineering & Distribution;
muhandislik tizimlari integratori: elektr, ventilyatsiya, suv, kam tokli,
BMS/GRMS/PMS — loyihadan ishga tushirishgacha; Distribution — kelajakdagi jihoz
yetkazish yo'nalishi, saytda hali yozilmaydi). 2026-11-26 dan brend —
EnISA, yuridik shaxs — MChJ "MUHANDIS HIZMATI": rekvizitlarda korxona nomi
qoladi, EnISA ga almashtirilmaydi. Domen muhandishizmati.uz o'zgarmagan.
Logotip `logo-export/` da (vektor `logo.svg`); belgi va Telegram rasmi
(`favicon.png`, `og.jpg`) shu logotipdan. O'quvchi — potensial mijoz: telefonda
ochadi va 30 soniyada "kim, nima qiladi, qanday bog'lanaman" degan savolga
javob oladi. Sayt tili — o'zbekcha.

## Uslub
- Ranglar faqat `style.css` boshidagi o'zgaruvchilardan: `--bg`, `--ink`,
  `--muted`, `--line`, `--accent` (EnISA ko'ki #1a3773), `--bronze`
  (logotip bronzasi, faqat kichik urg'u: xizmat raqamlari, ro'yxat nuqtalari),
  `--card`. Yangi rang qo'shilmaydi.
  Istisno: "Nega biz" bo'limi (`.why`) — logotipdagi bronza va och ko'k
  faqat shu bo'lim ichida yorqinroq ishlatiladi.
- Kunduzgi va tungi rejim — ikkalasi ham ishlaydi. Har o'zgarish ikkisida
  ham tekshiriladi.
- Ohang: tinch, ishonchli. "Eng yaxshi", "innovatsion", undov belgisi — yo'q.
  Qisqa jumlalar.
- Oddiylik: animatsiya kam, bo'sh joy ko'p, matn kengligi `--maxw` (760px).
  Bezak qo'shishdan ko'ra olib tashlash afzal.
- Kodda izohlar o'zbekcha, mavjud uslubga mos.

## Texnik chegaralar
- Faqat uch fayl: `index.html`, `style.css`, `script.js`. Yangi sahifa yoki
  yangi fayl qo'shilmaydi (rasmlardan tashqari).
- Freymvork, npm, build-qadam, CDN — yo'q. Sof HTML/CSS/JS.
- Ikonkalar — ichkariga yozilgan SVG. Tashqi shrift va skript yuklanmaydi.
- Mobil birinchi: 360px kenglikda ham buzilmaydi.
- Parol, API kalit, shaxsiy ma'lumot fayllarga yozilmaydi.

## Ish qoidalari
- Qurishdan oldin qisqa reja (3-5 punkt) ko'rsat va tasdiqni kut.
- Kichik qadamlar: bir marta bitta bo'lim yoki bitta o'zgarish.
- Mavjud kodni qayta yozmaslik — nuqtali tahrir.
- Ishlagandan keyin nima o'zgarganini 2-3 jumlada ayt.
- Ishonchsiz joyda taxmin qilma — so'ra.
