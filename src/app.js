/**
 * 
 */function autoSave(event){
	 val value = $('#contents').val();
 
	 window.localStorage.setItem('note_contents',value);
 }
 
 $('#contents').on('keyup',autoSave);