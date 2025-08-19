import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
          import { getFirestore, doc, getDoc, collection, getDocs, query } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";
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
  
          const articleContainer = document.getElementById('article-container');
          const loadingEl = document.getElementById('loading');
          const relatedNewsGrid = document.getElementById('related-news-grid');
  
          async function fetchAndDisplayArticle() {
              const params = new URLSearchParams(window.location.search);
              const articleId = params.get('id');
  
              if (!articleId) {
                  articleContainer.innerHTML = `<p class="text-red-500 text-center">Error: No article ID provided.</p>`;
                  return;
              }
  
              try {
                  await signInAnonymously(auth);
                  const articleRef = doc(db, `/artifacts/${appId}/public/data/articles`, articleId);
                  const docSnap = await getDoc(articleRef);
  
                  loadingEl.classList.add('hidden');
  
                  if (docSnap.exists()) {
                      const article = docSnap.data();
                      renderArticle(article);
                      fetchAndDisplayRelatedArticles(articleId); // Fetch related articles
                  } else {
                      articleContainer.innerHTML = `<p class="text-red-500 text-center">Error: Article not found.</p>`;
                  }
              } catch (error) {
                  console.error("Error fetching article:", error);
                  loadingEl.classList.add('hidden');
                  articleContainer.innerHTML = `<p class="text-red-500 text-center">Could not load the article. Please try again later.</p>`;
              }
          }
  
          function renderArticle(article) {
              document.title = `${article.title} - Metro Vigan Hospital`;
  
              const articleDate = article.date.toDate().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
              
              let mainImage = 'https://placehold.co/1200x600/cccccc/ffffff?text=Image+Not+Available';
              let otherImagesHTML = '';
  
              if (article.imageUrls && Array.isArray(article.imageUrls) && article.imageUrls.length > 0) {
                  mainImage = article.imageUrls[0];
                  if (article.imageUrls.length > 1) {
                      // Create a grid for additional images
                      otherImagesHTML = `
                          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-8">
                              ${article.imageUrls.slice(1).map(url => `
                                  <div>
                                      <img src="${url}" alt="Article image" class="w-full h-48 object-cover rounded-lg shadow-md" onerror="this.style.display='none'">
                                  </div>
                              `).join('')}
                          </div>
                      `;
                  }
              } else if (article.imageUrl && typeof article.imageUrl === 'string') {
                  mainImage = article.imageUrl;
              }
  
              articleContainer.innerHTML = `
                  <a href="../news" class="text-green-600 font-medium hover:underline mb-8 inline-block">&larr; Back to News</a>
                  <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">${article.title}</h1>
                  <p class="text-gray-500 mb-6">${article.author} &bull; ${articleDate}</p>
                  <img src="${mainImage}" alt="${article.title}" class="w-full h-auto rounded-lg shadow-lg mb-8" onerror="this.onerror=null;this.src='https://placehold.co/1200x600/cccccc/ffffff?text=Image+Not+Found';">
                  <div class="article-content text-gray-700">
                      ${article.content}
                      ${otherImagesHTML}
                  </div>
              `;
          }
  
          async function fetchAndDisplayRelatedArticles(currentArticleId) {
              try {
                  const articlesRef = collection(db, `/artifacts/${appId}/public/data/articles`);
                  const querySnapshot = await getDocs(query(articlesRef));
  
                  let allArticles = [];
                  querySnapshot.forEach(doc => {
                      allArticles.push({ id: doc.id, ...doc.data() });
                  });
  
                  // Filter out the current article and shuffle the rest
                  let relatedArticles = allArticles.filter(article => article.id !== currentArticleId);
                  shuffleArray(relatedArticles);
  
                  // Take the first 3
                  const articlesToDisplay = relatedArticles.slice(0, 3);
  
                  if (articlesToDisplay.length > 0) {
                      relatedNewsGrid.innerHTML = articlesToDisplay.map(createRelatedArticleCardHTML).join('');
                  } else {
                      relatedNewsGrid.innerHTML = '<p class="col-span-3 text-center text-gray-500">No other news available.</p>';
                  }
  
              } catch (error) {
                  console.error("Error fetching related articles:", error);
                  relatedNewsGrid.innerHTML = '<p class="col-span-3 text-center text-red-500">Could not load related news.</p>';
              }
          }
  
          function createRelatedArticleCardHTML(article) {
              const thumbnailUrl = (article.imageUrls && article.imageUrls.length > 0) ? article.imageUrls[0] : article.imageUrl || 'https://placehold.co/600x400/cccccc/ffffff?text=Image+Not+Found';
              
              return `
                  <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition">
                      <img src="${thumbnailUrl}" alt="${article.title}" class="w-full h-48 object-cover" onerror="this.onerror=null;this.src='https://placehold.co/600x400/cccccc/ffffff?text=Image+Not+Found';">
                      <div class="p-6">
                          <h3 class="text-lg font-semibold mb-2 h-14 overflow-hidden">${article.title}</h3>
                          <a href="article.html?id=${article.id}" class="text-green-600 font-medium hover:underline">Read more <i class="fa-solid fa-arrow-right"></i></a>
                      </div>
                  </div>
              `;
          }
          
          // Fisher-Yates shuffle algorithm
          function shuffleArray(array) {
              for (let i = array.length - 1; i > 0; i--) {
                  const j = Math.floor(Math.random() * (i + 1));
                  [array[i], array[j]] = [array[j], array[i]];
              }
          }
  
          document.addEventListener('DOMContentLoaded', () => {
              fetchAndDisplayArticle();
          });