// Konten untuk setiap slide
const slideContents = [
    {
        title: "SELAMAT DATANG DI 2026",
        destination: "[nama]",
        text: "WAHAI [NAMA] YANG PENUH MIMPI, DI AWAL FAJAR TAHUN 2026, BIARKAN LEMBARAN LAMA TERLIPAT DENGAN RAPI. SELAMAT DATANG DI BABAK BARU PENUH KEMUNGKINAN, KANVAS KOSONG MENUNGGU SENTUHAN DAHSYAT DARIMU! MARI MELANGKAH DENGAN KEBERANIAN SEJATI UNTUK MENJEMPUT KEAJAIBAN DAN KESEMPATAN EMAS. SELAMAT MEMULAI PETUALANGAN BARU! ✨"
    },
    {
        title: "MOTIVASI AWAL TAHUN 2026",
        destination: "[nama]",
        text: "WAHAI [NAMA] TERCINTA, TAHUN 2026 ADALAH KANVAS KOSONG MENUNGGU DITULIS DENGAN TINTA KESUKSESAN EMAS! PERCAYALAH PADA POTENSI LUAR BIASA DALAM DIRIMU. SETIAP HARI ADALAH KESEMPATAN BARU UNTUK BERSINAR LEBIH TERANG! TIDAK ADA YANG MUSTAHIL KETIKA KAMU MEMILIKI TEKAD BAJA DAN DETERMINASI KOKOH! MARI MENGUKIR SEJARAH CEMERLANG DENGAN AKSI NYATA DAN HASIL GEMILANG! 💫"
    },
    {
        title: "SEMANGAT STUDY 2026",
        destination: "[nama]",
        text: "WAHAI [NAMA] YANG LUAR BIASA! MENGHADAPI TUGAS DAN UJIAN ADALAH KESEMPATAN MENUNJUKKAN KEMAMPUAN SEJATI! SETIAP SOAL ADALAH LANGKAH MENUJU KESUKSESAN. STUDI HARI INI ADALAH INVESTASI MASA DEPAN CEMERLANG! USAHA KERAS ADALAH KUNCI MENCAPAI IMPIAN TERBESAR! HADAPI DENGAN KEYAKINAN PENUH, KAMU PASTI MAMPU! 🎯"
    },
    {
        title: "SELAMAT TAHUN BARU 2026",
        destination: "[nama]",
        text: "SELAMAT TAHUN BARU 2026 [NAMA]! KITA TELAH MELEWATI TAHUN 2025 DENGAN PEMBELAJARAN DAN PENGALAMAN BERHARGA. KINI SAATNYA MENYAMBUT 2026 DENGAN SEMANGAT YANG MEMBARA DAN TEKAD YANG BULAT! SEMOGA TAHUN INI MENJADI AWAL GEMILANG UNTUK SEMUA IMPIAN DAN RENCANA KITA. MARI BERSAMA CIPTAKAN 2026 YANG PENUH BERKAH, KESUKSESAN, DAN KEBAHAGIAAN! HAPPY NEW YEAR 2026! 🎆"
    }
];

let currentSlide = 0;
let isTyping = false;
let autoFireworkInterval = null;
let yearTransitionTriggered = false;

// ===== ANIMASI TRANSISI TAHUN =====
function triggerYearTransition(event) {
    if (yearTransitionTriggered) return;
    yearTransitionTriggered = true;
    
    const oldYearItem = document.getElementById('oldYearItem');
    const yearTransition = document.getElementById('yearTransition');
    const newYearItem = document.getElementById('newYearItem');
    const celebrationText = document.getElementById('celebrationText');
    
    // Fade out & scale down 2025
    if (oldYearItem) {
        oldYearItem.style.animation = 'fadeOutScale 0.6s ease-in forwards';
    }
    
    // Fade out arrow
    if (yearTransition) {
        yearTransition.style.animation = 'fadeOutArrow 0.3s ease-in forwards';
    }
    
    // Scale in 2026 di tempat 2025
    setTimeout(() => {
        if (newYearItem) {
            newYearItem.style.animation = 'fadeInScale 0.6s ease-out forwards';
        }
    }, 150);
    
    // Pulse celebration text
    setTimeout(() => {
        if (celebrationText) {
            celebrationText.style.animation = 'scalePulse 0.5s ease-out forwards';
        }
    }, 400);
}

// ===== FALLING OBJECTS DISABLED =====
function createFallingObject() {
    // Emoji bergerak dihapus
}

// ===== MULAI FALLING OBJECTS OTOMATIS =====
function startFallingObjects() {
    // Emoji bergerak dihapus - diganti dengan falling gifts
    createChristmasLights();
    startFallingGifts();
}

// ===== BUAT CHRISTMAS LIGHTS KELAP-KELIP =====
function createChristmasLights() {
    const container = document.getElementById('christmasLights');
    if (!container) return;
    
    const colors = ['#FF0000', '#00FF00', '#0000FF', '#FFD700', '#FF69B4', '#FF6B6B', '#FF8C00'];
    const numberOfLights = 20;
    
    for (let i = 0; i < numberOfLights; i++) {
        const light = document.createElement('div');
        light.className = 'light';
        light.style.left = Math.random() * 100 + '%';
        light.style.top = Math.random() * 100 + '%';
        light.style.color = colors[Math.floor(Math.random() * colors.length)];
        light.style.animationDelay = Math.random() * 1.5 + 's';
        container.appendChild(light);
    }
}

// ===== BUAT FALLING GIFTS =====
function createFallingGift() {
    const container = document.getElementById('fallingGifts');
    if (!container) return;
    
    const gifts = ['🎁', '🎀', '🎊'];
    const gift = document.createElement('div');
    gift.className = 'gift';
    gift.textContent = gifts[Math.floor(Math.random() * gifts.length)];
    gift.style.left = Math.random() * 100 + '%';
    gift.style.animationDelay = '0s';
    gift.style.animationDuration = (Math.random() * 5 + 8) + 's';
    
    container.appendChild(gift);
    
    setTimeout(() => {
        gift.remove();
    }, (Math.random() * 5 + 8) * 1000);
}

// ===== MULAI FALLING GIFTS OTOMATIS =====
function startFallingGifts() {
    setInterval(() => {
        createFallingGift();
    }, 2000);
}

function createStars() {
    const starsContainer = document.getElementById('stars');
    const numberOfStars = 150;

    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.width = (Math.random() * 3 + 1) + 'px';
        star.style.height = star.style.width;
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 3 + 's';
        starsContainer.appendChild(star);
    }
}

// ===== BUAT MERCON =====
function createFirework(x, y) {
    const container = document.getElementById('fireworksContainer');
    const firework = document.createElement('div');
    firework.className = 'firework';
    firework.style.left = x + 'px';
    firework.style.top = y + 'px';
    container.appendChild(firework);

    const colors = ['#FFD700', '#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8', '#F7DC6F', '#FF1493', '#00FF7F', '#87CEEB'];
    const particles = 50;

    for (let i = 0; i < particles; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        
        const angle = (Math.PI * 2 * i) / particles;
        const velocity = Math.random() * 120 + 100;
        const vx = Math.cos(angle) * velocity;
        const vy = Math.sin(angle) * velocity;
        
        firework.appendChild(particle);

        particle.animate([
            {
                transform: 'translate(0, 0) scale(1)',
                opacity: 1
            },
            {
                transform: `translate(${vx}px, ${vy}px) scale(0)`,
                opacity: 0
            }
        ], {
            duration: 1200 + Math.random() * 500,
            easing: 'cubic-bezier(0, .9, .57, 1)'
        });
    }

    setTimeout(() => {
        firework.remove();
    }, 2000);
}

// ===== MULAI MERCON OTOMATIS =====
function startAutoFireworks() {
    stopAutoFireworks();
    autoFireworkInterval = setInterval(() => {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * (window.innerHeight * 0.6);
        createFirework(x, y);
    }, 1000);
}

// ===== HENTIKAN MERCON OTOMATIS =====
function stopAutoFireworks() {
    if (autoFireworkInterval) {
        clearInterval(autoFireworkInterval);
        autoFireworkInterval = null;
    }
}

// ===== HIASAN KELAP-KELIP RANDOM DALAM TEXT =====
function addRandomDecorations(text) {
    // Fungsi dihapus - decorations akan menggunakan floating elements di CSS
    return text;
}

// ===== EFEK MENGETIK TANPA EMOJI BERGERAK =====
function typeWriter(element, text, speed = 30) {
    // Tidak ada decorations di dalam text - decorations ada di CSS sebagai floating elements
    
    return new Promise((resolve) => {
        let i = 0;
        element.innerHTML = '';
        isTyping = true;
        
        function type() {
            if (i < text.length) {
                // Jika menemukan HTML tag, proses langsung
                if (text.charAt(i) === '<') {
                    let endTag = text.indexOf('>', i);
                    if (endTag !== -1) {
                        let htmlPart = text.substring(i, endTag + 1);
                        // Cari closing tag jika ada
                        let closingIndex = htmlPart.indexOf('</');
                        if (closingIndex === -1) {
                            // Cari teks dan closing tag
                            let innerStart = endTag + 1;
                            let closeTag = text.indexOf('</span>', innerStart);
                            if (closeTag !== -1) {
                                let innerText = text.substring(innerStart, closeTag);
                                element.innerHTML += htmlPart + innerText + '</span>';
                                i = closeTag + 7; // Lanjut setelah </span>
                            }
                        }
                    }
                } else {
                    let char = text.charAt(i);
                    element.textContent += char;
                }
                i++;
                setTimeout(type, speed);
            } else {
                isTyping = false;
                resolve();
            }
        }
        type();
    });
}

// ===== TAMPILKAN KONTEN SLIDE =====
async function showSlideContent(slideIndex) {
    const slide = document.querySelector(`.slide[data-slide="${slideIndex + 1}"]`);
    if (!slide) return;

    const titleElement = slide.querySelector('.typing-title');
    const textElement = slide.querySelector('.typing-text');
    
    if (titleElement && textElement && slideIndex < slideContents.length) {
        const content = slideContents[slideIndex];
        
        await typeWriter(titleElement, content.title, 50);
        await new Promise(resolve => setTimeout(resolve, 300));
        await typeWriter(textElement, content.text, 25);
    }
}

// ===== BUAT SLIDE INDICATORS =====
function createSlideIndicators() {
    const indicatorsContainer = document.getElementById('slideIndicators');
    if (!indicatorsContainer) return;
    
    indicatorsContainer.innerHTML = '';
    const totalSlides = 4;
    
    for (let i = 0; i < totalSlides; i++) {
        const indicator = document.createElement('div');
        indicator.className = 'indicator';
        if (i === 0) indicator.classList.add('active');
        indicator.onclick = () => goToSlide(i);
        indicatorsContainer.appendChild(indicator);
    }
}

// ===== UPDATE TAMPILAN SLIDE =====
function updateSlideDisplay() {
    const slides = document.querySelectorAll('.slide');
    const indicators = document.querySelectorAll('.indicator');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    slides.forEach((slide, index) => {
        slide.classList.remove('active', 'prev');
        if (index === currentSlide) {
            slide.classList.add('active');
        } else if (index < currentSlide) {
            slide.classList.add('prev');
        }
    });
    
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentSlide);
    });
    
    if (prevBtn) prevBtn.disabled = currentSlide === 0;
    if (nextBtn) nextBtn.disabled = currentSlide === slides.length - 1;
}

// ===== NAVIGASI SLIDE SELANJUTNYA =====
function nextSlide() {
    if (isTyping) return;
    const slides = document.querySelectorAll('.slide');
    if (currentSlide < slides.length - 1) {
        currentSlide++;
        updateSlideDisplay();
        if (currentSlide <= slideContents.length) {
            showSlideContent(currentSlide);
        }
        
        // Efek mercon saat pindah slide
        for (let i = 0; i < 3; i++) {
            setTimeout(() => {
                const x = Math.random() * window.innerWidth;
                const y = Math.random() * (window.innerHeight * 0.5);
                createFirework(x, y);
            }, i * 150);
        }
    }
}

// ===== NAVIGASI SLIDE SEBELUMNYA =====
function prevSlide() {
    if (isTyping) return;
    if (currentSlide > 0) {
        currentSlide--;
        updateSlideDisplay();
    }
}

// ===== NAVIGASI KE SLIDE TERTENTU =====
function goToSlide(index) {
    if (isTyping) return;
    currentSlide = index;
    updateSlideDisplay();
    if (currentSlide < slideContents.length) {
        const slide = document.querySelector(`.slide[data-slide="${currentSlide + 1}"]`);
        const titleElement = slide?.querySelector('.typing-title');
        
        if (titleElement && !titleElement.textContent) {
            showSlideContent(currentSlide);
        }
    }
}

// ===== TAMPILKAN HALAMAN UCAPAN =====
function showGreeting() {
    const nameInput = document.getElementById('nameInput');
    const name = nameInput.value.trim().toUpperCase();

    if (name === '') {
        alert('Mohon masukkan nama Anda terlebih dahulu!');
        nameInput.focus();
        return;
    }

    // Ganti placeholder [NAMA] dengan nama asli di semua slide
    slideContents.forEach(slide => {
        slide.text = slide.text.replace(/\[NAMA\]/g, name);
    });

    const displayName = document.getElementById('displayName');
    displayName.textContent = name;

    document.getElementById('formSection').style.display = 'none';
    document.getElementById('greetingSection').style.display = 'block';

    // Mulai musik otomatis
    const audio = document.getElementById('celebrationAudio');
    audio.play().catch(err => {
        console.log('Audio autoplay dimulai');
    });

    // Mulai mercon otomatis random
    startAutoFireworks();
    
    createSlideIndicators();
    currentSlide = 0;
    updateSlideDisplay();
    
    setTimeout(() => {
        showSlideContent(0);
    }, 500);
    
    // Efek mercon extra saat pertama kali muncul
    setTimeout(() => {
        for (let i = 0; i < 8; i++) {
            setTimeout(() => {
                const x = Math.random() * window.innerWidth;
                const y = Math.random() * (window.innerHeight * 0.5);
                createFirework(x, y);
            }, i * 150);
        }
    }, 500);
}

// ===== RESET KE FORM AWAL =====
function resetForm() {
    const audio = document.getElementById('celebrationAudio');
    audio.pause();
    audio.currentTime = 0;
    
    stopAutoFireworks();
    
    const fireworksContainer = document.getElementById('fireworksContainer');
    fireworksContainer.innerHTML = '';
    
    currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    slides.forEach(slide => {
        const titleElement = slide.querySelector('.typing-title');
        const textElement = slide.querySelector('.typing-text');
        if (titleElement) titleElement.textContent = '';
        if (textElement) textElement.textContent = '';
    });
    
    const slideIndicators = document.getElementById('slideIndicators');
    if (slideIndicators) slideIndicators.innerHTML = '';
    
    document.getElementById('greetingSection').style.display = 'none';
    document.getElementById('formSection').style.display = 'block';
    document.getElementById('nameInput').value = '';
}

// ===== EVENT LISTENER =====
document.addEventListener('DOMContentLoaded', function() {
    createStars();
    startFallingObjects();
    
    // Trigger animasi tahun otomatis setelah delay
    setTimeout(() => {
        triggerYearTransition();
    }, 800);
    
    const nameInput = document.getElementById('nameInput');
    if (nameInput) {
        nameInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                showGreeting();
            }
        });
    }
});

// Mercon saat klik layar (untuk greeting section) - Mobile/Android optimized
document.addEventListener('click', function(e) {
    if (document.getElementById('greetingSection').style.display === 'block') {
        const isButton = e.target.closest('button');
        const isCard = e.target.closest('.message-card');
        const isControl = e.target.closest('.slider-controls');
        
        // Mobile-friendly: pastikan hanya click di area kosong yang trigger fireworks
        if (!isButton && !isCard && !isControl && !isTyping) {
            // Untuk mobile, gunakan touch event juga
            const isTouchDevice = () => {
                return (('ontouchstart' in window) ||
                        (navigator.maxTouchPoints > 0) ||
                        (navigator.msMaxTouchPoints > 0));
            };
            
            if (isTouchDevice()) {
                const touch = e.touches ? e.touches[0] : e;
                createFirework(touch.clientX, touch.clientY);
            } else {
                createFirework(e.clientX, e.clientY);
            }
        }
    }
});

// Touch event untuk mobile
document.addEventListener('touchstart', function(e) {
    if (document.getElementById('greetingSection').style.display === 'block') {
        const touch = e.touches[0];
        const target = document.elementFromPoint(touch.clientX, touch.clientY);
        
        const isButton = target?.closest('button');
        const isCard = target?.closest('.message-card');
        const isControl = target?.closest('.slider-controls');
        
        if (!isButton && !isCard && !isControl && !isTyping) {
            createFirework(touch.clientX, touch.clientY);
        }
    }
}, { passive: true });

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    if (document.getElementById('greetingSection').style.display === 'block') {
        if (e.key === 'ArrowRight') {
            nextSlide();
        } else if (e.key === 'ArrowLeft') {
            prevSlide();
        }
    }
});
