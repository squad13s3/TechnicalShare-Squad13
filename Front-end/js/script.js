let hasDate = false;
let hasTime = false;
const MEET_SELECTED_CLASS = "meetSelected";

function meetingDate() {
  let scheduleDate = hasDate.getDate();
  console.log(scheduleDate);
}

//Função implementada por Guilherme para inicializar o datepicker
$(function () {
  $("#datepicker").datepicker( {
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
console.log(hora);
console.log(date);
user = JSON.parse(localStorage.getItem("Usuario"))
localStorage.setItem("data", date);
localStorage.setItem("hora", hora);
/*const sendGetRequest = async (data) => {
  await axios.post('http://localhost:3333/scheduleMentorship/', data) }
  const data = { "email":`${email}`,"password":`${senha}`};
  sendGetRequest(data);

location.href = "../mentoriaAgendada.html";
*/
}

function onRequestMeetingClick() {
location.href = "../solicitarMentoria.html";
}

function startSearchButton() {

location.href = "../busca.html";
}

//testes
//var data = $("#datepicker").val();
//let scheduledDate = $("#datepicker").datepicker("getDate");
