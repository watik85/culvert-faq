// CULVERT SENTINELS FAQ - MINIMALIST MOBILE-FIRST EDITION
// Clean, elegant, sequential Bab 1 to Bab 5

const CHAPTERS_DATA = [
  {
    id: "bab1",
    num: "BAB 1",
    title: "Latar Belakang & Urgensi",
    description: "Evaluasi insiden 2025, keselamatan tambang, dan peralihan ke sistem prediktif.",
    questions: [
      {
        qNum: "Q1",
        question: "Mengapa proyek Culvert Sentinels ini dikembangkan?",
        answer: "Proyek ini dikembangkan berdasarkan evaluasi insiden keselamatan (fatality) akibat kegagalan fungsi culvert (gorong-gorong) dan luapan air tambang pada tahun 2025. Tujuannya adalah menghentikan pendekatan yang reaktif dan beralih ke pencegahan yang prediktif demi menjaga keselamatan pekerja serta kelancaran operasional."
      },
      {
        qNum: "Q2",
        question: "Apa dampak buruk jika sistem drainase tidak terpantau dengan baik?",
        answer: "Tanpa pemantauan rutin, kerusakan atau penyumbatan gorong-gorong sulit terdeteksi dini. Hal ini dapat memicu luapan air yang merusak jalan tambang, membahayakan keselamatan pekerja, serta berpotensi menghentikan proses produksi tambang."
      },
      {
        qNum: "Q3",
        question: "Seberapa besar kerugian produksi akibat masalah limpasan air di tahun 2025?",
        answer: "Kegagalan sistem drainase dan limpasan air yang tidak terkontrol pada tahun 2025 memicu hilangnya potensi produksi (total loss production) sebesar 5,9 MBcm (volume tanah/batuan penutup) dan 1,45 Juta Ton batu bara."
      },
      {
        qNum: "Q4",
        question: "Masalah utama apa dari sistem pengawasan lama yang ingin diselesaikan?",
        answer: "Sebelumnya, proses inspeksi masih bersifat manual, datanya tidak terpusat, dan status gorong-gorong kritis tidak terpetakan secara pasti. Selain itu, belum ada sistem peringatan dini yang otomatis saat hujan deras."
      }
    ]
  },
  {
    id: "bab2",
    num: "BAB 2",
    title: "Target & Sasaran Proyek",
    description: "Mewujudkan budaya Zero Accident dan pencegahan terhentinya produksi tambang.",
    questions: [
      {
        qNum: "Q5",
        question: "Apa target utama dari implementasi proyek ini?",
        answer: "Untuk mencapai dan mendukung budaya Zero Accident (nihil kecelakaan) di lingkungan kerja serta mencegah kerugian akibat terhentinya aktivitas produksi tambang (Avoid Loss Production)."
      },
      {
        qNum: "Q6",
        question: "Bagaimana sistem ini dapat membantu para pengambil keputusan?",
        answer: "Platform ini menyediakan dashboard interaktif yang menampilkan data, peta sebaran, serta status kelayakan gorong-gorong secara langsung (real-time). Hal ini memudahkan analisis cepat untuk kebutuhan pemeliharaan."
      },
      {
        qNum: "Q7",
        question: "Siapa saja yang dapat menggunakan sistem pemantauan ini?",
        answer: "Seluruh personel operasional, mulai dari admin, tim pengawas lapangan, hingga jajaran manajemen dan mitra kerja, dapat mengakses data pemantauan terintegrasi ini."
      },
      {
        qNum: "Q8",
        question: "Bagaimana proyek ini berkontribusi terhadap aspek lingkungan (Enviro)?",
        answer: "Dengan mengetahui titik gorong-gorong yang membutuhkan perbaikan secara cepat, perusahaan dapat mencegah terjadinya erosi dan pencemaran lingkungan akibat luapan air yang tidak terkendali."
      }
    ]
  },
  {
    id: "bab3",
    num: "BAB 3",
    title: "Metode & Alur Kerja",
    description: "Digitalisasi inspeksi, integrasi Early Warning System (EWS), dan standar teknis.",
    questions: [
      {
        qNum: "Q9",
        question: "Bagaimana cara kerja pelaporan data inspeksi di lapangan?",
        answer: "Pengawas di lapangan mengisi data inspeksi secara langsung melalui formulir digital di aplikasi/gawai mereka. Data tersebut kemudian otomatis diolah menggunakan Google Apps Script, di mana laporan tertulis langsung tersimpan di Google Sheets dan bukti foto masuk ke Dropbox."
      },
      {
        qNum: "Q10",
        question: "Bagaimana cara kerja sistem peringatan dini (Early Warning System/EWS)?",
        answer: "Sistem ini secara berkala menggabungkan data status gorong-gorong dengan data stasiun cuaca (Weather Station). Jika terdeteksi curah hujan tinggi (lebih dari 25 mm/jam), sistem akan otomatis mengirimkan pesan peringatan khusus ke grup WhatsApp pengawas di area terdampak."
      },
      {
        qNum: "Q11",
        question: "Informasi apa saja yang dikirimkan oleh notifikasi peringatan dini (EWS)?",
        answer: "Notifikasi tersebut berisi informasi waktu kejadian, intensitas curah hujan aktual, daftar gorong-gorong yang terdampak, serta instruksi keselamatan sesuai Memo Kepala Teknik Tambang (KTT)."
      },
      {
        qNum: "Q12",
        question: "Apakah data di lapangan bisa diakses saat tidak ada sinyal (offline)?",
        answer: "Ya, sistem ini dirancang agar tetap bisa diakses secara offline dan ramah pengguna, sehingga mudah digunakan oleh semua kalangan di berbagai perangkat/gawai."
      },
      {
        qNum: "Q13",
        question: "Bagaimana perusahaan memastikan mitra kerja disiplin melakukan inspeksi?",
        answer: "Sistem ini terintegrasi dengan Standar Teknis (TS) perusahaan, yang mewajibkan mitra kerja untuk melakukan inspeksi drainase minimal satu kali seminggu, atau segera setelah terjadi hujan deras di area kritis."
      }
    ]
  },
  {
    id: "bab4",
    num: "BAB 4",
    title: "Biaya, Pengembangan, & Keberlanjutan",
    description: "Efisiensi biaya operasional, pemanfaatan tools eksisting, dan sensor IoT masa depan.",
    questions: [
      {
        qNum: "Q14",
        question: "Apakah pembuatan sistem ini memerlukan biaya yang besar?",
        answer: "Tidak, karena sistem ini memanfaatkan kombinasi alat dan layanan yang sudah ada (Google Sheets, Dropbox, Apps Script, dan Python), sehingga biaya pengembangannya sangat efisien jika dibandingkan dengan potensi kerugian operasional akibat banjir atau kecelakaan."
      },
      {
        qNum: "Q15",
        question: "Apa rencana pengembangan lanjutan agar sistem ini terus berkelanjutan (sustainability)?",
        answer: "Ke depannya, akan dipasang sensor ultrasonik nirkabel bertenaga mikrokontroler ESP32 di mulut gorong-gorong tambang untuk memantau ketinggian air secara langsung (real-time) melalui jaringan 4G GSM."
      },
      {
        qNum: "Q16",
        question: "Bagaimana data di dalam sistem ini dicadangkan untuk keamanan?",
        answer: "Data teks secara otomatis dicadangkan ke pangkalan data (database) SQL melalui pemrograman Python, sedangkan bukti foto lapangan dicadangkan secara terpusat ke SharePoint menggunakan Power Automate."
      }
    ]
  },
  {
    id: "bab5",
    num: "BAB 5",
    title: "Nilai Tambah & Keuntungan Perusahaan",
    description: "Keunggulan terintegrasi SQDCE, transparansi pengawasan, dan uji coba mitra kerja.",
    questions: [
      {
        qNum: "Q17",
        question: "Apa saja keuntungan utama proyek ini bagi perusahaan?",
        answer: "Meningkatkan keselamatan kerja (safety), meningkatkan efisiensi dan transparansi data inspeksi (quality), mempercepat penanganan kerusakan (delivery), menghemat potensi kerugian biaya (cost avoidance), serta membantu menjaga kelestarian lingkungan (environment)."
      },
      {
        qNum: "Q18",
        question: "Mengapa sistem ini dianggap lebih baik daripada metode manual sebelumnya?",
        answer: "Sistem ini membuat data pemantauan menjadi transparan, memetakan status gorong-gorong kritis secara cepat, dan memiliki respons dini otomatis berbasis data cuaca aktual."
      },
      {
        qNum: "Q19",
        question: "Bagaimana sistem ini memengaruhi budaya kerja di lapangan?",
        answer: "Sistem ini meningkatkan kesadaran akan keselamatan (safety awareness) dan memperkuat kepedulian bersama karena seluruh data pemantauan dapat diakses secara terbuka oleh semua pihak."
      },
      {
        qNum: "Q20",
        question: "Apakah proyek ini sudah diuji dan disosialisasikan kepada pekerja lapangan?",
        answer: "Ya, proyek ini telah disosialisasikan dan diuji coba secara langsung kepada berbagai mitra kerja utama di area operasional, seperti PPA, BUMA, dan SIS."
      }
    ]
  }
];

// STATE
let allOpen = false;

document.addEventListener("DOMContentLoaded", () => {
  renderChapters();
  setupScrollInteractions();
  setupToggleAll();
});

// RENDER CHAPTERS DIRECTLY
function renderChapters() {
  const container = document.getElementById("faqChaptersContainer");
  if (!container) return;

  container.innerHTML = CHAPTERS_DATA.map(chap => {
    return `
      <section class="chapter-section" id="${chap.id}">
        
        <!-- Header Bab yang Jelas & Rapi -->
        <div class="chapter-header">
          <div class="chap-badge">${chap.num}</div>
          <h2 class="chap-title">${chap.title}</h2>
          <p class="chap-desc">${chap.description}</p>
        </div>

        <!-- Daftar Pertanyaan di bawah Bab -->
        <div class="chap-questions">
          ${chap.questions.map((q, idx) => {
            const cardId = `${chap.id}-item-${idx}`;
            return `
              <article class="faq-row" id="${cardId}">
                <button type="button" class="faq-trigger" onclick="toggleItem('${cardId}')" aria-expanded="false">
                  <span class="q-tag">${q.qNum}</span>
                  <span class="q-title">${escapeHtml(q.question)}</span>
                  <span class="chevron-arrow">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.4">
                      <path d="M6 9l6 6 6-6" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </span>
                </button>

                <div class="faq-content">
                  <div class="faq-inner">
                    <p class="faq-text">${escapeHtml(q.answer)}</p>
                    <div class="faq-footer-action">
                      <button type="button" class="btn-copy-ans" onclick="copyAnswer('${q.qNum}', '${escapeHtml(q.question)}', '${escapeHtml(q.answer)}')">
                        <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                          <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
                        </svg>
                        <span>Salin Jawaban</span>
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            `;
          }).join("")}
        </div>

      </section>
    `;
  }).join("");

  // Setup scroll animations for freshly created elements
  observeElements();
}

// TOGGLE ITEM ACCORDION
function toggleItem(cardId) {
  const card = document.getElementById(cardId);
  if (!card) return;

  const btn = card.querySelector(".faq-trigger");
  const isOpen = card.classList.contains("is-open");

  if (isOpen) {
    card.classList.remove("is-open");
    if (btn) btn.setAttribute("aria-expanded", "false");
  } else {
    card.classList.add("is-open");
    if (btn) btn.setAttribute("aria-expanded", "true");
  }
}

// TOGGLE ALL
function setupToggleAll() {
  const btn = document.getElementById("toggleAllBtn");
  const txt = document.getElementById("toggleAllText");
  if (!btn || !txt) return;

  btn.addEventListener("click", () => {
    allOpen = !allOpen;
    const cards = document.querySelectorAll(".faq-row");
    cards.forEach(c => {
      const trigger = c.querySelector(".faq-trigger");
      if (allOpen) {
        c.classList.add("is-open");
        if (trigger) trigger.setAttribute("aria-expanded", "true");
      } else {
        c.classList.remove("is-open");
        if (trigger) trigger.setAttribute("aria-expanded", "false");
      }
    });

    txt.innerText = allOpen ? "Tutup Semua" : "Buka Semua";
    showToast(allOpen ? "Semua jawaban dibuka" : "Semua jawaban ditutup");
  });
}

// COPY ANSWER
function copyAnswer(num, question, answer) {
  const text = `*CULVERT SENTINELS FAQ*\n\n📌 *${num}: ${question}*\n\n✅ *Jawaban:*\n${answer}`;
  
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(`${num} berhasil disalin!`);
    }).catch(() => {
      fallbackCopy(text, `${num} berhasil disalin!`);
    });
  } else {
    fallbackCopy(text, `${num} berhasil disalin!`);
  }
}

function fallbackCopy(text, msg) {
  const t = document.createElement("textarea");
  t.value = text;
  t.style.position = "fixed";
  t.style.opacity = "0";
  document.body.appendChild(t);
  t.select();
  try {
    document.execCommand("copy");
    showToast(msg);
  } catch (e) {
    showToast("Gagal menyalin teks");
  }
  document.body.removeChild(t);
}

// TOAST
function showToast(msg) {
  const toast = document.getElementById("toastFeedback");
  if (!toast) return;

  toast.innerText = msg;
  toast.classList.add("show");

  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2200);
}

// SCROLL INTERACTIONS ("IKUT BERGULIR" FEEL)
function setupScrollInteractions() {
  const header = document.getElementById("appHeader");
  const scrollTopBtn = document.getElementById("scrollTopBtn");
  const chips = document.querySelectorAll(".bab-chip");

  // Scroll to top button click
  if (scrollTopBtn) {
    scrollTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Window Scroll listener
  window.addEventListener("scroll", () => {
    const y = window.scrollY;

    // Header subtle elevation shadow on scroll
    if (header) {
      if (y > 40) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    }

    // Scroll top button visibility
    if (scrollTopBtn) {
      if (y > 300) {
        scrollTopBtn.classList.add("visible");
      } else {
        scrollTopBtn.classList.remove("visible");
      }
    }

    // Update active sticky chip
    updateActiveChip();
  }, { passive: true });

  // Smooth scroll click on chips
  chips.forEach(chip => {
    chip.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = chip.getAttribute("data-target");
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        const offset = 120; // accounting for sticky header & chip bar
        const top = targetEl.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: "smooth" });
      }
    });
  });
}

function updateActiveChip() {
  const chapters = document.querySelectorAll(".chapter-section");
  const chips = document.querySelectorAll(".bab-chip");
  const scrollPos = window.scrollY + 160;

  let currentId = "bab1";
  chapters.forEach(sec => {
    if (sec.offsetTop <= scrollPos) {
      currentId = sec.id;
    }
  });

  chips.forEach(chip => {
    chip.classList.toggle("active", chip.getAttribute("data-target") === currentId);
  });
}

// REVEAL ANIMATIONS ON SCROLL
function observeElements() {
  if (!("IntersectionObserver" in window)) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: "0px 0px -40px 0px"
  });

  document.querySelectorAll(".stat-card, .chapter-section, .faq-row").forEach(el => {
    observer.observe(el);
  });
}

function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Global exposure
window.toggleItem = toggleItem;
window.copyAnswer = copyAnswer;
