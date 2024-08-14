export default {
	async upload () {
		const fileData = FilePicker1.files[0].data
		const csvData = await this.base64ToCsv(fileData)
		const jsonData = await this.csvToJSON(csvData);
		const queries = jsonData.map((d, i) =>  jsonInsert.run(d))
		return Promise.all(queries)
	},
	async base64ToCsv (base64Data) {
		// Extract the actual CSV content from the base64 string
		const base64 = base64Data.split(',')[1];
		const csv =await atob(base64);  // Decode Base64 to CSV string
		return csv;
	},

	parseCsvLine (line) {
		const values = [];
		let value = '';
		let insideQuote = false;

		for (let i = 0; i < line.length; i++) {
			const char = line[i];

			if (char === '"' && (i === 0 || line[i - 1] !== '\\')) {
				insideQuote = !insideQuote;
			} else if (char === ',' && !insideQuote) {
				values.push(value.trim());
				value = '';
			} else {
				value += char;
			}
		}
		values.push(value.trim());

		return values;
	},

	async csvToJSON (csvData) {
		const lines = csvData.split('\n').map(line => line.trim()).filter(line => line.length > 0);

		if (lines.length === 0) return [];

		// Extract headers from the first line
		const headers = this.parseCsvLine(lines[0]);

		// Map each line to an object
		const jsonArray = lines.slice(1).map(line => {
			const values = this.parseCsvLine(line);
			const obj = {};
			headers.forEach((header, index) => {
				obj[header] = values[index];
			});
			return obj;
		});

		return jsonArray
	}
}