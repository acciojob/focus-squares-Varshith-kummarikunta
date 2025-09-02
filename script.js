//your JS code here. If required.
const squares = document.querySelectorAll(".square");

		for (let sq of squares) {
			sq.addEventListener("mouseover", (e) => addBgColor(e));
			sq.addEventListener("mouseout", () => addDefaultBgColor());
		}

		function addBgColor(e) {
			const hoveredId = e.target.id;
			for (let sq of squares) {
				if (sq.id !== hoveredId) {
					sq.style.backgroundColor = "red";
				}
			}
		}

		function addDefaultBgColor() {
			for (let sq of squares) {
				sq.style.backgroundColor = "#E6E6FA";
			}
		}