document.addEventListener('DOMContentLoaded', () => {
  // Afficher le formulaire au chargement
  const modal = document.getElementById('auth-modal');
  if (modal) {
    modal.classList.remove('hidden');
  }

  // Confettis au chargement
  confetti({
    particleCount: 200,
    angle: 90,
    spread: 45,
    origin: { x: 0.5, y: 0.5 },
    colors: ['#ff0000', '#00ff00', '#0000ff', '#ff00ff'],
  });

  // Gestion des menus déroulants
  document.querySelectorAll('.dropdown-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const menu = btn.nextElementSibling;
      menu.classList.toggle('show');
    });
  });

  // Ouvrir le modal (clic sur Connexion ou Inscription)
  document.getElementById('login-btn').addEventListener('click', () => {
    document.getElementById('auth-modal').classList.remove('hidden');
  });
  document.getElementById('signup-btn').addEventListener('click', () => {
    document.getElementById('auth-modal').classList.remove('hidden');
  });

  // Fermer le modal avec le bouton "×"
  const closeBtn = document.getElementById('close-auth');
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      document.getElementById('auth-modal').classList.add('hidden');
    });
  }

  // Fermer le modal si on clique en dehors de la boîte
  window.addEventListener('click', (event) => {
    const modal = document.getElementById('auth-modal');
    const modalContent = document.querySelector('.modal-content');
    if (event.target === modal) {
      modal.classList.add('hidden');
    }
  });

  // Afficher / masquer le mot de passe
  const passwordInput = document.getElementById('password');
  const togglePassword = document.getElementById('toggle-password');

  togglePassword.addEventListener('click', () => {
    const isPassword = passwordInput.type === 'password';
    passwordInput.type = isPassword ? 'text' : 'password';
    togglePassword.innerHTML = isPassword
      ? '<i class="fas fa-eye-slash"></i>'
      : '<i class="fas fa-eye"></i>';
  });

  const userInfo = document.getElementById('user-info');
  const authButtons = document.getElementById('auth-buttons');

  // Simuler une authentification
  const isAuthenticated = true; // Remplace par ta logique d'authentification

  if (isAuthenticated) {
    userInfo.classList.remove('hidden');
    authButtons.classList.add('hidden');
  } else {
    userInfo.classList.add('hidden');
    authButtons.classList.remove('hidden');
  }

  // Form submission handling
  document.getElementById('auth-form').addEventListener('submit', async function (e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    try {
      const res = await fetch('http://localhost:3500/utilisateurs', {
        method: 'POST',
        body: formData
      });

      if (!res.ok) {
        const errText = await res.text();
        throw new Error(`Erreur ${res.status} : ${errText}`);
      }

      const data = await res.json();
      console.log('Utilisateur inscrit :', data);
      alert("✅ Inscription réussie !");
      form.reset();
    } catch (err) {
      console.error('Erreur lors de l\'inscription :', err);
      alert("❌ Erreur lors de l'inscription : " + err.message);
    }
  });
});
