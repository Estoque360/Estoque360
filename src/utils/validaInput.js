export const validaInput = (type, valor) =>{
	if(!valor || valor == ""){
		return "Digite um valor";
	}else if(type == "number"){
		const validar = new RegExp("(?:.|,|[0-9])*").test(valor);
		if(validar == false)
			return "Digite apenas números";
		return null;
	}
	else{
		return null;
	}  
};