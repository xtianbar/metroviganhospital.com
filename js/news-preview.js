import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getFirestore, collection, getDocs, query } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";
import { getAuth, signInAnonymously } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

// Your Firebase Configuration
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

const newsGrid = document.getElementById('news-preview-grid');

async function fetchLatestNews() {
    try {
        await signInAnonymously(auth);
        const articlesRef = collection(db, `/artifacts/${appId}/public/data/articles`);
        const querySnapshot = await getDocs(query(articlesRef));

        if (querySnapshot.empty) {
            newsGrid.innerHTML = '<p class="col-span-3 text-center text-gray-500">No recent news available.</p>';
            return;
        }

        let articles = [];
        querySnapshot.forEach(doc => {
            const data = doc.data();
            if (data.date && typeof data.date.toDate === 'function') {
                articles.push({ id: doc.id, ...data });
            }
        });

        // Sort by date and get the latest 3
        articles.sort((a, b) => b.date.toDate() - a.date.toDate());
        const latestThree = articles.slice(0, 3);

        if (latestThree.length > 0) {
            newsGrid.innerHTML = latestThree.map(createArticleCardHTML).join('');
        } else {
             newsGrid.innerHTML = '<p class="col-span-3 text-center text-gray-500">No recent news available.</p>';
        }

    } catch (error) {
        console.error("Error fetching news preview:", error);
        newsGrid.innerHTML = '<p class="col-span-3 text-center text-red-500">Could not load news at this time.</p>';
    }
}

function createArticleCardHTML(article) {
    let thumbnailUrl = 'https://placehold.co/600x400/cccccc/ffffff?text=Image+Not+Found';

    // **FIX:** Check for new 'imageUrls' array first, then fall back to old 'imageUrl' string
    if (article.imageUrls && Array.isArray(article.imageUrls) && article.imageUrls.length > 0) {
        thumbnailUrl = article.imageUrls[0];
    } else if (article.imageUrl && typeof article.imageUrl === 'string') {
        thumbnailUrl = article.imageUrl;
    }
    
    return `
        <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition">
            <img src="${thumbnailUrl}" alt="${article.title}" class="w-full h-56 object-cover" onerror="this.onerror=null;this.src='https://placehold.co/600x400/cccccc/ffffff?text=Image+Not+Found';">
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

// Run the function when the page loads
fetchLatestNews();