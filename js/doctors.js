// Full doctors list (Manual room and schedule fields added)
const doctorsList = [
      
  //NEWLY UPDATED DOCTORS LIST
  { name: "Frances Elaine F. Abelañes", specialty: "Anesthesiology", hmo: [], room: "", schedule: "" },
  { name: "Anacleto F. Advincula", specialty: "Anesthesiology", hmo: [], room: "", schedule: "" },
  { name: "Ma. Katrina T. Balan", specialty: "Anesthesiology", hmo: [], room: "", schedule: "" },
  { name: "Estefanie C. Cabebe", specialty: "Anesthesiology", hmo: [], room: "Room 102", schedule: "Tue & Thu: 9AM-12NN" },
  { name: "Mylene Fatima S. Cobangbang", specialty: "Anesthesiology", hmo: [], room: "", schedule: "" },
  { name: "Leonor Isabel C. Dy", specialty: "Anesthesiology", hmo: [], room: "", schedule: "" },
  { name: "Melvin Troy L. Ordoñez", specialty: "Anesthesiology", hmo: [], room: "", schedule: "" },
  { name: "Herminia M. Pascua", specialty: "Anesthesiology", hmo: [], room: "", schedule: "" },
  { name: "Nella F. Plete", specialty: "Anesthesiology", hmo: [], room: "", schedule: "" },
  { name: "Constante M. Rabe II", specialty: "Anesthesiology", hmo: [], room: "", schedule: "" },
  { name: "Emmanuel R. Reyes", specialty: "Anesthesiology", hmo: [], room: "", schedule: "" },
  { name: "Albert G. Rondal", specialty: "Anesthesiology", hmo: [], room: "", schedule: "" },
  { name: "Mauritus T. De Vera", specialty: "Dentistry", hmo: [], room: "", schedule: "" },
  { name: "Fatima F. Malcaba", specialty: "Dentistry", hmo: [], room: "", schedule: "" },
  { name: "Lymuel R. Pascua", specialty: "Dentistry", hmo: [], room: "", schedule: "" },
  { name: "Mirella I. Rosuman", specialty: "Dentistry", hmo: [], room: "", schedule: "" },
  { name: "Paula Cynthia R. Valencia", specialty: "Dentistry", hmo: [], room: "", schedule: "" },
  { name: "Sean V. Vera Cruz", specialty: "Dentistry", hmo: [], room: "", schedule: "" },
  { name: "Romen A. Almazar", specialty: "ENT", hmo: [], room: "", schedule: "" },
  { name: "Irlan C. Altura", specialty: "Otorhinolaryngology- Head and Neck", hmo: [], room: "", schedule: "" },
  { name: "Xyrose Lex-Deo P. Andres", specialty: "Ear, Nose, Throat - Head & Neck Surgery", hmo: [], room: "", schedule: "" },
  { name: "Jesson Deo G. Cabrera", specialty: "ENT", hmo: [], room: "", schedule: "" },
  { name: "Gerson S. Contreras", specialty: "Otorhinolaryngology-Head and Neck Surgery, Craniomaxillofacial trauma and plastic surgery", hmo: [], room: "", schedule: "" },
  { name: "Aivan Maury A. De Vera", specialty: "Otorhinolaryngology-Head and Neck Surgery", hmo: [], room: "", schedule: "" },
  { name: "Nicanor B. Lacuesta", specialty: "ENT", hmo: [], room: "", schedule: "" },
  { name: "Pedro R. Patao", specialty: "ENT", hmo: [], room: "", schedule: "" },
  { name: "Danilo A. Sanchez", specialty: "ENT", hmo: [], room: "", schedule: "" },
  { name: "Camille Q. Tolentino", specialty: "ENT", hmo: [], room: "", schedule: "" },
  { name: "Peeble Narita G. Agdamag", specialty: "Cardiology", hmo: [], room: "", schedule: "" },
  { name: "Georgina D. Andal", specialty: "Dermatology", hmo: [], room: "", schedule: "" },
  { name: "Abigaille Ann C. Antonio", specialty: "Pulmonology", hmo: [], room: "", schedule: "" },
  { name: "Steve S. Arellano", specialty: "Neurology", hmo: [], room: "", schedule: "" },
  { name: "Godard E. Artajos", specialty: "Neurology", hmo: [], room: "", schedule: "" },
  { name: "Abraham Auberon B. Austria", specialty: "Pulmonology", hmo: [], room: "", schedule: "" },
  { name: "Nijell Bangasan-Pizarro", specialty: "Internal Medicine", hmo: [], room: "OPD Extension", schedule: "Fri: 2PM-4PM" },
  { name: "Vida Margarette A. Bueno", specialty: "Neurology", hmo: [], room: "", schedule: "" },
  { name: "Maria Chrisma Rodessa B. Burgos", specialty: "Child and Adolescent Psychiatry", hmo: [], room: "", schedule: "" },
  { name: "Max Geronimo T. Butardo", specialty: "Cardiology", hmo: [], room: "", schedule: "" },
  { name: "Carie R. Cabinian", specialty: "Nephrology", hmo: [], room: "", schedule: "" },
  { name: "Marsha Michelle L. Cabuena", specialty: "Internal Medicine", hmo: [], room: "", schedule: "" },
  { name: "Jean Abigaile C. Caringal", specialty: "Endocrinology", hmo: [], room: "", schedule: "" },
  { name: "Criselda M. Ciubal", specialty: "Infectious Disease Specialty", hmo: [], room: "", schedule: "" },
  { name: "Ofelia D. Datu", specialty: "Nephrology", hmo: [], room: "", schedule: "" },
  { name: "Michelleen C. Del Rosario", specialty: "Pulmonology", hmo: [], room: "", schedule: "" },
  { name: "Jelna Shane L. Feri", specialty: "Gastroenterology", hmo: [], room: "", schedule: "" },
  { name: "Marie Liz B. Fortuna", specialty: "Allergology, Astha and Immunology", hmo: [], room: "", schedule: "" },
  { name: "Marjorie Antonette C. Fragante", specialty: "Gastroenterology", hmo: [], room: "", schedule: "" },
  { name: "Melani T. Gallero", specialty: "Nephrology", hmo: [], room: "", schedule: "" },
  { name: "Dominetta S. Gonzalo", specialty: "Pulmonology", hmo: [], room: "", schedule: "" },
  { name: "Mercy Grace G. Kindipan", specialty: "Oncology", hmo: [], room: "", schedule: "" },
  { name: "Maria Blanca O. Kua", specialty: "Gastroenterology", hmo: [], room: "", schedule: "" },
  { name: "Gerardo R. Lahoz", specialty: "Family Medicine", hmo: [], room: "", schedule: "" },
  { name: "Gloria R. Lahoz", specialty: "Cardiology", hmo: [], room: "", schedule: "" },
  { name: "Jeanne Zherluck Z. Lapira", specialty: "Nephrology", hmo: [], room: "", schedule: "" },
  { name: "Robert Q. Lim", specialty: "Cardiology", hmo: [], room: "", schedule: "" },
  { name: "Oliver Nicolas P. Mabanag", specialty: "Nephrology", hmo: [], room: "", schedule: "" },
  { name: "Joel Malixi", specialty: "Dermatology", hmo: [], room: "", schedule: "" },
  { name: "Kristal F. Mendoza", specialty: "Clinical Nutrition", hmo: [], room: "", schedule: "" },
  { name: "Amor Rhea Q. Narag", specialty: "Nephrology", hmo: [], room: "", schedule: "" },
  { name: "Rainick Brenhizar T. Navarro", specialty: "Neurology", hmo: [], room: "", schedule: "" },
  { name: "Frances Monina M. Obrero-Artajos", specialty: "Endocrinology, Diabetes and Metabolism", hmo: [], room: "OPD Extension, Room 5", schedule: "Thu: 10AM-12NN" },
  { name: "Elton Ong", specialty: "Neurology", hmo: [], room: "", schedule: "" },
  { name: "Isabella R. Panelo", specialty: "Internal Medicine", hmo: [], room: "", schedule: "" },
  { name: "Donaryn V. Pasamonte", specialty: "Hematology", hmo: [], room: "", schedule: "" },
  { name: "Ma. Eileen O. Pascua", specialty: "Gastroenterology", hmo: [], room: "", schedule: "" },
  { name: "Eugene R. Pipo III", specialty: "Dermatology", hmo: [], room: "", schedule: "" },
  { name: "Lorenza Evangelina R. Pipo", specialty: "Endocrinology", hmo: [], room: "", schedule: "" },
  { name: "John Christopher Q. Quadra", specialty: "Pulmonary", hmo: [], room: "OPD Extension", schedule: "Wed: 2PM-4PM" },
  { name: "Deanne D. Quilala", specialty: "Pulmonology", hmo: [], room: "", schedule: "" },
  { name: "Charles Hubert R. Rabara", specialty: "Family Medicine", hmo: [], room: "", schedule: "" },
  { name: "Elyzel C. Rabara", specialty: "Nephrology", hmo: [], room: "", schedule: "" },
  { name: "Marvin M. Riambon", specialty: "Adult Cardiology", hmo: [], room: "Room 106", schedule: "Tue & Fri: 9AM-12NN" },
  { name: "Maria Fatima B. Sabaten", specialty: "Gastroenterology", hmo: [], room: "", schedule: "" },
  { name: "Marie Joyce U. Santos", specialty: "Infectious Disease Specialty", hmo: [], room: "", schedule: "" },
  { name: "Glenda O. Tagorda", specialty: "Internal Medicine", hmo: [], room: "", schedule: "" },
  { name: "Joy M. Tolentino", specialty: "Internal Medicine", hmo: [], room: "", schedule: "" },
  { name: "Arnolfo B. Tomas Jr.", specialty: "Adult Cardiology", hmo: [], room: "", schedule: "" },
  { name: "Stephen A. Ujano", specialty: "Internal Medicine", hmo: [], room: "", schedule: "" },
  { name: "Annalyn Q. Urbano", specialty: "Rheumatology", hmo: [], room: "", schedule: "" },
  { name: "Jeremiah R. Vallente", specialty: "Hematology", hmo: [], room: "", schedule: "" },
  { name: "Luz Gregoria L. Velasco", specialty: "Internal Medicine", hmo: [], room: "", schedule: "" },
  { name: "Leslie R. Viado", specialty: "Cardiology/Vascular", hmo: [], room: "", schedule: "" },
  { name: "Johann D. Yee", specialty: "Psychiatry", hmo: [], room: "", schedule: "" },
  { name: "Roland L. Zara", specialty: "Infectious Disease Specialty", hmo: [], room: "", schedule: "" },
  { name: "Ma. Margaret S. Acebedo-Licnachan", specialty: "OB-GYNE", hmo: [], room: "", schedule: "" },
  { name: "Caridad G. Advincula", specialty: "OB-GYNE", hmo: [], room: "", schedule: "" },
  { name: "Emma Ruth P. Aquitania", specialty: "OB-GYNE", hmo: [], room: "", schedule: "" },
  { name: "Jay Ian R. Argel", specialty: "OB-GYNE", hmo: [], room: "", schedule: "" },
  { name: "Czarina C. Artienda", specialty: "OB-GYNE", hmo: [], room: "", schedule: "" },
  { name: "Lovely Anne C. Bantugon", specialty: "OB-GYNE", hmo: [], room: "", schedule: "" },
  { name: "Lilybeth A. Bautista", specialty: "OB-GYNE", hmo: [], room: "", schedule: "" },
  { name: "Cheryl A. Cabebe", specialty: "OB-GYNE", hmo: [], room: "", schedule: "" },
  { name: "Mae Ramos Cadacio", specialty: "OB-GYNE", hmo: [], room: "", schedule: "" },
  { name: "Shara Antonette Z. Cañero", specialty: "OB-GYNE", hmo: [], room: "", schedule: "" },
  { name: "Marifel Gertrude A. Cortez", specialty: "OB-GYNE Ultrasound", hmo: [], room: "", schedule: "" },
  { name: "Ruth Judith Gay V. Cristobal", specialty: "OB-GYNE-ONCOLOGY", hmo: [], room: "", schedule: "" },
  { name: "Evangeline A. De Vera", specialty: "OB-GYNE", hmo: [], room: "", schedule: "" },
  { name: "Humbeline R. Galut", specialty: "OB-GYNE", hmo: [], room: "", schedule: "" },
  { name: "Florely Joy E. Gregorio", specialty: "OB-GYNE", hmo: [], room: "", schedule: "" },
  { name: "Rachel D. Jalog", specialty: "OB-GYNE", hmo: [], room: "", schedule: "" },
  { name: "Ryan Joseph B. Lirazan", specialty: "OB-GYNE", hmo: [], room: "", schedule: "" },
  { name: "Jenelyn S. Mendoza", specialty: "OB-GYNE", hmo: [], room: "", schedule: "" },
  { name: "Joyce Lizzette M. Montemayor", specialty: "OB-GYNE", hmo: [], room: "", schedule: "" },
  { name: "Kristel Paulane Fleur L. Oandasan", specialty: "OB-GYNE", hmo: [], room: "", schedule: "" },
  { name: "Jennifer T. Ordoñez", specialty: "OB-GYNE", hmo: [], room: "", schedule: "" },
  { name: "Fides A. Paat", specialty: "OB-GYNE", hmo: [], room: "", schedule: "" },
  { name: "Glenda P. Rabino", specialty: "OB-GYNE", hmo: [], room: "", schedule: "" },
  { name: "Maria Katherine A. Ranches", specialty: "OB-GYNE", hmo: [], room: "", schedule: "" },
  { name: "Lerida G. Rosario", specialty: "OB-GYNE", hmo: [], room: "", schedule: "" },
  { name: "Alda Gene P. Tremor", specialty: "OB-GYNE- Perinatology", hmo: [], room: "", schedule: "" },
  { name: "Antonio G. Uclusin", specialty: "OB-GYNE", hmo: [], room: "", schedule: "" },
  { name: "Asela Pearl Llane V. Vera Cruz", specialty: "OB-GYNE", hmo: [], room: "", schedule: "" },
  { name: "Frances B. Vera Cruz", specialty: "OB-GYNE", hmo: [], room: "", schedule: "" },
  { name: "Domingo Agustin Cuanang III", specialty: "Radiaton Oncologist", hmo: [], room: "", schedule: "" },
  { name: "Gretchen G. Agdamag-Calderon", specialty: "Ophthalmology", hmo: [], room: "", schedule: "" },
  { name: "Simeon Emmanuel J. Aquino II", specialty: "Ophthalmology", hmo: [], room: "", schedule: "" },
  { name: "Karen R. Cabrera", specialty: "Ophthalmology", hmo: [], room: "", schedule: "" },
  { name: "Marc Frederick Q. Panganiban", specialty: "Ophthalmology", hmo: [], room: "", schedule: "" },
  { name: "Jennifer Joy S. Rayos", specialty: "Ophthalmology", hmo: [], room: "", schedule: "" },
  { name: "Victoria Anne Y. Rosario", specialty: "Ophthalmology", hmo: [], room: "", schedule: "" },
  { name: "Sofia Cecilia S. Sipin", specialty: "Ophthalmology", hmo: [], room: "", schedule: "" },
  { name: "Donald C. Subia", specialty: "Ophthalmology", hmo: [], room: "", schedule: "" },
  { name: "Rolando N. Vermudez", specialty: "Ophthalmology", hmo: [], room: "", schedule: "" },
  { name: "Zeus Lord Angel M. Alcaraz", specialty: "Anatomic and Clinical Pathology", hmo: [], room: "", schedule: "" },
  { name: "Teresa Gail R. Galut", specialty: "Pathology", hmo: [], room: "", schedule: "" },
  { name: "Genie Claire P. Mercado-Refuerzo", specialty: "Clinical Pathology", hmo: [], room: "", schedule: "" },
  { name: "Sheryl Q. Racelis", specialty: "Pathology", hmo: [], room: "", schedule: "" },
  { name: "Brenda I. Rosuman", specialty: "Pathology", hmo: [], room: "", schedule: "" },
  { name: "Gail D. Tanawit", specialty: "Pathology", hmo: [], room: "", schedule: "" },
  { name: "Ailyn I. Agdeppa", specialty: "Pediatrics", hmo: [], room: "", schedule: "" },
  { name: "Maria L. Arquillo", specialty: "Pediatric Pulmonology", hmo: [], room: "", schedule: "" },
  { name: "Jennifer C. Baccay", specialty: "Pediatrics", hmo: [], room: "", schedule: "" },
  { name: "Rochelle B. Carta", specialty: "Pediatrics", hmo: [], room: "", schedule: "" },
  { name: "Judy P. Deveza", specialty: "Pediatrics -Neurology", hmo: [], room: "", schedule: "" },
  { name: "Joan T. Galano", specialty: "Pediatrics - Hematology", hmo: [], room: "", schedule: "" },
  { name: "Maura Gonzales", specialty: "Pediatrics", hmo: [], room: "", schedule: "" },
  { name: "Irwina M. Lazo", specialty: "Pediatrics", hmo: [], room: "", schedule: "" },
  { name: "Jean T. Mahor", specialty: "Pediatrics", hmo: [], room: "", schedule: "" },
  { name: "Ria Rose Ann G. Manantan", specialty: "Pediatrics", hmo: [], room: "", schedule: "" },
  { name: "Teresita R. Martin", specialty: "Pediatrics", hmo: [], room: "", schedule: "" },
  { name: "Aurea Alicia D. Matias", specialty: "Pediatrics-Neonatology", hmo: [], room: "", schedule: "" },
  { name: "Dianne Alexis C. Millado-Riambon", specialty: "Pediatric Pulmonary & Critical Care Medicine and Pediatric Pulmonary Rehabilitation", hmo: [], room: "OPD Extension, Room 5", schedule: "Tue: 10AM-12NN" },
  { name: "Honely Q. Mores", specialty: "Pediatrics", hmo: [], room: "", schedule: "" },
  { name: "Djimbo Alexis F. Oandasan", specialty: "Pediatrics", hmo: [], room: "", schedule: "" },
  { name: "Imelda R. Pablico", specialty: "Pediatrics", hmo: [], room: "", schedule: "" },
  { name: "Marilyn Santa Maria Paz", specialty: "Pediatrics", hmo: [], room: "", schedule: "" },
  { name: "Melissa Donata A. Ragasa", specialty: "Pediatrics", hmo: [], room: "", schedule: "" },
  { name: "Beatriz M. Reyes", specialty: "Pediatrics", hmo: [], room: "", schedule: "" },
  { name: "Angeli Romerosa- Fernando", specialty: "Pedriatics", hmo: [], room: "", schedule: "" },
  { name: "Ma. Eloisa L. Salvador", specialty: "Pediatrics-Cardiology", hmo: [], room: "", schedule: "" },
  { name: "Joan R. Viado", specialty: "Pediatrics-Neurology", hmo: [], room: "", schedule: "" },
  { name: "Isaias P. Alipio", specialty: "Rehabilitation Medicine", hmo: [], room: "", schedule: "" },
  { name: "Jonas Claro A. Cauton", specialty: "Physical & Rehabilitation Med", hmo: [], room: "4th Flr, Room 407", schedule: "Wed: 1PM-4PM" },
  { name: "John Michael T. Mendoza", specialty: "Rehabilitation Medicine", hmo: [], room: "", schedule: "" },
  { name: "Ben Paolo C. Rabara", specialty: "Rehabilitation Medicine", hmo: [], room: "", schedule: "" },
  { name: "Marilou A. Almoite", specialty: "Radiologist", hmo: [], room: "", schedule: "" },
  { name: "Bernadette F. Bato", specialty: "Radiology", hmo: [], room: "", schedule: "" },
  { name: "Ivan Lemuel M. De Grano", specialty: "Radiologist", hmo: [], room: "", schedule: "" },
  { name: "Marc Dominic G. Rosario", specialty: "Radiology", hmo: [], room: "", schedule: "" },
  { name: "Hannah Regina V. Tabali", specialty: "Radiology", hmo: [], room: "", schedule: "" },
  { name: "Anthony R. Vera Cruz", specialty: "Radiologist", hmo: [], room: "", schedule: "" },
  { name: "Camelot C. Agdeppa", specialty: "Surgery -Hepatobiliary and Pancreatic", hmo: [], room: "", schedule: "" },
  { name: "Vivien Marie P. Abitong-Bolislish", specialty: "General Surgery", hmo: [], room: "", schedule: "" },
  { name: "Conrado M. Andal", specialty: "Surgery", hmo: [], room: "", schedule: "" },
  { name: "Michael Martin C. Baccay", specialty: "Surgery - Thoracic and Cardiovascular", hmo: [], room: "", schedule: "" },
  { name: "Jobelle Joyce Anne R. Baldonado", specialty: "Surgery - Thoracic and Cardiovascular", hmo: [], room: "", schedule: "" },
  { name: "Modesto David A. Bolislis", specialty: "Surgery-Orthopedic", hmo: [], room: "", schedule: "" },
  { name: "Laurence Owen R. Bundal", specialty: "Surgery", hmo: [], room: "", schedule: "" },
  { name: "Manuel D. Cajigal", specialty: "Surgery", hmo: [], room: "", schedule: "" },
  { name: "Claro G. Cauton", specialty: "Surgery -Orthopedic", hmo: [], room: "", schedule: "" },
  { name: "Margarita Jai B. Cobangco", specialty: "Surgery", hmo: [], room: "OPD Extension, Room 5", schedule: "Wed: 2PM-4PM" },
  { name: "Ana Patricia V. De Grano", specialty: "Surgery -Plastic", hmo: [], room: "", schedule: "" },
  { name: "John Clemente A. De Leon", specialty: "Surgery-Neuro", hmo: [], room: "", schedule: "" },
  { name: "Marcelino D. De Peralta", specialty: "Surgery -Orthopedic", hmo: [], room: "", schedule: "" },
  { name: "Maureen Elvira V. Dumlao", specialty: "Surgery", hmo: [], room: "", schedule: "" },
  { name: "Christian Dale R. Feri", specialty: "Surgery -Urology", hmo: [], room: "", schedule: "" },
  { name: "Miguel Carlo R. Galut", specialty: "Urology", hmo: [], room: "Ground Flr, Room 106", schedule: "Tue: 1PM-3PM & Wed: 10AM-12NN" },
  { name: "Susan F. Labuntong", specialty: "Surgery-Vascular", hmo: [], room: "", schedule: "" },
  { name: "Esperanza R. Lahoz", specialty: "Surgery", hmo: [], room: "", schedule: "" },
  { name: "Reynaldo P. Paz", specialty: "Surgery", hmo: [], room: "", schedule: "" },
  { name: "Leslie V. Rafanan", specialty: "Surgery -Urology", hmo: [], room: "", schedule: "" },
  { name: "Digna R. Ragasa", specialty: "Surgery", hmo: ["KAISER"], room: "Room 106", schedule: "Mon-Sat: 8AM-12NN" },
  { name: "Vivencio R. Refuerzo", specialty: "Surgery-Colorectal", hmo: [], room: "", schedule: "" },
  { name: "Marjorie B. Sierra", specialty: "Orthopedic-Oncology", hmo: [], room: "", schedule: "" },
  { name: "Ernesto R. Tagorda Jr.", specialty: "Surgery", hmo: [], room: "", schedule: "" },
  { name: "Benjamin III Q. Tolentino", specialty: "Surgery", hmo: [], room: "", schedule: "" },
  { name: "Jonah Lyn P. Toribio", specialty: "Surgery", hmo: [], room: "", schedule: "" },
  { name: "Porfirio Tugas", specialty: "Surgery", hmo: [], room: "", schedule: "" },
  { name: "Ria Jane U. Uclaray", specialty: "Surgery/Pediatrics", hmo: [], room: "", schedule: "" },
  { name: "Crispin Allan T. Viado", specialty: "Surgery -Neuro", hmo: [], room: "", schedule: "" },
  { name: "Johnson E. Zabat", specialty: "Surgery -Urology", hmo: [], room: "", schedule: "" },
  { name: "Mila P. Guerrero", specialty: "", hmo: [], room: "", schedule: "" },
  { name: "Faustino L. Unabia Jr.", specialty: "", hmo: [], room: "", schedule: "" },

];


//https://placehold.net/avatar.png


// ========================
// Image Handling
// ========================
const imageFolder = "img/doctors/"; // relative path to images

// Extract first and last name (supports multi-word last names)
function getFirstAndLastName(fullName) {
  const parts = fullName.trim().split(/\s+/);
  const firstName = parts[0]
    .replace(/[^a-zA-Z]/g, "")
    .toLowerCase();

  // Last name is everything after the last initial (detect suffix after middle name/initial)
  const lastNameParts = parts.slice( parts.findIndex(p => p.includes(".")) + 1 );
  
  // Fallback: if no middle initial found, take last word(s)
  const lastName = (lastNameParts.length ? lastNameParts : parts.slice(-1))
    .join("-") // join with dash
    .replace(/[^a-zA-Z-]/g, "") // keep letters & dashes only
    .toLowerCase();

  return `${firstName}_${lastName}`;
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
    const nameKey = getFirstAndLastName(doc.name);
    const imagePath = `${imageFolder}dr_${nameKey}.avif`; // Match naming pattern
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
  const modalHmo = document.getElementById("modalHmo");
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
        <h3 class="text-lg font-semibold">Dr. ${doc.name}</h3>
        <p class="text-green-600">${doc.specialty}</p>
        <p class="text-sm text-gray-500 mt-2">${doc.room}</p>
      `;
      card.onclick = () => showModal(doc);
      grid.appendChild(card);
    });
    displayedCount += increment;
    loadMoreBtn.classList.toggle("hidden", displayedCount >= list.length);
  }

function safeText(value) {
    if (!value) return "N/A";
    const trimmed = value.trim();
    if (trimmed === "" || trimmed === "-" || trimmed.toUpperCase() === "TBA") {
        return "N/A";
    }
    return trimmed;
}

function setModalField(element, label, value) {
    const safeValue = safeText(value);

    // Clear the element before adding content
    element.textContent = "";

    // Add the label (normal style)
    if (label) {
        const labelSpan = document.createElement("span");
        labelSpan.textContent = label + " ";
        element.appendChild(labelSpan);
    }

    // Add the value (special style if N/A)
    const valueSpan = document.createElement("span");
    valueSpan.textContent = safeValue;

    if (safeValue === "N/A") {
        valueSpan.style.color = "#888";       // gray
        valueSpan.style.fontStyle = "italic"; // italic
    }

    element.appendChild(valueSpan);
}

function showModal(doc) {
    setModalField(modalName, "Dr.", doc.name);
    setModalField(modalSpecialty, "", doc.specialty);
    setModalField(modalRoom, "Clinic:", doc.room);
    setModalField(modalSchedule, "Schedule:", doc.schedule);
    setModalField(modalHmo, "HMO Accreditation:", doc.hmo && doc.hmo.length ? doc.hmo.join(", ") : "");
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