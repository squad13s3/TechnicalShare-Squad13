// ==============================================================================================
//  solicitarMentoria.html
// ==============================================================================================

let hasDate = false;
let hasTime = false;
const MEET_SELECTED_CLASS = "meetSelected";

function meetingDate() {
  let scheduleDate = hasDate.getDate();
  console.log(scheduleDate);
}

//Função implementada por Guilherme para inicializar o datepicker
$(function () {
  $("#datepicker").datepicker({
    onSelect: onSelectedDate,
  });
});

//Função para receber a data e hora do agendamento e redirecionar a página em caso de sucesso
function render() {
  if (hasDate) {
    $("#selectTime").prop("disabled", false);
    $("#datepicker").removeClass(MEET_SELECTED_CLASS);
    $("#datepicker").addClass("colorChangeInput");
  }
  if (hasTime) {
    $("#selectTime").removeClass(MEET_SELECTED_CLASS);
    $("#selectTime").addClass("colorChangeInput");
  }
  if (hasDate && hasTime) {
    $("#requestMeeting").prop("disabled", false);
    $("#requestMeeting").removeClass("mentorMeet");
    $("#requestMeeting").addClass("colorChangeButton");
  }
}

function onSelectedDate(event) {
  hasDate = true;
  render();
}

function onSelectedTime(event) {
  hasTime = true;
  render();
}

function onScheduleMeetingClick(date, hora, user) {
  user = JSON.parse(localStorage.getItem("Usuario"));
  var charlesId = "346c428d-8513-4938-9e3a-072218ad31cf";
  var userId = user.userId;
  localStorage.setItem("data", date);
  localStorage.setItem("hora", hora);

  console.log(charlesId);
  console.log(userId);

  /*const sendGetRequest = async (data) => {
  await axios.post('http://localhost:3333/scheduleMentorship/', data) }
  const data = { "email":`${email}`,"password":`${senha}`};
  sendGetRequest(data);
*/
  //location.href = "../mentoriaAgendada.html";
}

function onRequestMeetingClick() {
  location.href = "../solicitarMentoria.html";
}

function startSearchButton() {
  location.href = "../busca.html";
}

// ==============================================================================================
//  meuPerfil.html
// ==============================================================================================

let profileAbout = document.getElementById("profileModal");
let myInput = document.getElementById("profileFormControlTextarea1");
const MAX_CHILDREN = 3;

profileAbout.addEventListener("shown.bs.modal", function () {
  myInput.focus();
});

profileAbout.addEventListener("hidden.bs.modal", function () {
  document.getElementById("profileFormControlTextarea1").value = "";
});

function onSaveProfile() {
  let profileText = document.getElementById(
    "profileFormControlTextarea1"
  ).value;
  console.log(profileText);
  aboutText = profileText;
  renderProfileText();
}

//TODO: texto será gerado pelo servidor
let aboutText =
  "Formado em Design Digital, e pós graduando em UX Research, Operações de Pesquisa e Liderança em Design. Atua como Product Designer trainee - Parte do Grupo FCamara desde 2022";

function renderProfileText() {
  let aboutTextPTag = document.getElementById("profileText");
  aboutTextPTag.innerText = aboutText;
}

/////////////////EDITAR TAGS
let tagsAll = [
  "card sorting",
  "tree-testing",
  "customer experience",
  "ux research",
  "entrevista",
  "jornada do usuário",
];

/**
 * Variável para enviar as tags
 */
let tagsSelectedLearn = [];
let tagsSelectedTeach = [];

const DATALIST_ID = "#datalistOptions";
const TAGS_TEACH_ID = "tagsTeach";
const TAGS_LEARN_ID = "tagsLearn";

function onSaveTagsTeach() {
  /**
   * Método para criar uma tag dinamicamente
   */
  function createTags(tagText) {
    let ul = document.getElementById(TAGS_TEACH_ID);
    let numChild = ul.children.length;
    //DHTML - HTML dinâmico
    //   <li class="list-group-item bg-white tagsLearn" style="border-radius: 25px; border-color: white;">card sorting</li>

    if (numChild < MAX_CHILDREN) {
      let li = document.createElement("li");
      let textNode = document.createTextNode(tagText);

      li.appendChild(textNode);
      li.setAttribute("class", "bg-white tagsTeach");
      li.setAttribute("onclick", "removeTagTeach(this); this.remove();");
      ul.appendChild(li);
    }
  }

  function clearSelection() {
    let ul = document.getElementById("tagsTeachDataList");
    ul.innerText = "";
  }

  //Criar as tagsTeach no HTML
  let tagOption = $("#tagsTeachDataList").val();
  createTags(tagOption);
  clearSelection();

  //Salvar as tagsTeach Banco de Dados
  saveTagOptionTeach(tagOption);
  console.log(tagOption);
}

//Função para remover as tagsTeach, mas salvando o dado no array
function removeTagTeach(tagOption) {
  let htmlValue = tagOption.innerText;
  let index = tagsSelectedTeach.indexOf(htmlValue);
  if (index !== -1) {
    tagsSelectedTeach.splice(index, 1);
  }
  console.log(tagsSelectedTeach);
}

//Função para salvar as tagsTeach
function saveTagOptionTeach(tagOption) {
  if (tagsSelectedTeach.length < 3) {
    tagsSelectedTeach.push(tagOption);
    console.log(tagsSelectedTeach);
  }
}

//Função para criar tagsLearn no HTML e salvar no BD
function onSaveTagsLearn() {
  /**
   * Método para criar uma tag dinamicamente
   */
  function createTags(tagText) {
    let ul = document.getElementById(TAGS_LEARN_ID);
    let numChild = ul.children.length;
    //DHTML - HTML dinâmico
    //   <li class="list-group-item bg-white tagsLearn" style="border-radius: 25px; border-color: white;">card sorting</li>

    if (numChild < MAX_CHILDREN) {
      let li = document.createElement("li");
      let textNode = document.createTextNode(tagText);

      li.appendChild(textNode);
      li.setAttribute("class", "bg-white tagsLearn");
      li.setAttribute("onclick", "removeTagLearn(this); this.remove();");
      ul.appendChild(li);
    }
  }

  function clearSelection() {
    let ul = document.getElementById("tagsLearnDataList");
    ul.innerText = "";
  }

  //Chamando a função para criar as tagsLearn no HTML
  let tagOptionLearn = $("#tagsLearnDataList").val();
  createTags(tagOptionLearn);
  clearSelection();

  //Chamando a função para salvar as tagsLearn no Banco de Dados
  saveTagOptionLearn(tagOptionLearn);
  console.log(tagOptionLearn);

  //Função para salvar as tagsLearn
  function saveTagOptionLearn(tagOption) {
    if (tagsSelectedLearn.length < 3) {
      tagsSelectedLearn.push(tagOption);
      console.log(tagsSelectedLearn);
    }
  }
}

//Função para remover as tagsLearn, mas salvando o dado no array
function removeTagLearn(tagOption) {
  let htmlValue = tagOption.innerText;
  let index = tagsSelectedLearn.indexOf(htmlValue);
  if (index !== -1) {
    tagsSelectedLearn.splice(index, 1);
  }
  console.log(tagsSelectedLearn);
}

/**
 * Funçõa para colocar valores no datalist
 */
//https://thewebdev.info/2022/01/09/how-to-add-html-datalist-values-from-array-with-javascript/
function renderTags() {
  let datalistOptions = document.getElementById("datalistOptions");
  for (const f of tagsAll) {
    const option = document.createElement("option");
    option.value = f;
    datalistOptions.appendChild(option);
  }
}

/**
 * Método para receber dados da página de Perfil, está sendo chamado na tag body do HTML
 */
function getProfileData() {
  renderTags();
  renderProfileText();
}
