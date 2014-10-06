// ==UserScript==
// @name            DuckDuckGo Links To Other Engines
// @namespace       DuckDuckGoLinksToOtherEngines
// @description     Add various search engines to DuckDuckGo.
// @homepage        
// @icon            
// @updateURL       
// @downloadURL     
// @include         https://duckduckgo.com*
// @include         http://duckduckgo.com*
// @version         1
// @grant           GM_addStyle
// @run-at          document-end
// ==/UserScript==


document.addEventListener("DOMContentLoaded", function () {

	// Favicons
	var gimgfav = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABWUlEQVQ4jaXTPUvDQBgH8HyzkiCVdlBcFD+CDgUn0bU5rUMRS6mD4BuCVgfFKmitCl0s+FKhvoEgVvsyWKuRS9JLcvm7tcplSHW44e6e5/c8x91JAaKFZJXWFELRzZBVWgsQLST9JfknInlt9ExRJLMMqSOG67ID7gLb5xbG100h1hNIFyzM51gbu61wnN7Znl14Al+GC7LTas9nMi20bPgHPnUXmatOxbE1E89v3D8wd8DAbGBiw0R/XMfupY3RJcM/oBCKkUUDiUMGF/h1HN+AQiiC0xSa4aL04mBgVvcPTKZNbBYspHIMy3mGJnXx+s4xmBARAVg4Ybh4ctAb66wNJXSUGxx7RfEqBaDa5EgdMSEwmWXIlnwA+Qcb5QbHcLLTbjBGcfboILLq4yX2xXVsFSzUP1zcVzmOb2zsF21EVsRkhVD89zPVJTmqhWWV1rsGVFqRo1r4G6iM33AbQTj+AAAAAElFTkSuQmCC";
	var gimgripfav = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADRUlEQVQ4jSXT60/VdQDH8c/vd7AlI4EHtjW0WCs1i7U2i8u54GWxYDVtpkabumX5JLs86oLYEgRDQjAIBbsYayTmCjDQMwsrtcgxUBdWkNyyJDkCB9jRw+/8vu8e8OD9D7y2tyTJiUFX/wipWxuJe/pzSo9fwiVGNDzB2ewsei0xa9u4Eq5sIpYYl5AkxRwwwLriU2hTEHtbFwte/I6//p0CEyPyWy/XE+JxJYzlwbVExBIhxTFkCwE4jsMDO9rRtk60vQfl/0jxN5fBgInBUE4OUVnEPCJqWUzKw5glBiVkXCAG3sIO7M0/Y2/vxH7hHJv2dwMOAFfXr2NGcWAJVx6mLfGPRJ/tQeACLkVNl9H6IHEvXcB+/nvyqzpxMXAbfnloGT/dcwctS5JpT02mK2kew7botYT6h29igNFwhGU72tBzp1mwOUiw5xoGqGs5zOI3UtFH6Xhq/ajay/yyJ8h6OY19DyeipVs+43jHFXANE1NRjpwZoG/kJi6GklN1qOgRPPVePIeyUG06qs3EOpCFqrOx9q5GCzceJWntx6x+vZE9DR1zajic6fsV+6370OHHUV06qk/HqvFh1fhQZQZWuR9rbwAtzW9g0YYvuDPvU5KfOsTgaBhjDMOhayypfxbVpGEfzMQ+6EU1GdgferEq/djlflSWge7P3U/Glk/Y+G4rr1X9QE/fOC4Gg8vY1Bg5R1/BqkhDtT5U7Z2r0o/2+dEeP2o8fZGxcRcDzE72Mnq1mYGeWm5N3wBgNuaQ2/gqVsVyVJ2BqrzY5ZnofR8q8SFcmP7vIt3NGQw2x/N3mxj52uZK03LCoT/BxPh9dIi7SrNRVSaeD3zYZX5UEkC7A+i2M0NXYzoT3wpz3sY5G0+kYz43jon+5jyMMZgYPHhgAypbgSq8qNTPvN1rsHYF0FRogD8aUrgVTCIcTGCqLZHJ1kRmTqRw/atHITpNxDEsLslDpZnYJatQqQ/7vZVopx85McPgya2EvkxgsuVuwq0LmTmRQvjYvYyfK8QATRdO4nnzMaxiL56ibLQrgAoC6J01c0c6MyHGzhcy0b6WcMuTTLQ/Q6S7mqgT4dLwAIvezkUFK7ALs1HhSrTThwpWIUn/A1g/hnpCRmiJAAAAAElFTkSuQmCC";
	var gmapsfav = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAC4klEQVQ4jZ2T3W9TdRjHf//F4cbE+YaxvYIrTDQuU+LLhYneiR1yQ+jBizVwQ0xqE4IXQAgZOes6cUHWTTPp2zmup4d14thKCIKkp9Cm6wt0zK1dxyiYRV3L7+NF240Qr/wmn8vn8+T5Pc9PCCGElfnhhWRmQklmYltcL8eU6+WkIjrJf/xB01ac5D96vymej6araMZz6F3c5N97l7TiwFac2IqT7FtvoxkqQgghEldiP//19wZSyv9kvhgl59hFWnHS3/MS9g4n2Z270HSVa3MawpzRLYBS1e50dlOq2kigsHiXIUPd6mwrTtKKg7Ti4KjHzeh3AYQ5E7WklATMATRdZagzgpSSJxsNNEMldXMMe4dza4zBvne2BVPJ8GUpJYH4AJrREegqT59K1hp1NENlbmGS2vg30lacnOvr5ajH/awg1BaYnu3HM1RarRa3Fn5F01Vq9VBrYy3GjVd3bxVb0e+Z0iOIqelL1marRb1RI2AOMGJ6WKyVyVVuoxkqSytjrSfrk5QLcfRPPuXsSS+35wzupIy2IGpOxIYMlXTpKg9WCjSbTcoP7qIZKqWKv9lYG6VSDJO+kSA0fJpMyiA7HyM3G2kLwmYw1t391bTO5maTynIBO3Oq+bCm0Vj1s177luVykPytMHfmouRmQ+R++aktiJjB6PbxuOlmrV5iejb8j8tnkcv+yHp1iEerw6wujnL/93EWkhMdQXx8imeyVDjE48c1AGr1dc4F53H5LFw+iyupCCsVP49W/TysjnQFwbimu9EMlT+Kh1i+d4RQ/OKfmfwSAKnfFvj86wSuLj6L85O6zNqB9iVeMi5ENL1dvFQ8KP0XBze+8F3m4IkZipUqAC5vHJfPot+boN+b4DNvgn3eBOfHwgghRM/JwN5rlv5h+qvjrhnHXs+FN3oPD7/edziwf+CU7vry+PRrverIy28eOPvKngNnXtyz/4x6bBD12CBCiJ7uh+z5n4h/AWy0oXdRPD+0AAAAAElFTkSuQmCC";
	var imdbfav = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABKUlEQVQ4jWNgoBTsWiL7nxLMsGuJ7P8v95Xh+OMdCH53HYJfXYbgZ+cQ+NEJCEYxAF0jIc33j0ININXW+0ch+M4BCGaoyBX8z8DA8H/lFKn/DAwM/wX4mP6/uqz8n4GB4T8DA8P/Kc3icLaxDsf/63uV/jMwMPy/c0AZwkY3gIGB4f+hdXIYBsDkcxMg6q/vVYIYUJKJ6QJledb/AnxMKAbcOaCMYkCED99/Yx0OTAOU5VlRaHQDsqIFUWgMA6ID+FDoifXicCcja1w3RRZiQGGKIFY/wmiYAQu7pYgzYOciuf/K8qwYBsBiAaaRjxsSRgzo8QoL3SvblOH44mal/xc3K/0/uxYVH1ui9J+hu1oMp2aYRnTNx5ZAcHe1GMQAYm2FacQwgBIMADGo++iPovPlAAAAAElFTkSuQmCC";
	var subscenefav = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAB/0lEQVQ4jW2SO28aQRSF52/MnfkHdv4EWsMKG2eFDSy72Lws5LWIQQ4xGEyKyJIrKufRI+EiUhorkgvSochSmlhp3KRxKheWgoRIe1LMzrB+jHQ11XfOmXOHycJbREf4fUj/GNLrQea7kLkOhNtRd+YNZKYFsXEASjch0g0wA+lbg+4RpHsEkW2H04LYfA25uYCFsw8m/P4T1xc773D+7QcA4O/sH0bjKyxv90DppoKdfYiXddD6nkog/WPlGo6Gb+/ucXt3DwD4+v2ncZXOq4iA13sYO9eBPjry6fACy9s95ezUFZwKQKkgFNBlZduQuY5xHY2vHrxXu9L6HsTaLsRaDSwKi2wbMtNCMBiaFL9+/8GSd2hASgUKXq2Bkjtgwg3hcEW65fanz09FUgHEas3AZFfAorDYOFATRm5/ODcik+ubCFwF2RWQXVYCMtOC1OCj9yYbJ0Yk2TgBJavgdhlkl0HxIlj0Z1G6iSXvEB+/jHE6vAiL2sXk+gYA4HYHCrTLoEQJfGUL7HHL+f6ZcRxdTjC6nAAAprM5KFECxYsG5itbYAZ26pDhfjvvR5jO5kZoOpur+PEiKF4EjyuYWwWw5z6HLsvtDlTsRMm4a5BbBfBYHkw49Wf3S3YF3K4aWEcmywdZPngsD7I8sMWvWsDcrpqiTGyrEMIeeCxv5j91Fyk7QMfG7QAAAABJRU5ErkJggg==";
	var xvidfav = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACZ0lEQVQ4jZ2MO0sjYRhGv18gKNgoimUINuo/sBVBIaBooSwIooiksbIVtRUyElNIeq+NhUQIhMjkAy9xQCYzaIYZb2gSNZmQrEnmbOEqLti4D5zi5XmfI4QQgv+MEEKIQqFAo9H48djzPJ6enhAPDw/U6/X/EjiO80Xguu985O/tui6e5/0zdl2XSqXyRZDLweoqBINQLkOxCHNzOCsr/JqcZHNz83NcKpWYn59ne3sb27YRt7e31Go12NqClhaIRGBjA/x+askkExMTBAIBqtUqAEdHR/h8Po6Pj7EsC2FZFpVKhUathjc7C37/O0tLAESjUTo7O0mn0wAsLCwwMjJCqVTi6uoKYZomr6+vVKtVaqqK19UF3d14jgNANpvF5/OxtraGbdv09vYSiURwXRdd1xG6rpPL5SgWi1R3dvBaW/Ha22kcHlKv13l7e2NqaoqhoSEURaGvr49MJsPz8zOapiE0TeP+/p68bfN7eJi3gQFq/f3Ux8YoFwqUy2Wi0ShtbW309PQQDAbJ5/M8Pj5ydnaGOD09xbZtXlZXqXd08Ly7y2s4TKOpCTcUIp/Po2kafr+f5uZm9vb2uLu74+bmBiklQkpJNpGgNDjIy8wMtm1zk81SGh/HHR3lPp3GcRymp6cJBAIYhoFlWVxfX5NMJhHJZJLLy0uuDg8xT04wDAPTNLlWVbKxGKZpYpomUkoSiQSGYZDJZNB1nXg8jojH45yfn3NxcfFjYrEY4uDgAFVVkVKSSqVIpVKoqvotH72UEikl+/v7iOXlZUKhEOFwmPX1dRRFIRQKfYuiKCiK8vm3uLjIH5+6T7+k6bFTAAAAAElFTkSuQmCC";
	var youtubefav = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACXklEQVQ4jZXMwUuTcRwG8N//sRA9bYjbsB0sNVFnhwXqQVfe9LT3nTawLolWi9bCKKKO+ToS3A5Culy64F1zvCpZ7n0LPIyh+L4ynWy6d/OdY+pb8nSIXvIS7fDheb7w8CXjvmnzVDAszUdXUImpYFga902bydu5BSlXUPDz/LwiuYKCt3MLEpmLcJCVYxwWirC2t2H923dY29twWCj+k6wcI7S0CrLIrWHvQMZuNof7Dx6CdjrxdPwZXr56jb6+W3jD+ODxerHyZR0erxe72Rx2sznsHchY5NZA5qOrENMZiOkMPn6KocNqBff5KyiKxrv3H0BRNBwUjXAkCgdFa1sxncF8dBVkluWwmdrX3LDZsJnax5DLhcXIEoZcrgv97+0sy4HMhKNIiClNd3c3EmIKI6Nj6O8fwCPPE4yMjoGinRi+c/fCdiYcBfGHWGxs7WBjU6rM1g78IRaEbW6B3FgPubauMo31YJtbQJYNBuRtTTjx+3FeLEKNxyGbzBp1/eL9R97WhGWDAYSrq8WRvQOyxQKV5yFbLDgJBFByu3ESCEDleZyGQii53TiLxaDG4yg6HDiyd4CrqwWJmYxQBrqQb2iAKghalhkGqiBovcwwAACV51FmGCgDXYiZjCCsyYg8bUf26hWcCYKWpUkGZ4Kg9dLk7weK5zHyg4PI03awJiNIUK+HSPVg5/o1lPk4ti2XUQgEcJpMoszHNbkXz3GaTOJHOo3MvWGIVA+Cej2Iv7pGinS2IuHsxfbtm/8l4exFpLMV/uoaifh0OvOErkpiLlWhEhO6Ksmn05l/AVuU63rJqr0lAAAAAElFTkSuQmCC";

	// Links display. 1 = Text ONLY, 2 = Favicons ONLY, 3 = Favicons AND Text
	var links_display = 3;
	var results = document.querySelector("DIV.zcm");

	other = document.createElement('div');
	other.setAttribute("style", "margin-bottom:-10px;float: right;width: auto; font-size: small;");
	query = window.location.href.match(/\?q=[^&]*/gi)[0].substr(3);
	query = query.replace(/\+filterui%3[^&^+]*/gi, "");

	if (links_display === 1) {
		links = "Try this search on: " +
			"<a href =\"https://encrypted.google.com/search?tbm=isch&q=" + query + "&tbs=imgo:1\">Google Images</a> - " +
			//"<a href =\"http://www.googleimageripper.com/#!/?search=true&key=" + query + "&page_start=1&safemode=off&tbs=any&silu=yes&autoremove_not_found=yes\">Google Image Ripper</a> - " +
			"<a href =\"https://www.google.com/maps/preview?hl=en&q=" + query + "\">Google Maps</a> - " +
			"<a href =\"http://www.imdb.com/find?q=" + query + "&s=all\">IMDb</a> - " +
			"<a href =\"http://subscene.com/subtitles/title?q=" + query + "\">Subscene</a> - " +
			//"<a href =\"http://www.xvideos.com/?k=" + query + "\">XVideos</a> - " +
			"<a href =\"https://www.youtube.com/results?search_query=" + query + "\">YouTube</a> ";
	} else if (links_display === 2) {
		links = "<div id=\"site_favicons\"\">Try this search on: " +
			"<a href =\"https://encrypted.google.com/search?tbm=isch&q=" + query + "&tbs=imgo:1\" title=\"Google Images\"><img src=\"" + gimgfav + "\" /></a>  " +
			//"<a href =\"http://www.googleimageripper.com/#!/?search=true&key=" + query + "&page_start=1&safemode=off&tbs=any&silu=yes&autoremove_not_found=yes\" title=\"Google Image Ripper\"><img src=\"" + gimgripfav + "\" /></a>  " +
			"<a href =\"https://www.google.com/maps/preview?hl=en&q=" + query + "\" title=\"Google Maps\"><img src=\"" + gmapsfav + "\" /></a>  " +
			"<a href =\"http://www.imdb.com/find?q=" + query + "&s=all\" title=\"IMDb\"><img src=\"" + imdbfav + "\" /></a>  " +
			"<a href =\"http://subscene.com/subtitles/title?q=" + query + "\" title=\"Subscene\"><img src=\"" + subscenefav + "\" /></a>  " +
			//"<a href =\"http://www.xvideos.com/?k=" + query + "\" title=\"XVideos\"><img src=\"" + xvidfav + "\" /></a>  " +
			"<a href =\"https://www.youtube.com/results?search_query=" + query + "\" title=\"YouTube\"><img src=\"" + youtubefav + "\" /></a></div>";
	} else if (links_display === 3) {
		links = "<div id=\"site_favicons\"\">" +
			"<a href =\"https://encrypted.google.com/search?tbm=isch&q=" + query + "&tbs=imgo:1\" title=\"Google Images\"><img src=\"" + gimgfav + "\" />Google Images</a>  " +
			//"<a href =\"http://www.googleimageripper.com/#!/?search=true&key=" + query + "&page_start=1&safemode=off&tbs=any&silu=yes&autoremove_not_found=yes\" title=\"Google Image Ripper\"><img src=\"" + gimgripfav + "\" />Google Image Ripper</a>  " +
			"<a href =\"https://www.google.com/maps/preview?hl=en&q=" + query + "\" title=\"Google Maps\"><img src=\"" + gmapsfav + "\" />Google Maps</a>  " +
			"<a href =\"http://www.imdb.com/find?q=" + query + "&s=all\" title=\"IMDb\"><img src=\"" + imdbfav + "\" />IMDb</a>  " +
			"<a href =\"http://subscene.com/subtitles/title?q=" + query + "\" title=\"Subscene\"><img src=\"" + subscenefav + "\" />Subscene</a>  " +
			//"<a href =\"http://www.xvideos.com/?k=" + query + "\" title=\"XVideos\"><img src=\"" + xvidfav + "\" />XVideos</a>  " +
			"<a href =\"https://www.youtube.com/results?search_query=" + query + "\" title=\"YouTube\"><img src=\"" + youtubefav + "\" />YouTube</a></div>";
	}
	other.innerHTML = links;
	results.parentNode.insertBefore(other, results);
}, false);

GM_addStyle("#site_favicons {margin-bottom:-10px;width: auto;max-width:800px;height: auto;overflow: hidden;z-index:1 !important;}" +
	"#site_favicons a {color: rgb(206,206,206);font-weight: bold;}" +
	"#site_favicons img {display: inline;margin: 0 10px; }");