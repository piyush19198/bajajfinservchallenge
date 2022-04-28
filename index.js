const {response} = require("express");
const express = require("express");

const app = express();
const port = process.env.PORT;
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.post("/bfhl", (request, response) => {
	try {
		const arr = request.body.data;
		let numarr = [];
		let chararr = [];

		arr.forEach((element) => {
			if (element.charCodeAt(0) <= 57 && element.charCodeAt(0) >= 48)
				numarr.push(element);
			else if (element.charCodeAt(0) >= 65 && element.charCodeAt(0) <= 122)
				chararr.push(element);
		});
		let res_obj = {
			is_success: true,
			user_id: "john_doe_17091999",
			email: "john@xyz.com",
			roll_number: "ABCD123",
			numbers: numarr,
			alphabets: chararr,
		};
		return response.status(200).send(res_obj);
	} catch (error) {
		let err_obj = {
			msg: "Server Error",
		};
		return response.status(500).send(err_obj);
	}
});

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
