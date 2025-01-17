// script.js
function showSection(sectionId) {
  // ซ่อนทุก section
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => {
    section.classList.remove('active');
  });

  // แสดง section ที่เลือก
  const activeSection = document.getElementById(sectionId);
  activeSection.classList.add('active');
}