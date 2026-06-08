const menuBtn = document.querySelector('.menu-btn');
const menuBtnOptions = document.querySelector('.menu-btn-options');

menuBtn.addEventListener('click', function(){
    menuBtnOptions.classList.toggle('show')
})

console.log(menuBtn)


const box = document.querySelector(".about-image");
const img = document.querySelector(".about-image img");

window.addEventListener("scroll", () => {

  const rect = box.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  const progress = (windowHeight - rect.top) / (windowHeight + rect.height);

  const move = (progress - 0.5) * 400;

  img.style.transform = `translateY(${move}px)`;
});


const wrapper = document.querySelector(".salon-img");
const image = document.querySelector(".salon-img img");

window.addEventListener("scroll", () => {

  const rect = wrapper.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  // scroll progress
  const progress =
    (windowHeight - rect.top) /
    (windowHeight + rect.height);

  // movement amount
  const move = (progress - 0.5) * 400;

  image.style.transform = `translateY(${move}px)`;
});

  const section = document.querySelector('.section-services');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        section.classList.add('show-images');
      }
    });
  }, {
    threshold: 0.3
  });

  observer.observe(section);


/*
      // Remove the black background from the bride image by making corner-connected
      // near-black pixels transparent (so the girl looks cut out).
      (function () {
        const img = document.getElementById("hero-bride-img");
        if (!img || img.dataset.bgRemoved === "1") return;

        const isBgPixel = (r, g, b, a) => {
          if (a < 10) return true;
          const max = Math.max(r, g, b);
          const min = Math.min(r, g, b);
          const delta = max - min; // low delta => gray/black background
          const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
          // Target near-black/near-gray corners, avoid removing dark but colorful hair.
          return max < 55 && luminance < 45 && delta < 18;
        };

        const process = () => {
          const w = img.naturalWidth;
          const h = img.naturalHeight;
          if (!w || !h) return;

          const canvas = document.createElement("canvas");
          canvas.width = w;
          canvas.height = h;
          const ctx = canvas.getContext("2d", { willReadFrequently: true });
          ctx.drawImage(img, 0, 0, w, h);

          const imageData = ctx.getImageData(0, 0, w, h);
          const data = imageData.data;
          const visited = new Uint8Array(w * h);

          const floodFromCorner = (startX, startY) => {
            const startIdx = startY * w + startX;
            if (visited[startIdx]) return;

            const i0 = startIdx * 4;
            const r0 = data[i0], g0 = data[i0 + 1], b0 = data[i0 + 2], a0 = data[i0 + 3];
            if (!isBgPixel(r0, g0, b0, a0)) return;

            const stack = [startIdx];
            visited[startIdx] = 1;

            while (stack.length) {
              const idx = stack.pop();
              const i = idx * 4;

              // Make background pixel transparent
              data[i + 3] = 0;

              const x = idx % w;
              const y = (idx / w) | 0;

              // 4-neighborhood is enough for removing connected background
              if (x > 0) {
                const ni = idx - 1;
                if (!visited[ni]) {
                  const j = ni * 4;
                  if (isBgPixel(data[j], data[j + 1], data[j + 2], data[j + 3])) {
                    visited[ni] = 1;
                    stack.push(ni);
                  }
                }
              }
              if (x < w - 1) {
                const ni = idx + 1;
                if (!visited[ni]) {
                  const j = ni * 4;
                  if (isBgPixel(data[j], data[j + 1], data[j + 2], data[j + 3])) {
                    visited[ni] = 1;
                    stack.push(ni);
                  }
                }
              }
              if (y > 0) {
                const ni = idx - w;
                if (!visited[ni]) {
                  const j = ni * 4;
                  if (isBgPixel(data[j], data[j + 1], data[j + 2], data[j + 3])) {
                    visited[ni] = 1;
                    stack.push(ni);
                  }
                }
              }
              if (y < h - 1) {
                const ni = idx + w;
                if (!visited[ni]) {
                  const j = ni * 4;
                  if (isBgPixel(data[j], data[j + 1], data[j + 2], data[j + 3])) {
                    visited[ni] = 1;
                    stack.push(ni);
                  }
                }
              }
            }
          };

          // Start flood fill from the four corners
          floodFromCorner(0, 0);
          floodFromCorner(w - 1, 0);
          floodFromCorner(0, h - 1);
          floodFromCorner(w - 1, h - 1);

          ctx.putImageData(imageData, 0, 0);
          img.src = canvas.toDataURL("image/png");
          img.dataset.bgRemoved = "1";
        };

        if (img.complete) process();
        else img.addEventListener("load", process, { once: true });
      })(); */