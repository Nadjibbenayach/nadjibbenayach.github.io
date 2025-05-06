<!DOCTYPE html>
<html lang="ar">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>موقعي لنشر الفيديوهات</title>
  <style>
    body {
      margin: 0;
      font-family: 'Tahoma', sans-serif;
      background-color: #f2f2f2;
      direction: rtl;
      color: #333;
    }

    header {
      background: #111;
      color: #fff;
      padding: 15px 20px;
      text-align: center;
      font-size: 22px;
      font-weight: bold;
      position: sticky;
      top: 0;
      z-index: 100;
    }

    .container {
      padding: 15px;
      max-width: 800px;
      margin: auto;
    }

    .video-card {
      background: #fff;
      border-radius: 12px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
      margin-bottom: 25px;
      overflow: hidden;
      transition: transform 0.2s;
    }

    .video-card:hover {
      transform: scale(1.02);
    }

    iframe {
      width: 100%;
      height: 250px;
      border: none;
    }

    .video-info {
      padding: 15px;
    }

    .video-title {
      font-size: 18px;
      margin-bottom: 10px;
      font-weight: bold;
    }

    .video-actions {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 10px;
      flex-wrap: wrap;
    }

    .btn {
      padding: 7px 15px;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      font-size: 14px;
      margin: 5px 0;
    }

    .like-btn {
      background-color: #3498db;
      color: white;
    }

    .share-btn {
      background-color: #2ecc71;
      color: white;
    }

    @media (prefers-color-scheme: dark) {
      body {
        background-color: #1a1a1a;
        color: #eee;
      }

      .video-card {
        background-color: #2b2b2b;
        color: #eee;
      }

      header {
        background-color: #000;
      }
    }
  </style>
</head>
<body>

  <header>موقع الفيديوهات</header>

  <div class="container">

    <!-- بطاقة فيديو -->
    <div class="video-card" id="video1-card">
      <iframe src="https://drive.google.com/file/d/1-5zBa2R1p6MW9jf_nrpDbbO-vuqZ7xyo/preview" allow="autoplay"></iframe>
      <div class="video-info">
        <div class="video-title">فيديو توضيحي من Google Drive</div>
        <div class="video-actions">
          <div>
            <span id="views-count-video1">0</span> مشاهدة |
            <span id="likes-count-video1">0</span> إعجاب
          </div>
          <div>
            <button class="btn like-btn" onclick="likeVideo('video1')">إعجاب</button>
            <button class="btn share-btn" onclick="copyLink()">مشاركة</button>
          </div>
        </div>
      </div>
    </div>

    <!-- أضف المزيد من الفيديوهات بنفس الطريقة مع تغيير ID -->

  </div>

  <script>
    const videoId = "video1";

    function loadCounts(id) {
      let views = localStorage.getItem(`${id}-views`) || 0;
      let likes = localStorage.getItem(`${id}-likes`) || 0;
      document.getElementById(`views-count-${id}`).textContent = views;
      document.getElementById(`likes-count-${id}`).textContent = likes;
    }

    function incrementView(id) {
      let views = parseInt(localStorage.getItem(`${id}-views`) || 0);
      views++;
      localStorage.setItem(`${id}-views`, views);
      document.getElementById(`views-count-${id}`).textContent = views;
    }

    function likeVideo(id) {
      let likes = parseInt(localStorage.getItem(`${id}-likes`) || 0);
      likes++;
      localStorage.setItem(`${id}-likes`, likes);
      document.getElementById(`likes-count-${id}`).textContent = likes;
      alert("أعجبك الفيديو!");
    }

    function copyLink() {
      navigator.clipboard.writeText("https://drive.google.com/file/d/1-5zBa2R1p6MW9jf_nrpDbbO-vuqZ7xyo/view")
        .then(() => alert("تم نسخ رابط الفيديو!"))
        .catch(() => alert("حدث خطأ أثناء النسخ."));
    }

    // تحميل العدادات عند فتح الصفحة
    document.addEventListener("DOMContentLoaded", function () {
      loadCounts(videoId);
      incrementView(videoId);
    });
  </script>

</body>
</html>