export const request = async (type, body) =>{
	if(type === ""){
		const req = await fetch("http://localhost:3333/produtos", {
			method: "POST",
			body: JSON.stringify({
				name: body[0],
				category: body[1],
				price: body[2].replace(",","."),
				qtt: body[3],
				user_id: "3"
			}),
			headers: {
				"Content-Type": "application/json"
			}
		});
        
		const response = await req.json();
		return response;
	}
};