var docs = {
	"event.message_send": {
		"is_func": true,
		"data": "event.message_send(string message, int peer_id=None, **params)",
		"desc": "Отправляет сообщение",
		"args": {
			"message": "Текст сообщения (обязательный параметр)",
			"peer_id": "Id чата или человека, куда будет отправлено сообщение (Не обязательный параметр)",
			"params": "<a href = \"https://vk.com/dev/messages.send\"> Допонительные параметры </a>"
		},
		"return": "Ответ от Vk API"
	},
	"event.bot.service": {
		"is_func": true,
		"data": "event.bot.service()",
		"desc": "Показывает на каком сервисе работает бот",
		"args": {},
		"return": "Название сервиса, на котором работает бот"
	},
	"event.bot.is_page": {
		"is_func": true,
		"data": "event.bot.is_page()",
		"desc": "Показывает является ли бот страницой",
		"args": {},
		"return": "True или False"
	},
	"event.bot.is_group": {
		"is_func": true,
		"data": "event.bot.is_group()",
		"desc": "Показывает является ли бот группой",
		"args": {},
		"return": "True или False"
	}
}


function create_li(ul, name) {
	var li = document.createElement('li');
	ul.appendChild(li);
	li.innerHTML="<p>" + name + "</p>";
}

ul = document.getElementById("menu")
var params = Object.keys(docs)
for (i=0; i<params.length; i++){
	create_li(ul, params[i])
}


function SearchAlgoritm() {
    var filter, ul, li, a, i;
    input = document.getElementById("search");
	//console.log(input.value);
    filter = input.value.toUpperCase();
    ul = document.getElementById("menu");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

function ChangeRight(li){
	var right = document.getElementById("right");
	var doc = docs[li];
	if (doc["is_func"]){
		res  = "<p class = \"chosen\">" + li + "</p>\n";
		res += "<pre style=\"margin-left:20px;\"><code data-language=\"python\">" + doc["data"] + "</pre></code>\n";
		res += "<p style=\"font-weight: 600;\">Описание:\n</p>"
		res += "<p style=\"margin-left:20px;\">" + doc["desc"] +"\n</p>"
		var params = Object.keys(doc["args"])
		if (params.length != 0){
			res += "<p style=\"font-weight: 600;\">Параметры:\n</p>";
			//console.log(doc["args"])
			for (i=0; i<params.length; i++){
				arg = params[i]
				res += "<p style=\"margin-left:20px;\">" + arg + ": " + doc["args"][arg] + "\n</p>";
			}
		}
		res += "<p style=\"font-weight: 600;\">Возращает:\n</p>";
		res += "<p style=\"margin-left:20px;\">" + doc["return"] +"\n</p>"
		right.innerHTML = res;
	}
	Rainbow.color();
	//console.log()
}

function Set_color(event){
	li = document.getElementById("menu").getElementsByTagName("li");
	for (i = 0; i < li.length; i++) {
		if (li[i]["textContent"] != event["target"]["textContent"])
			li[i].innerHTML = "<p>" + li[i]["textContent"] + "</p>"
		else
			li[i].innerHTML = "<p class=\"chosen_li\">" + event["target"].innerHTML + "</p>"
	}
}


document.getElementById("search").addEventListener('input', SearchAlgoritm);
li = document.getElementById("menu").getElementsByTagName("li");
for (i = 0; i < li.length; i++) {
	li[i].addEventListener('click', event => {
		if (event["type"] == "click"){
			Set_color(event)
			ChangeRight(event["target"]["textContent"])
		}
	})
}