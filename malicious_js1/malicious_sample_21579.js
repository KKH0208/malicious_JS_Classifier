<!-- // --><![CDATA[
	quickReplyCollapsed = false;

	smf_topic = 466071;
	smf_start = 0;
	smf_show_modify = 1;

	// On quick modify, this is what the body will look like.
	var smf_template_body_edit = '<div id="error_box" style="padding: 4px; color: red;"></div><textarea class="editor" name="message" rows="12" style="width: 94%; margin-bottom: 10px;">%body%</textarea><br /><input type="hidden" name="sc" value="f79ea55b5bc3ef485350d39c150c1f52" /><input type="hidden" name="topic" value="466071" /><input type="hidden" name="msg" value="%msg_id%" /><div style="text-align: center;"><input type="submit" name="post" value="Save" onclick="return modify_save(\'f79ea55b5bc3ef485350d39c150c1f52\');" accesskey="s" />&nbsp;&nbsp;<input type="button" value="Spell Check" onclick="spellCheck(\'quickModForm\', \'message\');" />&nbsp;&nbsp;<input type="submit" name="cancel" value="Cancel" onclick="return modify_cancel();" /></div>';

	// And this is the replacement for the subject.
	var smf_template_subject_edit = '<input type="text" name="subject" value="%subject%" size="60" style="width: 99%;"  maxlength="80" />';

	// Restore the message to this after editing.
	var smf_template_body_normal = '%body%';
	var smf_template_subject_normal = '<a href="http://ryansdistrict.com/boards/index.php?PHPSESSID=dq1gnkrd51jj31cb9as9mutv66&amp;topic=466071.msg%msg_id%#msg%msg_id%">%subject%</a>';
	var smf_template_top_subject = "Topic: %subject% &nbsp;(Read 2524 times)"

	if (window.XMLHttpRequest)
		showModifyButtons();
// ]]>