


        window.addEventListener('load', () => {
            confetti({
            particleCount: 200,  // Nombre de confettis
            angle: 90,  // Angle de la dispersion
            spread: 45,  // Dispersion des confettis
            origin: { x: 0.5, y: 0.5 },  // Origine au centre de la page
            colors: ['#ff0000', '#00ff00', '#0000ff', '#ff00ff'],  // Couleurs des confettis
            });
        });

        document.querySelectorAll('.dropdown-toggle').forEach(btn => {
        btn.addEventListener('click', () => {
            const menu = btn.nextElementSibling;
            menu.classList.toggle('show');
        });
        });

        function openAuthModal() {
            document.getElementById('auth-modal').classList.remove('hidden');
          }
        
          // Fermer le modal si on clique en dehors du formulaire
          window.addEventListener('click', function(event) {
            const modal = document.getElementById('auth-modal');
            if (event.target === modal) {
              modal.classList.add('hidden');
            }
          });

          const passwordInput = document.getElementById('password');
const togglePassword = document.getElementById('toggle-password');

togglePassword.addEventListener('click', () => {
  const isPassword = passwordInput.type === 'password';
  passwordInput.type = isPassword ? 'text' : 'password';
  togglePassword.innerHTML = isPassword ? '<i class="fas fa-eye-slash"></i>' : '<i class="fas fa-eye"></i>';
});
