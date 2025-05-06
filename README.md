<script>
  // Error-safe localStorage handling
  function safeSetItem(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch (e) {
      console.error('LocalStorage unavailable:', e);
    }
  }

  function safeGetItem(key, fallback = 0) {
    try {
      return localStorage.getItem(key) || fallback;
    } catch (e) {
      console.error('LocalStorage unavailable:', e);
      return fallback;
    }
  }

  // Dynamic video handling
  const videos = [
    {
      id: 'video1',
      title: 'فيديو توضيحي من Google Drive',
      description: 'شرح موجز حول كيفية استخدام Google Drive بطريقة فعّالة.',
      link: 'https://drive.google.com/file/d/1-5zBa2R1p6MW9jf_nrpDbbO-vuqZ7xyo/view'
    },
    // Add more videos here
  ];

  function loadCounts(id) {
    const views = safeGetItem(`${id}-views`);
    const likes = safeGetItem(`${id}-likes`);
    document.getElementById(`views-count-${id}`).textContent = views;
    document.getElementById(`likes-count-${id}`).textContent = likes;
  }

  function incrementView(id) {
    const views = parseInt(safeGetItem(`${id}-views`)) + 1;
    safeSetItem(`${id}-views`, views);
    document.getElementById(`views-count-${id}`).textContent = views;
  }

  function likeVideo(id) {
    const likes = parseInt(safeGetItem(`${id}-likes`)) + 1;
    safeSetItem(`${id}-likes`, likes);
    document.getElementById(`likes-count-${id}`).textContent = likes;
    alert("أعجبك الفيديو!");
  }

  function copyLink(link) {
    navigator.clipboard.writeText(link)
      .then(() => alert("تم نسخ رابط الفيديو!"))
      .catch((err) => alert(`حدث خطأ أثناء النسخ: ${err.message}`));
  }

  function renderVideos() {
    const container = document.querySelector('.container');
    videos.forEach(video => {
      const videoCard = document.createElement('div');
      videoCard.className = 'video-card';
      videoCard.id = `${video.id}-card`;

      videoCard.innerHTML = `
        <iframe src="${video.link}/preview" allow="autoplay"></iframe>
        <div class="video-info">
          <div class="video-title">${video.title}</div>
          <div class="video-description">${video.description}</div>
          <div class="video-actions">
            <div>
              <span id="views-count-${video.id}">0</span> مشاهدة |
              <span id="likes-count-${video.id}">0</span> إعجاب
            </div>
            <div>
              <button class="btn like-btn" onclick="likeVideo('${video.id}')">إعجاب</button>
              <button class="btn share-btn" onclick="copyLink('${video.link}')">مشاركة</button>
            </div>
          </div>
        </div>
      `;

      container.appendChild(videoCard);
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    videos.forEach(video => {
      loadCounts(video.id);
      incrementView(video.id);
    });
    renderVideos();
  });
</script>