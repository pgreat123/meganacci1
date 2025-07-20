
  document.addEventListener("DOMContentLoaded", () => {
    console.log("NFT Project Website Loaded");

    const nftImages = document.querySelectorAll(".testnet-carousel img");
    const traitsPanel = document.getElementById("traitsPanel");

    const traits = {
      "nft1": ["Background: Blue", "Eyes: Laser", "Head: Hat"],
      "nft2": ["Background: Red", "Eyes: Sunglasses", "Head: Helmet"],
      "nft3": ["Background: Green", "Eyes: Glow", "Head: Cap"],
      "nft4": ["Background: Purple", "Eyes: Robotic", "Head: Horns"],
      "nft5": ["Background: Orange", "Eyes: Starry", "Head: Crown"]
    };

    function showTraits(nftId) {
      const selectedTraits = traits[nftId] || ["No traits found"];
      if (traitsPanel) {
        traitsPanel.innerHTML = `
          <h3>Traits</h3>
          <ul>
            ${selectedTraits.map(trait => `<li>${trait}</li>`).join("")}
          </ul>
        `;
      }
    }

    nftImages.forEach((img, index) => {
      img.setAttribute("data-id", `nft${index + 1}`);
      img.addEventListener("click", () => {
        nftImages.forEach(i => i.classList.remove("focused"));
        img.classList.add("focused");
        showTraits(`nft${index + 1}`);
        img.scrollIntoView({ behavior: "smooth", inline: "center" });
      });
    });

    if (nftImages.length > 0) {
      nftImages[0].classList.add("focused");
      nftImages[0].setAttribute("data-id", "nft1");
      showTraits("nft1");
    }

    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
      const question = item.querySelector('.faq-question');
      question.addEventListener('click', () => {
        item.classList.toggle('active');
      });
    });

    // Countdown Timer
    const targetDate = new Date("2025-06-28T00:00:00").getTime();

    function updateCountdown() {
      const now = new Date().getTime();
      const diff = targetDate - now;

      if (diff <= 0) {
        document.getElementById("timer").style.display = "none";
        document.getElementById("mintLive").style.display = "block";
        clearInterval(timerInterval);
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      document.getElementById("days").textContent = days;
      document.getElementById("hours").textContent = hours;
      document.getElementById("minutes").textContent = minutes;
      document.getElementById("seconds").textContent = seconds;
    }

    const timerInterval = setInterval(updateCountdown, 1000);
    updateCountdown();
  });
