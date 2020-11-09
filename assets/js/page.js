let docs = {
	"event": {
		"is_func": false,
		"data": "class Event",
		"desc": "Основной объект (класс), который приходит к вам в модули",
		"members":{
			"etype": "тип объекта (например: «message_new» - новое сообщение)",
			"text": "полученное сообщение",
			"peer_id": "id чата, откуда получено сообщение",
			"userid": "id человека, который вызвал данный event",
			"splited": "массив слов, который составлен из сообщения пользователя в нижнем регистре",
			"args": "дополнительные аргументы",
			"message_id": "id сообщения",
			"bot": "класс данного бота (для подробностей см. bot)"
		}
	},
	"event.message_send()": {
		"is_func": true,
		"data": "event.message_send(message: string, peer_id: int = None, **params)",
		"desc": "отправляет сообщение",
		"args": {
			"message": "текст сообщения <span class=\"required\">*</span>",
			"peer_id": "id чата, куда будет отправлено сообщение",
			"params": "<a href = \"https://vk.com/dev/messages.send\"> допонительные параметры </a>"
		},
		"return": "Ответ от Vk API в формате JSON"
	},
	"event.bot": {
		"is_func": false,
		"data": "class Bot",
		"desc": "класс бота, который получил event",
		"members":{
			"token": "токен бота",
			"api_version": "версия api (если не задана, то используется «5.101»)",
			"names": "массив имен бота",
			"bot_id": "id бота из конфига",
			"main": "приоритет выполнения команд",
			"id": "id бота вк",
			"poll": "longpool Бота",
			"active": "статус активности бота (True/False)"
		}
	},
	"event.bot.service()": {
		"is_func": true,
		"data": "event.bot.service()",
		"desc": "показывает на каком сервисе работает бот",
		"args": {},
		"return": "название сервиса, на котором работает бот"
	},
	"event.bot.is_page()": {
		"is_func": true,
		"data": "event.bot.is_page()",
		"desc": "показывает является ли бот страницой",
		"args": {},
		"return": "<pre><code data-language=\"python\">True/False</pre></code>"
	},
	"event.bot.is_group()": {
		"is_func": true,
		"data": "event.bot.is_group()",
		"desc": "показывает является ли бот группой",
		"args": {},
		"return": "<pre><code data-language=\"python\">True/False</pre></code>"
	},
	"event.bot.getBot()": {
		"is_func": true,
		"data": "event.bot.getBot(type, index=0)",
		"desc": "получить класс бота",
		"args": {
			"type": "тип бота, который мы хотим получить (\"page\", \"group\", \"all\") <span class=\"required\">*</span>",
			"index": "индекс нужного бота из списка подходящих"
		},
		"return": "<pre><code data-language=\"python\">class Bot</pre></code>"
	},
	"event.bot.setBots()": {
		"is_func": true,
		"data": "event.bot.setBots(bots)",
		"desc": "ручное задание списка ботов",
		"args": {
			"bots": "массив ботов (как в bots.json) <span class=\"required\">*</span>"
		},
		"return": "<pre><code data-language=\"python\">None</pre></code>"
	},
	"event.bot.is_wrong()": {
		"is_func": true,
		"data": "event.bot.is_wrong()",
		"desc": "возращает правильно ли задан тип бота",
		"args": {},
		"return": "<pre><code data-language=\"python\">True/False</pre></code>"
	},
	"event.bot.message_send()": {
		"is_func": true,
		"data": "event.bot.message_send(message: string, peer_id: int, **params)",
		"desc": "отправляет сообщение",
		"args": {
			"message": "текст сообщения <span class=\"required\">*</span>",
			"peer_id": "id чата, куда будет отправлено сообщение <span class=\"required\">*</span>",
			"params": "<a href = \"https://vk.com/dev/messages.send\"> допонительные параметры </a>"
		},
		"return": "Ответ от Vk API в формате JSON"
	},
	"event.bot.method()": {
		"is_func": true,
		"data": "event.bot.method(method, **params)",
		"desc": "исполняет метод вк и возращает результат",
		"args": {
			"method": "название метода",
			"access_token": "токен, который будет исполнять метод (изначально - токен бота)",
			"v": "версия api (изначально - 5.101 или указанная в конфиге)",
			"params": "<a href = \"https://vk.com/dev/methods\"> допонительные параметры </a>"
		},
		"return": "Ответ от Vk API в формате JSON"
	},
	"event.bot.upload_files()": {
		"is_func": true,
		"data": "event.bot.upload_files(files, peer_id, message='', **params)",
		"desc": "отправляет файлы в нужный чат",
		"args": {
			"files": `массив json который выглядит:<pre style=\"margin-left:20px;\"><code data-language=\"json\">{
  [
    {
      'type': type,
      'data': data,
      'name': name
    },
    {
      'type': type,
      'data': path_to_file
    }
  ]
}</pre></code>
<div><span style=\"color: orange; margin-left:60px;\">type</span>: тип файла (\"doc\"/\"photo\")</div>
<div><span style=\"color: orange; margin-left:60px;\">data</span>: битовые данные файла или путь к файлу</div>
<div><span style=\"color: orange; margin-left:60px;\">name</span>: название файла (используется только тогда, когда data - данные)</div>`,
		"peer_id": "id чата, куда будет отправлено сообщение <span class=\"required\">*</span>",
		"message": "текст сообщения",
		"params": "<a href = \"https://vk.com/dev/messages.send\"> допонительные параметры </a>"
},
		"return": "Ответ от Vk API в формате JSON"
	},
	"HandleCmd()": {
		"is_func": true,
		"data": "HandleCmd(cmd, access, func, executor=-1, **members)",
		"desc": "функция для задания команд",
		"args": {
			"cmd": "команда, на которую будет срабатывать <span class=\"required\">*</span>",
			"access": "уровень доступа <span class=\"required\">*</span>",
			"func": "функция, которая вызывается при команде cmd <span class=\"required\">*</span>",
			"executor": "кто исполняет",
			"members": "сторонние атрибуты"
		},
		"return": "<pre><code data-language=\"python\">None</pre></code>"
	}
}

//function sortData1() {
//  let keys = Object.keys(docs)
//  keys = keys.sort(function(a,b){(a < b) ? -1 : (a > b) ? 1 : 0;});
//  return keys
//}

//docs = sortData()
//console.log(sortData1())

let hide_show_btn = document.getElementById("hide_btn")
let left = document.getElementById("left")
let right = document.getElementById("right")

function create_li(ul, name) {
	let li = document.createElement('li');
	ul.appendChild(li);
	li.innerHTML="<p>" + name + "</p>";
}

ul = document.getElementById("menu")
let params = Object.keys(docs)
for (i=0; i<params.length; i++){
	create_li(ul, params[i])
}


function SearchAlgoritm() {
    let filter, ul, li, a, i;
    input = document.getElementById("search");
		let eng = change_find(input.value)
		if (input.value != eng){
			input.value = eng
		}
	//console.log(input.value);
    filter = input.value.toUpperCase();
    ul = document.getElementById("menu");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i];
        if (a["textContent"].toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

function ChangeRight(li, hide_left = true){
	if (hide_left) {
		if (window.innerWidth <= 700){
			hide_show_btn.id = 'show_btn';
			hide_show_btn.innerHTML = '>';
			right.classList.remove('hide');
			left.classList.remove('show');
			left.classList.add('hide');
		}
	}
	let doc = docs[li];
	res  = "<h1 class = \"chosen\">" + li + "</h1>\n";
	if (doc["is_func"]){
		res += "<pre style=\"margin-left:20px;\"><code data-language=\"python\">" + doc["data"] + "</pre></code>\n";
		res += "<h2>Описание:\n</h2>"
		res += "<p style=\"margin-left:20px;\">" + doc["desc"] +"\n</p>"
		let params = Object.keys(doc["args"])
		if (params.length != 0){
			res += "<h2>Параметры:\n</h2>";
			//console.log(doc["args"])
			for (i=0; i<params.length; i++){
				arg = params[i]
				res += "<p style=\"margin-left:20px;\"><span style=\"color: green;\">" + arg + "</span>: " + doc["args"][arg] + "\n</p>";
			}
		}
		res += "<h2>Возращает:\n</h2>";
		res += "<p style=\"margin-left:20px;\">" + doc["return"] +"\n</p>"
	}else{
		res += "<pre style=\"margin-left:20px;\"><code data-language=\"python\">" + doc["data"] + "</pre></code>\n";
		res += "<h2>Описание:\n</h2>"
		res += "<p style=\"margin-left:20px;\">" + doc["desc"] +"\n</p>"
		let members = Object.keys(doc["members"])
		if (members.length != 0){
			res += "<h2>Переменные:\n</h2>"
			//console.log(doc["args"])
			for (i=0; i<members.length; i++){
				member = members[i]
				res += "<p style=\"margin-left:20px;\"><span style=\"color: green;\">" + member + "</span>: " + doc["members"][member] + "\n</p>";
			}
		}
		re_str = "(^" + li + ".)+\\\w+\\\(\\\)"
		//console.log(re_str)
		let re = new RegExp(re_str)
		let docs_metods = Object.keys(docs)
		metods = []
		for (i=0; i<docs_metods.length; i++){
			//console.log(docs_metods[i] + ": " + re.test(docs_metods[i]))
			if (re.test(docs_metods[i])){
				metods.push(docs_metods[i])
			}
		}
		if (metods.length != 0){
			res += "<h2>Методы:\n</h2>"
			for (i=0; i<metods.length; i++){
				res += "<p><span class = \"method\" style=\"margin-left:20px;\">" + metods[i] + "</span>: " + docs[metods[i]]["desc"] + "\n</p>";
			}
		}
	}
	res += "<br><br><span class=\"required\">*</span> - обязательный параметр!"
	res += "<div class = \"padding\"></div>"
	right.innerHTML = res;

	if (metods.length != 0){
		methods_in_html = document.getElementsByClassName("method")
		for(i=0; i<methods_in_html.length; i++){
			methods_in_html[i].addEventListener('click', event => {
				if (event["type"] == "click"){
					Set_color(event["target"]["textContent"])
					ChangeRight(event["target"]["textContent"])
				}
			})
		}
	}


	Rainbow.color();
	//console.log()
}

function Set_color(event){
	li = document.getElementById("menu").getElementsByTagName("li");
	for (i = 0; i < li.length; i++) {
		if (li[i]["textContent"] != event)
			li[i].innerHTML = "<p>" + li[i]["textContent"] + "</p>"
		else
			li[i].innerHTML = "<p class=\"chosen_li\">" + event + "</p>"
	}
}


document.getElementById("search").addEventListener('input', SearchAlgoritm);
li = document.getElementById("menu").getElementsByTagName("li");
for (i = 0; i < li.length; i++) {
	li[i].addEventListener('click', event => {
		if (event["type"] == "click"){
			Set_color(event["target"]["textContent"])
			ChangeRight(event["target"]["textContent"])
		}
	})
}

hide_show_btn.addEventListener("click", () => {
		if (hide_show_btn.id == "hide_btn"){
			hide_show_btn.id = 'show_btn';
			hide_show_btn.innerHTML = '>';
			left.classList.remove('show');
			left.classList.add('hide');
	}else{
		hide_show_btn.id = 'hide_btn';
		hide_show_btn.innerHTML = '<';
		left.classList.remove('hide');
		left.classList.add('show');
	}
	right.classList.toggle('hide');
})



function change_find(str)
{
  var replace = new Array(
  "й","ц","у","к","е","н","г","ш","щ","з","х","ъ",
  "ф","ы","в","а","п","р","о","л","д","ж","э",
  "я","ч","с","м","и","т","ь","б","ю"
  );
  var search = new Array(
  "q","w","e","r","t","y","u","i","o","p","\\[","\\]",
  "a","s","d","f","g","h","j","k","l",";","'",
  "z","x","c","v","b","n","m",",","\\."
  );

for (var i = 0; i < replace.length; i++) {
    var reg = new RegExp(replace[i], 'mig');
    str = str.replace(reg, function (a) {
        return a == a.toLowerCase() ? search[i] : search[i].toUpperCase();
    })
}
  return str
}



Set_color("event")
ChangeRight("event", false)
