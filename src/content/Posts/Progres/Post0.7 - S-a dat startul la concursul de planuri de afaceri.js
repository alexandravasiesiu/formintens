import { useNavigate } from "react-router-dom";

export const options = {
	"title": "S-a dat startul la concursul de planuri de afaceri",
	"category": "PROGRES",
	"category_link": "/projectsprogress",
	"id": 25
}

export default function Post(){
	const navigate = useNavigate();
	
	return (
	<>
	<div class="accordion-content mt-4">
                  <p class="mb-3 w-full md:text-lg">
                    <span>În perioada 14-20 Noiembrie, absolvenții cursului de competențe antreprenoriale pot depune dosarele de concurs. Informațiile complete cu privire la modul de desfășurare a concursului pot fi găsite în</span>&nbsp;
                    <a class="items-center hover:text-red-500 text-lg underline" onClick={() => { navigate('/projectsevaluation') }}>metodologia de concurs.</a>
                  </p>
                  <p class="mb-3 w-full md:text-lg">Le dorim mult succes participanților!</p>
                  </div>
	</>
	)
}
