import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
      import { getFirestore, collection, getDocs, query } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";
      import { getAuth, signInAnonymously } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";
      
      const firebaseConfig = {
          apiKey: "AIzaSyAG_4ZJS6PhL1m95j0KSKNVOH6vM_erxg8",
          authDomain: "metroviganhospit-1754712078671.firebaseapp.com",
          projectId: "metroviganhospit-1754712078671",
          storageBucket: "metroviganhospit-1754712078671.firebasestorage.app",
          messagingSenderId: "751450211377",
          appId: "1:751450211377:web:b0765182c55f0ead268110",
          measurementId: "G-SKFD2L78KJ"
      };
      const appId = firebaseConfig.appId;

      const app = initializeApp(firebaseConfig);
      const db = getFirestore(app);
      const auth = getAuth(app);

      const loadingEl = document.getElementById('loading');
      const featuredContainer = document.getElementById('featured-article-container');
      const articlesGrid = document.getElementById('articles-grid');
      const noArticlesEl = document.getElementById('no-articles');

      async function fetchArticles() {
          try {
              const articlesRef = collection(db, `/artifacts/${appId}/public/data/articles`);
              const q = query(articlesRef);
              const querySnapshot = await getDocs(q);
              
              loadingEl.classList.add('hidden');

              if (querySnapshot.empty) {
                  noArticlesEl.classList.remove('hidden');
                  return;
              }

              let articles = [];
              querySnapshot.forEach(doc => {
                  const data = doc.data();
                  if (data.date && typeof data.date.toDate === 'function') {
                      articles.push({ id: doc.id, ...data });
                  } else {
                      console.warn(`Skipping article ${doc.id}: missing or invalid date.`);
                  }
              });

              if (articles.length === 0) {
                  noArticlesEl.classList.remove('hidden');
                  return;
              }

              articles.sort((a, b) => b.date.toDate() - a.date.toDate());

              const featuredArticle = articles.find(a => a.featured) || articles[0];
              const otherArticles = articles.filter(a => a.id !== featuredArticle.id);

              if (featuredArticle) {
                  featuredContainer.innerHTML = createFeaturedArticleHTML(featuredArticle);
                  featuredContainer.classList.remove('hidden');
              }

              if (otherArticles.length > 0) {
                  articlesGrid.innerHTML = otherArticles.map(createArticleCardHTML).join('');
                  articlesGrid.classList.remove('hidden');
              }
              
          } catch (error) {
              console.error("Error fetching articles: ", error);
              loadingEl.classList.remove('hidden');
              loadingEl.innerHTML = '<p class="text-red-500">Failed to load articles. Please check your Firestore rules and configuration.</p>';
          }
      }

      function getThumbnailUrl(article) {
          let thumbnailUrl = 'https://placehold.co/600x400/cccccc/ffffff?text=Image+Not+Found';
          if (article.imageUrls && Array.isArray(article.imageUrls) && article.imageUrls.length > 0) {
              thumbnailUrl = article.imageUrls[0];
          } else if (article.imageUrl && typeof article.imageUrl === 'string') {
              thumbnailUrl = article.imageUrl;
          }
          return thumbnailUrl;
      }

      function createFeaturedArticleHTML(article) {
          const articleDate = article.date.toDate().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
          const thumbnailUrl = getThumbnailUrl(article);
          return `
              <div class="bg-white rounded-xl shadow-lg overflow-hidden md:flex hover:shadow-2xl transition" data-aos="fade-up">
                  <div class="md:w-1/2">
                      <img src="${thumbnailUrl}" alt="${article.title}" class="h-64 w-full object-cover md:h-full" onerror="this.onerror=null;this.src='https://placehold.co/600x400/cccccc/ffffff?text=Image+Not+Found';">
                  </div>
                  <div class="p-8 md:p-10 md:w-1/2 flex flex-col justify-center">
                      <p class="text-sm text-gray-500 mb-2">${article.author} &bull; ${articleDate}</p>
                      <h2 class="text-3xl font-bold text-gray-800 mb-4">${article.title}</h2>
                      <p class="text-gray-600 text-sm mb-6">${truncate(article.content, 200)}</p>
                      <a href="/news/article.html?id=${article.id}" class="text-green-600 font-medium hover:underline">Read more <i class="fa-solid fa-arrow-right"></i></a>
                  </div>
              </div>
          `;
      }
      
      function createArticleCardHTML(article) {
          const thumbnailUrl = getThumbnailUrl(article);
          return `
              <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition" data-aos="fade-up" data-aos-delay="100">
                  <a href="/news/article.html?id=${article.id}">
                    <img src="${thumbnailUrl}" alt="${article.title}" class="w-full h-64 object-cover" onerror="this.onerror=null;this.src='https://placehold.co/600x400/cccccc/ffffff?text=Image+Not+Found';">
                  </a>
                    <div class="p-6">
                      <h3 class="text-lg font-semibold mb-2">${article.title}</h3>
                      <p class="text-gray-600 text-sm mb-4">
                          ${truncate(article.content, 150)}
                      </p>
                      <a href="/news/article.html?id=${article.id}" class="text-green-600 font-medium hover:underline">Read more <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
              </div>
          `;
      }

      function truncate(str, maxLength) {
          if (!str) return '';
          const strippedString = str.replace(/<[^>]+>/g, '');
          if (strippedString.length <= maxLength) return strippedString;
          return strippedString.substring(0, maxLength) + '...';
      }

      async function initializePage() {
          try {
              await signInAnonymously(auth);
              await fetchArticles();
          } catch (error) {
              console.error("Initialization error:", error);
              loadingEl.innerHTML = '<p class="text-red-500">Could not connect to the database. Please check console for details.</p>';
          }
      }

      document.addEventListener('DOMContentLoaded', () => {
          initializePage();
          const toggleBtn = document.getElementById('menu-toggle');
          const menu = document.getElementById('navbar-menu');
          toggleBtn.addEventListener('click', () => {
              menu.classList.toggle('hidden');
          });
      });