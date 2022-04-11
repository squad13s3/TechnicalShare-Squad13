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

function onRequestMeetingClick() {
  window.location.href = "../agendaSucess.html";
}

//testes
//var data = $("#datepicker").val();
//let scheduledDate = $("#datepicker").datepicker("getDate");
