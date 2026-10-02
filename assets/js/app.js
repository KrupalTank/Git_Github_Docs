document.addEventListener("DOMContentLoaded", () => {
  // Mobile sidebar toggle
  const toggleBtn = document.getElementById("sidebar-toggle");
  const sidebar = document.getElementById("sidebar");

  if (toggleBtn && sidebar) {
    toggleBtn.addEventListener("click", () => {
      sidebar.classList.toggle("open");
    });
  }

  // Add Copy Buttons to code snippets dynamically
  const codeBlocks = document.querySelectorAll("pre");
  codeBlocks.forEach((block) => {
    const wrapper = document.createElement("div");
    wrapper.className = "code-block-wrapper";

    block.parentNode.insertBefore(wrapper, block);
    wrapper.appendChild(block);

    const copyBtn = document.createElement("button");
    copyBtn.className = "copy-btn";
    copyBtn.innerText = "Copy";

    copyBtn.addEventListener("click", () => {
      const codeText = block.querySelector("code") ? block.querySelector("code").innerText : block.innerText;
      navigator.clipboard.writeText(codeText).then(() => {
        copyBtn.innerText = "Copied!";
        setTimeout(() => {
          copyBtn.innerText = "Copy";
        }, 2000);
      });
    });

    wrapper.appendChild(copyBtn);
  });

  // Active navigation link tracking on scroll
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll(".doc-section");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      if (pageYOffset >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });
});