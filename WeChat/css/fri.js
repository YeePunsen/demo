	window.onload=function ()
	{
	var tanchu=document.getElementById("tanchu");
	var taolun=document.getElementById("taolun");
	var boo=document.getElementById("boo");
	tanchu.onclick=function (e)
	{
		var aa=window.event||e;
		aa.stopPropagation();
		taolun.style.display="inline-block";
	}
	boo.onclick=function (e)
	{
		var bb=window.event||e;
		bb.stopPropagation();
		taolun.style.display="none";
	}
	}
