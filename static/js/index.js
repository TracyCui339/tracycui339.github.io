// 页面滚动
document.addEventListener('DOMContentLoaded', function() {
   
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('fade-in');
        observer.observe(section);
    });

    
    const statsSection = document.querySelector('.impact');
    let animated = false;

    const animateNumbers = () => {
        if (animated) return;
        
        document.querySelectorAll('.stat-item h3').forEach(stat => {
            const target = parseInt(stat.innerText);
            let current = 0;
            const increment = target / 50;
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    clearInterval(timer);
                    current = target;
                }
                stat.innerText = Math.round(current) + (stat.innerText.includes('+') ? '+' : '%');
            }, 30);
        });
        
        animated = true;
    };

  
    const statsObserver = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            animateNumbers();
        }
    });

    statsObserver.observe(statsSection);
});
