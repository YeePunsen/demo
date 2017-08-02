window.onload=function ()
{
	var jh=document.getElementById("JH");
	var xiala=document.getElementById("xiala");
	var bo=document.getElementById("bo");
	jh.onclick=function (e)
	{
		var aa=window.event||e;
		aa.stopPropagation();
		xiala.style.display="inline-block";
	}
	bo.onclick=function (e)
	{
		var bb=window.event||e;
		bb.stopPropagation();
		xiala.style.display="none";
	}
}
