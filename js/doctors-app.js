// doctors-app.js
import { doctorsList } from './doctors-data.js';


document.addEventListener("DOMContentLoaded", function() {
  const doctorsSection = document.getElementById("doctors-section");
  doctorsSection.style.opacity = "1"; // show immediately

  // Then start loading data
  renderDoctors(doctorsList);
});

function renderDoctors(list) {
  const container = document.getElementById("doctors-list");
  let html = "";
  list.forEach(doc => {
    html += `<div class="doctor-card">${doc.name}</div>`;
  });
  container.innerHTML = html;
}

const doctorsGrid = document.getElementById("doctorsGrid");

  function createDoctorCard(doctor) {
    const card = document.createElement("div");
    card.className = "bg-white shadow rounded-lg p-4 cursor-pointer hover:shadow-lg transition";
    card.innerHTML = `
      <img src="${doctor.image}" alt="${doctor.name}" class="w-full h-48 object-cover rounded-md">
      <h3 class="mt-2 font-semibold">${doctor.name}</h3>
      <p class="text-green-600">${doctor.specialty}</p>
    `;
    card.addEventListener("click", () => openModal(doctor));
    return card;
  }

  function renderDoctorsIncrementally(list) {
    list.forEach((doctor, i) => {
      // Append one at a time so browser paints them immediately
      setTimeout(() => {
        doctorsGrid.appendChild(createDoctorCard(doctor));
      }, i * 0); // change 0 to e.g., 50 for a staggered animation
    });
  }

   
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
    doc.image = exists ? imagePath : "img/doctors/avatar.avif";
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