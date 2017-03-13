$('#start').on('click',function() {
	for (var i=0; i<questions.length; i++) {
		$('#subwrapper').append('<h2>'+questions[i].question+'</h2>');
		for(var j=0; j<questions[i].answers.length; j++) {
			$('#subwrapper').append("<input type='radio' name='question-"+i+"' value=' "+questions[i].answers[j]+"'>"+questions[i].answers[j]);
		}
	};
});

var questions = [{
	question: "Who was the original singer for the Misfits?",
	answers:["Stevie Wonder", "Dave Mustain", "Dimebag Darrell", "Glenn Danzing"],
	correctAnswer:"Glenn Danzing"
}, {
	question: "What is the name of the Misfits skull logo/mascot?",
	answers:["The Skull", "The Crimson Ghost", "It has no name", "Mark"],
	correctAnswer:"The Crimson Ghost"
}, {
	question: "Who plays bass for the Misfits?",
	answers:["Jerry Only", "Flea", "Rob Trujillo", "Jaco Pastorius"],
	correctAnswer:"Jerry Only"
}];