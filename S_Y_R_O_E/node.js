<script>
document.addEventListener('DOMContentLoaded', () => {
  const toggles = document.querySelectorAll('.lyrics-toggle');
  toggles.forEach(toggle => {
    const lyrics = toggle.previousElementSibling; // .lyrics

    if (!lyrics || !lyrics.classList.contains('lyrics')) return;

    toggle.addEventListener('click', () => {
      const isExpanded = lyrics.classList.toggle('expanded');
      toggle.textContent = isExpanded ? 'Свернуть' : 'Развернуть';
    });
  });
});
</script>
