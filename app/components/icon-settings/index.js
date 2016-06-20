'use strict';

var svg = `
<svg width="100px" height="100px" viewBox="769 227 34 34" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs></defs>
    <g id="Group-16" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" transform="translate(770.000000, 228.000000)">
        <path d="M17.233,21.838 C17.817,21.255 18.11,20.481 18.109,19.717 C18.11,18.954 17.817,18.18 17.233,17.596 L14.404,14.767 C13.821,14.183 13.046,13.89 12.283,13.891 C11.519,13.89 10.745,14.183 10.161,14.768 C9.771,15.158 9.771,15.791 10.162,16.182 C10.552,16.572 11.186,16.572 11.576,16.181 C11.77,15.988 12.021,15.892 12.283,15.891 C12.545,15.892 12.796,15.988 12.99,16.182 L15.819,19.01 C16.012,19.204 16.108,19.455 16.109,19.717 C16.108,19.979 16.012,20.23 15.818,20.424 C15.428,20.815 15.428,21.448 15.819,21.839 C16.209,22.229 16.842,22.229 17.233,21.838" id="Fill-162" fill="#5D1505"></path>
        <path d="M5.707,27.707 L13.707,19.707 C14.098,19.317 14.098,18.683 13.707,18.293 C13.317,17.902 12.684,17.902 12.293,18.293 L4.293,26.293 C3.903,26.683 3.903,27.317 4.293,27.707 C4.684,28.098 5.317,28.098 5.707,27.707" id="Fill-163" fill="#5D1505"></path>
        <path d="M16,11.757 L12.99,14.767 C12.6,15.158 12.6,15.791 12.99,16.182 C13.381,16.572 14.014,16.572 14.404,16.182 L17.414,13.172 C17.805,12.781 17.805,12.148 17.414,11.757 C17.024,11.367 16.391,11.367 16,11.757" id="Fill-164" fill="#5D1505"></path>
        <path d="M18.829,14.586 L15.819,17.596 C15.428,17.986 15.428,18.62 15.819,19.01 C16.209,19.401 16.842,19.401 17.233,19.01 L20.243,16 C20.633,15.609 20.633,14.976 20.243,14.586 C19.852,14.195 19.219,14.195 18.829,14.586" id="Fill-165" fill="#5D1505"></path>
        <path d="M26,27 L26,28 C27.106,27.997 27.997,27.106 28,26 C27.997,24.894 27.106,24.003 26,24 C24.894,24.003 24.003,24.894 24,26 C24.003,27.106 24.894,27.997 26,28 L26,26 L26,27" id="Fill-166" fill="#5D1505"></path>
        <path d="M26,30 C23.796,29.996 22.004,28.204 22,26 C21.999,25.873 22.025,25.696 22.06,25.449 C22.103,25.138 21.999,24.827 21.777,24.605 L17.377,20.205 C17.165,19.993 16.868,19.887 16.569,19.918 C16.271,19.948 16.001,20.111 15.836,20.361 L15.747,20.495 L6.533,29.709 C6.339,29.903 6.088,29.999 5.826,30 C5.564,29.999 5.313,29.903 5.119,29.709 L2.291,26.881 C2.097,26.687 2.001,26.436 2,26.174 C2.001,25.912 2.097,25.661 2.291,25.467 L11.505,16.253 L11.639,16.164 C11.889,15.999 12.052,15.729 12.082,15.431 C12.113,15.132 12.007,14.835 11.795,14.623 L11.769,14.598 L11.049,13.877 C10.776,13.604 10.37,13.513 10.006,13.642 C9.359,13.873 8.677,13.989 7.994,13.989 C6.454,13.988 4.919,13.404 3.752,12.237 C2.585,11.07 2.001,9.535 2,7.994 C2,7.89 2.021,7.787 2.026,7.683 L5.166,10.823 C5.402,11.059 5.741,11.162 6.069,11.096 L9.605,10.389 C10.001,10.31 10.31,10.001 10.389,9.605 L11.096,6.069 C11.162,5.741 11.059,5.402 10.823,5.166 L7.683,2.026 C7.787,2.021 7.89,2 7.994,2 C9.535,2.001 11.07,2.585 12.237,3.752 C13.404,4.918 13.988,6.454 13.989,7.994 C13.989,8.677 13.873,9.359 13.643,10.006 C13.513,10.369 13.605,10.776 13.878,11.049 L16,13.171 C16.186,13.358 16.444,13.464 16.707,13.464 C16.971,13.464 17.228,13.358 17.414,13.171 L21.847,8.739 C22.033,8.553 22.14,8.295 22.14,8.032 L22.14,5.77 L28.016,2.258 L29.742,3.984 L26.229,9.86 L23.968,9.86 C23.705,9.86 23.447,9.967 23.261,10.153 L18.829,14.586 C18.438,14.976 18.438,15.609 18.829,16 L24.605,21.776 C24.827,21.998 25.137,22.103 25.448,22.06 C25.696,22.025 25.873,21.999 26,22 C28.204,22.004 29.996,23.796 30,26 C29.996,28.204 28.204,29.996 26,30 L26,30 Z M26,20 C25.88,20 25.78,20.011 25.678,20.021 L20.95,15.293 L24.383,11.86 L26.797,11.86 C27.147,11.86 27.475,11.674 27.655,11.373 L31.859,4.341 C32.094,3.947 32.032,3.445 31.707,3.121 L28.879,0.293 C28.554,-0.032 28.053,-0.094 27.659,0.142 L20.627,4.345 C20.326,4.525 20.14,4.852 20.14,5.203 L20.14,7.617 L16.707,11.05 L15.717,10.06 C15.897,9.384 15.989,8.689 15.989,7.994 C15.99,5.949 15.207,3.893 13.651,2.337 C12.095,0.781 10.039,-0.001 7.994,1.38777878e-15 C7.086,1.38777878e-15 6.177,0.154 5.311,0.462 C4.987,0.578 4.747,0.849 4.671,1.185 C4.596,1.521 4.696,1.868 4.94,2.111 L9.03,6.202 L8.559,8.559 L6.202,9.03 L2.111,4.939 C1.868,4.696 1.52,4.595 1.185,4.671 C0.849,4.747 0.578,4.986 0.462,5.311 C0.154,6.177 -1.13464793e-13,7.085 -1.13464793e-13,7.994 C-0.001,10.039 0.781,12.095 2.338,13.651 C3.893,15.208 5.949,15.989 7.994,15.989 C8.335,15.989 8.674,15.96 9.013,15.917 L0.877,24.053 C0.292,24.636 -0.001,25.411 -1.13464793e-13,26.174 C-0.001,26.937 0.292,27.712 0.877,28.295 L3.705,31.123 C4.288,31.708 5.063,32.001 5.826,32 C6.59,32.001 7.364,31.708 7.947,31.124 L16.707,22.364 L20.021,25.677 C20.011,25.78 20.001,25.88 20,26 C20.002,29.312 22.688,31.998 26,32 C29.312,31.998 31.998,29.312 32,26 C31.998,22.688 29.312,20.002 26,20 L26,20 Z" id="Fill-167" fill="#5D1505"></path>
    </g>
</svg>`;

module.exports = {
  template: svg
};