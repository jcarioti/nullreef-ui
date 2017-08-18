let validate = function() {
  let email = $("#email").val();
  let apexId = $("#apex-id").val();
  let alexaVoiceLinked = $("#alexa-user-authorized").prop('checked');

  if (email && apexId && alexaVoiceLinked) {
    $("#submit").removeAttr("disabled");
  } else {
    $("#submit").attr("disabled", "disabled");
  }
  console.log(email, apexId, alexaVoiceLinked);
}
