let beats;
let inter;

if (window.matchMedia("(min-width: 768px)").matches) {
	beats = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
	inter = "16n";
} else {
	beats = [0, 1, 2, 3, 4, 5, 6, 7];
	inter = "8n";
}

export {beats, inter};