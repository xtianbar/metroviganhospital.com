    // Full doctors list (Manual room and schedule fields added)
    const doctorsList = [
  { name: "Digna R. Ragasa, MD, MHA, FPCHA", specialty: "General Surgery", room: "Room 106", schedule: "Mon-Sat: 8AM-12NN" },
  { name: "Estefanie Cabebe, MD, DPBA", specialty: "Anesthesiology", room: "Room 102", schedule: "Tue & Thu: 9AM-12NN" },
  { name: "Herminia M. Pascua, MD", specialty: "Anesthesiology", room: "Room 102", schedule: "Wed & Fri: 1PM-4PM" },
  { name: "Anacleto Advincula, MD", specialty: "Anesthesiology", room: "Room 103", schedule: "Mon & Thu: 10AM-1PM" },
  { name: "Leonor Isabel Caldetera Dy, MD", specialty: "Anesthesiology", room: "Room 103", schedule: "Tue & Fri: 2PM-5PM" },
  { name: "Sean Vera Cruz, DMD", specialty: "Dentistry", room: "Dental Room 1", schedule: "Mon-Fri: 8AM-11AM" },
  { name: "Mirella Rosuman, DMD", specialty: "Dentistry", room: "Dental Room 2", schedule: "Tue & Thu: 1PM-4PM" },
  { name: "Simeon Emmanuel Aquino II, MD, DPBO", specialty: "EENT", room: "Room 104", schedule: "Mon & Wed: 8AM-11AM" },
  { name: "Rolando Vermudez, MD", specialty: "EENT", room: "Room 104", schedule: "Tue & Thu: 9AM-12NN" },
  { name: "Robert Q. Lim, MD, FPCP", specialty: "Cardiology", room: "Room 115", schedule: "Mon-Sat: 10AM onwards" },
  { name: "Charles Hubert R. Rabara, MD, DPAFD", specialty: "Family Medicine", room: "Room 109", schedule: "Saturday: 2PM" },
  { name: "Luz Gregoria L. Velasco, MD", specialty: "Internal Medicine", room: "OPD Extension, Room 5", schedule: "Friday: 11AM-2PM" },
  { name: "Isaias Alipio Jr., MD, FPARM", specialty: "Rehabilitation Medicine", room: "Rehab Room 1", schedule: "Mon, Wed & Fri: 9AM-12NN" },
  { name: "Evangeline De Vera, MD, FPOGS", specialty: "OB-Gyne", room: "Room 301", schedule: "Mon & Thu: 8AM-11AM" },
  { name: "Ruth Judith Gay Cristobal, MD", specialty: "OB-Gyne", room: "Room 302", schedule: "Tue & Fri: 1PM-4PM" },
  { name: "Alda Gene Pipo-Tremor, MD", specialty: "OB-Gyne", room: "Room 302", schedule: "Wed & Sat: 9AM-12NN" },
  { name: "Brenda I. Rosuman, MD", specialty: "Pathology", room: "Lab 1", schedule: "Mon-Fri: 8AM-12NN" },
  { name: "Melissa Donata A. Ragasa, MD", specialty: "Pediatrics", room: "Room 401", schedule: "Mon & Wed: 8AM-11AM" },
  { name: "Beatriz M. Reyes, MD", specialty: "Pediatrics", room: "Room 402", schedule: "Tue & Fri: 10AM-1PM" },
  { name: "Anthony R. Vera Cruz, MD", specialty: "Radiology", room: "Radiology Dept", schedule: "Mon-Fri: 8AM-5PM" },
  { name: "Ernesto Tagorda Jr., MD", specialty: "General Surgery", room: "Room 101", schedule: "Tue & Thu: 8AM-11AM" },
  { name: "Conrado M. Andal, MD", specialty: "General Surgery", room: "Room 101", schedule: "Wed & Fri: 9AM-12NN" },
  { name: "Claro Cauton, MD", specialty: "Orthopedic Surgery", room: "Room 107", schedule: "Mon & Thu: 2PM-5PM" },
  { name: "Marcelino de Peralta, MD", specialty: "Orthopedic Surgery", room: "Room 107", schedule: "Tue & Fri: 8AM-11AM" },
  { name: "Nelis Plete, MD", specialty: "Anesthesiology", room: "Room 102", schedule: "Wed & Fri: 1PM-4PM" },
  { name: "Fatima Malcaba, DMD", specialty: "Dentistry", room: "Dental Room 3", schedule: "Mon, Wed & Fri: 8AM-11AM" },
  { name: "Lymuel Remigio Pascua, DMD", specialty: "Dentistry", room: "Dental Room 2", schedule: "Tue & Thu: 1PM-4PM" },
  { name: "Paula Cynthia Valencia, DMD", specialty: "Dentistry", room: "Dental Room 3", schedule: "Wed & Fri: 9AM-12NN" },
  { name: "Romen Almazar, MD", specialty: "EENT", room: "Room 104", schedule: "Mon & Wed: 2PM-5PM" },
  { name: "Nicanor Lacuesta, MD", specialty: "EENT", room: "Room 104", schedule: "Tue & Fri: 10AM-1PM" },
  { name: "Marc Frederick Panganiban, MD", specialty: "EENT", room: "Room 105", schedule: "Thu & Sat: 8AM-11AM" },
  { name: "Pedro Patao, MD", specialty: "EENT", room: "Room 105", schedule: "Wed & Fri: 2PM-5PM" },
  { name: "Leslie Asuncion-Viado, MD", specialty: "Cardiology", room: "Room 102", schedule: "Tuesday: 8AM" },
  { name: "Max Geronimo Butardo, MD", specialty: "Cardiology", room: "Room 106", schedule: "Thursday: 2PM" },
  { name: "Gloria Lahoz, MD", specialty: "Cardiology", room: "Room 202", schedule: "Wed & Sat: 10AM-1PM" },
  { name: "Georgina D. Andal, MD", specialty: "Dermatology", room: "Room 203", schedule: "Mon & Thu: 1PM-4PM" },
  { name: "Joel Malixi, MD", specialty: "Dermatology", room: "Room 203", schedule: "Tue & Fri: 8AM-11AM" },
  { name: "Eugenio Pipo III, MD", specialty: "Dermatology", room: "Room 203", schedule: "Wed & Sat: 9AM-12NN" },
  { name: "Jean Caringal, MD", specialty: "Endocrinology", room: "Room 204", schedule: "Mon & Thu: 10AM-1PM" },
  { name: "Lorenza Evangelina Pipo, MD", specialty: "Endocrinology", room: "Room 106", schedule: "Friday: 9AM" },
  { name: "Maria Blanca Kua, MD", specialty: "Gastroenterology", room: "Room 106", schedule: "Tuesday: 9AM-11AM" },
  { name: "Marjorie Antonette Fragante, MD", specialty: "Gastroenterology", room: "OPD Extension", schedule: "Mon & Fri: 9AM-12NN / 9AM-12NN & 2PM" },
  { name: "Maria Fatima Sabaten, MD", specialty: "Gastroenterology", room: "Room 106", schedule: "Saturday: 2PM" },
  { name: "Ma. Eileen O. Pascua, MD", specialty: "Gastroenterology", room: "Room 109", schedule: "Tuesday: 2PM-4PM" },
  { name: "Jelna Shane Feri, MD", specialty: "Gastroenterology", room: "Room 106", schedule: "Mon & Wed: 2PM-4PM" },
  { name: "Glenda Tagorda, MD", specialty: "Internal Medicine", room: "Room 106", schedule: "Mon & Wed: 1PM-4PM" },
  { name: "Kristal F. Mendoza, MD", specialty: "Internal Medicine", room: "Room 106", schedule: "Tue & Fri: 10AM-1PM" },
  { name: "Criselda Ciubal, MD", specialty: "Infectious Disease", room: "Room 106", schedule: "Mon & Thu: 9AM-12NN" },
  { name: "Ofelia Datu, MD", specialty: "Nephrology", room: "Room 106", schedule: "Tue & Fri: 11AM-12NN" },
  { name: "Amor Rhea Quilala-Narag, MD", specialty: "Nephrology", room: "Room 106", schedule: "Mon, Wed & Fri: 2PM-4PM" },
  { name: "Jeanne Zherluck Zapata-Lapira, MD", specialty: "Nephrology", room: "Room 104", schedule: "Tue & Thu: 2PM" },
  { name: "Carie Cabinian, MD", specialty: "Nephrology", room: "Room 105", schedule: "Friday: 3PM" },
  { name: "Mary Judith Ragaza, MD", specialty: "Nephrology", room: "Room 106", schedule: "Thu & Sat: 10AM-1PM" },
  { name: "Steve Arellano, MD", specialty: "Neurology", room: "Room 106", schedule: "Tue & Fri: 8AM-11AM" },
  { name: "Rainick T. Navarro, MD", specialty: "Neurology", room: "Room 111", schedule: "Mon & Fri: 9AM-12NN" },
  { name: "Elton Ong, MD", specialty: "Neurology", room: "Room 111", schedule: "Tue & Fri: 6AM" },
  { name: "Vida Margarette Andal-Bueno, MD", specialty: "Neurology", room: "Room 106", schedule: "Mon & Wed: 3PM" },
  { name: "Godard E. Artajos, MD", specialty: "Neurology", room: "OPD Extension", schedule: "Friday: 2PM" },
  { name: "Ma. Verena Remudaro, MD", specialty: "Oncology", room: "Room 106", schedule: "Wed & Fri: 9AM-12NN" },
  { name: "Mary Grace Kindipan, MD", specialty: "Oncology", room: "5th Floor, Oncology Room", schedule: "Thursday: 8AM" },  
  { name: "Johann Yee, MD", specialty: "Psychiatry", room: "Room 210", schedule: "Mon & Thu: 2PM-5PM" },
  { name: "Abraham Auberon B. Austria, MD", specialty: "Pulmonology", room: "Room 211", schedule: "Mon & Wed: 8AM-11AM" },
  { name: "Michelleen Corales, MD", specialty: "Pulmonology", room: "Room 211", schedule: "Tue & Fri: 9AM-12NN" },
  { name: "Dominetta S. Gonzalo, MD", specialty: "Pulmonology", room: "Room 106", schedule: "Mon & Wed: 2PM-4PM & 9AM" },
  { name: "Deanne Quilala, MD", specialty: "Pulmonology", room: "Room 102", schedule: "Thu & Sat: 2PM-5PM" },
  { name: "Caridad Advincula, MD", specialty: "OB-Gyne", room: "Room 301", schedule: "Mon & Wed: 8AM-11AM" },
  { name: "Cheryl Cabebe, MD", specialty: "OB-Gyne", room: "Room 301", schedule: "Tue & Thu: 9AM-12NN" },
  { name: "Fides Paat, MD", specialty: "OB-Gyne", room: "Room 302", schedule: "Wed & Fri: 10AM-1PM" },
  { name: "Glenda Rabino, MD", specialty: "OB-Gyne", room: "Room 302", schedule: "Thu & Sat: 2PM-5PM" },
  { name: "Asela Pearl Llane Vera Cruz, MD", specialty: "OB-Gyne", room: "Room 303", schedule: "Mon & Thu: 1PM-4PM" },
  { name: "Gail Domecq Tanawit, MD", specialty: "Pathology", room: "Lab 2", schedule: "Mon-Fri: 8AM-12NN" },
  { name: "Jennifer Baccay, MD", specialty: "Pediatrics", room: "Room 401", schedule: "Tue & Fri: 9AM-12NN" },
  { name: "Ma. Elena Victoria C. Lahoz, MD", specialty: "Pediatrics", room: "Room 401", schedule: "Mon & Wed: 8AM-11AM" },
  { name: "Irwina Lazo, MD", specialty: "Pediatrics", room: "Room 402", schedule: "Tue & Thu: 10AM-1PM" },
  { name: "Jean Mahor, MD", specialty: "Pediatrics", room: "Room 402", schedule: "Wed & Fri: 2PM-5PM" },
  { name: "Teresita Martin, MD", specialty: "Pediatrics", room: "Room 403", schedule: "Mon & Thu: 1PM-4PM" },
  { name: "Aurea Dagdag Matias, MD", specialty: "Pediatrics", room: "Room 403", schedule: "Tue & Fri: 8AM-11AM" },
  { name: "Joan Tubon Galano, MD", specialty: "Pediatrics", room: "Room 404", schedule: "Wed & Sat: 9AM-12NN" },
  { name: "Marilyn Paz, MD", specialty: "Pediatrics", room: "Room 404", schedule: "Thu & Sat: 2PM-5PM" },
  { name: "Ma. Eloisa Lazaro-Salvador, MD", specialty: "Pediatrics", room: "Room 405", schedule: "Mon & Wed: 10AM-1PM" },
  { name: "Joan Roque Viado, MD", specialty: "Pediatrics", room: "Room 405", schedule: "Tue & Fri: 1PM-4PM" },
  { name: "Marilou Almoite, MD", specialty: "Radiology", room: "Radiology Dept", schedule: "Mon-Fri: 8AM-5PM" },
  { name: "Bernadette Fragante Bato, MD", specialty: "Radiology", room: "Radiology Dept", schedule: "Mon-Fri: 8AM-5PM" },
  { name: "Manuel Cajigal, MD", specialty: "General Surgery", room: "Room 101", schedule: "Tue & Fri: 9AM-12NN" },
  { name: "Peeble Narita Agdamag, MD", specialty: "Cardiology", room: "OPD Extension, Room 7", schedule: "Mon-Sat (Except Fri): 8AM-12NN" },
  { name: "Reynaldo P. Paz, MD", specialty: "General Surgery", room: "Room 101", schedule: "Mon & Wed: 8AM-11AM" },
  { name: "Vivencio R. Refuerzo, MD", specialty: "General Surgery", room: "Room 101", schedule: "Thu & Sat: 10AM-1PM" },
  { name: "Michael Martin Baccay, MD", specialty: "General Surgery", room: "Room 102", schedule: "Tue & Fri: 2PM-5PM" },
  { name: "Camelot C. Agdeppa, MD", specialty: "General Surgery", room: "Room 102", schedule: "Mon & Thu: 9AM-12NN" },
  { name: "Marsha Michelle Cabuena, MD", specialty: "Internal Medicine", room: "OPD Extension", schedule: "Wed,Fri & Sat: 8AM-10AM / 1PM-3PM" },
  { name: "Crispin Allan T. Viado, MD", specialty: "Neuro-Surgery", room: "Room 102", schedule: "Wed & Sat: 1PM & 10AM" },
  { name: "John Michael De Leon, MD", specialty: "Neuro-Surgery", room: "Room 109", schedule: "Tue & Thu: 10AM-1PM" },
  { name: "Leslie V. Rafanan, MD", specialty: "Urology", room: "Room 210", schedule: "Mon & Thu: 10AM-1PM" },
  { name: "Percival J Yang-Ed, MD", specialty: "Urology", room: "Room 210", schedule: "Tue & Fri: 2PM-5PM" },
  { name: "Johnson E. Zabat, MD", specialty: "Urology", room: "Room 210", schedule: "Wed & Sat: 9AM-12NN" },
  { name: "John Christopher Quadra, MD", specialty: "Pulmonology", room: "OPD Extension", schedule: "Wednesday: 2PM-4PM" },
  { name: "Dianne Millado-Riambon, MD", specialty: "Pediatrics", room: "Room 406", schedule: "Tue & Thu: 9AM-12NN" },
  { name: "Nijell Bangasan-Pizarro, MD", specialty: "Internal Medicine", room: "OPD Extension, Room 5", schedule: "Friday: 2PM-4PM" },
  { name: "Jonas Claro Cauton, MD", specialty: "Rehabilitation Medicine", room: "Rehab Room 2", schedule: "Tue & Fri: 10AM-1PM" },
  { name: "Stephen Ujano, MD", specialty: "Internal Medicine", room: "OPD Extension", schedule: "Thursday: 2PM-4PM" },
  { name: "Miko Galut, MD", specialty: "Urology", room: "Room 210", schedule: "Wed & Fri: 2PM-5PM" },
  { name: "Frances Obrero-Artajos, MD", specialty: "Endocrinology", room: "OPD Extension, Room 5", schedule: "Thursday: 10AM-12NN" },
  { name: "Margarita Cobangco, MD", specialty: "General Surgery", room: "Room 101", schedule: "Tue & Fri: 8AM-11AM" },
  { name: "Benjamin Tolentino III, MD", specialty: "General Surgery", room: "Room 102", schedule: "Wed & Fri: 1PM-4PM" },
  { name: "Jonah Lyn Toribio, MD", specialty: "General Surgery", room: "Room 101", schedule: "Thu & Sat: 2PM-5PM" },
  { name: "Xyrose Lex-Deo Andres, MD", specialty: "EENT", room: "Room 105", schedule: "Mon & Thu: 9AM-12NN" },
  { name: "Domingo Cuanang III, MD", specialty: "Oncology", room: "Room 106", schedule: "Wed & Fri: 8AM-11AM" },
  { name: "Marvin Riambon, MD", specialty: "Cardiology", room: "Room 106", schedule: "Tue & Fri: 9AM-12NN" }
];


//https://placehold.net/avatar.png


// ========================
// Image Handling
// ========================
const imageFolder = "src/img/doctors/"; // relative path to images

// Extract first name from full name
function getFirstName(fullName) {
  return fullName
    .trim()
    .split(" ")[0]        // take the first word
    .replace(/[^a-zA-Z]/g, "") // remove punctuation
    .toLowerCase();
}

// Check if image exists
function checkImageExists(url) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = url;
  });
}

// Assign images to doctors
async function assignDoctorImages() {
  for (let doc of doctorsList) {
    const firstName = getFirstName(doc.name);
    const imagePath = `${imageFolder}dr_${firstName}.avif`; // Match your naming pattern
    const exists = await checkImageExists(imagePath);
    doc.image = exists ? imagePath : "https://placehold.net/avatar.png";
  }

  doctors = doctorsList.map(doc => ({ ...doc }));
  currentList = doctors;
  initPage();
}

// ========================
// Page Logic
// ========================
let doctors = [];
let currentList = [];

function initPage() {
  const grid = document.getElementById("doctorsGrid");
  const specialtyFilter = document.getElementById("specialtyFilter");
  const searchBox = document.getElementById("searchBox");
  const modal = document.getElementById("doctorModal");
  const modalName = document.getElementById("modalName");
  const modalSpecialty = document.getElementById("modalSpecialty");
  const modalRoom = document.getElementById("modalRoom");
  const modalSchedule = document.getElementById("modalSchedule");
  const modalImage = document.getElementById("modalImage");
  const loadMoreBtn = document.getElementById("loadMore");

  // Populate Specialty Filter
  const specialties = [...new Set(doctors.map(d => d.specialty))];
  specialties.forEach(s => {
    const opt = document.createElement("option");
    opt.value = s;
    opt.textContent = s;
    specialtyFilter.appendChild(opt);
  });

  // Pagination
  let displayedCount = 0;
  const increment = 20;

  function renderDoctors(list, reset = false) {
    if (reset) {
      grid.innerHTML = "";
      displayedCount = 0;
    }
    const slice = list.slice(displayedCount, displayedCount + increment);
    slice.forEach(doc => {
      const card = document.createElement("div");
      card.className = "bg-white p-4 rounded-lg shadow hover:shadow-lg cursor-pointer text-center";
      card.innerHTML = `
        <img src="${doc.image}" class="w-28 h-28 mx-auto rounded-full mb-3 object-cover">
        <h3 class="text-lg font-semibold">${doc.name}</h3>
        <p class="text-green-600">${doc.specialty}</p>
        <p class="text-sm text-gray-500 mt-2">${doc.room}</p>
      `;
      card.onclick = () => showModal(doc);
      grid.appendChild(card);
    });
    displayedCount += increment;
    loadMoreBtn.classList.toggle("hidden", displayedCount >= list.length);
  }

  function showModal(doc) {
    modalName.textContent = doc.name;
    modalSpecialty.textContent = doc.specialty;
    modalRoom.textContent = "Room: " + doc.room;
    modalSchedule.textContent = "Schedule: " + doc.schedule;
    modalImage.src = doc.image;
    modal.classList.remove("hidden");
  }

  document.getElementById("closeModal").onclick = () => modal.classList.add("hidden");

  function filterDoctors() {
    const search = searchBox.value.toLowerCase();
    const specialty = specialtyFilter.value;

    const filtered = doctors.filter(doc =>
      (specialty === "all" || doc.specialty === specialty) &&
      (doc.name.toLowerCase().includes(search) ||
       doc.specialty.toLowerCase().includes(search) ||
       doc.room.toLowerCase().includes(search))
    );

    currentList = filtered;
    renderDoctors(filtered, true);
  }

  searchBox.addEventListener("input", filterDoctors);
  specialtyFilter.addEventListener("change", filterDoctors);
  loadMoreBtn.addEventListener("click", () => renderDoctors(currentList));

  renderDoctors(doctors);
}

// ========================
// Start
// ========================
assignDoctorImages();