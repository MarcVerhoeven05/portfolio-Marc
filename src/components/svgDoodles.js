// Hand-drawn fineliner SVG icons & doodles matching Design System & Wireframes

export const starDoodle = (size = 32, className = "") => `
  <svg class="doodle star-doodle ${className}" width="${size}" height="${size}" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 4V36M4 20H36M8 8L32 32M32 8L8 32" stroke="#181819" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`;

export const scribbleDoodle = (width = 60, height = 30, className = "") => `
  <svg class="doodle scribble-doodle ${className}" width="${width}" height="${height}" viewBox="0 0 80 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 25C15 5 25 35 35 12C45 38 55 8 65 28C70 18 75 22 78 20" stroke="#181819" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`;

export const arrowDoodle = (direction = "down-right", width = 50, height = 40, className = "") => {
  let pathD = "M5 10Q25 5 40 30M28 28L40 30L38 18";
  if (direction === "up-right") {
    pathD = "M5 32Q20 30 38 10M25 10L38 10L38 23";
  } else if (direction === "left") {
    pathD = "M42 20Q20 18 8 20M18 10L8 20L18 30";
  } else if (direction === "down-left") {
    pathD = "M38 8Q20 10 10 32M12 20L10 32L24 30";
  }

  return `
    <svg class="doodle arrow-doodle ${className}" width="${width}" height="${height}" viewBox="0 0 50 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="${pathD}" stroke="#181819" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `;
};

export const dotGridDoodle = (className = "") => `
  <svg class="doodle dot-grid ${className}" width="50" height="60" viewBox="0 0 50 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="10" cy="10" r="2.5" fill="#181819"/>
    <circle cx="25" cy="12" r="2" fill="#181819"/>
    <circle cx="40" cy="8" r="2.8" fill="#181819"/>
    <circle cx="15" cy="28" r="2.2" fill="#181819"/>
    <circle cx="30" cy="30" r="3" fill="#181819"/>
    <circle cx="42" cy="26" r="2" fill="#181819"/>
    <circle cx="12" cy="48" r="2.8" fill="#181819"/>
    <circle cx="28" cy="50" r="2" fill="#181819"/>
    <circle cx="44" cy="46" r="2.5" fill="#181819"/>
  </svg>
`;

export const sparkTicksDoodle = (className = "") => `
  <svg class="doodle spark-ticks ${className}" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 24L12 8M16 26L22 10" stroke="#181819" stroke-width="3" stroke-linecap="round"/>
  </svg>
`;

export const crownDoodle = (className = "") => `
  <svg class="doodle crown-doodle ${className}" width="40" height="32" viewBox="0 0 40 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 26L2 10L12 16L20 4L28 16L38 10L36 26H4Z" stroke="#181819" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`;

export const organicOvalSVG = (className = "") => `
  <svg class="oval-svg ${className}" viewBox="0 0 160 160" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 80 C 15 25, 135 15, 145 80 C 155 140, 25 145, 20 80 Z" stroke="#181819" stroke-width="3.8" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`;

export const socialInstagramIcon = () => `
  <svg viewBox="0 0 32 32">
    <rect x="4" y="4" width="24" height="24" rx="7" />
    <circle cx="16" cy="16" r="6" />
    <circle cx="23" cy="9" r="1.5" fill="#181819" />
  </svg>
`;

export const socialXIcon = () => `
  <svg viewBox="0 0 32 32">
    <path d="M6 6L26 26M26 6L6 26" />
  </svg>
`;

export const socialMailIcon = () => `
  <svg viewBox="0 0 32 32">
    <rect x="4" y="6" width="24" height="20" rx="3" />
    <path d="M4 8L16 18L28 8" />
  </svg>
`;

export const socialSnapchatIcon = () => `
  <svg viewBox="0 0 32 32">
    <path d="M16 4C10.5 4 7 8 7 12C7 14.5 8 16 9 17C8.5 17.5 7 18 5 18C4.5 18 4 18.5 4 19C4 19.5 4.5 20.5 6 21C8 21.5 10 21 11.5 20.5C12 22 13.5 24 16 24C18.5 24 20 22 20.5 20.5C22 21 24 21.5 26 21C27.5 20.5 28 19.5 28 19C28 18.5 27.5 18 27 18C25 18 23.5 17.5 23 17C24 16 25 14.5 25 12C25 8 21.5 4 16 4Z" />
  </svg>
`;

export const socialPhoneIcon = () => `
  <svg viewBox="0 0 32 32">
    <path d="M6 4H10L12.5 10L9.5 12.5C11 16 15 20 18.5 21.5L21 18.5L27 21V25C27 26.5 25.5 28 24 28C13 28 4 19 4 8C4 6.5 5.5 5 6 4Z" />
  </svg>
`;

