"use strict"
function initScript() {

	let username = $("#ghUsername").val();

	if (username == "") {
		$(".alert-danger").text("Error: input field is empty").FadeInOut()
	
		return;
	}

	$(".loading-container").show();
	
	ghSearch(username).done(function(data) {
		onSuccess(data);
	}).fail(function(data) {
		onFail(data);
	})
}

function onSuccess(data) {

	$(".loading-container").hide();
	$(".output-container").slideDown(1000);
	$("#user-avatar").attr("src", data.avatar_url);
	$("#user-name").text(data.name);
	$("#user-nickname").text(data.login);
	$("#user-since").text("Since: " + data.created_at.slice(0, 4))
	$("#user-followers").text(data.followers);
	$("#user-repos").text(data.public_repos);
	$("#user-following").text(data.following);
	$("#user-link").attr("href", data.html_url)
	$(".alert-success").text("User '"+ data.login +"' successfully found!").FadeInOut();
}

function onFail(data) {

	if (data.responseJSON.message === "Not Found") {

		$(".loading-container").hide();
		$(".alert-danger").text("Error: username is " + data.responseJSON.message ).FadeInOut()

	} else {

		$(".loading-container").hide();
		$(".alert-danger").text("Error! Check console.").FadeInOut()

	}
}

(function($){
	$.fn.FadeInOut = function() {
		this.delay(1000).slideDown(1500).delay(1000).slideUp(1500);
	}; 
 })( jQuery );