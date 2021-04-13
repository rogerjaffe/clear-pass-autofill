$(document).ready(function() {
	let els = $('[id$="_no"]');
	els.each((idx, el) => {
		$(el).prop('checked',true);
	})
});
