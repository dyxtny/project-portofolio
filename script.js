window.addEventListener("DOMContentLoaded", () => {
            const elements = document.querySelectorAll(".fade-in");
            elements.forEach((el, index) => {
                setTimeout(() => {
                    el.classList.add("opacity-100", "translate-y-0");
                }, index * 200);
            });
        });

        document.addEventListener("DOMContentLoaded", function () {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.remove("opacity-0", "translate-x-[-50px]", "translate-x-[50px]");
                        entry.target.classList.add("opacity-100", "translate-x-0");
                        observer.unobserve(entry.target);
                    }
                });
            }, {
                threshold: 0.5
            });

            const targets = document.querySelectorAll('.about-photo, .about-text');
            targets.forEach(target => observer.observe(target));

            const sectionTitles = document.querySelectorAll('.fade-in-section');

            const titleObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, {
                threshold: 0.7
            });

            sectionTitles.forEach(title => {
                titleObserver.observe(title);
            });
        });

        const images = [
            "image/project1.png",
            "image/project2.png",
            "image/project3.png",
            "image/project4.png",
            "image/project5.png",
            "image/project6.png",
        ];

        let currentIndex = 0;

        function showImage(index) {
            const img = document.getElementById("awardImage");
            img.src = images[index];
        }

        function nextImage() {
            currentIndex = (currentIndex + 1) % images.length;
            showImage(currentIndex);
        }

        function prevImage() {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            showImage(currentIndex);
        }

        document.addEventListener("DOMContentLoaded", () => {
            let current = 0;
        
            const images = [
                "image/project1.png",
                "image/project2.png",
                "image/project3.png",
                "image/project4.png",
                "image/project5.png",
                "image/project6.png",
            ];
        
            const links = [
                "https://dyxtny.github.io/hindia/",
                "https://dyxtny.github.io/travel/",
                "https://dyxtny.github.io/shopp/",
                "https://dyxtny.github.io/hospital/",
                "https://dyxtny.github.io/ghibli/",
                "https://dyxtny.github.io/history/"
            ];
        
            const imageElement = document.getElementById("awardImage");
        
            function updateImage() {
                imageElement.src = images[current];
            }
        
            window.nextImage = function () {
                current = (current + 1) % images.length;
                updateImage();
            };
        
            window.prevImage = function () {
                current = (current - 1 + images.length) % images.length;
                updateImage();
            };
        
            imageElement.addEventListener("click", () => {
                window.location.href = links[current];
            });
        
            updateImage();
        });
        
        window.addEventListener('load', () => {
            setTimeout(() => {
                document.getElementById('loadingScreen').style.display = 'none';
                document.getElementById('mainContent').style.display = 'block';
            }, 2000);
        });
        

        // FORM Kritik dan Saran
        const criticismBtn = document.getElementById('criticismBtn');
        const criticismForm = document.getElementById('criticismForm');
        const closeCriticismForm = document.getElementById('closeCriticismForm');

        criticismBtn.addEventListener('click', () => {
            criticismForm.classList.toggle('hidden');
        });

        closeCriticismForm.addEventListener('click', () => {
            criticismForm.classList.add('hidden');
        });

        // FORM Konsultasi
        const consultationBtn = document.getElementById('consultationBtn');
        const consultationForm = document.getElementById('consultationForm');
        const closeConsultationForm = document.getElementById('closeConsultationForm');

        consultationBtn.addEventListener('click', () => {
            consultationForm.classList.toggle('hidden');
        });

        closeConsultationForm.addEventListener('click', () => {
            consultationForm.classList.add('hidden');
        });

        function showCriticismForm() {
            document.getElementById('criticismForm').classList.remove('hidden');
            document.getElementById('criticismOverlay').classList.remove('hidden');
        }

        document.getElementById('closeCriticismForm').addEventListener('click', function () {
            document.getElementById('criticismForm').classList.add('hidden');
            document.getElementById('criticismOverlay').classList.add('hidden');
        });

        // Typed.js for typing animation
        document.addEventListener("DOMContentLoaded", function() {
            var typed = new Typed('#hero-text', {
                strings: ["I'm a psychologist", "and web developer"],
                typeSpeed: 70,
                backSpeed: 40, 
                loop: true,
                showCursor: true,
                cursorChar: '|',
            });
        });